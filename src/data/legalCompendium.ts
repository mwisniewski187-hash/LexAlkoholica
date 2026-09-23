export interface CompendiumSection {
  id: string;
  title: string;
  category: "struktura" | "zarzuty" | "wnioski" | "orzecznictwo" | "bledy";
  content: string;
  formulaTemplate?: string;
  tips: string[];
}

export const LEGAL_COMPENDIUM: CompendiumSection[] = [
  {
    id: "art-438-pkt-1-materialne",
    title: "1. Obraza Prawa Materialnego (art. 438 pkt 1 k.p.k.)",
    category: "zarzuty",
    content: `Obraza prawa materialnego polega na:
1. Błędnej wykładni przepisu (sąd mylnie zrozumiał treść lub zakres normy prawnej, np. pojęcie 'obrony koniecznej', 'ruchu lądowego', 'znacznej ilości').
2. Niewłaściwym zastosowaniu przepisu (błąd subsumpcji - zastosowano przepis do stanu faktycznego, który pod niego nie podpada, albo nie zastosowano przepisu, który powinien być zastosowany).

ŻELAZNA REGUŁA:
Zarzut obrazy prawa materialnego można postawić TYLKO wtedy, gdy obrona w pełni AKCEPTUJE stan faktyczny ustalony przez Sąd I instancji!
Jeśli kwestionujesz choćby jeden fakt (np. 'oskarżony nie chciał uderzyć', 'świadek skłamał', 'nie było go na miejscu'), NIE WOLNO Ci postawić zarzutu z art. 438 pkt 1 k.p.k. jako zarzutu głównego. Wtedy zarzucasz art. 7 k.p.k. lub błąd w ustaleniach faktycznych, a obrazę prawa materialnego co najwyżej JAKO ZARZUT EWENTUALNY.`,
    formulaTemplate: `na podstawie art. 438 pkt 1 k.p.k. zarzucam obrazę przepisów prawa materialnego, a mianowicie art. [PRZEPIS K.K.], poprzez jego [błędną wykładnię / niewłaściwe zastosowanie / niezastosowanie] polegające na przyjęciu, że [OPIS BŁĘDU], podczas gdy prawidłowa wykładnia tego przepisu w ustalonym stanie faktycznym prowadzi do wniosku, iż [PRAWIDŁOWA KWALIFIKACJA];`,
    tips: [
      "Nigdy nie pisz 'obrazę prawa materialnego, polegającą na błędnym ustaleniu, że...' - to błąd kardynalny dyskwalifikujący całą apelację!",
      "Przy art. 438 pkt 1 k.p.k. nie wykazuje się 'wpływu na treść wyroku' - wpływ ten jest oczywisty i immanentny.",
      "Prawidłowy wniosek: niemal zawsze wniosek o ZMIANĘ wyroku (uniewinnienie lub zmiana kwalifikacji i wymiaru kary), rzadko uchylenie.",
    ],
  },
  {
    id: "art-438-pkt-2-procesowe",
    title: "2. Obraza Przepisów Postępowania (art. 438 pkt 2 k.p.k.)",
    category: "zarzuty",
    content: `Dotyczy uchybień proceduralnych popełnionych przez sąd w toku rozprawy lub wyrokowania.
Najczęstsze konfiguracje:
- art. 7 k.p.k. w zw. z art. 410 k.p.k. – dowolna, a nie swobodna ocena dowodów, sprzeczna z logiką, wiedzą i doświadczeniem życiowym, pominięcie istotnych dowodów ujawnionych na rozprawie.
- art. 5 § 2 k.p.k. – in dubio pro reo: sąd powziął wątpliwości (lub obiektywnie one istniały), których nie dało się usunąć, a mimo to rozstrzygnął je na niekorzyść oskarżonego.
- art. 170 § 1 k.p.k. w zw. z art. 167 k.p.k. – bezpodstawne oddalenie wniosku dowodowego obrony.
- art. 6 k.p.k. – naruszenie prawa do obrony w sensie formalnym lub materialnym.

KONIECZNY ELEMENT FORMUŁY:
Musisz koniecznie zawrzeć zwrot: 'MAJĄCĄ WPŁYW NA TREŚĆ ORZECZENIA'!
Samo naruszenie przepisu procedury nie wystarczy – musisz wykazać, że gdyby sąd postąpił prawidłowo, treść wyroku mogłaby być odmienna.`,
    formulaTemplate: `na podstawie art. 438 pkt 2 k.p.k. zarzucam obrazę przepisów postępowania, mającą wpływ na treść orzeczenia, a mianowicie art. 7 k.p.k. w zw. z art. 410 k.p.k., polegającą na dowolnej i jednostronnej ocenie zgromadzonego materiału dowodowego, w szczególności poprzez [DOWÓD A] i bezpodstawne odmówienie wiary [DOWÓD B], co w konsekwencji doprowadziło do niesłusznego uznania winy oskarżonego;`,
    tips: [
      "Brak zwrotu 'mającą wpływ na treść orzeczenia' powoduje obcięcie punktów na każdym kolokwium!",
      "Nigdy nie łącz zarzutu art. 5 § 2 k.p.k. z art. 7 k.p.k. wobec tego samego dowodu (art. 7 dotyczy oceny dowodów, a art. 5 § 2 wkracza dopiero wtedy, gdy po prawidłowej ocenie dowodów nadal istnieją nieusuwalne wątpliwości).",
      "Wskazuj konkretne dowody z imienia, nazwiska lub karty akt!",
    ],
  },
  {
    id: "art-438-pkt-3-faktyczne",
    title: "3. Błąd w Ustaleniach Faktycznych (art. 438 pkt 3 k.p.k.)",
    category: "zarzuty",
    content: `Błąd w ustaleniach faktycznych występuje w dwóch postaciach:
1. Błąd 'braku' - sąd nie ustalił okoliczności, które wynikały z zebranych dowodów.
2. Błąd 'dowolności' - sąd ustalił fakt, który nie znajduje oparcia w dowodach lub wynika z ich wadliwej interpretacji.

ZASADA SUBSYDIARNOŚCI:
Błąd w ustaleniach faktycznych jest niemal zawsze WTÓRNYM skutkiem naruszenia prawa procesowego (najczęściej art. 7 k.p.k., art. 410 k.p.k. lub art. 170 k.p.k.).
Dlatego najlepsza praktyka apelacyjna nakazuje postawić najpierw zarzut procesowy (art. 438 pkt 2 k.p.k. - naruszenie art. 7 k.p.k.), a następnie zarzut błędu w ustaleniach faktycznych (art. 438 pkt 3 k.p.k.) jako jego bezpośrednią konsekwencję.`,
    formulaTemplate: `na podstawie art. 438 pkt 3 k.p.k. zarzucam błąd w ustaleniach faktycznych przyjętych za podstawę orzeczenia, mający wpływ na jego treść, polegający na bezpodstawnym przyjęciu, że [BŁĘDNY FAKT USTALONY PRZEZ SĄD], podczas gdy prawidłowa ocena zgromadzonego materiału dowodowego prowadzi do wniosku, iż [RZECZYWISTY PRZEBIEG ZDARZENIA];`,
    tips: [
      "Pamiętaj o zwrocie: 'mający wpływ na jego treść'.",
      "Precyzyjnie wskaż, jaki konkretnie fakt sąd ustalił błędnie (np. fakt zamiaru bezpośredniego, fakt zadania ciosu niebezpiecznym narzędziem, fakt świadomości pochodzenia rzeczy).",
    ],
  },
  {
    id: "art-438-pkt-4-kara",
    title: "4. Rażąca Niewspółmierność Kary (art. 438 pkt 4 k.p.k.)",
    category: "zarzuty",
    content: `Zarzut ten stawiamy wtedy, gdy sąd prawidłowo ustalił fakty i właściwie zastosował prawo materialne, lecz orzeczona kara lub środek karny jest 'rażąco' niewspółmierna (nie jakakolwiek różnica zdań, ale jaskrawa dysproporcja, bijąca w oczy niesprawiedliwość).
Kiedy zachodzi:
- Nieproporcjonalność orzeczonej kary w stosunku do stopnia winy i społecznej szkodliwości czynu.
- Pominięcie istotnych okoliczności łagodzących (np. pojednanie, naprawienie szkody, młody wiek z art. 54 § 1 k.k., dotychczasowa niekaralność).
- Orzeczenie bezwzględnej kary pozbawienia wolności zamiast kary z warunkowym zawieszeniem (art. 69 k.k.) lub kary wolnościowej z art. 37a k.k.

ZARZUT EWENTUALNY:
Jeśli kwestionujesz winę, zarzut z art. 438 pkt 4 k.p.k. stawiasz ZAWSZE jako zarzut ewentualny ('z ostrożności procesowej na wypadek nieuwzględnienia zarzutów wcześniejszych...').`,
    formulaTemplate: `[z ostrożności procesowej – w razie nieuwzględnienia powyższych zarzutów –] na podstawie art. 438 pkt 4 k.p.k. zarzucam rażącą niewspółmierność (surowość) orzeczonej wobec oskarżonego kary [RODZAJ I WYMIAR KARY], polegającą na orzeczeniu kary o charakterze bezwzględnym, wskutek niedostatecznego uwzględnienia przez Sąd dyrektyw wymiaru kary z art. 53 § 1 i 2 k.k., w szczególności [OKOLICZNOŚCI ŁAGODZĄCE];`,
    tips: [
      "Używaj sformułowania 'rażąca niewspółmierność' - zwykła surowość to za mało.",
      "Powiązuj zarzut z art. 53 k.k. (dyrektywy wymiaru kary) lub art. 54 k.k. (młodociany).",
    ],
  },
  {
    id: "art-439-bezwzgledne",
    title: "5. Bezwzględne Przyczyny Odwoławcze (art. 439 § 1 k.p.k.)",
    category: "zarzuty",
    content: `Katalog zamknięty najcięższych uchybień ustrojowych i procesowych (pkt 1-11):
- pkt 1: udział osoby nieuprawnionej lub niezdolnej do orzekania albo podlegającej wyłączeniu na podst. art. 40 k.p.k. (iudex inhabilis).
- pkt 2: nienależyta obsada sądu (np. 1 sędzia zamiast 3, brak ławników).
- pkt 3: sąd powszechny orzekł w sprawie należącej do sądu szczególnego lub na odwrót.
- pkt 4: sąd niższego rzędu orzekł w sprawie należącej do sądu wyższego rzędu.
- pkt 7: orzeczenie zapadło z naruszeniem zasady powagi rzeczy osądzonej (res iudicata) lub toczącego się postępowania (lis pendens).
- pkt 8: zachodziła negatywna przesłanka procesowa z art. 17 § 1 pkt 5, 6, 9-11 k.p.k. (np. przedawnienie, brak skargi uprawnionego oskarżyciela).
- pkt 10: oskarżony w postępowaniu sądowym nie miał obrońcy w wypadkach określonych w art. 79 § 1 i 2 oraz art. 80 lub obrońca nie brał udziału w czynnościach, w których jego udział był obowiązkowy.
- pkt 11: sprawę rozpoznano pod nieobecność oskarżonego, którego obecność była obowiązkowa.

SKUTEK:
Sąd odwoławczy UCHYLA orzeczenie niezależnie od granic zaskarżenia i podniesionych zarzutów oraz bez badania wpływu na treść orzeczenia!`,
    formulaTemplate: `na podstawie art. 439 § 1 pkt [NUMER PKT] k.p.k. zarzucam wystąpienie bezwzględnej przyczyny odwoławczej, polegającej na tym, że [OPIS ZDARZENIA ZGODNY Z HIPOTEZĄ ART. 439 § 1 PKT ... K.P.K.];`,
    tips: [
      "Nigdy nie pisz 'mającą wpływ na treść wyroku' - ten zwrot przy art. 439 k.p.k. to szkolny błąd!",
      "Jedynym dopuszczalnym wnioskiem przy art. 439 k.p.k. jest wniosek o UCHYLENIE wyroku (art. 437 § 2 zd. drugie k.p.k.) albo umorzenie.",
    ],
  },
  {
    id: "wnioski-apelacyjne-art-437",
    title: "6. Konstrukcja Wniosków Apelacyjnych (art. 437 k.p.k.)",
    category: "wnioski",
    content: `Art. 437 § 1 k.p.k. przewiduje dwa zasadnicze rodzaje rozstrzygnięć sądu odwoławczego:
1. ZMIANA zaskarżonego orzeczenia (wniosek reformatoryjny):
   - o uniewinnienie oskarżonego (gdy czynu nie popełniono, brak znamion lub kontratyp)
   - o zmianę kwalifikacji prawnej i złagodzenie kary
   - o orzeczenie kary wolnościowej lub z warunkowym zawieszeniem
2. UCHYLENIE zaskarżonego orzeczenia (wniosek kasatoryjny):
   - i przekazanie sprawy do ponownego rozpoznania Sądowi I instancji (gdy zachodzi art. 439 k.p.k. lub zachodzi konieczność przeprowadzenia przewodu sądowego w całości - art. 437 § 2 zd. drugie k.p.k.)
   - i umorzenie postępowania (gdy zachodzi przeszkoda procesowa z art. 17 § 1 k.p.k.).

REFORMA K.P.K. (ZASADA REFORMATORYJNOŚCI):
Obecnie regułą jest orzekanie reformatoryjne (zmiana wyroku). Uchylenie jest wyjątkiem dopuszczalnym TYLKO w dwóch wypadkach:
1. Wystąpienie bezwzględnej przyczyny z art. 439 § 1 k.p.k.
2. Konieczność przeprowadzenia przewodu sądowego w całości.`,
    formulaTemplate: `Mając na uwadze powyższe zarzuty, na podstawie art. 437 § 1 i 2 k.p.k. wnoszę o:
1. zmianę zaskarżonego wyroku poprzez uniewinnienie oskarżonego od zarzucanego mu czynu;
[ewentualnie:]
2. z ostrożności procesowej – w razie nieuwzględnienia wniosku o zmianę – wnoszę o uchylenie zaskarżonego wyroku i przekazanie sprawy Sądowi Rejonowemu w [MIASTO] do ponownego rozpoznania.`,
    tips: [
      "Wnioski muszą być logicznym lustrem postawionych zarzutów.",
      "Zawsze konstruuj wniosek ewentualny, gdy Twój wniosek główny idzie w kierunku uniewinnienia!",
    ],
  },
  {
    id: "zakazy-odwolawcze",
    title: "7. Zakaz Reformationis in Peius (art. 434) i Ne Peius (art. 454)",
    category: "orzecznictwo",
    content: `Dwie kluczowe gwarancje w postępowaniu odwoławczym:
1. ZAKAZ REFORMATIONIS IN PEIUS (art. 434 § 1 k.p.k.):
Sąd odwoławczy może orzec na niekorzyść oskarżonego TYLKO wtedy, gdy wniesiono środek odwoławczy na jego niekorzyść i TYLKO w granicach zaskarżenia oraz w razie podniesienia zarzutów na niekorzyść.
Jako obrońca wnosisz apelację WYŁĄCZNIE NA KORZYŚĆ oskarżonego. Sąd II instancji pod żadnym pozorem nie może pogorszyć sytuacji oskarżonego (np. zaostrzyć kary, orzec surowszego środka, dodać okoliczności obciążających).

2. REGUŁA NE PEIUS (art. 454 k.p.k.):
Sąd odwoławczy NIE MOŻE skazać oskarżonego, który został uniewinniony w pierwszej instancji lub wobec którego umorzono postępowanie (art. 454 § 1 k.p.k.).
W takiej sytuacji sąd II instancji może jedynie uchylić wyrok i przekazać sprawę do ponownego rozpoznania.`,
    tips: [
      "Pamiętaj: w komparycji apelacji obrońcy zawsze wpisujemy: 'działając na korzyść oskarżonego'.",
      "Nigdy nie zaskarżaj wyroku 'na niekorzyść' jako obrońca!",
    ],
  },
  {
    id: "art-438-pkt-1a-materialne-inne",
    title: "8. Obraza Prawa Materialnego w innym wypadku niż kwalifikacja (art. 438 pkt 1a k.p.k.) – SSN dr D. Kala",
    category: "zarzuty",
    content: `Art. 438 pkt 1a k.p.k. to odrębna podstawa odwoławcza wprowadzona w celu precyzyjnego odróżnienia naruszenia prawa materialnego dotyczącego kwalifikacji prawnej czynu (art. 438 pkt 1 k.p.k.) od innych rozstrzygnięć materialnoprawnych zawartych w wyroku.

Kiedy stosujemy zarzut z art. 438 pkt 1a k.p.k.:
1. Orzeczenie o karze z naruszeniem sztywnych reguł materialnoprawnych:
   - orzeczenie kary poniżej dolnej lub powyżej górnej granicy ustawowego zagrożenia,
   - naruszenie nakazu z art. 57a § 1 k.k. (brak podwyższenia dolnej granicy o połowę przy występku chuligańskim),
   - wadliwe zastosowanie lub niezastosowanie art. 57b k.k. (obostrzenie przy czynie ciągłym),
   - wadliwe orzeczenie kary łącznej z naruszeniem granic z art. 86 § 1 k.k.
2. Wadliwe orzeczenie środków karnych, kompensacyjnych lub przepadku:
   - orzeczenie przepadku pojazdu z art. 44b § 1a k.k. w zw. z art. 178a § 1 k.k. przy braku przesłanki stężenia alkoholu (stężenie poniżej 0,75 mg/dm3 lub 1,5 promila),
   - orzeczenie zakazu prowadzenia pojazdów na okres niezgodny z ustawą.
3. Naruszenie przepisów o kosztach obrony z urzędu:
   - obraza § 4 ust. 3 i § 20 rozporządzenia MS z dnia 14 maja 2024 r. poprzez pominięcie kolejnego terminu rozprawy lub podatku VAT (23%).`,
    formulaTemplate: `na podstawie art. 438 pkt 1a k.p.k. zarzucam obrazę przepisów prawa materialnego w innym wypadku niż kwalifikacja prawna czynu, a mianowicie [PRZEPIS PRAWA], poprzez [BŁĘDNE ZASTOSOWANIE / NIEZASTOSOWANIE], polegające na [OPIS UCHYBIENIA];`,
    tips: [
      "Nie myl art. 438 pkt 1 z art. 438 pkt 1a k.p.k. – pkt 1 dotyczy wyłącznie kwalifikacji prawnej czynu (subsumpcji)!",
      "Naruszenie stawek urzędowych przy zwolnieniu podsądnego od kosztów skarż z art. 438 pkt 1a k.p.k.",
    ],
  },
  {
    id: "art-410-vs-art-92-ssn-kala",
    title: "9. Relacja art. 410 k.p.k. a art. 92 k.p.k. i granice kontroli (art. 433 k.p.k.) – SSN dr D. Kala",
    category: "zarzuty",
    content: `KANON WYKŁADOWY SSN DRA DARIUSZA KALI:
Kluczowe rozgraniczenie podstaw prawnych orzekania:

1. ART. 410 K.P.K. A ART. 92 K.P.K.:
- Art. 410 k.p.k. odnosi się WYŁĄCZNIE do wyroku wydanego po przeprowadzeniu rozprawy głównej. Norma ta nakazuje sądowi oprzeć wyrok na całokształcie okoliczności ujawnionych na rozprawie.
  Naruszenie art. 410 k.p.k. zachodzi, gdy:
  a) Sąd oparł wyrok na dowodzie, który NIE został wprowadzony do procesu (nieodczytany, nieujawniony),
  b) Sąd pominął dowód prawidłowo ujawniony na rozprawie, wybiórczo wybierając tylko materiał obciążający.
- Art. 92 k.p.k. odnosi się do orzeczeń wydawanych poza rozprawą (postanowień, zarządzeń, posiedzeń).
  BŁĄD KARDYNALNY: Zarzucenie w apelacji od wyroku naruszenia art. 92 k.p.k. zamiast art. 410 k.p.k.!

2. GRANICE KONTROLI INSTANCYJNEJ (art. 433 § 1 i § 2 k.p.k.):
- Granice zaskarżenia i podniesione zarzuty wiążą sąd odwoławczy.
- Sąd II instancji ma bezwzględny obowiązek rozważenia każdego postawionego w apelacji zarzutu i podania w uzasadnieniu powodów jego uwzględnienia bądź odrzucenia (art. 433 § 2 k.p.k. w zw. z art. 457 § 3 k.p.k.). Pominięcie zarzutu otwiera prostą drogę do kasacji!`,
    tips: [
      "W apelacji od wyroku sądu I instancji ZAWSZE powołuj art. 7 k.p.k. W ZWIĄZKU z art. 410 k.p.k. (nigdy art. 92 k.p.k.)!",
      "Wykaż w uzasadnieniu, na której karcie akt znajduje się pominięty dowód.",
    ],
  },
  {
    id: "metodyka-akt-ssn-zgolinski",
    title: "10. Metodyka czytania akt „od końca” i audyt karty karnej – SSN prof. I. Zgoliński",
    category: "struktura",
    content: `METODYKA PRACY Z AKTAMI KARNYMI NA KOLOKWIUM:
SSN prof. dr hab. Igor Zgoliński rekomenduje żelazną sekwencję analizy akt w celu natychmiastowego zidentyfikowania punktów krytycznych:

1. TENOR WYROKU (pkt po punkcie):
Zanotuj kwalifikacje prawne, rodzaj i wymiar kar, środki kompensacyjne i przepadek. Sprawdź, czy nie wymierzono kary poniżej dolnej granicy, czy orzeczono przepadek i koszty.

2. UZASADNIENIE WYROKU:
Przeczytaj, jak sąd wytłumaczył ustalenia faktyczne. Zwróć uwagę na fragmenty, gdzie sąd przyznaje się do 'wątpliwości' (szansa na art. 5 § 2 k.p.k.) oraz jak potraktował dowody obrony.

3. KARTA KARNA (KRK):
- Sprawdź datę popełnienia poprzednich czynów, daty prawomocności i odbycia kar.
- Zbadaj terminy zatarcia skazania z mocy prawa (art. 106a, 107 k.k.)! Skazanie zatarte uważa się za niebyłe – oskarżony jest osobą niekaraną!
- Zbadaj warunki recydywy z art. 64 § 1 k.k. (kara min. 6 miesięcy pozbawienia wolności, odbyta w wymiarze co najmniej 6 miesięcy w ciągu 5 lat) oraz recydywy wielokrotnej (art. 64 § 2 k.k.).
- Zbadaj status młodocianego (art. 115 § 10 k.k., art. 54 § 1 k.k.).

4. PROTOKOŁY ROZPRAWY:
- Sprawdź obecność obrońcy obligatoryjnego (art. 79 k.p.k.).
- Sprawdź, czy sąd uprzedził o możliwości zmiany kwalifikacji prawnej (art. 399 § 1 k.p.k.).
- Zbadaj postanowienia o oddaleniu wniosków dowodowych (art. 170 k.p.k.).`,
    tips: [
      "Nigdy nie wierz karcie karnej na słowo – zawsze sam policz, czy skazanie nie uległo już zatarciu z mocy prawa!",
      "Brak uprzedzenia z art. 399 § 1 k.p.k. na rozprawie to jeden z najczęstszych motywów zadań na kolokwium.",
    ],
  },
  {
    id: "szkoda-art-46-klauzule-zgolinski",
    title: "11. Szkoda w prawie karnym (art. 46 k.k.) i klauzula antykumulacyjna – SSN prof. I. Zgoliński",
    category: "orzecznictwo",
    content: `ORZEKANIE O SZKODZIE I ŚRODKACH KOMPENSACYJNYCH (art. 46 k.k.):

1. KLAUZULA ANTYKUMULACYJNA (art. 415 § 1 zd. 2 k.p.k.):
'Nawiązki na rzecz pokrzywdzonego, obowiązku naprawienia szkody lub zadośćuczynienia za doznaną krzywdę nie orzeka się, jeżeli roszczenie wynikające z popełnienia przestępstwa jest przedmiotem innego postępowania albo o roszczeniu tym prawomocnie orzeczono.'
Naruszenie tego zakazu to bezwzględny błąd skutkujący uchyleniem rozstrzygnięcia z art. 46 k.k.!

2. WYPŁATA ODSZKODOWANIA Z POLISY UBEZPIECZENIOWEJ (OC/AC):
Jeżeli zakład ubezpieczeń zlikwidował szkodę i wypłacił pokrzywdzonemu pełne odszkodowanie, sąd karny NIE MOŻE nałożyć na oskarżonego obowiązku zapłaty tej kwoty pokrzywdzonemu (prowadziłoby to do bezpodstawnego wzbogacenia). Ubezpieczycielowi przysługuje jedynie roszczenie regresowe w drodze procesu cywilnego.

3. PREKLUZJA WNIOSKU KOMPENSACYJNEGO (art. 49a § 1 k.p.k.):
Wniosek o naprawienie szkody z art. 46 § 1 k.k. może być złożony NAJPÓŹNIEJ do zamknięcia przewodu sądowego na rozprawie głównej. Wniosek złożony w przemówieniach końcowych (mowach końcowych) jest spóźniony i nie wywołuje skutków!`,
    tips: [
      "Sprawdź w protokole rozprawy dokładny moment złożenia wniosku przez pokrzywdzonego – po słowach przewodniczącego 'zamykam przewód sądowy' wniosek jest bezskuteczny!",
      "Zawsze sprawdzaj, czy pokrzywdzony nie otrzymał już odszkodowania z ubezpieczenia.",
    ],
  },
  {
    id: "zakazy-dowodowe-art-178-182",
    title: "12. Zakazy Dowodowe: Tajemnica obrończa (art. 178) i status współoskarżonego (art. 182 § 3)",
    category: "orzecznictwo",
    content: `ŚCIŚLE STRZEŻONE GWARANCJE PROCESOWE I ZAKAZY DOWODOWE:

1. BEZWZGLĘDNY ZAKAZ PRZESŁUCHANIA OBROŃCY (art. 178 pkt 1 k.p.k.):
Nie wolno przesłuchiwać jako świadka:
- obrońcy ani adwokata/radcy prawnego co do faktów, o których dowiedział się udzielając porady prawnej lub prowadząc sprawę.
Cechy zakazu:
- ma charakter bezwzględny, nieusuwalny i nieuchylalny (ani sąd, ani prokurator, ani nawet sam klient nie mogą zwolnić obrońcy z tego zakazu!),
- trwa wieczyście – również po wygaśnięciu lub wypowiedzeniu pełnomocnictwa,
- zeznania złożone z naruszeniem tego zakazu podlegają bezwzględnemu zakazowi dowodowemu (nie mogą być podstawą orzeczenia winy).

2. WSPÓŁOSKARŻONY Z WYŁĄCZONEJ SPRAWY JAKO ŚWIADEK (art. 182 § 3 k.p.k.):
Gdy sprawę jednego ze współsprawców wyłączono do odrębnego postępowania i wezwano go w charakterze świadka:
- Przysługuje mu pełne prawo do odmowy składania zeznań na podstawie art. 182 § 3 k.p.k.
- Sąd ma bezwzględny obowiązek pouczyć go o tym prawie (art. 191 § 2 k.p.k.).
- Przesłuchanie go pod rygorem odpowiedzialności za fałszywe zeznania bez takiego pouczenia powoduje, że protokół ten NIE MOŻE służyć za dowód (art. 186 § 1 k.p.k.)!`,
    tips: [
      "Przesłuchanie byłego obrońcy to kardynalne uchybienie dowodowe z art. 178 pkt 1 k.p.k.!",
      "Zawsze weryfikuj pouczenia dawane świadkom oskarżonym o współudział w wyłączonej sprawie.",
    ],
  },
];
