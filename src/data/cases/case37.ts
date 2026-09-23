import { CaseData } from "../../types";

export const case37: CaseData = {
  id: "kazus-37-przywlaszczenie-leasing-pojazdu",
  title: "Kazus XXXVII – Sprawa Szymona Barana (Przywłaszczenie rzeczy powierzonej art. 284 § 2 k.k. a opóźnienie w zwrocie przedmiotu leasingu)",
  caseNumber: "II K 670/23",
  court: "Sąd Rejonowy w Toruniu, II Wydział Karny",
  defendant: "Szymon Baran (ur. 09.04.1982 r.)",
  role: "Radca prawny Michał Sokołowski – Obrońca oskarżonego Szymona Barana",
  topicCategory: "materialne",
  difficulty: "Kolokwium roczne (II rok aplikacji)",
  examType: "Kazus kolokwialny – Apelacja obrońcy na korzyść (brak zamiaru przywłaszczenia animus rem sibi habendi)",
  appellateCourt: "Sąd Okręgowy w Toruniu, IX Wydział Karny Odwoławczy za pośrednictwem Sądu Rejonowego w Toruniu",
  circumstancesOfAct: `1. STAN FAKTYCZNY:
Szymon Baran użytkował na podstawie umowy leasingu operacyjnego samochód dostawczy Renault Master o wartości 85.000 zł.
Wobec opóźnienia w zapłacie dwóch rat leasingowych, finansujący 'Lease-Pol' pismem z dnia 10 kwietnia 2023 r. wypowiedział umowę ze skutkiem natychmiastowym i wezwał do zwrotu pojazdu w terminie 7 dni.
Oskarżony pismem zwrotnym poinformował leasingodawcę, że pojazd uległ awarii skrzyni biegów i znajduje się w warsztacie mechanicznym w Toruniu na naprawie gwarancyjnej, podając dokładny adres warsztatu i oświadczając gotowość zwrotu natychmiast po ukończeniu naprawy.
Leasingodawca bez próby odbioru auta z warsztatu złożył zawiadomienie o przywłaszczeniu z art. 284 § 2 k.k.`,
  pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE:
- Policja zabezpieczyła pojazd w warsztacie samochodowym dokładnie pod wskazanym przez oskarżonego adresem. Samochód był częściowo zdemontowany z powodu uszkodzonej skrzyni biegów.
- Mimo to prokurator skierował akt oskarżenia z art. 284 § 2 k.k.`,
  indictment: `3. AKT OSKARŻENIA:
Prokurator zarzucił Szymonowi Baranowi sprzeniewierzenie powierzonego samochodu z art. 284 § 2 k.k.`,
  courtProceedings: `4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI:
- Oskarżony złożył faktury za holowanie i oświadczenie mechanika potwierdzające naprawę.
- Sąd Rejonowy uznał oskarżonego za winnego, argumentując, że 'od momentu skutecznego wypowiedzenia umowy leasingobiorca nie ma tytułu prawnego do dysponowania rzeczą i każde opóźnienie w zwrocie jest przywłaszczeniem'.`,
  verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 15 lutego 2024 r.
Sąd Rejonowy w Toruniu, II Wydział Karny
Sygn. akt II K 670/23
Sąd Rejonowy uznaje Szymona Barana za winnego popełnienia czynu z art. 284 § 2 k.k. i wymierza mu karę 1 roku pozbawienia wolności z warunkowym zawieszeniem jej wykonania na okres 2 lat próby oraz grzywnę 100 stawek po 50 zł.`,
  justificationFacts: `Sąd ustalił, że oskarżony nie zwrócił pojazdu w terminie 7 dni od wezwania.`,
  justificationEvidence: `Sąd pominął fakt, że oskarżony sam wskazał lokalizację auta i powód opóźnienia, nie traktując tego jako okoliczności wyłączającej zamiar przywłaszczenia.`,
  justificationLegal: `Sąd dopuścił się rażącej obrazy prawa materialnego art. 284 § 2 k.k. Istotą przywłaszczenia jest wola zatrzymania rzeczy dla siebie lub postąpienia z nią jak właściciel (animus rem sibi habendi), a nie sama bezprawna zwłoka w wykonaniu obowiązku wydania rzeczy.`,
  instructions: `Działając jako obrońca Szymona Barana, sporządź apelację.
Zaskarż wyrok w całości na korzyść oskarżonego.
Podnieś:
- Obrazę prawa materialnego art. 284 § 2 k.k. poprzez jego błędne zastosowanie w sytuacji, gdy oskarżonemu nie towarzyszył zamiar powiększenia swojego majątku kosztem właściciela (brak animus rem sibi habendi).
- Ewentualnie art. 7 k.p.k. i błąd w ustaleniach faktycznych.
Wnieś o zmianę wyroku i uniewinnienie oskarżonego.`,
  keyIssues: [
    "Znamiona strony podmiotowej przywłaszczenia (art. 284 § 2 k.k.) a bezprawność cywilna",
    "Konieczność wystąpienia animus rem sibi habendi (wola rozporządzenia rzeczą jak właściciel)",
    "Brak ukrywania mienia i poinformowanie właściciela o miejscu postoju pojazdu jako dowód braku zamiaru przestępnego"
  ],
  modelSolution: {
    recommendedScope: "W całości, na korzyść oskarżonego Szymona Barana.",
    allegationsList: [
      "Obraza prawa materialnego, tj. art. 284 § 2 k.k. poprzez jego niewłaściwe zastosowanie polegające na przyjęciu, że samo nieterminowe zwrócenie przedmiotu umowy leasingu po jej wypowiedzeniu stanowi przestępstwo przywłaszczenia mienia powierzonego, podczas gdy zachowanie oskarżonego, który nie ukrywał pojazdu i poinformował o obiektywnej przeszkodzie technicznej w warsztacie, było pozbawione zamiaru postąpienia z rzeczą jak właściciel (animus rem sibi habendi)."
    ],
    recommendedMotions: "Na podstawie art. 437 § 1 i 2 k.p.k. wnoszę o zmianę zaskarżonego wyroku w całości i uniewinnienie oskarżonego Szymona Barana na podstawie art. 414 § 1 k.p.k. w zw. z art. 17 § 1 pkt 2 k.p.k."
  }
};
