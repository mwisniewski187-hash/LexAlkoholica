import { CaseData } from "../types";

export const ADDITIONAL_CASES: CaseData[] = [
  // KAZUS 11
  {
    id: "kazus-11-sprzet-budowlany-paserstwo",
    title: "Zakup agregatu na portalu ogłoszeniowym – Paserstwo nieumyślne a pomocnictwo do kradzieży z włamaniem",
    caseNumber: "II K 412/24",
    court: "Sąd Rejonowy w Toruniu, II Wydział Karny",
    defendant: "Mateusz Wójcik (lat 34, przedsiębiorca budowlany, niekarany)",
    role: "radca prawny Piotr Zieliński, obrońca oskarżonego Mateusza Wójcika",
    topicCategory: "materialne",
    difficulty: "Kolokwium roczne (II rok aplikacji)",
    examDate: "22 KWIETNIA 2026 r.",
    examType: "KOLOKWIUM ROCZNE (II ROK APLIKACJI RADCOWSKIEJ) – PRAWO KARNE",
    appellateCourt: "Sąd Okręgowy w Toruniu, IX Wydział Karny Odwoławczy, ul. Piekary 51, 87-100 Toruń",
    defenseAttorneyName: "radca prawny Piotr Zieliński",
    circumstancesOfAct: `1. OKOLICZNOŚCI POPEŁNIENIA CZYNUSystem / Stan faktyczny zdarzenia:

Oskarżony Mateusz Wójcik od 2018 r. prowadzi jednoosobową działalność gospodarczą pod firmą 'Wójcik-Budownictwo' w Toruniu. W dniu 14 marca 2024 r. oskarżony poszukiwał na portalu ogłoszeniowym OLX profesjonalnego agregatu prądotwórczego dużej mocy na potrzeby realizacji kontraktu podwykonawczego przy budowie osiedla mieszkaniowego. Znalazł ofertę sprzedaży agregatu marki Atlas Copco QEP R 14 za kwotę 14 500 zł brutto (cena rynkowa nowego urządzenia wynosiła wówczas ok. 21 000 zł, a używanego ok. 16 000 – 17 000 zł).

Sprzedający podający się w ogłoszeniu za 'Krzysztofa Nowaka' przedstawił w korespondencji elektronicznej skan dowodu zakupu z pieczęcią hurtowni elektrycznej w Bydgoszczy oraz oświadczył, że urządzenie pochodzi z likwidacji jego filii budowlanej. Do transakcji doszło w dniu 16 marca 2024 r. na parkingu przed centrum handlowym 'Plaza' w Toruniu. Sprzedający wydał agregat, komplet kluczyków, instrukcję obsługi oraz wystawił pisemną umowę kupna-sprzedaży z danymi osobowymi (które, jak się później okazało, pochodziły ze skradzionego dowodu tożsamości niejakiego Krzysztofa Nowaka). Oskarżony zapłacił gotówką, żądając pokwitowania, i wprowadził urządzenie do ewidencji środków trwałych swojej firmy, zgłaszając transakcję w deklaracji VAT.

W dniu 10 kwietnia 2024 r. na plac budowy przybyła Policja, która w wyniku kontroli numerów seryjnych ustaliła, że agregat został skradziony z włamaniem w nocy z 11 na 12 marca 2024 r. z terenu budowy obwodnicy Bydgoszczy na szkodę spółki 'Strabag' S.A. Urządzenie natychmiast zatrzymano i zwrócono pokrzywdzonej spółce.`,
    pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE (Śledztwo Prokuratury Rejonowej Toruń-Wschód, sygn. 4114-1.Ds.89.2024):

- W toku śledztwa Mateusz Wójcik złożył obszerne wyjaśnienia, przedstawił wydruki korespondencji z portalu OLX, umowę kupna-sprzedaży, dowód wpłaty oraz dowód ujęcia agregatu w ewidencji księgowej przedsiębiorstwa.
- Prokurator uznał, że niska cena (14 500 zł) oraz okoliczność sfinalizowania transakcji na parkingu świadczą o tym, że oskarżony musiał wiedzieć, że agregat pochodzi z przestępstwa kradzieży z włamaniem, a nabywając go 'zapewnił zbycie rzeczy kradzionej', co ułatwiło włamywaczom popełnienie przestępstwa.
- Nie ustalono tożsamości faktycznego zbywcy posługującego się skradzionym dowodem tożsamości.
- Prokurator przedstawił Wójcikowi zarzut pomocnictwa do kradzieży z włamaniem (art. 18 § 3 k.k. w zw. z art. 279 § 1 k.k.).`,
    indictment: `3. AKT OSKARŻENIA:

Prokurator Prokuratury Rejonowej Toruń-Wschód zarzucił Mateuszowi Wójcikowi, że:
'w dniu 16 marca 2024 r. w Toruniu, działając w zamiarze, aby nieustalone dotąd osoby dokonały czynu zabronionego, ułatwił im jego popełnienie w ten sposób, że nabył za kwotę 14 500 zł agregat prądotwórczy Atlas Copco o wartości 21 000 zł wiedząc, że pochodzi on z uprzedniej kradzieży z włamaniem dokonanej na szkodę Strabag S.A., czym zapewnił zbyt rzeczy pochodzącej z przestępstwa,
tj. o przestępstwo z art. 18 § 3 k.k. w zw. z art. 279 § 1 k.k.'`,
    courtProceedings: `4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI (Sąd Rejonowy w Toruniu, sygn. II K 412/24):

- Na rozprawie głównej oskarżony nie przyznał się do winy. Wyjaśnił, że sprawdził urządzenie w ogólnodostępnej bazie skradzionych maszyn budowlanych prowadzonej przez izbę gospodarczą, gdzie agregat nie figurował, a cena 14 500 zł za sprzęt 3-letni nie budziła u niego podejrzeń.
- Sąd oddalił wniosek obrońcy o dopuszczenie dowodu z opinii biegłego rzeczoznawcy majątkowego na okoliczność rzeczywistej wartości rynkowej używanego 3-letniego agregatu tego typu na rynku wtórnym, twierdząc na podstawie art. 170 § 1 pkt 2 k.p.k., że okoliczność ta nie ma znaczenia dla rozstrzygnięcia sprawy, bo pokrzywdzony wskazał wartość księgową 21 000 zł.
- Przedstawiciel pokrzywdzonej spółki Strabag S.A. oświadczył na piśmie, że agregat odzyskano w stanie nienaruszonym i spółka nie poniosła żadnej szkody majątkowej. Mimo to Sąd orzekł nawiązkę 5 000 zł na rzecz Funduszu Sprawiedliwości.`,
    verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 18 listopada 2024 r. Sąd Rejonowy w Toruniu, II Wydział Karny (SSR Tomasz Bąk)

1. Uznaje oskarżonego Mateusza Wójcika za winnego tego, że w dniu 16 marca 2024 r. w Toruniu pomógł sprawcom kradzieży z włamaniem poprzez nabycie agregatu Atlas Copco wartości 21 000 zł, tj. czynu z art. 18 § 3 k.k. w zw. z art. 279 § 1 k.k. i za to na mocy art. 19 § 1 k.k. w zw. z art. 279 § 1 k.k. wymierza mu karę 1 roku pozbawienia wolności;
2. Na mocy art. 69 § 1 i 2 k.k. oraz art. 70 § 1 k.k. wykonanie orzeczonej kary warunkowo zawiesza na okres próby 2 lat;
3. Na mocy art. 71 § 1 k.k. orzeka karę grzywny w wysokości 100 stawek dziennych po 50 zł każda;
4. Na mocy art. 47 § 1 k.k. orzeka nawiązkę na rzecz Funduszu Pomocy Pokrzywdzonym oraz Pomocy Postpenitencjarnej w kwocie 5 000 zł;
5. Zasądza od oskarżonego na rzecz Skarbu Państwa koszty sądowe w kwocie 1 250 zł.`,
    justificationFacts: `Formularz UK 1:
Sąd ustalił, że oskarżony zakupił agregat za 14 500 zł, podczas gdy nowy kosztuje 21 000 zł. Z faktu odbioru sprzętu na parkingu oraz braku weryfikacji tożsamości sprzedawcy w urzędzie Sąd wywiódł, że oskarżony godził się na to, że sprzęt pochodzi z kradzieży z włamaniem, a zatem swoim zachowaniem ułatwił sprawcom przestępstwa zbycie łupu.`,
    justificationEvidence: `Sąd oparł się na protokole zatrzymania rzeczy i zeznaniach świadka ze Strabag S.A. Odmówił wiary wyjaśnieniom oskarżonego co do działania w dobrej wierze, uznając je za przyjętą linię obrony zmierzającą do uniknięcia surowej odpowiedzialności.`,
    justificationLegal: `Sąd przyjął konstrukcję pomocnictwa następczego (zapewnienie zbytu), uznając, że nabycie rzeczy z kradzieży z włamaniem po jej dokonaniu stanowi pomocnictwo do art. 279 § 1 k.k., o ile sprawcy mogli liczyć na zbyt.`,
    instructions: "Jako radca prawny Piotr Zieliński sporządź apelację od wyroku Sądu Rejonowego w Toruniu do Sądu Okręgowego w Toruniu, zaskarżając wyrok w całości na korzyść oskarżonego Mateusza Wójcika.",
    keyIssues: [
      "Kardynalna obraza prawa materialnego art. 18 § 3 k.k. – pomocnictwo może być popełnione wyłącznie PRZED lub W TRAKCIE popełniania czynu zabronionego. Pomocnictwo 'po fakcie' (post factum) bez uprzedniego porozumienia jest w polskim prawie karnym konstrukcją niedopuszczalną; nabycie rzeczy skradzionej stanowi co najwyżej paserstwo (art. 291 lub 292 k.k.), a nie pomocnictwo do kradzieży z włamaniem!",
      "Błąd w ustaleniach faktycznych i naruszenie art. 7 k.p.k. – przypisanie oskarżonemu umyślności (zamiaru ewentualnego) bez jakichkolwiek dowodów, w sytuacji gdy oskarżony dysponował umową, fakturą sprzedawcy, wprowadził sprzęt do legalnej ewidencji księgowej i zapłacił podatek VAT, co wskazuje na brak zamiaru paserstwa umyślnego, a ewentualnie niedołożenie należytej staranności (art. 292 § 1 k.k. – paserstwo nieumyślne).",
      "Obraza przepisów postępowania art. 170 § 1 pkt 2 k.p.k. w zw. z art. 193 § 1 k.p.k. poprzez bezpodstawne oddalenie wniosku o wycenę rynkową 3-letniego urządzenia, co miało kluczowe znaczenie dla oceny, czy cena 14 500 zł rażąco odbiegała od cen rynkowych.",
      "Obraza prawa materialnego art. 47 § 1 k.k. – brak ustawowych przesłanek do orzeczenia nawiązki przy skazaniu za przestępstwo przeciwko mieniu bez wniosku i bez zaistnienia znamion z art. 47 k.k.",
    ],
    modelSolution: {
      recommendedScope: "Zaskarżenie wyroku w całości na korzyść oskarżonego Mateusza Wójcika.",
      modelCharges: [
        {
          basis: "art. 438 pkt 1 k.p.k.",
          violatedArticles: "art. 18 § 3 k.k. w zw. z art. 279 § 1 k.k.",
          formulation: "obrazę prawa materialnego, a mianowicie art. 18 § 3 k.k., polegającą na jego błędnym zastosowaniu i przyjęciu konstrukcji pomocnictwa do przestępstwa kradzieży z włamaniem w odniesieniu do zachowania oskarżonego polegającego wyłącznie na nabyciu rzeczy już po dokonaniu jej kradzieży, bez uprzedniego porozumienia ze sprawcami włamania przed lub w trakcie jego dokonywania, podczas gdy pomocnictwo może nastąpić wyłącznie do momentu zakończenia czynu zabronionego;",
          explanation: "Nabycie rzeczy po dokonaniu kradzieży nie może stanowić pomocnictwa do tej kradzieży, chyba że obietnica pomocy została złożona przed jej dokonaniem. W przeciwnym razie zachowanie to wyczerpuje jedynie znamiona paserstwa.",
        },
        {
          basis: "art. 438 pkt 2 k.p.k.",
          violatedArticles: "art. 7 k.p.k. w zw. z art. 410 k.p.k. oraz art. 170 § 1 pkt 2 k.p.k.",
          formulation: "obrazę przepisów postępowania mającą wpływ na treść orzeczenia, a mianowicie art. 7 k.p.k. w zw. z art. 170 § 1 pkt 2 k.p.k., polegającą na dowolnej ocenie dowodów oraz bezpodstawnym oddaleniu wniosku o opinię biegłego ds. wyceny maszyn, co skutkowało błędnym przyjęciem, że cena 14 500 zł za 3-letni agregat rażąco odbiegała od cen rynkowych i świadczyła o świadomości przestępnego pochodzenia rzeczy;",
          explanation: "Sąd nie mógł bez wiadomości specjalnych stwierdzić, czy cena używanego sprzętu była rażąco zaniżona.",
        },
        {
          basis: "art. 438 pkt 1 k.p.k.",
          violatedArticles: "art. 47 § 1 k.k.",
          formulation: "obrazę prawa materialnego, a mianowicie art. 47 § 1 k.k., poprzez bezpodstawne orzeczenie nawiązki na rzecz Funduszu Pomocy Pokrzywdzonym w kwocie 5 000 zł, w sytuacji gdy przepis ten nie przewiduje możliwości orzeczenia nawiązki przy przypisanym typie przestępstwa przeciwko mieniu;",
          explanation: "Art. 47 § 1 k.k. ma charakter ściśle określony i nie obejmuje art. 279 k.k. ani paserstwa.",
        },
      ],
      modelMotions: [
        {
          type: "Główny",
          content: "na podstawie art. 437 § 1 i 2 k.p.k. wnoszę o zmianę zaskarżonego wyroku i uniewinnienie oskarżonego Mateusza Wójcika od zarzucanego mu czynu;",
          legalGround: "art. 437 § 2 k.p.k.",
        },
        {
          type: "Ewentualny",
          content: "z ostrożności procesowej: wnoszę o zmianę kwalifikacji prawnej czynu na występek paserstwa nieumyślnego z art. 292 § 1 k.k. i warunkowe umorzenie postępowania karnego na podstawie art. 66 § 1 i 2 k.k. na okres próby 1 roku;",
          legalGround: "art. 437 § 2 k.p.k. w zw. z art. 66 § 1 k.k.",
        },
      ],
      modelJustificationHighlights: [
        "Niedopuszczalność konstrukcji pomocnictwa następczego w polskim prawie karnym (uchwała SN I KZP 2/11)",
        "Rozgraniczenie paserstwa umyślnego (art. 291 k.k.) od nieumyślnego (art. 292 k.k.)",
        "Dokumentowanie legalności transakcji gospodarczej w świetle art. 7 k.p.k.",
        "Bezprawne orzeczenie nawiązki z art. 47 § 1 k.k.",
      ],
      commonPitfalls: [
        "Niezauważenie błędu konstrukcyjnego pomocnictwa post factum",
        "Brak zarzutu obrazy art. 47 § 1 k.k. (nawiązka orzeczona poza granicami ustawy)",
        "Nieuwzględnienie faktu, że agregat został w całości zwrócony i szkoda nie zaistniała.",
      ],
    },
  },

  // KAZUS 12
  {
    id: "kazus-12-wypadek-dk10-biegly",
    title: "Wypadek na Drodze Krajowej nr 10 – Samodzielne ustalenia sądu zamiast opinii biegłego z zakresu rekonstrukcji wypadków",
    caseNumber: "II K 550/24",
    court: "Sąd Rejonowy w Nakle nad Notecią, II Wydział Karny",
    defendant: "Jarosław Kaczmarek (lat 42, zawodowy kierowca kat. C+E)",
    role: "radca prawny Anna Majewska, obrońca oskarżonego Jarosława Kaczmarka",
    topicCategory: "procesowe",
    difficulty: "Kolokwium roczne (II rok aplikacji)",
    examDate: "22 KWIETNIA 2026 r.",
    examType: "KOLOKWIUM ROCZNE (II ROK APLIKACJI RADCOWSKIEJ) – PRAWO KARNE",
    appellateCourt: "Sąd Okręgowy w Bydgoszczy, IV Wydział Karny Odwoławczy, Wały Jagiellońskie 2, 85-131 Bydgoszcz",
    defenseAttorneyName: "radca prawny Anna Majewska",
    circumstancesOfAct: `1. OKOLICZNOŚCI POPEŁNIENIA CZYNUSystem / Stan faktyczny zdarzenia:

W dniu 18 stycznia 2024 r. około godz. 17.15 na drodze krajowej nr 10 w rejonie miejscowości Ślesin (odcinek Nakło – Bydgoszcz) panowały trudne warunki atmosferyczne: zapadający zmrok, marznąca mżawka i temperatura -1°C. Oskarżony Jarosław Kaczmarek kierował samochodem ciężarowym marki Scania wraz z naczepą chłodniczą (zespół pojazdów o masie 36 ton). Jechał z prędkością tachografową 64 km/h na odcinku o dopuszczalnej prędkości 70 km/h.

Z drogi podporządkowanej z prawej strony (wyjazd z posesji prywatnej) nagle i bez włączonych świateł mijania wyjechał samochód osobowy Daewoo Matiz kierowany przez pokrzywdzonego Stanisława W. (lat 78). Pokrzywdzony wjechał bezpośrednio przed nadjeżdżający ciągnik siodłowy oskarżonego. Jarosław Kaczmarek podjął natychmiastowe gwałtowne hamowanie oraz manewr obronny skrętu w lewo, jednak z uwagi na gołoledź doszło do boczno-skośnego zderzenia pojazdów. Samochód Matiz został zepchnięty do przydrożnego rowu.

W wyniku zderzenia pasażerka Matiza Maria W. doznała złamania obojczyka i żeber (rozstrój zdrowia powyżej 7 dni – art. 157 § 1 k.k.), a kierujący Stanisław W. potłuczeń głowy poniżej 7 dni. Obaj kierujący byli trzeźwi.`,
    pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE:

- Policjanci z KPP w Nakle nad Notecią zabezpieczyli tarczkę tachografu cyfrowego, sporządzili szkic miejsca zdarzenia i protokół oględzin.
- Powołany w dochodzeniu biegły mgr inż. Robert Sobczak sporządził wstępną opinię, w której wskazał, że 'główną i bezpośrednią przyczyną zderzenia było nieustąpienie pierwszeństwa przejazdu przez kierującego Matizem, jednak kierujący Scanią jechał o ok. 10 km/h za szybko w stosunku do panującej gołoledzi'.
- Biegły nie dokonał symulacji czasowo-przestrzennej w programie PC-Crash ani nie określił, czy przy hipotetycznej prędkości 50 km/h oskarżony zdołałby uniknąć zderzenia z wjeżdżającym bez świateł Matizem.`,
    indictment: `3. AKT OSKARŻENIA:

Prokurator Prokuratury Rejonowej w Nakle nad Notecią oskarżył Jarosława Kaczmarka o czyn z art. 177 § 1 k.k., zarzucając mu nieumyślne naruszenie zasad bezpieczeństwa w ruchu lądowym poprzez niedostosowanie prędkości do panujących warunków drogowych i doprowadzenie do wypadku.`,
    courtProceedings: `4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI:

- Na rozprawie obrońca oskarżonego złożył wniosek o dopuszczenie dowodu z pisemnej uzupełniającej opinii biegłego ds. rekonstrukcji wypadków w celu przeprowadzenia symulacji czasowo-przestrzennej i ustalenia parametru 'stanu zagrożenia' oraz możliwości uniknięcia zderzenia.
- Sąd wniosek ten oddalił postanowieniem z dnia 12 października 2024 r. na podstawie art. 170 § 1 pkt 5 k.p.k., stwierdzając, że 'doświadczenie życiowe sądu wystarcza do oceny, że przy mniejszej prędkości uderzenie byłoby słabsze, a wniosek zmierza do przedłużenia procesu'.
- Sąd samodzielnie w uzasadnieniu wyliczył drogę zatrzymania zespołu pojazdów, stosując uproszczony wzór fizyczny bez uwzględnienia czasu reakcji kierowcy na oblodzonej nawierzchni i czasu narastania ciśnienia w pneumatycznym układzie hamulcowym.`,
    verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 10 grudnia 2024 r. Sąd Rejonowy w Nakle nad Notecią, II Wydział Karny (SSR Monika Kot)

1. Uznaje oskarżonego Jarosława Kaczmarka za winnego zarzucanego mu czynu z art. 177 § 1 k.k. i na mocy tego przepisu wymierza mu karę grzywny w wymiarze 150 stawek dziennych po 40 zł każda;
2. Na mocy art. 42 § 1 k.k. orzeka zakaz prowadzenia wszelkich pojazdów mechanicznych w ruchu lądowym na okres 1 roku;
3. Na mocy art. 46 § 2 k.k. orzeka nawiązkę na rzecz pokrzywdzonej Marii W. w kwocie 4 000 zł;
4. Zasądza od oskarżonego koszty sądowe.`,
    justificationFacts: `Sąd ustalił, że oskarżony poruszał się z prędkością 64 km/h, która była niebezpieczna z uwagi na gołoledź. Sąd sam wyliczył, że gdyby oskarżony jechał 40 km/h, to pojazd Matiz zdążyłby włączyć się do ruchu.`,
    justificationEvidence: `Sąd oparł się na odczycie tachografu i zeznaniach świadków. Pominął wnioski biegłego o wyłącznym zawinieniu pokrzywdzonego w sferze pierwszeństwa.`,
    justificationLegal: `Sąd przyjął, że przekroczenie tzw. prędkości bezpiecznej (art. 19 ust. 1 Prawa o ruchu drogowym) pozostaje w bezpośrednim związku przyczynowym ze skutkiem wypadku. Orzeczono zakaz prowadzenia pojazdów z uwagi na zawodowy charakter uprawnień oskarżonego.`,
    instructions: "Jako radca prawny Anna Majewska sporządź apelację od wyroku Sądu Rejonowego w Nakle nad Notecią do Sądu Okręgowego w Bydgoszczy na korzyść oskarżonego. Zaskarż wyrok w całości.",
    keyIssues: [
      "Rażąca obraza przepisów postępowania art. 193 § 1 k.p.k. i art. 201 k.p.k. – zastąpienie wiadomości specjalnych z zakresu fizyki zderzeń pojazdów i rekonstrukcji wypadków własnymi amatorskimi wyliczeniami sądu. Ustalenie drogi hamowania 36-tonowego zespołu pojazdów na lodzie i możliwości uniknięcia zderzenia wymaga bezwzględnie opinii biegłego!",
      "Naruszenie art. 170 § 1 pkt 5 k.p.k. – bezpodstawne oddalenie kluczowego wniosku dowodowego obrony jako zmierzającego do przedłużenia postępowania.",
      "Błąd w ustaleniach faktycznych i naruszenie reguł obiektywnego przypisania skutku – brak związku przyczynowego między prędkością oskarżonego a zaistnieniem wypadku (wypadek wywołał wyłącznie pokrzywdzony wymuszający pierwszeństwo bez świateł).",
      "Rażąca niewspółmierność środka karnego (art. 438 pkt 4 k.p.k.) – orzeczenie zakazu prowadzenia pojazdów wobec kierowcy zawodowego przy czynie nieumyślnym z przeważającym przyczynieniem pokrzywdzonego.",
    ],
    modelSolution: {
      recommendedScope: "Zaskarżenie wyroku w całości na korzyść oskarżonego.",
      modelCharges: [
        {
          basis: "art. 438 pkt 2 k.p.k.",
          violatedArticles: "art. 193 § 1 k.p.k. w zw. z art. 170 § 1 pkt 5 k.p.k. i art. 201 k.p.k.",
          formulation: "obrazę przepisów postępowania mającą zasadniczy wpływ na treść zaskarżonego orzeczenia, a mianowicie art. 193 § 1 k.p.k. w zw. z art. 170 § 1 pkt 5 k.p.k., polegającą na niezasadnym oddaleniu wniosku dowodowego o dopuszczenie uzupełniającej opinii biegłego z zakresu rekonstrukcji wypadków drogowych i niedopuszczalnym zastąpieniu wiedzy specjalnej własnymi domysłami i uproszczonymi wyliczeniami Sądu co do możliwości uniknięcia zderzenia na oblodzonej jezdni;",
          explanation: "Sąd nie ma prawa samodzielnie dokonywać rekonstrukcji zderzenia pojazdów w oparciu o wiedzę sędziowską.",
        },
        {
          basis: "art. 438 pkt 3 k.p.k.",
          violatedArticles: "art. 438 pkt 3 k.p.k. w zw. z art. 5 § 2 k.p.k.",
          formulation: "błąd w ustaleniach faktycznych przyjętych za podstawę wyroku, polegający na bezpodstawnym przyjęciu, że prędkość oskarżonego pozostawała w adekwatnym związku przyczynowym ze zderzeniem pojazdów, w sytuacji gdy bezpośrednią i wyłączną przyczyną wypadku było gwałtowne wtargnięcie nieoświetlonego pojazdu pokrzywdzonego z drogi podporządkowanej;",
          explanation: "Brak obiektywnego przypisania skutku przy zachowaniu reguły zaufania na drodze.",
        },
      ],
      modelMotions: [
        {
          type: "Główny",
          content: "na podstawie art. 437 § 2 k.p.k. wnoszę o uchylenie zaskarżonego wyroku i przekazanie sprawy Sądowi Rejonowemu w Nakle nad Notecią do ponownego rozpoznania;",
          legalGround: "art. 437 § 2 k.p.k.",
        },
        {
          type: "Ewentualny",
          content: "na wypadek przeprowadzenia postępowania dowodowego przed Sądem Odwoławczym (art. 452 § 2 k.p.k.): wnoszę o zmianę wyroku i uniewinnienie oskarżonego;",
          legalGround: "art. 437 § 2 k.p.k.",
        },
      ],
      modelJustificationHighlights: [
        "Granice dopuszczalności własnych ustaleń sądu a wymóg powołania biegłego z art. 193 § 1 k.p.k.",
        "Teoria obiektywnego przypisania skutku w wypadkach drogowych (wyrok SN III KK 150/19)",
        "Naruszenie zasady kontradyktoryjności poprzez oddalenie wniosku z art. 170 § 1 pkt 5 k.p.k.",
      ],
      commonPitfalls: [
        "Pominięcie zarzutu procesowego z art. 193 § 1 k.p.k.",
        "Niezauważenie, że sąd I instancji oddalił wniosek obrony o biegłego na podstawie art. 170 § 1 pkt 5 k.p.k., co było ewidentnym błędem.",
      ],
    },
  },

  // KAZUS 13
  {
    id: "kazus-13-bezwzgledna-obrona-obligatoryjna",
    title: "Rozprawa pod nieobecność obrońcy przy wątpliwościach co do poczytalności – Bezwzględna przyczyna odwoławcza (art. 439 § 1 pkt 10 k.p.k.)",
    caseNumber: "III K 180/24",
    court: "Sąd Rejonowy we Włocławku, III Wydział Karny",
    defendant: "Krzysztof Malinowski (lat 29, rencista, leczący się psychiatrycznie)",
    role: "radca prawny Michał Adamski, obrońca oskarżonego Krzysztofa Malinowskiego",
    topicCategory: "bezwzgledne",
    difficulty: "Kolokwium roczne (II rok aplikacji)",
    examDate: "22 KWIETNIA 2026 r.",
    examType: "KOLOKWIUM ROCZNE (II ROK APLIKACJI RADCOWSKIEJ) – PRAWO KARNE",
    appellateCourt: "Sąd Okręgowy we Włocławku, II Wydział Karny Odwoławczy, ul. Wojska Polskiego 22, 87-800 Włocławek",
    defenseAttorneyName: "radca prawny Michał Adamski",
    circumstancesOfAct: `1. OKOLICZNOŚCI POPEŁNIENIA CZYNUSystem / Stan faktyczny zdarzenia:

W dniu 5 maja 2024 r. w sklepie spożywczym 'Żabka' przy ul. Kaliskiej we Włocławku oskarżony Krzysztof Malinowski, cierpiący na zdiagnozowane zaburzenia afektywne dwubiegunowe oraz epizody psychotyczne, podszedł do lady sklepowej, wziął z półki dwie butelki alkoholu i paczkę chipsów o łącznej wartości 112 zł, po czym ruszył w stronę wyjścia bez płacenia.

Ekspedientka Bożena G. zawołała: 'Proszę pana, nie zapłacił pan!'. Krzysztof Malinowski odwrócił się, spojrzał błędnym wzrokiem i powiedział cicho: 'Muszę to wziąć, głosy mi kazały, proszę mnie nie dotykać'. Ekspedientka nie zbliżyła się do niego, a oskarżony spokojnym krokiem wyszedł ze sklepu. Został zatrzymany przez patrol Policji 50 metrów dalej, siedząc na ławce i bełkocząc niezrozumiałe słowa.`,
    pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE:

- W toku dochodzenia prokurator powziął uzasadnione wątpliwości co do poczytalności oskarżonego (art. 79 § 1 pkt 3 i 4 k.p.k.) z uwagi na przedłożoną dokumentację z Poradni Zdrowia Psychicznego we Włocławku.
- Zarządzeniem Prezesa Sądu z dnia 20 maja 2024 r. wyznaczono oskarżonemu obrońcę z urzędu w osobie radcy prawnego Michała Adamskiego.
- Powołano dwóch biegłych lekarzy psychiatrów. W opinii pisemnej biegli stwierdzili, że oskarżony tempore criminis miał zdolność rozpoznania znaczenia czynu i pokierowania swoim postępowaniem w stopniu 'nieznacznie ograniczonym', lecz wymaga stałej terapii farmakologicznej. Biegli nie byli jednak w stanie kategorycznie wykluczyć epizodu psychotycznego w chwili czynu.`,
    indictment: `3. AKT OSKARŻENIA:

Prokurator zarzucił Krzysztofowi Malinowskiemu przestępstwo rozboju z art. 280 § 1 k.k., przyjmując, że wypowiedź oskarżonego 'proszę mnie nie dotykać' stanowiła dorozumianą groźbę natychmiastowego użycia przemocy.`,
    courtProceedings: `4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI:

- Termin rozprawy głównej wyznaczono na dzień 14 listopada 2024 r. Obrońca z urzędu r. pr. Michał Adamski w przeddzień rozprawy złożył w biurze podawczym usprawiedliwienie niestawiennictwa wraz z zaświadczeniem lekarza sądowego potwierdzającym nagłą chorobę uniemożliwiającą udział w czynnościach, wnosząc o odroczenie rozprawy.
- Sąd Rejonowy na posiedzeniu w dniu 14 listopada 2024 r. uznał, że skoro biegli orzekli o braku zniesienia poczytalności, to ustała obrona obligatoryjna. Sąd postanowił prowadzić rozprawę pod nieobecność obrońcy, przesłuchał oskarżonego, odczytał zeznania ekspedientki i zamknął przewód sądowy.
- Sąd nie wydał postanowienia o uznaniu udziału obrońcy za nieobowiązkowy w trybie art. 79 § 4 k.p.k.!`,
    verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 14 listopada 2024 r. Sąd Rejonowy we Włocławku, III Wydział Karny (SSR Paweł Lis)

1. Uznaje oskarżonego Krzysztofa Malinowskiego za winnego tego, że w dniu 5 maja 2024 r. dopuścił się kradzieży zuchwałej towaru wartości 112 zł, tj. czynu z art. 278a § 1 k.k. i za to na mocy tego przepisu wymierza mu karę 8 miesięcy pozbawienia wolności;
2. Na mocy art. 69 § 1 k.k. wykonanie kary warunkowo zawiesza na okres próby 3 lat;
3. Zwalnia oskarżonego od ponoszenia kosztów sądowych.`,
    justificationFacts: `Sąd ustalił, że oskarżony dokonał zaboru towaru w sposób zuchwały na oczach ekspedientki.`,
    justificationEvidence: `Sąd oparł się na protokołach z dochodzenia oraz wyjaśnieniach oskarżonego złożonych na rozprawie w dniu 14 listopada 2024 r.`,
    justificationLegal: `Sąd uznał, że zachowanie oskarżonego stanowi kradzież szczególnie zuchwałą (art. 278a § 1 k.k.). Sąd uznał, że obrona nie była obowiązkowa, a obecność obrońcy nie była konieczna.`,
    instructions: "Jako radca prawny Michał Adamski sporządź apelację od wyroku Sądu Rejonowego we Włocławku do Sądu Okręgowego we Włocławku na korzyść oskarżonego.",
    keyIssues: [
      "Bezwzględna przyczyna odwoławcza z art. 439 § 1 pkt 10 k.p.k. – oskarżony w postępowaniu sądowym nie miał obrońcy w wypadku, w którym musiał go mieć (art. 79 § 1 pkt 3 i 4 k.p.k.). Wyznaczenie obrońcy z urzędu wiązało sąd, a sąd nie wydał formalnego postanowienia w trybie art. 79 § 4 k.p.k. o uznaniu obrony za nieobowiązkową!",
      "Naruszenie art. 117 § 2 i § 2a k.p.k. oraz art. 6 k.p.k. (prawo do obrony) – przeprowadzenie rozprawy mimo prawidłowego i należytego usprawiedliwienia nieobecności obrońcy zaświadczeniem lekarza sądowego.",
      "Obraza prawa materialnego art. 278a § 1 k.k. w zw. z art. 115 § 9a k.k. – zabór mienia o wartości 112 zł bez przemocy i bez manifestacyjnego lekceważenia porządku prawnego (oskarżony był chory psychicznie) stanowi wykroczenie z art. 119 § 1 k.w., a nie przestępstwo kradzieży zuchwałej!",
    ],
    modelSolution: {
      recommendedScope: "Zaskarżenie wyroku w całości na korzyść oskarżonego Krzysztofa Malinowskiego.",
      modelCharges: [
        {
          basis: "art. 439 § 1 pkt 10 k.p.k.",
          violatedArticles: "art. 439 § 1 pkt 10 k.p.k. w zw. z art. 79 § 1 pkt 3 i 4 k.p.k. oraz art. 79 § 4 k.p.k.",
          formulation: "bezwzględną przyczynę odwoławczą określoną w art. 439 § 1 pkt 10 k.p.k., polegającą na przeprowadzeniu rozprawy głównej w dniu 14 listopada 2024 r. i wydaniu wyroku pod nieobecność obrońcy oskarżonego, w warunkach obrony obligatoryjnej wynikającej z uzasadnionych wątpliwości co do poczytalności oskarżonego, bez uprzedniego wydania przez Sąd postanowienia na podstawie art. 79 § 4 k.p.k. o uznaniu udziału obrońcy za nieobowiązkowy;",
          explanation: "Obligatoryjna przesłanka uchylenia orzeczenia niezależnie od granic zaskarżenia i wpływu na treść wyroku.",
        },
        {
          basis: "art. 438 pkt 2 k.p.k.",
          violatedArticles: "art. 117 § 2a k.p.k. w zw. z art. 6 k.p.k.",
          formulation: "obrazę przepisów postępowania mającą wpływ na treść orzeczenia, a mianowicie art. 117 § 2a k.p.k. w zw. z art. 6 k.p.k., polegającą na przeprowadzeniu czynności dowodowych pod nieobecność obrońcy, który należycie usprawiedliwił swą nieobecność zaświadczeniem lekarza sądowego;",
          explanation: "Złamanie fundamentalnego prawa do obrony formalnej i materialnej.",
        },
        {
          basis: "art. 438 pkt 1 k.p.k.",
          violatedArticles: "art. 278a § 1 k.k. w zw. z art. 115 § 9a k.k. i art. 119 § 1 k.w.",
          formulation: "obrazę prawa materialnego, a mianowicie art. 278a § 1 k.k. w zw. z art. 115 § 9a k.k., polegającą na jego błędnym zastosowaniu i zakwalifikowaniu zaboru mienia o wartości 112 zł jako kradzieży szczególnie zuchwałej, podczas gdy okoliczności czynu wyczerpywały jedynie znamiona wykroczenia z art. 119 § 1 k.w.;",
          explanation: "Niewłaściwa kwalifikacja prawna i przekroczenie progu kontrawencjonalizacji.",
        },
      ],
      modelMotions: [
        {
          type: "Główny",
          content: "na podstawie art. 437 § 2 k.p.k. w zw. z art. 439 § 1 pkt 10 k.p.k. wnoszę o uchylenie zaskarżonego wyroku w całości i przekazanie sprawy Sądowi Rejonowemu we Włocławku do ponownego rozpoznania.",
          legalGround: "art. 439 § 1 pkt 10 k.p.k.",
        },
      ],
      modelJustificationHighlights: [
        "Bezwzględny charakter przesłanki z art. 439 § 1 pkt 10 k.p.k.",
        "Wymóg orzeczenia w trybie art. 79 § 4 k.p.k. dla zniesienia obrony obligatoryjnej",
        "Wykładnia pojęcia kradzieży szczególnie zuchwałej a stan psychiczny sprawcy",
      ],
      commonPitfalls: [
        "Złożenie wniosku o zmianę wyroku zamiast o uchylenie (przy art. 439 § 1 k.p.k. sąd odwoławczy MUSI uchylić orzeczenie)",
        "Niedostrzeżenie braku formalnego postanowienia z art. 79 § 4 k.p.k.",
      ],
    },
  },

  // KAZUS 14
  {
    id: "kazus-14-reformatio-in-peius-oszustwo",
    title: "Ponowne rozpoznanie sprawy o oszustwo – Pogwałcenie zakazu reformationis in peius (art. 443 k.p.k.)",
    caseNumber: "II K 620/24",
    court: "Sąd Rejonowy w Grudziądzu, II Wydział Karny",
    defendant: "Marcin Lewicki (lat 38, pośrednik nieruchomości)",
    role: "radca prawny Tomasz Borkowski, obrońca oskarżonego Marcina Lewickiego",
    topicCategory: "procesowe",
    difficulty: "Kolokwium roczne (II rok aplikacji)",
    examDate: "22 KWIETNIA 2026 r.",
    examType: "KOLOKWIUM ROCZNE (II ROK APLIKACJI RADCOWSKIEJ) – PRAWO KARNE",
    appellateCourt: "Sąd Okręgowy w Toruniu, IX Wydział Karny Odwoławczy, ul. Piekary 51, 87-100 Toruń",
    defenseAttorneyName: "radca prawny Tomasz Borkowski",
    circumstancesOfAct: `1. OKOLICZNOŚCI POPEŁNIENIA CZYNUSystem / Stan faktyczny zdarzenia:

Oskarżony Marcin Lewicki w ramach prowadzonej agencji nieruchomości 'Dom-Pol' pośredniczył w sprzedaży działki budowlanej w Grudziądzu pomiędzy sprzedającym Pawłem N. a kupującym Adamem K. Prowizja wynosiła 12 000 zł. Kupujący Adam K. wpłacił zaliczkę w kwocie 15 000 zł na poczet umowy przedwstępnej na rachunek oskarżonego.

Z przyczyn niezależnych od oskarżonego (ujawnienie roszczeń spadkowych w księdze wieczystej) transakcja nie doszła do skutku. Oskarżony zwrócił kupującemu kwotę 8 000 zł, a pozostałe 7 000 zł zatrzymał na poczet poniesionych kosztów geodezyjnych i prawnych, powołując się na § 6 umowy pośrednictwa. Kupujący uznał to za wyłudzenie i złożył zawiadomienie o przestępstwie oszustwa.`,
    pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE:

- Dochodzenie prowadziła KMP Grudziądz pod nadzorem Prokuratury Rejonowej w Grudziądzu (sygn. 4115-2.Ds.210.2023).
- Prokurator postawił zarzut z art. 286 § 1 k.k. przyjmując, że oskarżony wprowadził pokrzywdzonego w błąd co do zamiaru zwrotu zaliczki.`,
    indictment: `3. AKT OSKARŻENIA:

Zarzut z art. 286 § 1 k.k. dotyczący doprowadzenia Adama K. do niekorzystnego rozporządzenia mieniem w kwocie 7 000 zł.`,
    courtProceedings: `4. POSTĘPOWANIE PRZED SĄDAMI (PIERWSZY I DRUGI PROCES):

- Pierwszy wyrok Sądu Rejonowego w Grudziądzu (sygn. II K 115/23 z dnia 15 stycznia 2024 r.):
  Sąd uznał Marcina Lewickiego za winnego czynu z art. 286 § 1 k.k. i wymierzył mu karę 6 miesięcy pozbawienia wolności z warunkowym zawieszeniem na 1 rok oraz grzywnę 50 stawek po 20 zł.
  Apelację od tego wyroku wniósł WYŁĄCZNIE OBROŃCA OSKARŻONEGO na korzyść. Prokurator ani oskarżyciel posiłkowy nie zaskarżyli wyroku!
- Wyrok Sądu Okręgowego w Toruniu (sygn. IX Ka 230/24 z dnia 10 maja 2024 r.):
  Sąd Okręgowy uchylił wyrok i przekazał sprawę do ponownego rozpoznania z powodu braków w uzasadnieniu co do zamiaru bezpośredniego kierunkowego.
- Ponowne rozpoznanie przed Sądem Rejonowym w Grudziądzu (sygn. II K 620/24):
  Sąd I instancji przy ponownym rozpoznaniu uznał winę oskarżonego i w wyroku z dnia 20 listopada 2024 r. orzekł karę 8 miesięcy pozbawienia wolności z zawieszeniem na 2 lata, grzywnę 100 stawek po 30 zł oraz DODATKOWO na mocy art. 41 § 1 k.k. orzekł środek karny w postaci zakazu prowadzenia działalności pośrednictwa w obrocie nieruchomościami na okres 2 lat!`,
    verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 20 listopada 2024 r. Sąd Rejonowy w Grudziądzu, II Wydział Karny (SSR Beata Wilk)

1. Uznaje oskarżonego Marcina Lewickiego za winnego zarzucanego mu czynu z art. 286 § 1 k.k. i wymierza mu karę 8 miesięcy pozbawienia wolności;
2. Na mocy art. 69 § 1 k.k. wykonanie kary warunkowo zawiesza na okres próby 2 lat;
3. Na mocy art. 71 § 1 k.k. wymierza grzywnę 100 stawek dziennych po 30 zł;
4. Na mocy art. 41 § 1 k.k. orzeka zakaz prowadzenia działalności w zakresie pośrednictwa w obrocie nieruchomościami na okres 2 lat;
5. Na mocy art. 46 § 1 k.k. nakłada obowiązek naprawienia szkody w kwocie 7 000 zł;
6. Zasądza koszty sądowe.`,
    justificationFacts: `Sąd ustalił, że oskarżony celowo nie zwrócił 7 000 zł.`,
    justificationEvidence: `Sąd oparł się na zeznaniach pokrzywdzonego Adama K. i treści umowy pośrednictwa.`,
    justificationLegal: `Sąd uznał, że oskarżony działał z zamiarem oszustwa. Zaostrzono karę oraz dodano zakaz wykonywania zawodu, uznając, że oskarżony nadużył zaufania klientów.`,
    instructions: "Jako radca prawny Tomasz Borkowski sporządź apelację od wyroku Sądu Rejonowego w Grudziądzu do Sądu Okręgowego w Toruniu na korzyść oskarżonego Marcina Lewickiego.",
    keyIssues: [
      "Kardynalna obraza przepisów postępowania art. 443 k.p.k. w zw. z art. 434 § 1 k.p.k. (pośredni zakaz reformationis in peius) – w ponownym postępowaniu po uchyleniu wyroku na skutek apelacji wniesionej wyłącznie na korzyść oskarżonego sąd wydał orzeczenie surowsze niż poprzednie (zwiększył wymiar kary z 6 do 8 miesięcy, podwyższył grzywnę oraz orzekł zupełnie nowy dotkliwy środek karny w postaci zakazu wykonywania zawodu z art. 41 § 1 k.k.)!",
      "Obraza prawa materialnego art. 286 § 1 k.k. – brak wykazania znamienia zamiaru bezpośredniego kierunkowego powziętego przed lub w chwili zawierania umowy pośrednictwa (tzw. dolus directus coloratus). Spór ma charakter czysto cywilnoprawny dotyczący rozliczenia kosztów umowy zlecenia / pośrednictwa.",
    ],
    modelSolution: {
      recommendedScope: "Zaskarżenie wyroku w całości na korzyść oskarżonego.",
      modelCharges: [
        {
          basis: "art. 438 pkt 2 k.p.k.",
          violatedArticles: "art. 443 k.p.k. w zw. z art. 434 § 1 k.p.k.",
          formulation: "rażącą obrazę przepisów postępowania mającą bezwzględny wpływ na treść orzeczenia, a mianowicie art. 443 k.p.k., polegającą na wydaniu przy ponownym rozpoznaniu sprawy orzeczenia surowszego niż poprzednio uchylony wyrok Sądu Rejonowego w Grudziądzu z dnia 15 stycznia 2024 r. (sygn. II K 115/23), mimo że wyrok ten został zaskarżony wyłącznie na korzyść oskarżonego, poprzez podwyższenie orzeczonej kary pozbawienia wolności, kary grzywny oraz orzeczenie nieorzeczonego uprzednio środka karnego z art. 41 § 1 k.k., co stanowiło drastyczne pogwałcenie ustawowego zakazu reformationis in peius;",
          explanation: "Zakaz reformationis in peius wiąże bezwzględnie sąd I instancji rozpoznający sprawę ponownie.",
        },
        {
          basis: "art. 438 pkt 1 k.p.k.",
          violatedArticles: "art. 286 § 1 k.k.",
          formulation: "obrazę prawa materialnego, a mianowicie art. 286 § 1 k.k., polegającą na jego błędnym zastosowaniu do zachowania stanowiącego w istocie nienależyte wykonanie zobowiązania cywilnoprawnego, w sytuacji gdy oskarżony nie działał z zamiarem bezpośrednim kierunkowym wprowadzenia w błąd w celu osiągnięcia korzyści majątkowej tempore criminis;",
          explanation: "Brak znamion oszustwa przy sporze o rozliczenie umowy pośrednictwa.",
        },
      ],
      modelMotions: [
        {
          type: "Główny",
          content: "na podstawie art. 437 § 1 i 2 k.p.k. wnoszę o zmianę zaskarżonego wyroku i uniewinnienie oskarżonego Marcina Lewickiego od zarzucanego mu czynu;",
          legalGround: "art. 437 § 2 k.p.k.",
        },
        {
          type: "Ewentualny",
          content: "z ostrożności procesowej: wnoszę o zmianę wyroku w części dotyczącej kary poprzez uchylenie orzeczonego środka karnego z art. 41 § 1 k.k. oraz obniżenie kar do poziomu wyroku pierwotnego z dnia 15 stycznia 2024 r.",
          legalGround: "art. 437 § 2 k.p.k.",
        },
      ],
      modelJustificationHighlights: [
        "Bezwzględny charakter zakazu reformationis in peius z art. 443 k.p.k.",
        "Niedopuszczalność orzekania nowych środków karnych w ponownym procesie",
        "Granica między przestępstwem oszustwa a cywilnym niewykonaniem umowy (wyrok SN V KK 235/21)",
      ],
      commonPitfalls: [
        "Niezauważenie, że przy ponownym rozpoznaniu orzeczono surowszą karę i zakaz zawodowy",
        "Złożenie wniosku o uchylenie zamiast o uniewinnienie, gdy stan faktyczny nie zawiera znamion oszustwa.",
      ],
    },
  },

  // KAZUS 15
  {
    id: "kazus-15-przekroczenie-granic-oskarzenia",
    title: "Skazanie za inny czyn bez uprzedzenia o zmianie kwalifikacji – Wyjście poza granice skargi i tożsamość czynu (art. 14 § 1 i art. 399 § 1 k.p.k.)",
    caseNumber: "II K 305/24",
    court: "Sąd Rejonowy w Inowrocławiu, II Wydział Karny",
    defendant: "Kamil Grabowski (lat 22, bezrobotny)",
    role: "radca prawny Justyna Krawczyk, obrońca oskarżonego Kamila Grabowskiego",
    topicCategory: "procesowe",
    difficulty: "Kolokwium roczne (II rok aplikacji)",
    examDate: "22 KWIETNIA 2026 r.",
    examType: "KOLOKWIUM ROCZNE (II ROK APLIKACJI RADCOWSKIEJ) – PRAWO KARNE",
    appellateCourt: "Sąd Okręgowy w Bydgoszczy, IV Wydział Karny Odwoławczy, Wały Jagiellońskie 2, 85-131 Bydgoszcz",
    defenseAttorneyName: "radca prawny Justyna Krawczyk",
    circumstancesOfAct: `1. OKOLICZNOŚCI POPEŁNIENIA CZYNUSystem / Stan faktyczny zdarzenia:

Prokurator oskarżył Kamila Grabowskiego o to, że w nocy z 1 na 2 lutego 2024 r. w Inowrocławiu przy ul. Królowej Jadwigi dokonał kradzieży z włamaniem do kiosku 'Ruch' poprzez wyważenie rolety antywłamaniowej i skradł wyroby tytoniowe o wartości 4 200 zł (art. 279 § 1 k.k.).

W toku rozprawy przed Sądem Rejonowym w Inowrocławiu oskarżony przedstawił niepodważalne alibi (monitoring ze stacji benzynowej oddalonej o 40 km w Bydgoszczy, na której przebywał o godz. 02.15). Jednakże świadek policjant zeznał mimochodem, że podczas zatrzymania oskarżonego dwa tygodnie później (w dniu 15 lutego 2024 r.) oskarżony kopnął w radiowóz policyjny, wgniatając drzwi i powodując szkodę 1 800 zł.

Sąd Rejonowy w wyroku uniewinnił oskarżonego od kradzieży z włamaniem do kiosku, lecz w tym samym wyroku skazał go za przestępstwo zniszczenia radiowozu w dniu 15 lutego 2024 r. z art. 288 § 1 k.k.! Sąd nie uprzedził stron o możliwości zakwalifikowania czynu pod inny przepis ani o rozszerzeniu opisu, twierdząc, że 'wszystko działo się w ramach tego samego postępowania'.`,
    pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE:

- Dochodzenie prowadzone przez KPP Inowrocław dotyczyło wyłącznie włamania do kiosku.
- Kwestia uszkodzenia radiowozu w dniu 15 lutego 2024 r. była przedmiotem odrębnej notatki urzędowej i nigdy nie postawiono z tego tytułu zarzutu w postępowaniu przygotowawczym!`,
    indictment: `3. AKT OSKARŻENIA:

Wyłącznie jeden zarzut: czyn z art. 279 § 1 k.k. popełniony w nocy z 1 na 2 lutego 2024 r. na szkodę Ruch S.A.`,
    courtProceedings: `4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI:

- Sąd przeprowadził dowody na okoliczność alibi oskarżonego.
- Na koniec rozprawy bez uprzedzenia z art. 399 § 1 k.p.k. i bez wniosku prokuratora zamknął przewód sądowy i wydał wyrok skazujący za zniszczenie radiowozu z dnia 15 lutego 2024 r.`,
    verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 12 października 2024 r. Sąd Rejonowy w Inowrocławiu, II Wydział Karny (SSR Dariusz Mróz)

1. Uniewinnia oskarżonego Kamila Grabowskiego od popełnienia zarzucanego mu czynu z art. 279 § 1 k.k.;
2. Uznaje Kamila Grabowskiego za winnego tego, że w dniu 15 lutego 2024 r. w Inowrocławiu dokonał umyślnego uszkodzenia mienia w postaci drzwi bocznych pojazdu policyjnego oznakowanego marki Kia Ceed, powodując szkodę w kwocie 1 800 zł na szkodę KWP w Bydgoszczy, tj. czynu z art. 288 § 1 k.k. i za to na mocy tego przepisu wymierza mu karę 4 miesięcy pozbawienia wolności z warunkowym zawieszeniem na 1 rok;
3. Na mocy art. 46 § 1 k.k. nakłada obowiązek naprawienia szkody;
4. Zasądza koszty sądowe.`,
    justificationFacts: `Sąd ustalił, że oskarżony nie włamał się do kiosku, ale kopnął w radiowóz w dniu zatrzymania.`,
    justificationEvidence: `Sąd oparł się na zeznaniach policjantów z interwencji z 15 lutego 2024 r.`,
    justificationLegal: `Sąd uznał, że zmiana opisu czynu mieści się w granicach orzekania, gdyż chodzi o tego samego sprawcę.`,
    instructions: "Jako radca prawny Justyna Krawczyk sporządź apelację od wyroku Sądu Rejonowego w Inowrocławiu do Sądu Okręgowego w Bydgoszczy w części skazującej (pkt 2, 3 i 4).",
    keyIssues: [
      "Rażące wyjście poza granice skargi uprawnionego oskarżyciela (naruszenie zasady skargowości z art. 14 § 1 k.p.k.) – brak tożsamości czynu! Zniszczenie radiowozu w dniu 15 lutego 2024 r. to całkowicie inne zdarzenie historyczne niż kradzież z włamaniem do kiosku w dniu 1/2 lutego 2024 r. (inny czas, inne miejsce, inny przedmiot zamachu, inny pokrzywdzony). Sąd nie miał prawa orzekać o tym czynie!",
      "Bezwzględna przyczyna odwoławcza z art. 439 § 1 pkt 9 k.p.k. w zw. z art. 17 § 1 pkt 9 k.p.k. – brak skargi uprawnionego oskarżyciela co do czynu z dnia 15 lutego 2024 r.",
      "Rażąca obraza art. 399 § 1 k.p.k. i art. 6 k.p.k. – brak uprzedzenia oskarżonego i obrońcy o możliwości zmiany kwalifikacji prawnej i pozbawienie prawa do obrony.",
    ],
    modelSolution: {
      recommendedScope: "Zaskarżenie wyroku w części skazującej (punkty 2, 3 i 4) na korzyść oskarżonego.",
      modelCharges: [
        {
          basis: "art. 439 § 1 pkt 9 k.p.k.",
          violatedArticles: "art. 439 § 1 pkt 9 k.p.k. w zw. z art. 17 § 1 pkt 9 k.p.k. oraz art. 14 § 1 k.p.k.",
          formulation: "bezwzględną przyczynę odwoławczą określoną w art. 439 § 1 pkt 9 k.p.k. w zw. z art. 17 § 1 pkt 9 k.p.k., polegającą na skazaniu oskarżonego w punkcie 2 wyroku za czyn z art. 288 § 1 k.k. popełniony w dniu 15 lutego 2024 r. na szkodę KWP w Bydgoszczy, w warunkach braku skargi uprawnionego oskarżyciela, wynikającego z wyjścia przez Sąd poza ramy tożsamości historycznej zdarzenia objętego aktem oskarżenia (który dotyczył wyłącznie kradzieży z włamaniem do kiosku w dniu 1/2 lutego 2024 r. na szkodę Ruch S.A.);",
          explanation: "Złamanie zasady skargowości i brak tożsamości czynu stanowi bezwzględną przyczynę odwoławczą skutkującą umorzeniem.",
        },
        {
          basis: "art. 438 pkt 2 k.p.k.",
          violatedArticles: "art. 399 § 1 k.p.k. w zw. z art. 6 k.p.k.",
          formulation: "obrazę przepisów postępowania mającą wpływ na treść orzeczenia, a mianowicie art. 399 § 1 k.p.k. w zw. z art. 6 k.p.k., poprzez zaniechanie uprzedzenia stron o możliwości zmiany kwalifikacji prawnej czynu i rozszerzenia jego opisu, co pozbawiło oskarżonego prawa do obrony;",
          explanation: "Niezależnie od braku skargi, sąd zaniechał obligatoryjnego trybu uprzedzenia stron.",
        },
      ],
      modelMotions: [
        {
          type: "Główny",
          content: "na podstawie art. 437 § 2 k.p.k. w zw. z art. 439 § 1 pkt 9 k.p.k. i art. 17 § 1 pkt 9 k.p.k. wnoszę o uchylenie zaskarżonego wyroku w punktach 2, 3 i 4 i umorzenie postępowania w tym zakresie.",
          legalGround: "art. 439 § 1 pkt 9 k.p.k.",
        },
      ],
      modelJustificationHighlights: [
        "Kryteria tożsamości czynu w orzecznictwie Sądu Najwyższego (postanowienie SN I KZP 4/18)",
        "Zasada skargowości (art. 14 § 1 k.p.k.) jako nieprzekraczalna granica kognicji sądu",
        "Skutek w postaci braku skargi z art. 17 § 1 pkt 9 k.p.k. i uchylenia z art. 439 § 1 pkt 9 k.p.k.",
      ],
      commonPitfalls: [
        "Zaskarżenie całego wyroku (w tym punktu 1 uniewinniającego!) – wyrok należy zaskarżyć WYŁĄCZNIE w części niekorzystnej (pkt 2, 3, 4)",
        "Niedostrzeżenie bezwzględnej przyczyny odwoławczej z art. 439 § 1 pkt 9 k.p.k.",
      ],
    },
  },

  // KAZUS 16
  {
    id: "kazus-16-oszustwo-kredytowe-przedawnienie",
    title: "Kredyt obrotowy przedsiębiorcy – Oszustwo kapitałowe (art. 297 § 1 k.k.) a przedawnienie karalności (art. 17 § 1 pkt 6 k.p.k.)",
    caseNumber: "II K 112/24",
    court: "Sąd Rejonowy w Świeciu, II Wydział Karny",
    defendant: "Grzegorz Kamiński (lat 48, właściciel tartaku)",
    role: "radca prawny Łukasz Wiśniewski, obrońca oskarżonego Grzegorza Kamińskiego",
    topicCategory: "bezwzgledne",
    difficulty: "Kolokwium roczne (II rok aplikacji)",
    examDate: "22 KWIETNIA 2026 r.",
    examType: "KOLOKWIUM ROCZNE (II ROK APLIKACJI RADCOWSKIEJ) – PRAWO KARNE",
    appellateCourt: "Sąd Okręgowy w Bydgoszczy, IV Wydział Karny Odwoławczy, Wały Jagiellońskie 2, 85-131 Bydgoszcz",
    defenseAttorneyName: "radca prawny Łukasz Wiśniewski",
    circumstancesOfAct: `1. OKOLICZNOŚCI POPEŁNIENIA CZYNUSystem / Stan faktyczny zdarzenia:

W dniu 10 lutego 2018 r. oskarżony Grzegorz Kamiński, prowadzący tartak w Osiu k. Świecia, ubiegał się w Banku Spółdzielczym w Świeciu o kredyt obrotowy w kwocie 80 000 zł na zakup surowca drzewnego. Aby uzyskać pozytywną decyzję kredytową, przedłożył sporządzone przez siebie nierzetelne pisemne oświadczenie o braku zaległości wobec Zakładu Ubezpieczeń Społecznych, podczas gdy w rzeczywistości posiadał zaległość składkową w kwocie 12 400 zł.

Kredyt został udzielony w dniu 15 lutego 2018 r. Oskarżony wykorzystał środki zgodnie z celem na zakup drewna i spłacił cały kredyt wraz ze wszystkimi odsetkami i prowizjami przedterminowo do dnia 10 listopada 2019 r. Bank nie poniósł ani grosza straty. Sprawa wyszła na jaw dopiero w 2023 r. podczas kontroli procedur kredytowych przez KNF.`,
    pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE:

- Postanowienie o wszczęciu śledztwa wydano w dniu 14 marca 2023 r. (sygn. 4118-1.Ds.45.2023).
- Prokurator zarzucił oskarżonemu czyn z art. 297 § 1 k.k. w zb. z art. 286 § 1 k.k. w zw. z art. 11 § 2 k.k., przyjmując, że przedłożenie nierzetelnego dokumentu wyczerpało także znamiona oszustwa klasycznego.`,
    indictment: `3. AKT OSKARŻENIA:

Prokurator zarzucił kumulatywny zbieg z art. 297 § 1 k.k. i art. 286 § 1 k.k., twierdząc, że bank został doprowadzony do niekorzystnego rozporządzenia mieniem poprzez wypłatę kredytu na podstawie nieprawdziwego oświadczenia.`,
    courtProceedings: `4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI:

- Obrońca oskarżonego podnosił, że przestępstwo z art. 297 § 1 k.k. uległo przedawnieniu karalności z dniem 10 lutego 2023 r. (5 lat na podstawie art. 101 § 1 pkt 4 k.k.), a wszczęcie postępowania nastąpiło dopiero w marcu 2023 r., czyli po upływie terminu przedawnienia!
- Co do art. 286 § 1 k.k. obrońca wskazywał, że brak jest niekorzystnego rozporządzenia mieniem, skoro oskarżony od początku zamierzał i faktycznie spłacił kredyt w całości.
- Sąd Rejonowy odrzucił argumentację obrony, uznając, że przyjęcie w zbiegu art. 286 § 1 k.k. wydłuża termin przedawnienia do 15 lat (art. 101 § 1 pkt 2a w zw. z art. 102 k.k.).`,
    verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 15 października 2024 r. Sąd Rejonowy w Świeciu, II Wydział Karny (SSR Roman Głowacki)

1. Uznaje oskarżonego Grzegorza Kamińskiego za winnego popełnienia zarzucanego mu czynu z art. 297 § 1 k.k. w zb. z art. 286 § 1 k.k. w zw. z art. 11 § 2 k.k. i na mocy art. 286 § 1 k.k. w zw. z art. 11 § 3 k.k. przy zastosowaniu art. 37a § 1 k.k. wymierza mu karę 150 stawek dziennych grzywny po 50 zł;
2. Zasądza koszty sądowe.`,
    justificationFacts: `Sąd ustalił, że oskarżony złożył nieprawdziwe oświadczenie o ZUS i uzyskał kredyt 80 000 zł, który następnie spłacił w całości.`,
    justificationEvidence: `Sąd oparł się na dokumentacji bankowej i oświadczeniu oskarżonego.`,
    justificationLegal: `Sąd uznał, że samo stworzenie sytuacji ryzyka kredytowego stanowi niekorzystne rozporządzenie mieniem z art. 286 § 1 k.k., co uzasadnia kumulatywną kwalifikację i wyłącza przedawnienie.`,
    instructions: "Jako radca prawny Łukasz Wiśniewski sporządź apelację od wyroku Sądu Rejonowego w Świeciu do Sądu Okręgowego w Bydgoszczy na korzyść oskarżonego.",
    keyIssues: [
      "Obraza prawa materialnego art. 286 § 1 k.k. – brak znamienia niekorzystnego rozporządzenia mieniem w sytuacji, gdy kredytobiorca posiadał zdolność finansową, przedstawił realne zabezpieczenia i w terminie dokonał pełnej spłaty zobowiązania. Samo wprowadzenie w błąd z art. 297 § 1 k.k. nie jest tożsame z oszustwem z art. 286 § 1 k.k. bez wykazania niekorzystności rozporządzenia!",
      "Bezwzględna przyczyna odwoławcza z art. 439 § 1 pkt 9 k.p.k. w zw. z art. 17 § 1 pkt 6 k.p.k. (przedawnienie karalności) – po wyeliminowaniu błędnie przypisanego art. 286 § 1 k.k., samodzielny czyn z art. 297 § 1 k.k. zagrożony jest karą do lat 5, co oznacza, że karalność przedawniła się z upływem 5 lat (10 lutego 2023 r.), zanim wszczęto postępowanie (marzec 2023 r.)!",
    ],
    modelSolution: {
      recommendedScope: "Zaskarżenie wyroku w całości na korzyść oskarżonego.",
      modelCharges: [
        {
          basis: "art. 438 pkt 1 k.p.k.",
          violatedArticles: "art. 286 § 1 k.k.",
          formulation: "obrazę prawa materialnego, a mianowicie art. 286 § 1 k.k., poprzez jego błędne zastosowanie w zbiegu kumulatywnym z art. 297 § 1 k.k., polegające na przyjęciu, że samo przedłożenie nierzetelnego oświadczenia o niezaleganiu ze składkami ZUS stanowiło niekorzystne rozporządzenie mieniem banku, podczas gdy oskarżony posiadał realne zabezpieczenie kredytu, spłacił go w całości z odsetkami przed terminem i bank nie poniósł żadnego uszczerbku majątkowego;",
          explanation: "Niedopuszczalność automatycznego utożsamiania art. 297 § 1 k.k. z art. 286 § 1 k.k.",
        },
        {
          basis: "art. 439 § 1 pkt 9 k.p.k.",
          violatedArticles: "art. 439 § 1 pkt 9 k.p.k. w zw. z art. 17 § 1 pkt 6 k.p.k. i art. 101 § 1 pkt 4 k.k.",
          formulation: "bezwzględną przyczynę odwoławczą z art. 439 § 1 pkt 9 k.p.k. w zw. z art. 17 § 1 pkt 6 k.p.k., polegającą na skazaniu oskarżonego mimo przedawnienia karalności czynu z art. 297 § 1 k.k., które nastąpiło z dniem 10 lutego 2023 r., przed wszczęciem postępowania in personam;",
          explanation: "Obligatoryjna podstawa umorzenia postępowania.",
        },
      ],
      modelMotions: [
        {
          type: "Główny",
          content: "na podstawie art. 437 § 2 k.p.k. w zw. z art. 439 § 1 pkt 9 k.p.k. i art. 17 § 1 pkt 6 k.p.k. wnoszę o uchylenie zaskarżonego wyroku i umorzenie postępowania karnego z powodu przedawnienia karalności.",
          legalGround: "art. 439 § 1 pkt 9 k.p.k.",
        },
      ],
      modelJustificationHighlights: [
        "Autonomiczny charakter przestępstwa z art. 297 § 1 k.k. (wyrok SN IV KK 4/19)",
        "Wykładnia pojęcia niekorzystnego rozporządzenia mieniem",
        "Instytucja przedawnienia karalności z art. 101 § 1 pkt 4 k.k.",
      ],
      commonPitfalls: [
        "Zaakceptowanie kumulatywnej kwalifikacji z art. 286 § 1 k.k., która miała jedynie sztucznie wydłużyć okres przedawnienia",
        "Brak zarzutu z art. 439 § 1 pkt 9 k.p.k.",
      ],
    },
  },

  // KAZUS 17
  {
    id: "kazus-17-czyn-ciagly-czy-ciag-przestepstw",
    title: "Seria oszustw internetowych – Czyn ciągły (art. 12 § 1 k.k.) vs ciąg przestępstw (art. 91 § 1 k.k.) oraz wadliwe orzeczenie z art. 46 § 1 k.k.",
    caseNumber: "II K 505/24",
    court: "Sąd Rejonowy w Chojnicach, II Wydział Karny",
    defendant: "Patryk Kowal (lat 25, technik informatyk)",
    role: "radca prawny Ewa Nowicka, obrońca oskarżonego Patryka Kowala",
    topicCategory: "materialne",
    difficulty: "Kolokwium roczne (II rok aplikacji)",
    examDate: "22 KWIETNIA 2026 r.",
    examType: "KOLOKWIUM ROCZNE (II ROK APLIKACJI RADCOWSKIEJ) – PRAWO KARNE",
    appellateCourt: "Sąd Okręgowy w Słupsku, II Wydział Karny Odwoławczy, ul. Rynek Rybacki 1, 76-200 Słupsk",
    defenseAttorneyName: "radca prawny Ewa Nowicka",
    circumstancesOfAct: `1. OKOLICZNOŚCI POPEŁNIENIA CZYNUSystem / Stan faktyczny zdarzenia:

Oskarżony Patryk Kowal w okresie od 1 do 14 sierpnia 2024 r. w Chojnicach, realizując powzięty z góry powzięty zamiar zdobycia środków na spłatę długu hazardowego, wystawił na portalu Vinted fikcyjne oferty sprzedaży markowych zegarków Smartwatch Garmin. W krótkich odstępach czasu (codziennie) zawarł 14 transakcji z różnymi kupującymi na identyczną kwotę 450 zł każda (łączna kwota wyłudzonych środków: 6 300 zł).

Pieniądze wpływały na jedno i to samo subkonto oskarżonego w banku Revolut. Po otrzymaniu środków oskarżony nie wysyłał zegarków, a kontakt z kupującymi urywał. Oskarżony w toku postępowania przyznał się do winy, wyraził skruchę i do czasu wyrokowania wpłacił na rachunki 10 pokrzywdzonych pełne kwoty po 450 zł (zwrócił 4 500 zł). Pozostałe 4 osoby otrzymały odszkodowanie z programu ochrony kupujących Vinted.`,
    pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE:

- Dochodzenie prowadziła KPP Chojnice (sygn. RSD 190/24).
- Prokurator sformułował akt oskarżenia, w którym zarzucił oskarżonemu popełnienie 14 odrębnych przestępstw z art. 286 § 1 k.k. w zw. z art. 91 § 1 k.k. (ciąg przestępstw).`,
    indictment: `3. AKT OSKARŻENIA:

Zarzut 14 odrębnych przestępstw oszustwa popełnionych w warunkach ciągu przestępstw z art. 91 § 1 k.k.`,
    courtProceedings: `4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI:

- Sąd Rejonowy w Chojnicach odmówił zastosowania konstrukcji jednego czynu ciągłego z art. 12 § 1 k.k., twierdząc, że 'pokrzywdzonymi były różne osoby, co uniemożliwia przyjęcie czynu ciągłego'.
- Sąd orzekł surową karę pozbawienia wolności w oparciu o art. 91 § 1 k.k. (1 rok i 6 miesięcy bez zawieszenia).
- Ponadto Sąd w punkcie 3 wyroku na mocy art. 46 § 1 k.k. orzekł obowiązek naprawienia szkody na rzecz WSZYSTKICH 14 pokrzywdzonych, całkowicie ignorując fakt, że oskarżony przed wyrokiem zwrócił pieniądze 10 osobom (dowody przelewów znajdowały się w aktach na k. 142-152), a pozostałym szkodę wyrównał Vinted!`,
    verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 11 grudnia 2024 r. Sąd Rejonowy w Chojnicach, II Wydział Karny (SSR Janusz Kruk)

1. Uznaje oskarżonego Patryka Kowala za winnego popełnienia 14 przestępstw z art. 286 § 1 k.k. w warunkach ciągu przestępstw z art. 91 § 1 k.k. i za to na mocy art. 286 § 1 k.k. w zw. z art. 91 § 1 k.k. wymierza mu karę 1 roku i 6 miesięcy pozbawienia wolności;
2. Na mocy art. 46 § 1 k.k. orzeka obowiązek naprawienia szkody w całości poprzez zapłatę kwot po 450 zł na rzecz każdego z 14 pokrzywdzonych;
3. Zasądza koszty sądowe.`,
    justificationFacts: `Sąd ustalił, że oskarżony dokonał 14 transakcji i wyłudził po 450 zł. Sąd nie uwzględnił przelewów zwrotnych, uznając, że obowiązek naprawienia szkody ma charakter obligatoryjny.`,
    justificationEvidence: `Sąd oparł się na zestawieniu z portalu Vinted i zeznaniach świadków.`,
    justificationLegal: `Sąd przyjął ciąg przestępstw z art. 91 § 1 k.k. i uznał, że z uwagi na liczbę osób kara musi mieć charakter bezwzględny.`,
    instructions: "Jako radca prawny Ewa Nowicka sporządź apelację od wyroku Sądu Rejonowego w Chojnicach do Sądu Okręgowego w Słupsku na korzyść oskarżonego. Zaskarż wyrok w całości.",
    keyIssues: [
      "Obraza prawa materialnego art. 12 § 1 k.k. – błędna wykładnia, jakoby przestępstwa przeciwko mieniu popełnione na szkodę różnych osób nie mogły stanowić jednego czynu ciągłego. Zgodnie z art. 12 § 1 zd. 2 k.k. tożsamość pokrzywdzonego jest warunkiem czynu ciągłego WYŁĄCZNIE wtedy, gdy przedmiotem zamachu jest dobro osobiste! Przy mieniu pokrzywdzeni mogą być różni, o ile działał z góry powziętym zamiarem!",
      "Kardynalna obraza prawa materialnego art. 46 § 1 k.k. oraz art. 410 k.p.k. – orzeczenie obowiązku naprawienia szkody w kwocie 450 zł na rzecz pokrzywdzonych, którym oskarżony zwrócił już pieniądze w toku procesu (brak szkody w chwili wyrokowania). Obowiązek z art. 46 § 1 k.k. może obejmować wyłącznie szkodę rzeczywiście istniejącą w dacie wyrokowania!",
      "Rażąca niewspółmierność kary (art. 438 pkt 4 k.p.k.) – wymierzenie kary bezwzględnej młodocianemu, niekaranemu sprawcy, który naprawił szkodę.",
    ],
    modelSolution: {
      recommendedScope: "Zaskarżenie wyroku w całości na korzyść oskarżonego Patryka Kowala.",
      modelCharges: [
        {
          basis: "art. 438 pkt 1 k.p.k.",
          violatedArticles: "art. 12 § 1 k.k. w zw. z art. 91 § 1 k.k.",
          formulation: "obrazę prawa materialnego, a mianowicie art. 12 § 1 k.k., poprzez jego niezastosowanie i błędne przyjęcie ciągu przestępstw z art. 91 § 1 k.k., w oparciu o wadliwy pogląd prawny, że tożsamość pokrzywdzonego stanowi warunek konieczny czynu ciągłego przy przestępstwach przeciwko mieniu, podczas gdy oskarżony działał w krótkich odstępach czasu z góry powziętym zamiarem;",
          explanation: "Art. 12 § 1 zd. 2 k.k. wymaga tożsamości pokrzywdzonego tylko przy zamachu na dobro osobiste.",
        },
        {
          basis: "art. 438 pkt 1 k.p.k.",
          violatedArticles: "art. 46 § 1 k.k. w zw. z art. 410 k.p.k.",
          formulation: "obrazę prawa materialnego, a mianowicie art. 46 § 1 k.k., polegającą na orzeczeniu obowiązku naprawienia szkody na rzecz 10 pokrzywdzonych, którzy w dacie wyrokowania zostali w całości zaspokojeni (szkoda została naprawiona przed wyrokiem, co wynika z dowodów przelewów na k. 142-152 pominionych przez Sąd);",
          explanation: "Środek kompensacyjny może dotyczyć jedynie istniejącej, nienaprawionej szkody.",
        },
        {
          basis: "art. 438 pkt 4 k.p.k.",
          violatedArticles: "art. 438 pkt 4 k.p.k. w zw. z art. 53 § 1 i 2 k.k. oraz art. 69 § 1 k.k.",
          formulation: "rażącą niewspółmierność (surowość) orzeczonej kary pozbawienia wolności w wymiarze 1 roku i 6 miesięcy bez warunkowego zawieszenia jej wykonania wobec młodocianego i niekaranego sprawcy;",
          explanation: "Brak uwzględnienia postawy sprawcy i naprawienia szkody.",
        },
      ],
      modelMotions: [
        {
          type: "Główny",
          content: "na podstawie art. 437 § 1 i 2 k.p.k. wnoszę o zmianę zaskarżonego wyroku poprzez zakwalifikowanie zachowań oskarżonego jako jednego czynu ciągłego z art. 286 § 1 k.k. w zw. z art. 12 § 1 k.k., wymierzenie kary 1 roku pozbawienia wolności z warunkowym zawieszeniem na okres 2 lat oraz uchylenie obowiązku naprawienia szkody wobec 10 zaspokojonych pokrzywdzonych.",
          legalGround: "art. 437 § 2 k.p.k.",
        },
      ],
      modelJustificationHighlights: [
        "Wykładnia art. 12 § 1 zd. 2 k.k. – brak wymogu tożsamości pokrzywdzonego przy przestępstwach przeciwko mieniu (uchwała SN I KZP 8/17)",
        "Akcesoryjny i kompensacyjny charakter art. 46 § 1 k.k. a stan faktyczny szkody tempore sententiae",
        "Dyrektywy wymiaru kary wobec sprawców młodocianych (art. 54 § 1 k.k.)",
      ],
      commonPitfalls: [
        "Mylenie dobra osobistego z mieniem przy wykładni art. 12 § 1 k.k.",
        "Nieuwzględnienie, że orzeczenie z art. 46 § 1 k.k. w odniesieniu do zaspokojonych pokrzywdzonych prowadzi do bezpodstawnego wzbogacenia.",
      ],
    },
  },

  // KAZUS 18
  {
    id: "kazus-18-pomowienie-maly-swiadek-koronny",
    title: "Skazanie na podstawie odosobnionego pomówienia – Naruszenie art. 7 k.p.k. i reguł oceny tzw. małego świadka koronnego (art. 60 § 3 k.k.)",
    caseNumber: "II K 890/24",
    court: "Sąd Rejonowy w Bydgoszczy, IV Wydział Karny",
    defendant: "Artur Barański (lat 31, mechanik samochodowy, niekarany)",
    role: "radca prawny Wojciech Czarnecki, obrońca oskarżonego Artura Barańskiego",
    topicCategory: "faktyczne",
    difficulty: "Kolokwium roczne (II rok aplikacji)",
    examDate: "22 KWIETNIA 2026 r.",
    examType: "KOLOKWIUM ROCZNE (II ROK APLIKACJI RADCOWSKIEJ) – PRAWO KARNE",
    appellateCourt: "Sąd Okręgowy w Bydgoszczy, IV Wydział Karny Odwoławczy, Wały Jagiellońskie 2, 85-131 Bydgoszcz",
    defenseAttorneyName: "radca prawny Wojciech Czarnecki",
    circumstancesOfAct: `1. OKOLICZNOŚCI POPEŁNIENIA CZYNUSystem / Stan faktyczny zdarzenia:

Oskarżony Artur Barański został oskarżony o to, że w okresie od marca do maja 2023 r. w Bydgoszczy wbrew przepisom ustawy brał udział w obrocie znaczną ilością środków odurzających w postaci 500 gramów marihuany poprzez jej nabycie od Sebastiana P. w celu dalszej odsprzedaży (art. 56 ust. 3 ustawy o przeciwdziałaniu narkomanii).

Jedynym dowodem obciążającym oskarżonego były wyjaśnienia Sebastiana P. – wielokrotnie karanego handlarza narkotyków, zatrzymanego z 5 kg amfetaminy, który złożył wniosek o zastosowanie wobec niego nadzwyczajnego złagodzenia kary z art. 60 § 3 k.k. Sebastian P. początkowo w śledztwie podał, że 'sprzedał trawkę jakiemuś Arturowi z Fordonu', na kolejnym przesłuchaniu zmienił daty i ilości (twierdząc najpierw, że było to 200 g, a potem 500 g), a podczas okazania tablic poglądowych rozpoznał oskarżonego dopiero za drugim razem.

U Artura Barańskiego przeprowadzono przeszukanie mieszkania i warsztatu samochodowego z użyciem psa tropiącego – nie ujawniono ani śladu narkotyków, wag elektronicznych, woreczków strunowych ani gotówki. Analiza bilingów telefonicznych wykazała brak jakichkolwiek połączeń i SMS-ów pomiędzy oskarżonym a Sebastianem P. w zarzucanym okresie!`,
    pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE:

- Śledztwo prowadziła Prokuratura Okręgowa w Bydgoszczy (sygn. 3001-1.Ds.15.2023).
- Brak dowodów rzeczowych, brak podsłuchów, brak obserwacji. Wyłączną podstawą oskarżenia były protokoły przesłuchania Sebastiana P.`,
    indictment: `3. AKT OSKARŻENIA:

Zarzut z art. 56 ust. 3 ustawy o przeciwdziałaniu narkomanii w zw. z art. 12 § 1 k.k. (udział w obrocie znaczną ilością środków odurzających).`,
    courtProceedings: `4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI:

- Na rozprawie Sebastian P. plątał się w zeznaniach, nie potrafił podać marki samochodu oskarżonego ani dokładnego miejsca spotkań.
- Sąd Rejonowy w Bydgoszczy uznał jednak zeznania Sebastiana P. za 'w pełni logiczne i wiarygodne', argumentując, że 'świadek nie miał powodu bezpodstawnie obciążać niewinnej osoby, a ewentualne rozbieżności wynikają z upływu czasu'.
- Sąd zignorował negatywne wyniki przeszukania oraz bilingów.`,
    verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 14 listopada 2024 r. Sąd Rejonowy w Bydgoszczy, IV Wydział Karny (SSR Halina Nowak)

1. Uznaje oskarżonego Artura Barańskiego za winnego popełnienia zarzucanego mu czynu z art. 56 ust. 3 ustawy o przeciwdziałaniu narkomanii i za to na mocy tego przepisu wymierza mu karę 2 lat pozbawienia wolności oraz grzywnę 100 stawek po 40 zł;
2. Na mocy art. 70 ust. 4 ustawy o przeciwdziałaniu narkomanii orzeka nawiązkę 5 000 zł na cele zapobiegania narkomanii;
3. Zasądza koszty sądowe.`,
    justificationFacts: `Sąd ustalił, że oskarżony nabył 500 g marihuany w celu odsprzedaży w oparciu o zeznania Sebastiana P.`,
    justificationEvidence: `Sąd obdarzył pełną wiarą zeznania Sebastiana P., odmawiając wiary wyjaśnieniom niekaranego oskarżonego.`,
    justificationLegal: `Sąd zakwalifikował czyn z art. 56 ust. 3 u.p.n. i wymierzył bezwzględną karę pozbawienia wolności.`,
    instructions: "Jako radca prawny Wojciech Czarnecki sporządź apelację od wyroku Sądu Rejonowego w Bydgoszczy do Sądu Okręgowego w Bydgoszczy na korzyść oskarżonego. Zaskarż wyrok w całości.",
    keyIssues: [
      "Rażąca obraza przepisów postępowania art. 7 k.p.k. i art. 410 k.p.k. w zw. z art. 5 § 2 k.p.k. – dowolna, bezkrytyczna ocena dowodu z odosobnionego pomówienia współpodejrzanego korzystającego z dobrodziejstwa art. 60 § 3 k.k. Zgodnie z utrwaloną judykaturą SN dowód z pomówienia wymaga szczególnej ostrożności, weryfikacji w innych dowodach bezpośrednich lub pośrednich oraz zbadania motywacji pomawiającego!",
      "Naruszenie zasady in dubio pro reo (art. 5 § 2 k.p.k.) – rozstrzygnięcie niedających się usunąć sprzeczności (brak bilingów, brak śladów przeszukania, wahania co do ilości narkotyku) na niekorzyść oskarżonego.",
      "Błąd w ustaleniach faktycznych przyjętych za podstawę wyroku (art. 438 pkt 3 k.p.k.).",
    ],
    modelSolution: {
      recommendedScope: "Zaskarżenie wyroku w całości na korzyść oskarżonego Artura Barańskiego.",
      modelCharges: [
        {
          basis: "art. 438 pkt 2 k.p.k.",
          violatedArticles: "art. 7 k.p.k. w zw. z art. 410 k.p.k. i art. 5 § 2 k.p.k.",
          formulation: "obrazę przepisów postępowania mającą decydujący wpływ na treść orzeczenia, a mianowicie art. 7 k.p.k. w zw. z art. 410 k.p.k., polegającą na dokonaniu dowolnej, wybiórczej i bezkrytycznej oceny dowodu z odosobnionego pomówienia świadka Sebastiana P., zainteresowanego uzyskaniem nadzwyczajnego złagodzenia kary z art. 60 § 3 k.k., z jednoczesnym zignorowaniem dowodów obiektywnych w postaci protokołu przeszukania bez ujawnienia śladów oraz bilingów wykluczających kontakty stron;",
          explanation: "Standardy oceny dowodu z pomówienia wyznaczone przez orzecznictwo SN (wyrok SN V KK 414/21).",
        },
        {
          basis: "art. 438 pkt 3 k.p.k.",
          violatedArticles: "art. 438 pkt 3 k.p.k.",
          formulation: "błąd w ustaleniach faktycznych przyjętych za podstawę wyroku, polegający na bezpodstawnym przyjęciu, że oskarżony nabył 500 gramów marihuany w celu wprowadzenia do obrotu, podczas gdy prawidłowa ocena materiału dowodowego prowadzi do wniosku, że oskarżony czynu tego nie popełnił;",
          explanation: "Brak jakichkolwiek dowodów potwierdzających udział w obrocie.",
        },
      ],
      modelMotions: [
        {
          type: "Główny",
          content: "na podstawie art. 437 § 1 i 2 k.p.k. wnoszę o zmianę zaskarżonego wyroku i uniewinnienie oskarżonego Artura Barańskiego od zarzucanego mu czynu;",
          legalGround: "art. 437 § 2 k.p.k.",
        },
      ],
      modelJustificationHighlights: [
        "Warunki wiarygodności dowodu z pomówienia (tzw. test pomówienia w orzecznictwie SN)",
        "Interes procesowy osoby ubiegającej się o art. 60 § 3 k.k.",
        "Zasada in dubio pro reo przy braku dowodów materialnych",
      ],
      commonPitfalls: [
        "Niewykazanie interesu procesowego pomawiającego w uzyskaniu nadzwyczajnego złagodzenia kary",
        "Pominięcie dowodów negatywnych (bilingi, brak śladów w toku przeszukania).",
      ],
    },
  },

  // KAZUS 19
  {
    id: "kazus-19-niealimentacja-choroba-uchylanie",
    title: "Przestępstwo niealimentacji a ciężka choroba onkologiczna – Znamię 'uchylania się' z art. 209 § 1 k.k. a brak winy",
    caseNumber: "II K 678/24",
    court: "Sąd Rejonowy we Włocławku, II Wydział Karny",
    defendant: "Piotr Zieliński (lat 46, mechanik, dotychczas niekarany)",
    role: "radca prawny Monika Dąbrowska, obrońca oskarżonego Piotra Zielińskiego",
    topicCategory: "materialne",
    difficulty: "Kolokwium roczne (II rok aplikacji)",
    examDate: "22 KWIETNIA 2026 r.",
    examType: "KOLOKWIUM ROCZNE (II ROK APLIKACJI RADCOWSKIEJ) – PRAWO KARNE",
    appellateCourt: "Sąd Okręgowy we Włocławku, II Wydział Karny Odwoławczy, ul. Wojska Polskiego 22, 87-800 Włocławek",
    defenseAttorneyName: "radca prawny Monika Dąbrowska",
    circumstancesOfAct: `1. OKOLICZNOŚCI POPEŁNIENIA CZYNUSystem / Stan faktyczny zdarzenia:

Oskarżony Piotr Zieliński wyrokiem Sądu Rejonowego we Włocławku z dnia 10 maja 2021 r. został zobowiązany do łożenia alimentów na rzecz małoletniego syna Jakuba w kwocie 900 zł miesięcznie. Oskarżony przez dwa lata regularnie i terminowo płacił pełną kwotę alimentów.

W sierpniu 2023 r. u oskarżonego zdiagnozowano złośliwy nowotwór jelita grubego w stadium zaawansowanym. Oskarżony przeszedł skomplikowaną operację w Centrum Onkologii w Bydgoszczy, a następnie poddany został agresywnej chemioterapii, co skutkowało całkowitą niezdolnością do pracy zarobkowej. Jedynym jego źródłem utrzymania stał się zasiłek rehabilitacyjny z ZUS w kwocie 1 650 zł netto miesięcznie, z czego ok. 600 zł miesięcznie wydawał na leki i dojazdy do szpitala.

Mimo dramatycznej sytuacji życiowej, oskarżony w okresie od września 2023 r. do czerwca 2024 r. co miesiąc przelewał na konto matki dziecka kwotę 400 – 500 zł (wszystko, co mu zostawało po zakupie leków). Matka dziecka złożyła jednak wniosek do komornika i zawiadomienie o przestępstwie z art. 209 § 1a k.k., wskazując, że powstała zaległość przewyższa równowartość 3 świadczeń okresowych.`,
    pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE:

- Dochodzenie prowadziła KMP Włocławek.
- Oskarżony przedłożył kompletną dokumentację medyczną z Centrum Onkologii, orzeczenie lekarza orzecznika ZUS o całkowitej niezdolności do pracy oraz dowody comiesięcznych wpłat.
- Prokurator uznał, że skoro zaległość przekroczyła 3 świadczenia, to przestępstwo ma charakter formalny i skierował akt oskarżenia.`,
    indictment: `3. AKT OSKARŻENIA:

Zarzut z art. 209 § 1a k.k. – uchylanie się od wykonania obowiązku alimentacyjnego przez okres od 1 września 2023 r. do 30 czerwca 2024 r. i narażenie dziecka na niemożność zaspokojenia podstawowych potrzeb życiowych.`,
    courtProceedings: `4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI:

- Sąd Rejonowy we Włocławku uznał oskarżonego za winnego. Sąd stwierdził, że 'fakt choroby nie zwalnia z obowiązku alimentacyjnego, oskarżony mógł poprosić o pomoc rodzinę lub zaciągnąć pożyczkę, a skoro nie płacił pełnych 900 zł, to wyczerpał znamiona przestępstwa'.
- Sąd całkowicie pominął fakt, że dziecko miało zaspokojone wszystkie potrzeby dzięki matce i babci, a oskarżony płacił tyle, ile obiektywnie mógł.`,
    verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 28 października 2024 r. Sąd Rejonowy we Włocławku, II Wydział Karny (SSR Anna Kosińska)

1. Uznaje oskarżonego Piotra Zielińskiego za winnego popełnienia zarzucanego mu czynu z art. 209 § 1a k.k. i za to na mocy tego przepisu wymierza mu karę 6 miesięcy ograniczenia wolności z obowiązkiem wykonywania nieodpłatnej kontrolowanej pracy na cele społeczne w wymiarze 20 godzin w stosunku miesięcznym;
2. Na mocy art. 209 § 3 k.k. nakłada na oskarżonego obowiązek bieżącego łożenia na utrzymanie syna;
3. Zwalnia oskarżonego od kosztów sądowych.`,
    justificationFacts: `Sąd ustalił, że łączna zaległość przekroczyła 3 świadczenia okresowe. Sąd odnotował chorobę oskarżonego, lecz uznał ją jedynie za okoliczność łagodzącą przy wymiarze kary.`,
    justificationEvidence: `Sąd oparł się na zaświadczeniu od komornika i zeznaniach matki dziecka.`,
    justificationLegal: `Sąd przyjął, że art. 209 § 1a k.k. ma charakter formalny i sam fakt zaległości stanowi 'uchylanie się'.`,
    instructions: "Jako radca prawny Monika Dąbrowska sporządź apelację od wyroku Sądu Rejonowego we Włocławku do Sądu Okręgowego we Włocławku na korzyść oskarżonego. Zaskarż wyrok w całości.",
    keyIssues: [
      "Kardynalna obraza prawa materialnego art. 209 § 1 i § 1a k.k. – błędna wykładnia znamienia 'uchyla się'. Uchylanie się od alimentacji wymaga złej woli, celowego i nacechowanego złośliwością zaniechania płacenia mimo obiektywnej możliwości finansowej! Obiektywna niemożność płacenia pełnej kwoty spowodowana ciężką chorobą onkologiczną i utratą sił zarobkowych wyklucza przypisanie znamienia 'uchylania się'!",
      "Obraza prawa materialnego art. 209 § 1a k.k. – brak znamienia 'narażenia na niemożność zaspokojenia podstawowych potrzeb życiowych' (dziecko miało zapewnione mieszkanie, wyżywienie, szkołę i leczenie).",
      "Obraza przepisów postępowania art. 7 k.p.k. i art. 410 k.p.k. poprzez zignorowanie dokumentacji medycznej i orzeczenia ZUS.",
    ],
    modelSolution: {
      recommendedScope: "Zaskarżenie wyroku w całości na korzyść oskarżonego Piotra Zielińskiego.",
      modelCharges: [
        {
          basis: "art. 438 pkt 1 k.p.k.",
          violatedArticles: "art. 209 § 1 i § 1a k.k.",
          formulation: "obrazę prawa materialnego, a mianowicie art. 209 § 1 i § 1a k.k., polegającą na jego błędnej wykładni i niewłaściwym zastosowaniu poprzez uznanie, że sam fakt powstania zaległości przekraczającej 3 świadczenia okresowe jest równoznaczny ze znamieniem 'uchylania się', podczas gdy oskarżony z uwagi na ciężką chorobę nowotworową i całkowitą niezdolność do pracy obiektywnie nie był w stanie uiszczać alimentów w pełnej wysokości, a mimo to regularnie przekazywał znaczne części zasiłku na rzecz dziecka, co wykluczało umyślność i złą wolę wymaganą dla tego występku;",
          explanation: "Wykładnia znamienia 'uchyla się' w utrwalonym orzecznictwie SN (postanowienie SN I KZP 2/20).",
        },
        {
          basis: "art. 438 pkt 1 k.p.k.",
          violatedArticles: "art. 209 § 1a k.k.",
          formulation: "obrazę prawa materialnego, a mianowicie art. 209 § 1a k.k., poprzez przyjęcie kwalifikowanego typu przestępstwa bez wykazania, że zachowanie oskarżonego naraziło małoletniego na niemożność zaspokojenia podstawowych potrzeb życiowych;",
          explanation: "Brak znamienia skutku kwalifikującego.",
        },
      ],
      modelMotions: [
        {
          type: "Główny",
          content: "na podstawie art. 437 § 1 i 2 k.p.k. wnoszę o zmianę zaskarżonego wyroku i uniewinnienie oskarżonego Piotra Zielińskiego od zarzucanego mu czynu z powodu braku znamion czynu zabronionego (art. 17 § 1 pkt 2 k.p.k.).",
          legalGround: "art. 437 § 2 k.p.k.",
        },
      ],
      modelJustificationHighlights: [
        "Dogmatyczne pojęcie 'uchylania się' jako negatywnego nastawienia psychicznego i złej woli",
        "Znaczenie obiektywnej niemożności świadczenia wywołanej chorobą nowotworową",
        "Wykładnia art. 209 § 1a k.k. i pojęcia podstawowych potrzeb życiowych",
      ],
      commonPitfalls: [
        "Uznanie przestępstwa z art. 209 k.k. za czysto rachunkowe (powstanie 3-miesięcznej zaległości nie oznacza automatycznego skazania)",
        "Niewskazanie dowodów na częściowe wpłaty i leczenie onkologiczne.",
      ],
    },
  },

  // KAZUS 20
  {
    id: "kazus-20-bezposredniosc-odczytanie-zeznan-noz",
    title: "Bójka w klubie nocnym – Naruszenie zasady bezpośredniości (art. 391 § 1 k.p.k.) i wadliwe przypisanie użycia niebezpiecznego narzędzia (art. 159 k.k.)",
    caseNumber: "III K 720/24",
    court: "Sąd Rejonowy w Toruniu, VIII Wydział Karny",
    defendant: "Daniel Sobczak (lat 24, student)",
    role: "radca prawny Grzegorz Mazur, obrońca oskarżonego Daniela Sobczaka",
    topicCategory: "mieszane",
    difficulty: "Kolokwium roczne (II rok aplikacji)",
    examDate: "22 KWIETNIA 2026 r.",
    examType: "KOLOKWIUM ROCZNE (II ROK APLIKACJI RADCOWSKIEJ) – PRAWO KARNE",
    appellateCourt: "Sąd Okręgowy w Toruniu, IX Wydział Karny Odwoławczy, ul. Piekary 51, 87-100 Toruń",
    defenseAttorneyName: "radca prawny Grzegorz Mazur",
    circumstancesOfAct: `1. OKOLICZNOŚCI POPEŁNIENIA CZYNUSystem / Stan faktyczny zdarzenia:

W nocy z 20 na 21 kwietnia 2024 r. w klubie 'Kadr' w Toruniu doszło do gwałtownego starcia fizycznego pomiędzy dwoma grupami młodych mężczyzn. Oskarżony Daniel Sobczak brał udział w szarpaninie i wymianie uderzeń pięściami z pokrzywdzonym Karolem D.

W pewnym momencie inny uczestnik starcia, współoskarżony Mariusz T., wyciągnął z kieszeni nóż sprężynowy o ostrzu 12 cm i zadał nim cios w udo pokrzywdzonego, powodując ranę kłutą. Daniel Sobczak stał w odległości 3 metrów, walcząc z innym mężczyzną, i nie wiedział, że Mariusz T. posiada nóż, ani nie widział momentu uderzenia nożem. Z monitoringu klubu wynika, że Daniel Sobczak nie trzymał w ręku żadnego narzędzia.`,
    pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE:

- Śledztwo prowadziła Prokuratura Rejonowa Toruń Centrum-Zachód (sygn. 4114-2.Ds.112.2024).
- Zabezpieczono nóż u Mariusza T. Daniel Sobczak konsekwentnie wyjaśniał, że nie wiedział o nożu i sam został zaatakowany.
- Przesłuchano naocznych świadków – pracowników ochrony klubu: Jacka W. i Kamila B., którzy opisali dynamikę zajścia.`,
    indictment: `3. AKT OSKARŻENIA:

Prokurator zarzucił Danielowi Sobczakowi oraz Mariuszowi T. popełnienie przestępstwa z art. 159 k.k. (udział w bójce z użyciem niebezpiecznego narzędzia), przyjmując odpowiedzialność solidarną za użycie noża przez jednego ze sprawców.`,
    courtProceedings: `4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI:

- Na rozprawie głównej świadkowie Jacek W. i Kamil B. nie stawili się, gdyż przebywali na urlopie wypoczynkowym w Hiszpanii. Obrońca oskarżonego kategorycznie sprzeciwił się odczytaniu ich zeznań, wnosząc o odroczenie rozprawy w celu ich bezpośredniego przesłuchania na okoliczność świadomości posiadania noża przez Mariusza T.
- Sąd Rejonowy w Toruniu oddalił wniosek obrońcy i na podstawie art. 391 § 1 k.p.k. odczytał protokoły zeznań obu świadków z postępowania przygotowawczego, twierdząc, że 'pobyt na urlopie za granicą stanowi przeszkodę, której nie można usunąć'.
- Sąd skazał Daniela Sobczaka za art. 159 k.k., uznając, że skoro brał udział w bójce, to odpowiada za użycie noża przez współuczestnika na zasadzie porozumienia dorozumianego.`,
    verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 5 grudnia 2024 r. Sąd Rejonowy w Toruniu, VIII Wydział Karny (SSR Marek Lipski)

1. Uznaje oskarżonego Daniela Sobczaka za winnego popełnienia zarzucanego mu czynu z art. 159 k.k. i za to na mocy tego przepisu wymierza mu karę 1 roku i 2 miesięcy pozbawienia wolności;
2. Na mocy art. 69 § 1 k.k. wykonanie kary warunkowo zawiesza na okres próby 3 lat;
3. Na mocy art. 71 § 1 k.k. wymierza grzywnę 100 stawek po 30 zł;
4. Na mocy art. 46 § 2 k.k. orzeka solidarnie z Mariuszem T. nawiązkę na rzecz pokrzywdzonego w kwocie 6 000 zł;
5. Zasądza koszty sądowe.`,
    justificationFacts: `Sąd ustalił, że oskarżony brał udział w bójce, w której użyto noża.`,
    justificationEvidence: `Sąd oparł się na odczytanych protokołach zeznań ochroniarzy klubu.`,
    justificationLegal: `Sąd przyjął, że każdy uczestnik bójki, w której ktoś posłużył się nożem, odpowiada z art. 159 k.k. Ponadto orzeczono nawiązkę solidarnie.`,
    instructions: "Jako radca prawny Grzegorz Mazur sporządź apelację od wyroku Sądu Rejonowego w Toruniu do Sądu Okręgowego w Toruniu na korzyść oskarżonego Daniela Sobczaka. Zaskarż wyrok w całości.",
    keyIssues: [
      "Rażąca obraza przepisów postępowania art. 391 § 1 k.p.k. i art. 392 k.p.k. w zw. z art. 6 k.p.k. – złamanie zasady bezpośredniości poprzez bezprawne odczytanie protokołów zeznań kluczowych świadków naocznych pomimo sprzeciwu obrońcy. Zwykły wyjazd na urlop wypoczynkowy NIE stanowi 'niedającej się usunąć przeszkody' w rozumieniu art. 391 § 1 k.p.k.!",
      "Obraza prawa materialnego art. 159 k.k. w zw. z art. 20 k.k. (zasada indywidualizacji odpowiedzialności) – przypisanie oskarżonemu kwalifikowanego typu udziału w bójce z użyciem niebezpiecznego przedmiotu w sytuacji, gdy oskarżony nie posługiwał się nożem, nie wiedział o jego posiadaniu przez innego uczestnika i nie godził się na jego użycie (tzw. eksces współuczestnika bójki)!",
      "Obraza prawa materialnego art. 46 § 2 k.k. – niedopuszczalność orzekania nawiązki 'solidarnie' w wyroku karnym (odpowiedzialność karna i nawiązki mają charakter czysto indywidualny i zindywidualizowany).",
    ],
    modelSolution: {
      recommendedScope: "Zaskarżenie wyroku w całości na korzyść oskarżonego Daniela Sobczaka.",
      modelCharges: [
        {
          basis: "art. 438 pkt 2 k.p.k.",
          violatedArticles: "art. 391 § 1 k.p.k. w zw. z art. 6 k.p.k.",
          formulation: "rażącą obrazę przepisów postępowania mającą decydujący wpływ na treść orzeczenia, a mianowicie art. 391 § 1 k.p.k., polegającą na bezprawnym odczytaniu na rozprawie protokołów zeznań kluczowych naocznych świadków Jacka W. i Kamila B. pomimo kategorycznego sprzeciwu obrońcy, w oparciu o bezzasadne uznanie, że ich czasowy wyjazd na urlop wypoczynkowy stanowi 'niedającą się usunąć przeszkodę', co pozbawiło oskarżonego prawa do bezpośredniego zadawania pytań i zweryfikowania ich relacji;",
          explanation: "Niedająca się usunąć przeszkoda to np. śmierć lub nieuleczalna choroba, a nie urlop.",
        },
        {
          basis: "art. 438 pkt 1 k.p.k.",
          violatedArticles: "art. 159 k.k. w zw. z art. 20 k.k.",
          formulation: "obrazę prawa materialnego, a mianowicie art. 159 k.k. w zw. z art. 20 k.k., polegającą na jego błędnym zastosowaniu i przypisaniu oskarżonemu odpowiedzialności za bójkę z użyciem niebezpiecznego narzędzia, podczas gdy użycie noża przez Mariusza T. stanowiło eksces, o którym oskarżony nie wiedział i na który się nie godził, co uzasadniało co najwyżej kwalifikację z art. 158 § 1 k.k.;",
          explanation: "Zasada indywidualizacji odpowiedzialności wyklucza odpowiedzialność za eksces współsprawcy.",
        },
        {
          basis: "art. 438 pkt 1 k.p.k.",
          violatedArticles: "art. 46 § 2 k.k.",
          formulation: "obrazę prawa materialnego, a mianowicie art. 46 § 2 k.k., poprzez solidarne orzeczenie nawiązki, podczas gdy nawiązka ma charakter środka karnego i może być orzeczona wyłącznie indywidualnie;",
          explanation: "Nawiązka w procesie karnym nie może być zasądzona solidarnie.",
        },
      ],
      modelMotions: [
        {
          type: "Główny",
          content: "na podstawie art. 437 § 2 k.p.k. wnoszę o uchylenie zaskarżonego wyroku i przekazanie sprawy Sądowi Rejonowemu w Toruniu do ponownego rozpoznania z uwagi na konieczność przeprowadzenia na nowo przewodu sądowego w całości.",
          legalGround: "art. 437 § 2 k.p.k.",
        },
        {
          type: "Ewentualny",
          content: "z ostrożności procesowej: wnoszę o zmianę wyroku poprzez zmianę kwalifikacji prawnej czynu na art. 158 § 1 k.k. i wymierzenie kary łagodniejszego rodzaju oraz uchylenie solidarności orzeczonej nawiązki.",
          legalGround: "art. 437 § 2 k.p.k.",
        },
      ],
      modelJustificationHighlights: [
        "Pojęcie 'przeszkody nie do usunięcia' z art. 391 § 1 k.p.k. w judykaturze SN",
        "Granice odpowiedzialności za bójkę z art. 159 k.k. a eksces współuczestnika (postanowienie SN II KK 85/20)",
        "Niedopuszczalność orzekania nawiązki solidarnie w prawie karnym",
      ],
      commonPitfalls: [
        "Zgoda na odczytanie protokołów bez zbadania przesłanek z art. 391 § 1 k.p.k.",
        "Przeoczenie błędu 'solidarnego' orzeczenia nawiązki z art. 46 § 2 k.k.",
      ],
    },
  },
];
