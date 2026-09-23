export interface BookChapter {
  id: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  keyRules: string[];
  formula?: string;
  pitfalls: string[];
  snRulingQuotes: { thesis: string; court: string }[];
  fullSummary: string;
}

export const TOMKIEWICZ_BOOK_INFO = {
  title: "Konstrukcja Apelacji Karnej",
  author: "adw. Marta Tomkiewicz-Januszewska",
  publisher: "Izba Adwokacka w Warszawie, Warszawa 2023",
  isbn: "ISBN 978-83-967277-0-1",
  pagesCount: 328,
  description:
    "Kompleksowy podręcznik i skrypt repetytoryjny dla aplikantów radcowskich, przygotowujący do kolokwium na II roku aplikacji z procesu karnego. Stanowi złoty kanon konstrukcji zarzutów, wniosków i petitum apelacji.",
};

export const TOMKIEWICZ_CHAPTERS: BookChapter[] = [
  {
    id: "rozdzial-2",
    chapterNumber: 2,
    title: "Rozdział 2: Wymogi formalne petitum apelacji",
    subtitle: "Sąd właściwy, terminy, upoważnienie i zwolnienie z opłaty skarbowej",
    keyRules: [
      "Apelację wnosimy ZAWSZE do sądu II instancji ZA POŚREDNICTWEM sądu I instancji (np. Sąd Okręgowy w Bydgoszczy za pośrednictwem Sądu Rejonowego w Bydgoszczy).",
      "Termin zawity: 14 dni od doręczenia wyroku wraz z uzasadnieniem (art. 445 § 1 k.p.k.). Wyjątek: 7 dni w postępowaniu przyspieszonym (art. 517h § 3 k.p.k.) i sprzeciwie od wyroku nakazowego (art. 506 § 1 k.p.k.).",
      "Obliczanie terminu (art. 123 k.p.k.): nie wlicza się dnia doręczenia. Jeżeli koniec terminu przypada na sobotę lub dzień wolny od pracy, czynność można wykonać w najbliższy dzień roboczy (art. 123 § 3 k.p.k.).",
      "Zakaz rozszerzania zarzutów po terminie: uzupełnienie apelacji o nowe zarzuty lub rozszerzenie zakresu po upływie 14 dni jest bezskuteczne (post. SN V KK 195/03).",
      "Umocowanie i formuła obrońcy: obrońca działa WYŁĄCZNIE NA KORZYŚĆ (art. 86 § 1 k.p.k.). Wzorcowa formuła: 'Działając jako obrońca oskarżonego X (upoważnienie w aktach sprawy / w załączeniu), zaskarżam wyrok...'. Błędem jest formuła 'reprezentujący oskarżonego' lub 'w imieniu i na rzecz', gdyż obrońca w procesie karnym zachowuje samodzielność procesową!",
      "Właściwe podstawy prawne petitum: (1) wniesienie: art. 444 § 1 w zw. z art. 425 § 1 i 2 k.p.k.; (2) zarzuty: art. 427 § 2 w zw. z art. 438 (pkt 1-4) lub art. 439 § 1 k.p.k.; (3) wnioski: art. 427 § 1 w zw. z art. 437 § 1 i 2 k.p.k.",
      "Liczba odpisów: art. 446 § 2 k.p.k. – dla każdej strony przeciwnej + 1 odpis dla sądu apelacyjnego/okręgowego. Zgodnie z art. 140 k.p.k. odpisy doręcza się też pełnomocnikom stron!",
      "Brak opłaty skarbowej: w sprawach karnych od upoważnienia do obrony lub pełnomocnictwa NIGDY nie uiszcza się opłaty skarbowej (ustawowe zwolnienie).",
      "Wniosek o koszty: na kolokwium lepiej go pominąć niż sformułować wadliwie (nie stanowi błędu pracy, gdyż nie dotyczy istoty odpowiedzialności karnej).",
    ],
    formula: `Warszawa, dnia [DATA] r.
Sąd Apelacyjny w Warszawie
II Wydział Karny
za pośrednictwem
Sądu Okręgowego Warszawa – Praga w Warszawie
V Wydział Karny

adw. [FIKCYJNE DANE Z WYTYCZNYCH]
Kancelaria Adwokacka w Warszawie,
obrońca oskarżonego [IMIĘ I NAZWISKO]
sygn. akt: V K [NUMER]

APELACJA
od wyroku Sądu Okręgowego Warszawa – Praga w Warszawie, V Wydział Karny
z dnia [DATA] r. (sygn. akt V K [NUMER]),
który wraz z uzasadnieniem doręczony został obrońcy w dniu [DATA].

Jako ustanowiony w sprawie obrońca oskarżonego [X] (upoważnienie do obrony w aktach sprawy), na podstawie art. 444 § 1 k.p.k. w zw. z art. 425 § 1 i 2 k.p.k., zaskarżam wyrok Sądu Okręgowego Warszawa – Praga w Warszawie, V Wydział Karny z dnia [...] r., wydany w sprawie o sygn. akt V K [...], w całości na korzyść oskarżonego [X].`,
    pitfalls: [
      "Adresowanie apelacji bezpośrednio do sądu II instancji z pominięciem sądu I instancji.",
      "Użycie zwrotu 'naruszenie przepisów' (z k.p.c.) zamiast k.p.k.-owskiego terminu 'OBRAZA PRZEPISÓW'!",
      "Zarzucanie uchybienia sędziemu personalnie ('zarzucam sędziemu') zamiast wyrokowi ('zaskarżonemu wyrokowi zarzucam').",
      "Podpisywanie apelacji własnym nazwiskiem zamiast fikcyjnymi danymi adwokata z zadania.",
    ],
    snRulingQuotes: [
      {
        court: "Postanowienie SN z 7 października 2020 r., sygn. akt IV KS 24/20",
        thesis: "Zgodnie z art. 86 § 1 k.p.k. obrońca może przedsiębrać czynności procesowe jedynie na korzyść oskarżonego. Środek odwoławczy werbalnie deklarujący zaskarżenie na korzyść, lecz o innym w istocie kierunku, jest niedopuszczalny.",
      },
      {
        court: "Wyrok SN z 6 lutego 2019 r., sygn. akt II KK 178/18",
        thesis: "Przyzwolenie na uzupełnienie przez stronę apelacji w postaci rozszerzenia zakresu zaskarżenia i podniesienia nowych zarzutów po upływie terminu z art. 445 § 1 k.p.k. byłoby swoistym obejściem terminu zawitego.",
      },
    ],
    fullSummary:
      "Rozdział 2 stanowi fundament każdego petitum apelacji. Autorka drobiazgowo omawia 5 podstawowych wymogów formalnych: właściwość sądu, obliczanie 14-dniowego terminu (w tym art. 123 § 3 k.p.k. dot. sobót), legitymację podmiotową obrońcy, precyzyjne przywołanie podstaw prawnych wniesienia (art. 444 § 1 w zw. z art. 425 § 1 i 2 k.p.k.) oraz wymóg załączenia odpowiedniej liczby odpisów (art. 446 § 2 k.p.k. w zw. z art. 140 k.p.k.).",
  },
  {
    id: "rozdzial-3",
    chapterNumber: 3,
    title: "Rozdział 3: Kierunek i zakres zaskarżenia wyroku",
    subtitle: "Zaskarżenie w całości vs w części, horyzontalna prawomocność i gravamen",
    keyRules: [
      "Kierunek zaskarżenia dla obrońcy: WYŁĄCZNIE NA KORZYŚĆ oskarżonego (art. 86 § 1 k.p.k.).",
      "Zakres 'w całości': zaskarżenie wyroku 'w całości' oznacza kwestionowanie winy za dany czyn oraz wszystkich konsekwencji prawnokarnych (art. 447 § 1 k.p.k.). Nie ma potrzeby pisać 'w całości co do winy' – samo 'w całości' wystarcza!",
      "Zakres 'w części': odnosi się wyłącznie do KARY, ŚRODKÓW KARNYCH lub KOMPENSACYJNYCH, a NIE do jednostek redakcyjnych (punktów sentencji) wyroku! (art. 447 § 2 i 3 k.p.k.).",
      "Kardynalny błąd zaskarżenia 'w części': Jeśli zaskarżysz wyrok 'w części co do pkt 1 wyroku', sąd odwoławczy uzna, że NIE KWESTIONUJESZ WINY za ten czyn, co wywołuje horyzontalną prawomocność co do winy i pozbawia klienta kontroli instancyjnej sprawstwa!",
      "Wieloczynowość w wyroku: Jeśli wyrok obejmuje 3 czyny, zakres określamy ODRĘBNIE dla każdego czynu, np.: 'w odniesieniu do czynu z pkt 1 zaskarżam wyrok w całości, zaś co do czynu z pkt 2 zaskarżam wyrok w części orzeczenia o karze'.",
      "Środki kompensacyjne i przepadek: kwestionowanie wartości szkody lub mienia to kwestionowanie winy, jeśli od tej wartości zależy kwalifikacja prawna (post. SN I KR 116/85).",
    ],
    formula: `w odniesieniu do czynu przypisanego w pkt I wyroku – zaskarżam to rozstrzygnięcie w całości na korzyść oskarżonego [X],
zaś w odniesieniu do czynu przypisanego w pkt II wyroku – zaskarżam to rozstrzygnięcie w części orzeczenia o karze na korzyść oskarżonego [X].`,
    pitfalls: [
      "Zaskarżenie wyroku 'w części co do pkt 1 i 2 wyroku' przy zamiarze walki o uniewinnienie – katastrofalny błąd zamykający badanie winy!",
      "Pominięcie wskazania kierunku zaskarżenia ('na korzyść oskarżonego').",
      "Skarżenie rozstrzygnięć na niekorzyść współoskarżonych (brak gravamen - art. 425 § 3 k.p.k.).",
    ],
    snRulingQuotes: [
      {
        court: "Wyrok SA w Warszawie z 26 lutego 2018 r., sygn. akt II AKa 445/17",
        thesis: "Częściowe zaskarżenie wyroku co do kary skutkuje tzw. horyzontalną prawomocnością wyroku, a tym samym rozstrzygnięcie co do winy co do zasady nie podlega kontroli odwoławczej.",
      },
      {
        court: "Postanowienie SN z 12 kwietnia 2018 r., sygn. akt II KK 422/17",
        thesis: "Zgodnie z art. 447 § 3 k.p.k. apelację co do środka karnego uważa się za zwróconą przeciwko całości rozstrzygnięcia o środkach karnych.",
      },
    ],
    fullSummary:
      "Autorka wyjaśnia mechanizm działania art. 447 k.p.k. i pułapkę horyzontalnej prawomocności. Zaskarżenie wyroku w części co do kary i środków karnych bezwzględnie zamyka sądowi II instancji drogę do badania winy (poza art. 433 § 1 in fine). W sprawach wieloczynowych zdający musi rozbić zakres zaskarżenia na poszczególne czyny przypisane.",
  },
  {
    id: "rozdzial-6",
    chapterNumber: 6,
    title: "Rozdział 6: Względne i bezwzględne przyczyny odwoławcze",
    subtitle: "Gradacja ważności zarzutów, art. 439 § 1 k.p.k. oraz podział z art. 438 k.p.k.",
    keyRules: [
      "Gradacja ważności: Zarzuty z art. 439 § 1 k.p.k. stawia się ZAWSZE na pierwszym miejscu w petitum apelacji.",
      "Zaraz po zarzucie bezwzględnym stosujemy formułę ostrożnościową: 'niezależnie od dostrzeżenia ww. bezwzględnej przyczyny odwoławczej z art. ..., zaskarżonemu rozstrzygnięciu zarzucam nadto obrazę...'.",
      "Brak wymogu wykazywania wpływu przy art. 439 § 1 k.p.k.: uchybienia te powodują uchylenie wyroku z mocy samego prawa, bez konieczności badania wpływu na treść rozstrzygnięcia (wyrok SN II KK 99/11).",
      "Kolejność zarzutów względnych (art. 438 k.p.k.): (1) obraza prawa materialnego (pkt 1 i 1a), (2) obraza przepisów postępowania (pkt 2) oraz błąd w ustaleniach faktycznych (pkt 3), (3) rażąca niewspółmierność kary i środków (pkt 4).",
      "Zarzut z art. 439 § 1 pkt 9 k.p.k.: nie powołujemy go abstrakcyjnie, lecz ZAWSZE w zw. z konkretnym przepisem art. 17 § 1 pkt 5, 6, 8-11 k.p.k. (np. przedawnienie = art. 17 § 1 pkt 6 k.p.k. w zw. z art. 439 § 1 pkt 9 k.p.k.).",
      "Niezmienność składu sądu (art. 439 § 1 pkt 2 k.p.k.): w procesie karnym skład sędziowski i ławniczy musi być identyczny na każdym terminie rozprawy i na ogłoszeniu wyroku!",
    ],
    formula: `I. Na podstawie art. 427 § 2 k.p.k. w zw. z art. 439 § 1 pkt 4 k.p.k. zaskarżonemu wyrokowi zarzucam obrazę art. 25 § 1 pkt 1 k.p.k., polegającą na wydaniu orzeczenia przez Sąd Rejonowy w sprawie, która według właściwości rzeczowej podlegała rozpoznaniu w I instancji przez Sąd Okręgowy (zbrodnia z art. 280 § 2 k.k.), co stanowi bezwzględną przyczynę odwoławczą.

II. Niezależnie od dostrzeżenia ww. bezwzględnej przyczyny odwoławczej, zaskarżonemu wyrokowi zarzucam nadto:
1. na podstawie art. 427 § 2 k.p.k. w zw. z art. 438 pkt 2 k.p.k. obrazę przepisów postępowania, mającą wpływ na treść orzeczenia, tj. art. 7 k.p.k. w zw. z art. 410 k.p.k...`,
    pitfalls: [
      "Wykazywanie wpływu na treść wyroku przy zarzucie bezwzględnym z art. 439 § 1 k.p.k. (błąd warsztatowy!).",
      "Poprzestanie wyłącznie na zarzucie z art. 439 § 1 k.p.k. na kolokwium – jeśli sprawdzający nie podzielą bezwzględnej przyczyny, praca bez zarzutów z art. 438 k.p.k. otrzyma ocenę niedostateczną!",
      "Mylenie pojęć braku skargi uprawnionego oskarżyciela (art. 17 § 1 pkt 9) z brakiem wniosku o ściganie (art. 17 § 1 pkt 10).",
    ],
    snRulingQuotes: [
      {
        court: "Wyrok SN z 31 sierpnia 2011 r., sygn. akt II KK 99/11",
        thesis: "Stwierdzenie jednej z przyczyn bezwzględnych z art. 439 § 1 k.p.k. nie tylko nie zobowiązuje, ale nawet nie zezwala na badanie możliwości wpływu tej wadliwości na treść orzeczenia. Możliwość takiego wpływu jest zakładana z mocy samego prawa.",
      },
      {
        court: "Wyrok SN z 18 listopada 2021 r., sygn. akt V KK 350/21",
        thesis: "Wniesienie aktu oskarżenia przez organ nieuprawniony stanowi negatywną przesłankę procesową w postaci braku skargi uprawnionego oskarżyciela (art. 17 § 1 pkt 9 k.p.k.), skutkującą bezwzględnym uchyleniem orzeczenia i umorzeniem postępowania.",
      },
    ],
    fullSummary:
      "Rozdział szczegółowo omawia wszystkie 11 bezwzględnych przyczyn odwoławczych z art. 439 § 1 k.p.k. z uwzględnieniem orzecznictwa SN (iudex inhabilis art. 40, delegacje sędziowskie, nienależyta obsada, zbrodnie w sądzie rejonowym, sprzeczność sentencji uniemożliwiająca wykonanie, kara nieznana ustawie).",
  },
  {
    id: "rozdzial-7",
    chapterNumber: 7,
    title: "Rozdział 7: Obraza prawa materialnego i zakaz zarzutów mieszanych",
    subtitle: "Art. 438 pkt 1 i 1a k.p.k., teoria pierwotnego uchybienia i formuła ewentualna",
    keyRules: [
      "Żelazna reguła obrazy prawa materialnego (art. 438 pkt 1 k.p.k.): zarzut ten można postawić WYŁĄCZNIE przy niekwestionowanym, prawidłowo ustalonym stanie faktycznym!",
      "Konstrukcja 2-członowa: zarzut materialny składa się ze wskazania: (1) sposobu obrazy (błędna wykładnia albo niewłaściwe zastosowanie / niezastosowanie) + (2) na czym dokładnie obraza polega.",
      "Zalecana formuła samokontrolna: autorka rekomenduje wpisywanie do zarzutu słów 'przy prawidłowo ustalonym stanie faktycznym', co zmusza zdającego do sprawdzenia, czy nie kwestionuje faktów.",
      "Niedopuszczalność zarzutów mieszanych (Rozdział 7.4): NIE WOLNO stawiać obok siebie zarzutu z art. 438 pkt 1 k.p.k. i zarzutu z art. 438 pkt 2 lub 3 k.p.k. co do tej samej okoliczności. Jeśli sąd błędnie ocenił dowód (art. 7 k.p.k.), to błąd materialny jest tylko jego skutkiem!",
      "Dopuszczalna konstrukcja zarzutu ewentualnego: zarzut obrazy prawa materialnego można postawić obok zarzutów dowodowych TYLKO z zastrzeżeniem: 'z ostrożności procesowej – na wypadek nieuwzględnienia zarzutów z pkt I...'.",
      "Art. 438 pkt 1a k.p.k. (inna obraza prawa materialnego): dotyczy np. środków karnych lub przepadku. Wymaga wykazania, że na skutek obrazy 'orzeczenie nie odpowiada prawu'.",
      "Instytucje fakultatywne (art. 69 k.k., art. 60 § 2 k.k., art. 37a k.k.): ich niezastosowanie NIGDY nie stanowi obrazy prawa materialnego! Kwestionuje się je przez art. 438 pkt 3 lub pkt 4 k.p.k.",
    ],
    formula: `na podstawie art. 427 § 2 k.p.k. w zw. z art. 438 pkt 1 k.p.k. zaskarżonemu wyrokowi zarzucam:
obrazę prawa materialnego, tj. art. 280 § 2 k.k., poprzez jego błędną wykładnię polegającą na wadliwym uznaniu, przy prawidłowo ustalonym stanie faktycznym, że poduszka stanowi przedmiot podobnie niebezpieczny do broni palnej lub noża w rozumieniu tego przepisu;

[LUB FORMULARZ EWENTUALNY]:
z ostrożności procesowej – na wypadek nieuwzględnienia zarzutów obrazy przepisów postępowania i błędu w ustaleniach faktycznych podniesionych w pkt I i II:
na podstawie art. 427 § 2 k.p.k. w zw. z art. 438 pkt 1 k.p.k. zaskarżonemu wyrokowi zarzucam obrazę prawa materialnego, tj. art. 25 § 1 k.k., poprzez jego niezastosowanie...`,
    pitfalls: [
      "Postawienie w apelacji zarzutu: 'obraza art. 157 § 1 k.k. polegająca na błędnym ustaleniu, że oskarżony uderzył pokrzywdzonego' – błąd dyskwalifikujący!",
      "Jednoczesne zarzucenie braku winy (art. 7 k.p.k.) oraz obrazy art. 280 k.k. bez zastrzeżenia ewentualnego.",
      "Stawianie zarzutu obrazy prawa materialnego przy instytucjach fakultatywnych (np. art. 69 k.k. – zawieszenie kary).",
    ],
    snRulingQuotes: [
      {
        court: "Wyrok SA w Krakowie z 21 maja 2014 r., sygn. akt II AKa 79/14",
        thesis: "W razie oparcia apelacji na zarzutach mieszanych, jako podstawę skargi należy podawać zarzut pierwotny, a nie wtórny stanowiący pochodną pierwotnego. Nie jest właściwe powołanie kilku zarzutów, gdy jeden z nich jest konsekwencją drugiego.",
      },
      {
        court: "Wyrok SA w Warszawie z 24 listopada 2020 r., sygn. akt II AKa 103/20",
        thesis: "Prawidłowo skonstruowana apelacja wyłącza możliwość formułowania zarzutów mieszanych w odniesieniu do tej samej okoliczności.",
      },
      {
        court: "Postanowienie SN z 16 października 2020 r., sygn. akt I KK 29/19",
        thesis: "Obraza prawa materialnego polega na jego wadliwym zastosowaniu lub niezastosowaniu w orzeczeniu, które oparte jest na trafnych i niekwestionowanych ustaleniach faktycznych.",
      },
    ],
    fullSummary:
      "Rozdział 7 to serce podręcznika adw. Tomkiewicz-Januszewskiej. Wyczerpująco wyjaśnia, dlaczego łączenie błędu materialnego z dowodowym bez formuły ewentualnej jest błędem kardynalnym. Przedstawia koncepcję pierwotnego uchybienia oraz regułę poszukiwania fazy procesu myślowego sądu.",
  },
  {
    id: "rozdzial-8",
    chapterNumber: 8,
    title: "Rozdział 8: Prawidłowa konstrukcja wniosków apelacji",
    subtitle: "Art. 437 § 1 i 2 k.p.k., prymat reformatoryjności, zakaz ne peius i wnioski dowodowe",
    keyRules: [
      "Prymat orzekania reformatoryjnego: Zasadą po nowelizacji art. 437 § 2 k.p.k. jest ZMIANA orzeczenia co do istoty przez sąd II instancji (uniewinnienie lub obniżenie kary).",
      "Uchylenie i przekazanie do ponownego rozpoznania (kasatoryjność) jest wyjątkiem dopuszczalnym TYLKO w 3 sytuacjach: (1) art. 439 § 1 k.p.k., (2) zakaz ne peius z art. 454 § 1 k.p.k., (3) konieczność przeprowadzenia na nowo przewodu w całości.",
      "Wniosek o uniewinnienie przy braku znamion: wynika z art. 414 § 1 zd. 2 k.p.k. – po otwarciu przewodu sądowego przy braku znamion lub czynu sąd wydaje wyrok UNIEWINNIAJĄCY, a nie umarzający!",
      "Wniosek przy przedawnieniu (art. 17 § 1 pkt 6 k.p.k.): wnosimy o UCHYLENIE zaskarżonego orzeczenia i UMORZENIE postępowania.",
      "Zbędne wnioski o środki karne: wnosząc o uniewinnienie w całości, wniosek o uchylenie zakazu prowadzenia pojazdów lub naprawienia szkody jest zbędny – ulega skonsumowaniu we wniosku głównym.",
      "Zbędny wniosek o uchylenie kary łącznej: sąd odwoławczy uchyla karę łączną z urzędu w razie modyfikacji kary jednostkowej (wyrok SN III KO 78/11).",
      "Nowe dowody w apelacji (art. 427 § 3 i 452 § 2 k.p.k.): wnosimy na podstawie art. 167 w zw. z art. 458 k.p.k. wskazując, dlaczego dowód nie mógł być powołany przed sądem I instancji.",
      "Ponowienie wniosków oddalonych: jeśli sąd I instancji oddalił wniosek dowodowy, stawiamy zarzut z art. 170 § 1 k.p.k. oraz ponawiamy wniosek w apelacji na podstawie art. 167 w zw. z art. 458 k.p.k.",
    ],
    formula: `Mając na uwadze powyższe zarzuty, na podstawie art. 427 § 1 k.p.k. w zw. z art. 437 § 1 i 2 k.p.k. wnoszę o:
1. zmianę zaskarżonego wyroku w całości i uniewinnienie oskarżonego [X] od przypisanego mu czynu;

ewentualnie (na wypadek nieuwzględnienia wniosku o uniewinnienie):
2. zmianę zaskarżonego wyroku w części dotyczącej orzeczenia o karze poprzez wymierzenie oskarżonemu kary pozbawienia wolności w łagodniejszym wymiarze z warunkowym zawieszeniem jej wykonania;

ewentualnie (w razie uznania konieczności powtórzenia przewodu w całości):
3. uchylenie zaskarżonego wyroku i przekazanie sprawy Sądowi Rejonowemu w Bydgoszczy do ponownego rozpoznania.`,
    pitfalls: [
      "Wnoszenie o uchylenie wyroku i przekazanie do ponownego rozpoznania przy zwykłym zarzucie art. 7 k.p.k. (sprzeczne z art. 437 § 2 zd. 2 k.p.k.!).",
      "Sformułowanie wniosku o samo uchylenie wyroku bez wskazania, czy postępowanie ma być umorzone, czy przekazane do ponownego rozpoznania.",
      "Brak symetrii i spójności pomiędzy zarzutami a wnioskami apelacyjnymi.",
    ],
    snRulingQuotes: [
      {
        court: "Wyrok SN z 12 czerwca 2019 r., sygn. akt IV KS 15/19",
        thesis: "Istota reformatoryjnego orzekania w II instancji w sprawach karnych polega na tym, że skoro dowody można uzupełnić na rozprawie odwoławczej, to należy z tej możliwości skorzystać. Orzeczenia kasatoryjne to wyjątek.",
      },
      {
        court: "Uchwała SN 7 sędziów z 22 maja 2019 r., sygn. akt I KZP 3/19",
        thesis: "Konieczność przeprowadzenia na nowo przewodu w całości zachodzi tylko wówczas, gdy naruszenie przepisów prawa procesowego podważa rzetelność całego postępowania pierwszoinstancyjnego.",
      },
    ],
    fullSummary:
      "Rozdział 8 przedstawia zasady redagowania wniosków końcowych. Po 2015 r. regułą jest orzekanie reformatoryjne. Wnoszenie o uchylenie i przekazanie do ponownego rozpoznania przy uchybieniach dowodowych jest błędem na kolokwium.",
  },
  {
    id: "rozdzial-9",
    chapterNumber: 9,
    title: "Rozdział 9: Najczęstsze zarzuty i zagadnienia z orzecznictwa SN i SA",
    subtitle: "Art. 7 k.p.k., art. 5 § 2, dowód z pomówienia, biegli art. 193/201, zamiar i art. 399 k.p.k.",
    keyRules: [
      "Zasady procesowe (art. 2 § 2, art. 4 k.p.k.): NIE MOGĄ stanowić samodzielnej podstawy zarzutu apelacyjnego!",
      "Zarzut z art. 7 k.p.k. (3 elementy konstrukcyjne): (1) co zrobił sąd, (2) jak być powinno prawidłowo (zgodnie z logiką, wiedzą, doświadczeniem), (3) jaki konkretny wpływ miało to na treść wyroku (konkretny błędny fakt).",
      "W zarzucie procesowym NIGDY nie piszemy: 'poprzez jego błędne zastosowanie'!",
      "Dowód z pomówienia (współoskarżony / mały świadek koronny) – 7 kryteriów oceny: czy przyznane przez pomówionego, potwierdzone innymi dowodami, spontaniczne, od osoby bezstronnej, konsekwentne, od osoby nieposzlakowanej, czy pomawiający sam się obciąża.",
      "Art. 5 § 2 a art. 7 k.p.k. – ZARZUTY ROZŁĄCZNE! Nigdy nie łączymy ich co do tego samego dowodu. Art. 5 § 2 to wątpliwości SĄDU (powzięte i nierozstrzygnięte na korzyść), a nie wątpliwości obrońcy.",
      "Zamiar sprawcy (art. 9 k.k.) to FAKT PSYCHICZNY (art. 438 pkt 3 k.p.k.), a NIE ocena prawnomaterialna! Kwestionuje się go zarzutem błędu w ustaleniach faktycznych.",
      "Opinie biegłych: art. 193 § 1 k.p.k. (gdy sąd orzeka sam bez biegłego o wiadomościach specjalnych) vs art. 201 k.p.k. (gdy opinia już jest, ale jest niepełna, niejasna lub wewnętrznie sprzeczna).",
      "Art. 53 i 115 § 2 k.k.: sądowe dyrektywy wymiaru kary i ocena społecznej szkodliwości to zarzut rażącej niewspółmierności kary (art. 438 pkt 4 k.p.k.), a NIE obrazy prawa materialnego!",
      "Art. 399 § 1 i 2 k.p.k.: brak uprzedzenia o zmianie kwalifikacji na niekorzyść narusza prawo do obrony (art. 6 k.p.k.), ale z uwagi na art. 437 § 2 zd. 2 k.p.k. sam w sobie nie wystarcza do uchylenia wyroku – podnosi się go w uzasadnieniu apelacji.",
    ],
    formula: `na podstawie art. 427 § 2 k.p.k. w zw. z art. 438 pkt 2 k.p.k. zaskarżonemu wyrokowi zarzucam:
obrazę przepisów postępowania, mającą wpływ na treść orzeczenia, tj. art. 7 k.p.k. w zw. z art. 410 k.p.k., poprzez dowolną, sprzeczną z zasadami doświadczenia życiowego oraz logiki ocenę dowodu z zeznań świadka [A], polegającą na bezkrytycznym uznaniu ich za wiarygodne, podczas gdy świadek ten był silnie skonfliktowany z oskarżonym, a jego relacja pozostaje w rażącej sprzeczności z obiektywnym zapisem monitoringu, co doprowadziło do błędnego ustalenia, że oskarżony [X] zadał cios pokrzywdzonemu;`,
    pitfalls: [
      "Stawianie zarzutu z art. 5 § 2 k.p.k. razem z art. 7 k.p.k. co do tego samego dowodu.",
      "Ogólnikowy opis wpływu: 'co doprowadziło do niesłusznego skazania oskarżonego' – sprawdzający kolokwium wymagają wskazania konkretnego błędnego faktu!",
      "Formułowanie zarzutu obrazy prawa materialnego wobec zamiaru sprawcy (np. brak zamiaru zabójstwa to błąd w ustaleniach faktycznych, nie art. 438 pkt 1 k.p.k.).",
    ],
    snRulingQuotes: [
      {
        court: "Wyrok SN z 7 maja 2020 r., sygn. akt V KK 49/20",
        thesis: "Niemożliwym jest jednoczesne zarzucenie uchybienia przepisom art. 7 k.p.k. i art. 5 § 2 k.p.k. Zarzuty te mają charakter rozłączny.",
      },
      {
        court: "Wyrok SA w Łodzi z 5 grudnia 2012 r., sygn. akt II AKa 199/12",
        thesis: "Dowód z pomówienia jest dowodem szczególnym, którego przeprowadzenie wymaga ponadprzeciętnej skrupulatności i zbadania m.in. bezstronności, spontaniczności i czy pomawiający sam się obciąża.",
      },
      {
        court: "Wyrok SN z 4 kwietnia 2011 r., sygn. akt III KK 280/10",
        thesis: "Zamiar oznacza zjawisko obiektywnej rzeczywistości, realny przebieg procesów psychicznych. Ustalenie zamiaru jest więc ustaleniem natury faktycznej (art. 438 pkt 3 k.p.k.).",
      },
    ],
    fullSummary:
      "Rozdział 9 to praktyczny przewodnik po najczęstszych problemach procesowych. Omawia relację art. 7 do art. 5 § 2 k.p.k., 7 kryteriów dowodu z pomówienia, kwestionowanie zamiaru sprawcy, granice oskarżenia (art. 399 k.p.k.) oraz zarzuty wobec opinii biegłych.",
  },
  {
    id: "rozdzial-10",
    chapterNumber: 10,
    title: "Rozdział 10: Metodyka czytania akt na kolokwium z procesu karnego",
    subtitle: "4-krokowy algorytm analizy akt kolokwialnych adw. Tomkiewicz-Januszewskiej",
    keyRules: [
      "KROK 1: Akta ZACZYNAMY CZYTAĆ OD WYROKU (samej sentencji): szukamy braków kompletu znamion (np. brak 'w celu osiągnięcia korzyści majątkowej' w oszustwie), przekroczenia granic kary, orzeczenia przepadku bez podstawy, przedawnienia karalności oraz trybu ścigania (wnioskowy/prywatny).",
      "KROK 2: Porównujemy opis czynu w wyroku z aktem oskarżenia: sprawdzamy, czy nie doszło do zmiany kwalifikacji na niekorzyść (art. 399 § 1 k.p.k.) oraz czy akt oskarżenia wniósł uprawniony oskarżyciel (art. 55 § 1 k.p.k., termin miesięczny).",
      "KROK 3: Czytamy uzasadnienie wyroku: zaznaczamy fakty i dowody ustalone niekorzystnie dla klienta. Sprawdzamy motywację sądu – czy ocena odpowiada art. 7 k.p.k. i czy nie pominięto dowodów przeciwnych (art. 410 k.p.k.).",
      "KROK 4: Czytamy akta sprawy chronologicznie: weryfikujemy protokoły rozpraw pod kątem bezwzględnych przyczyn z art. 439 § 1 k.p.k. (niezmienność składu sądu, prawidłowość zawiadomień, obecność obrońcy obligatoryjnego).",
    ],
    pitfalls: [
      "Czytanie akt od karty 1 zamiast od wyroku – strata czasu i rozproszenie na drugorzędne szczegóły!",
      "Pominięcie kontroli sentencji wyroku pod kątem kompletu znamion (dekompletacja znamion to natychmiastowe uniewinnienie!).",
      "Niesprawdzenie protokołów rozpraw pod kątem obecności tego samego składu sędziowskiego na każdym posiedzeniu.",
    ],
    snRulingQuotes: [
      {
        court: "Wyrok SN z 1 października 2014 r., sygn. akt II KK 69/14",
        thesis: "To, za co oskarżeni zostali skazani, musi wynikać z treści wyroku i nie może być odczytywane z akt sprawy i treści aktu oskarżenia.",
      },
      {
        court: "Wyrok SN z 6 kwietnia 2017 r., sygn. akt V KK 372/16",
        thesis: "Brak w opisie czynu przypisanego znamienia ustawowego skutkuje niemożnością przypisania odpowiedzialności karnej i przy apelacji na korzyść wymusza uniewinnienie oskarżonego.",
      },
    ],
    fullSummary:
      "Autorka przedstawia sprawdzony algorytm pracy z aktami na kolokwium. Zamiast czytać tom akt od początku, profesjonalista zaczyna od sentencji wyroku, weryfikuje znamiona i kary, porównuje ze skargą, analizuje uzasadnienie i dopiero wtedy weryfikuje protokoły pod kątem uchybień bezwzględnych.",
  },
];
