import { CaseData } from "../../types";

export const case34: CaseData = {
  id: "kazus-34-kontrawencjonalizacja-prog-800",
  title: "Kazus XXXIV – Sprawa Wiktora Borowskiego (Kontrawencjonalizacja kradzieży art. 278 § 1 k.k. a art. 119 § 1 k.w. i reguła art. 4 § 1 k.k.)",
  caseNumber: "II K 112/24",
  court: "Sąd Rejonowy w Chojnicach, II Wydział Karny",
  defendant: "Wiktor Borowski (ur. 14.06.2001 r.)",
  role: "Radca prawny Maciej Czarnecki – Obrońca oskarżonego Wiktora Borowskiego",
  topicCategory: "materialne",
  difficulty: "Kolokwium roczne (II rok aplikacji)",
  examType: "Kazus kolokwialny – Apelacja obrońcy na korzyść (kontrawencjonalizacja i zmiana ustawy w czasie)",
  appellateCourt: "Sąd Okręgowy w Słupsku, II Wydział Karny Odwoławczy za pośrednictwem Sądu Rejonowego w Chojnicach",
  circumstancesOfAct: `1. STAN FAKTYCZNY:
W dniu 15 września 2023 r. Wiktor Borowski dokonał zaboru elektronarzędzi (wkrętarka i akumulator) o wartości 650 zł w markecie budowlanym w Chojnicach.
W dacie czynu obwiązujący próg kradzieży jako przestępstwa z art. 278 § 1 k.k. wynosił 500 zł (art. 119 § 1 k.w.).
W dniu 1 października 2023 r. weszła w życie nowelizacja Kodeksu wykroczeń (ustawa z 7 lipca 2022 r.), która podwyższyła próg graniczny kradzieży z 500 zł do 800 zł.
Akt oskarżenia skierowano w listopadzie 2023 r.`,
  pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE:
- Policja i prokurator prowadzili sprawę jako dochodzenie o przestępstwo z art. 278 § 1 k.k., nie uwzględniając faktu podniesienia progu kontrawencjonalizacji.`,
  indictment: `3. AKT OSKARŻENIA:
Prokurator zarzucił Wiktorowi Borowskiemu popełnienie występku z art. 278 § 1 k.k.`,
  courtProceedings: `4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI:
- Wyrok zapadł w dniu 20 lutego 2024 r. (a więc kilka miesięcy po wejściu w życie nowego progu 800 zł).
- Sąd Rejonowy uznał oskarżonego za winnego przestępstwa z art. 278 § 1 k.k., uzasadniając to tym, że 'w dacie popełnienia czynu wartość 650 zł stanowiła przestępstwo, a zmiana przepisów nie zwalnia sprawcy z odpowiedzialności karnej'.`,
  verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 20 lutego 2024 r.
Sąd Rejonowy w Chojnicach, II Wydział Karny
Sygn. akt II K 112/24
Sąd Rejonowy:
I. uznaje Wiktora Borowskiego za winnego popełnienia przestępstwa z art. 278 § 1 k.k. i wymierza mu karę 6 miesięcy pozbawienia wolności z warunkowym zawieszeniem jej wykonania na okres 2 lat próby;
II. orzeka grzywnę w wysokości 50 stawek po 20 zł.`,
  justificationFacts: `Sąd ustalił, że wartość skradzionych narzędzi wynosiła dokładnie 650 zł.`,
  justificationEvidence: `Ocena dowodów nie budzi sporu – oskarżony przyznał się do czynu.`,
  justificationLegal: `Sąd dopuścił się rażącej obrazy art. 4 § 1 k.k. Zgodnie z zasadą lex mitior retro agit, jeżeli w czasie orzekania obowiązuje ustawa inna niż w czasie popełnienia przestępstwa, stosuje się ustawę nową, chyba że ustawa obowiązująca poprzednio jest względniejsza dla sprawcy. Od 1 października 2023 r. kradzież mienia do wartości 800 zł stanowi jedynie wykroczenie z art. 119 § 1 k.w.!`,
  instructions: `Działając jako obrońca Wiktora Borowskiego, sporządź apelację.
Zaskarż wyrok w całości na korzyść oskarżonego.
Podnieś:
- Obrazę prawa materialnego art. 4 § 1 k.k. w zw. z art. 119 § 1 k.w. i art. 278 § 1 k.k. poprzez ich niezastosowanie i bezpodstawne skazanie za przestępstwo zamiast zakwalifikowania czynu jako wykroczenia (tzw. kontrawencjonalizacja).
Wnieś o:
- Zmianę wyroku poprzez zakwalifikowanie czynu z art. 119 § 1 k.w. i wymierzenie kary grzywny na podstawie Kodeksu wykroczeń (lub umorzenie postępowania przy przedawnieniu orzekania z art. 45 k.w.).`,
  keyIssues: [
    "Zasada prymatu ustawy względniejszej dla sprawcy (art. 4 § 1 k.k.)",
    "Kontrawencjonalizacja czynu (przekształcenie przestępstwa w wykroczenie na skutek podwyższenia progu kwotowego)",
    "Prawidłowa redakcja zarzutu obrazy prawa materialnego (art. 438 pkt 1 k.p.k.)"
  ],
  modelSolution: {
    recommendedScope: "W całości, na korzyść oskarżonego Wiktora Borowskiego.",
    allegationsList: [
      "Obraza prawa materialnego, tj. art. 4 § 1 k.k. w zw. z art. 119 § 1 Kodeksu wykroczeń i art. 278 § 1 Kodeksu karnego, poprzez ich niezastosowanie i uznanie oskarżonego za winnego przestępstwa kradzieży, podczas gdy w dacie wyrokowania kradzież mienia o wartości 650 zł (poniżej 800 zł) stanowiła wyłącznie wykroczenie, co nakazywało zastosowanie ustawy względniejszej dla sprawcy i orzekanie w reżimie Kodeksu wykroczeń."
    ],
    recommendedMotions: "Na podstawie art. 437 § 1 i 2 k.p.k. wnoszę o zmianę zaskarżonego wyroku poprzez uznanie oskarżonego za winnego popełnienia wykroczenia z art. 119 § 1 k.w. i wymierzenie mu na tej podstawie kary łagodnej grzywny."
  }
};
