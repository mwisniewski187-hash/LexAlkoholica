import React, { useState } from "react";
import { SourceMaterial, MaterialAnalysis } from "../types";
import { TOMKIEWICZ_BOOK_INFO, TOMKIEWICZ_CHAPTERS } from "../data/tomkiewiczBook";
import {
  Upload,
  Sparkles,
  BookOpen,
  Trash2,
  CheckCircle2,
  Plus,
  Cpu,
} from "lucide-react";

interface MaterialsManagerProps {
  materials: SourceMaterial[];
  onAddMaterial: (material: SourceMaterial) => void;
  onDeleteMaterial: (id: string) => void;
  onSelectForTraining?: (material: SourceMaterial) => void;
}

export const MaterialsManager: React.FC<MaterialsManagerProps> = ({
  materials,
  onAddMaterial,
  onDeleteMaterial,
  onSelectForTraining,
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<"prezentacja" | "ksiazka" | "notatki" | "kazusy_z_zajec">("ksiazka");
  const [content, setContent] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<SourceMaterial | null>(
    materials.length > 0 ? materials[0] : null
  );

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setContent(text);
      if (!title) {
        setTitle(file.name.replace(/\.[^/.]+$/, ""));
      }
    };
    reader.readAsText(file);
  };

  const handleSaveAndAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !title.trim()) {
      alert("Wypełnij tytuł oraz wklej lub załaduj treść materiału.");
      return;
    }

    setIsAnalyzing(true);
    try {
      const response = await fetch("/api/analyze-materials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, title }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Błąd analizy materiałów");
      }

      const analysis: MaterialAnalysis = await response.json();

      const newMaterial: SourceMaterial = {
        id: `mat-${Date.now()}`,
        title,
        category,
        content,
        addedAt: new Date().toISOString(),
        analysis,
      };

      onAddMaterial(newMaterial);
      setSelectedMaterial(newMaterial);
      setShowAddForm(false);
      setTitle("");
      setContent("");
    } catch (err: unknown) {
      console.error(err);
      const newMaterial: SourceMaterial = {
        id: `mat-${Date.now()}`,
        title,
        category,
        content,
        addedAt: new Date().toISOString(),
      };
      onAddMaterial(newMaterial);
      setSelectedMaterial(newMaterial);
      setShowAddForm(false);
      setTitle("");
      setContent("");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const loadTomkiewiczBookAsMaterial = () => {
    setTitle("Podręcznik: Konstrukcja Apelacji Karnej - adw. Marta Tomkiewicz-Januszewska (2023)");
    setCategory("ksiazka");
    const bookContent = `KOMPENDIUM KANONICZNE Z PODRĘCZNIKA:
Tytuł: ${TOMKIEWICZ_BOOK_INFO.title}
Autor: ${TOMKIEWICZ_BOOK_INFO.author}
Wydawca: ${TOMKIEWICZ_BOOK_INFO.publisher} (${TOMKIEWICZ_BOOK_INFO.isbn})

GŁÓWNE REGUŁY I ROZDZIAŁY:
${TOMKIEWICZ_CHAPTERS.map(
  (c) => `=== ${c.title} ===
${c.subtitle}
Złote reguły:
${c.keyRules.map((r, i) => `${i + 1}. ${r}`).join("\n")}
Pułapki i błędy:
${c.pitfalls.map((p) => `- ${p}`).join("\n")}
Wzorcowa formuła:
${c.formula || "Brak"}
`
).join("\n\n")}`;

    setContent(bookContent);
  };

  const loadExampleLecturerNotes = () => {
    setTitle("Wymogi kolokwialne prowadzącego (Bydgoszcz) - Zarzuty i Pułapki");
    setCategory("prezentacja");
    setContent(
`WYCIĄG ZE SLAJDÓW I NOTATEK PROWADZĄCEGO:
1. NAJCZĘSTSZE BŁĘDY DYSKWALIFIKUJĄCE NA KOLOKWIUM:
- Zbieg zarzutu obrazy prawa materialnego (art. 438 pkt 1 k.p.k.) i błędu w ustaleniach faktycznych bez formuły ewentualnej. Prowadzący stawia ocenę niedostateczną przy sformułowaniach typu: 'Sąd naruszył art. 148 k.k., bo błędnie ustalił, że oskarżony działał z zamiarem bezpośrednim'.
- Brak ustawowego zwrotu: 'mającą wpływ na treść orzeczenia' przy zarzucie z art. 438 pkt 2 k.p.k. i pkt 3 k.p.k.
- Niewskazanie konkretnych dowodów z imienia i nazwiska przy zarzucie dowolnej oceny z art. 7 k.p.k.

2. WYMOGI CO DO WNIOSKÓW APELACYJNYCH:
- Skarżąc na korzyść: wniosek główny o zmianę wyroku (uniewinnienie lub złagodzenie kwalifikacji/kary).
- Z ostrożności procesowej zawsze formułujemy wniosek ewentualny o uchylenie wyroku w całości i przekazanie do ponownego rozpoznania (art. 437 § 2 k.p.k.).

3. ULUBIONE ZAGADNIENIA PROWADZĄCEGO:
- Obrona konieczna (art. 25 k.k.) - samoistny, nie subsydiarny charakter. Brak obowiązku ucieczki.
- Błąd co do znamion kontratypu (art. 29 k.k.) vs eksces intensywny/ekstensywny (art. 25 § 2 k.k.).
- Kradzież rozbójnicza (art. 281 k.k.) a porzucenie mienia przed użyciem przemocy (art. 278 k.k. + art. 157 k.k. lub 217 k.k.).`
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Token & Material Guide Callout */}
      <div className="bg-white rounded-xl border border-slate-300 p-5 shadow-xs">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-700 shrink-0">
            <Cpu className="w-5 h-5" />
          </div>
          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-serif font-bold text-slate-950 uppercase tracking-wide">
                Baza wiedzy merytorycznej • Obsługa dużych tomów i książek
              </h3>
              <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700 font-bold">
                Pojemność: 1 000 000+ tokenów
              </span>
            </div>
            <div className="text-xs text-slate-700 leading-relaxed grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 font-sans">
              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <strong className="text-slate-950 block font-serif font-semibold">1. Twoja książka i notatki:</strong>
                <p>Wklej cały podręcznik lub slajdy z zajęć. Aplikacja nie ogranicza liczby stron – model natychmiast asymiluje treść.</p>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <strong className="text-slate-950 block font-serif font-semibold">2. Wbudowany kanon Tomkiewicz:</strong>
                <p>Książka adw. Marty Tomkiewicz-Januszewskiej (2023) jest na stałe włączona do promptu sprawdzającego i generatora.</p>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <strong className="text-slate-950 block font-serif font-semibold">3. Rygor oceniania:</strong>
                <p>Każda przesłana przez Ciebie apelacja sprawdzana jest pod kątem zakazu zarzutów mieszanych (Rozdz. 7.4) i 3 członów art. 7 k.p.k.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar with Clean Styling */}
      <div className="bg-white rounded-xl border border-slate-300 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              Baza Źródeł Merytorycznych ({materials.length})
            </span>
          </div>
          <h2 className="text-lg font-serif font-bold text-slate-950 mt-0.5">
            Materiały z Zajęć, Wytyczne Prowadzącego & Podręcznik
          </h2>
          <p className="text-xs text-slate-600 mt-0.5 max-w-2xl leading-relaxed font-sans">
            Materiały zapisane w tej bazie są traktowane jako <strong>nadrzędne źródło prawdy</strong> przy weryfikacji Twojej apelacji.
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2.5 bg-slate-950 hover:bg-slate-800 text-white rounded-lg text-xs font-bold shadow-xs flex items-center gap-2 self-start md:self-auto transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>{showAddForm ? "Zamknij formularz" : "Dodaj Materiał / Notatki"}</span>
        </button>
      </div>

      {/* Add Material Form */}
      {showAddForm && (
        <div className="bg-white rounded-xl border border-slate-300 p-5 sm:p-6 space-y-4 shadow-md">
          <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-3 gap-2">
            <h3 className="text-sm font-serif font-bold text-slate-950 flex items-center gap-2">
              <Upload className="w-4 h-4 text-slate-700" />
              Wprowadź nowy materiał merytoryczny (tekst, książka, slajdy)
            </h3>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={loadTomkiewiczBookAsMaterial}
                className="text-xs text-slate-700 hover:text-slate-950 font-serif font-medium underline flex items-center gap-1"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Wstaw wyciąg z kanonu Tomkiewicz (2023)
              </button>
              <span className="text-slate-300">•</span>
              <button
                type="button"
                onClick={loadExampleLecturerNotes}
                className="text-xs text-slate-700 hover:text-slate-950 font-serif font-medium underline flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Wstaw wytyczne z Bydgoszczy
              </button>
            </div>
          </div>

          <form onSubmit={handleSaveAndAnalyze} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-1">
                  Tytuł materiału:
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="np. Wykład 4 - Obrona konieczna i zarzuty z art. 438 k.p.k."
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-1 focus:ring-slate-500 focus:border-slate-500 font-serif"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-1">
                  Kategoria:
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as "prezentacja" | "ksiazka" | "notatki" | "kazusy_z_zajec")}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-1 focus:ring-slate-500 focus:border-slate-500 bg-white font-serif"
                >
                  <option value="ksiazka">Podręcznik / Komentarz</option>
                  <option value="prezentacja">Prezentacja / Slajdy z zajęć</option>
                  <option value="notatki">Notatki własne</option>
                  <option value="kazusy_z_zajec">Kazusy z ćwiczeń</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                  Treść materiału (wklej tekst lub wgraj plik .txt / .md):
                </label>
                <label className="cursor-pointer text-xs text-slate-700 hover:text-slate-950 font-serif font-semibold underline flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5" />
                  Wgraj plik tekstowy
                  <input
                    type="file"
                    accept=".txt,.md,.text"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <textarea
                rows={9}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Wklej tutaj treść notatek, fragmenty książki, wytyczne co do redakcji apelacji..."
                className="w-full p-3 text-xs sm:text-sm font-mono border border-slate-300 rounded-lg focus:ring-1 focus:ring-slate-500 focus:border-slate-500 leading-relaxed"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-xs text-slate-700 hover:text-black font-serif font-medium"
              >
                Anuluj
              </button>
              <button
                type="submit"
                disabled={isAnalyzing}
                className="px-5 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-slate-400 border-t-white rounded-full animate-spin" />
                    <span>Analizowanie wytycznych przez AI...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Zapisz & Zintegruj z AI</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Materials List & Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Material cards */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
            Zarejestrowane Źródła ({materials.length})
          </h3>

          {materials.length === 0 ? (
            <div className="p-6 rounded-xl border border-dashed border-slate-300 text-center text-xs text-slate-500 bg-white">
              Brak materiałów. Dodaj pierwszą notatkę lub wczytaj podręcznik.
            </div>
          ) : (
            materials.map((mat) => {
              const isSelected = selectedMaterial?.id === mat.id;
              return (
                <div
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left relative group ${
                    isSelected
                      ? "bg-white border-slate-900 shadow-md ring-1 ring-slate-900"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-900 text-slate-300 font-bold">
                      {mat.category}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`Usunąć materiał "${mat.title}"?`)) {
                          onDeleteMaterial(mat.id);
                          if (selectedMaterial?.id === mat.id) {
                            setSelectedMaterial(null);
                          }
                        }
                      }}
                      className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                      title="Usuń materiał"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4 className="text-xs sm:text-sm font-serif font-bold text-slate-950 mt-2 line-clamp-2 leading-snug">
                    {mat.title}
                  </h4>

                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 font-sans">
                    {mat.content.slice(0, 120)}...
                  </p>

                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>{new Date(mat.addedAt).toLocaleDateString("pl-PL")}</span>
                    <span className="text-slate-900 font-semibold font-serif">
                      {isSelected ? "Wybrano podgląd" : "Kliknij, aby otworzyć"}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Material Analysis & Content Detail */}
        <div className="lg:col-span-2">
          {selectedMaterial ? (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden space-y-4">
              <div className="p-5 border-b border-slate-200 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 font-bold uppercase">
                      {selectedMaterial.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      Dodano: {new Date(selectedMaterial.addedAt).toLocaleDateString("pl-PL")}
                    </span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-slate-950 mt-1">
                    {selectedMaterial.title}
                  </h3>
                </div>

                {onSelectForTraining && (
                  <button
                    onClick={() => onSelectForTraining(selectedMaterial)}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Generuj kazus z tego materiału</span>
                  </button>
                )}
              </div>

              {/* AI Structured Analysis */}
              {selectedMaterial.analysis && (
                <div className="px-5 space-y-4">
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-300 space-y-1.5">
                    <h4 className="text-xs font-mono font-bold uppercase text-slate-950 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-slate-700" />
                      Wnioski z analizy materiału dla aplikanta:
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                      {selectedMaterial.analysis.summary}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {selectedMaterial.analysis.lecturerRequirements && selectedMaterial.analysis.lecturerRequirements.length > 0 && (
                      <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                        <strong className="text-slate-950 font-serif block">Kluczowe wymogi prowadzącego:</strong>
                        <ul className="list-disc pl-4 space-y-1 text-slate-700">
                          {selectedMaterial.analysis.lecturerRequirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedMaterial.analysis.examTraps && selectedMaterial.analysis.examTraps.length > 0 && (
                      <div className="p-3.5 rounded-lg bg-rose-50/60 border border-rose-200 space-y-1.5">
                        <strong className="text-rose-950 font-serif block">Wytknięte pułapki kolokwialne:</strong>
                        <ul className="list-disc pl-4 space-y-1 text-rose-900">
                          {selectedMaterial.analysis.examTraps.map((trap, i) => (
                            <li key={i}>{trap}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedMaterial.analysis.practicalTips && selectedMaterial.analysis.practicalTips.length > 0 && (
                      <div className="p-3.5 rounded-lg bg-slate-100 border border-slate-300 space-y-1.5 col-span-full">
                        <strong className="text-slate-950 font-serif block">Wskazówki praktyczne i orzecznicze:</strong>
                        <ul className="list-disc pl-4 space-y-1 text-slate-800">
                          {selectedMaterial.analysis.practicalTips.map((tip, i) => (
                            <li key={i}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Full Raw Content with Scroll */}
              <div className="p-5 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Pełna treść źródłowa:
                </h4>
                <pre className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 leading-relaxed whitespace-pre-wrap break-words max-h-80 overflow-y-auto">
                  {selectedMaterial.content}
                </pre>
              </div>
            </div>
          ) : (
            <div className="p-12 rounded-xl border border-slate-200 bg-white text-center text-slate-400 font-serif">
              Wybierz materiał z listy po lewej stronie, aby wyświetlić szczegóły i analizę.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
