import { CaseData } from "../../types";

export const case44: CaseData = {
  id: "kazus-44-urzednicze-brak-szkody-231",
  title: "Kazus XLIV – Sprawa Waldemara Stępnia (Przestępstwo urzędnicze art. 231 § 1 k.k. a brak skutku w postaci działania na szkodę interesu publicznego lub prywatnego)",
  caseNumber: "II K 661/23",
  court: "Sąd Rejonowy we Włocławku, II Wydział Karny",
  defendant: "Waldemar Stępień (ur. 04.03.1965 r.)",
  role: "Radca prawny Piotr Czarnecki – Obrońca oskarżonego Waldemara Stępnia",
  topicCategory: "materialne",
  difficulty: "Kolokwium roczne (II rok aplikacji)",
  examType: "Kazus kolokwialny – Apelacja obrońcy na korzyść (brak znamienia działania na szkodę interesu z art. 231 § 1 k.k.)",
  appellateCourt: "Sąd Okręgowy we Włocławku, II Wydział Karny Odwoławczy za pośrednictwem Sądu Rejonowego we Włocławku",
  circumstancesOfAct: `1. STAN FAKTYCZNY:
Waldemar Stępień, kierownik wydziału inwestycji urzędu gminy, w związku z pilną awarią sieci wodociągowej zagrażającej odcięciem wody dla szpitala powiatowego, wydał zgodę na natychmiastowe wejście wykonawcy na plac budowy przed formalnym podpisaniem aneksu do umowy o roboty budowlane (aneks został podpisany 3 dni później po skompletowaniu kontrasygnaty skarbnika).
Roboty zostały wykonane bezbłędnie, szpital nie ucierpiał, a gmina nie poniosła żadnych dodatkowych kosztów ani strat finansowych.
Po zmianie wójta gminy zawiadomiono prokuraturę o przekroczeniu uprawnień przez kierownika (art. 231 § 1 k.k.).`,
  pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE:
- Prokurator uznał, że sam fakt wydania zgody przed podpisaniem aneksu stanowił naruszenie procedury zamówień publicznych i skierował akt oskarżenia.`,
  indictment: `3. AKT OSKARŻENIA:
Prokurator zarzucił Waldemarowi Stępniowi przekroczenie uprawnień na szkodę interesu publicznego (art. 231 § 1 k.k.).`,
  courtProceedings: `4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI:
- Sąd Rejonowy uznał oskarżonego za winnego, przyjmując, że 'każde złamanie procedury urzędowej samo przez się godzi w interes publiczny, bez względu na skutki materialne'.`,
  verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 22 lutego 2024 r.
Sąd Rejonowy we Włocławku, II Wydział Karny
Sygn. akt II K 661/23
Sąd Rejonowy uznaje Waldemara Stępnia za winnego popełnienia występku z art. 231 § 1 k.k. i na tej podstawie wymierza mu karę grzywny w wysokości 100 stawek dziennych po 50 zł.`,
  justificationFacts: `Sąd ustalił, że gmina nie poniosła szkody majątkowej, a szpital utrzymał dostawy wody.`,
  justificationEvidence: `Fakty są bezsporne.`,
  justificationLegal: `Sąd dopuścił się rażącej obrazy prawa materialnego art. 231 § 1 k.k. Zgodnie z utrwalonym orzecznictwem SN (uchwała 7 sędziów SN z 24.01.2013 r., I KZP 24/12; wyrok SN z 2.06.2021 r., II KK 134/21) znamię 'działając na szkodę interesu publicznego lub prywatnego' wymaga wykazania realnego, a nie jedynie hipotetycznego zagrożenia chronionego dobra prawnego. Naruszenie wewnętrznej procedury biurowej, które zapobiegło katastrofie komunalnej, nie wypełnia tego znamienia!`,
  instructions: `Działając jako obrońca Waldemara Stępnia, sporządź apelację.
Zaskarż wyrok w całości na korzyść oskarżonego.
Podnieś:
- Obrazę prawa materialnego art. 231 § 1 k.k. poprzez jego błędną wykładnię i przyjęcie, że samo naruszenie formalnej kolejności czynności urzędowych wyczerpuje znamię działania na szkodę interesu publicznego.
- Ewentualnie art. 1 § 2 k.k. w zw. z art. 17 § 1 pkt 3 k.p.k. (znikoma społeczna szkodliwość).
Wnieś o zmianę zaskarżonego wyroku i uniewinnienie oskarżonego.`,
  keyIssues: [
    "Wykładnia znamienia 'działania na szkodę interesu publicznego lub prywatnego' z art. 231 § 1 k.k.",
    "Wymóg realnego niebezpieczeństwa szkody a formalne uchybienia procedurom",
    "Działanie w stanie wyższej konieczności i ochrona dobra o wyższej wartości (szpital)"
  ],
  modelSolution: {
    recommendedScope: "W całości, na korzyść oskarżonego Waldemara Stępnia.",
    allegationsList: [
      "Obraza prawa materialnego, tj. art. 231 § 1 k.k. poprzez jego błędną wykładnię i niewłaściwe zastosowanie polegające na uznaniu, że samo uchybienie terminowi sporządzenia aneksu do umowy wyczerpuje ustawowe znamię działania na szkodę interesu publicznego, podczas gdy prawidłowo ustalony stan faktyczny dowodzi, iż decyzja oskarżonego zapobiegła wstrzymaniu dostaw wody do szpitala, a gmina nie poniosła żadnej szkody, co wyklucza zaistnienie przestępstwa nadużycia władzy."
    ],
    recommendedMotions: "Na podstawie art. 437 § 1 i 2 k.p.k. wnoszę o zmianę zaskarżonego wyroku w całości i uniewinnienie oskarżonego Waldemara Stępnia od zarzucanego mu czynu."
  }
};
