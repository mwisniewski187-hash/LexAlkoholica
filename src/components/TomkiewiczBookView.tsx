import React, { useState } from "react";
import { TOMKIEWICZ_BOOK_INFO, TOMKIEWICZ_CHAPTERS, BookChapter } from "../data/tomkiewiczBook";
import { BookOpen, Scale, Award, AlertTriangle, Copy, Check, ChevronRight, ShieldAlert, Sparkles, HelpCircle, FileCheck } from "lucide-react";

interface TomkiewiczBookViewProps {
  onInsertSnippetToEditor?: (text: string) => void;
  onNavigateToWorkshop?: () => void;
}

export const TomkiewiczBookView: React.FC<TomkiewiczBookViewProps> = ({
  onInsertSnippetToEditor,
  onNavigateToWorkshop,
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>("rozdzial-7");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeChapter =
    TOMKIEWICZ_CHAPTERS.find((c) => c.id === selectedChapterId) || TOMKIEWICZ_CHAPTERS[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* High-Contrast Academic Slate Banner */}
      <div className="rounded-xl border border-slate-700 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-slate-700/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded border border-slate-700 bg-slate-800 text-slate-300 uppercase tracking-wider font-semibold">
                Oficjalne Źródło Wiedzy • Izba Adwokacka w Warszawie 2023
              </span>
              <span className="text-[11px] text-slate-400 font-serif italic">
                {TOMKIEWICZ_BOOK_INFO.isbn}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
              {TOMKIEWICZ_BOOK_INFO.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-serif">
              Autor: <strong className="text-slate-200 font-sans font-semibold">{TOMKIEWICZ_BOOK_INFO.author}</strong> — sędzia, adwokat, wykładowca Izby Adwokackiej w Warszawie.
            </p>
            <p className="text-xs text-slate-300/90 leading-relaxed font-sans max-w-2xl">
              Podręcznik stanowi ścisły kanon poprawności redagowania apelacji karnej. Sprawdzający kolokwium ocenia Twoją pracę dokładnie według reguł gradacji zarzutów, zakazu zarzutów mieszanych (Rozdz. 7.4) i prymatu orzekania reformatoryjnego (Rozdz. 8).
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-700 shrink-0 text-center space-y-1.5 shadow-md">
            <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
              Baza Systemowa AI
            </div>
            <div className="text-lg font-bold font-serif text-white">
              6 Rozdziałów
            </div>
            <div className="text-[11px] text-emerald-400 font-mono flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
              Zintegrowano z AI
            </div>
          </div>
        </div>
      </div>

      {/* Chapters Grid / Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {TOMKIEWICZ_CHAPTERS.map((ch) => {
          const isActive = ch.id === selectedChapterId;
          return (
            <button
              key={ch.id}
              onClick={() => setSelectedChapterId(ch.id)}
              className={`p-3 rounded-lg border text-left transition-all flex flex-col justify-between ${
                isActive
                  ? "bg-slate-900 border-slate-600 text-white shadow-md ring-1 ring-slate-600"
                  : "bg-white border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50"
              }`}
            >
              <div>
                <span className={`text-[10px] font-mono uppercase font-bold tracking-wider ${isActive ? "text-slate-300" : "text-slate-400"}`}>
                  Rozdział {ch.chapterNumber}
                </span>
                <h4 className={`text-xs font-serif font-bold mt-1 line-clamp-2 leading-tight ${isActive ? "text-white" : "text-slate-900"}`}>
                  {ch.title.replace(`Rozdział ${ch.chapterNumber}: `, "")}
                </h4>
              </div>
              <span className={`text-[10px] mt-2 block font-sans ${isActive ? "text-slate-300" : "text-slate-400"}`}>
                Kliknij, aby otworzyć &rarr;
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Chapter Reader & Interactive Tools */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Chapter Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 font-bold uppercase">
                Rozdział {activeChapter.chapterNumber}
              </span>
              <span className="text-xs text-slate-500 font-serif">Kanon adw. M. Tomkiewicz-Januszewskiej</span>
            </div>
            <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-950 mt-1">
              {activeChapter.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans mt-0.5">
              {activeChapter.subtitle}
            </p>
          </div>

          {activeChapter.formula && onInsertSnippetToEditor && (
            <button
              onClick={() => {
                onInsertSnippetToEditor(activeChapter.formula!);
                if (onNavigateToWorkshop) onNavigateToWorkshop();
              }}
              className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-all shadow-xs"
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>Wstaw wzór do Warsztatu</span>
            </button>
          )}
        </div>

        {/* Chapter Body */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Key Golden Rules */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase text-slate-900 tracking-wider mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-slate-700" />
              Złote reguły i nakazy adw. M. Tomkiewicz-Januszewskiej:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeChapter.keyRules.map((rule, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-slate-200/90 bg-slate-50 text-xs sm:text-sm text-slate-800 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="font-sans break-words">{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Model Formula Snippet */}
          {activeChapter.formula && (
            <div className="rounded-lg border border-slate-700 bg-slate-950 p-4 text-white space-y-2.5 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5" />
                  Wzorcowa formuła do petitum / zarzutów z książki:
                </span>
                <button
                  onClick={() => handleCopy(activeChapter.formula!, activeChapter.id)}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-medium flex items-center gap-1 transition-colors"
                >
                  {copiedId === activeChapter.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Skopiowano</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-400" />
                      <span>Kopiuj formułę</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-3.5 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-slate-200 leading-relaxed whitespace-pre-wrap break-words overflow-x-auto">
                {activeChapter.formula}
              </pre>
            </div>
          )}

          {/* Pitfalls & Dyskwalifikacje */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase text-rose-900 tracking-wider mb-2.5 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              Pułapki i błędy dyskwalifikujące na kolokwium:
            </h3>
            <div className="space-y-2">
              {activeChapter.pitfalls.map((pit, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border border-rose-200 bg-rose-50/70 text-xs sm:text-sm text-rose-950 flex items-start gap-2.5 leading-relaxed"
                >
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span className="font-medium break-words">{pit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SN Judicature Quotes */}
          {activeChapter.snRulingQuotes.length > 0 && (
            <div>
              <h3 className="text-xs font-mono font-bold uppercase text-slate-900 tracking-wider mb-2.5 flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-slate-700" />
                Kanon Orzecznictwa Sądu Najwyższego (cytaty z książki):
              </h3>
              <div className="space-y-3">
                {activeChapter.snRulingQuotes.map((ruling, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-slate-200 bg-slate-50 text-xs sm:text-sm text-slate-800 space-y-1.5"
                  >
                    <div className="font-mono text-xs font-bold text-slate-950 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                      {ruling.court}
                    </div>
                    <p className="font-serif italic text-slate-700 leading-relaxed pl-3 border-l-2 border-slate-700">
                      „{ruling.thesis}”
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
