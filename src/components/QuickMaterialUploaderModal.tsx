import React, { useState } from "react";
import { Upload, FileText, CheckCircle2, AlertCircle, X, Sparkles, FolderUp } from "lucide-react";
import { SourceMaterial } from "../types";

interface QuickMaterialUploaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveMaterial: (material: SourceMaterial) => void;
}

export const QuickMaterialUploaderModal: React.FC<QuickMaterialUploaderModalProps> = ({
  isOpen,
  onClose,
  onSaveMaterial,
}) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<"prezentacja" | "ksiazka" | "notatki" | "kazusy_z_zajec">("notatki");
  const [content, setContent] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  if (!isOpen) return null;

  const processFile = (file: File) => {
    setFileName(file.name);
    if (!title) {
      setTitle(file.name.replace(/\.[^/.]+$/, ""));
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setContent(text || "");
    };
    reader.readAsText(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !title.trim()) {
      alert("Proszę podać tytuł oraz wkleić lub wgrać treść materiałów.");
      return;
    }

    const newMaterial: SourceMaterial = {
      id: `custom-mat-${Date.now()}`,
      title: title.trim(),
      category,
      addedAt: new Date().toISOString(),
      content: content.trim(),
      analysis: {
        summary: `Materiał załadowany przez użytkownika (${content.length} znaków).`,
        keyConcepts: ["Materiały własne aplikacji", "Wymogi formalne", "Analiza kazusowa"],
        lecturerRequirements: ["Zastosowanie w bieżącym treningu i ocenie apelacji"],
        examTraps: ["Brak uwzględnienia specyfiki orzeczniczej materiału"],
        suggestedPracticeTopics: [title.trim()],
      },
    };

    onSaveMaterial(newMaterial);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border border-slate-300 shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden text-slate-900">
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-slate-950 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
              <FolderUp className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm tracking-wide">
                Wgraj materiały do aplikacji (Plik lub Tekst)
              </h3>
              <p className="text-[11px] text-slate-300">
                Bez limitu tokenów czatu • Książki, skrypty, notatki z zajęć OIRP
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-3 my-auto">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-slate-900 text-base">
              Materiał został pomyślnie dodany!
            </h4>
            <p className="text-xs text-slate-600">
              Aplikacja zapisała materiał w bazie wiedzy. Będzie on używany w weryfikacji Twojej apelacji.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 flex-1 overflow-y-auto space-y-4">
            {/* Drag & drop zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-4 text-center transition-colors ${
                isDragging
                  ? "border-slate-800 bg-slate-100"
                  : "border-slate-300 bg-slate-50/50 hover:bg-slate-50"
              }`}
            >
              <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1.5" />
              <div className="text-xs font-semibold text-slate-800">
                Przeciągnij plik tutaj lub{" "}
                <label className="text-slate-900 font-bold hover:underline cursor-pointer">
                  wybierz z dysku (.txt, .md, .doc, .rtf)
                  <input
                    type="file"
                    accept=".txt,.md,.text,.doc,.rtf,.json"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {fileName ? (
                  <span className="font-mono text-emerald-700 font-semibold flex items-center justify-center gap-1">
                    <FileText className="w-3.5 h-3.5" /> Wczytano plik: {fileName}
                  </span>
                ) : (
                  "Wybierz plik tekstowy ze swoimi materiałami lub wklej treść poniżej"
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Tytuł materiału:
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="np. Skrypt OIRP - Apelacja karna / Wytyczne z ćwiczeń"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 font-serif"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Kategoria:
                </label>
                <select
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value as "prezentacja" | "ksiazka" | "notatki" | "kazusy_z_zajec")
                  }
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 bg-white font-serif"
                >
                  <option value="notatki">Notatki z zajęć / wykładów</option>
                  <option value="ksiazka">Podręcznik / Komentarz</option>
                  <option value="prezentacja">Prezentacja / Slajdy</option>
                  <option value="kazusy_z_zajec">Kazusy z kolokwium</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700">
                  Treść materiału (możesz tu wkleić nawet setki stron):
                </label>
                <span className="text-[10px] font-mono text-slate-500">
                  {content.length.toLocaleString()} znaków
                </span>
              </div>
              <textarea
                rows={9}
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Wklej treść notatek, fragmenty książki, wytyczne co do konstrukcji zarzutów z art. 438 k.p.k., kazusy lub orzecznictwo..."
                className="w-full p-3 text-xs font-mono border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 leading-relaxed bg-slate-50/30"
              />
            </div>

            <div className="p-3 bg-slate-50 border border-slate-300 rounded-xl text-[11px] text-slate-700 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
              <div>
                <strong>Jak aplikacja wykorzysta ten materiał:</strong> Materiał zostanie natychmiast
                zapisany w pamięci aplikacji. Możesz go w każdej chwili wybrać do wygenerowania dedykowanego
                kazusu oraz jako bazę oceniania w module weryfikacji apelacji.
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs text-slate-600 hover:text-slate-900 font-semibold"
              >
                Anuluj
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xs flex items-center gap-1.5 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zapisz w Bazie Materiałów</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
