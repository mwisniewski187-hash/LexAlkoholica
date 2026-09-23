export interface ModelCharge {
  basis: string; // np. "art. 438 pkt 2 k.p.k."
  violatedArticles: string; // np. "art. 7 k.p.k. w zw. z art. 410 k.p.k."
  formulation: string; // pełne wzorcowe brzmienie zarzutu
  explanation: string; // uzasadnienie i wyjaśnienie dlaczego ten zarzut
}

export interface ModelMotion {
  type: string; // "Główny" | "Ewentualny"
  content: string; // Wzorcowa treść wniosku
  legalGround: string; // np. "art. 437 § 1 i 2 k.p.k."
}

export interface ModelSolution {
  recommendedScope: string;
  modelCharges?: ModelCharge[];
  modelMotions?: ModelMotion[];
  modelJustificationHighlights?: string[];
  commonPitfalls?: string[];
  allegationsList?: string[];
  recommendedMotions?: string | string[];
}

export interface CaseData {
  id: string;
  title: string;
  caseNumber: string;
  court: string;
  defendant: string;
  role: string; // np. "Obrońca oskarżonego"
  topicCategory: "procesowe" | "materialne" | "faktyczne" | "kara" | "bezwzgledne" | "mieszane";
  difficulty:
    | "Kolokwium roczne (II rok aplikacji)"
    | "Kolokwium próbne OIRP"
    | "Kazus repetytoryjny"
    | "Warsztat wstępny";
  circumstancesOfAct?: string; // 1. Okoliczności popełnienia czynu (stan faktyczny tempore criminis)
  pretrialProceedings?: string; // 2. Postępowanie przygotowawcze (śledztwo/dochodzenie, zarzuty, biegli, protokoły)
  indictment?: string; // 3. Akt oskarżenia (tezy i zarzuty prokuratorskie)
  courtProceedings?: string; // 4. Postępowanie przed Sądem I instancji (rozprawa, wnioski, mowy końcowe)
  verdictSentence: string; // 5. Wyrok Sądu I instancji (sentencja)
  justificationFacts: string; // Uzasadnienie - stan faktyczny
  justificationEvidence: string; // Uzasadnienie - ocena dowodów (art. 7 i 410 kpk)
  justificationLegal: string; // Uzasadnienie - kwalifikacja i wymiar kary
  instructions: string;
  keyIssues: string[];
  modelSolution: ModelSolution;
  sourceContext?: string;
  createdAt?: string;
  isCustomGenerated?: boolean;
  examDate?: string;
  examType?: string;
  appellateCourt?: string;
  defenseAttorneyName?: string;
  examAssumptions?: string[];
}

export interface AppealSubmission {
  scope: string; // Zakres zaskarżenia
  charges: string; // Treść zarzutów
  motions: string; // Treść wniosków
  justification: string; // Uzasadnienie
  submittedAt?: string;
}

export interface CriticalError {
  errorTitle: string;
  description: string;
  howToFix: string;
}

export interface ScoreBreakdown {
  chargesFormulation: number; // max 6
  chargesSubstance: number; // max 6
  motionsCorrectness: number; // max 4
  justificationQuality: number; // max 4
}

export interface ModelAppeal {
  modelScope: string;
  modelChargesText: string;
  modelMotionsText: string;
  modelJustificationBrief: string;
}

export interface AppealEvaluation {
  score: number; // 0-20
  grade: string; // np. "4.0 (dobry)"
  passed: boolean;
  summaryAssessment: string;
  scoreBreakdown: ScoreBreakdown;
  criticalErrors: CriticalError[];
  strongPoints: string[];
  detailedFeedbackOnCharges: string;
  detailedFeedbackOnMotions: string;
  modelAppeal: ModelAppeal;
  colloquiumTips: string[];
  evaluatedAt: string;
}

export interface SavedPracticeSession {
  id: string;
  caseId: string;
  caseTitle: string;
  caseNumber: string;
  submittedAt: string;
  submission: AppealSubmission;
  evaluation: AppealEvaluation;
}

export interface SourceMaterial {
  id: string;
  title: string;
  category: "prezentacja" | "ksiazka" | "notatki" | "kazusy_z_zajec";
  content: string;
  addedAt: string;
  analysis?: MaterialAnalysis;
}

export interface MaterialAnalysis {
  summary: string;
  keyConcepts: string[];
  lecturerRequirements?: string[];
  examTraps?: string[];
  suggestedPracticeTopics?: string[];
  practicalTips?: string[];
}

export type ThemeMode = "light" | "dark" | "paper";
