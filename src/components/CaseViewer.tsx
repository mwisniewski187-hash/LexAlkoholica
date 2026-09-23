import React, { useState } from "react";
import { CaseData } from "../types";
import { ParagraphIcon } from "./ParagraphIcon";
import {
  Gavel,
  FileText,
  AlertTriangle,
  Copy,
  Check,
  Printer,
  Scale,
  ScrollText,
  Landmark,
  ShieldAlert,
  Layers,
  ArrowUpDown,
  Plus,
  X,
  BookOpen,
  HelpCircle,
} from "lucide-react";
import { ExamDossierModal } from "./ExamDossierModal";

interface CaseViewerProps {
  currentCase: CaseData;
  onCopyQuote?: (text: string) => void;
}

export type TabKey =
  | "akt_oskarzenia"
  | "akta_sledztwo"
  | "sad_I_instancji"
  | "wyrok_uzasadnienie"
  | "wszystko";

export const CaseViewer: React.FC<CaseViewerProps> = ({
  currentCase,
  onCopyQuote,
}) => {
  const [readingOrder, setReadingOrder] = useState<"chronological" | "exam_reverse">("chronological");
  const [activeTab, setActiveTab] = useState<TabKey>("akta_sledztwo");
  const [isInspectorOpen, setIsInspectorOpen] = useState<boolean>(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [showExamPdfModal, setShowExamPdfModal] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<"normal" | "large" | "xlarge">("normal");

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard?.writeText(text);
    if (onCopyQuote) {
      onCopyQuote(text);
    }
    setCopiedSection(key);
    setTimeout(() => setCopiedSection(null), 1800);
  };

  const handleInsertToCharge = (text: string, source: string, folio: string, key: string) => {
    const formatted = `[Dowód z akt sprawy: ${source}, ${folio}]:\n„${text.trim()}”`;
    if (onCopyQuote) {
      onCopyQuote(formatted);
    } else {
      navigator.clipboard?.writeText(formatted);
    }
    setCopiedSection(`charge-${key}`);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case "large":
        return "text-base sm:text-lg leading-8";
      case "xlarge":
        return "text-lg sm:text-xl leading-9";
      default:
        return "text-sm sm:text-base leading-7";
    }
  };

  const handleToggleReadingOrder = () => {
    const nextOrder = readingOrder === "chronological" ? "exam_reverse" : "chronological";
    setReadingOrder(nextOrder);
    if (nextOrder === "exam_reverse" && activeTab === "akta_sledztwo") {
      setActiveTab("wyrok_uzasadnienie");
    } else if (nextOrder === "chronological" && activeTab === "wyrok_uzasadnienie") {
      setActiveTab("akta_sledztwo");
    }
  };

  // Render Helper for Section Buttons
  const renderActionButtons = (text: string, title: string, folio: string, key: string) => (
    <div className="flex items-center gap-1.5 shrink-0">
      <button
        type="button"
        onClick={() => handleCopy(text, key)}
        className="h-7 px-2 rounded-md border border-stone-300 bg-white hover:bg-stone-100 text-xs text-stone-700 hover:text-stone-950 inline-flex items-center justify-center gap-1 transition-colors leading-none shadow-2xs"
        title="Kopiuj ten fragment do schowka"
      >
        {copiedSection === key ? (
          <Check className="w-3 h-3 shrink-0 text-emerald-700" />
        ) : (
          <Copy className="w-3 h-3 shrink-0 text-stone-400" />
        )}
        <span className="text-[11px] font-medium">Kopiuj</span>
      </button>

      <button
        type="button"
        onClick={() => handleInsertToCharge(text, title, folio, key)}
        className="h-7 px-2.5 rounded-md border border-stone-800 bg-[#0F172A] hover:bg-[#1E293B] text-xs text-white font-semibold inline-flex items-center justify-center gap-1 transition-colors leading-none shadow-xs"
        title="Wstaw ten fragment z sygnaturą karty akt bezpośrednio do edytora zarzutów apelacji"
      >
        {copiedSection === `charge-${key}` ? (
          <>
            <Check className="w-3 h-3 shrink-0 text-amber-300" />
            <span className="text-[11px] text-amber-300 font-bold">Wstawiono!</span>
          </>
        ) : (
          <>
            <Plus className="w-3 h-3 shrink-0 text-amber-400" />
            <span className="text-[11px]">Wstaw do zarzutu ({folio})</span>
          </>
        )}
      </button>
    </div>
  );

  // Helpers to clean up conflicting section numbers from raw text
  const cleanIndictmentText = (text?: string) => {
    if (!text) return "";
    return text.replace(/^3\.\s*AKT\s*OSKARŻENIA\s*:?\s*/i, "").trim();
  };

  const cleanCircumstancesText = (text?: string) => {
    if (!text) return "";
    return text.replace(/^1\.\s*OKOLICZNOŚCI\s*POPEŁNIENIA\s*CZYNU[^\n]*\n+/i, "").trim();
  };

  const cleanPretrialText = (text?: string) => {
    if (!text) return "";
    return text.replace(/^2\.\s*POSTĘPOWANIE\s*PRZYGOTOWAWCZE[^\n]*\n+/i, "").trim();
  };

  const cleanCourtProceedingsText = (text?: string) => {
    if (!text) return "";
    return text.replace(/^4\.\s*POSTĘPOWANIE\s*PRZED\s*SĄDEM\s*I\s*INSTANCJI[^\n]*\n+/i, "").trim();
  };

  // Sub-components for dossier sections with classic editorial styling
  const renderIndictmentCard = () => (
    currentCase.indictment ? (
      <div className="bg-white rounded-lg border border-stone-300/90 border-l-4 border-l-stone-800 p-4 sm:p-5 shadow-2xs space-y-3">
        <div className="flex items-center justify-between pb-3 border-b border-stone-200 flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#0F172A] text-amber-400 inline-flex items-center justify-center shrink-0 shadow-xs border border-stone-800">
              <ScrollText className="w-4 h-4 text-amber-400 shrink-0" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-serif font-bold text-sm sm:text-base text-stone-950">
                  2. Akt Oskarżenia Prokuratury
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-stone-100 text-stone-800 font-bold border border-stone-300">
                  k. 20–25
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-sans">
                Zarzucany czyn, kwalifikacja prawna i tezy oskarżenia publicznego
              </p>
            </div>
          </div>
          {renderActionButtons(currentCase.indictment, "Akt oskarżenia", "k. 20–25", "akt_oskarzenia")}
        </div>

        <div className={`font-serif text-stone-900 whitespace-pre-line p-4 bg-[#FAF9F5] rounded-md border border-stone-200/90 ${getFontSizeClass()}`}>
          {cleanIndictmentText(currentCase.indictment)}
        </div>
      </div>
    ) : null
  );

  const renderPretrialCard = () => (
    (currentCase.circumstancesOfAct || currentCase.pretrialProceedings) ? (
      <div className="space-y-4">
        {currentCase.circumstancesOfAct && (
          <div className="bg-white rounded-lg border border-stone-300/90 border-l-4 border-l-[#78716C] p-4 sm:p-5 shadow-2xs space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 flex-wrap gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-md bg-[#0F172A] text-white inline-flex items-center justify-center shrink-0 shadow-2xs">
                  <ShieldAlert className="w-4 h-4 text-stone-300 shrink-0" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif font-bold text-sm sm:text-base text-stone-950">
                      1.1. Okoliczności Czynu (Tempore Criminis)
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-stone-100 text-stone-800 border border-stone-300 font-bold">
                      k. 1–15
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-500 font-sans">
                    Przebieg zdarzenia zrekonstruowany w toku śledztwa
                  </p>
                </div>
              </div>
              {renderActionButtons(currentCase.circumstancesOfAct, "Okoliczności czynu", "k. 1–15", "okolicznosci")}
            </div>
            <div className={`font-serif text-stone-900 whitespace-pre-line p-4 bg-[#FAF9F5] rounded-md border border-stone-200/90 ${getFontSizeClass()}`}>
              {cleanCircumstancesText(currentCase.circumstancesOfAct)}
            </div>
          </div>
        )}

        {currentCase.pretrialProceedings && (
          <div className="bg-white rounded-lg border border-stone-300/90 border-l-4 border-l-[#78716C] p-4 sm:p-5 shadow-2xs space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 flex-wrap gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-md bg-[#0F172A] text-white inline-flex items-center justify-center shrink-0 shadow-2xs">
                  <FileText className="w-4 h-4 text-stone-300 shrink-0" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif font-bold text-sm sm:text-base text-stone-950">
                      1.2. Postępowanie Przygotowawcze (Śledztwo)
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-stone-100 text-stone-800 border border-stone-300 font-bold">
                      k. 16–19
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-500 font-sans">
                    Ekspertyzy, oględziny, protokoły przesłuchań i czynności niepowtarzalne
                  </p>
                </div>
              </div>
              {renderActionButtons(currentCase.pretrialProceedings, "Protokół śledztwa", "k. 16–19", "przygotowawcze")}
            </div>
            <div className={`font-serif text-stone-900 whitespace-pre-line p-4 bg-[#FAF9F5] rounded-md border border-stone-200/90 ${getFontSizeClass()}`}>
              {cleanPretrialText(currentCase.pretrialProceedings)}
            </div>
          </div>
        )}
      </div>
    ) : null
  );

  const renderCourtProceedingsCard = () => (
    currentCase.courtProceedings ? (
      <div className="bg-white rounded-lg border border-stone-300/90 border-l-4 border-l-[#475569] p-4 sm:p-5 shadow-2xs space-y-3">
        <div className="flex items-center justify-between pb-3 border-b border-stone-200 flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#0F172A] text-white inline-flex items-center justify-center shrink-0 shadow-2xs">
              <Landmark className="w-4 h-4 text-stone-300 shrink-0" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-serif font-bold text-sm sm:text-base text-stone-950">
                  3. Przebieg Rozprawy Głównej (Sąd I Instancji)
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-stone-100 text-stone-800 font-bold border border-stone-300">
                  k. 36–58
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-sans">
                Zeznania świadków, wnioski dowodowe obrony i postanowienia sądu (baza zarzutów z art. 170 § 1 k.p.k.)
              </p>
            </div>
          </div>
          {renderActionButtons(currentCase.courtProceedings, "Protokół rozprawy", "k. 36–58", "sad_I_instancji")}
        </div>

        <div className={`font-serif text-stone-900 whitespace-pre-line p-4 bg-[#FAF9F5] rounded-md border border-stone-200/90 ${getFontSizeClass()}`}>
          {cleanCourtProceedingsText(currentCase.courtProceedings)}
        </div>
      </div>
    ) : null
  );

  const renderVerdictCard = () => (
    <div className="space-y-4">
      {/* 4.1. Sentencja Wyroku */}
      <div className="bg-white rounded-lg border border-stone-300/90 border-l-4 border-l-[#881337] shadow-xs overflow-hidden">
        <div className="px-4 py-3 bg-[#1C1917] text-white flex items-center justify-between gap-3 border-b border-stone-800 flex-wrap">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-md bg-stone-800 border border-stone-700 text-amber-200 inline-flex items-center justify-center shrink-0 shadow-2xs">
              <Scale className="w-4 h-4" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-serif font-bold text-sm sm:text-base text-white tracking-wide">
                  4.1. Wyrok Sądu I Instancji — Sentencja Orzeczenia
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-stone-800 text-amber-200 border border-stone-700 font-bold">
                  k. 59–61
                </span>
              </div>
              <p className="text-[11px] text-stone-400 font-sans">
                {currentCase.court} • Sygn. akt {currentCase.caseNumber}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => handleCopy(currentCase.verdictSentence, "wyrok_sentencja")}
              className="h-7 px-2.5 rounded-md border border-stone-700 bg-stone-800 hover:bg-stone-700 text-xs text-stone-200 inline-flex items-center justify-center gap-1 transition-colors leading-none"
            >
              {copiedSection === "wyrok_sentencja" ? (
                <Check className="w-3 h-3 shrink-0 text-emerald-400" />
              ) : (
                <Copy className="w-3 h-3 shrink-0 text-stone-400" />
              )}
              <span className="text-[11px]">Kopiuj</span>
            </button>

            <button
              type="button"
              onClick={() => handleInsertToCharge(currentCase.verdictSentence, "Sentencja wyroku", "k. 59–61", "wyrok_sentencja")}
              className="h-7 px-2.5 rounded-md border border-[#881337] bg-[#881337] hover:bg-[#700f2d] text-xs text-white font-semibold inline-flex items-center justify-center gap-1 transition-colors leading-none shadow-2xs"
            >
              {copiedSection === "charge-wyrok_sentencja" ? (
                <>
                  <Check className="w-3 h-3 shrink-0 text-emerald-300" />
                  <span className="text-[11px] text-white font-bold">Wstawiono!</span>
                </>
              ) : (
                <>
                  <Plus className="w-3 h-3 shrink-0 text-amber-200" />
                  <span className="text-[11px]">Wstaw do zarzutu (k. 59)</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className={`p-4 sm:p-5 bg-[#FAF9F5] font-serif text-stone-900 whitespace-pre-line border-b border-stone-200 ${getFontSizeClass()}`}>
          {currentCase.verdictSentence}
        </div>
      </div>

      {/* 4.2. Oficjalne Uzasadnienie UK 1 */}
      <div className="bg-white rounded-lg border border-stone-300/90 border-l-4 border-l-[#881337] shadow-2xs p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-serif font-bold text-sm sm:text-base text-stone-950">
                4.2. Uzasadnienie Wyroku (Formularz UK 1)
              </h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-rose-50 text-rose-800 font-bold border border-rose-200">
                k. 62–75
              </span>
            </div>
            <p className="text-[11px] text-stone-500 font-sans">
              Oficjalne rubryki uzasadnienia orzeczenia sądu I instancji
            </p>
          </div>
          <span className="font-mono text-[11px] px-2.5 py-1 rounded-sm bg-stone-100 text-stone-800 border border-stone-300 font-bold shrink-0">
            Formularz UK 1
          </span>
        </div>

        {/* Rubryka 1: Ustalenia Faktyczne */}
        <div className="rounded-md border border-stone-200 bg-[#FAF9F5] p-4 space-y-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200 flex-wrap gap-2">
            <h5 className="font-mono font-bold text-xs uppercase tracking-wider text-stone-900 inline-flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-rose-700 text-white inline-flex items-center justify-center text-[11px] font-mono font-bold shrink-0">
                1
              </span>
              <span>Ustalenie Faktów (UK 1 pkt 1.1)</span>
            </h5>
            {renderActionButtons(currentCase.justificationFacts, "Ustalenia faktyczne UK 1", "k. 62–66", "fakty")}
          </div>
          <div className={`font-serif text-stone-800 whitespace-pre-line pl-1 ${getFontSizeClass()}`}>
            {currentCase.justificationFacts}
          </div>
        </div>

        {/* Rubryka 2: Ocena Dowodów (art. 7 i 410 kpk) */}
        <div className="rounded-md border border-stone-200 bg-[#FAF9F5] p-4 space-y-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200 flex-wrap gap-2">
            <h5 className="font-mono font-bold text-xs uppercase tracking-wider text-stone-900 inline-flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-[#0F172A] text-white inline-flex items-center justify-center text-[11px] font-mono font-bold shrink-0">
                2
              </span>
              <span>Ocena Dowodów Sądu (UK 1 pkt 2.1 — art. 7 i 410 k.p.k.)</span>
            </h5>
            {renderActionButtons(currentCase.justificationEvidence, "Ocena dowodów UK 1", "k. 67–71", "dowody")}
          </div>
          <div className={`font-serif text-stone-800 whitespace-pre-line pl-1 ${getFontSizeClass()}`}>
            {currentCase.justificationEvidence}
          </div>
        </div>

        {/* Rubryka 3: Wywód Prawny i Wymiar Kary */}
        <div className="rounded-md border border-stone-200 bg-[#FAF9F5] p-4 space-y-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200 flex-wrap gap-2">
            <h5 className="font-mono font-bold text-xs uppercase tracking-wider text-stone-900 inline-flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-[#0F172A] text-white inline-flex items-center justify-center text-[11px] font-mono font-bold shrink-0">
                3
              </span>
              <span>Kwalifikacja Prawna i Dyrektywy Wymiaru Kary (UK 1 pkt 3 & 4)</span>
            </h5>
            {renderActionButtons(currentCase.justificationLegal, "Wywód prawny UK 1", "k. 72–75", "prawo")}
          </div>
          <div className={`font-serif text-stone-800 whitespace-pre-line pl-1 ${getFontSizeClass()}`}>
            {currentCase.justificationLegal}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative bg-white rounded-xl border border-stone-300 shadow-xs flex flex-col h-full overflow-hidden min-h-0 ring-1 ring-stone-900/5">
      
      {/* 1. Header (Official Court Dossier / Akta Sprawy) */}
      <div className="px-4 py-3 sm:px-5 sm:py-3.5 border-b border-stone-200 bg-white text-stone-900 flex items-center justify-between gap-3 shrink-0">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="w-7 h-7 rounded-md bg-[#0F172A] text-amber-400 inline-flex items-center justify-center shrink-0 shadow-xs border border-stone-800">
              <ParagraphIcon className="w-3.5 h-3.5 text-amber-400" />
            </span>
            <h3 className="text-sm sm:text-base font-serif font-bold text-stone-950 tracking-tight flex items-center gap-2">
              <span>Akta Sprawy i Orzeczenie</span>
            </h3>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-stone-100 text-stone-800 border border-stone-300 font-bold tracking-wide shrink-0">
              {currentCase.caseNumber}
            </span>
            <span className="hidden md:inline-flex items-center text-[11px] font-sans text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md border border-stone-200 font-medium truncate max-w-[200px]">
              {currentCase.court}
            </span>
          </div>
          <p className="text-[11px] sm:text-xs text-stone-600 mt-1 flex items-center gap-1.5 flex-wrap">
            <span className="text-stone-400">Oskarżony:</span>
            <strong className="text-stone-950 font-semibold">{currentCase.defendant}</strong>
            <span className="text-stone-400">•</span>
            <span className="text-stone-400">Rola:</span>
            <span className="text-stone-800 font-medium">{currentCase.role}</span>
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Font size adjuster */}
          <div className="hidden sm:inline-flex items-center h-8 border border-stone-300 rounded-lg bg-stone-100 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setFontSize("normal")}
              className={`h-6 px-2 rounded text-[11px] font-bold transition-colors inline-flex items-center justify-center leading-none ${
                fontSize === "normal" ? "bg-white text-stone-950 shadow-xs border border-stone-300/80" : "text-stone-600 hover:text-stone-950"
              }`}
              title="Standardowa czcionka"
            >
              A
            </button>
            <button
              type="button"
              onClick={() => setFontSize("large")}
              className={`h-6 px-2 rounded text-[11px] font-bold transition-colors inline-flex items-center justify-center leading-none ${
                fontSize === "large" ? "bg-white text-stone-950 shadow-xs border border-stone-300/80" : "text-stone-600 hover:text-stone-950"
              }`}
              title="Powiększona czcionka akt"
            >
              A+
            </button>
            <button
              type="button"
              onClick={() => setFontSize("xlarge")}
              className={`h-6 px-2 rounded text-[11px] font-bold transition-colors inline-flex items-center justify-center leading-none ${
                fontSize === "xlarge" ? "bg-white text-stone-950 shadow-xs border border-stone-300/80" : "text-stone-600 hover:text-stone-950"
              }`}
              title="Maksymalna czcionka akt"
            >
              A++
            </button>
          </div>

          {/* Węzły prawne toggle */}
          <button
            type="button"
            onClick={() => setIsInspectorOpen(!isInspectorOpen)}
            className={`h-8 px-2.5 rounded-lg border text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-all shadow-xs leading-none ${
              isInspectorOpen
                ? "bg-amber-500 hover:bg-amber-600 text-white border-amber-500 font-bold"
                : "bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300"
            }`}
            title="Węzły prawne i potencjalne zarzuty w kazusie"
          >
            <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-amber-700" />
            <span className="hidden md:inline font-medium">Węzły prawne</span>
            <span className={`font-mono text-[10px] w-4.5 h-4.5 rounded-full inline-flex items-center justify-center font-bold ${
              isInspectorOpen ? "bg-white text-amber-900" : "bg-amber-200/80 text-amber-950 border border-amber-300"
            }`}>
              {currentCase.keyIssues.length}
            </span>
          </button>

          {/* Format A4 / PDF Button */}
          <button
            type="button"
            onClick={() => setShowExamPdfModal(true)}
            className="h-8 px-3 rounded-lg border border-stone-300 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors shadow-xs leading-none"
            title="Drukuj / Pełne akta sprawy w formacie A4 (Kolokwium OIRP)"
          >
            <Printer className="w-3.5 h-3.5 shrink-0 text-stone-600" />
            <span className="hidden sm:inline">Druk A4</span>
          </button>
        </div>
      </div>

      {/* 2. SUB-TAB BAR: Segregator akt z przełącznikiem porządku czytania */}
      <div className="border-b border-[#E5E3DC] bg-[#FAF9F6] px-2.5 py-1.5 flex items-center justify-between gap-1 overflow-x-auto shrink-0 no-scrollbar text-xs">
        <div className="flex items-center gap-1.5 min-w-max">
          
          {/* TAB SEQUENCE BASED ON READING ORDER */}
          {readingOrder === "chronological" ? (
            <>
              {/* 1. Czyn & Śledztwo */}
              {(currentCase.circumstancesOfAct || currentCase.pretrialProceedings) && (
                <button
                  type="button"
                  onClick={() => setActiveTab("akta_sledztwo")}
                  className={`h-8 px-3 rounded-md transition-all inline-flex items-center justify-center gap-1.5 shrink-0 leading-none ${
                    activeTab === "akta_sledztwo"
                      ? "bg-stone-900 text-white shadow-xs border border-stone-900 font-bold"
                      : "text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 font-medium"
                  }`}
                >
                  <ShieldAlert className={`w-3.5 h-3.5 shrink-0 ${activeTab === "akta_sledztwo" ? "text-amber-300" : "text-amber-700"}`} />
                  <span>1. Czyn & Śledztwo</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm leading-none ${
                    activeTab === "akta_sledztwo" ? "bg-stone-800 text-amber-300 border border-stone-700" : "bg-stone-100 text-stone-700 border border-stone-200 font-bold"
                  }`}>k. 1</span>
                </button>
              )}

              {/* 2. Akt Oskarżenia */}
              {currentCase.indictment && (
                <button
                  type="button"
                  onClick={() => setActiveTab("akt_oskarzenia")}
                  className={`h-8 px-3 rounded-md transition-all inline-flex items-center justify-center gap-1.5 shrink-0 leading-none ${
                    activeTab === "akt_oskarzenia"
                      ? "bg-stone-900 text-white shadow-xs border border-stone-900 font-bold"
                      : "text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 font-medium"
                  }`}
                >
                  <ScrollText className={`w-3.5 h-3.5 shrink-0 ${activeTab === "akt_oskarzenia" ? "text-amber-300" : "text-stone-600"}`} />
                  <span>2. Akt Oskarżenia</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm leading-none ${
                    activeTab === "akt_oskarzenia" ? "bg-stone-800 text-amber-300 border border-stone-700" : "bg-stone-100 text-stone-700 border border-stone-200 font-bold"
                  }`}>k. 20</span>
                </button>
              )}

              {/* 3. Przebieg Rozprawy */}
              {currentCase.courtProceedings && (
                <button
                  type="button"
                  onClick={() => setActiveTab("sad_I_instancji")}
                  className={`h-8 px-3 rounded-md transition-all inline-flex items-center justify-center gap-1.5 shrink-0 leading-none ${
                    activeTab === "sad_I_instancji"
                      ? "bg-stone-900 text-white shadow-xs border border-stone-900 font-bold"
                      : "text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 font-medium"
                  }`}
                >
                  <Landmark className={`w-3.5 h-3.5 shrink-0 ${activeTab === "sad_I_instancji" ? "text-amber-300" : "text-stone-600"}`} />
                  <span>3. Przebieg Rozprawy</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm leading-none ${
                    activeTab === "sad_I_instancji" ? "bg-stone-800 text-amber-300 border border-stone-700" : "bg-stone-100 text-stone-700 border border-stone-200 font-bold"
                  }`}>k. 36</span>
                </button>
              )}

              {/* 4. Wyrok & Uzasadnienie (UK 1) */}
              <button
                type="button"
                onClick={() => setActiveTab("wyrok_uzasadnienie")}
                className={`h-8 px-3 rounded-md transition-all inline-flex items-center justify-center gap-1.5 shrink-0 leading-none ${
                  activeTab === "wyrok_uzasadnienie"
                    ? "bg-[#881337] text-white shadow-xs border border-[#881337] font-bold"
                    : "text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 font-medium"
                }`}
              >
                <Scale className={`w-3.5 h-3.5 shrink-0 ${activeTab === "wyrok_uzasadnienie" ? "text-rose-200" : "text-[#881337]"}`} />
                <span>4. Wyrok & Uzasadnienie</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm leading-none ${
                  activeTab === "wyrok_uzasadnienie" ? "bg-[#700f2d] text-rose-200" : "bg-rose-50 text-rose-800 border border-rose-200 font-bold"
                }`}>k. 59</span>
              </button>
            </>
          ) : (
            <>
              {/* 1. Wyrok & Uzasadnienie (UK 1) */}
              <button
                type="button"
                onClick={() => setActiveTab("wyrok_uzasadnienie")}
                className={`h-8 px-3 rounded-md transition-all inline-flex items-center justify-center gap-1.5 shrink-0 leading-none ${
                  activeTab === "wyrok_uzasadnienie"
                    ? "bg-[#881337] text-white shadow-xs border border-[#881337] font-bold"
                    : "text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 font-medium"
                }`}
              >
                <Scale className={`w-3.5 h-3.5 shrink-0 ${activeTab === "wyrok_uzasadnienie" ? "text-rose-200" : "text-[#881337]"}`} />
                <span>1. Wyrok & Uzasadnienie</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm leading-none ${
                  activeTab === "wyrok_uzasadnienie" ? "bg-[#700f2d] text-rose-200" : "bg-rose-50 text-rose-800 border border-rose-200 font-bold"
                }`}>k. 59</span>
              </button>

              {/* 2. Przebieg Rozprawy */}
              {currentCase.courtProceedings && (
                <button
                  type="button"
                  onClick={() => setActiveTab("sad_I_instancji")}
                  className={`h-8 px-3 rounded-md transition-all inline-flex items-center justify-center gap-1.5 shrink-0 leading-none ${
                    activeTab === "sad_I_instancji"
                      ? "bg-stone-900 text-white shadow-xs border border-stone-900 font-bold"
                      : "text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 font-medium"
                  }`}
                >
                  <Landmark className={`w-3.5 h-3.5 shrink-0 ${activeTab === "sad_I_instancji" ? "text-amber-300" : "text-stone-600"}`} />
                  <span>2. Przebieg Rozprawy</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm leading-none ${
                    activeTab === "sad_I_instancji" ? "bg-stone-800 text-amber-300 border border-stone-700" : "bg-stone-100 text-stone-700 border border-stone-200 font-bold"
                  }`}>k. 36</span>
                </button>
              )}

              {/* 3. Akt Oskarżenia */}
              {currentCase.indictment && (
                <button
                  type="button"
                  onClick={() => setActiveTab("akt_oskarzenia")}
                  className={`h-8 px-3 rounded-md transition-all inline-flex items-center justify-center gap-1.5 shrink-0 leading-none ${
                    activeTab === "akt_oskarzenia"
                      ? "bg-stone-900 text-white shadow-xs border border-stone-900 font-bold"
                      : "text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 font-medium"
                  }`}
                >
                  <ScrollText className={`w-3.5 h-3.5 shrink-0 ${activeTab === "akt_oskarzenia" ? "text-amber-300" : "text-stone-600"}`} />
                  <span>3. Akt Oskarżenia</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm leading-none ${
                    activeTab === "akt_oskarzenia" ? "bg-stone-800 text-amber-300 border border-stone-700" : "bg-stone-100 text-stone-700 border border-stone-200 font-bold"
                  }`}>k. 20</span>
                </button>
              )}

              {/* 4. Czyn & Śledztwo */}
              {(currentCase.circumstancesOfAct || currentCase.pretrialProceedings) && (
                <button
                  type="button"
                  onClick={() => setActiveTab("akta_sledztwo")}
                  className={`h-8 px-3 rounded-md transition-all inline-flex items-center justify-center gap-1.5 shrink-0 leading-none ${
                    activeTab === "akta_sledztwo"
                      ? "bg-stone-900 text-white shadow-xs border border-stone-900 font-bold"
                      : "text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 font-medium"
                  }`}
                >
                  <ShieldAlert className={`w-3.5 h-3.5 shrink-0 ${activeTab === "akta_sledztwo" ? "text-amber-300" : "text-amber-700"}`} />
                  <span>4. Czyn & Śledztwo</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm leading-none ${
                    activeTab === "akta_sledztwo" ? "bg-stone-800 text-amber-300 border border-stone-700" : "bg-stone-100 text-stone-700 border border-stone-200 font-bold"
                  }`}>k. 1</span>
                </button>
              )}
            </>
          )}

          {/* 5. Widok Ciągły Całych Akt */}
          <button
            type="button"
            onClick={() => setActiveTab("wszystko")}
            className={`h-8 px-3 rounded-md transition-all inline-flex items-center justify-center gap-1.5 shrink-0 leading-none ${
              activeTab === "wszystko"
                ? "bg-stone-800 text-white shadow-xs border border-stone-900 font-bold"
                : "text-stone-700 bg-stone-200/80 hover:bg-stone-300/80 border border-stone-300 font-medium"
            }`}
          >
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>Pełne Akta</span>
          </button>
        </div>

        {/* Toggle Reading Order Button */}
        <div className="flex items-center gap-1.5 shrink-0 ml-auto pl-2 border-l border-stone-300">
          <button
            type="button"
            onClick={handleToggleReadingOrder}
            className="h-7 px-2.5 rounded-md bg-white hover:bg-stone-50 border border-stone-300 text-[11px] font-mono font-medium text-stone-800 inline-flex items-center gap-1.5 shadow-2xs transition-colors"
            title="Przełącz kierunek czytania: Chronologicznie (k. 1 do 75) lub od Wyroku wstecz (metoda kolokwialna / obrończa)"
          >
            <ArrowUpDown className="w-3 h-3 text-stone-500 shrink-0" />
            <span className="hidden sm:inline text-stone-500">Tryb:</span>
            <span className="font-bold text-stone-900">
              {readingOrder === "chronological" ? "Akta → Wyrok" : "Wyrok → Akta"}
            </span>
          </button>
        </div>
      </div>

      {/* 3. DOSSIER STREAM */}
      <div className="flex-1 overflow-y-auto min-h-0 bg-[#F7F6F2] p-3 sm:p-4 space-y-4">
        
        {/* Single Tab Rendering */}
        {activeTab === "akta_sledztwo" && renderPretrialCard()}
        {activeTab === "akt_oskarzenia" && renderIndictmentCard()}
        {activeTab === "sad_I_instancji" && renderCourtProceedingsCard()}
        {activeTab === "wyrok_uzasadnienie" && renderVerdictCard()}

        {/* Continuous Stream (wszystko) respecting Reading Order */}
        {activeTab === "wszystko" && (
          readingOrder === "chronological" ? (
            <div className="space-y-4">
              {renderPretrialCard()}
              {renderIndictmentCard()}
              {renderCourtProceedingsCard()}
              {renderVerdictCard()}
            </div>
          ) : (
            <div className="space-y-4">
              {renderVerdictCard()}
              {renderCourtProceedingsCard()}
              {renderIndictmentCard()}
              {renderPretrialCard()}
            </div>
          )
        )}

      </div>

      {/* 4. SLIDE-OUT INSPECTOR FOR LEGAL ISSUES */}
      {isInspectorOpen && (
        <div className="absolute inset-y-0 right-0 w-full sm:w-88 md:w-96 bg-white border-l border-slate-300 shadow-2xl z-20 flex flex-col animate-in slide-in-from-right duration-200">
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between shrink-0 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-4 h-4 shrink-0 text-slate-300" />
              <div>
                <span className="font-serif font-bold text-sm text-white block leading-tight">
                  Węzły Prawne & Zarzuty
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {currentCase.keyIssues.length} zagadnień do apelacji
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsInspectorOpen(false)}
              className="w-7 h-7 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors inline-flex items-center justify-center shrink-0"
              title="Zamknij panel węzłów"
            >
              <X className="w-4 h-4 shrink-0" />
            </button>
          </div>

          <div className="p-4 overflow-y-auto flex-1 space-y-3 bg-slate-50/50">
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
              Zidentyfikowane węzły kazusu:
            </div>
            {currentCase.keyIssues.map((issueStr, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-1.5 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-slate-950 flex items-center gap-1.5">
                    <span className="w-4.5 h-4.5 rounded-md bg-slate-100 text-slate-800 border border-slate-200 inline-flex items-center justify-center text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    <span>Węzeł procesowy #{idx + 1}</span>
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-sans">
                  {issueStr}
                </p>
              </div>
            ))}

            {currentCase.modelSolution?.modelCharges && currentCase.modelSolution.modelCharges.length > 0 && (
              <div className="pt-2 space-y-2">
                <div className="text-[11px] font-mono text-indigo-900 uppercase tracking-wider font-bold">
                  Sugerowane zarzuty z Kanonu:
                </div>
                {currentCase.modelSolution.modelCharges.map((modelCharge, cIdx) => (
                  <div key={cIdx} className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-200 text-xs space-y-2">
                    <div className="flex items-center justify-between gap-1 flex-wrap">
                      <span className="font-mono font-bold text-indigo-950 text-[11px]">
                        {modelCharge.basis}
                      </span>
                      <span className="font-mono text-[10px] text-indigo-700 bg-white px-1.5 py-0.5 rounded border border-indigo-200">
                        {modelCharge.violatedArticles}
                      </span>
                    </div>

                    <div className="font-serif text-[11px] text-slate-800 leading-relaxed bg-white/80 p-2 rounded border border-indigo-100">
                      {modelCharge.formulation}
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() =>
                          handleInsertToCharge(
                            modelCharge.formulation,
                            modelCharge.basis,
                            "Wzorzec Kanonu",
                            `mc-${cIdx}`
                          )
                        }
                        className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-mono text-[10px] font-semibold inline-flex items-center gap-1 shadow-2xs transition-colors"
                      >
                        <Plus className="w-3 h-3 text-slate-300 shrink-0" />
                        <span>Wstaw do zarzutów</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-3 bg-white border-t border-slate-200 shrink-0 text-center">
            <button
              onClick={() => setIsInspectorOpen(false)}
              className="w-full h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center justify-center transition-colors"
            >
              Zamknij podgląd węzłów
            </button>
          </div>
        </div>
      )}

      {/* 5. A4 PRINT / EXAM DOSSIER MODAL */}
      <ExamDossierModal
        isOpen={showExamPdfModal}
        onClose={() => setShowExamPdfModal(false)}
        caseItem={currentCase}
      />
    </div>
  );
};
