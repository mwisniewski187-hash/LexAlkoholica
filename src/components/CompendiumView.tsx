import React, { useState } from "react";
import { LEGAL_COMPENDIUM } from "../data/legalCompendium";
import { Search, Copy, Check, BookOpen, Scale } from "lucide-react";

export const CompendiumView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [activeStep, setActiveStep] = useState<number>(1);
  const [factDispute, setFactDispute] = useState<boolean | null>(null);

  const filteredSections = LEGAL_COMPENDIUM.filter((sec) => {
    const matchesSearch =
      sec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sec.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === "all" || sec.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const resetDecisionTree = () => {
    setActiveStep(1);
    setFactDispute(null);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Banner with Clean Academic Styling */}
      <div className="bg-white rounded-xl border border-slate-300 p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded border border-slate-700 bg-slate-900 text-slate-300 uppercase tracking-wider font-bold">
            Baza wiedzy kolokwialnej • OIRP Bydgoszcz
          </span>
        </div>
        <h2 className="text-xl font-serif font-bold text-slate-950">
          Kompendium Apelacji Karnej & Formułki
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed font-sans">
          Złote reguły zarzutów i wniosków, zakazy odwoławcze, kanon orzecznictwa SN oraz gotowe do skopiowania formułki procesowe.
        </p>
      </div>

      {/* Interactive Decision Tree Widget: "Jak dobrać zarzut?" */}
      <div className="bg-white rounded-xl border border-slate-300 p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-slate-700" />
            <h3 className="text-sm font-serif font-bold text-slate-950 uppercase tracking-wide">
              Drzewo Decyzyjne: Jaki zarzut postawić na kolokwium?
            </h3>
          </div>
          <button
            onClick={resetDecisionTree}
            className="text-xs text-slate-700 hover:text-slate-950 underline font-serif font-semibold"
          >
            Zacznij od nowa
          </button>
        </div>

        {/* Step 1: Facts */}
        {activeStep === 1 && (
          <div className="space-y-3">
            <div className="text-xs text-slate-700 font-mono font-bold uppercase tracking-wider">
              Krok 1 z 2: Stan faktyczny
            </div>
            <p className="text-xs sm:text-sm text-slate-800 font-sans leading-relaxed">
              Czy kwestionujesz jakiekolwiek ustalenia faktyczne Sądu I instancji (np. przebieg zdarzenia, zamiar sprawcy, zachowanie pokrzywdzonego, wiarygodność świadków)?
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              <button
                onClick={() => {
                  setFactDispute(true);
                  setActiveStep(2);
                }}
                className="px-4 py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
              >
                TAK – Fakty były inne lub dowody oceniono błędnie
              </button>
              <button
                onClick={() => {
                  setFactDispute(false);
                  setActiveStep(2);
                }}
                className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-900 text-xs font-semibold rounded-lg transition-colors border border-slate-300"
              >
                NIE – W pełni akceptuję stan faktyczny ustalony przez Sąd
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Procedure */}
        {activeStep === 2 && factDispute === true && (
          <div className="space-y-3">
            <div className="text-xs text-slate-700 font-mono font-bold uppercase tracking-wider">
              Krok 2: Źródło błędu
            </div>
            <p className="text-xs sm:text-sm text-slate-800 font-sans leading-relaxed">
              Czy sąd dopuścił się naruszenia procedury dowodowej (np. art. 7 k.p.k. - dowolna ocena dowodów, art. 410 k.p.k. - pominięcie dowodu, art. 170 k.p.k. - oddalenie wniosku)?
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              <button
                onClick={() => setActiveStep(3)}
                className="px-4 py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
              >
                TAK – Naruszono zasady oceny dowodów (art. 7 k.p.k.)
              </button>
              <button
                onClick={() => setActiveStep(3)}
                className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-900 text-xs font-semibold rounded-lg transition-colors border border-slate-300"
              >
                NIE – Błąd wynika z samej logiki wnioskowania sądu
              </button>
            </div>
          </div>
        )}

        {activeStep === 2 && factDispute === false && (
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 border border-slate-300 rounded-lg space-y-2 text-xs">
              <div className="font-bold text-slate-950 text-sm flex items-center gap-1.5 font-serif">
                <Check className="w-4 h-4 text-emerald-600" />
                Rekomendacja: CZYSTA OBRAZA PRAWA MATERIALNEGO (art. 438 pkt 1 k.p.k.)
              </div>
              <p className="text-slate-700 leading-relaxed font-sans">
                Skoro stan faktyczny jest niesporny, a sąd jedynie błędnie zinterpretował przepis Kodeksu karnego lub niewłaściwie go zastosował (błędna subsumpcja), stawiasz <strong>wyłącznie zarzut z art. 438 pkt 1 k.p.k.</strong>
              </p>
              <p className="text-rose-800 font-bold font-mono">
                UWAGA: Pod żadnym pozorem nie stawiaj w takim wypadku zarzutu art. 7 k.p.k. ani art. 438 pkt 3 k.p.k.!
              </p>
            </div>
          </div>
        )}

        {/* Step 3: Result for dispute */}
        {activeStep === 3 && factDispute === true && (
          <div className="p-4 bg-slate-50 border border-slate-300 rounded-lg space-y-2 text-xs">
            <div className="font-bold text-slate-950 text-sm flex items-center gap-1.5 font-serif">
              <Check className="w-4 h-4 text-emerald-600" />
              Rekomendacja: ART. 438 PKT 2 K.P.K. + ART. 438 PKT 3 K.P.K.
            </div>
            <p className="text-slate-700 leading-relaxed font-sans">
              1. Jako zarzut pierwotny postaw <strong>obrazę przepisów postępowania (art. 438 pkt 2 k.p.k.)</strong> – art. 7 k.p.k. w zw. z art. 410 k.p.k., wskazując wpływ na treść wyroku.
            </p>
            <p className="text-slate-700 leading-relaxed font-sans">
              2. Jako zarzut wtórny postaw <strong>błąd w ustaleniach faktycznych (art. 438 pkt 3 k.p.k.)</strong> wynikający z powyższego błędu dowodowego.
            </p>
            <p className="text-slate-700 leading-relaxed font-sans">
              3. Z ostrożności procesowej – na wypadek nieuwzględnienia zarzutów dowodowych – sformułuj zarzut z art. 438 pkt 1 k.p.k. <strong>jako ZARZUT EWENTUALNY</strong>!
            </p>
          </div>
        )}
      </div>

      {/* Filters and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Szukaj w kompendium (np. art. 7, ne peius, wniosek)..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-1 focus:ring-slate-500 focus:border-slate-500 bg-white font-serif"
          />
        </div>

        <div className="flex flex-wrap gap-1.5 self-start sm:self-auto text-xs font-serif">
          {(["all", "zarzuty", "wnioski", "orzecznictwo"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white font-bold shadow-xs"
                  : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {cat === "all" ? "Wszystkie" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Compendium Cards */}
      <div className="space-y-4">
        {filteredSections.map((sec) => (
          <div
            key={sec.id}
            className="bg-white rounded-xl border border-slate-300 overflow-hidden shadow-xs hover:border-slate-400 transition-all"
          >
            <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-50/70">
              <h3 className="text-sm sm:text-base font-serif font-bold text-slate-950 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-slate-700" />
                {sec.title}
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 font-bold uppercase self-start sm:self-auto">
                {sec.category}
              </span>
            </div>

            <div className="p-5 space-y-4 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
              <div className="whitespace-pre-line leading-relaxed break-words">{sec.content}</div>

              {/* Formula snippet if exists */}
              {sec.formulaTemplate && (
                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-950 uppercase tracking-wider">
                      Wzorcowa formuła zarzutu/wniosku:
                    </span>
                    <button
                      onClick={() => handleCopy(sec.formulaTemplate!, sec.id)}
                      className="text-xs px-2.5 py-1 rounded-md bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 flex items-center gap-1 font-serif transition-colors"
                    >
                      {copiedId === sec.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Skopiowano</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Kopiuj</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-3 bg-slate-950 text-slate-200 rounded-lg border border-slate-800 font-mono text-xs whitespace-pre-wrap leading-relaxed overflow-x-auto break-words">
                    {sec.formulaTemplate}
                  </pre>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
