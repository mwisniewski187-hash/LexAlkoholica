import React, { useState } from "react";
import {
  X,
  Sparkles,
  Columns,
  Layout,
  Layers,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  FileText,
  Gavel,
  Scale,
  ShieldAlert,
  ChevronRight,
  Eye,
  Sliders,
  Split,
  PanelLeftClose,
  Compass,
} from "lucide-react";

export type LayoutConceptId = "koncepcja-1-split-kolokwium" | "koncepcja-2-studio-fokus" | "koncepcja-3-trzy-kolumny";

interface DesignConceptsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectConcept?: (conceptId: LayoutConceptId) => void;
}

export const DesignConceptsModal: React.FC<DesignConceptsModalProps> = ({
  isOpen,
  onClose,
  onSelectConcept,
}) => {
  const [selectedConcept, setSelectedConcept] = useState<LayoutConceptId>("koncepcja-1-split-kolokwium");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-white border border-slate-300 rounded-2xl shadow-2xl max-w-5xl w-full my-auto overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-800 text-white flex items-center justify-center shadow-xs border border-slate-700">
              <Sparkles className="w-5 h-5 text-slate-200" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold tracking-tight text-white flex items-center gap-2">
                <span>Wizualizacje przebudowy interfejsu (Uporządkowanie & Redesign)</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  Wybierz wariant
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Wybierz układ, który najbardziej odpowiada Twojemu stylowi pracy przed kolokwium.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Zamknij"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Diagnoza bałaganu (Dlaczego obecny interfejs wymagał uproszczenia) */}
        <div className="bg-slate-100 border-b border-slate-200 px-6 py-2.5 flex items-center justify-between text-xs text-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-bold uppercase tracking-wider text-[10px] px-2 py-0.5 rounded bg-slate-200 text-slate-900 font-mono">
              Diagnoza bałaganu:
            </span>
            <span className="text-slate-700">
              Obecnie nakładają się na siebie 2 poziomy nawigacji (boczny pasek + górna belka z menu), a nad samym kazusem jest aż 9 kolorowych przycisków. Nowe propozycje całkowicie to eliminują.
            </span>
          </div>
        </div>

        {/* Concept Selector Tabs */}
        <div className="px-6 pt-4 pb-2 bg-slate-50 border-b border-slate-200 flex flex-wrap gap-2 shrink-0">
          <button
            onClick={() => setSelectedConcept("koncepcja-1-split-kolokwium")}
            className={`flex-1 min-w-[220px] p-3 rounded-xl border text-left transition-all relative ${
              selectedConcept === "koncepcja-1-split-kolokwium"
                ? "bg-white border-slate-900 ring-2 ring-slate-900/15 shadow-sm"
                : "bg-slate-100/70 border-slate-200 hover:bg-white text-slate-600"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Columns className="w-4 h-4 text-slate-800" />
                1. Pulpit Kolokwialny II Rok (50/50)
              </span>
              {selectedConcept === "koncepcja-1-split-kolokwium" && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-900 font-bold">
                  Polecana
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-500 leading-snug">
              Czysty podział 50/50. Jeden minimalistyczny pasek narzędzi. Wyrok i UK-1 zawsze widoczne.
            </p>
          </button>

          <button
            onClick={() => setSelectedConcept("koncepcja-2-studio-fokus")}
            className={`flex-1 min-w-[220px] p-3 rounded-xl border text-left transition-all relative ${
              selectedConcept === "koncepcja-2-studio-fokus"
                ? "bg-white border-slate-900 ring-2 ring-slate-900/15 shadow-sm"
                : "bg-slate-100/70 border-slate-200 hover:bg-white text-slate-600"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Layout className="w-4 h-4 text-slate-700" />
                2. Nowoczesne Studio Kancelaryjne
              </span>
            </div>
            <p className="text-[11px] text-slate-500 leading-snug">
              Szerokie biurko w stylu Notion/Lex. Tryby pełnoekranowe: "Tylko Akta" lub "Tylko Pismo".
            </p>
          </button>

          <button
            onClick={() => setSelectedConcept("koncepcja-3-trzy-kolumny")}
            className={`flex-1 min-w-[220px] p-3 rounded-xl border text-left transition-all relative ${
              selectedConcept === "koncepcja-3-trzy-kolumny"
                ? "bg-white border-slate-900 ring-2 ring-slate-900/15 shadow-sm"
                : "bg-slate-100/70 border-slate-200 hover:bg-white text-slate-600"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-emerald-700" />
                3. Trzypanelowy Warsztat Radcowski
              </span>
            </div>
            <p className="text-[11px] text-slate-500 leading-snug">
              Układ 3-kolumnowy (Spis akt | Treść dokumentu | Edytor apelacji). Maksymalna wygoda na monitorze.
            </p>
          </button>
        </div>

        {/* Concept Visualization Canvas */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 bg-slate-50/50">
          {/* =========================================================================
              KONCEPCJA 1: PULPIT KOLOKWIALNY (50/50 SPLIT)
             ========================================================================= */}
          {selectedConcept === "koncepcja-1-split-kolokwium" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              {/* Opis kluczowych zmian */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-slate-700" />
                    Likwidacja podwójnych pasków
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Usuwamy boczny sidebar podczas rozwiązywania kazusu. Zostaje jedna ultracienka belka na samej górze.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-slate-700" />
                    Wyrok i UK-1 na 1. planie
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Wyrok nie jest ukryty pod 5. zakładką. Otwiera się automatycznie, a sentencja i formularz UK-1 są stale pod ręką.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-slate-700" />
                    Przełącznik proporcji
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Szybkie przyciski proporcji: 50/50 (domyślny), 70/30 (czytanie akt), 30/70 (pisanie apelacji) lub pełny ekran.
                  </p>
                </div>
              </div>

              {/* Wizualna makieta interfejsu (Wireframe Mockup) */}
              <div className="bg-slate-900 p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-800">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="text-slate-300 font-bold ml-2">Wizualizacja: Pulpit Kolokwialny 50/50</span>
                  </div>
                  <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300">Czysta przestrzeń pracy</span>
                </div>

                {/* Mockup UI Window */}
                <div className="bg-white rounded-xl overflow-hidden border border-slate-300 shadow-sm text-slate-900 text-xs">
                  {/* Pojedyncza minimalistyczna belka górna */}
                  <div className="bg-slate-950 text-white px-4 py-2 flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="font-serif font-bold text-xs text-white">LexAlkoholica</div>
                      <span className="text-slate-600">|</span>
                      <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md text-[11px] font-mono">
                        <span className="text-slate-200 font-bold">II K 412/24</span>
                        <span className="text-slate-400">• Tomasz Adamski</span>
                        <span className="text-[10px] text-slate-500">(Kazus 1/20)</span>
                      </div>
                    </div>

                    {/* Szybkie tryby widoku */}
                    <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[10px]">
                      <span className="px-2 py-0.5 bg-slate-800 text-white rounded font-bold border border-slate-700">50 : 50</span>
                      <span className="px-2 py-0.5 text-slate-400 hover:text-white">Tylko Akta</span>
                      <span className="px-2 py-0.5 text-slate-400 hover:text-white">Tylko Apelacja</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                        Zegar kolokwialny: 03:42:15
                      </span>
                      <span className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded font-bold text-[10px] border border-slate-700">
                        Sprawdź z AI (Ocena)
                      </span>
                    </div>
                  </div>

                  {/* Ciało ekranu: Podział 50/50 bez żadnych podwójnych ram */}
                  <div className="grid grid-cols-2 divide-x divide-slate-200 min-h-[340px] bg-slate-100">
                    {/* LEWA KOLUMNA: AKTA SPRAWY */}
                    <div className="flex flex-col bg-white">
                      {/* Pasek zakładek dokumentów (prosty, bez 9 kolorowych przycisków) */}
                      <div className="bg-slate-100/90 border-b border-slate-200 px-3 py-1.5 flex items-center gap-1 text-[11px] overflow-x-auto">
                        <span className="font-bold px-2.5 py-1 rounded-md bg-white border border-slate-300 text-slate-900 shadow-2xs flex items-center gap-1">
                          <Gavel className="w-3 h-3 text-slate-700" />
                          Wyrok & Sentencja
                        </span>
                        <span className="px-2 py-1 rounded-md text-slate-600 hover:bg-white/60">
                          Uzasadnienie (UK 1)
                        </span>
                        <span className="px-2 py-1 rounded-md text-slate-600 hover:bg-white/60">
                          Akt oskarżenia
                        </span>
                        <span className="px-2 py-1 rounded-md text-slate-600 hover:bg-white/60">
                          Protokół rozprawy
                        </span>
                        <span className="px-2 py-1 rounded-md text-slate-600 hover:bg-white/60">
                          Akta PDF
                        </span>
                      </div>

                      {/* Treść dokumentu wyroku */}
                      <div className="p-4 overflow-y-auto space-y-3 font-serif text-[11px] leading-relaxed bg-white">
                        <div className="text-center pb-2 border-b border-slate-200">
                          <div className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                            Rzeczpospolita Polska
                          </div>
                          <div className="font-bold text-slate-900 text-xs mt-0.5">
                            WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
                          </div>
                          <div className="text-[10px] font-sans text-slate-500">
                            Sąd Rejonowy w Bydgoszczy • Sygn. akt II K 412/24
                          </div>
                        </div>
                        <p className="text-slate-700">
                          <strong>I. Uznaje oskarżonego Tomasza Adamskiego</strong> za winnego tego, że w dniu 19 maja 2024 r. przy ul. Magdzińskiego w Bydgoszczy brał udział w bójce z art. 158 § 1 k.k. i za to wymierza mu karę 8 miesięcy pozbawienia wolności...
                        </p>
                        <div className="bg-slate-100 border border-slate-300 rounded-lg p-2.5 text-[10px] font-sans text-slate-800">
                          <strong>Kluczowa pułapka do wyłapania:</strong> Błędne przypisanie art. 158 § 1 k.k. zamiast obrony koniecznej z art. 25 § 1 k.k. oraz rażąca niewspółmierność kary.
                        </div>
                      </div>
                    </div>

                    {/* PRAWA KOLUMNA: EDYTOR APELACJI */}
                    <div className="flex flex-col bg-slate-50/50">
                      {/* Prosty stepper pisma */}
                      <div className="bg-white border-b border-slate-200 px-3 py-1.5 flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-1">
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-bold border border-slate-300">
                            1. Komparycja
                          </span>
                          <span className="px-2 py-0.5 rounded bg-slate-900 text-white font-bold">
                            2. Zarzuty (art. 438 k.p.k.)
                          </span>
                          <span className="px-2 py-0.5 rounded text-slate-500">
                            3. Wnioski
                          </span>
                          <span className="px-2 py-0.5 rounded text-slate-500">
                            4. Uzasadnienie
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">Autozapis: 12:44</span>
                      </div>

                      {/* Obszar roboczy edytora */}
                      <div className="p-4 space-y-3 text-[11px]">
                        <div className="bg-white border border-slate-300 rounded-lg p-3 shadow-2xs space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900">Sformułuj zarzuty apelacyjne:</span>
                            <span className="text-[10px] text-slate-800 font-bold hover:underline cursor-pointer">
                              + Dodaj zarzut (art. 438 pkt 1-4)
                            </span>
                          </div>

                          <div className="p-2 bg-slate-100 border border-slate-300 rounded text-[10px] text-slate-900 leading-snug">
                            <strong>Zarzut 1:</strong> Obraza prawa materialnego (art. 438 pkt 1 k.p.k.) – art. 25 § 1 k.k. poprzez jego niezastosowanie...
                          </div>

                          <div className="p-2 bg-slate-50 border border-slate-200 rounded text-[10px] text-slate-700 leading-snug">
                            <strong>Zarzut 2:</strong> Błąd w ustaleniach faktycznych (art. 438 pkt 3 k.p.k.) mający wpływ na treść wyroku...
                          </div>

                          <textarea
                            disabled
                            rows={3}
                            value="Na podstawie art. 425 § 1 i 2 k.p.k. oraz art. 444 § 1 k.p.k. zaskarżam powyższy wyrok w całości na korzyść oskarżonego Tomasza Adamskiego..."
                            className="w-full p-2 bg-slate-100 border border-slate-200 rounded text-[10px] font-mono text-slate-600 resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              KONCEPCJA 2: NOWOCZESNE STUDIO KANCELARYJNE (FOCUS WORKSPACE)
             ========================================================================= */}
          {selectedConcept === "koncepcja-2-studio-fokus" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-slate-800" />
                    Wąski pasek ikon (Icon Rail)
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Boczny pasek zwinięty do 50px (tylko ikony), dający maksymalną szerokość na czytanie i pisanie.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-slate-800" />
                    Teczka akt sprawy
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Elegancka karta z rozwijanymi sekcjami w jednym ciągłym dokumencie, zamiast przeskakiwania po 9 zakładkach.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-slate-800" />
                    Pływający inspektor zarzutów
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Wzorce z Tomkiewicz i art. 438 k.p.k. wysuwają się z boku na życzenie, nie zajmując miejsca na stałe.
                  </p>
                </div>
              </div>

              {/* Makieta UI Koncepcji 2 */}
              <div className="bg-slate-900 p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-800">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                  <span className="text-slate-300 font-bold">Wizualizacja: Studio Fokus (Kancelaria Cyfrowa)</span>
                  <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300">Notion / Lex style</span>
                </div>

                <div className="bg-white rounded-xl overflow-hidden border border-slate-300 shadow-sm flex text-xs min-h-[340px]">
                  {/* Wąski Icon Rail */}
                  <div className="w-12 bg-slate-950 text-slate-400 flex flex-col items-center py-3 gap-4 shrink-0 border-r border-slate-800">
                    <div className="w-7 h-7 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 flex items-center justify-center font-bold text-xs">
                      §
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center cursor-pointer">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 rounded-lg text-slate-400 hover:text-white flex items-center justify-center cursor-pointer">
                      <Gavel className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 rounded-lg text-slate-400 hover:text-white flex items-center justify-center cursor-pointer">
                      <Scale className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Centralne Biurko Dokumentu */}
                  <div className="flex-1 flex flex-col bg-slate-50">
                    <div className="bg-white px-5 py-2.5 border-b border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-slate-900 text-sm">Akta sprawy: II K 412/24</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-900 font-medium">
                          Tomasz Adamski • art. 158 § 1 k.k.
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1 bg-slate-900 text-white text-[11px] rounded-lg font-medium">
                          Otwórz edytor apelacji
                        </button>
                      </div>
                    </div>

                    <div className="p-6 max-w-3xl mx-auto w-full space-y-4">
                      {/* Oficjalna sentencja wyroku */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                          <span className="font-bold text-xs text-slate-900 uppercase font-mono tracking-wider flex items-center gap-1.5">
                            <Gavel className="w-3.5 h-3.5 text-slate-700" />
                            Sentencja Wyroku Sądu Rejonowego w Bydgoszczy
                          </span>
                          <span className="text-[10px] text-slate-400">14 maja 2024 r.</span>
                        </div>
                        <p className="text-[11px] font-serif text-slate-800 leading-relaxed">
                          Sąd Rejonowy w Bydgoszczy, Wydział II Karny... uznaje oskarżonego za winnego czynu z art. 158 § 1 k.k. i skazuje na 8 miesięcy pozbawienia wolności z warunkowym zawieszeniem...
                        </p>
                      </div>

                      {/* Rozwijana sekcja UK 1 */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between cursor-pointer hover:border-slate-300">
                        <span className="text-xs font-semibold text-slate-800 flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                          Uzasadnienie wyroku (formularz UK 1) - ustalenia faktów i ocena dowodów
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">k. 4-12</span>
                      </div>

                      {/* Rozwijany Akt Oskarżenia */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between cursor-pointer hover:border-slate-300">
                        <span className="text-xs font-semibold text-slate-800 flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                          Akt oskarżenia Prokuratury Rejonowej Bydgoszcz-Północ
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">k. 2-3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              KONCEPCJA 3: TRZYPANELOWY WARSZTAT (3-COLUMN WORKBENCH)
             ========================================================================= */}
          {selectedConcept === "koncepcja-3-trzy-kolumny" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    Drzewo akt po lewej (Index)
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Spis kart akt jak w prawdziwej teczce sądowej (k. 1 Wyrok, k. 4 UK-1, k. 10 Zeznania świadka).
                  </p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    Środkowy czytnik dokumentu
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Klikasz na liście akt i natychmiast czytasz dany protokół w centrum bez zbędnego przeładowywania.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    Prawy edytor apelacji
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Stały podgląd sporządzanego pisma procesowego z automatyczną weryfikacją zarzutów z art. 438 k.p.k.
                  </p>
                </div>
              </div>

              {/* Makieta UI Koncepcji 3 */}
              <div className="bg-slate-900 p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-800">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                  <span className="text-slate-300 font-bold">Wizualizacja: Trzypanelowy Warsztat (Outlook / IDE style)</span>
                  <span className="bg-slate-800 px-2 py-0.5 rounded text-emerald-400">Dla szerokich ekranów</span>
                </div>

                <div className="bg-white rounded-xl overflow-hidden border border-slate-300 shadow-sm grid grid-cols-12 min-h-[340px] text-xs">
                  {/* Kolumna 1: Spis akt (25% / 3 kolumny) */}
                  <div className="col-span-3 bg-slate-50 border-r border-slate-200 p-2 flex flex-col space-y-1">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-2 py-1">
                      Karty akt sprawy
                    </div>
                    <div className="p-1.5 rounded-lg bg-slate-200 text-slate-900 font-semibold text-[11px] flex items-center justify-between">
                      <span>k. 1-2 Wyrok Sądu</span>
                      <span className="text-[9px] font-mono bg-slate-300 px-1 rounded">SR B-szcz</span>
                    </div>
                    <div className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 text-[11px] flex items-center justify-between">
                      <span>k. 3-8 Uzasadnienie UK-1</span>
                      <span className="text-[9px] font-mono text-slate-400">SR</span>
                    </div>
                    <div className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 text-[11px] flex items-center justify-between">
                      <span>k. 9-11 Akt oskarżenia</span>
                      <span className="text-[9px] font-mono text-slate-400">PR</span>
                    </div>
                    <div className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 text-[11px] flex items-center justify-between">
                      <span>k. 12-16 Protokół rozprawy</span>
                      <span className="text-[9px] font-mono text-slate-400">SR</span>
                    </div>
                    <div className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 text-[11px] flex items-center justify-between">
                      <span>k. 17-20 Zeznania Karoliny Bąk</span>
                      <span className="text-[9px] font-mono text-slate-400">KP</span>
                    </div>
                  </div>

                  {/* Kolumna 2: Czytnik wybranego dokumentu (45% / 5 kolumn) */}
                  <div className="col-span-5 bg-white border-r border-slate-200 p-4 space-y-3 font-serif text-[11px] leading-relaxed">
                    <div className="border-b border-slate-200 pb-2">
                      <span className="text-[10px] font-sans font-bold text-slate-500 uppercase tracking-wider block">
                        Dokument z akt (k. 1)
                      </span>
                      <strong className="text-xs text-slate-900">Wyrok Sądu Rejonowego w Bydgoszczy</strong>
                    </div>
                    <p className="text-slate-700">
                      Sąd Rejonowy po rozpoznaniu sprawy Tomasza Adamskiego oskarżonego o przestępstwo z art. 158 § 1 k.k. orzeka...
                    </p>
                    <div className="p-2 bg-slate-50 rounded border border-slate-200 text-[10px] font-sans text-slate-600">
                      Zasądza od oskarżonego na rzecz oskarżyciela posiłkowego kwotę 5.000 zł tytułem zadośćuczynienia.
                    </div>
                  </div>

                  {/* Kolumna 3: Edytor apelacji (30% / 4 kolumny) */}
                  <div className="col-span-4 bg-slate-50/70 p-3 space-y-2 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center justify-between">
                        <span>Edytor Apelacji</span>
                        <span className="text-emerald-700 font-mono text-[9px] bg-emerald-100 px-1.5 py-0.5 rounded">
                          Wymogi art. 427 k.p.k. OK
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="p-2 bg-white border border-slate-200 rounded text-[10px]">
                          <strong>Zarzut 1:</strong> Obraza art. 25 § 1 k.k.
                        </div>
                        <div className="p-2 bg-white border border-slate-200 rounded text-[10px]">
                          <strong>Wniosek:</strong> O zmianę wyroku i uniewinnienie.
                        </div>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-slate-950 text-white text-[10px] font-bold rounded-lg shadow-xs">
                      Sprawdź rozwiązanie z AI
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tabela porównawcza wariantów */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono mb-3">
              Porównanie cech 3 propozycji
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-[11px] text-slate-500 font-mono">
                    <th className="py-2 pr-4 font-semibold">Cecha</th>
                    <th className="py-2 px-3 font-semibold text-slate-900">1. Pulpit Kolokwialny (50/50)</th>
                    <th className="py-2 px-3 font-semibold text-slate-800">2. Studio Fokus</th>
                    <th className="py-2 pl-3 font-semibold text-emerald-800">3. Trzypanelowy Warsztat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[11px]">
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-700">Podwójne paski nawigacji</td>
                    <td className="py-2 px-3 text-emerald-600 font-bold">Usunięte (tylko 1 pasek)</td>
                    <td className="py-2 px-3 text-emerald-600 font-bold">Usunięte (ikony 50px)</td>
                    <td className="py-2 pl-3 text-emerald-600 font-bold">Zintegrowane w 1 pasek</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-700">Dostęp do Wyroku i UK-1</td>
                    <td className="py-2 px-3 text-slate-800">Natychmiastowy (zakładka nr 1)</td>
                    <td className="py-2 px-3 text-slate-800">Główny boks u góry biurka</td>
                    <td className="py-2 pl-3 text-slate-800">Pierwsza pozycja na drzewie akt</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-700">Obsługa laptopów i monitorów</td>
                    <td className="py-2 px-3 text-slate-800 font-semibold">Doskonała na każdy ekran</td>
                    <td className="py-2 px-3 text-slate-700">Idealna na laptopy 13-15"</td>
                    <td className="py-2 pl-3 text-emerald-700 font-semibold">Najlepsza na monitory 24"+</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-700">Ilość przycisków i rozpraszaczy</td>
                    <td className="py-2 px-3 text-emerald-700 font-bold">Zredukowana o ~75%</td>
                    <td className="py-2 px-3 text-emerald-700 font-bold">Zredukowana o ~80%</td>
                    <td className="py-2 pl-3 text-emerald-700 font-bold">Zredukowana o ~70%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-white border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            Zamknij podgląd
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 hidden sm:inline">
              Zaznaczona koncepcja: <strong className="text-slate-900">{
                selectedConcept === "koncepcja-1-split-kolokwium"
                  ? "Pulpit Kolokwialny (50/50)"
                  : selectedConcept === "koncepcja-2-studio-fokus"
                  ? "Studio Kancelaryjne (Fokus)"
                  : "Trzypanelowy Warsztat Radcowski"
              }</strong>
            </span>

            <button
              onClick={() => {
                if (onSelectConcept) {
                  onSelectConcept(selectedConcept);
                }
                onClose();
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Wybieram tę propozycję</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
