import React, { useState, useRef, useEffect } from "react";
import { CaseData } from "../types";
import {
  X,
  Printer,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  FileText,
  Download,
  Scroll,
  BookOpen,
  Award,
  Gavel,
  ShieldAlert,
  Check,
  RotateCcw,
} from "lucide-react";

interface ExamDossierModalProps {
  caseItem: CaseData;
  isOpen: boolean;
  onClose: () => void;
}

export const ExamDossierModal: React.FC<ExamDossierModalProps> = ({
  caseItem,
  isOpen,
  onClose,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"paged" | "continuous">("continuous");
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (viewMode === "paged") {
        if (e.key === "ArrowRight") handleNextPage();
        if (e.key === "ArrowLeft") handlePrevPage();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, viewMode, currentPage]);

  // Track active page on scroll in continuous mode
  const handleScroll = () => {
    if (viewMode !== "continuous" || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const containerTop = container.scrollTop;
    const containerHeight = container.clientHeight;
    
    // Find which page is closest to the middle of the container
    let closestPage = 1;
    let minDistance = Infinity;

    for (let i = 1; i <= 10; i++) {
      const el = document.getElementById(`exam-page-${i}`);
      if (el) {
        const offsetTop = el.offsetTop - container.offsetTop;
        const distance = Math.abs(offsetTop - containerTop - containerHeight * 0.2);
        if (distance < minDistance) {
          minDistance = distance;
          closestPage = i;
        }
      }
    }
    if (closestPage !== currentPage) {
      setCurrentPage(closestPage);
    }
  };

  if (!isOpen) return null;

  // Prepare standard exam pages based on caseItem
  const examDate = caseItem.examDate || "21 KWIETNIA 2026 r.";
  const examType = caseItem.examType || "KOLOKWIUM ROCZNE (II ROK APLIKACJI RADCOWSKIEJ) – PRAWO KARNE";
  const attorneyName = caseItem.defenseAttorneyName || "radca prawny Jan Nowak";
  const appellateCourt = caseItem.appellateCourt || "Sąd Okręgowy w Bydgoszczy / Sieradzu, Wydział Karny Odwoławczy";

  // Compute total pages:
  // 1: Strona tytułowa zadania kolokwialnego
  // 2: Informacja dla zdającego
  // 3: Okoliczności zdarzenia i protokoły policyjne
  // 4: Postępowanie przygotowawcze i protokoły przesłuchań
  // 5: Akt oskarżenia
  // 6: Protokół rozprawy głównej
  // 7: Wyrok w Imieniu Rzeczypospolitej Polskiej
  // 8: Uzasadnienie (Formularz UK 1) - Ustalenia faktów i ocena dowodów
  // 9: Uzasadnienie (Formularz UK 1) - Kwalifikacja, kary i koszty
  // 10: Opis Istotnych Zagadnień (Wytyczne Komisji Kolokwialnej)
  const totalPages = 10;

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const fullDossierText = `
OKREGOWA IZBA RADCÓW PRAWNYCH - KOMISJA DS. SZKOLENIA APLIKANTÓW
${examType}
${examDate}

ZADANIE Z ZAKRESU PRAWA KARNEGO
Sprawa: ${caseItem.title}
Sygnatura: ${caseItem.caseNumber}
Sąd: ${caseItem.court}
Oskarżony: ${caseItem.defendant}
Obrońca: ${attorneyName}
Sąd Odwoławczy: ${appellateCourt}

--- INFORMACJA DLA ZDAJĄCEGO ---
I. ${caseItem.instructions}
II. Założenia formalne i dowodowe.

--- 1. AKT OSKARŻENIA PROKURATURY (K. 1–4) ---
${caseItem.indictment || "Brak opisu."}

--- 2. OKOLICZNOŚCI POPEŁNIENIA CZYNU (TEMPORE CRIMINIS) (K. 5–9) ---
${caseItem.circumstancesOfAct || "Brak odrębnego opisu."}

--- 3. POSTĘPOWANIE PRZYGOTOWAWCZE (DOWODY ZE ŚLEDZTWA) (K. 10–18) ---
${caseItem.pretrialProceedings || "Brak opisu."}

--- 4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI ---
${caseItem.courtProceedings || "Brak opisu."}

--- 5. WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ ---
${caseItem.verdictSentence}

--- 6. UZASADNIENIE WYROKU (FORMULARZ UK 1) ---
Fakty uznane za udowodnione:
${caseItem.justificationFacts}

Ocena dowodów:
${caseItem.justificationEvidence}

Podstawa prawna i wymiar kary:
${caseItem.justificationLegal}

--- OPIS ISTOTNYCH ZAGADNIEŃ DLA KOMISJI KOLOKWIALNEJ ---
Główne zarzuty i pułapki:
${caseItem.keyIssues.map((issue, idx) => `${idx + 1}. ${issue}`).join("\n")}
Wzorcowe wnioski i podstawa prawna:
${caseItem.modelSolution.recommendedScope}
    `.trim();

    navigator.clipboard.writeText(fullDossierText).then(() => {
      setCopiedSuccess(true);
      setTimeout(() => setCopiedSuccess(false), 2500);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-950/90 backdrop-blur-xs text-slate-100 print:bg-white print:text-black print:p-0">
      
      {/* Top Bar / Toolbar - Hidden when printing */}
      <div className="bg-slate-900 border-b border-slate-800 px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2 shrink-0 print:hidden shadow-md">
        
        {/* Left Identity */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold shadow-xs shrink-0 border border-slate-700">
            <FileText className="w-4.5 h-4.5 text-slate-200" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-sm text-white truncate">
                Akta Kolokwialne (II Rok Aplikacji Radcowskiej)
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-semibold">
                {caseItem.caseNumber}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              {caseItem.defendant} • {caseItem.court}
            </div>
          </div>
        </div>

        {/* Center: Page Controls & Jump */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {viewMode === "paged" && (
            <div className="flex items-center gap-1 bg-slate-800 rounded-lg p-1 border border-slate-700">
              <button
                onClick={handlePrevPage}
                disabled={currentPage <= 1}
                className="p-1 rounded text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                title="Poprzednia strona (Strzałka w lewo)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="font-mono text-xs text-slate-200 px-2 min-w-[70px] text-center font-bold">
                {currentPage} / {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}
                className="p-1 rounded text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                title="Następna strona (Strzałka w prawo)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Quick jump dropdown */}
          <select
            value={currentPage}
            onChange={(e) => {
              setCurrentPage(Number(e.target.value));
              if (viewMode === "continuous" && scrollContainerRef.current) {
                const targetElement = document.getElementById(`exam-page-${e.target.value}`);
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
            className="hidden md:block bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-slate-500 font-sans"
          >
            <option value={1}>1. Strona Tytułowa (Kolokwium)</option>
            <option value={2}>2. Informacja dla zdającego</option>
            <option value={3}>3. Akt Oskarżenia (k. 1–4)</option>
            <option value={4}>4. Okoliczności & Notatka policji (k. 5–9)</option>
            <option value={5}>5. Postępowanie przygotowawcze (k. 10–18)</option>
            <option value={6}>6. Protokół Rozprawy Głównej</option>
            <option value={7}>7. Wyrok w Imieniu RP</option>
            <option value={8}>8. Uzasadnienie UK 1 (Fakty)</option>
            <option value={9}>9. Uzasadnienie UK 1 (Prawo & Kara)</option>
            <option value={10}>10. Opis Istotnych Zagadnień (Komisja)</option>
          </select>
        </div>

        {/* Right Tools: Mode, Zoom, Copy, Print, Close */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Toggle view mode */}
          <button
            onClick={() => setViewMode(viewMode === "paged" ? "continuous" : "paged")}
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
            title={viewMode === "paged" ? "Przełącz na widok ciągły" : "Przełącz na widok stron A4"}
          >
            <Scroll className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden lg:inline">{viewMode === "paged" ? "Widok ciągły" : "Strony A4"}</span>
          </button>

          {/* Zoom Controls */}
          <div className="hidden xl:flex items-center gap-1 bg-slate-800 rounded-lg p-0.5 border border-slate-700">
            <button
              onClick={() => setZoomLevel((z) => Math.max(70, z - 10))}
              className="p-1 rounded text-slate-400 hover:text-white transition-colors"
              title="Pomniejsz"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-[11px] text-slate-300 w-10 text-center">
              {zoomLevel}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(150, z + 10))}
              className="p-1 rounded text-slate-400 hover:text-white transition-colors"
              title="Powiększ"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Copy Full Dossier */}
          <button
            onClick={handleCopyText}
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Skopiuj treść całych akt do schowka"
          >
            {copiedSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline text-emerald-300 font-bold">Skopiowano</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">Kopiuj tekst</span>
              </>
            )}
          </button>

          {/* Print / Save as PDF */}
          <button
            onClick={handlePrint}
            className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
            title="Drukuj lub zapisz akta jako PDF w oknie przeglądarki"
          >
            <Printer className="w-3.5 h-3.5 text-slate-200" />
            <span>Pobierz / Drukuj PDF</span>
          </button>

          {/* Close Modal */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
            title="Zamknij podgląd (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Pages Canvas Container (Authentic PDF Reader View with Continuous Smooth Scroll) */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex flex-col items-center gap-8 print:p-0 print:overflow-visible bg-[#525659]"
        style={{ zoom: `${zoomLevel}%` }}
      >
        {/* Render pages */}
        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => {
          // If in paged mode, only render currentPage
          if (viewMode === "paged" && pageNum !== currentPage) return null;

          return (
            <div
              key={pageNum}
              id={`exam-page-${pageNum}`}
              className="bg-white text-slate-950 shadow-2xl rounded-xs border border-slate-300 p-8 sm:p-12 w-full max-w-[210mm] min-h-[297mm] flex flex-col justify-between font-serif relative print:shadow-none print:border-none print:p-8 print:m-0 print:min-h-screen print:break-after-page print:rounded-none"
              style={{
                boxSizing: "border-box",
              }}
            >
              {/* PAGE TOP HEADER (Exact Bar Exam Format) */}
              <div className="flex items-center justify-between text-[11px] font-sans text-slate-500 border-b border-slate-300 pb-2 mb-6">
                <span className="font-bold tracking-wider uppercase font-mono">
                  {pageNum === 10 ? "OPIS ISTOTNYCH ZAGADNIEŃ" : examType}
                </span>
                <span className="font-mono font-bold text-slate-700">
                  {pageNum} / {totalPages}
                </span>
              </div>

              {/* PAGE CONTENT SWITCHER */}
              <div className="flex-1 text-slate-900 leading-relaxed text-[13px] sm:text-[14px]">
                {pageNum === 1 && (
                  <div className="flex flex-col items-center justify-between h-full py-4 text-center">
                    <div className="w-full text-right font-sans text-xs text-slate-600 mb-6">
                      <span className="font-mono">Nr kodu zdającego: .......................................</span>
                    </div>

                    <div className="space-y-1 mb-8">
                      <div className="text-xs font-sans font-bold uppercase tracking-widest text-slate-600">
                        Ministerstwo Sprawiedliwości
                      </div>
                      <div className="text-xs font-sans text-slate-500 italic">
                        Departament Zawodów Prawniczych
                      </div>
                    </div>

                    {/* Emblem silhouette */}
                    <div className="w-20 h-20 rounded-full border border-slate-300 flex items-center justify-center mb-6 text-slate-400 bg-slate-50">
                      <Gavel className="w-10 h-10 text-slate-700" />
                    </div>

                    <div className="space-y-3 mb-10">
                      <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-slate-900">
                        Zadanie z Zakresu Prawa Karnego
                      </h1>
                      <div className="text-sm font-sans font-bold uppercase text-slate-600 tracking-wider">
                        {examDate}
                      </div>
                      <div className="text-xs font-mono text-slate-500">
                        Sygnatura akt: {caseItem.caseNumber} • {caseItem.court}
                      </div>
                    </div>

                    {/* Official Exam Instructions Box */}
                    <div className="text-left w-full p-5 rounded-lg border border-slate-300 bg-slate-50 font-sans text-xs space-y-3 leading-relaxed text-slate-700">
                      <strong className="block font-bold text-slate-900 uppercase font-mono tracking-wide">
                        Pouczenie:
                      </strong>
                      <ol className="list-decimal pl-4 space-y-2">
                        <li>
                          <strong>Oznaczenie pracy:</strong> Zadanie oznacza się indywidualnym kodem zdającego. Nie jest dopuszczalne w żadnym miejscu zadania i pracy zawierającej rozwiązanie zadania wpisanie własnego imienia i nazwiska.
                        </li>
                        <li>
                          <strong>Czas na rozwiązanie:</strong> Czas na sporządzenie apelacji lub opinii prawnej wynosi 360 minut (6 godzin).
                        </li>
                        <li>
                          <strong>Zawartość akt:</strong> Zadanie z zakresu prawa karnego zawarte jest na ponumerowanych kartach akt sprawy karnej łącznie ze stroną tytułową i informacją dla zdającego.
                        </li>
                        <li>
                          <strong>Zasada reprezentacji:</strong> Obrońca oskarżonego działa w granicach zakreślonych przepisami procedury karnej z uwzględnieniem interesu reprezentowanej strony.
                        </li>
                      </ol>
                    </div>

                    <div className="mt-8 text-xs font-mono text-slate-400">
                      KOLOKWIUM ROCZNE II ROK APLIKACJI RADCOWSKIEJ • OIRP BYDGOSZCZ
                    </div>
                  </div>
                )}

                {pageNum === 2 && (
                  <div className="space-y-5">
                    <h2 className="text-lg font-bold text-center border-b border-slate-300 pb-2 uppercase tracking-wide">
                      Informacja dla zdającego
                    </h2>

                    <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs leading-relaxed space-y-2">
                      <p className="font-bold text-slate-900">
                        I. Po zapoznaniu się z treścią zadania – opracowanymi na potrzeby kolokwium aktami sprawy karnej – proszę przygotować, jako {attorneyName}, obrońca oskarżonego {caseItem.defendant}, apelację od wydanego w sprawie wyroku, albo w przypadku uznania, że brak jest podstaw do jej wniesienia, sporządzić opinię prawną – z uwzględnieniem interesu reprezentowanej strony.
                      </p>
                    </div>

                    <div className="space-y-2 text-xs leading-relaxed">
                      <h3 className="font-bold font-sans uppercase tracking-wider text-slate-700">
                        II. Należy przyjąć, że:
                      </h3>
                      <ol className="list-decimal pl-5 space-y-1.5 text-slate-800">
                        <li>we wszystkich pismach procesowych oraz protokołach, opiniach, wyroku i uzasadnieniu wyroku, a także innych dokumentach znajdują się własnoręczne podpisy uprawnionych osób;</li>
                        <li>oskarżony został pouczony we właściwy sposób, zgodny z przepisami, o swoich uprawnieniach oraz obowiązkach;</li>
                        <li>dane dotyczące miejsca zamieszkania świadków i pokrzywdzonych znajdują się w odrębnym załączniku adresowym (art. 148a § 1 k.p.k.);</li>
                        <li>do protokołu z badania stanu trzeźwości analizatorem wydechu załączono prawidłowe wydruki i świadectwo wzorcowania;</li>
                        <li>oskarżony został zaznajomiony z aktami postępowania przygotowawczego i nie złożył wniosku o uzupełnienie dowodów;</li>
                        <li>akt oskarżenia został skontrolowany pod względem formalnym i doręczony uprawnionym ze stosownym pouczeniem;</li>
                        <li>Przewodniczący w trybie art. 352 k.p.k. dopuścił wszystkie dowody wskazane w akcie oskarżenia;</li>
                        <li>na koszty postępowania składają się wydatki i ryczałty wyszczególnione w aktach sprawy.</li>
                      </ol>
                    </div>

                    <div className="p-3 bg-slate-100 border border-slate-300 rounded text-xs space-y-1">
                      <div className="font-bold text-slate-950 font-sans">
                        III. Sąd Odwoławczy i podpis:
                      </div>
                      <p className="text-slate-800">
                        W przypadku sporządzenia apelacji należy przyjąć, że właściwym sądem odwoławczym jest: <strong>{appellateCourt}</strong>. Pod pismem należy złożyć podpis jako <strong>{attorneyName}</strong>.
                      </p>
                    </div>

                    <div className="pt-2 text-xs font-mono text-slate-500 border-t border-slate-200">
                      Wymogi Katedry Prawa Karnego: Zakaz zarzutów mieszanych • Precyzyjne wskazanie uchybień z art. 438 lub 439 k.p.k.
                    </div>
                  </div>
                )}

                {pageNum === 3 && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono border-b border-slate-200 pb-1 text-slate-600">
                      <span>KARTA AKT NR 1–4</span>
                      <span>PROKURATURA REJONOWA</span>
                    </div>

                    <div className="text-center space-y-1">
                      <span className="text-xs font-sans text-slate-600 uppercase font-semibold">
                        Prokuratura Rejonowa
                      </span>
                      <h2 className="text-lg font-bold uppercase tracking-wider">
                        Akt Oskarżenia
                      </h2>
                      <span className="text-xs font-mono text-slate-500">
                        przeciwko oskarżonemu: {caseItem.defendant}
                      </span>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-300 rounded text-xs space-y-3 leading-relaxed">
                      <div className="font-serif text-slate-900 text-sm whitespace-pre-line leading-relaxed">
                        {caseItem.indictment || `Oskarżam ${caseItem.defendant} o popełnienie zarzucanych czynów. Na podstawie art. 24 § 1 k.p.k. i art. 31 § 1 k.p.k. sprawa podlega rozpoznaniu przez ${caseItem.court}.`}
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-3 text-xs space-y-1">
                      <span className="font-bold font-sans uppercase text-slate-700 block">
                        Wykaz dowodów do przeprowadzenia na rozprawie:
                      </span>
                      <p className="text-slate-600 font-sans leading-relaxed">
                        1. Wyjaśnienia oskarżonego • 2. Zeznania świadków zawnioskowanych w akcie oskarżenia • 3. Opinie biegłych sądowych • 4. Protokoły oględzin i badań atestowanych • 5. Dane o karalności KRK.
                      </p>
                    </div>
                  </div>
                )}

                {pageNum === 4 && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono border-b border-slate-200 pb-1 text-slate-600">
                      <span>KARTA AKT NR 5–9</span>
                      <span>KOMENDA POWIATOWA POLICJI</span>
                    </div>

                    <h2 className="text-base font-bold text-center uppercase tracking-wide">
                      Notatka Urzędowa & Protokół Zdarzenia
                    </h2>

                    <div className="p-4 bg-slate-50 border border-slate-300 rounded font-sans text-xs space-y-3 leading-relaxed">
                      <div className="font-mono text-[11px] text-slate-500">
                        KOMENDA POLICJI • PROTOKÓŁ INTERWENCJI Z URZĘDU
                      </div>
                      <p className="font-serif text-slate-900 text-sm whitespace-pre-line leading-relaxed">
                        {caseItem.circumstancesOfAct || "W toku czynności ustalono okoliczności tempore criminis oraz zabezpieczono ślady na miejscu zdarzenia."}
                      </p>
                    </div>

                    <div className="border-t border-slate-200 p-3 text-xs space-y-2">
                      <span className="font-bold font-sans uppercase tracking-wider block text-slate-800">
                        Protokół badania stanu trzeźwości / Oględziny:
                      </span>
                      <p className="font-mono text-slate-700 leading-relaxed text-[11px]">
                        Badanie przeprowadzono atestowanym urządzeniem elektronicznym Alko-Sensor IV. Wyniki z karty badania zarejestrowano w aktach. Zabezpieczono materiał rzeczowy pod pozycją wykazu dowodów rzeczowych.
                      </p>
                    </div>
                  </div>
                )}

                {pageNum === 5 && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono border-b border-slate-200 pb-1 text-slate-600">
                      <span>KARTA AKT NR 10–18</span>
                      <span>POSTĘPOWANIE PRZYGOTOWAWCZE</span>
                    </div>

                    <h2 className="text-base font-bold text-center uppercase tracking-wide">
                      Protokoły Przesłuchań Świadków i Podejrzanego
                    </h2>

                    <div className="p-4 border border-slate-300 rounded text-xs space-y-3 font-sans leading-relaxed">
                      <div className="flex justify-between text-[11px] font-mono text-slate-500 border-b pb-1">
                        <span>Pouczenie z art. 233 § 1 i 1a k.k. / art. 175 k.p.k.</span>
                        <span>Sygn. akt Ds</span>
                      </div>
                      <div className="font-serif text-slate-900 text-sm whitespace-pre-line leading-relaxed">
                        {caseItem.pretrialProceedings || "Przeprowadzono przesłuchania świadków, podejrzanemu ogłoszono zarzuty z art. 313 k.p.k. oraz dopuszczono dowody z opinii biegłych sądowych."}
                      </div>
                    </div>

                    <div className="p-3 bg-slate-100 border border-slate-300 rounded text-xs text-slate-800 italic">
                      Uwaga aplikanta: Zwróć szczególną uwagę na pouczenia o prawie do odmowy zeznań (art. 182 k.p.k.), swobodę wypowiedzi przesłuchiwanego (art. 171 § 7 k.p.k.) oraz wnioski dowodowe obrony.
                    </div>
                  </div>
                )}

                {pageNum === 6 && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono border-b border-slate-200 pb-1 text-slate-600">
                      <span>KARTA AKT NR 19-22</span>
                      <span>SĄD REJONOWY • ROZPRAWA GŁÓWNA</span>
                    </div>

                    <div className="text-center space-y-1">
                      <h2 className="text-lg font-bold uppercase tracking-wider">
                        Protokół Rozprawy Głównej
                      </h2>
                      <span className="text-xs font-mono text-slate-500">
                        Sygnatura akt {caseItem.caseNumber}
                      </span>
                    </div>

                    <div className="p-4 border border-slate-300 rounded text-xs space-y-3 leading-relaxed">
                      <div className="font-serif text-slate-900 text-sm whitespace-pre-line leading-relaxed">
                        {caseItem.courtProceedings || "Przewodniczący otworzył przewód sądowy. Oskarżony złożył wyjaśnienia. Przesłuchano świadków, odczytano protokoły na podstawie art. 389 i 391 k.p.k. Sąd zamknął przewód sądowy i udzielił głosu stronom."}
                      </div>
                    </div>

                    <div className="flex justify-between items-end pt-4 font-sans text-xs text-slate-600">
                      <div>
                        Protokolant: sekr. sądowy<br />
                        <span className="italic font-serif">(podpis protokolanta)</span>
                      </div>
                      <div className="text-right">
                        Przewodniczący: Sędzia SR<br />
                        <span className="italic font-serif">(podpis sędziego)</span>
                      </div>
                    </div>
                  </div>
                )}

                {pageNum === 7 && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono border-b border-slate-200 pb-1 text-slate-600">
                      <span>KARTA AKT NR 23-24</span>
                      <span>SENTENCJA ORZECZENIA</span>
                    </div>

                    <div className="text-center space-y-1 my-2">
                      <div className="text-xs uppercase font-sans font-bold text-slate-600 tracking-wider">
                        Sygn. akt {caseItem.caseNumber}
                      </div>
                      <h2 className="text-xl font-bold uppercase tracking-wide text-slate-900">
                        WYROK
                      </h2>
                      <div className="text-sm font-bold uppercase tracking-wider text-slate-800">
                        W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
                      </div>
                      <div className="text-xs font-sans text-slate-500">
                        {caseItem.court}
                      </div>
                    </div>

                    {/* Verdict Sentence Box */}
                    <div className="p-4 sm:p-5 bg-slate-50 border border-slate-300 rounded text-xs space-y-3">
                      <div className="font-serif text-slate-950 text-sm whitespace-pre-line leading-relaxed">
                        {caseItem.verdictSentence}
                      </div>
                    </div>

                    <div className="text-right pt-2 font-sans text-xs text-slate-700">
                      SSR Przewodniczący Składu Orzekającego<br />
                      <span className="italic font-serif font-medium">(podpis sędziego)</span>
                    </div>

                    <div className="p-2.5 bg-slate-100 border border-slate-300 rounded text-xs text-slate-900 font-sans space-y-1">
                      <strong>Wniosek o uzasadnienie wyroku:</strong>
                      <p className="text-slate-700 text-[11px]">
                        Obrońca oskarżonego w terminie 7 dni od ogłoszenia złożył wniosek o sporządzenie uzasadnienia wyroku i doręczenie odpisu wyroku wraz z uzasadnieniem.
                      </p>
                    </div>
                  </div>
                )}

                {pageNum === 8 && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono border-b border-slate-200 pb-1 text-slate-600">
                      <span>KARTA AKT NR 26-27</span>
                      <span>UZASADNIENIE WYROKU (FORMULARZ UK 1)</span>
                    </div>

                    {/* Official UK 1 Table Header */}
                    <div className="border border-slate-900 text-xs">
                      <div className="bg-red-700 text-white font-bold text-center py-1 uppercase tracking-wider">
                        UZASADNIENIE
                      </div>
                      <div className="flex border-b border-slate-900 text-[11px]">
                        <div className="w-1/3 p-1.5 border-r border-slate-900 font-bold bg-slate-100">
                          Formularz UK 1
                        </div>
                        <div className="w-2/3 p-1.5 flex justify-between">
                          <span className="font-bold">Sygnatura akt</span>
                          <span className="font-mono font-bold">{caseItem.caseNumber}</span>
                        </div>
                      </div>

                      {/* Section 1: Ustalenie faktów */}
                      <div className="bg-slate-800 text-white font-bold text-center py-1 uppercase text-[11px]">
                        1. USTALENIE FAKTÓW
                      </div>
                      <div className="p-2.5 border-b border-slate-900 text-[12px] leading-relaxed">
                        <strong className="block text-[11px] uppercase font-sans mb-1 text-slate-800">
                          1.1. Fakty uznane za udowodnione:
                        </strong>
                        <div className="whitespace-pre-line text-slate-900 font-serif">
                          {caseItem.justificationFacts}
                        </div>
                      </div>

                      {/* Section 2: Ocena dowodów */}
                      <div className="bg-slate-800 text-white font-bold text-center py-1 uppercase text-[11px]">
                        2. OCENA DOWODÓW
                      </div>
                      <div className="p-2.5 text-[12px] leading-relaxed">
                        <strong className="block text-[11px] uppercase font-sans mb-1 text-slate-800">
                          2.1. Dowody będące podstawą ustalenia faktów i powody ich uznania:
                        </strong>
                        <div className="whitespace-pre-line text-slate-900 font-serif">
                          {caseItem.justificationEvidence}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {pageNum === 9 && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono border-b border-slate-200 pb-1 text-slate-600">
                      <span>KARTA AKT NR 28-30</span>
                      <span>UZASADNIENIE FORMULARZ UK 1 (CD.)</span>
                    </div>

                    <div className="border border-slate-900 text-xs">
                      {/* Section 3: Podstawa prawna wyroku */}
                      <div className="bg-slate-800 text-white font-bold text-center py-1 uppercase text-[11px]">
                        3. PODSTAWA PRAWNA WYROKU
                      </div>
                      <div className="p-2.5 border-b border-slate-900 text-[12px] leading-relaxed">
                        <strong className="block text-[11px] uppercase font-sans mb-1 text-slate-800">
                          3.1. Kwalifikacja prawna i motywy rozstrzygnięcia:
                        </strong>
                        <div className="whitespace-pre-line text-slate-900 font-serif">
                          {caseItem.justificationLegal}
                        </div>
                      </div>

                      {/* Section 4: Kary i środki karne */}
                      <div className="bg-slate-800 text-white font-bold text-center py-1 uppercase text-[11px]">
                        4. WYMIAR KARY I ŚRODKI KARNE
                      </div>
                      <div className="p-2.5 border-b border-slate-900 text-[12px] leading-relaxed text-slate-800">
                        Sąd ocenił stopień społecznej szkodliwości czynu oraz stopień zawinienia oskarżonego. Uwzględniono okoliczności obciążające oraz łagodzące, orzekając kary i środki karne zgodnie z dyspozycją przepisów prawa materialnego.
                      </div>

                      {/* Section 7: Koszty procesu */}
                      <div className="bg-slate-800 text-white font-bold text-center py-1 uppercase text-[11px]">
                        7. KOSZTY PROCESU
                      </div>
                      <div className="p-2.5 text-[12px] leading-relaxed text-slate-800">
                        Na podstawie art. 627 k.p.k. zasądzono od oskarżonego na rzecz Skarbu Państwa koszty sądowe obejmujące wydatki i opłatę.
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 font-sans text-xs text-slate-700">
                      <span>Odpis wyroku z uzasadnieniem doręczono obrońcy.</span>
                      <span className="font-serif italic font-bold">SSR Sławomir Sprawiedliwy / Szymon Sowa (podpis)</span>
                    </div>
                  </div>
                )}

                {pageNum === 10 && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono border-b border-slate-200 pb-1 text-slate-600">
                      <span>WYTYCZNE KOMISJI KOLOKWIALNEJ</span>
                      <span>OIRP BYDGOSZCZ • II ROK</span>
                    </div>

                    <h2 className="text-base font-bold text-center uppercase tracking-wide text-slate-900">
                      Opis Istotnych Zagadnień dla Komisji Kolokwialnej
                    </h2>
                    <p className="text-center text-xs text-slate-500 font-sans italic">
                      (Wzorzec oceniania i wykaz kluczowych uchybień Sądu I instancji do wytknięcia w apelacji)
                    </p>

                    <div className="p-4 bg-slate-100 border border-slate-300 rounded text-xs space-y-3 font-sans leading-relaxed">
                      <strong className="block font-bold text-slate-900 uppercase font-mono tracking-wider">
                        1. Istotne Uchybienia do Podniesienia przez Obrońcę:
                      </strong>
                      <ul className="space-y-2 text-slate-800">
                        {caseItem.keyIssues.map((issue, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 bg-slate-50 border border-slate-300 rounded text-xs space-y-2 font-sans">
                      <strong className="block font-bold text-slate-900 uppercase font-mono tracking-wider">
                        2. Wzorcowe Wnioski Odwoławcze (art. 437 § 1 i 2 k.p.k.):
                      </strong>
                      <p className="text-slate-800 leading-relaxed font-serif">
                        {caseItem.modelSolution.recommendedScope}
                      </p>
                      {caseItem.modelSolution.recommendedMotions && (
                        <p className="text-slate-800 leading-relaxed font-serif text-[11px] bg-white p-2 rounded border border-slate-200">
                          {Array.isArray(caseItem.modelSolution.recommendedMotions)
                            ? caseItem.modelSolution.recommendedMotions.join("\n")
                            : caseItem.modelSolution.recommendedMotions}
                        </p>
                      )}
                      {caseItem.modelSolution.modelMotions && caseItem.modelSolution.modelMotions.length > 0 && (
                        <div className="space-y-1.5 pt-1">
                          {caseItem.modelSolution.modelMotions.map((m, idx) => (
                            <div key={idx} className="p-2 bg-white rounded border border-slate-200 text-[11px]">
                              <strong className="text-slate-900">{m.type}:</strong> {m.content}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {caseItem.modelSolution.commonPitfalls && caseItem.modelSolution.commonPitfalls.length > 0 && (
                      <div className="p-3 bg-rose-50/80 border border-rose-200 rounded text-xs space-y-1 font-sans text-rose-950">
                        <strong className="font-bold block uppercase text-[10px] tracking-wider text-rose-900">
                          Najczęstsze błędy aplikantów (Uwaga na obniżenie oceny!):
                        </strong>
                        <ul className="list-disc pl-4 space-y-1 text-[11px] text-rose-900">
                          {caseItem.modelSolution.commonPitfalls.map((pit, idx) => (
                            <li key={idx}>{pit}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* PAGE BOTTOM FOOTER */}
              <div className="flex items-center justify-between text-[11px] font-sans text-slate-400 border-t border-slate-200 pt-3 mt-6">
                <span>{caseItem.court} • Sygn. akt {caseItem.caseNumber}</span>
                <span className="font-mono font-bold">
                  Karta akt {pageNum * 3 - 2}-{pageNum * 3}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
