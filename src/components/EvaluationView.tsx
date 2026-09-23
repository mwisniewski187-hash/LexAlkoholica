import React, { useState } from "react";
import { AppealEvaluation, CaseData, AppealSubmission } from "../types";
import { CheckCircle2, AlertTriangle, ArrowLeft, ArrowRight, Copy, Check, FileText, BookOpen } from "lucide-react";

interface EvaluationViewProps {
  evaluation: AppealEvaluation;
  currentCase: CaseData;
  submission: AppealSubmission;
  onTryAgain: () => void;
  onSelectNextCase?: () => void;
}

export const EvaluationView: React.FC<EvaluationViewProps> = ({
  evaluation,
  currentCase,
  submission,
  onTryAgain,
  onSelectNextCase,
}) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [activeModelTab, setActiveModelTab] = useState<"zarzuty" | "wnioski" | "uzasadnienie">("zarzuty");

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedSection(key);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-5 pb-8">
      {/* Top Protocol Card */}
      <div className="bg-white rounded-xl border border-slate-300 shadow-xs overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/70">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-1">
              <span>Protokół Oceny Apelacji</span>
              <span>•</span>
              <span className="font-bold text-slate-900">{currentCase.caseNumber}</span>
              <span>•</span>
              <span>{currentCase.court}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
              Ocena końcowa: {evaluation.grade}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1.5 max-w-xl leading-relaxed">
              {evaluation.summaryAssessment}
            </p>
          </div>

          {/* Clean Score Badge */}
          <div className="shrink-0 p-4 rounded-xl bg-white border border-slate-300 text-center min-w-[150px] shadow-2xs">
            <div className="text-3xl sm:text-4xl font-serif font-black text-slate-950 tracking-tight">
              {evaluation.score}
              <span className="text-sm font-normal text-slate-400"> / 20</span>
            </div>
            <div className="text-xs font-mono font-bold mt-1">
              {evaluation.passed ? (
                <span className="text-emerald-700 flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> ZALICZONE
                </span>
              ) : (
                <span className="text-rose-700 flex items-center justify-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> DO POPRAWY
                </span>
              )}
            </div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">
              Wymagany próg zdania: 12 pkt
            </div>
          </div>
        </div>

        {/* 4 Score Criteria */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 bg-white text-center">
          <div className="p-3.5">
            <div className="text-[11px] text-slate-500 font-medium">Formuła zarzutów</div>
            <div className="text-base font-bold font-mono text-slate-900 mt-0.5">
              {evaluation.scoreBreakdown.chargesFormulation} / 6
            </div>
          </div>
          <div className="p-3.5">
            <div className="text-[11px] text-slate-500 font-medium">Trafność merytoryczna</div>
            <div className="text-base font-bold font-mono text-slate-900 mt-0.5">
              {evaluation.scoreBreakdown.chargesSubstance} / 6
            </div>
          </div>
          <div className="p-3.5">
            <div className="text-[11px] text-slate-500 font-medium">Wnioski apelacji</div>
            <div className="text-base font-bold font-mono text-slate-900 mt-0.5">
              {evaluation.scoreBreakdown.motionsCorrectness} / 4
            </div>
          </div>
          <div className="p-3.5">
            <div className="text-[11px] text-slate-500 font-medium">Uzasadnienie</div>
            <div className="text-base font-bold font-mono text-slate-900 mt-0.5">
              {evaluation.scoreBreakdown.justificationQuality} / 4
            </div>
          </div>
        </div>
      </div>

      {/* Critical Remarks & Feedback */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Strong points */}
        <div className="bg-white rounded-xl border border-slate-300 p-4 sm:p-5 shadow-xs">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wide text-emerald-800 flex items-center gap-1.5 mb-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Mocne strony Twojej pracy:
          </h4>
          {evaluation.strongPoints && evaluation.strongPoints.length > 0 ? (
            <ul className="space-y-2 text-xs text-slate-800 font-sans">
              {evaluation.strongPoints.map((str, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-slate-500 italic">Brak wyraźnych atutów formalnych.</p>
          )}
        </div>

        {/* Flaws and corrections */}
        <div className="bg-white rounded-xl border border-slate-300 p-4 sm:p-5 shadow-xs">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wide text-rose-800 flex items-center gap-1.5 mb-2.5">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            Uchybienia i błędy formalne (z kanonu Tomkiewicz):
          </h4>
          {evaluation.criticalErrors && evaluation.criticalErrors.length > 0 ? (
            <div className="space-y-3">
              {evaluation.criticalErrors.map((err, idx) => (
                <div key={idx} className="text-xs border-l-2 border-rose-500 pl-3 py-1 bg-rose-50/40 rounded-r">
                  <strong className="text-rose-900 block font-serif">{err.errorTitle}</strong>
                  <p className="text-slate-800 mt-0.5">{err.description}</p>
                  <p className="text-rose-950 font-mono text-[11px] mt-1 bg-white p-1.5 rounded border border-rose-200">
                    💡 Zalecenie: {err.howToFix}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic">Brak rażących błędów dyskwalifikujących.</p>
          )}
        </div>
      </div>

      {/* Model Solution according to Tomkiewicz Canon */}
      <div className="bg-white rounded-xl border border-slate-300 shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-sm sm:text-base font-serif font-bold text-slate-950 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-slate-700" />
              Wzorcowe rozwiązanie kanonu Tomkiewicz
            </h3>
            <p className="text-xs text-slate-600">
              Porównaj ze swoją pracą i skopiuj prawidłowe sformułowania
            </p>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveModelTab("zarzuty")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeModelTab === "zarzuty" ? "bg-slate-950 text-white" : "text-slate-700 hover:bg-slate-200"
              }`}
            >
              Zarzuty
            </button>
            <button
              onClick={() => setActiveModelTab("wnioski")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeModelTab === "wnioski" ? "bg-slate-950 text-white" : "text-slate-700 hover:bg-slate-200"
              }`}
            >
              Wnioski
            </button>
            <button
              onClick={() => setActiveModelTab("uzasadnienie")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeModelTab === "uzasadnienie" ? "bg-slate-950 text-white" : "text-slate-700 hover:bg-slate-200"
              }`}
            >
              Uzasadnienie
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          {activeModelTab === "zarzuty" && (
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-slate-500">
                <span className="font-mono text-[11px] font-bold">Modelowe petitum zarzutów:</span>
                <button
                  onClick={() => copyToClipboard(evaluation.modelAppeal.modelChargesText, "model_charges")}
                  className="text-xs text-slate-700 hover:text-slate-950 flex items-center gap-1 px-2.5 py-1 rounded-md border border-slate-300 bg-white shadow-2xs"
                >
                  {copiedSection === "model_charges" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Skopiowano</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Kopiuj wzorzec</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-950 whitespace-pre-line leading-relaxed shadow-2xs">
                {evaluation.modelAppeal.modelChargesText}
              </div>
            </div>
          )}

          {activeModelTab === "wnioski" && (
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-slate-500">
                <span className="font-mono text-[11px] font-bold">Modelowe wnioski odwoławcze:</span>
                <button
                  onClick={() => copyToClipboard(evaluation.modelAppeal.modelMotionsText, "model_motions")}
                  className="text-xs text-slate-700 hover:text-slate-950 flex items-center gap-1 px-2.5 py-1 rounded-md border border-slate-300 bg-white shadow-2xs"
                >
                  {copiedSection === "model_motions" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Skopiowano</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Kopiuj wnioski</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-950 whitespace-pre-line leading-relaxed shadow-2xs">
                {evaluation.modelAppeal.modelMotionsText}
              </div>
            </div>
          )}

          {activeModelTab === "uzasadnienie" && (
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-slate-500">
                <span className="font-mono text-[11px] font-bold">Modelowy zarys uzasadnienia:</span>
                <button
                  onClick={() => copyToClipboard(evaluation.modelAppeal.modelJustificationBrief, "model_just")}
                  className="text-xs text-slate-700 hover:text-slate-950 flex items-center gap-1 px-2.5 py-1 rounded-md border border-slate-300 bg-white shadow-2xs"
                >
                  {copiedSection === "model_just" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Skopiowano</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Kopiuj uzasadnienie</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 font-serif text-xs text-slate-950 whitespace-pre-line leading-relaxed shadow-2xs">
                {evaluation.modelAppeal.modelJustificationBrief}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Footer: Back to edit / next case */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          onClick={onTryAgain}
          className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold flex items-center gap-2 transition-colors shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Wróć do edycji i popraw</span>
        </button>

        {onSelectNextCase && (
          <button
            onClick={onSelectNextCase}
            className="px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-xs"
          >
            <span>Następny kazus</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>
        )}
      </div>
    </div>
  );
};
