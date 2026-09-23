import { CaseData } from "../../types";

export const case20: CaseData = {
  id: "kazus-20-tuchola-zasada-bezposredniosci-odczytanie",
  title: "Proces w Tucholi – Naruszenie Zasady Bezpośredniości i Prawa do Obrony poprzez Bezpodstawne Odczytanie Zeznań Świadka (art. 391 § 1 k.p.k. i art. 6 k.p.k.)",
  caseNumber: "II K 340/24",
  court: "Sąd Rejonowy w Tucholi, II Wydział Karny",
  defendant: "Robert Sokołowski (lat 28, stolarz)",
  role: "Obrońca oskarżonego Roberta Sokołowskiego",
  topicCategory: "procesowe",
  difficulty: "Kolokwium roczne (II rok aplikacji)",
  circumstancesOfAct: `1. OKOLICZNOŚCI POPEŁNIENIA CZYNUSystem / Stan faktyczny zdarzenia:

W dniu 5 października 2024 roku w Tucholi doszło do uszkodzenia ciała Pawła K. w trakcie sprzeczki w lokalu gastronomicznym. Oskarżony Robert Sokołowski kategorycznie twierdził, że działał w obronie koniecznej przed atakiem nożem tapicerskim ze strony pokrzywdzonego.

Jedynym naocznym świadkiem, który rzekomo widział, że oskarżony zaatakował pierwszy bez powodu, był barman Mariusz D. Zeznania Mariusza D. ze śledztwa stanowiły wyłączny dowód oskarżenia.`,
  pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE:

Dochodzenie prowadziła KPP w Tucholi. Mariusz D. został przesłuchany raz przez policjanta w dochodzeniu. Obrona nie miała możliwości zadawania mu pytań.`,
  indictment: `3. AKT OSKARŻENIA:

Zarzut z art. 157 § 1 k.k. skierowany do Sądu Rejonowego w Tucholi.`,
  courtProceedings: `4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI (KARDYNALNE UCHYBIENIE):

Przed Sądem Rejonowym w Tucholi (sygn. II K 340/24):
- Na terminie rozprawy w dniu 14 stycznia 2025 r. świadek Mariusz D. nie stawił się.
- Z informacji Policji wynikało, że Mariusz D. wyjechał na dwutygodniowy urlop wypoczynkowy w polskie Tatry do Zakopanego i wróci do pracy za 10 dni.
- Obrońca oskarżonego złożył wniosek o odroczenie rozprawy w celu bezpośredniego przesłuchania kluczowego świadka na sali i zadania mu pytań dotyczących noża tapicerskiego.
- Sąd Rejonowy w Tucholi postanowieniem z dnia 14 stycznia 2025 r. wniosek oddalił i na podstawie art. 391 § 1 k.p.k. postanowił odczytać zeznania świadka Mariusza D. ze śledztwa, uznając, że 'świadek przebywa poza miejscem zamieszkania, a sprawa powinna zostać szybko zakończona'.
- W oparciu o odczytane zeznania Sąd skazał Roberta Sokołowskiego na karę 1 roku pozbawienia wolności z zawieszeniem na 2 lata.`,
  verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 14 stycznia 2025 r. Sąd Rejonowy w Tucholi, II Wydział Karny
po rozpoznaniu sprawy Roberta Sokołowskiego:

I. Uznaje oskarżonego za winnego czynu z art. 157 § 1 k.k. i wymierza mu karę 1 roku pozbawienia wolności;
II. Wykonanie kary warunkowo zawiesza na okres 2 lat próby;
III. Zasądza zadośćuczynienie 4.000 zł i koszty procesu.`,
  justificationFacts: `FORMULARZ UZASADNIENIA WYROKU (UK 1)
1.1. Ustalenie faktów:
Sąd ustalił przebieg zdarzenia w oparciu o odczytane zeznania Mariusza D.`,
  justificationEvidence: `2.1. Ocena dowodów Sądu I instancji:
Sąd dał wiarę odczytanym zeznaniom barmana, odrzucając wyjaśnienia oskarżonego.`,
  justificationLegal: `3.1. Wywód prawny i wymiar kary:
Sąd uznał winę oskarżonego.`,
  instructions: "Sporządź apelację jako obrońca Roberta Sokołowskiego. Zaskarż wyrok w całości na korzyść oskarżonego. Sformułuj zarzut obrazy przepisów postępowania mającej wpływ na treść orzeczenia – art. 391 § 1 k.p.k. w zw. z art. 6 k.p.k. i art. 6 ust. 3 lit. d EKPCz (naruszenie zasady bezpośredniości i prawa do obrony poprzez bezpodstawne odczytanie zeznań jedynego kluczowego świadka oskarżenia z powodu zwykłego urlopu wypoczynkowego w kraju, co nie stanowi niemożliwej do usunięcia przeszkody ani pobytu za granicą). Wnoś o uchylenie wyroku w całości i przekazanie sprawy Sądowi Rejonowemu w Tucholi do ponownego rozpoznania.",
  keyIssues: [
    "Fundamentalna zasada bezpośredniości w procesie karnym (art. 391 § 1 k.p.k.)",
    "Przesłanki odczytania zeznań świadka z art. 391 § 1 k.p.k. mają charakter wyjątkowy i ściśle interpretowany (przebywanie za granicą, niemożliwa do usunięcia przeszkoda, śmierć)",
    "Zwykły krótkotrwały urlop wypoczynkowy w kraju (Zakopane) NIE stanowi przesłanki z art. 391 § 1 k.p.k.!",
    "Złamanie konstytucyjnego prawa do obrony (art. 6 k.p.k., art. 6 ust. 3 lit. d EKPCz) poprzez uniemożliwienie zadania pytań jedynemu świadkowi obciążającemu",
    "Prawidłowy wniosek: uchylenie wyroku i przekazanie do ponownego rozpoznania (art. 437 § 2 k.p.k.)."
  ],
  modelSolution: {
    recommendedScope: "W całości na korzyść oskarżonego Roberta Sokołowskiego.",
    modelCharges: [
      {
        basis: "art. 438 pkt 2 k.p.k.",
        violatedArticles: "art. 391 § 1 k.p.k. w zw. z art. 6 k.p.k. oraz art. 6 ust. 3 lit. d EKPCz",
        formulation: "rażącą obrazę przepisów postępowania mającą decydujący wpływ na treść orzeczenia, a mianowicie art. 391 § 1 k.p.k. w zw. z art. 6 k.p.k., polegającą na bezpodstawnym odczytaniu protokołu zeznań jedynego bezpośredniego świadka oskarżenia Mariusza D. złożonych w postępowaniu przygotowawczym, w sytuacji gdy świadek ten przebywał jedynie na krótkotrwałym dwutygodniowym urlopie wypoczynkowym na terytorium Rzeczypospolitej Polskiej, co w żaden sposób nie stanowiło niemożliwej do usunięcia przeszkody ani stałego pobytu za granicą, co doprowadziło do drastycznego złamania zasady bezpośredniości oraz pozbawienia oskarżonego prawa do obrony poprzez uniemożliwienie zadania świadkowi pytań;",
        explanation: "Kardynalne naruszenie zasady bezpośredniości w polskim procesie karnym."
      }
    ],
    modelMotions: [
      {
        type: "Główny",
        content: "na podstawie art. 437 § 2 k.p.k. wnoszę o uchylenie zaskarżonego wyroku w całości i przekazanie sprawy Sądowi Rejonowemu w Tucholi do ponownego rozpoznania.",
        legalGround: "art. 437 § 2 k.p.k."
      }
    ],
    modelJustificationHighlights: [
      "Standardy Europejskiego Trybunału Praw Człowieka w Strasburgu (Al-Khawaja i Tahery p-ko Wielkiej Brytanii)",
      "Wyrok SN z 18.03.2015 r., II KK 35/15 (odczytanie zeznań przy braku przesłanek z art. 391 § 1 k.p.k. to rażące uchybienie)."
    ],
    commonPitfalls: [
      "Wnoszenie o uniewinnienie – skoro świadek nie został przesłuchany bezpośrednio, zachodzi konieczność powtórzenia procesu!"
    ]
  }
};
