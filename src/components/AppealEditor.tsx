import React, { useState, useEffect } from "react";
import { CaseData, AppealSubmission } from "../types";
import {
  Send,
  RotateCcw,
  BookOpen,
  ChevronDown,
  ChevronUp,
  X,
  FileCheck,
  Scale,
  Plus,
  PenTool,
  Check,
  AlertCircle,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";
import { PreflightAuditDrawer } from "./PreflightAuditDrawer";

interface AppealEditorProps {
  currentCase: CaseData;
  onSubmitAppeal: (submission: AppealSubmission) => void;
  isEvaluating: boolean;
  insertedSnippet?: string | null;
}

export const AppealEditor: React.FC<AppealEditorProps> = ({
  currentCase,
  onSubmitAppeal,
  isEvaluating,
  insertedSnippet,
}) => {
  const courtName = currentCase.court ? `wyrok ${currentCase.court}` : "powyższy wyrok";

  const [scope, setScope] = useState<string>(
    `Na podstawie art. 444 § 1 k.p.k. w zw. z art. 425 § 1 i 2 k.p.k. zaskarżam ${courtName} w całości na korzyść oskarżonego ${currentCase.defendant}.`
  );

  const [charges, setCharges] = useState<string>("");
  const [motions, setMotions] = useState<string>("");
  const [justification, setJustification] = useState<string>("");
  const [showJustification, setShowJustification] = useState<boolean>(false);
  const [activeNotice, setActiveNotice] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isAuditOpen, setIsAuditOpen] = useState<boolean>(false);

  useEffect(() => {
    const cName = currentCase.court ? `wyrok ${currentCase.court}` : "powyższy wyrok";
    setScope(
      `Na podstawie art. 444 § 1 k.p.k. w zw. z art. 425 § 1 i 2 k.p.k. zaskarżam ${cName} w całości na korzyść oskarżonego ${currentCase.defendant}.`
    );
  }, [currentCase.id, currentCase.defendant, currentCase.court]);

  useEffect(() => {
    if (insertedSnippet) {
      setCharges((prev) => (prev ? `${prev}\n\n${insertedSnippet}` : insertedSnippet));
      setActiveNotice("Wstawiono fragment z akt sprawy do zarzutów");
      setTimeout(() => setActiveNotice(null), 2500);
    }
  }, [insertedSnippet]);

  const insertSnippet = (target: "charges" | "motions", text: string, label: string) => {
    if (target === "charges") {
      setCharges((prev) => (prev ? `${prev}\n\n${text}` : text));
    } else {
      setMotions((prev) => (prev ? `${prev}\n\n${text}` : text));
    }
    setActiveNotice(`Wstawiono formułę: ${label}`);
    setTimeout(() => setActiveNotice(null), 2200);
  };

  const handleScopePreset = (type: "calosc" | "kara") => {
    const cName = currentCase.court ? `wyrok ${currentCase.court}` : "powyższy wyrok";
    if (type === "calosc") {
      setScope(
        `Na podstawie art. 444 § 1 k.p.k. w zw. z art. 425 § 1 i 2 k.p.k. zaskarżam ${cName} w całości na korzyść oskarżonego ${currentCase.defendant}.`
      );
    } else {
      setScope(
        `Na podstawie art. 444 § 1 k.p.k. w zw. z art. 425 § 1 i 2 k.p.k. zaskarżam ${cName} w części dotyczącej orzeczenia o karze na korzyść oskarżonego ${currentCase.defendant}.`
      );
    }
  };

  const handleLoadTemplate = () => {
    const cName = currentCase.court ? currentCase.court : "Sądu Rejonowego";
    const cNum = currentCase.caseNumber || "II K .../...";
    const def = currentCase.defendant || "oskarżonego";

    setScope(
      `Na podstawie art. 444 § 1 k.p.k. w zw. z art. 425 § 1 i 2 k.p.k. zaskarżam wyrok ${cName} z dnia ... r., sygn. akt ${cNum}, w całości na korzyść oskarżonego ${def}.`
    );

    setCharges(
      `Na podstawie art. 427 § 2 k.p.k. w zw. z art. 438 pkt 2 k.p.k. zaskarżonemu wyrokowi zarzucam:

1. Obrazę przepisów postępowania, mającą wpływ na treść orzeczenia, a mianowicie art. 7 k.p.k. w zw. z art. 410 k.p.k., poprzez przekroczenie granic swobodnej oceny dowodów i dokonanie oceny dowolnej, wbrew zasadom prawidłowego rozumowania oraz wskazań wiedzy i doświadczenia życiowego, polegającej na bezkrytycznym daniu wiary zeznaniom świadka..., przy jednoczesnym odmówieniu wiarygodności spójnym i logicznym wyjaśnieniom oskarżonego...

2. Błąd w ustaleniach faktycznych przyjętych za podstawę orzeczenia (art. 438 pkt 3 k.p.k.), mający wpływ na treść rozstrzygnięcia, polegający na bezpodstawnym przyjęciu, że...

Z ostrożności procesowej – na wypadek nieuwzględnienia powyższych zarzutów procesowych i błędu w faktach:
3. Obrazę przepisów prawa materialnego (art. 438 pkt 1 k.p.k.), a mianowicie art. ... k.k., poprzez jego niewłaściwe zastosowanie polegające na przyjęciu, że zachowanie oskarżonego wyczerpuje znamiona...`
    );

    setMotions(
      `Na podstawie art. 427 § 1 k.p.k. w zw. z art. 437 § 1 i 2 k.p.k. wnoszę o:

1. Zmianę zaskarżonego wyroku poprzez odmienne orzeczenie co do istoty sprawy i uniewinnienie oskarżonego ${def} od zarzucanego mu czynu.

Ewentualnie, w razie nieuwzględnienia powyższego wniosku:
2. Zmianę wyroku w zaskarżonej części poprzez orzeczenie kary łagodniejszego rodzaju...

Ewentualnie:
3. Uchylenie zaskarżonego wyroku i przekazanie sprawy Sądowi I instancji do ponownego rozpoznania.`
    );

    setActiveNotice("Załadowano wzorzec petitum z Kanonu Tomkiewicz");
    setTimeout(() => setActiveNotice(null), 2500);
  };

  const handleApplyAuditFix = (field: "scope" | "charges" | "motions", snippet: string) => {
    if (field === "scope") {
      setScope(snippet);
    } else if (field === "charges") {
      setCharges((prev) => (prev ? `${prev}\n\n${snippet}` : snippet));
    } else if (field === "motions") {
      setMotions((prev) => (prev ? `${prev}\n\n${snippet}` : snippet));
    }
    setActiveNotice("Zastosowano poprawkę kanonu");
    setTimeout(() => setActiveNotice(null), 2500);
  };

  // Quick check for mixed charges error
  const hasMixedCharges =
    (charges.includes("438 pkt 1") || charges.includes("prawa materialnego")) &&
    (charges.includes("438 pkt 3") || charges.includes("ustaleniach faktycznych") || charges.includes("błąd w ustaleniach")) &&
    !charges.toLowerCase().includes("ostrożności") &&
    !charges.toLowerCase().includes("ewentualn");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!charges.trim()) {
      alert("Proszę wpisać zarzuty odwoławcze (art. 438 k.p.k.).");
      return;
    }
    if (!motions.trim()) {
      alert("Proszę wpisać wnioski odwoławcze (art. 437 k.p.k.).");
      return;
    }

    onSubmitAppeal({
      scope,
      charges,
      motions,
      justification,
    });
  };

  return (
    <div className="relative bg-white rounded-xl border border-stone-300 shadow-xs flex flex-col h-full overflow-hidden min-h-0 ring-1 ring-stone-900/5">
      
      {/* 1. Header: Formularz Sporządzenia Apelacji */}
      <div className="px-4 py-3 sm:px-5 sm:py-3.5 border-b border-stone-200 bg-white text-stone-900 flex items-center justify-between gap-3 shrink-0">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-[#0F172A] text-amber-400 inline-flex items-center justify-center font-serif text-xs font-bold shrink-0 shadow-xs border border-stone-800">
              <PenTool className="w-3.5 h-3.5" />
            </span>
            <h3 className="text-sm sm:text-base font-serif font-bold text-stone-950 tracking-tight flex items-center gap-2">
              <span>Edytor Apelacji Obrońcy</span>
            </h3>
            <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded-md bg-stone-100 text-stone-800 border border-stone-300 font-bold">
              Kanon Tomkiewicz
            </span>
          </div>
          <p className="text-[11px] sm:text-xs text-stone-600 mt-1 truncate">
            Wymogi formalne: art. 427 k.p.k. • Zarzuty: art. 438 k.p.k. • Wnioski: art. 437 k.p.k.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Pre-flight Audit Button */}
          <button
            type="button"
            onClick={() => setIsAuditOpen(!isAuditOpen)}
            className={`h-8 px-2.5 rounded-lg border text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-all shadow-xs leading-none ${
              hasMixedCharges
                ? "bg-rose-600 text-white border-rose-600 hover:bg-rose-700 font-bold"
                : isAuditOpen
                ? "bg-stone-900 text-amber-300 border-stone-800 font-bold"
                : "bg-stone-100 hover:bg-stone-200 text-stone-800 border-stone-300"
            }`}
            title="Pre-flight Check / Audyt formalny zgodności z Kanonem Tomkiewicz"
          >
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Audyt Formalny</span>
            {hasMixedCharges && (
              <span className="w-2 h-2 rounded-full bg-white animate-ping shrink-0" />
            )}
          </button>

          {/* Quick Helper Drawer Toggle */}
          <button
            type="button"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="h-8 px-2.5 rounded-lg border border-stone-300 bg-stone-100 hover:bg-stone-200 text-xs text-stone-800 font-semibold inline-flex items-center justify-center gap-1.5 transition-colors shadow-xs leading-none"
            title="Szybka ściągawka z kanonu adw. Tomkiewicz"
          >
            <BookOpen className="w-3.5 h-3.5 shrink-0 text-stone-600" />
            <span className="hidden sm:inline">Ściągawka</span>
          </button>

          {/* Load template */}
          <button
            type="button"
            onClick={handleLoadTemplate}
            className="h-8 px-2.5 rounded-lg border border-stone-300 bg-stone-100 hover:bg-stone-200 text-xs text-stone-800 font-semibold inline-flex items-center justify-center gap-1.5 transition-colors shadow-xs leading-none"
            title="Załaduj wzorzec petitum z kanonu"
          >
            <FileCheck className="w-3.5 h-3.5 shrink-0 text-stone-600" />
            <span className="hidden md:inline">Wzorzec</span>
          </button>

          {/* Reset */}
          <button
            type="button"
            onClick={() => {
              if (confirm("Czy wyczyścić wprowadzoną treść apelacji?")) {
                setCharges("");
                setMotions("");
                setJustification("");
              }
            }}
            className="h-8 w-8 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 border border-stone-300 transition-colors inline-flex items-center justify-center shrink-0"
            title="Wyczyść formularz apelacji"
          >
            <RotateCcw className="w-3.5 h-3.5 shrink-0" />
          </button>
        </div>
      </div>

      {/* Dynamic Action Notification */}
      {activeNotice && (
        <div className="bg-stone-900 text-white text-xs px-4 py-2 font-semibold flex items-center justify-between shrink-0 shadow-xs border-b border-stone-800 animate-in fade-in duration-150">
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{activeNotice}</span>
          </div>
          <button
            onClick={() => setActiveNotice(null)}
            className="text-stone-400 hover:text-white p-0.5 rounded"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Warning Banner if mixed charges detected */}
      {hasMixedCharges && (
        <div className="bg-rose-50 border-b border-rose-300 px-4 py-2.5 text-xs text-rose-950 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
            <span>
              <strong>Krytyczny błąd kanonu:</strong> Wykryto łączenie błędu w ustaleniach faktycznych (art. 438 pkt 3) z zarzutem materialnym (art. 438 pkt 1) bez klauzuli ewentualnej.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsAuditOpen(true)}
            className="text-xs font-bold text-rose-700 underline hover:text-rose-900 shrink-0"
          >
            Napraw w audycie →
          </button>
        </div>
      )}

      {/* 2. Scrollable Drafting Area */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 overflow-y-auto min-h-0 bg-[#F7F6F2] p-3 sm:p-4 space-y-4"
      >
        <div className="space-y-4 max-w-4xl mx-auto">
          
          {/* SEKCJA 1: ZAKRES ZASKARŻENIA */}
          <div className="bg-white p-4 sm:p-5 rounded-lg border border-stone-300/90 border-l-4 border-l-stone-800 shadow-2xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200 flex-wrap gap-2">
              <label className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider inline-flex items-center gap-2">
                <span className="w-5 h-5 rounded-sm bg-[#0F172A] text-amber-300 inline-flex items-center justify-center text-[11px] font-mono font-bold shrink-0 shadow-2xs">
                  1
                </span>
                <span>Zakres zaskarżenia (art. 427 § 1 k.p.k.)</span>
              </label>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handleScopePreset("calosc")}
                  className="h-6 px-2.5 rounded-sm bg-stone-100 hover:bg-stone-200 text-[11px] font-mono font-bold text-stone-800 transition-colors border border-stone-300 shadow-2xs"
                >
                  W całości (winy)
                </button>
                <button
                  type="button"
                  onClick={() => handleScopePreset("kara")}
                  className="h-6 px-2.5 rounded-sm bg-stone-100 hover:bg-stone-200 text-[11px] font-mono font-bold text-stone-800 transition-colors border border-stone-300 shadow-2xs"
                >
                  Tylko co do kary
                </button>
              </div>
            </div>

            <textarea
              rows={2}
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              className="w-full p-3.5 rounded-md border border-stone-300 bg-[#FAF9F5] font-serif text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-stone-800 focus:ring-1 focus:ring-stone-800 leading-relaxed shadow-inner"
              placeholder="Wskaż zaskarżony wyrok i zakres (w całości czy w części)..."
            />
          </div>

          {/* SEKCJA 2: ZARZUTY ODWOŁAWCZE (PETITUM) */}
          <div className="bg-white p-4 sm:p-5 rounded-lg border border-stone-300/90 border-l-4 border-l-stone-800 shadow-2xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200 flex-wrap gap-2">
              <label className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider inline-flex items-center gap-2">
                <span className="w-5 h-5 rounded-sm bg-[#0F172A] text-amber-300 inline-flex items-center justify-center text-[11px] font-mono font-bold shrink-0 shadow-2xs">
                  2
                </span>
                <span>Zarzuty odwoławcze (Petitum apelacji)</span>
              </label>
              <span className="text-[11px] font-mono text-stone-800 bg-stone-100 px-2 py-0.5 rounded-sm border border-stone-300 font-bold shrink-0">
                Główny element oceny (art. 438 k.p.k.)
              </span>
            </div>

            {/* Quick clause helper pills */}
            <div className="space-y-1.5 bg-[#FAF9F5] p-3 rounded-md border border-stone-200">
              <div className="text-[10px] font-mono font-bold text-stone-600 uppercase tracking-wider">
                Szybkie formuły zarzutów z Kanonu:
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    insertSnippet(
                      "charges",
                      `Na podstawie art. 427 § 2 k.p.k. w zw. z art. 438 pkt 2 k.p.k. zaskarżonemu wyrokowi zarzucam obrazę przepisów postępowania, mającą wpływ na treść orzeczenia, a mianowicie art. 7 k.p.k. w zw. z art. 410 k.p.k., poprzez dowolną i wybiórczą ocenę dowodu z..., polegającą na...`,
                      "art. 7 k.p.k."
                    )
                  }
                  className="h-7 px-2.5 rounded-sm bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-800 font-medium text-xs transition-colors shadow-2xs inline-flex items-center justify-center gap-1 leading-none"
                >
                  <Plus className="w-3 h-3 shrink-0 text-purple-600" />
                  <span>art. 7 k.p.k. (dowolna ocena)</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    insertSnippet(
                      "charges",
                      `Na podstawie art. 427 § 2 k.p.k. w zw. z art. 438 pkt 3 k.p.k. zarzucam błąd w ustaleniach faktycznych przyjętych za podstawę orzeczenia, mający wpływ na jego treść, polegający na bezpodstawnym przyjęciu, że...`,
                      "art. 438 pkt 3 (błąd)"
                    )
                  }
                  className="h-7 px-2.5 rounded-sm bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-medium text-xs transition-colors shadow-2xs inline-flex items-center justify-center gap-1 leading-none"
                >
                  <Plus className="w-3 h-3 shrink-0 text-emerald-600" />
                  <span>błąd w ustaleniach faktycznych</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    insertSnippet(
                      "charges",
                      `Z ostrożności procesowej – na wypadek nieuwzględnienia zarzutów naruszenia prawa procesowego i błędu w ustaleniach faktycznych:
Na podstawie art. 427 § 2 k.p.k. w zw. z art. 438 pkt 1 k.p.k. zarzucam obrazę prawa materialnego, tj. art. ... k.k., poprzez jego niezastosowanie / błędną wykładnię polegającą na...`,
                      "zarzut ewentualny art. 438 pkt 1"
                    )
                  }
                  className="h-7 px-2.5 rounded-sm bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold text-xs transition-colors shadow-2xs inline-flex items-center justify-center gap-1 leading-none"
                >
                  <Plus className="w-3 h-3 shrink-0 text-blue-600" />
                  <span>Z ostrożności procesowej (art. 438 pkt 1)</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    insertSnippet(
                      "charges",
                      `Na podstawie art. 427 § 2 k.p.k. w zw. z art. 438 pkt 2 k.p.k. zaskarżonemu wyrokowi zarzucam obrazę przepisów postępowania, mającą wpływ na treść orzeczenia, a mianowicie art. 170 § 1 pkt 2 w zw. z art. 6 k.p.k., poprzez bezpodstawne oddalenie wniosku dowodowego obrońcy o...`,
                      "art. 170 k.p.k."
                    )
                  }
                  className="h-7 px-2.5 rounded-sm bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 font-medium text-xs transition-colors shadow-2xs inline-flex items-center justify-center gap-1 leading-none"
                >
                  <Plus className="w-3 h-3 shrink-0 text-amber-600" />
                  <span>art. 170 § 1 (oddalenie wniosku)</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    insertSnippet(
                      "charges",
                      `Na podstawie art. 439 § 1 pkt ... k.p.k. zaskarżonemu wyrokowi zarzucam bezwzględną przyczynę odwoławczą polegającą na...`,
                      "art. 439 k.p.k."
                    )
                  }
                  className="h-7 px-2.5 rounded-sm bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-800 font-bold text-xs transition-colors shadow-2xs inline-flex items-center justify-center gap-1 leading-none"
                >
                  <Plus className="w-3 h-3 shrink-0 text-rose-600" />
                  <span>art. 439 (bezwzględna)</span>
                </button>
              </div>
            </div>

            <textarea
              rows={9}
              value={charges}
              onChange={(e) => setCharges(e.target.value)}
              className="w-full p-4 rounded-md border border-stone-300 bg-white font-mono text-xs text-stone-900 focus:outline-hidden focus:border-purple-600 focus:ring-1 focus:ring-purple-600 leading-relaxed shadow-inner"
              placeholder="Wpisz zarzuty apelacyjne (np. Na podstawie art. 427 § 2 k.p.k. w zw. z art. 438 pkt 2 k.p.k. zaskarżonemu wyrokowi zarzucam: 1. obrazę przepisów postępowania...)"
            />

            <div className="flex items-center gap-2 text-[11px] text-stone-800 bg-[#FAF9F5] p-3 rounded-md border border-stone-300">
              <AlertCircle className="w-4 h-4 shrink-0 text-[#92400E]" />
              <span>
                <strong>Zasada czystości petitum:</strong> Nigdy nie łącz błędu faktycznego (art. 438 pkt 3) z zarzutem materialnym (art. 438 pkt 1) w jednym zarzucie. Użyj klauzuli ewentualnej.
              </span>
            </div>
          </div>

          {/* SEKCJA 3: WNIOSKI ODWOŁAWCZE (ART. 437 K.P.K.) */}
          <div className="bg-white p-4 sm:p-5 rounded-lg border border-stone-300/90 border-l-4 border-l-stone-800 shadow-2xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200 flex-wrap gap-2">
              <label className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider inline-flex items-center gap-2">
                <span className="w-5 h-5 rounded-sm bg-[#0F172A] text-amber-300 inline-flex items-center justify-center text-[11px] font-mono font-bold shrink-0 shadow-2xs">
                  3
                </span>
                <span>Wnioski odwoławcze (art. 427 § 1 w zw. z art. 437 § 1 i 2 k.p.k.)</span>
              </label>
              <span className="text-[11px] font-mono text-stone-800 bg-stone-100 px-2 py-0.5 rounded-sm border border-stone-300 font-bold shrink-0">
                Prymat orzekania reformatoryjnego
              </span>
            </div>

            {/* Quick motions helper pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#FAF9F5] p-2.5 rounded-md border border-stone-200">
              <span className="text-stone-600 font-mono text-[10px] uppercase shrink-0 font-bold">
                Wstaw wniosek:
              </span>
              <button
                type="button"
                onClick={() =>
                  insertSnippet(
                    "motions",
                    `Na podstawie art. 437 § 1 i 2 k.p.k. wnoszę o zmianę zaskarżonego wyroku poprzez odmienne orzeczenie co do istoty sprawy i uniewinnienie oskarżonego ${currentCase.defendant} od zarzucanego mu czynu.`,
                    "Uniewinnienie"
                  )
                }
                className="h-7 px-2.5 rounded-sm bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-800 font-bold text-xs transition-colors shadow-2xs inline-flex items-center justify-center gap-1 leading-none"
              >
                <Plus className="w-3 h-3 shrink-0 text-amber-600" />
                <span>Zmiana i uniewinnienie (art. 437 § 2)</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  insertSnippet(
                    "motions",
                    `Na podstawie art. 437 § 1 i 2 k.p.k. wnoszę o zmianę wyroku w zaskarżonej części poprzez złagodzenie orzeczonej kary...`,
                    "Złagodzenie kary"
                  )
                }
                className="h-7 px-2.5 rounded-sm bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-800 font-medium text-xs transition-colors shadow-2xs inline-flex items-center justify-center gap-1 leading-none"
              >
                <Plus className="w-3 h-3 shrink-0 text-stone-600" />
                <span>Zmiana co do kary</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  insertSnippet(
                    "motions",
                    `Ewentualnie: na podstawie art. 437 § 2 k.p.k. wnoszę o uchylenie zaskarżonego wyroku i przekazanie sprawy Sądowi I instancji do ponownego rozpoznania.`,
                    "Uchylenie (ewentualnie)"
                  )
                }
                className="h-7 px-2.5 rounded-sm bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-800 font-medium text-xs transition-colors shadow-2xs inline-flex items-center justify-center gap-1 leading-none"
              >
                <Plus className="w-3 h-3 shrink-0 text-stone-600" />
                <span>Ewentualnie: uchylenie</span>
              </button>
            </div>

            <textarea
              rows={4}
              value={motions}
              onChange={(e) => setMotions(e.target.value)}
              className="w-full p-4 rounded-md border border-stone-300 bg-white font-mono text-xs text-stone-900 focus:outline-hidden focus:border-stone-800 focus:ring-1 focus:ring-stone-800 leading-relaxed shadow-inner"
              placeholder="Wpisz wnioski odwoławcze (np. Na podstawie art. 437 § 1 i 2 k.p.k. wnoszę o: 1. zmianę zaskarżonego wyroku...)"
            />
          </div>

          {/* SEKCJA 4: UZASADNIENIE APELACJI (ROZWINIĘCIE ZARZUTÓW) */}
          <div className="bg-white rounded-lg border border-stone-300/90 shadow-2xs overflow-hidden">
            <button
              type="button"
              onClick={() => setShowJustification(!showJustification)}
              className="w-full p-4 text-left flex items-center justify-between bg-[#FAF9F6] hover:bg-stone-100 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-sm bg-[#0F172A] text-amber-300 inline-flex items-center justify-center text-[11px] font-mono font-bold shrink-0">
                  4
                </span>
                <span className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider">
                  Uzasadnienie apelacji (motywy obrończe)
                </span>
                <span className="text-[10px] font-mono text-stone-500 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-sm">
                  Opcjonalne na etapie Petitumu
                </span>
              </div>
              <div className="flex items-center gap-2 text-stone-500 text-xs">
                <span>{showJustification ? "Zwiń" : "Rozwiń edytor"}</span>
                {showJustification ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>
            </button>

            {showJustification && (
              <div className="p-4 sm:p-5 border-t border-stone-200 space-y-3 bg-white">
                <p className="text-xs text-stone-600 leading-relaxed">
                  Rozwiń argumentację podniesionych zarzutów procesowych, wskaż konkretne karty akt z zeznaniami świadków oraz wykaż wpływ naruszenia przepisów postępowania na treść orzeczenia.
                </p>
                <textarea
                  rows={6}
                  value={justification}
                  onChange={(e) => setJustification(e.target.value)}
                  className="w-full p-3.5 rounded-md border border-stone-300 bg-[#FAF9F5] font-serif text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-stone-800 focus:ring-1 focus:ring-stone-800 leading-relaxed shadow-inner"
                  placeholder="Wpisz uzasadnienie zarzutów i wniosków odwoławczych..."
                />
              </div>
            )}
          </div>

        </div>

        {/* 3. Action Bar / Submit Button */}
        <div className="max-w-4xl mx-auto pt-2 pb-6 flex items-center justify-between gap-3 flex-wrap">
          <div className="text-xs text-stone-500 font-sans">
            Sprawdź zgodność z art. 427, 438 i 437 k.p.k. przed wysłaniem do oceny.
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsAuditOpen(true)}
              className="h-10 px-4 rounded-md border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
            >
              <ShieldCheck className="w-4 h-4 text-stone-600" />
              <span>Sprawdź Kanon (Audyt)</span>
            </button>

            <button
              type="submit"
              disabled={isEvaluating}
              className={`h-10 px-6 rounded-md font-serif font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all shadow-md leading-none ${
                isEvaluating
                  ? "bg-stone-300 text-stone-500 cursor-not-allowed"
                  : "bg-[#0F172A] hover:bg-[#1E293B] active:bg-black text-white border border-stone-800 active:scale-[0.99]"
              }`}
            >
              <Send className="w-4 h-4 shrink-0 text-amber-400" />
              <span>{isEvaluating ? "Ocenianie apelacji..." : "Złóż apelację do oceny"}</span>
            </button>
          </div>
        </div>
      </form>

      {/* 4. DRAWER 1: ŚCIĄGAWKA Z KANONU */}
      {isDrawerOpen && (
        <div className="absolute inset-y-0 right-0 w-full sm:w-88 md:w-96 bg-white border-l border-slate-300 shadow-2xl z-30 flex flex-col animate-in slide-in-from-right duration-200">
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between shrink-0 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 shrink-0 text-slate-300" />
              <div>
                <span className="font-serif font-bold text-sm text-white block leading-tight">
                  Kanon Apelacji Tomkiewicz
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  Zasady konstrukcji zarzutów
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="w-7 h-7 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors inline-flex items-center justify-center shrink-0"
              title="Zamknij ściągawkę"
            >
              <X className="w-4 h-4 shrink-0" />
            </button>
          </div>

          <div className="p-4 overflow-y-auto flex-1 space-y-3.5 text-xs leading-relaxed text-slate-800 bg-slate-50/50">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-1.5">
              <div className="font-mono font-bold text-slate-950 uppercase text-[11px]">
                1. Zakaz zarzutów mieszanych (Rozdz. 7.4)
              </div>
              <p className="text-slate-700 text-xs leading-relaxed">
                Błędu w ustaleniach faktycznych (art. 438 pkt 3) nie wolno łączyć z naruszeniem prawa materialnego (art. 438 pkt 1) w jednym zarzucie. Obrazę prawa materialnego można podnieść wyłącznie wtedy, gdy stan faktyczny jest bezsporny, lub z ostrożności procesowej jako zarzut ewentualny.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-1.5">
              <div className="font-mono font-bold text-slate-900 uppercase text-[11px]">
                2. Trójczłonowa formuła art. 7 k.p.k. (Rozdz. 6.2)
              </div>
              <p className="text-slate-700 text-xs leading-relaxed">
                Prawidłowy zarzut musi wskazywać:
                <br />1. Jaki konkretnie dowód oceniono dowolnie;
                <br />2. Jaką regułę naruszono (zasady wiedzy, logiki czy doświadczenia życiowego);
                <br />3. Jaki wpływ miało to na treść wyroku (art. 438 pkt 2).
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-1.5">
              <div className="font-mono font-bold text-slate-900 uppercase text-[11px]">
                3. Prymat orzekania reformatoryjnego (Rozdz. 8)
              </div>
              <p className="text-slate-700 text-xs leading-relaxed">
                Zgodnie z art. 437 § 2 k.p.k. obrońca zawsze w pierwszej kolejności wnosi o zmianę wyroku (uniewinnienie lub złagodzenie kary), a o uchylenie i przekazanie do ponownego rozpoznania jedynie ewentualnie.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-1.5">
              <div className="font-mono font-bold text-slate-900 uppercase text-[11px]">
                4. Gradacja zarzutów (Rozdz. 7.1)
              </div>
              <p className="text-slate-700 text-xs leading-relaxed">
                Prawidłowa kolejność w petitum:
                <br />1. Bezwzględne przyczyny odwoławcze (art. 439 k.p.k.);
                <br />2. Obraza przepisów postępowania (art. 438 pkt 2 k.p.k.);
                <br />3. Błąd w ustaleniach faktycznych (art. 438 pkt 3 k.p.k.);
                <br />4. Obraza prawa materialnego (art. 438 pkt 1 k.p.k.);
                <br />5. Rażąca niewspółmierność kary (art. 438 pkt 4 k.p.k.).
              </p>
            </div>
          </div>

          <div className="p-3 bg-white border-t border-slate-200 shrink-0 text-center">
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="w-full h-9 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center justify-center transition-colors"
            >
              Zamknij ściągawkę
            </button>
          </div>
        </div>
      )}

      {/* 5. DRAWER 2: PRE-FLIGHT AUDIT DRAWER (Zgodność z Kanonem Tomkiewicz) */}
      <PreflightAuditDrawer
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        scope={scope}
        charges={charges}
        motions={motions}
        justification={justification}
        onApplyFix={handleApplyAuditFix}
      />

    </div>
  );
};
