import { CaseData } from "../../types";

export const case13: CaseData = {
  id: "kazus-13-bezwzgledna-schizofrenia-obrona",
  title: "Proces przed Sądem Rejonowym w Inowrocławiu – Schizofrenia Paranoidalna i Brak Obrońcy (art. 439 § 1 pkt 10 k.p.k.)",
  caseNumber: "II K 740/24",
  court: "Sąd Rejonowy w Inowrocławiu, II Wydział Karny",
  defendant: "Bogdan Walczak (lat 48, rencista)",
  role: "Obrońca oskarżonego Bogdana Walczaka z wyboru",
  topicCategory: "bezwzgledne",
  difficulty: "Kolokwium roczne (II rok aplikacji)",
  circumstancesOfAct: `1. OKOLICZNOŚCI POPEŁNIENIA CZYNUSystem / Stan faktyczny zdarzenia:

W dniu 12 maja 2024 roku w Inowrocławiu oskarżony Bogdan Walczak (lat 48, rencista z orzeczoną całkowitą niezdolnością do pracy i samodzielnej egzystencji, od 15 lat cierpiący na schizofrenię paranoidalną ze stwierdzonymi omamami słuchowymi) wtargnął do miejscowej placówki banku PKO BP, trzymając w ręku zaostrzony śrubokręt, i zażądał od kasjerki natychmiastowej wypłaty kwoty 50.000 zł, twierdząc, że 'rząd wszczepił mu chip do mózgu i musi natychmiast uciekać przed agentami'.

Został natychmiast obezwładniony przez pracowników ochrony. Nikomu nic się nie stało.`,
  pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE:

Śledztwo prowadziła Prokuratura Rejonowa w Inowrocławiu (sygn. 4115-1.Ds.320.2024).
- Z uwagi na stan zdrowia psychicznego podejrzanego, prokurator powołał dwóch biegłych psychiatrów, którzy stwierdzili, że Bogdan Walczak ma w znacznym stopniu ograniczoną zdolność rozpoznania znaczenia czynu i pokierowania postępowaniem (art. 31 § 2 k.k.).
- Prezes Sądu Rejonowego w Inowrocławiu na mocy art. 79 § 1 pkt 3 k.p.k. wyznaczył oskarżonemu obrońcę z urzędu w osobie adwokata Marka Nowickiego.`,
  indictment: `3. AKT OSKARŻENIA:

Zarzut z art. 280 § 1 k.k. w zw. z art. 31 § 2 k.k. – usiłowanie rozboju w warunkach poczytalności znacznie ograniczonej.`,
  courtProceedings: `4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI (KARDYNALNA WADA PROCESOWA):

Przed Sądem Rejonowym w Inowrocławiu (sygn. II K 740/24):
- Na termin rozprawy w dniu 18 grudnia 2024 r. obrońca z urzędu adw. Marek Nowicki nie stawił się, składając wcześniej wniosek o usprawiedliwienie z powodu kolizji terminów w Sądzie Apelacyjnym w Gdańsku.
- Przewodniczący składu SSR Tadeusz P. uznał, że oskarżony odpowiada logicznie na pytania o dane osobowe i postanowił kontynuować rozprawę pod nieobecność obrońcy, przesłuchać oskarżonego oraz dwóch świadków kasjerów, zamknąć przewód sądowy i wydać wyrok skazujący na karę 2 lat pozbawienia wolności z warunkowym zawieszeniem na 4 lata.`,
  verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 18 grudnia 2024 r. Sąd Rejonowy w Inowrocławiu, II Wydział Karny
po rozpoznaniu sprawy Bogdana Walczaka:

I. Uznaje oskarżonego za winnego zarzucanego mu czynu z art. 13 § 1 k.k. w zw. z art. 280 § 1 k.k. w zw. z art. 31 § 2 k.k. i wymierza mu karę 2 lat pozbawienia wolności;
II. Wykonanie kary warunkowo zawiesza na okres 4 lat próby;
III. Zwalnia oskarżonego z kosztów sądowych.`,
  justificationFacts: `FORMULARZ UZASADNIENIA WYROKU (UK 1)
1.1. Ustalenie faktów:
Sąd ustalił, że oskarżony usiłował dokonać rozboju w banku przy użyciu śrubokręta, działając w warunkach art. 31 § 2 k.k. Sąd pominął milczeniem fakt nieobecności obrońcy na rozprawie w dniu 18 grudnia 2024 r.`,
  justificationEvidence: `2.1. Ocena dowodów Sądu I instancji:
Sąd oparł się na wyjaśnieniach oskarżonego złożonych na rozprawie bez obrońcy oraz zeznaniach świadków.`,
  justificationLegal: `3.1. Wywód prawny i wymiar kary:
Sąd uznał winę oskarżonego, wskazując, że mimo choroby psychicznej oskarżony może odpowiadać karnie, a orzeczona kara z zawieszeniem spełni cele probacyjne.`,
  instructions: "Jako obrońca z wyboru sporządź apelację do Sądu Okręgowego w Bydgoszczy. Podnieś bezwzględną przyczynę odwoławczą z art. 439 § 1 pkt 10 k.p.k. w zw. z art. 79 § 1 pkt 3 k.p.k. i art. 79 § 3 k.p.k. Pamiętaj: udział obrońcy w rozprawie przy obronie obligatoryjnej jest bezwzględnie konieczny. Jedyny możliwy wniosek: uchylenie wyroku w całości i przekazanie sprawy do ponownego rozpoznania!",
  keyIssues: [
    "Bezwzględna przyczyna odwoławcza art. 439 § 1 pkt 10 k.p.k. w zw. z art. 79 § 1 pkt 3 k.p.k. i art. 79 § 3 k.p.k.",
    "Brak badania 'wpływu na treść wyroku' – uchybienie skutkuje kasacją wyroku ex lege",
    "Jedyny prawidłowy wniosek: uchylenie wyroku i przekazanie do ponownego rozpoznania (art. 437 § 2 k.p.k.)."
  ],
  modelSolution: {
    recommendedScope: "W całości na korzyść oskarżonego Bogdana Walczaka.",
    modelCharges: [
      {
        basis: "art. 439 § 1 pkt 10 k.p.k.",
        violatedArticles: "art. 439 § 1 pkt 10 k.p.k. w zw. z art. 79 § 1 pkt 3 k.p.k. i art. 79 § 3 k.p.k.",
        formulation: "bezwzględną przyczynę odwoławczą przewidzianą w art. 439 § 1 pkt 10 k.p.k., polegającą na prowadzeniu rozprawy głównej przed Sądem Rejonowym w Inowrocławiu w dniu 18 grudnia 2024 r. pod nieobecność obrońcy oskarżonego Bogdana Walczaka i przeprowadzeniu czynności procesowych pod jego nieobecność, w sytuacji gdy oskarżony z uwagi na stwierdzone zaburzenia psychiczne (schizofrenię paranoidalną i art. 31 § 2 k.k.) musiał mieć obrońcę w procesie na mocy art. 79 § 1 pkt 3 k.p.k., a udział obrońcy w rozprawie głównej był obligatoryjny na podstawie art. 79 § 3 k.p.k.;",
        explanation: "Bezwzględna przyczyna odwoławcza nakazująca uchylenie orzeczenia."
      }
    ],
    modelMotions: [
      {
        type: "Główny",
        content: "na podstawie art. 437 § 2 zd. drugie k.p.k. w zw. z art. 439 § 1 pkt 10 k.p.k. wnoszę o uchylenie zaskarżonego wyroku w całości i przekazanie sprawy Sądowi Rejonowemu w Inowrocławiu do ponownego rozpoznania.",
        legalGround: "art. 437 § 2 k.p.k."
      }
    ],
    modelJustificationHighlights: [
      "Naruszenie prawa do obrony w postaci kwalifikowanej",
      "Brak konieczności wykazywania wpływu na treść orzeczenia przy uchybieniach z art. 439 k.p.k."
    ],
    commonPitfalls: [
      "Wnoszenie o uniewinnienie oskarżonego – kardynalny błąd przy art. 439 k.p.k.!"
    ]
  }
};
