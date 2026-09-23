import React, { useState } from "react";
import { CaseData } from "../types";
import { NavTab } from "./Header";
import { ParagraphIcon } from "./ParagraphIcon";
import {
  Scale,
  BookOpen,
  FolderKanban,
  Sparkles,
  ScrollText,
  History,
  Clock,
  ChevronRight,
  ChevronLeft,
  X,
  PlusCircle,
  FileText,
  CheckCircle2,
} from "lucide-react";

interface SidebarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  cases: CaseData[];
  currentCase: CaseData;
  onSelectCase: (c: CaseData) => void;
  examDaysLeft: number;
  onUpdateExamDays?: (days: number) => void;
  completedCasesCount?: number;
  averageScore?: number;
  materialsCount?: number;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
  isCollapsedDesktop?: boolean;
  onToggleCollapseDesktop?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  cases,
  currentCase,
  onSelectCase,
  examDaysLeft,
  onUpdateExamDays,
  completedCasesCount = 0,
  averageScore = 0,
  materialsCount = 0,
  isOpenMobile = false,
  onCloseMobile,
  isCollapsedDesktop = false,
  onToggleCollapseDesktop,
}) => {
  const [isEditingDays, setIsEditingDays] = useState(false);
  const [tempDays, setTempDays] = useState(examDaysLeft.toString());

  const handleSaveDays = () => {
    const parsed = parseInt(tempDays, 10);
    if (!isNaN(parsed) && parsed >= 0 && onUpdateExamDays) {
      onUpdateExamDays(parsed);
    }
    setIsEditingDays(false);
  };

  const getCategoryBadgeStyle = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes("bezwzględn") || lower.includes("439")) {
      return "bg-stone-200 text-stone-900 border-stone-300 font-bold";
    }
    return "bg-stone-100 text-stone-700 border-stone-200";
  };

  const navItems = [
    {
      id: "trening" as NavTab,
      label: "Warsztat Apelacyjny",
      subLabel: "Akta sprawy + Edytor petitum",
      icon: Scale,
      badge: `${cases.length} kazusów`,
    },
    {
      id: "ksiazka" as NavTab,
      label: "Kanon Tomkiewicz (2023)",
      subLabel: "Oficjalny podręcznik apelacji",
      icon: BookOpen,
      badge: "Kanon SN",
    },
    {
      id: "materialy" as NavTab,
      label: "Baza Notatek i Źródeł",
      subLabel: "Zajęcia OIRP i orzecznictwo",
      icon: FolderKanban,
      badge: materialsCount > 0 ? `${materialsCount}` : undefined,
    },
    {
      id: "generuj" as NavTab,
      label: "Generator Kazusów AI",
      subLabel: "Stwórz nowy stan faktyczny",
      icon: Sparkles,
      badge: "AI",
    },
    {
      id: "kompendium" as NavTab,
      label: "Kompendium & Formułki",
      subLabel: "Drzewo zarzutów i orzecznictwo",
      icon: ScrollText,
      badge: "Wzorce",
    },
    {
      id: "historia" as NavTab,
      label: "Historia Podejść",
      subLabel: "Oceny, błędy i progres",
      icon: History,
      badge: completedCasesCount > 0 ? `${completedCasesCount}` : undefined,
    },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#F8F7F4] text-stone-800 select-none overflow-hidden border-r border-[#E5E3DC]">
      {/* 1. Brand / Header */}
      <div className="p-4 border-b border-[#E5E3DC] flex items-center justify-between shrink-0 bg-[#FAF9F6]">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-[#0F172A] text-amber-400 flex items-center justify-center border border-stone-800 shadow-xs shrink-0">
            <ParagraphIcon className="w-4 h-4 text-amber-400" />
          </div>
          {!isCollapsedDesktop && (
            <div className="min-w-0">
              <h1 className="text-sm font-serif font-bold tracking-tight text-stone-950 truncate">
                LexAlkoholica
              </h1>
              <p className="text-[11px] text-stone-500 font-sans truncate">
                OIRP Bydgoszcz • II Rok Aplikacji
              </p>
            </div>
          )}
        </div>

        {/* Mobile close button */}
        {onCloseMobile && (
          <button
            onClick={onCloseMobile}
            className="md:hidden p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Desktop collapse toggle button */}
        {onToggleCollapseDesktop && (
          <button
            onClick={onToggleCollapseDesktop}
            className="hidden md:flex p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
            title={isCollapsedDesktop ? "Rozwiń pasek boczny" : "Zwiń pasek boczny"}
          >
            {isCollapsedDesktop ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        )}
      </div>

      {/* 2. Exam Countdown Widget */}
      {!isCollapsedDesktop && (
        <div className="p-3 mx-3 mt-3 rounded-lg bg-white border border-stone-300 text-xs flex items-center justify-between shrink-0 shadow-2xs">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#92400E] shrink-0" />
            <span className="text-stone-800 font-serif font-semibold text-[11px]">Kolokwium roczne:</span>
          </div>

          {isEditingDays ? (
            <div className="flex items-center gap-1">
              <input
                type="number"
                min="0"
                max="365"
                value={tempDays}
                onChange={(e) => setTempDays(e.target.value)}
                className="w-12 px-1.5 py-0.5 rounded bg-white text-stone-900 border border-stone-400 font-mono text-xs focus:outline-hidden"
                autoFocus
                onKeyDown={(e) => e.key === "Enter" && handleSaveDays()}
              />
              <button
                onClick={handleSaveDays}
                className="px-1.5 py-0.5 bg-[#0F172A] text-white rounded text-[10px] font-bold"
              >
                OK
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setTempDays(examDaysLeft.toString());
                setIsEditingDays(true);
              }}
              className="px-2.5 py-1 rounded-sm bg-[#0F172A] hover:bg-stone-800 text-amber-200 font-mono font-bold text-[11px] shadow-2xs transition-colors"
              title="Kliknij, aby zmienić liczbę dni do kolokwium na aplikacji"
            >
              za {examDaysLeft} dni ✎
            </button>
          )}
        </div>
      )}

      {/* 3. Navigation Links */}
      <div className="p-3 space-y-1 shrink-0 border-b border-[#E5E3DC]">
        <div className="px-2 pb-1 text-[10px] font-mono text-stone-500 uppercase tracking-wider font-bold">
          {!isCollapsedDesktop && "Główne Moduły"}
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (onCloseMobile) onCloseMobile();
              }}
              className={`w-full text-left rounded-lg transition-all flex items-center gap-2.5 ${
                isCollapsedDesktop ? "p-2.5 justify-center" : "px-3 py-2.5"
              } ${
                isActive
                  ? "bg-[#0F172A] text-white font-semibold shadow-xs"
                  : "text-stone-700 hover:bg-stone-200/60 hover:text-stone-950"
              }`}
              title={item.label}
            >
              <Icon
                className={`w-4 h-4 shrink-0 ${
                  isActive ? "text-amber-300" : "text-stone-500"
                }`}
              />
              {!isCollapsedDesktop && (
                <div className="min-w-0 flex-1 flex items-center justify-between">
                  <div className="truncate">
                    <span className="text-xs block truncate leading-tight font-medium">
                      {item.label}
                    </span>
                    <span className={`text-[10px] block truncate leading-tight mt-0.5 ${
                      isActive ? "text-stone-300" : "text-stone-500"
                    }`}>
                      {item.subLabel}
                    </span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm shrink-0 font-bold ml-1.5 border ${
                        isActive
                          ? "bg-stone-800 text-amber-300 border-stone-700"
                          : "bg-white text-stone-700 border-stone-300"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* 4. Case Switcher List (Direct Access from Sidebar) */}
      {!isCollapsedDesktop && (
        <div className="flex-1 min-h-0 flex flex-col p-3 overflow-hidden">
          <div className="flex items-center justify-between px-2 pb-2">
            <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider font-bold">
              Akta Spraw ({cases.length})
            </span>
            <button
              onClick={() => {
                setActiveTab("generuj");
                if (onCloseMobile) onCloseMobile();
              }}
              className="text-[11px] text-stone-700 hover:text-stone-950 flex items-center gap-1 font-semibold transition-colors"
              title="Wygeneruj nowy kazus"
            >
              <PlusCircle className="w-3.5 h-3.5 text-stone-600" />
              <span>Dodaj</span>
            </button>
          </div>

          <div className="space-y-1.5 overflow-y-auto flex-1 min-h-0 pr-1 select-text scrollbar-thin scrollbar-thumb-stone-300">
            {cases.map((c) => {
              const isSelected = c.id === currentCase.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    onSelectCase(c);
                    setActiveTab("trening");
                    if (onCloseMobile) onCloseMobile();
                  }}
                  className={`w-full text-left p-2.5 rounded-lg transition-all border ${
                    isSelected
                      ? "bg-white border-stone-400 border-l-4 border-l-[#0F172A] shadow-xs text-stone-950"
                      : "bg-white border-stone-200/80 hover:bg-[#FAF9F6] hover:border-stone-300 text-stone-700 shadow-2xs"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1.5 mb-1">
                    <span className={`font-mono text-[11px] font-bold px-1.5 py-0.5 rounded-sm ${
                      isSelected ? "bg-[#0F172A] text-white" : "bg-stone-100 text-stone-800 border border-stone-200"
                    }`}>
                      {c.caseNumber}
                    </span>
                    <div className="flex items-center gap-1">
                      {c.difficulty.includes("Kolokwium") ? (
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-sm bg-stone-900 text-amber-200">
                          Kolokwium OIRP
                        </span>
                      ) : (
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-sm bg-stone-100 text-stone-700 border border-stone-200">
                          II Rok
                        </span>
                      )}
                      <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-sm border font-semibold ${getCategoryBadgeStyle(c.topicCategory)}`}>
                        {c.topicCategory}
                      </span>
                    </div>
                  </div>
                  <div className={`text-xs font-serif leading-snug ${
                    isSelected ? "text-stone-950 font-bold" : "text-stone-800 font-medium"
                  }`}>
                    {c.title}
                  </div>
                  <div className="text-[10px] text-stone-500 mt-1 truncate flex items-center gap-1">
                    <span>Osk. {c.defendant}</span>
                    {isSelected && (
                      <span className="ml-auto text-stone-900 font-bold flex items-center gap-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0F172A]" /> Aktywny
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 5. Footer Stats */}
      {!isCollapsedDesktop && (
        <div className="p-3 border-t border-slate-200 bg-white text-xs shrink-0 flex items-center justify-between text-slate-600">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 font-mono">Ukończone apelacje:</span>
            <span className="font-bold text-slate-900 font-mono">
              {completedCasesCount} prac
            </span>
          </div>
          {completedCasesCount > 0 && (
            <div className="flex flex-col text-right">
              <span className="text-[10px] text-slate-500 font-mono">Średnia ocen:</span>
              <span className="font-bold text-slate-900 font-mono">
                {averageScore.toFixed(1)}/20 pkt
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Permanent) */}
      <aside
        className={`hidden md:flex flex-col shrink-0 border-r border-slate-200 bg-white transition-all duration-200 ease-in-out h-screen sticky top-0 z-30 ${
          isCollapsedDesktop ? "w-14" : "w-72 lg:w-80"
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Drawer (Overlay) */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          {/* Drawer Body */}
          <div className="relative w-80 max-w-[85vw] h-full shadow-2xl z-10 flex flex-col">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
