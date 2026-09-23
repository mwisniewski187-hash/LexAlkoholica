import { SourceMaterial } from "../types";

export const INITIAL_MATERIALS: SourceMaterial[] = [
  {
    id: "mat-ms-exam-2026",
    title: "Oficjalne Zadanie i Klucz Oceniania Kolokwialnego – Sprawa Jana Kowalskiego",
    category: "prezentacja",
    addedAt: "2026-04-21T09:00:00.000Z",
    content: `OFICJALNE WYTYCZNE KOMISJI KOLOKWIALNEJ OIRP
CZĘŚĆ PIERWSZA KOLOKWIUM ZAWODOWEGO NA II ROKU APLIKACJI – ZADANIE Z ZAKRESU PRAWA KARNEGO
Sprawa oskarżonego Jana Kowalskiego przed Sądem Rejonowym w Opolu (sygn. akt II K 1970/25)

I. ISTOTA ROZSTRZYGNIĘCIA I ZAKRES ZASKARŻENIA:
Wyrok Sądu Rejonowego w Opolu z dnia 20 stycznia 2026 r. należało zaskarżyć W CAŁOŚCI NA KORZYŚĆ oskarżonego Jana Kowalskiego (w punktach I, II, III, IV, V, VI oraz VII wyroku). Zaskarżenie punktu VII (koszty pomocy prawnej z urzędu) jest dopuszczalne w apelacji obrońcy, gdyż oskarżony został zwolniony z kosztów sądowych, co czyni zarzut ten niesprzecznym z art. 86 § 1 k.p.k. i art. 434 k.p.k.

II. KLUCZOWE UCHYBIENIA I ZARZUTY ZGODNIE Z KANONEM MS:

1. CZYN I (Niealimentacja – art. 209 § 1 k.k.):
- Sąd objął opisem czynu okres od marca 2023 r. do 4 października 2025 r.
- Jan Kowalski był już prawomocnie skazany wyrokiem SR w Opolu z 3.11.2025 r. (sygn. II K 66/24) za niealimentację w okresie od marca 2023 r. do końca sierpnia 2025 r.
- UWAGA (PUŁAPKA KOLOKWIALNA): Nie zachodzi bezwzględna przyczyna odwoławcza z art. 439 § 1 pkt 8 k.p.k. w zw. z art. 17 § 1 pkt 7 k.p.k. (res iudicata), ponieważ okresy zarzucane w obu sprawach NIE POKRYWAJĄ SIĘ W CAŁOŚCI! (Por. wyroki SN: II KK 225/25, II KK 314/25).
- Prawidłowy zarzut: Obraza prawa procesowego mająca wpływ na treść wyroku – art. 413 § 2 pkt 1 k.p.k. poprzez brak dokładnego określenia przypisanego czynu, który po wyeliminowaniu prawomocnie osądzonego okresu powinien obejmować wyłącznie czas od 1 września 2025 r. do 4 października 2025 r. (czyli zaległość za 1 miesiąc – wrzesień, gdyż termin za październik przypadał na 5 października).
- W konsekwencji: brak ustawowego znamienia zaległości stanowiącej równowartość co najmniej 3 świadczeń okresowych!
- Wniosek: zmiana wyroku i UNIEWINNIENIE oskarżonego (art. 437 § 2 k.p.k. w zw. z art. 414 § 1 k.p.k.).

2. CZYN II (Prowadzenie pojazdu po alkoholu – art. 178a § 1 k.k.):
- Pomiar Alco-Sensor IV CM: 0,75 mg/dm3.
- Ze świadectwa ponownego wzorcowania wynikała niepewność pomiaru o co najmniej 0,01 mg/dm3 w kierunku zawyżenia wyniku na niekorzyść badanego.
- Urządzenie zostało zutylizowane przed wyrokiem, co uniemożliwia ponowną weryfikację.
- Prawidłowy zarzut: Obraza art. 7 k.p.k. w zw. z art. 5 § 2 k.p.k. (in dubio pro reo) poprzez nierozstrzygnięcie nieusuwalnej wątpliwości na korzyść podsądnego i ustalenie stężenia na 0,75 mg/dm3 zamiast maksymalnie 0,74 mg/dm3.
- Kluczowy skutek: wyłączenie obligatoryjnego przepadku pojazdu z art. 44b § 1a k.k. w zw. z art. 178a § 1 k.k. (próg 0,75 mg/dm3 nie został osiągnięty). Wniosek: uchylenie przepadku samochodu!
- Ponadto: obraza art. 12 § 1 k.k. (prawo materialne) – jednorazowa, 15-minutowa jazda jest jednym czynem, a nie czynem ciągłym! Konsekwencja: eliminacja art. 12 § 1 k.k. oraz art. 57b k.k. (nadzwyczajne obostrzenie kary).

3. CZYN III (Posiadanie suszu – art. 62 ust. 1 ustawy o przeciwdziałaniu narkomanii):
- Sąd ustalił wagę 7 gramów na podstawie wagi brutto (susz z grubymi woreczkami foliowymi).
- Opinia fizykochemiczna ustaliła masę netto czystego ziela konopi na 1 gram!
- Prawidłowy zarzut: Obraza art. 7 k.p.k. poprzez oparcie się na wadze brutto z pominięciem opinii biegłego.
- Wniosek: zmiana opisu czynu na posiadanie 1 grama oraz umorzenie postępowania na podstawie art. 62a ustawy o przeciwdziałaniu narkomanii (nieznaczna ilość na własny użytek) ewentualnie zakwalifikowanie z art. 62 ust. 3 u.p.n. jako wypadek mniejszej wagi.

4. KOSZTY POMOCY PRAWNEJ Z URZĘDU (pkt VII wyroku):
- Obraza prawa materialnego w zakresie orzeczenia o kosztach – art. 438 pkt 1a k.p.k. w zw. z § 4 ust. 3 i § 20 rozp. MS z 14 maja 2024 r.
- Sąd nie uwzględnił drugiego terminu rozprawy oraz nie doliczył 23% podatku VAT.`,
    analysis: {
      summary: "Oficjalny arkusz kryteriów i zagadnień do zadania karnego kolokwium aplikacji radcowskiej.",
      keyConcepts: [
        "Art. 413 § 2 pkt 1 k.p.k. a res iudicata (brak tożsamości czasowej)",
        "Błąd pomiarowy alkomatu i art. 5 § 2 k.p.k. – wyłączenie przepadku pojazdu",
        "Jazda 15 minut to jeden czyn (wyłączenie art. 12 § 1 k.k. i 57b k.k.)",
        "Masa brutto vs netto ziela konopi (art. 62a u.p.n.)",
        "Koszty urzędówki (VAT 23% i kolejny termin)",
      ],
      practicalTips: [
        "Nie stawiaj art. 439 § 1 pkt 8 k.p.k., jeśli okresy nie pokrywają się w 100%!",
        "Zawsze badaj świadectwo wzorcowania i niepewność pomiaru przy art. 178a k.k.",
        "Pamiętaj o zwrocie 'mającą wpływ na treść orzeczenia' przy zarzutach procesowych.",
      ],
    },
  },
  {
    id: "mat-torun-mini-akta",
    title: "Mini-Akta Szkoleniowe II K 418/23 (Toruń) – Rozbój z latarką i znieważenie policjanta",
    category: "kazusy_z_zajec",
    addedAt: "2026-03-15T10:00:00.000Z",
    content: `MINI-AKTA SZKOLENIOWE – SPRAWA MICHAŁA ZAWADZKIEGO (SR W TORUNIU, SYGN. II K 418/23)
Przedmiot sprawy: rozbój kwalifikowany (art. 280 § 2 k.k.) oraz znieważenie funkcjonariusza Policji (art. 226 § 1 k.k.).

GŁÓWNE PROBLEMY PRAWNE DO WYKRYCIA W AKTACH:

1. BRAK UPRZEDZENIA O ZMIANIE KWALIFIKACJI (art. 399 § 1 k.p.k. w zw. z art. 6 k.p.k.):
Prokurator zarzucił występek rozboju w typie podstawowym z art. 280 § 1 k.k. Sąd I instancji w wyroku skazał oskarżonego za zbrodnię z art. 280 § 2 k.k., nie uprzedzając stron na rozprawie o możliwości wyjścia poza kwalifikację z aktu oskarżenia. Sąd uzasadnił to brakiem potrzeby, 'gdyż latarka była w aktach'. Stanowi to drastyczne naruszenie prawa do obrony (art. 6 k.p.k.).

2. RAŻĄCE ZŁAMANIE ZASADY IN DUBIO PRO REO (art. 5 § 2 k.p.k.):
Sąd Rejonowy w motywach wyroku stwierdził expressis verbis, że materiał dowodowy nie pozwala z pewnością ustalić, czy latarkę trzymał oskarżony czy współsprawca, po czym dodał: 'Zdaniem Sądu wątpliwość tę należało jednak rozstrzygnąć na niekorzyść Michała Zawadzkiego'. Jest to podręcznikowy przykład jawnego pogwałcenia art. 5 § 2 k.p.k.!

3. BEZPODSTAWNE ODDALENIE WNIOSKU DOWODOWEGO (art. 170 § 1 pkt 2 w zw. z art. 201 k.p.k.):
Oddalenie wniosku obrony o uzupełniającą opinię biegłego z okazaniem zabezpieczonej latarki. Sąd uznał, że sam może to ocenić z doświadczenia życiowego. Cechy niebezpiecznego narzędzia podlegają ocenie biegłego medycyny sądowej i balistyki.

4. BŁĄD MATERIALNY PRZY ARTYKULE 280 § 2 K.K.:
Uznanie zwykłej latarki turystycznej/samochodowej za 'inny podobnie niebezpieczny przedmiot' w rozumieniu art. 280 § 2 k.k. Zgodnie z ugruntowanym orzecznictwem SN przedmiot taki musi wykazywać destrukcyjne właściwości zbliżone do broni palnej lub noża.

5. CZYNNIK CZASU PRZY ART. 226 § 1 K.K. (ZNIEWAŻENIE FUNKCJONARIUSZA):
Sierż. Tomasz Nowak zakończył służbę o 16:00, był w ubraniu cywilnym w sklepie o 16:25. Art. 226 § 1 k.k. wymaga kumulatywnego spełnienia przesłanek: 'podczas' oraz 'w związku'. Brak elementu 'podczas' wyklucza byt przestępstwa z art. 226 § 1 k.k. (co najwyżej przestępstwo prywatnoskargowe z art. 216 § 1 k.k.).
Wniosek: UNIEWINNIENIE oskarżonego od czynu II.`,
    analysis: {
      summary: "Klasyczne mini-akta szkoleniowe obrazujące błędy orzecznicze sądu rejonowego w Toruniu.",
      keyConcepts: [
        "Art. 399 § 1 k.p.k. – obligatoryjne uprzedzenie o zmianie kwalifikacji",
        "Art. 5 § 2 k.p.k. – zakaz rozstrzygania wątpliwości na niekorzyść",
        "Wykładnia 'innego podobnie niebezpiecznego przedmiotu' (art. 280 § 2 k.k.)",
        "Koniunkcja znamion w art. 226 § 1 k.k. ('podczas i w związku')",
      ],
      practicalTips: [
        "Gdy sąd w uzasadnieniu pisze, że powziął wątpliwość i rozstrzygnął ją na niekorzyść – cytuj te słowa bezpośrednio w zarzucie!",
        "Zawsze badaj, czy policjant w momencie znieważenia był na służbie.",
      ],
    },
  },
  {
    id: "mat-kala-postepowanie",
    title: "Wykłady SSN dra Dariusza Kali – Postępowanie Karne i Granice Zaskarżenia",
    category: "notatki",
    addedAt: "2026-02-10T11:00:00.000Z",
    content: `KANON WYKŁADOWY SSN DRA DARIUSZA KALI (SĘDZIEGO SĄDU NAJWYŻSZEGO)
Temat: Kontrola odwoławcza, granice zaskarżenia, formułowanie zarzutów apelacyjnych i kasacyjnych.

1. GRANICE ROZPOZNANIA ŚRODKA ODWOŁAWCZEGO (art. 433 § 1 i § 2 k.p.k.):
- Sąd odwoławczy rozpoznaje sprawę w granicach zaskarżenia, a jeżeli w środku odwoławczym wskazano zarzuty – także w granicach zarzutów.
- Obowiązek rzetelnego rozważenia wszystkich zarzutów i wniosków (art. 433 § 2 k.p.k.). Pominięcie zarzutu przez sąd II instancji stanowi rażące naruszenie prawa i podstawę kasacji!

2. RELACJA MIĘDZY ART. 410 K.P.K. A ART. 92 K.P.K.:
- Art. 410 k.p.k. dotyczy WYŁĄCZNIE podstawy WYROKU sądu I instancji (orzeczenia merytorycznego kończącego rozprawę główną). Naruszenie polega na oparciu wyroku na dowodzie nieujawnionym lub pominięciu dowodu ujawnionego.
- Art. 92 k.p.k. dotyczy podstawy KAŻDEGO orzeczenia (postanowień, zarządzeń, a także orzeczeń wydawanych na posiedzeniu). Błędem jest zarzucanie art. 92 k.p.k. zamiast art. 410 k.p.k. przy zaskarżaniu wyroku!

3. SYSTEMATYKA PRZYCZYN ODWOŁAWCZYCH (art. 438 k.p.k.):
- Pkt 1: Obraza prawa materialnego w zakresie kwalifikacji prawnej. Wyłączona, jeśli skarżący kwestionuje fakty!
- Pkt 1a: Obraza prawa materialnego w innym wypadku niż kwalifikacja (np. błędna podstawa środka kompensacyjnego, zatrzymania prawa jazdy, przepadku czy stawek wynagrodzenia obrońcy).
- Pkt 2: Obraza przepisów postępowania. ZAWSZE wymaga wykazania możliwego wpływu na treść orzeczenia.
- Pkt 3: Błąd w ustaleniach faktycznych. Charakteryzuje się relacją subsydiarności do uchybień procesowych (np. dowolnej oceny dowodów).
- Pkt 4: Rażąca niewspółmierność kary lub środka. Stawiana jako zarzut ewentualny przy kwestionowaniu winy.

4. BEZWZGLĘDNE PRZYCZYNY ODWOŁAWCZE (art. 439 § 1 k.p.k.):
- Niezależne od granic zaskarżenia i podniesionych zarzutów oraz wpływu na wyrok.
- Jeśli obrońca dostrzeże art. 439 k.p.k. (np. nienależyta obsada sądu, brak obrońcy obligatoryjnego), musi go wyeksponować na wstępie apelacji.`,
    analysis: {
      summary: "Kluczowe tezy i wytyczne orzecznicze SSN dra Dariusza Kali dotyczące zaskarżania wyroków.",
      keyConcepts: [
        "Art. 433 § 1 i § 2 k.p.k. – granice zaskarżenia i kontroli",
        "Art. 410 k.p.k. (wyrok) vs art. 92 k.p.k. (postanowienia)",
        "Art. 438 pkt 1a k.p.k. – materialne uchybienia pozakwalifikacyjne",
        "Gradacja zarzutów i zakaz zarzutów mieszanych",
      ],
      practicalTips: [
        "Nigdy nie zarzucaj art. 92 k.p.k., gdy zaskarżasz wyrok po rozprawie – zarzucaj art. 410 k.p.k.!",
        "Pamiętaj, że art. 438 pkt 1a k.p.k. to odrębna podstawa od pkt 1.",
      ],
    },
  },
  {
    id: "mat-zgolinski-metodyka",
    title: "Wykłady SSN prof. dra hab. Igora Zgolińskiego – Metodyka Akt i Szkoda w Prawie Karnym",
    category: "prezentacja",
    addedAt: "2026-02-18T14:00:00.000Z",
    content: `KANON WYKŁADOWY SSN PROF. DRA HAB. IGORA ZGOLIŃSKIEGO
Temat: Praktyczna metodyka pracy z aktami sprawy karnej oraz materialne i procesowe aspekty orzekania o szkodzie.

1. METODYKA CZYTANIA AKT OD KOŃCA:
Aplikant przystępując do analizy akt na kolokwium powinien czytać je w następującej kolejności:
Krok 1: Sentencja wyroku (tenor) – sprawdź kwalifikację, wymiar kar, środki kompensacyjne i przepadek.
Krok 2: Pisemne uzasadnienie wyroku – jakie fakty sąd uznał za udowodnione, na których dowodach się oparł, a które odrzucił (art. 7 i 410 k.p.k.), jak wytłumaczył kwalifikację.
Krok 3: Karta karna (KRK) i dane o osobie – sprawdź daty wyroków, odbycie kar, zatarcie skazania (art. 106-108 k.k.), recydywę (art. 64 § 1 i § 2 k.k.), status młodocianego (art. 115 § 10 k.k., art. 54 § 1 k.k.).
Krok 4: Protokoły rozprawy głównej – czy doszło do uprzedzenia o zmianie kwalifikacji (art. 399 k.p.k.), jakie wnioski dowodowe oddalono (art. 170 k.p.k.), czy obecne były osoby uprawnione.
Krok 5: Akt oskarżenia i postępowanie przygotowawcze – czy zarzuty w wyroku mieszczą się w ramach tożsamości zdarzenia historycznego.

2. SZKODA I ŚRODKI KOMPENSACYJNE W PRAWIE KARNYM (art. 46 k.k.):
- Wymóg tożsamości szkody: obowiązek naprawienia szkody z art. 46 § 1 k.k. może dotyczyć wyłącznie szkody bezpośrednio wynikającej z przypisanego przestępstwa.
- Klauzula antykumulacyjna (art. 415 § 1 zd. 2 k.p.k.): Zakaz orzekania obowiązku naprawienia szkody lub zadośćuczynienia, jeżeli roszczenie było przedmiotem prawomocnego orzeczenia sądu cywilnego albo gdy toczy się postępowanie cywilne.
- Ubezpieczenia (OC/AC): Jeżeli pokrzywdzony otrzymał pełne odszkodowanie od ubezpieczyciela, orzeczenie obowiązku naprawienia szkody z art. 46 § 1 k.k. na rzecz pokrzywdzonego jest niedopuszczalne (prowadzi do bezpodstawnego wzbogacenia!).

3. TERMINY PREKLUZYJNE W POSTĘPOWANIU KARNYM:
- Wniosek pokrzywdzonego o nałożenie obowiązku z art. 46 § 1 k.k. (art. 49a § 1 k.p.k.) musi być złożony do ZAMKNIĘCIA PRZEWODU SĄDOWEGO. Wniosek zgłoszony w mowach końcowych jest spóźniony i nie wywołuje skutków prawnych!`,
    analysis: {
      summary: "Metodologia pracy z aktami karnymi oraz zasady orzekania o środkach kompensacyjnych z art. 46 k.k.",
      keyConcepts: [
        "Metodyka czytania akt od końca (tenor -> uzasadnienie -> KRK -> protokoły)",
        "Badanie zatarcia skazania i recydywy z karty karnej",
        "Art. 46 § 1 k.k. a klauzula antykumulacyjna z art. 415 § 1 k.p.k.",
        "Art. 49a § 1 k.p.k. – prekluzja wniosku o naprawienie szkody",
      ],
      practicalTips: [
        "Zawsze sprawdzaj, kiedy złożono wniosek o naprawienie szkody – po zamknięciu przewodu sądowego jest za późno!",
        "Zawsze licz terminy zatarcia skazania w karcie karnej przed postawieniem zarzutu recydywy.",
      ],
    },
  },
  {
    id: "mat-tomkiewicz-book",
    title: "Konstrukcja Apelacji Karnej – adw. Marta Tomkiewicz-Januszewska (2023)",
    category: "ksiazka",
    addedAt: "2026-01-10T08:00:00.000Z",
    content: `KOMPENDIUM KANONU ADW. MARTY TOMKIEWICZ-JANUSZEWSKIEJ:
Wydawca: Izba Adwokacka w Warszawie, 2023 r. (ISBN 978-83-965319-3-3).

1. ZAKAZ ZARZUTÓW MIESZANYCH (Rozdział 7.4):
Obraza prawa materialnego (art. 438 pkt 1 k.p.k.) może być podniesiona WYŁĄCZNIE wtedy, gdy skarżący nie kwestionuje ustaleń faktycznych ani oceny dowodów odnośnie do danego czynu.
Jeżeli skarżący podnosi zarzut obrazy art. 7 k.p.k. lub błędu w ustaleniach faktycznych, to zarzut obrazy prawa materialnego MOŻE BYĆ SFORMUŁOWANY WYŁĄCZNIE JAKO ZARZUT EWENTUALNY ('z ostrożności procesowej – na wypadek nieuwzględnienia zarzutu...').

2. STOPNIOWANIE I GRADACJA ZARZUTÓW (Rozdział 6):
Jeżeli występuje bezwzględna przyczyna odwoławcza (art. 439 § 1 k.p.k.), zamieszcza się ją na 1. miejscu w petitum bez wykazywania wpływu na treść orzeczenia.
Następnie stosuje się formułę: 'Niezależnie od dostrzeżenia ww. bezwzględnej przyczyny odwoławczej...'.

3. TRÓJCZŁONOWA BUDOWA ZARZUTU PROCESOWEGO (Rozdział 7.3):
Zarzut z art. 438 pkt 2 k.p.k. (art. 7 w zw. z 410 k.p.k.) musi zawierać:
a) wskazanie naruszonego przepisu i konkretnego dowodu,
b) opis, na czym polegała dowolność lub sprzeczność z zasadami wiedzy/logiki,
c) obowiązkowy ustawowy zwrot: 'mającą wpływ na treść orzeczenia' ze wskazaniem, jaki błąd faktyczny to wywołało.

4. PRYMAT ORZEKANIA REFORMATORYJNEGO (Rozdział 8 i art. 437 § 2 zd. 2 k.p.k.):
Zasadą jest wniosek o zmianę wyroku i orzeczenie co do istoty (uniewinnienie lub złagodzenie kary). Uchylenie jest wyjątkiem (art. 439, ne peius art. 454 § 1, konieczność powtórzenia przewodu w całości).`,
    analysis: {
      summary: "Oficjalny kanon konstrukcji apelacji karnej autorstwa adw. Marty Tomkiewicz-Januszewskiej.",
      keyConcepts: [
        "Zakaz zarzutów mieszanych (Rozdz. 7.4)",
        "art. 438 pkt 1 k.p.k. a ustalenia faktyczne",
        "Trójczłonowy zarzut z art. 7 k.p.k.",
        "Wpływ na treść orzeczenia",
        "Prymat reformatoryjności (art. 437 k.p.k.)",
      ],
      practicalTips: [
        "Nigdy nie pisz 'zarzucam obrazę prawa materialnego poprzez błędne ustalenie'!",
        "Stawiaj zarzut z art. 438 pkt 4 k.p.k. zawsze z ostrożności procesowej jako ewentualny.",
      ],
    },
  },
  {
    id: "mat-kazus-v-solidni",
    title: "Kazus V – Spółka „Solidni”, Zakazy Dowodowe i Oszustwo (art. 286 § 1 k.k.)",
    category: "kazusy_z_zajec",
    addedAt: "2026-03-01T12:00:00.000Z",
    content: `KAZUS V – MATERIAŁY SZKOLENIOWE (SPÓŁKA SOLIDNI, JAN W. I KRZYSZTOF D.)
Kluczowe zagadnienia z zakresu zakazów dowodowych i materialnego prawa karnego:

1. BEZWZGLĘDNY ZAKAZ DOWODOWY Z ART. 178 PKT 1 K.P.K.:
Nie wolno przesłuchiwać jako świadka obrońcy co do faktów, o których dowiedział się udzielając porady prawnej lub prowadząc sprawę.
Zakaz ten:
- ma charakter bezwzględny i nieuchylalny (żaden organ nie może z niego zwolnić),
- trwa również po ustaniu stosunku obrończego (np. po wypowiedzeniu pełnomocnictwa),
- obejmuje wszelkie informacje powierzone w zaufaniu przez klienta.
Przesłuchanie byłego obrońcy Izydora F. stanowiło rażące pogwałcenie art. 178 pkt 1 k.p.k. i art. 6 k.p.k.

2. STATUS WSPÓŁOSKARŻONEGO Z WYŁĄCZONEJ SPRAWY (art. 182 § 3 k.p.k.):
Świadek, który w innej toczącej się sprawie jest oskarżony o współudział w przestępstwie objętym postępowaniem, ma prawo do odmowy składania zeznań.
Organ przesłuchujący ma bezwzględny obowiązek pouczyć go o tym prawie (art. 191 § 2 k.p.k.). Zaniechanie pouczenia skutkuje bezwzględnym zakazem wykorzystania protokołu jako dowodu (art. 186 § 1 k.p.k.).

3. ZNAMIONA PRZESTĘPSTWA OSZUSTWA (art. 286 § 1 k.k.):
Do bytu przestępstwa oszustwa konieczne jest wykazanie zamiaru bezpośredniego kierunkowego (animus decipiendi) już w chwili zawierania umowy (tempore criminis). Samo niewykonanie zobowiązania cywilnego stanowi roszczenie z art. 471 k.c., a nie przestępstwo karne. Ponadto opis czynu w wyroku musi zawierać określenie sposobu wprowadzenia w błąd.`,
    analysis: {
      summary: "Warsztat dotyczący tajemnicy obrończej i gwarancji procesowych współsprawców.",
      keyConcepts: [
        "Art. 178 pkt 1 k.p.k. – wieczysta tajemnica obrończa",
        "Art. 182 § 3 k.p.k. – prawo do odmowy zeznań współoskarżonego",
        "Art. 286 § 1 k.k. – zamiar bezpośredni kierunkowy tempore criminis",
      ],
      practicalTips: [
        "Tajemnica obrońcy nie gaśnie z chwilą wypowiedzenia pełnomocnictwa!",
        "Zeznania współpodejrzanego bez pouczenia z art. 182 § 3 k.p.k. nie mogą stanowić dowodu.",
      ],
    },
  },
  {
    id: "mat-kazus-zbyslaw-b",
    title: "Kazus Zbysława B. – Apelacja Pełnomocnika Oskarżyciela Posiłkowego (art. 288 § 2 k.k., art. 46 § 1 k.k.)",
    category: "kazusy_z_zajec",
    addedAt: "2026-03-05T15:00:00.000Z",
    content: `KAZUS SZKOLENIOWY – ZBYSŁAW B. (SR W G., SYGN. II K 341/23)
Specyfika sporządzania apelacji przez pełnomocnika oskarżyciela posiłkowego NA NIEKORZYŚĆ oskarżonego.

1. KIERUNEK I GRANICE ZASKARŻENIA NA NIEKORZYŚĆ:
Pełnomocnik oskarżyciela posiłkowego zaskarża wyrok w całości na niekorzyść oskarżonego w zakresie kwalifikacji, kary i środka kompensacyjnego.

2. BŁĘDNE KRYTERIA WYPADKU MNIEJSZEJ WAGI (art. 115 § 2 k.k. w zw. z art. 288 § 2 k.k.):
Sąd I instancji uznał czyn za wypadek mniejszej wagi z powołaniem na: niekaralność oskarżonego, pozytywną opinię z pracy i wyrażoną skruchę.
To kardynalny błąd materialny! Zgodnie z art. 115 § 2 k.k. o stopniu społecznej szkodliwości i wypadku mniejszej wagi decydują WYŁĄCZNIE okoliczności przedmiotowo-podmiotowe czynu. Właściwości osobiste sprawcy i zachowanie po czynie to dyrektywy wymiaru kary z art. 53 k.k., które nie mogą decydować o kwalifikacji prawnej!

3. BRAK OBSTRZEŻENIA KARY PRZY WYSTĘPKU CHULIGAŃSKIM (art. 57a § 1 k.k.):
Wymierzenie kary 1 miesiąca pozbawienia wolności narusza bezwzględny nakaz ustawowy wymierzenia kary powyżej dolnej granicy zwiększonej o połowę.

4. TOŻSAMOŚĆ ZDARZENIA HISTORYCZNEGO A ZAKRES SZKODY (art. 14 § 1 k.p.k. i art. 46 § 1 k.k.):
Ujawnienie dalszego bezpośredniego uszkodzenia pojazdu (zbiornik chłodnicy – 500 zł) mieści się w ramach tożsamości czynu. Sąd powinien objąć obowiązkiem naprawienia szkody całą kwotę 3.500 zł.

5. WNIOSEK KASATORYJNY W ZWIĄZKU Z REGUŁĄ NE PEIUS (art. 454 k.p.k.):
Przy apelacji na niekorzyść sąd odwoławczy nie może skazać oskarżonego na surowszą karę ani przypisać surowszego przestępstwa – konieczny jest wniosek o UCHYLENIE i przekazanie do ponownego rozpoznania.`,
    analysis: {
      summary: "Warsztat apelacji na niekorzyść ze szczególnym uwzględnieniem art. 115 § 2 k.k. i reguły ne peius.",
      keyConcepts: [
        "Art. 115 § 2 k.k. – wyłączenie cech osobistych sprawcy przy ocenie społecznej szkodliwości",
        "Art. 57a § 1 k.k. – obligatoryjne obostrzenie kary chuligańskiej",
        "Art. 454 k.p.k. – reguła ne peius obligująca do wniosku kasatoryjnego",
      ],
      practicalTips: [
        "Nigdy nie wnoś o zaostrzenie kary przez sąd II instancji przy apelacji na niekorzyść – zawsze wnoś o uchylenie z uwagi na art. 454 k.p.k.!",
      ],
    },
  },
  {
    id: "mat-oirp-bydgoszcz-skrypt",
    title: "Skrypt Praktyczny OIRP Bydgoszcz (2026) – Zasady Konstrukcji Petitum i Kolokwium",
    category: "prezentacja",
    addedAt: "2026-01-20T10:00:00.000Z",
    content: `SKRYPT PRAKTYCZNY APELACJI KARNEJ DLA APLIKANTÓW II ROKU (OIRP BYDGOSZCZ, 2026 r.)

1. STRUKTURA PETITUM APELACJI:
- Właściwe oznaczenie sądu odwoławczego za pośrednictwem sądu I instancji.
- Precyzyjne oznaczenie sygnatury akt i daty zaskarżonego wyroku.
- Wskazanie kierunku i zakresu zaskarżenia (na korzyść / w całości / w części).
- Zarzuty odwoławcze z powołaniem art. 427 § 2 w zw. z art. 438 pkt 1-4 lub art. 439 § 1 k.p.k.
- Wnioski odwoławcze z powołaniem art. 427 § 1 w zw. z art. 437 § 1 i 2 k.p.k.

2. NAJCZĘSTSZE BŁĘDY KOSZTUJĄCE PUNKTY NA KOLOKWIUM:
- Brak klauzuli 'mającą wpływ na treść orzeczenia' przy zarzutach procesowych (art. 438 pkt 2 k.p.k.).
- Zarzut obrazy prawa materialnego przy jednoczesnym kwestionowaniu faktów (zarzut mieszany).
- Wnoszenie o uchylenie wyroku w sytuacjach, gdy sąd odwoławczy może i powinien orzec reformatoryjnie (art. 437 § 2 k.p.k.).
- Pominięcie obligatoryjnego pouczenia z art. 399 § 1 k.p.k. przy zmianie kwalifikacji prawnej.
- Błędne sformułowanie wniosku o koszty pomocy prawnej.`,
    analysis: {
      summary: "Praktyczne wskazówki pod kątem kolokwium komisji szkoleniowej aplikacji radcowskiej.",
      keyConcepts: [
        "Struktura petitum apelacji",
        "Kryteria punktacji kolokwium rocznego",
        "Zakaz zarzutów mieszanych",
      ],
      practicalTips: [
        "Sprawdź zgodność wniosków odwoławczych z podniesionymi zarzutami!",
      ],
    },
  },
];
