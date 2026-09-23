import { CaseData } from "../../types";

export const case14: CaseData = {
  id: "kazus-14-naklo-reformatio-in-peius",
  title: "Proces w Nakle nad Notecią – Złamanie Pośredniego Zakazu Reformationis in Peius (art. 443 k.p.k.)",
  caseNumber: "II K 210/24",
  court: "Sąd Rejonowy w Nakle nad Notecią, II Wydział Karny",
  defendant: "Marcin Kaczmarek (lat 36, handlowiec)",
  role: "Obrońca oskarżonego Marcina Kaczmarka",
  topicCategory: "procesowe",
  difficulty: "Kolokwium roczne (II rok aplikacji)",
  circumstancesOfAct: `1. OKOLICZNOŚCI POPEŁNIENIA CZYNUSystem / Stan faktyczny zdarzenia:

W dniu 14 lutego 2024 roku w Nakle nad Notecią oskarżony Marcin Kaczmarek (lat 36, dotychczas niekarany) w trakcie transakcji sprzedaży samochodu marki Audi A4 posłużył się podrobioną fakturą VAT nr FV/12/2024 opiewającą na kwotę 42.000 zł, wprowadzając kupującego w błąd co do faktu opłacenia podatku akcyzowego i VAT.`,
  pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE I PIERWSZY WYROK:

Prokuratura Rejonowa w Nakle nad Notecią oskarżyła Kaczmarka o czyn z art. 270 § 1 k.k. w zb. z art. 286 § 1 k.k. w zw. z art. 11 § 2 k.k.
W pierwszym procesie (sygn. II K 50/24) Sąd Rejonowy w Nakle nad Notecią wyrokiem z dnia 10 maja 2024 r. skazał oskarżonego na karę 8 miesięcy pozbawienia wolności z warunkowym zawieszeniem na okres 2 lat oraz 2.000 zł grzywny.

Apelację od tego wyroku wniósł WYŁĄCZNIE OBROŃCA OSKARŻONEGO, zaskarżając wyrok na jego korzyść i zarzucając brak zamiaru oszustwa. Prokurator ani oskarżyciel posiłkowy nie zaskarżyli wyroku.
Sąd Okręgowy w Bydgoszczy wyrokiem z dnia 15 września 2024 r. uchylił wyrok Sądu I instancji i przekazał sprawę do ponownego rozpoznania z uwagi na braki w uzasadnieniu co do wartości szkody.`,
  indictment: `3. STAN PO UCHYLENIU WYROKU:

Sprawa wróciła do Sądu Rejonowego w Nakle nad Notecią pod sygn. II K 210/24. W ponownym procesie nie ujawniono żadnych nowych okoliczności ani dowodów obciążających.`,
  courtProceedings: `4. PONOWNE POSTĘPOWANIE PRZED SĄDEM I INSTANCJI (KARDYNALNE UCHYBIENIE):

Sąd Rejonowy w Nakle nad Notecią, rozpoznając sprawę ponownie po uchyleniu wyroku wyłącznie wskutek apelacji obrońcy, w dniu 12 grudnia 2024 r. wydał wyrok, w którym uznał Marcina Kaczmarka za winnego i wymierzył mu bezwzględną karę 1 roku i 2 miesięcy pozbawienia wolności bez warunkowego zawieszenia oraz grzywnę w wysokości 5.000 zł!

Sąd Rejonowy uzasadnił zaostrzenie kary faktem, że 'przestępczość gospodarcza wymaga bezwzględnego tępienia, a poprzedni wyrok był rażąco łagodny'.`,
  verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 12 grudnia 2024 r. Sąd Rejonowy w Nakle nad Notecią, II Wydział Karny
po ponownym rozpoznaniu sprawy Marcina Kaczmarka:

I. Uznaje oskarżonego za winnego czynu z art. 270 § 1 k.k. w zb. z art. 286 § 1 k.k. w zw. z art. 11 § 2 k.k. i wymierza mu karę 1 roku i 2 miesięcy pozbawienia wolności (BEZWZGLĘDNĄ);
II. Wymierza grzywnę 100 stawek po 50 zł;
III. Zasądza koszty sądowe.`,
  justificationFacts: `FORMULARZ UZASADNIENIA WYROKU (UK 1)
1.1. Ustalenie faktów:
Sąd ustalił tożsamy stan faktyczny co w pierwszym procesie. Sąd pominął fakt, że pierwszy wyrok został uchylony na skutek apelacji wniesionej wyłącznie na korzyść oskarżonego.`,
  justificationEvidence: `2.1. Ocena dowodów Sądu I instancji:
Sąd oparł się na dowodach zgromadzonych w pierwszym procesie.`,
  justificationLegal: `3.1. Wywód prawny i wymiar kary:
Sąd uznał, że poprzedni skład orzekający orzekł karę zbyt łagodną, dlatego Sąd w ponownym procesie czuł się uprawniony do orzeczenia kary bezwzględnej.`,
  instructions: "Sporządź apelację jako obrońca Marcina Kaczmarka. Zaskarż wyrok w części dotyczącej orzeczenia o karze na korzyść oskarżonego. Podnieś kardynalny zarzut obrazy przepisów postępowania – art. 443 k.p.k. (złamanie pośredniego zakazu reformationis in peius). Wskaż, że w razie ponownego rozpoznania sprawy sąd może wydać orzeczenie surowsze niż uchylone TYLKO wtedy, gdy orzeczenie było zaskarżone na niekorzyść oskarżonego! Wnoś o zmianę wyroku i złagodzenie kary co najmniej do poziomu z pierwszego wyroku z warunkowym zawieszeniem.",
  keyIssues: [
    "Pośredni zakaz reformationis in peius z art. 443 k.p.k. – fundamentalna gwarancja procesowa oskarżonego",
    "W razie ponownego rozpoznania sprawy sąd może wydać orzeczenie surowsze niż uchylone TYLKO wtedy, gdy orzeczenie było zaskarżone na niekorzyść oskarżonego albo gdy po uchyleniu wyroku ujawniły się nowe okoliczności obciążające",
    "Niedopuszczalność orzeczenia kary surowszej gatunkowo lub pozbawienia dobrodziejstwa warunkowego zawieszenia wykonania kary",
    "Zaskarżenie wyłącznie co do orzeczenia o karze."
  ],
  modelSolution: {
    recommendedScope: "W części dotyczącej orzeczenia o karze, na korzyść oskarżonego Marcina Kaczmarka.",
    modelCharges: [
      {
        basis: "art. 438 pkt 2 k.p.k.",
        violatedArticles: "art. 443 k.p.k. w zw. z art. 434 § 1 k.p.k.",
        formulation: "rażącą obrazę przepisów postępowania mającą decydujący wpływ na treść orzeczenia, a mianowicie art. 443 k.p.k., polegającą na wydaniu w ponownym postępowaniu orzeczenia surowszego niż uchylony wyrok Sądu Rejonowego w Nakle nad Notecią z dnia 10 maja 2024 r. (sygn. II K 50/24) poprzez orzeczenie bezwzględnej kary 1 roku i 2 miesięcy pozbawienia wolności, w sytuacji gdy poprzedni wyrok został uchylony wyłącznie na skutek apelacji wniesionej na korzyść oskarżonego, a w ponownym postępowaniu nie ujawniły się żadne nowe okoliczności obciążające, co stanowiło jaskrawe złamanie ustawowego pośredniego zakazu reformationis in peius;",
        explanation: "Kardynalne naruszenie art. 443 k.p.k. pociągające za sobą bezwzględną konieczność zmiany wyroku."
      }
    ],
    modelMotions: [
      {
        type: "Główny",
        content: "na podstawie art. 437 § 1 i 2 k.p.k. wnoszę o zmianę zaskarżonego wyroku w punkcie I poprzez wymierzenie oskarżonemu kary pozbawienia wolności w wymiarze nie wyższym niż 8 miesięcy z warunkowym zawieszeniem jej wykonania na okres próby 2 lat stosownie do treści art. 69 § 1 k.k. i art. 70 § 1 k.k.",
        legalGround: "art. 437 § 2 k.p.k."
      }
    ],
    modelJustificationHighlights: [
      "Konstytucyjna i ustawowa ranga zakazu reformationis in peius (art. 443 k.p.k.)",
      "Utrwalone orzecznictwo SN: zmiana kary z zawieszonej na bezwzględną przy braku środka na niekorzyść stanowi rażące bezprawie sądowe."
    ],
    commonPitfalls: [
      "Stawianie zarzutu z art. 438 pkt 4 k.p.k. (rażąca niewspółmierność) zamiast art. 438 pkt 2 k.p.k. (art. 443 k.p.k. to złamanie twardego zakazu procesowego!)"
    ]
  }
};
