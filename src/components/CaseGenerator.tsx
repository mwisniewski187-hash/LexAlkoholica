import React, { useState } from "react";
import { CaseData, SourceMaterial } from "../types";
import { Sparkles, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

interface CaseGeneratorProps {
  onCaseGenerated: (newCase: CaseData) => void;
  availableMaterials: SourceMaterial[];
  preselectedMaterial?: SourceMaterial | null;
}

export const CaseGenerator: React.FC<CaseGeneratorProps> = ({
  onCaseGenerated,
  availableMaterials,
  preselectedMaterial,
}) => {
  const [topic, setTopic] = useState<string>(
    "Losowy kazus przekrojowy (kompleksowy mix problemów materialnych i procesowych – jak na kolokwium)"
  );
  const [customTopic, setCustomTopic] = useState<string>("");
  const [difficulty, setDifficulty] = useState<
    "Warsztat wstępny (kazus wprowadzający)" | "Kolokwium roczne (II rok aplikacji radcowskiej)" | "Kolokwium roczne — poziom zaawansowany"
  >("Kolokwium roczne (II rok aplikacji radcowskiej)");
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>(
    preselectedMaterial ? preselectedMaterial.id : "all"
  );
  const [additionalContext, setAdditionalContext] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const predefinedTopics = [
    "Losowy kazus przekrojowy (kompleksowy mix problemów materialnych i procesowych – jak na kolokwium)",
    "Przestępstwa przeciwko mieniu i obrotowi gospodarczemu (kradzież, oszustwo, przywłaszczenie, paserstwo)",
    "Przestępstwa przeciwko życiu, zdrowiu i wolności (bójka, pobicie, uszczerbki na zdrowiu, obrona konieczna)",
    "Przestępstwa drogowe i komunikacyjne (nietrzeźwość, wypadek, alkomat, przepadek pojazdu)",
    "Wady postępowania dowodowego i gwarancje procesowe (swobodna ocena dowodów, art. 7 i 410 k.p.k., zakazy dowodowe)",
    "Błędy co do prawa i faktu, formy zjawiskowe, kontratypy i zbiegi przestępstw",
    "Wymiar kary, środki kompensacyjne i uchybienia pozakwalifikacyjne (art. 438 pkt 1a k.p.k.)",
    "Własny temat lub preferencje (wpisz poniżej)",
  ];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setErrorMessage(null);

    let effectiveTopic = topic;
    if (topic === "Własny temat lub preferencje (wpisz poniżej)") {
      effectiveTopic = customTopic.trim() || "Przekrojowy kazus egzaminacyjny z procesu karnego łączący uchybienia procesowe i materialne";
    }

    let materialsContext = "";
    if (selectedMaterialId === "all") {
      materialsContext = availableMaterials
        .map(
          (m) =>
            `Tytuł materiału: ${m.title}\nWymogi wykładowcy: ${m.analysis?.lecturerRequirements?.join("; ") || "Brak"}\nPułapki: ${m.analysis?.examTraps?.join("; ") || "Brak"}`
        )
        .join("\n\n");
    } else if (selectedMaterialId !== "none") {
      const mat = availableMaterials.find((m) => m.id === selectedMaterialId);
      if (mat) {
        materialsContext = `Tytuł: ${mat.title}\nWymogi: ${mat.analysis?.lecturerRequirements?.join("; ")}\nPułapki: ${mat.analysis?.examTraps?.join("; ")}`;
      }
    }

    try {
      const response = await fetch("/api/generate-case", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: effectiveTopic,
          difficulty,
          materialsContext,
          additionalContext,
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `Błąd serwera (${response.status})`);
      }

      const newCase: CaseData = await response.json();
      onCaseGenerated(newCase);
    } catch (err: unknown) {
      console.error("Case generation failed", err);
      const msg = err instanceof Error ? err.message : "Nie udało się wygenerować kazusu.";
      setErrorMessage(
        `${msg} Upewnij się, że klucz GEMINI_API_KEY jest skonfigurowany w .env lub spróbuj ponownie.`
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-300 overflow-hidden shadow-xs max-w-5xl mx-auto">
      {/* Top Academic Navy & Slate Header */}
      <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-900 text-white">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded border border-slate-700 bg-slate-800 text-slate-200 uppercase tracking-wider font-bold">
            Generator Kazusów Katedry Prawa Karnego • OIRP Bydgoszcz
          </span>
        </div>
        <h2 className="text-xl font-serif font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-slate-300" />
          Wygeneruj Nowy Kazus pod Kolokwium Roczne (II Rok)
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed font-sans">
          Stwórz realistyczny, wielostronicowy kazus sądowy z sentencją wyroku, stanem faktycznym i uzasadnieniem. AI ukryje w nim uchybienia dopasowane do podręcznika Tomkiewicz i Twoich notatek.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleGenerate} className="p-5 sm:p-6 space-y-6 bg-white">
        {errorMessage && (
          <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="font-semibold block">Błąd generowania kazusu:</strong>
              <span>{errorMessage}</span>
            </div>
          </div>
        )}

        {/* Topic selection */}
        <div>
          <label className="block text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-2.5">
            1. Tematyka kazusu i węzeł prawny:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {predefinedTopics.map((t, idx) => (
              <label
                key={idx}
                className={`p-3.5 rounded-lg border text-xs cursor-pointer transition-all flex items-start gap-2.5 ${
                  topic === t
                    ? "bg-slate-100 border-slate-900 text-slate-950 font-serif font-bold shadow-xs ring-1 ring-slate-900"
                    : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 font-sans"
                }`}
              >
                <input
                  type="radio"
                  name="topicRadio"
                  checked={topic === t}
                  onChange={() => setTopic(t)}
                  className="mt-0.5 text-slate-900 focus:ring-slate-900"
                />
                <span className="leading-relaxed break-words">{t}</span>
              </label>
            ))}
          </div>

          {topic === "Własny temat lub preferencje (wpisz poniżej)" && (
            <input
              type="text"
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
              placeholder="np. Przestępstwo urzędnicze z art. 231 k.k., niegospodarność lub wątek alibi..."
              className="mt-2.5 w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-1 focus:ring-slate-900 focus:border-slate-900 font-serif"
            />
          )}
        </div>

        {/* Difficulty & Source Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-slate-100">
          <div>
            <label className="block text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-2">
              2. Poziom trudności (Kolokwium II Rok):
            </label>
            <div className="flex flex-col gap-2">
              {(["Warsztat wstępny (kazus wprowadzający)", "Kolokwium roczne (II rok aplikacji radcowskiej)", "Kolokwium roczne — poziom zaawansowany"] as const).map((lvl) => (
                <label
                  key={lvl}
                  className={`p-3 rounded-lg border text-xs cursor-pointer flex items-center justify-between font-serif ${
                    difficulty === lvl
                      ? "bg-slate-100 border-slate-900 text-slate-950 font-bold ring-1 ring-slate-900"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="diffRadio"
                      checked={difficulty === lvl}
                      onChange={() => setDifficulty(lvl)}
                      className="text-slate-900 focus:ring-slate-900"
                    />
                    <span>{lvl}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {lvl === "Warsztat wstępny (kazus wprowadzający)"
                      ? "1-2 uchybienia"
                      : lvl === "Kolokwium roczne (II rok aplikacji radcowskiej)"
                      ? "Standard OIRP Bydgoszcz"
                      : "Złożone zbiegi przepisów"}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-2">
              3. Oparcie na materiałach źródłowych:
            </label>
            <select
              value={selectedMaterialId}
              onChange={(e) => setSelectedMaterialId(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-1 focus:ring-slate-900 focus:border-slate-900 bg-white font-serif"
            >
              <option value="all">
                Wszystkie zarejestrowane materiały + kanon Tomkiewicz ({availableMaterials.length})
              </option>
              {availableMaterials.map((m) => (
                <option key={m.id} value={m.id}>
                  Tylko: {m.title.slice(0, 45)}...
                </option>
              ))}
              <option value="none">Standardowy kazus (ogólne przepisy k.p.k. i k.k.)</option>
            </select>

            <div className="mt-4">
              <label className="block text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                4. Dodatkowe wytyczne dla AI (opcjonalnie):
              </label>
              <textarea
                rows={2}
                value={additionalContext}
                onChange={(e) => setAdditionalContext(e.target.value)}
                placeholder="np. Sąd I instancji ma pominąć dowód z monitoringu i wymierzyć karę bez zawieszenia..."
                className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-slate-900 focus:border-slate-900 font-serif"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-slate-500 font-sans text-center sm:text-left">
            AI wygeneruje wyrok, uzasadnienie i ukryje wady procesowe do wykrycia na kolokwium.
          </div>

          <button
            type="submit"
            disabled={isGenerating}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-slate-400 border-t-white rounded-full animate-spin" />
                <span>Generowanie obszernego kazusu...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-slate-300" />
                <span>Wygeneruj Kazus na Kolokwium</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
