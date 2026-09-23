import React, { useState } from "react";
import { SavedPracticeSession } from "../types";
import { Calendar, ArrowRight, Clock, Trash2 } from "lucide-react";

interface HistoryDashboardProps {
  sessions: SavedPracticeSession[];
  onReviewSession: (session: SavedPracticeSession) => void;
  onClearHistory: () => void;
  examDaysLeft: number;
  onUpdateExamDays?: (days: number) => void;
}

export const HistoryDashboard: React.FC<HistoryDashboardProps> = ({
  sessions,
  onReviewSession,
  onClearHistory,
  examDaysLeft,
  onUpdateExamDays,
}) => {
  const [editingDays, setEditingDays] = useState(false);
  const [tempDays, setTempDays] = useState(examDaysLeft.toString());

  const averageScore =
    sessions.length > 0
      ? sessions.reduce((acc, s) => acc + s.evaluation.score, 0) / sessions.length
      : 0;

  const passedCount = sessions.filter((s) => s.evaluation.passed).length;
  const passRate = sessions.length > 0 ? (passedCount / sessions.length) * 100 : 0;

  const handleSaveDays = () => {
    const val = parseInt(tempDays, 10);
    if (!isNaN(val) && val >= 0 && onUpdateExamDays) {
      onUpdateExamDays(val);
    }
    setEditingDays(false);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Countdown & Progress Overview */}
      <div className="bg-white rounded-xl border border-slate-300 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded border border-slate-700 bg-slate-900 text-slate-300 uppercase tracking-wider font-bold">
              Katedra Prawa Karnego w Bydgoszczy
            </span>
            <h2 className="text-xl font-serif font-bold text-slate-950">
              Plan Treningu & Historia Apelacji
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              Śledź swoje postępy w pisaniu apelacji. Każdy rozwiązany kazus przybliża Cię do opanowania kanonu adw. Marty Tomkiewicz-Januszewskiej i zaliczenia kolokwium na 5.0.
            </p>
          </div>

          {/* Countdown card */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-white shadow-xs flex items-center gap-4 shrink-0">
            <div className="p-2.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-300">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                Termin kolokwium:
              </div>
              {editingDays ? (
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="number"
                    value={tempDays}
                    onChange={(e) => setTempDays(e.target.value)}
                    className="w-16 px-2 py-0.5 rounded border border-slate-600 bg-slate-950 text-white text-xs font-bold font-mono"
                  />
                  <button
                    onClick={handleSaveDays}
                    className="px-2 py-0.5 bg-slate-700 hover:bg-slate-600 text-white rounded text-xs font-bold"
                  >
                    Zapisz
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => setEditingDays(true)}
                  className="text-2xl font-black font-mono cursor-pointer text-white flex items-center gap-1.5 hover:text-slate-300 transition-colors"
                  title="Kliknij, aby zmienić liczbę dni"
                >
                  {examDaysLeft} dni{" "}
                  <span className="text-[10px] font-normal text-slate-400 underline font-sans">
                    (zmień)
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-200">
          <div className="p-3.5 bg-slate-50 rounded-xl text-center border border-slate-200">
            <div className="text-xs text-slate-600">Rozwiązane kazusy</div>
            <div className="text-xl font-bold text-slate-950 font-mono mt-0.5">{sessions.length}</div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl text-center border border-slate-200">
            <div className="text-xs text-slate-600">Średnia punktacja</div>
            <div className="text-xl font-bold text-slate-950 font-mono mt-0.5">
              {averageScore.toFixed(1)}{" "}
              <span className="text-xs font-normal text-slate-400">/ 20</span>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl text-center border border-slate-200">
            <div className="text-xs text-slate-600">Zdawalność</div>
            <div className="text-xl font-bold text-slate-950 font-mono mt-0.5">
              {passRate.toFixed(0)}%
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl text-center border border-slate-200">
            <div className="text-xs text-slate-600">Zaliczone apelacje</div>
            <div className="text-xl font-bold text-emerald-700 font-mono mt-0.5">
              {passedCount} / {sessions.length}
            </div>
          </div>
        </div>
      </div>

      {/* History List */}
      <div className="bg-white rounded-xl border border-slate-300 overflow-hidden shadow-xs">
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-700" />
            <h3 className="text-sm font-serif font-bold text-slate-950 uppercase tracking-wide">
              Archiwum Rozwiązanych Kazusów ({sessions.length})
            </h3>
          </div>

          {sessions.length > 0 && (
            <button
              onClick={() => {
                if (confirm("Czy na pewno chcesz wyczyścić historię prób?")) {
                  onClearHistory();
                }
              }}
              className="text-xs text-slate-400 hover:text-rose-600 flex items-center gap-1 transition-colors font-serif"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Wyczyść historię
            </button>
          )}
        </div>

        {sessions.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-xs font-serif">
            Nie sporządzono jeszcze żadnej apelacji. Przejdź do zakładki <strong>„Warsztat Apelacyjny”</strong>, aby rozwiązać pierwszy kazus!
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {sessions.map((sess) => (
              <div
                key={sess.id}
                className="p-4 sm:p-5 hover:bg-slate-50/60 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-950 bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
                      {sess.caseNumber}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {new Date(sess.submittedAt).toLocaleString("pl-PL")}
                    </span>
                  </div>
                  <h4 className="text-sm font-serif font-bold text-slate-950">
                    {sess.caseTitle}
                  </h4>
                  <div className="text-xs text-slate-600 line-clamp-1 font-sans">
                    {sess.evaluation.summaryAssessment}
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <div className="text-right">
                    <div className="text-sm font-bold font-mono text-slate-950">
                      {sess.evaluation.score}/20 pkt
                    </div>
                    <div className="text-[10px] font-mono font-semibold text-slate-700">
                      {sess.evaluation.grade}
                    </div>
                  </div>

                  <button
                    onClick={() => onReviewSession(sess)}
                    className="px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-xs font-semibold flex items-center gap-1 transition-colors shadow-2xs"
                  >
                    <span>Recenzja</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-700" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
