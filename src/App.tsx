import React, { useState, useEffect } from "react";
import { CaseData, SourceMaterial, SavedPracticeSession, AppealSubmission, AppealEvaluation } from "./types";
import { DEFAULT_CASES } from "./data/defaultCases";
import { INITIAL_MATERIALS } from "./data/initialMaterials";
import { Header, NavTab } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { CaseViewer } from "./components/CaseViewer";
import { AppealEditor } from "./components/AppealEditor";
import { EvaluationView } from "./components/EvaluationView";
import { MaterialsManager } from "./components/MaterialsManager";
import { CaseGenerator } from "./components/CaseGenerator";
import { CompendiumView } from "./components/CompendiumView";
import { HistoryDashboard } from "./components/HistoryDashboard";
import { TomkiewiczBookView } from "./components/TomkiewiczBookView";
import { CheckCircle2, FileText, ArrowLeft, Layers, BookOpen, Sparkles } from "lucide-react";
import { DesignConceptsModal, LayoutConceptId } from "./components/DesignConceptsModal";
import { QuickMaterialUploaderModal } from "./components/QuickMaterialUploaderModal";

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>("trening");
  const [trainingMode, setTrainingMode] = useState<"warsztat" | "ocena">("warsztat");
  const [mobilePane, setMobilePane] = useState<"akta" | "edytor">("edytor");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);
  const [focusMode, setFocusMode] = useState<"split" | "akta" | "edytor">("split");
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(() => {
    const saved = localStorage.getItem("oirp_sidebar_collapsed_notion");
    return saved !== null ? saved === "true" : true; // Default collapsed for Notion / Lex Focus Workspace
  });
  const [isDesignModalOpen, setIsDesignModalOpen] = useState<boolean>(false);
  const [selectedLayoutConcept, setSelectedLayoutConcept] = useState<LayoutConceptId>(() => {
    return "koncepcja-2-studio-fokus";
  });

  useEffect(() => {
    localStorage.setItem("oirp_sidebar_collapsed_notion", sidebarCollapsed.toString());
  }, [sidebarCollapsed]);

  const [cases, setCases] = useState<CaseData[]>(() => {
    const saved = localStorage.getItem("oirp_bydgoszcz_cases_v10");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= DEFAULT_CASES.length) return parsed;
      } catch (e) {
        console.error("Error loading saved cases", e);
      }
    }
    // Also migrate any custom-generated cases from earlier versions
    const prevSaved = localStorage.getItem("oirp_bydgoszcz_cases_v9") || localStorage.getItem("oirp_bydgoszcz_cases_v8") || localStorage.getItem("oirp_bydgoszcz_cases_v6");
    if (prevSaved) {
      try {
        const prevParsed = JSON.parse(prevSaved);
        if (Array.isArray(prevParsed)) {
          const customOnly = prevParsed.filter((c: CaseData) => c.isCustomGenerated);
          if (customOnly.length > 0) {
            return [...DEFAULT_CASES, ...customOnly];
          }
        }
      } catch {
        // ignore
      }
    }
    return DEFAULT_CASES;
  });

  const [currentCase, setCurrentCase] = useState<CaseData>(cases[0]);

  const [materials, setMaterials] = useState<SourceMaterial[]>(() => {
    const saved = localStorage.getItem("apelacja_materials_v5");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= INITIAL_MATERIALS.length) return parsed;
      } catch (e) {
        console.error("Error loading saved materials", e);
      }
    }
    // Preserve custom user-uploaded materials if existing
    const prevSaved = localStorage.getItem("apelacja_materials_v4");
    if (prevSaved) {
      try {
        const prevParsed = JSON.parse(prevSaved);
        if (Array.isArray(prevParsed)) {
          const customUserMaterials = prevParsed.filter((m: SourceMaterial) => !m.id.startsWith("mat-"));
          if (customUserMaterials.length > 0) {
            return [...INITIAL_MATERIALS, ...customUserMaterials];
          }
        }
      } catch {
        // ignore
      }
    }
    return INITIAL_MATERIALS;
  });

  const [sessions, setSessions] = useState<SavedPracticeSession[]>(() => {
    const saved = localStorage.getItem("apelacja_sessions_v4");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {
        console.error("Error loading sessions", e);
      }
    }
    return [];
  });

  const [examDaysLeft, setExamDaysLeft] = useState<number>(() => {
    const saved = localStorage.getItem("apelacja_exam_days");
    return saved ? parseInt(saved, 10) : 21;
  });

  const [currentEvaluation, setCurrentEvaluation] = useState<AppealEvaluation | null>(null);
  const [currentSubmission, setCurrentSubmission] = useState<AppealSubmission | null>(null);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [generatorPreselectedMaterial, setGeneratorPreselectedMaterial] = useState<SourceMaterial | null>(null);
  const [insertedSnippet, setInsertedSnippet] = useState<string | null>(null);
  const [isQuickUploadOpen, setIsQuickUploadOpen] = useState<boolean>(false);

  const handleInsertQuote = (quote: string) => {
    setInsertedSnippet(quote);
    // On mobile, if quote was inserted, switch to editor so user sees it
    setMobilePane("edytor");
  };

  useEffect(() => {
    localStorage.setItem("oirp_bydgoszcz_cases_v9", JSON.stringify(cases));
  }, [cases]);

  useEffect(() => {
    localStorage.setItem("apelacja_materials_v5", JSON.stringify(materials));
  }, [materials]);

  useEffect(() => {
    localStorage.setItem("apelacja_sessions_v4", JSON.stringify(sessions));
  }, [sessions]);

  useEffect(() => {
    localStorage.setItem("apelacja_exam_days", examDaysLeft.toString());
  }, [examDaysLeft]);

  const handleEvaluateAppeal = async (submission: AppealSubmission) => {
    setIsEvaluating(true);
    setCurrentSubmission(submission);

    try {
      const response = await fetch("/api/evaluate-appeal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          caseData: currentCase,
          appealSubmission: submission,
          submission,
          materials,
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Błąd podczas oceny apelacji.");
      }

      const evaluation: AppealEvaluation = await response.json();
      evaluation.evaluatedAt = new Date().toISOString();

      setCurrentEvaluation(evaluation);
      setTrainingMode("ocena");

      const newSession: SavedPracticeSession = {
        id: `sess-${Date.now()}`,
        caseId: currentCase.id,
        caseTitle: currentCase.title,
        caseNumber: currentCase.caseNumber,
        submittedAt: new Date().toISOString(),
        submission,
        evaluation,
      };

      setSessions((prev) => [newSession, ...prev]);
    } catch (error: any) {
      console.error("Evaluation error:", error);
      alert(error.message || "Wystąpił problem podczas sprawdzania apelacji.");
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleSelectCase = (selectedCase: CaseData) => {
    setCurrentCase(selectedCase);
    setCurrentEvaluation(null);
    setCurrentSubmission(null);
    setTrainingMode("warsztat");
  };

  const handleCaseGenerated = (newCase: CaseData) => {
    setCases((prev) => [newCase, ...prev]);
    setCurrentCase(newCase);
    setActiveTab("trening");
    setTrainingMode("warsztat");
    setCurrentEvaluation(null);
    setCurrentSubmission(null);
  };

  const handleAddMaterial = (material: SourceMaterial) => {
    setMaterials((prev) => [material, ...prev]);
  };

  const handleDeleteMaterial = (id: string) => {
    setMaterials((prev) => prev.filter((m) => m.id !== id));
  };

  const handleSelectMaterialForTraining = (mat: SourceMaterial) => {
    setGeneratorPreselectedMaterial(mat);
    setActiveTab("generuj");
  };

  const handleReviewSession = (sess: SavedPracticeSession) => {
    const foundCase = cases.find((c) => c.id === sess.caseId) || currentCase;
    setCurrentCase(foundCase);
    setCurrentSubmission(sess.submission);
    setCurrentEvaluation(sess.evaluation);
    setActiveTab("trening");
    setTrainingMode("ocena");
  };

  const handleNextCase = () => {
    const currentIndex = cases.findIndex((c) => c.id === currentCase.id);
    const nextIndex = (currentIndex + 1) % cases.length;
    handleSelectCase(cases[nextIndex]);
  };

  const averageScore =
    sessions.length > 0
      ? sessions.reduce((acc, s) => acc + s.evaluation.score, 0) / sessions.length
      : 0;

  return (
    <div className="h-screen bg-[#F8F7F4] text-stone-900 font-sans flex antialiased overflow-hidden">
      {/* 1. Left Sidebar Navigation (Desktop permanent/collapsible, Mobile drawer) */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cases={cases}
        currentCase={currentCase}
        onSelectCase={handleSelectCase}
        examDaysLeft={examDaysLeft}
        onUpdateExamDays={(days) => setExamDaysLeft(days)}
        completedCasesCount={sessions.length}
        averageScore={averageScore}
        materialsCount={materials.length}
        isOpenMobile={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
        isCollapsedDesktop={sidebarCollapsed}
        onToggleCollapseDesktop={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* 2. Main Content Viewport */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Sleek Minimalist Top Header */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          cases={cases}
          currentCase={currentCase}
          onSelectCase={handleSelectCase}
          examDaysLeft={examDaysLeft}
          completedCasesCount={sessions.length}
          averageScore={averageScore}
          materialsCount={materials.length}
          onUpdateExamDays={(days) => setExamDaysLeft(days)}
          onToggleSidebarMobile={() => setMobileSidebarOpen(true)}
          onOpenDesignProposals={() => setIsDesignModalOpen(true)}
          focusMode={focusMode}
          onSetFocusMode={setFocusMode}
          isSidebarCollapsed={sidebarCollapsed}
          onToggleSidebarCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          onOpenQuickUpload={() => setIsQuickUploadOpen(true)}
        />

        {/* Main Workspace */}
        <main className={`flex-1 w-full px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 min-w-0 min-h-0 flex flex-col ${activeTab === "trening" ? "overflow-hidden" : "overflow-y-auto"}`}>
        
        {/* Quick Return Bar when browsing other tabs */}
        {activeTab !== "trening" && (
          <div className="mb-4 bg-[#0F172A] text-white px-4 py-2.5 rounded-xl border border-stone-800 flex items-center justify-between shadow-sm shrink-0">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-mono text-amber-500/90 font-bold uppercase tracking-wider text-[10px]">AKTYWNY KAZUS:</span>
              <span className="font-bold text-amber-400 px-2 py-0.5 rounded bg-stone-800 border border-stone-700 font-mono">{currentCase.caseNumber}</span>
              <span className="text-stone-500">•</span>
              <span className="text-stone-200 font-medium truncate max-w-xs">{currentCase.defendant}</span>
            </div>
            <button
              onClick={() => setActiveTab("trening")}
              className="px-3.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-200 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs border border-stone-700"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Wróć do pisania apelacji</span>
            </button>
          </div>
        )}

        {/* TAB 1: Warsztat Apelacji (Kazus & Rozwiązanie) */}
        {activeTab === "trening" && (
          <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
            
            {/* Minimal Sub-header when evaluation is active */}
            {currentEvaluation && (
              <div className="mb-2 flex items-center justify-between bg-white border border-stone-300/90 rounded-xl px-4 py-2 text-xs shadow-2xs shrink-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-stone-500">Ocena dla {currentCase.caseNumber}:</span>
                  <strong className="text-stone-950 font-mono text-sm">{currentEvaluation.score}/20 pkt</strong>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    currentEvaluation.passed ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-rose-50 text-rose-800 border border-rose-200"
                  }`}>
                    {currentEvaluation.passed ? "Zaliczone" : "Do poprawy"}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setTrainingMode("warsztat")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                      trainingMode === "warsztat"
                        ? "bg-blue-600 text-white shadow-xs"
                        : "text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Edytor</span>
                  </button>

                  <button
                    onClick={() => setTrainingMode("ocena")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                      trainingMode === "ocena"
                        ? "bg-blue-600 text-white shadow-xs"
                        : "text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Raport Oceny</span>
                  </button>
                </div>
              </div>
            )}

            {/* Core Split Mode: Kazus (Left) - Rozwiązanie (Right) */}
            {trainingMode === "warsztat" && (
              <div className="flex flex-col flex-1 min-h-0 h-full overflow-hidden">
                
                {/* Mobile / Tablet Segmented Pane Switcher (< lg) */}
                <div className="lg:hidden mb-2 flex rounded-xl p-1 bg-stone-200 border border-stone-300 shrink-0">
                  <button
                    type="button"
                    onClick={() => setMobilePane("akta")}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                      mobilePane === "akta"
                        ? "bg-white text-stone-900 shadow-xs"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>1. Akta sprawy i wyrok</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMobilePane("edytor")}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                      mobilePane === "edytor"
                        ? "bg-white text-stone-900 shadow-xs"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-stone-700" />
                    <span>2. Twoja apelacja (Edytor)</span>
                  </button>
                </div>

                {/* Main Workspace Layout (Supports Split, Full Akta, and Full Edytor) */}
                {focusMode === "split" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 lg:gap-4 flex-1 min-h-0 h-full items-stretch overflow-hidden">
                    {/* Left Column: Case Dossier */}
                    <div className={`h-full min-h-0 flex flex-col overflow-hidden ${mobilePane === "akta" ? "flex" : "hidden lg:flex"}`}>
                      <CaseViewer
                        currentCase={currentCase}
                        onCopyQuote={handleInsertQuote}
                      />
                    </div>

                    {/* Right Column: Drafting Workbench */}
                    <div className={`h-full min-h-0 flex flex-col overflow-hidden ${mobilePane === "edytor" ? "flex" : "hidden lg:flex"}`}>
                      <AppealEditor
                        currentCase={currentCase}
                        onSubmitAppeal={handleEvaluateAppeal}
                        isEvaluating={isEvaluating}
                        insertedSnippet={insertedSnippet}
                      />
                    </div>
                  </div>
                )}

                {focusMode === "akta" && (
                  <div className="h-full min-h-0 flex flex-col w-full">
                    <CaseViewer
                      currentCase={currentCase}
                      onCopyQuote={handleInsertQuote}
                    />
                  </div>
                )}

                {focusMode === "edytor" && (
                  <div className="h-full min-h-0 flex flex-col w-full max-w-5xl mx-auto">
                    <AppealEditor
                      currentCase={currentCase}
                      onSubmitAppeal={handleEvaluateAppeal}
                      isEvaluating={isEvaluating}
                      insertedSnippet={insertedSnippet}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Evaluation Mode: Detailed report */}
            {trainingMode === "ocena" && currentEvaluation && currentSubmission && (
              <div className="flex-1 overflow-y-auto">
                <EvaluationView
                  evaluation={currentEvaluation}
                  currentCase={currentCase}
                  submission={currentSubmission}
                  onTryAgain={() => setTrainingMode("warsztat")}
                  onSelectNextCase={handleNextCase}
                />
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Podręcznik Apelacji (Tomkiewicz 2023) */}
        {activeTab === "ksiazka" && (
          <div className="flex-1">
            <TomkiewiczBookView
              onNavigateToWorkshop={() => setActiveTab("trening")}
            />
          </div>
        )}

        {/* TAB 3: Nowy Kazus AI */}
        {activeTab === "generuj" && (
          <div className="flex-1">
            <CaseGenerator
              onCaseGenerated={handleCaseGenerated}
              availableMaterials={materials}
              preselectedMaterial={generatorPreselectedMaterial}
            />
          </div>
        )}

        {/* TAB 4: Kompendium & Formułki */}
        {activeTab === "kompendium" && (
          <div className="flex-1">
            <CompendiumView />
          </div>
        )}

        {/* TAB 5: Baza Notatek */}
        {activeTab === "materialy" && (
          <div className="flex-1">
            <MaterialsManager
              materials={materials}
              onAddMaterial={handleAddMaterial}
              onDeleteMaterial={handleDeleteMaterial}
              onSelectForTraining={handleSelectMaterialForTraining}
            />
          </div>
        )}

        {/* TAB 6: Historia Prób */}
        {activeTab === "historia" && (
          <div className="flex-1">
            <HistoryDashboard
              sessions={sessions}
              onReviewSession={handleReviewSession}
              onClearHistory={() => setSessions([])}
              examDaysLeft={examDaysLeft}
              onUpdateExamDays={(days) => setExamDaysLeft(days)}
            />
          </div>
        )}
      </main>

      {/* Subtle Minimalist Footer */}
      <footer className="border-t border-slate-200 py-3 text-xs text-slate-500 bg-white mt-auto shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div>
            <strong className="text-slate-900 font-serif font-semibold">LexAlkoholica — Bydgoszcz</strong>
            <span className="text-slate-300 mx-2">•</span>
            <span>Trenażer pisania apelacji karnej</span>
          </div>
          <div className="text-[11px] font-mono text-slate-500">
            Katedra Prawa Karnego • kanon adw. M. Tomkiewicz-Januszewska (2023)
          </div>
        </div>
      </footer>
      </div>

      {/* Visual Design Proposals Modal */}
      <DesignConceptsModal
        isOpen={isDesignModalOpen}
        onClose={() => setIsDesignModalOpen(false)}
        onSelectConcept={(conceptId) => {
          setSelectedLayoutConcept(conceptId);
          localStorage.setItem("oirp_preferred_layout", conceptId);
        }}
      />

      {/* Quick Material Uploader Modal (Direct file & paste) */}
      <QuickMaterialUploaderModal
        isOpen={isQuickUploadOpen}
        onClose={() => setIsQuickUploadOpen(false)}
        onSaveMaterial={handleAddMaterial}
      />
    </div>
  );
}
