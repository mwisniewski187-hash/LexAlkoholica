import React, { useState, useRef, useEffect } from "react";
import { CaseData } from "../types";
import { ExamTimer } from "./ExamTimer";
import { ParagraphIcon } from "./ParagraphIcon";
import {
  Scale,
  BookOpen,
  ChevronDown,
  Sparkles,
  Award,
  FolderOpen,
  ChevronLeft,
  ChevronRight,
  Plus,
  Calendar,
  Layers,
  FileText,
  Menu,
  PanelLeftClose,
  PanelLeft,
  Columns2,
  Maximize2,
  Edit3,
  Upload,
} from "lucide-react";

export type NavTab = "trening" | "ksiazka" | "materialy" | "generuj" | "historia" | "kompendium";

export interface HeaderProps {
  cases: CaseData[];
  currentCase: CaseData;
  onSelectCase: (caseItem: CaseData) => void;
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  materialsCount?: number;
  completedCasesCount?: number;
  examDaysLeft?: number;
  averageScore?: number;
  onUpdateExamDays?: (days: number) => void;
  onToggleSidebarMobile?: () => void;
  onOpenDesignProposals?: () => void;
  focusMode?: "split" | "akta" | "edytor";
  onSetFocusMode?: (mode: "split" | "akta" | "edytor") => void;
  isSidebarCollapsed?: boolean;
  onToggleSidebarCollapse?: () => void;
  onOpenQuickUpload?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cases,
  currentCase,
  onSelectCase,
  activeTab,
  setActiveTab,
  materialsCount = 0,
  completedCasesCount = 0,
  examDaysLeft: propExamDaysLeft,
  averageScore = 0,
  onUpdateExamDays,
  onToggleSidebarMobile,
  onOpenDesignProposals,
  focusMode = "split",
  onSetFocusMode,
  isSidebarCollapsed = false,
  onToggleSidebarCollapse,
  onOpenQuickUpload,
}) => {
  const [caseMenuOpen, setCaseMenuOpen] = useState(false);
  const [toolsMenuOpen, setToolsMenuOpen] = useState(false);
  const caseMenuRef = useRef<HTMLDivElement>(null);
  const toolsMenuRef = useRef<HTMLDivElement>(null);

  // Exam Countdown State
  const [localExamDaysLeft, setLocalExamDaysLeft] = useState<number>(() => {
    if (typeof propExamDaysLeft === "number") return propExamDaysLeft;
    const saved = localStorage.getItem("lexalkoholica_exam_days");
    return saved ? parseInt(saved, 10) : 12;
  });

  const effectiveExamDays = typeof propExamDaysLeft === "number" ? propExamDaysLeft : localExamDaysLeft;
  const [isEditingDays, setIsEditingDays] = useState(false);
  const [tempDays, setTempDays] = useState(effectiveExamDays.toString());

  const handleSaveDays = () => {
    const parsed = parseInt(tempDays, 10);
    if (!isNaN(parsed) && parsed >= 0) {
      setLocalExamDaysLeft(parsed);
      localStorage.setItem("lexalkoholica_exam_days", parsed.toString());
      if (onUpdateExamDays) {
        onUpdateExamDays(parsed);
      }
    }
    setIsEditingDays(false);
  };

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (caseMenuRef.current && !caseMenuRef.current.contains(event.target as Node)) {
        setCaseMenuOpen(false);
      }
      if (toolsMenuRef.current && !toolsMenuRef.current.contains(event.target as Node)) {
        setToolsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentCaseIndex = cases.findIndex((c) => c.id === currentCase.id);

  const handlePrevCase = () => {
    if (currentCaseIndex > 0) {
      onSelectCase(cases[currentCaseIndex - 1]);
    } else {
      onSelectCase(cases[cases.length - 1]);
    }
  };

  const handleNextCase = () => {
    if (currentCaseIndex < cases.length - 1) {
      onSelectCase(cases[currentCaseIndex + 1]);
    } else {
      onSelectCase(cases[0]);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-xs border-b border-[#E5E3DC] text-stone-900 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="w-full px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-13 gap-2 sm:gap-4">
          
          {/* 1. Left: Sidebar Toggle & Case Navigator (Notion / Lex style) */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {/* Mobile Menu */}
            {onToggleSidebarMobile && (
              <button
                type="button"
                onClick={onToggleSidebarMobile}
                className="md:hidden p-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
                title="Otwórz menu nawigacji"
              >
                <Menu className="w-4.5 h-4.5" />
              </button>
            )}

            {/* Desktop Sidebar Rail Toggle */}
            {onToggleSidebarCollapse && (
              <button
                type="button"
                onClick={onToggleSidebarCollapse}
                className="hidden md:flex p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
                title={isSidebarCollapsed ? "Rozwiń pasek boczny" : "Zwiń pasek boczny (tryb pełnego skupienia)"}
              >
                {isSidebarCollapsed ? (
                  <PanelLeft className="w-4 h-4 text-stone-700" />
                ) : (
                  <PanelLeftClose className="w-4 h-4 text-stone-400" />
                )}
              </button>
            )}

            {/* Quiet Brand Anchor */}
            <button
              onClick={() => setActiveTab("trening")}
              className="hidden sm:flex items-center gap-2 text-left focus:outline-hidden group"
              title="Warsztat LexAlkoholica • Kolokwium Roczne II Rok"
            >
              <div className="w-7 h-7 rounded-lg bg-[#0F172A] text-amber-400 flex items-center justify-center shadow-xs border border-stone-800 transition-all">
                <ParagraphIcon className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <span className="font-serif font-bold text-stone-900 text-sm tracking-tight hidden lg:inline">
                LexAlkoholica
              </span>
            </button>

            <span className="text-stone-300 hidden sm:inline">|</span>

            {/* Case Navigator Pill (Lex style) */}
            <div className="relative flex items-center gap-0.5" ref={caseMenuRef}>
              <button
                onClick={handlePrevCase}
                className="p-1 rounded-md hover:bg-stone-200/60 text-stone-500 hover:text-stone-900 transition-colors"
                title="Poprzedni kazus"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCaseMenuOpen(!caseMenuOpen)}
                className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white hover:bg-stone-50 border border-stone-300 text-xs text-stone-800 transition-colors max-w-[200px] sm:max-w-[280px] md:max-w-xs shadow-2xs group"
              >
                <span className="font-mono font-bold text-xs shrink-0 px-1.5 py-0.5 rounded-sm bg-stone-100 text-stone-800 border border-stone-300">
                  {currentCase.caseNumber}
                </span>
                <span className="text-stone-300">•</span>
                <span className="truncate text-stone-800 font-serif text-xs font-medium">
                  {currentCase.defendant}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400 shrink-0 ml-auto group-hover:text-stone-700 transition-colors" />
              </button>

              <button
                onClick={handleNextCase}
                className="p-1 rounded-md hover:bg-stone-200/60 text-stone-500 hover:text-stone-900 transition-colors"
                title="Następny kazus"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Case Selection Dropdown */}
              {caseMenuOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 sm:w-96 bg-white rounded-xl border border-stone-300 shadow-xl z-50 text-stone-900 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="p-3 bg-[#FAF9F6] border-b border-stone-200 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-800 block">
                        Akta spraw ({cases.length})
                      </span>
                      <span className="text-[11px] text-stone-500">
                        Wybierz kazus do sporządzenia apelacji
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setCaseMenuOpen(false);
                        setActiveTab("generuj");
                      }}
                      className="text-[11px] px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white font-medium flex items-center gap-1 shadow-2xs"
                    >
                      <Plus className="w-3 h-3 text-white" />
                      <span>Nowy kazus</span>
                    </button>
                  </div>

                  <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                    {cases.map((c) => {
                      const isSelected = c.id === currentCase.id;
                      return (
                        <button
                          key={c.id}
                          onClick={() => {
                            onSelectCase(c);
                            setCaseMenuOpen(false);
                            setActiveTab("trening");
                          }}
                          className={`w-full text-left p-3 hover:bg-slate-50 transition-colors flex items-start justify-between gap-2 ${
                            isSelected ? "bg-slate-100/90 border-l-3 border-slate-900" : ""
                          }`}
                        >
                          <div className="space-y-0.5 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="font-mono font-bold text-slate-900 text-xs">
                                {c.caseNumber}
                              </span>
                              <span className="text-slate-300">•</span>
                              <span className="text-xs font-semibold text-slate-800 truncate">
                                {c.defendant}
                              </span>
                            </div>
                            <div className="text-xs text-slate-600 truncate font-serif">
                              {c.title}
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono">
                              {c.topicCategory}
                            </div>
                          </div>

                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold shrink-0 uppercase ${
                            c.difficulty.includes("Kolokwium")
                              ? "bg-slate-900 text-white"
                              : "bg-slate-100 text-slate-800 border border-slate-200"
                          }`}>
                            {c.difficulty}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 2. Center: Segmented Focus Mode Switcher (Notion / Lex style) */}
          {activeTab === "trening" && onSetFocusMode && (
            <div className="hidden md:flex items-center p-0.5 rounded-lg bg-stone-200/70 border border-stone-300 text-xs shadow-2xs">
              <button
                onClick={() => onSetFocusMode("akta")}
                className={`h-7 px-3 rounded-md text-xs font-medium inline-flex items-center justify-center gap-1.5 transition-colors leading-none ${
                  focusMode === "akta"
                    ? "bg-white text-stone-950 font-bold shadow-xs border border-stone-300/80"
                    : "text-stone-600 hover:text-stone-950"
                }`}
                title="Skupienie na lekturze akt sprawy i wyroku"
              >
                <Maximize2 className={`w-3.5 h-3.5 shrink-0 ${focusMode === "akta" ? "text-stone-900" : "text-stone-500"}`} />
                <span>Tylko Akta</span>
              </button>

              <button
                onClick={() => onSetFocusMode("split")}
                className={`h-7 px-3 rounded-md text-xs font-medium inline-flex items-center justify-center gap-1.5 transition-colors leading-none ${
                  focusMode === "split"
                    ? "bg-white text-stone-950 font-bold shadow-xs border border-stone-300/80"
                    : "text-stone-600 hover:text-stone-950"
                }`}
                title="Widok roboczy 50:50 (Akta po lewej, Apelacja po prawej)"
              >
                <Columns2 className={`w-3.5 h-3.5 shrink-0 ${focusMode === "split" ? "text-stone-900" : "text-stone-500"}`} />
                <span>Podział 50:50</span>
              </button>

              <button
                onClick={() => onSetFocusMode("edytor")}
                className={`h-7 px-3 rounded-md text-xs font-medium inline-flex items-center justify-center gap-1.5 transition-colors leading-none ${
                  focusMode === "edytor"
                    ? "bg-white text-stone-950 font-bold shadow-xs border border-stone-300/80"
                    : "text-stone-600 hover:text-stone-950"
                }`}
                title="Skupienie na pisaniu apelacji i petitum"
              >
                <Edit3 className={`w-3.5 h-3.5 shrink-0 ${focusMode === "edytor" ? "text-stone-900" : "text-stone-500"}`} />
                <span>Tylko Apelacja</span>
              </button>
            </div>
          )}

          {/* 3. Center-Right: Exam Timer (360 min) */}
          <div className="hidden sm:flex items-center shrink-0">
            <ExamTimer />
          </div>

          {/* 4. Right: Quiet Actions & Knowledge Base */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Quick Upload Button directly in header */}
            <button
              onClick={() => onOpenQuickUpload?.()}
              className="h-8 px-3 rounded-lg text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-all leading-none bg-[#0F172A] hover:bg-stone-800 text-stone-100 shadow-2xs border border-stone-800"
              title="Wgraj materiały ze swojego komputera lub wklej notatki bez limitu czatu"
            >
              <Upload className="w-3.5 h-3.5 text-stone-300 shrink-0" />
              <span>Wgraj Materiały</span>
            </button>

            {/* Direct Kanon Link */}
            <button
              onClick={() => setActiveTab("ksiazka")}
              className={`h-8 px-3 rounded-lg text-xs font-medium inline-flex items-center justify-center gap-1.5 transition-colors leading-none border ${
                activeTab === "ksiazka"
                  ? "bg-[#0F172A] border-[#0F172A] text-white font-semibold shadow-xs"
                  : "bg-white border-stone-300 hover:bg-stone-50 text-stone-800"
              }`}
              title="Kanon apelacji karnej (adw. Marta Tomkiewicz-Januszewska)"
            >
              <BookOpen className={`w-3.5 h-3.5 shrink-0 ${activeTab === "ksiazka" ? "text-amber-300" : "text-stone-600"}`} />
              <span className="hidden sm:inline">Kanon Tomkiewicz</span>
            </button>

            {/* Knowledge Base & Tools Menu */}
            <div className="relative" ref={toolsMenuRef}>
              <button
                onClick={() => setToolsMenuOpen(!toolsMenuOpen)}
                className={`h-8 px-3 rounded-lg text-xs font-medium inline-flex items-center justify-center gap-1.5 border transition-colors leading-none ${
                  activeTab !== "trening" && activeTab !== "ksiazka"
                    ? "bg-stone-100 border-stone-400 text-stone-950 font-semibold"
                    : "bg-white border-stone-300 hover:bg-stone-50 text-stone-800"
                }`}
                title="Narzędzia i moduły pomocnicze"
              >
                <Layers className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                <span className="hidden lg:inline">Baza Wiedzy</span>
                <ChevronDown className="w-3 h-3 text-stone-500 shrink-0" />
              </button>

              {toolsMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 sm:w-72 bg-white rounded-xl border border-stone-300 shadow-xl z-50 text-stone-900 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3.5 py-2.5 bg-[#FAF9F6] border-b border-stone-200">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-600 block">
                      Baza Wiedzy & Narzędzia
                    </span>
                  </div>

                  <div className="p-1.5 space-y-0.5">
                    <button
                      onClick={() => {
                        setActiveTab("kompendium");
                        setToolsMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        activeTab === "kompendium"
                          ? "bg-stone-100 font-bold text-stone-950"
                          : "hover:bg-stone-50 text-stone-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-md bg-stone-100 border border-stone-200 text-stone-700 flex items-center justify-center shrink-0">
                          <Scale className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-stone-900">Kompendium & Formułki</div>
                          <div className="text-[10px] text-stone-500 font-sans">
                            Wzorce zarzutów, gradacja, art. 7 k.p.k.
                          </div>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setActiveTab("materialy");
                        setToolsMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        activeTab === "materialy"
                          ? "bg-stone-100 font-bold text-stone-950"
                          : "hover:bg-stone-50 text-stone-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-md bg-stone-100 border border-stone-200 text-stone-700 flex items-center justify-center shrink-0">
                          <FolderOpen className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-stone-900">Baza Notatek z Aplikacji</div>
                          <div className="text-[10px] text-stone-500 font-sans">
                            Pliki z zajęć OIRP, orzecznictwo ({materialsCount})
                          </div>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setActiveTab("generuj");
                        setToolsMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        activeTab === "generuj"
                          ? "bg-stone-100 font-bold text-stone-950"
                          : "hover:bg-stone-50 text-stone-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-md bg-stone-100 border border-stone-200 text-stone-700 flex items-center justify-center shrink-0">
                          <Sparkles className="w-4 h-4 text-[#B45309]" />
                        </div>
                        <div>
                          <div className="font-semibold text-stone-900">Generator Kazusów AI</div>
                          <div className="text-[10px] text-stone-500 font-sans">
                            Stwórz nowy stan faktyczny z węzłami
                          </div>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setActiveTab("historia");
                        setToolsMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        activeTab === "historia"
                          ? "bg-stone-100 font-bold text-stone-950"
                          : "hover:bg-stone-50 text-stone-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-md bg-stone-100 border border-stone-200 text-stone-700 flex items-center justify-center shrink-0">
                          <Award className="w-4 h-4 text-stone-700" />
                        </div>
                        <div>
                          <div className="font-semibold text-stone-900">Historia Prób & Wyniki</div>
                          <div className="text-[10px] text-stone-500 font-sans">
                            Prace ocenione: {completedCasesCount}
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Days to Kolokwium */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FAF9F5] border border-stone-300 text-xs text-stone-800 shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-stone-600 shrink-0" />
              <span className="text-[10px] font-mono text-stone-600 uppercase tracking-wider hidden lg:inline">Kolokwium:</span>
              {isEditingDays ? (
                <input
                  type="number"
                  value={tempDays}
                  onChange={(e) => setTempDays(e.target.value)}
                  onBlur={handleSaveDays}
                  onKeyDown={(e) => e.key === "Enter" && handleSaveDays()}
                  autoFocus
                  className="w-10 px-1 py-0.5 text-xs font-mono font-bold bg-white text-stone-900 border border-stone-400 rounded"
                />
              ) : (
                <button
                  onClick={() => setIsEditingDays(true)}
                  className="hover:text-stone-950 font-serif text-xs font-bold transition-colors"
                  title="Dni do kolokwium rocznego (II rok) - kliknij, aby edytować"
                >
                  {effectiveExamDays} dni
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};
