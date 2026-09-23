import React from "react";
import { CheckCircle2, AlertTriangle, AlertCircle, X, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export interface AuditItem {
  id: string;
  title: string;
  category: "Zakres" | "Zarzuty" | "Wnioski" | "Uzasadnienie";
  status: "pass" | "warning" | "error";
  description: string;
  ruleCitation: string;
  suggestedFix?: string;
  fixAction?: () => void;
  fixLabel?: string;
}

interface PreflightAuditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  scope: string;
  charges: string;
  motions: string;
  justification: string;
  onApplyFix: (field: "scope" | "charges" | "motions", fixedSnippet: string) => void;
}

export const PreflightAuditDrawer: React.FC<PreflightAuditDrawerProps> = ({
  isOpen,
  onClose,
  scope,
  charges,
  motions,
  justification,
  onApplyFix,
}) => {
  if (!isOpen) return null;

  const auditItems: AuditItem[] = [];

  // 1. Check: Scope and statutory basis (art. 444 & 425 k.p.k.)
  const hasScopeBasis = scope.toLowerCase().includes("444") && scope.toLowerCase().includes("425");
  const hasScopeDirection = scope.toLowerCase().includes("w całości") || scope.toLowerCase().includes("w części") || scope.toLowerCase().includes("o karę") || scope.toLowerCase().includes("dotyczącej kary");
  
  if (hasScopeBasis && hasScopeDirection) {
    auditItems.push({
      id: "scope-basis",
      title: "Podstawa prawna zaskarżenia i zakres (art. 444 i 425 k.p.k.)",
      category: "Zakres",
      status: "pass",
      description: "Prawidłowo wskazano przepis legitymacji odwoławczej oraz precyzyjnie określono zakres (w całości / w części).",
      ruleCitation: "Rozdział 5 Kanonu Tomkiewicz",
    });
  } else {
    auditItems.push({
      id: "scope-basis",
      title: "Niekompletne petitum zakresu zaskarżenia",
      category: "Zakres",
      status: "warning",
      description: "Zaleca się wyraźne powołanie art. 444 § 1 k.p.k. w zw. z art. 425 § 1 i 2 k.p.k. oraz jednoznaczne wskazanie, czy wyrok zaskarżono w całości, czy w części (na korzyść oskarżonego).",
      ruleCitation: "Art. 425 § 1-2 k.p.k. / Rozdz. 5",
      suggestedFix: "Na podstawie art. 444 § 1 k.p.k. w zw. z art. 425 § 1 i 2 k.p.k. jako obrońca oskarżonego zaskarżam powyższy wyrok w całości na korzyść oskarżonego.",
      fixLabel: "Wstaw poprawną formułę zakresu",
      fixAction: () => onApplyFix("scope", "Na podstawie art. 444 § 1 k.p.k. w zw. z art. 425 § 1 i 2 k.p.k. zaskarżam powyższy wyrok w całości na korzyść oskarżonego."),
    });
  }

  // 2. Critical Check: Zakaz zarzutu mieszanego (Reguła 7.4 Tomkiewicz)
  const lowerCharges = charges.toLowerCase();
  const hasMaterial = lowerCharges.includes("438 pkt 1") || lowerCharges.includes("prawa materialnego");
  const hasProceduralOrFacts = lowerCharges.includes("438 pkt 2") || lowerCharges.includes("438 pkt 3") || lowerCharges.includes("art. 7") || lowerCharges.includes("błąd w ustaleniach");
  const hasEventualClause = lowerCharges.includes("ostrożności") || lowerCharges.includes("na wypadek nieuwzględnienia") || lowerCharges.includes("ewentualn");

  if (hasMaterial && hasProceduralOrFacts && !hasEventualClause) {
    auditItems.push({
      id: "mixed-charges",
      title: "KRYTYCZNY BŁĄD: Zakaz zarzutu mieszanego (art. 438 pkt 1 i pkt 2/3)",
      category: "Zarzuty",
      status: "error",
      description: "Niedopuszczalne jest jednoczesne postawienie zarzutu obrazy prawa materialnego (art. 438 pkt 1) obok błędu w ustaleniach faktycznych lub art. 7 k.p.k. bez formuły ewentualnej. Zarzut prawa materialnego zakłada bezsporny stan faktyczny!",
      ruleCitation: "Kanon Tomkiewicz: Rozdział 7.4 (dyskwalifikacja na kolokwium)",
      suggestedFix: "\n\nZ ostrożności procesowej – na wypadek nieuwzględnienia powyższego zarzutu błędu w ustaleniach faktycznych i obrazy przepisów postępowania – zaskarżonemu wyrokowi zarzucam:",
      fixLabel: "Dodaj klauzulę ewentualną 'Z ostrożności procesowej...'",
      fixAction: () => onApplyFix("charges", "\n\nZ ostrożności procesowej – na wypadek nieuwzględnienia powyższego zarzutu błędu w ustaleniach faktycznych i obrazy przepisów postępowania – zaskarżonemu wyrokowi zarzucam:\nobrazę prawa materialnego (art. 438 pkt 1 k.p.k.), polegającą na..."),
    });
  } else if (hasMaterial && hasProceduralOrFacts && hasEventualClause) {
    auditItems.push({
      id: "mixed-charges",
      title: "Prawidłowa gradacja: Zarzut ewentualny z ostrożności procesowej",
      category: "Zarzuty",
      status: "pass",
      description: "Zastosowano prawidłową klauzulę ewentualną ('z ostrożności procesowej'). Zarzut materialny nie koliduje ze sporem o fakty.",
      ruleCitation: "Rozdział 7.4 Kanonu Tomkiewicz",
    });
  } else {
    auditItems.push({
      id: "mixed-charges",
      title: "Czystość zarzutów (brak zakazanego zarzutu mieszanego)",
      category: "Zarzuty",
      status: "pass",
      description: "Nie stwierdzono niedozwolonego mieszania art. 438 pkt 1 z kwestionowaniem stanu faktycznego.",
      ruleCitation: "Rozdział 7.4 Kanonu Tomkiewicz",
    });
  }

  // 3. Check: Trójczłonowa budowa zarzutu z art. 7 k.p.k. (art. 438 pkt 2 k.p.k.)
  if (lowerCharges.includes("art. 7") || lowerCharges.includes("art. 438 pkt 2")) {
    const hasImpactClause = lowerCharges.includes("wpływ na treść") || lowerCharges.includes("mającą wpływ") || lowerCharges.includes("mający wpływ");
    const hasStandardReference = lowerCharges.includes("doświadczenia życiowego") || lowerCharges.includes("zasadami wiedzy") || lowerCharges.includes("logik") || lowerCharges.includes("prawidłowego rozumowania");

    if (hasImpactClause && hasStandardReference) {
      auditItems.push({
        id: "three-part-art7",
        title: "Trójczłonowa formuła zarzutu procesowego z art. 7 k.p.k.",
        category: "Zarzuty",
        status: "pass",
        description: "Zarzut zawiera wskazanie dowodu, naruszonej reguły ocennej oraz ustawowy zwrot o wpływie na treść orzeczenia.",
        ruleCitation: "Art. 438 pkt 2 k.p.k. / Rozdz. 6.2",
      });
    } else {
      auditItems.push({
        id: "three-part-art7",
        title: "Brak obligatoryjnego zwrotu o wpływie na treść orzeczenia",
        category: "Zarzuty",
        status: "error",
        description: "Przy zarzucie z art. 438 pkt 2 k.p.k. (art. 7 k.p.k.) bezwzględnie konieczny jest zwrot: 'mającą wpływ na treść zaskarżonego orzeczenia' oraz wskazanie, w czym ten wpływ się wyraził.",
        ruleCitation: "Art. 438 pkt 2 k.p.k. / Kanon Rozdz. 7.3",
        suggestedFix: "..., co stanowiło obrazę przepisów postępowania, mającą wpływ na treść orzeczenia, a mianowicie art. 7 k.p.k. w zw. z art. 410 k.p.k., poprzez...",
        fixLabel: "Wstaw formułę 'mającą wpływ na treść orzeczenia'",
        fixAction: () => onApplyFix("charges", "\n...mającą wpływ na treść orzeczenia, poprzez naruszenie zasad wiedzy, logiki i doświadczenia życiowego..."),
      });
    }
  }

  // 4. Check: Prymat orzekania reformatoryjnego we wnioskach (art. 437 § 2 zd. 2 k.p.k.)
  const lowerMotions = motions.toLowerCase();
  const hasChangeMotion = lowerMotions.includes("zmian") || lowerMotions.includes("uniewinnienie") || lowerMotions.includes("złagodzenie");
  const hasRepealMotion = lowerMotions.includes("uchylen");

  if (hasChangeMotion) {
    auditItems.push({
      id: "motions-reformatory",
      title: "Prymat orzekania reformatoryjnego (art. 437 § 2 k.p.k.)",
      category: "Wnioski",
      status: "pass",
      description: "Prawidłowo sformułowano prymarny wniosek o zmianę wyroku (uniewinnienie lub zmianę orzeczenia o karze).",
      ruleCitation: "Art. 437 § 2 zd. 2 k.p.k. / Rozdz. 8",
    });
  } else if (hasRepealMotion && !hasChangeMotion) {
    auditItems.push({
      id: "motions-reformatory",
      title: "Ryzyko kasatoryjności: Wniosek o uchylenie jako jedyny",
      category: "Wnioski",
      status: "warning",
      description: "Zgodnie z art. 437 § 2 zd. 2 k.p.k. sąd odwoławczy orzeka co do istoty. Wniosek o uchylenie i przekazanie do ponownego rozpoznania powinien być stawiany jako ewentualny, chyba że zachodzi bezwzględna przyczyna (art. 439 k.p.k.).",
      ruleCitation: "Art. 437 § 2 k.p.k. / Kanon Rozdz. 8",
      suggestedFix: "1. na podstawie art. 437 § 1 i 2 k.p.k. wnoszę o zmianę zaskarżonego wyroku i uniewinnienie oskarżonego;\newentualnie:\n2. o uchylenie zaskarżonego wyroku i przekazanie sprawy do ponownego rozpoznania.",
      fixLabel: "Dodaj wniosek reformatoryjny o uniewinnienie",
      fixAction: () => onApplyFix("motions", "Na podstawie art. 427 § 1 k.p.k. w zw. z art. 437 § 1 i 2 k.p.k. wnoszę o:\n1. zmianę zaskarżonego wyroku i uniewinnienie oskarżonego od zarzucanego mu czynu,\newentualnie:\n2. uchylenie zaskarżonego wyroku i przekazanie sprawy do ponownego rozpoznania."),
    });
  } else {
    auditItems.push({
      id: "motions-reformatory",
      title: "Brak sprecyzowanych wniosków odwoławczych (art. 427 § 1 k.p.k.)",
      category: "Wnioski",
      status: "warning",
      description: "Wpisz wnioski apelacyjne: w pierwszej kolejności o zmianę wyroku (art. 437 § 2 k.p.k.), a ewentualnie o uchylenie.",
      ruleCitation: "Art. 427 § 1 k.p.k.",
    });
  }

  // 5. Uzasadnienie - relacja do dowodów i kart akt
  const lowerJust = justification.toLowerCase();
  const hasFolioMention = lowerJust.includes("k.") || lowerJust.includes("karcie") || lowerJust.includes("kartach") || lowerCharges.includes("k.");
  if (hasFolioMention) {
    auditItems.push({
      id: "folio-citations",
      title: "Powołanie kart akt sprawy (k. akt)",
      category: "Uzasadnienie",
      status: "pass",
      description: "W tekście apelacji zidentyfikowano odesłania do kart akt sprawy (k. ...), co spełnia wymóg precyzji na kolokwium.",
      ruleCitation: "Standard profesjonalnego pełnomocnika",
    });
  } else {
    auditItems.push({
      id: "folio-citations",
      title: "Wskazówka: Brak odesłań do kart akt (k. ...)",
      category: "Uzasadnienie",
      status: "warning",
      description: "Warto wskazać sygnatury kart akt z protokołów śledztwa lub rozprawy (np. 'k. 18', 'k. 45'), aby zarzuty były bezbłędnie osadzone w materiale dowodowym.",
      ruleCitation: "Wymóg komisji kolokwialnej OIRP",
    });
  }

  const errorsCount = auditItems.filter((i) => i.status === "error").length;
  const warningsCount = auditItems.filter((i) => i.status === "warning").length;
  const passesCount = auditItems.filter((i) => i.status === "pass").length;

  return (
    <div className="absolute inset-y-0 right-0 w-full sm:w-[420px] bg-white border-l border-slate-300 shadow-2xl z-40 flex flex-col animate-in slide-in-from-right duration-200">
      {/* Header */}
      <div className="p-4 bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between shrink-0 border-b border-indigo-900/60">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4.5 h-4.5 text-indigo-300" />
          </div>
          <div>
            <span className="font-serif font-bold text-sm text-white block leading-tight">
              Pre-Flight Check: Audyt Formalny
            </span>
            <span className="text-[11px] text-indigo-200 font-mono">
              Kanon konstrukcji adw. Tomkiewicz
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-7 h-7 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors inline-flex items-center justify-center shrink-0"
          title="Zamknij audyt"
        >
          <X className="w-4 h-4 shrink-0" />
        </button>
      </div>

      {/* Summary Score Bar */}
      <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs shrink-0">
        <span className="font-mono text-slate-600 font-medium">Stan poprawności:</span>
        <div className="flex items-center gap-2">
          {errorsCount > 0 ? (
            <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-bold font-mono text-[11px] flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              {errorsCount} błąd krytyczny
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold font-mono text-[11px] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 shrink-0" />
              Brak błędów krytycznych
            </span>
          )}
          {warningsCount > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 font-bold font-mono text-[11px]">
              {warningsCount} uwag
            </span>
          )}
        </div>
      </div>

      {/* Audit Items List */}
      <div className="p-4 overflow-y-auto flex-1 space-y-3 bg-[#fdfdfd]">
        {auditItems.map((item) => (
          <div
            key={item.id}
            className={`p-3.5 rounded-xl border shadow-2xs space-y-2 transition-all ${
              item.status === "error"
                ? "bg-rose-50/50 border-rose-300 ring-1 ring-rose-500/10"
                : item.status === "warning"
                ? "bg-slate-50 border-slate-300"
                : "bg-emerald-50/30 border-emerald-200"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2">
                {item.status === "error" ? (
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                ) : item.status === "warning" ? (
                  <AlertTriangle className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <h4 className="font-bold text-xs text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-500 block mt-0.5">
                    {item.ruleCitation}
                  </span>
                </div>
              </div>

              <span
                className={`text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0 ${
                  item.status === "error"
                    ? "bg-rose-200 text-rose-900"
                    : item.status === "warning"
                    ? "bg-slate-200 text-slate-900"
                    : "bg-emerald-200 text-emerald-900"
                }`}
              >
                {item.category}
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed pl-6">
              {item.description}
            </p>

            {item.fixAction && (
              <div className="pl-6 pt-1">
                <button
                  type="button"
                  onClick={item.fixAction}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-mono text-[11px] font-semibold inline-flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <Sparkles className="w-3 h-3 text-slate-300 shrink-0" />
                  <span>{item.fixLabel || "Zastosuj rekomendację"}</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-3 bg-slate-50 border-t border-slate-200 shrink-0 flex items-center justify-between">
        <span className="text-[11px] text-slate-500 font-mono">
          Zgodność z kanonem Tomkiewicz
        </span>
        <button
          type="button"
          onClick={onClose}
          className="h-8 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center justify-center transition-colors"
        >
          Zamknij panel audytu
        </button>
      </div>
    </div>
  );
};
