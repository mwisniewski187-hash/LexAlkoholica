import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Clock, AlertCircle } from "lucide-react";

export const ExamTimer: React.FC = () => {
  const TOTAL_SECONDS = 360 * 60; // 6 hours (360 minutes)

  const [secondsLeft, setSecondsLeft] = useState<number>(() => {
    const saved = localStorage.getItem("oirp_exam_timer_seconds");
    return saved ? parseInt(saved, 10) : TOTAL_SECONDS;
  });

  const [isRunning, setIsRunning] = useState<boolean>(() => {
    const saved = localStorage.getItem("oirp_exam_timer_running");
    return saved === "true";
  });

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          const next = prev - 1;
          localStorage.setItem("oirp_exam_timer_seconds", next.toString());
          if (next <= 0) {
            setIsRunning(false);
            localStorage.setItem("oirp_exam_timer_running", "false");
          }
          return next;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, secondsLeft]);

  const toggleRunning = () => {
    const next = !isRunning;
    setIsRunning(next);
    localStorage.setItem("oirp_exam_timer_running", next.toString());
  };

  const handleReset = () => {
    if (confirm("Zresetować stoper do 6:00:00 (360 minut) na kolokwium roczne?")) {
      setIsRunning(false);
      setSecondsLeft(TOTAL_SECONDS);
      localStorage.setItem("oirp_exam_timer_seconds", TOTAL_SECONDS.toString());
      localStorage.setItem("oirp_exam_timer_running", "false");
    }
  };

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  // Colloquium phase calculation
  const elapsedMinutes = 360 - Math.floor(secondsLeft / 60);
  let phaseName = "Faza 1: Analiza akt i wyroku (0–60 min)";
  let phaseColor = "text-blue-700 bg-blue-50 border-blue-200";

  if (elapsedMinutes > 60 && elapsedMinutes <= 240) {
    phaseName = "Faza 2: Konstrukcja zarzutów i wniosków (60–240 min)";
    phaseColor = "text-purple-700 bg-purple-50 border-purple-200";
  } else if (elapsedMinutes > 240) {
    phaseName = "Faza 3: Uzasadnienie i pre-flight (240–360 min)";
    phaseColor = "text-rose-700 bg-rose-50 border-rose-200";
  }

  return (
    <div className="relative inline-flex items-center">
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-amber-300/80 text-stone-900 shadow-2xs">
        <Clock className={`w-3.5 h-3.5 shrink-0 ${isRunning ? "text-amber-600 animate-pulse" : "text-stone-400"}`} />
        
        {/* Time display */}
        <button
          type="button"
          onClick={() => setIsTooltipOpen(!isTooltipOpen)}
          className="font-mono font-bold text-xs tracking-tight text-amber-950 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 hover:bg-amber-100 transition-colors inline-flex items-center gap-1"
          title="Kliknij, aby zobaczyć rekomendowany harmonogram kolokwium 360 min"
        >
          <span>{formattedTime}</span>
        </button>

        {/* Phase Pill */}
        <span
          className={`hidden xl:inline-block text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-sm border leading-none shrink-0 ${phaseColor}`}
        >
          {elapsedMinutes <= 60 ? "1/3 Akta" : elapsedMinutes <= 240 ? "2/3 Petitum" : "3/3 Motywy"}
        </span>

        {/* Play/Pause */}
        <button
          type="button"
          onClick={toggleRunning}
          className={`h-6 w-6 rounded-sm inline-flex items-center justify-center transition-colors shrink-0 ${
            isRunning
              ? "bg-amber-100 hover:bg-amber-200 text-amber-900"
              : "bg-stone-100 hover:bg-amber-100 text-amber-700"
          }`}
          title={isRunning ? "Pauza zegara kolokwium" : "Uruchom zegar kolokwium (360 min)"}
        >
          {isRunning ? <Pause className="w-3 h-3 shrink-0" /> : <Play className="w-3 h-3 shrink-0 ml-0.5" />}
        </button>

        {/* Reset */}
        <button
          type="button"
          onClick={handleReset}
          className="h-6 w-6 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors inline-flex items-center justify-center shrink-0"
          title="Resetuj stoper do 360 min"
        >
          <RotateCcw className="w-3 h-3 shrink-0" />
        </button>
      </div>

      {/* Tooltip with Colloquium Timeline */}
      {isTooltipOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl border border-slate-300 shadow-xl z-50 p-3.5 text-xs text-slate-900 animate-in fade-in duration-150 ring-1 ring-slate-900/5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="font-mono font-bold text-xs uppercase tracking-wider text-slate-900">
              Harmonogram Kolokwium (6h)
            </span>
            <button
              onClick={() => setIsTooltipOpen(false)}
              className="text-slate-400 hover:text-slate-800 font-bold text-xs"
            >
              ✕
            </button>
          </div>

          <div className="mt-2.5 space-y-2">
            <div className={`p-2 rounded-lg border text-[11px] ${elapsedMinutes <= 60 ? "bg-slate-100 border-slate-400 font-semibold" : "bg-slate-50 border-slate-200 text-slate-600"}`}>
              <div className="font-bold text-slate-900">1. Analiza akt i wyroku (0–60 min)</div>
              <div>Odczytanie sentencji, protokołów, wyłapanie bezwzględnych przyczyn i błędu w faktach.</div>
            </div>

            <div className={`p-2 rounded-lg border text-[11px] ${elapsedMinutes > 60 && elapsedMinutes <= 240 ? "bg-slate-100 border-slate-400 font-semibold" : "bg-slate-50 border-slate-200 text-slate-600"}`}>
              <div className="font-bold text-slate-900">2. Petitum i zarzuty (60–240 min)</div>
              <div>Formułowanie trójczłonowych zarzutów, zakaz zarzutów mieszanych, symetria wniosków.</div>
            </div>

            <div className={`p-2 rounded-lg border text-[11px] ${elapsedMinutes > 240 ? "bg-emerald-50 border-emerald-300 font-semibold" : "bg-slate-50 border-slate-200 text-slate-600"}`}>
              <div className="font-bold text-slate-900">3. Uzasadnienie i kontrola formalna (240–360 min)</div>
              <div>Rozwinięcie motywów, powołanie kart akt, pre-flight check warunków formalnych.</div>
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-slate-200 text-[10px] text-slate-500 font-mono flex items-center justify-between">
            <span>Aktualnie: {phaseName}</span>
          </div>
        </div>
      )}
    </div>
  );
};
