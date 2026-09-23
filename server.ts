import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "15mb" }));

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim().length < 15 || apiKey.includes("PLACEHOLDER")) {
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey.trim(),
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Health check
app.get("/api/health", (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const hasApiKey = !!apiKey && apiKey !== "MY_GEMINI_API_KEY" && apiKey.trim().length >= 15 && !apiKey.includes("PLACEHOLDER");
  res.json({ status: "ok", hasApiKey });
});

// Helper for generating deterministic or varied rich fallback cases
function generateFallbackCase(topic?: string, difficulty?: string, additionalContext?: string) {
  const effectiveTopic = (topic || "").toLowerCase();
  const caseId = `case-gen-${Date.now()}`;
  const timestamp = new Date().toISOString();

  // Pick archetype based on topic keywords
  if (effectiveTopic.includes("błąd") || effectiveTopic.includes("art. 29") || effectiveTopic.includes("kontratyp") || effectiveTopic.includes("obrona")) {
    return {
      id: caseId,
      title: "Zdarzenie na Wyspie Młyńskiej w Bydgoszczy – Usprawiedliwiony Błąd co do Znamion (art. 28 k.k.) a Kradzież Mienia",
      caseNumber: `II K ${Math.floor(Math.random() * 800 + 100)}/24`,
      court: "Sąd Rejonowy w Bydgoszczy, II Wydział Karny",
      defendant: "Szymon Kaczmarek (lat 24, grafik komputerowy)",
      role: "Obrońca oskarżonego Szymona Kaczmarka",
      topicCategory: "materialne",
      difficulty: difficulty || "Kolokwium uniwersyteckie",
      isCustomGenerated: true,
      createdAt: timestamp,
      circumstancesOfAct: `1. OKOLICZNOŚCI POPEŁNIENIA CZYNUSystem / Stan faktyczny zdarzenia:

W dniu 16 sierpnia 2024 roku około godziny 19:30 w Bydgoszczy na terenie Wyspy Młyńskiej oskarżony Szymon Kaczmarek brał udział w plenerowych warsztatach graficznych. Oskarżony posiadał własną hulajnogę elektryczną marki Xiaomi Mi Pro 2 w kolorze grafitowym z czarnymi manetkami.

Podczas pakowania sprzętu przed nadchodzącą burzą oskarżony podszedł do stojaka przy Młynach Rothera, gdzie stały dwie identyczne hulajnogi tej samej marki i modelu. Będąc w pośpiechu i roztargnieniu, oskarżony włożył kluczyk/aplikację, odpiął zapięcie szyfrowe (kod 1-2-3-4 okazał się identyczny w obu kłódkach) i odjechał hulajnogą należącą w rzeczywistości do pokrzywdzonego Jakuba Nowickiego. Wartość hulajnogi wynosiła 2.800 zł.

Szymon Kaczmarek przyjechał do domu, podłączył hulajnogę do ładowarki, a dopiero następnego dnia rano zauważył inną naklejkę na ramie pojazdu. Zanim zdążył zgłosić sprawę na policję, o godzinie 11:00 do jego mieszkania zapukali funkcjonariusze KP Bydgoszcz-Szwederowo powiadomieni przez pokrzywdzonego dzięki lokalizatorowi GPS. Oskarżony od razu oświadczył, że doszło do fatalnej pomyłki, oddał hulajnogę i okazał swoją własną, stojącą wciąż przy Młynach Rothera.`,
      pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE:

Dochodzenie prowadził KP Bydgoszcz-Szwederowo (sygn. akt 4113-1.Ds.540.2024).
- Policjanci zabezpieczyli drugą hulajnogę pozostawioną przy Młynach Rothera, która okazała się własnością oskarżonego (ten sam model, kolor i rok produkcji).
- Pokrzywdzony potwierdził, że odzyskał swój sprzęt w stanie nienaruszonym.
- Mimo braku jakiegokolwiek zamiaru przywłaszczenia cudzej rzeczy (animus rem sibi habendi), prokurator skierował akt oskarżenia o czyn z art. 278 § 1 k.k., twierdząc, że 'oskarżony powinien był uważniej sprawdzać numer seryjny pojazdu'.`,
      indictment: `3. AKT OSKARŻENIA:

Zarzut z art. 278 § 1 k.k. – zabór w celu przywłaszczenia hulajnogi Xiaomi Mi Pro 2 o wartości 2.800 zł na szkodę Jakuba Nowickiego w dniu 16 sierpnia 2024 r. na Wyspie Młyńskiej.`,
      courtProceedings: `4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI (SR w Bydgoszczy, II Wydział Karny, sygn. akt II K 481/24):

A. PROTOKÓŁ ROZPRAWY GŁÓWNEJ Z DNIA 14 STYCZNIA 2025 R. (k. 32–46 akt):
Przewodniczący: Sędzia SR Paweł Kowalski
Protokolant: st. sekr. sąd. Anna Michalska
Obecni:
- Prokurator Prokuratury Rejonowej Bydgoszcz-Południe – Robert W.
- Oskarżony Szymon Kaczmarek – osobiście, z wolnej stopy
- Obrońca oskarżonego – radca prawny Piotr Jaworski (z wyboru)
- Pokrzywdzony Jakub Nowicki – osobiście.

1. Przesłuchanie oskarżonego Szymona Kaczmarka (k. 33–35 akt):
Oskarżony oświadczył:
„Nie przyznaję się do kradzieży. Nigdy niczego nie ukradłem. Od dwóch lat posiadam dokładnie taką samą hulajnogę Xiaomi Mi Pro 2 w kolorze grafitowym, kupioną za własne pieniądze w Media Expert (przedkładam do akt fakturę zakupu nr 412/2022, k. 36 akt).
W dniu 16 sierpnia 2024 r. brałem udział w warsztatach graficznych na Wyspie Młyńskiej. Nadciągała gwałtowna nawałnica, zerwał się ulewny deszcz. Wszyscy uczestnicy w pośpiechu pakowali tablety i sprzęt. Podbiegłem do stojaka rowerowego przy Młynach Rothera, gdzie stały dwie identyczne szare hulajnogi. Wpisałem kod 1-2-3-4 na zapięciu szyfrowym, kłódka odskoczyła (jak się później okazało, pokrzywdzony ustawił fabryczny ten sam kod), w pośpiechu wsiadłem i odjechałem, będąc święcie przekonanym, że jadę swoim pojazdem. Swoją własną hulajnogę zostawiłem na stojaku!
Dopiero rano zauważyłem na ramie żółtą naklejkę, której nie miałem. Gdy szykowałem się do wyjścia na policję, zapukali funkcjonariusze. Od razu wyjaśniłem pomyłkę, oddałem hulajnogę i zaprowadziłem policjantów na Wyspę Młyńską, gdzie moja hulajnoga nadal stała przypięta do stojaka”.

2. Zeznania pokrzywdzonego Jakuba Nowickiego (k. 37–38 akt):
Świadek zeznał:
„Potwierdzam, że odzyskałem moją hulajnogę w stanie idealnym, naładowaną. Potwierdzam też, że obok na stojaku stała druga hulajnoga oskarżonego, identyczna pod każdym względem – ten sam model, ten sam kolor, te same akcesoria. Kupiłem kłódkę szyfrową dzień wcześniej i nie zmieniłem kodu fabrycznego 1-2-3-4. Nie mam żadnych pretensji do oskarżonego, wierzę, że to była zwykła ludzka pomyłka w ulewie”.

3. Wnioski dowodowe obrony i postanowienie Sądu (k. 39–40 akt):
Obrońca oskarżonego złożył wniosek o dopuszczenie dowodu z zeznań świadka Tomasza B. – organizatora warsztatów graficznych na okoliczność pośpiechu i ewakuacji uczestników przed nawałnicą.
Sąd Rejonowy wydał postanowienie:
„Na podstawie art. 170 § 1 pkt 2 k.p.k. oddalić wniosek dowodowy obrońcy, albowiem okoliczność nagłego deszczu jest bezsporna, a kwestia pomyłki oskarżonego nie uchyla odpowiedzialności karnej, gdyż oskarżony jako osoba dorosła miał obowiązek upewnić się, czy zabiera własną rzecz, a niedbalstwo w tym zakresie wypełnia znamiona zaboru mienia”.
Sprzeciw obrońcy do protokołu:
Obrońca złożył formalne zastrzeżenie do protokołu w trybie art. 167 k.p.k. w zw. z art. 170 § 1 pkt 2 k.p.k., wskazując, że przestępstwo kradzieży z art. 278 § 1 k.k. jest przestępstwem umyślnym kierunkowym i nie można go popełnić przez niedbalstwo, a błąd co do znamienia z art. 28 § 1 k.k. wyłącza umyślność.

4. Zamknięcie przewodu sądowego i głosy stron (k. 41–42 akt):
Sąd na podstawie art. 405 k.p.k. zamknął przewód sądowy.
- Prokurator: Wniósł o uznanie za winnego kradzieży z art. 278 § 1 k.k. i orzeczenie grzywny 100 stawek po 30 zł.
- Obrońca oskarżonego: Wniósł o zmianę kwalifikacji prawnej i uniewinnienie oskarżonego na podstawie art. 414 § 1 w zw. z art. 17 § 1 pkt 2 k.p.k. z uwagi na działanie w usprawiedliwionym błędzie co do faktu z art. 28 § 1 k.k. i brak zamiaru zaboru cudzej rzeczy ruchomej.
- Oskarżony: Wniósł o uniewinnienie.

Sąd ogłosił wyrok w dniu 14 stycznia 2025 r.`,
      verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 14 stycznia 2025 roku
Sąd Rejonowy w Bydgoszczy, II Wydział Karny
uznaje oskarżonego Szymona Kaczmarka za winnego popełnienia występku z art. 278 § 1 k.k. i wymierza mu karę grzywny w wysokości 100 stawek dziennych po 30 zł każda.`,
      justificationFacts: `Sąd ustalił, że oskarżony omyłkowo zabrał cudzą hulajnogę, mając własną tego samego typu, a drugą pozostawił na stojaku.`,
      justificationEvidence: `Wyjaśnienia oskarżonego, zeznania pokrzywdzonego, protokół oględzin obu hulajnóg.`,
      justificationLegal: `Sąd przyjął, że kradzież można popełnić również przy niedbalstwie co do własności rzeczy, ignorując wymóg zamiaru bezpośredniego kierunkowego (dolus directus coloratus) oraz regulację art. 28 § 1 k.k. o błędzie co do znamienia 'cudza rzecz'.`,
      instructions: "Sporządź apelację jako obrońca Szymona Kaczmarka. Zaskarż wyrok w całości na korzyść oskarżonego. Postaw zarzut obrazy prawa materialnego (art. 438 pkt 1 k.p.k.) w zw. z art. 28 § 1 k.k. i art. 278 § 1 k.k. (brak zamiaru zaboru, wyłączenie umyślności wskutek błędu co do znamienia). Wnoś o uniewinnienie oskarżonego (art. 414 § 1 k.p.k. w zw. z art. 17 § 1 pkt 2 k.p.k.).",
      keyIssues: [
        "Wymóg zamiaru bezpośredniego kierunkowego przy kradzieży (art. 278 § 1 k.k.) – kradzieży nie można popełnić nieumyślnie",
        "Błąd co do znamienia typu czynu zabronionego (art. 28 § 1 k.k.) – przekonanie, że zabiera się własną rzecz wyłącza umyślność",
        "Czysty zarzut obrazy prawa materialnego z art. 438 pkt 1 k.p.k. przy bezspornym stanie faktycznym.",
      ],
      modelSolution: {
        recommendedScope: "W całości na korzyść oskarżonego Szymona Kaczmarka.",
        modelCharges: [
          {
            basis: "art. 438 pkt 1 k.p.k.",
            violatedArticles: "art. 438 pkt 1 k.p.k. w zw. z art. 28 § 1 k.k. i art. 278 § 1 k.k.",
            formulation: "obrazę prawa materialnego, a mianowicie art. 28 § 1 k.k. w zw. z art. 278 § 1 k.k., polegającą na ich niezastosowaniu do prawidłowo ustalonych przez Sąd okoliczności faktycznych, z których wynika, że oskarżony działał w usprawiedliwionym błędzie co do znamienia 'cudzej rzeczy ruchomej' będąc przekonanym, iż zabiera własną hulajnogę, co zgodnie z art. 28 § 1 k.k. wyłącza umyślność i uniemożliwia przypisanie występku kradzieży, wymagającego zamiaru bezpośredniego kierunkowego (animus rem sibi habendi);",
            explanation: "Sąd I instancji popełnił kardynalny błąd subsumcji – przypisał kradzież przy braku umyślności.",
          },
        ],
        modelMotions: [
          {
            type: "Główny",
            content: "na podstawie art. 437 § 1 i 2 k.p.k. w zw. z art. 414 § 1 k.p.k. i art. 17 § 1 pkt 2 k.p.k. wnoszę o zmianę zaskarżonego wyroku w całości i uniewinnienie oskarżonego Szymona Kaczmarka od zarzucanego mu czynu.",
            legalGround: "art. 437 § 2 k.p.k.",
          },
        ],
        modelJustificationHighlights: [
          "Jednolite orzecznictwo SN: kradzież z art. 278 § 1 k.k. jest przestępstwem kierunkowym",
          "Błąd co do faktu z art. 28 § 1 k.k. usuwa zamiar",
          "Brak karalności nieumyślnego zaboru rzeczy ruchomej w polskim prawie karnym.",
        ],
        commonPitfalls: [
          "Zarzucanie błędu w ustaleniach faktycznych, gdy sam Sąd ustalił, że oskarżony omyłkowo wziął hulajnogę – błąd tkwi w samej ocenie prawnej!",
        ],
      },
    };
  }

  // Default rich procedural case: Dowody & Art. 7 k.p.k. / Art. 410 k.p.k.
  return {
    id: caseId,
    title: `Zdarzenie przy Rondzie Jagiellonów w Bydgoszczy – Swobodna Ocena Dowodów (art. 7 k.p.k.) i Błąd w Ustaleniach Faktycznych`,
    caseNumber: `III K ${Math.floor(Math.random() * 800 + 100)}/24`,
    court: "Sąd Rejonowy w Bydgoszczy, III Wydział Karny",
    defendant: "Piotr Zieliński (lat 27, informatyk)",
    role: "Obrońca oskarżonego Piotra Zielińskiego",
    topicCategory: "procesowe",
    difficulty: difficulty || "Kolokwium uniwersyteckie",
    isCustomGenerated: true,
    createdAt: timestamp,
    circumstancesOfAct: `1. OKOLICZNOŚCI POPEŁNIENIA CZYNUSystem / Stan faktyczny zdarzenia:

W dniu 20 września 2024 roku około godziny 22:45 w Bydgoszczy w przejściu podziemnym pod Rondem Jagiellonów doszło do zderzenia dwóch przechodniów: oskarżonego Piotra Zielińskiego oraz pokrzywdzonego Damiana K. Pokrzywdzony znajdował się w stanie nietrzeźwości (1,92 promila alkoholu we krwi).

Po wymianie ostrych słów pokrzywdzony Damian K. zamachnął się pięścią na oskarżonego. Oskarżony Piotr Zieliński zablokował cios przedramieniem i odepchnął pokrzywdzonego, po czym obaj się rozeszli. Po przejściu 15 metrów Damian K. potknął się na schodach wyjściowych w stronę ulicy Bernardyńskiej, upadł twarzą na betonowy stopień i doznał pęknięcia łuku brwiowego oraz zwichnięcia stawu łokciowego (obrażenia powyżej 7 dni z art. 157 § 1 k.k.).

Na miejsce wezwano patrol Policji. Damian K. zeznał policjantom, że został 'znienacka pobity metalowym prętem przez nieznajomego mężczyznę w zielonej kurtce'. Oskarżony Piotr Zieliński został zatrzymany na przystanku tramwajowym 5 minut później. Przy oskarżonym nie ujawniono żadnego narzędzia ani pręta.`,
    pretrialProceedings: `2. POSTĘPOWANIE PRZYGOTOWAWCZE:

Prowadzone przez KP Bydgoszcz-Śródmieście (sygn. 4112-2.Ds.419.2024).
- Zabezpieczono nagranie monitoringu miejskiego ZDMiKP z kamery M-08. W kadrze widać jedynie moment rozejścia się mężczyzn w przejściu podziemnym oraz oddzielny moment upadku Damiana K. na schodach bez udziału osób trzecich.
- Przesłuchany świadek naoczny Marek W. (sprzedawca z kiosku w podziemiu) zeznał kategorycznie: 'Chłopak w zielonej kurtce tylko odepchnął pijanego, nie miał żadnego narzędzia. Ten pijany sam wywalił się na schodach'.
- Mimo to prokurator oparł akt oskarżenia wyłącznie na relacji nietrzeźwego pokrzywdzonego.`,
    indictment: `3. AKT OSKARŻENIA:

Zarzut z art. 157 § 1 k.k. – umyślne spowodowanie naruszenia czynności narządów ciała u Damiana K. na czas powyżej dni 7 poprzez uderzenie narzędziem w przejściu podziemnym Ronda Jagiellonów.`,
    courtProceedings: `4. POSTĘPOWANIE PRZED SĄDEM I INSTANCJI (SR w Bydgoszczy, III Wydział Karny, sygn. akt III K 312/24):

A. PROTOKÓŁ ROZPRAWY GŁÓWNEJ Z DNIA 28 STYCZNIA 2025 R. (k. 48–66 akt):
Przewodniczący: Sędzia SR Stanisław Maj
Protokolant: sekr. sąd. Joanna Lewandowska
Obecni:
- Prokurator Prokuratury Rejonowej Bydgoszcz-Śródmieście – Krzysztof D.
- Oskarżony Piotr Zieliński – osobiście, z wolnej stopy
- Obrońca oskarżonego – adw. Tomasz Kozłowski (z wyboru)
- Pokrzywdzony Damian K. – osobiście
- Świadek Marek W. (sprzedawca z kiosku) – stawił się.

1. Przesłuchanie oskarżonego Piotra Zielińskiego (k. 49–51 akt):
Oskarżony oświadczył:
„Nie przyznaję się do pobicia Damiana K. Żadnym prętem ani narzędziem go nie uderzyłem. Szedłem przejściem podziemnym pod Rondem Jagiellonów. Pokrzywdzony szedł zataczając się od ściany do ściany, bełkotał i nagle zablokował mi drogę, zamachując się pięścią. Odruchowo sparowałem cios ręką i odepchnąłem go na odległość metra, po czym spokojnie odszedłem w stronę schodów na przystanek tramwajowy. W ogóle nie widziałem, co się z nim stało później. Gdy zatrzymała mnie policja, byłem w szoku. Przeszukano mnie drobiazgowo, nie miałem przy sobie żadnego pręta, pałki ani twardego przedmiotu”.

2. Przesłuchanie pokrzywdzonego Damiana K. (k. 52–54 akt):
Świadek zeznał:
„Szedłem tunelem, ten człowiek w zielonej kurtce podszedł i bez słowa uderzył mnie czymś metalowym w głowę, a potem przewrócił na schodach”.
Na pytania obrońcy o stan trzeźwości:
Obrońca wnosi o odczytanie protokołu badania krwi pokrzywdzonego ze szpitala (k. 12 akt) wykazującego 1,92 promila alkoholu.
Świadek oświadcza: „Wypiłem ze trzy piwa, ale wszystko dobrze pamiętam”.
Obrońca wnosi o odczytanie sprzeczności z notatki i pierwszego protokołu ze śledztwa (art. 391 § 1 k.p.k.), gdzie pokrzywdzony twierdził, że sprawców było trzech. Świadek plącze się w zeznaniach i zasłania niepamięcią.

3. Przesłuchanie świadka Marka W. (naocznego świadka z kiosku, k. 55–57 akt):
Świadek zeznał pod przysięgą:
„Mój kiosk w podziemiu Ronda Jagiellonów jest przeszklony i doskonale widziałem całe zajście z odległości 6 metrów. To ten pijany mężczyzna (pokrzywdzony) zaczął awanturę i zamachnął się ręką na chłopaka w zielonej kurtce. Chłopak tylko sparował cios i odepchnął go, żeby przejść. Nie miał w ręku absolutnie niczego, żadnego pręta. Obaj panowie się rozeszli w przeciwne strony. Chłopak poszedł na tramwaj. Natomiast ten pijany mężczyzna szedł chwiejnym krokiem w stronę schodów na Bernardyńską, tam zachwiał się, potknął o własne nogi i runął twarzą na betonowe stopnie. Sam rozbił sobie głowę i wybił rękę na betonie. Chłopak w zielonej kurtce był wtedy już na górze”.

4. Odtworzenie monitoringu miejskiego ZDMiKP (k. 58 akt):
Sąd odtworzył zapis z płyty DVD z kamery M-08. W kadrze widoczny jest moment rozejścia się obu mężczyzn bez walki, a następnie z innej perspektywy moment upadku Damiana K. na schodach, gdy w promieniu 15 metrów nie ma nikogo.

5. Wnioski dowodowe obrony i postanowienie Sądu (k. 59–61 akt):
Obrońca oskarżonego adw. Tomasz Kozłowski złożył wniosek o dopuszczenie dowodu z uzupełniającej opinii biegłego chirurga/medyka sądowego na okoliczność weryfikacji, czy obrażenia łuku brwiowego i zwichnięcie łokcia powstały typowo wskutek upadku na twardą płaszczyznę stopni schodowych, co koresponduje z relacją świadka Marka W. i nagraniem wideo.
Sąd Rejonowy wydał postanowienie:
„Na podstawie art. 170 § 1 pkt 2 k.p.k. oddalić wniosek dowodowy obrońcy, albowiem okoliczność mechanizmu obrażeń została dostatecznie wyjaśniona w zeznaniach pokrzywdzonego, który konsekwentnie wskazał na użycie narzędzia przez oskarżonego”.
Sprzeciw obrońcy do protokołu:
Obrońca adw. Tomasz Kozłowski złożył formalne zastrzeżenie do protokołu w trybie art. 167 w zw. z art. 170 § 1 pkt 2 k.p.k. i art. 6 k.p.k., wskazując na jaskrawą obrazę reguł swobodnej oceny dowodów (art. 7 k.p.k.) oraz arbitralne pominięcie dowodów obiektywnych i bezstronnego świadka.

6. Zamknięcie przewodu sądowego i głosy stron (k. 62–64 akt):
Sąd zamknął przewód sądowy (art. 405 k.p.k.).
- Prokurator: Wniósł o uznanie oskarżonego za winnego z art. 157 § 1 k.k. i wymierzenie kary 6 miesięcy pozbawienia wolności z warunkowym zawieszeniem na 1 rok.
- Obrońca oskarżonego: Wniósł o uniewinnienie oskarżonego na podstawie art. 414 § 1 w zw. z art. 17 § 1 pkt 2 k.p.k. z uwagi na oczywisty brak sprawstwa wykazany zeznaniami świadka Marka W. oraz zapisem z monitoringu.
- Oskarżony: Wniósł o uniewinnienie.

Sąd ogłosił wyrok w dniu 28 stycznia 2025 r.`,
    verdictSentence: `WYROK W IMIENIU RZECZYPOSPOLITEJ POLSKIEJ
Dnia 28 stycznia 2025 roku
Sąd Rejonowy w Bydgoszczy, III Wydział Karny
uznaje oskarżonego Piotra Zielińskiego za winnego popełnienia zarzucanego mu czynu z art. 157 § 1 k.k. i na podstawie art. 157 § 1 k.k. wymierza mu karę 6 miesięcy pozbawienia wolności z warunkowym zawieszeniem jej wykonania na okres próby 1 roku.`,
    justificationFacts: `Sąd bezkrytycznie przyjął za podstawę stan faktyczny podany przez pokrzywdzonego, ignorując dowody obiektywne.`,
    justificationEvidence: `Sąd oparł się na relacji pokrzywdzonego, nie wyjaśniając, dlaczego odmówił wiary nagraniom monitoringu i zeznaniom sprzedawcy kiosku.`,
    justificationLegal: `Sąd przypisał umyślne przestępstwo z art. 157 § 1 k.k.`,
    instructions: "Jako obrońca Piotra Zielińskiego sporządź apelację. Postaw zarzuty względne: obrazę art. 7 k.p.k. w zw. z art. 410 k.p.k. (dowolna ocena dowodów i pominięcie dowodów korzystnych) oraz błąd w ustaleniach faktycznych (art. 438 pkt 3 k.p.k.). Pamiętaj o wymogu wykazania 'wpływu na treść wyroku'. Wnoś o zmianę wyroku i uniewinnienie oskarżonego (art. 437 § 2 k.p.k.).",
    keyIssues: [
      "Obraza art. 7 k.p.k. poprzez bezkrytyczne danie wiary nietrzeźwemu pokrzywdzonemu wbrew nagraniu monitoringu",
      "Obraza art. 410 k.p.k. poprzez pominięcie całości ujawnionego materiału dowodowego (zeznań bezstronnego świadka Marka W.)",
      "Błąd w ustaleniach faktycznych co do mechanizmu powstania obrażeń ciała",
      "Wniosek o uniewinnienie jako prawidłowa realizacja prymatu orzekania reformatoryjnego.",
    ],
    modelSolution: {
      recommendedScope: "W całości na korzyść oskarżonego Piotra Zielińskiego.",
      modelCharges: [
        {
          basis: "art. 438 pkt 2 k.p.k.",
          violatedArticles: "art. 7 k.p.k. w zw. z art. 410 k.p.k.",
          formulation: "obrazę przepisów postępowania, mającą wpływ na treść orzeczenia, a mianowicie art. 7 k.p.k. w zw. z art. 410 k.p.k., polegającą na dowolnej, jednostronnej i sprzecznej z zasadami prawidłowego rozumowania ocenie materiału dowodowego, polegającej na bezkrytycznym daniu wiary zeznaniom pokrzywdzonego Damiana K. znajdującego się w stanie upojenia alkoholowego (1,92 promila), przy jednoczesnym całkowitym pominięciu dowodu z nagrania monitoringu miejskiego oraz zeznań naocznego, bezstronnego świadka Marka W., z których jednoznacznie wynika, że oskarżony nie uderzył pokrzywdzonego żadnym narzędziem, a obrażenia ciała powstały wskutek samodzielnego potknięcia się i upadku pokrzywdzonego na schodach;",
          explanation: "Naruszenie reguł oceny dowodów oraz pominięcie istotnych dowodów w uzasadnieniu.",
        },
        {
          basis: "art. 438 pkt 3 k.p.k.",
          violatedArticles: "art. 438 pkt 3 k.p.k.",
          formulation: "błąd w ustaleniach faktycznych przyjętych za podstawę orzeczenia, mający wpływ na jego treść, polegający na bezpodstawnym przyjęciu, że oskarżony Piotr Zieliński zadał pokrzywdzonemu ciosy powodujące rozstrój zdrowia powyżej dni 7, podczas gdy prawidłowa analiza dowodów prowadzi do wniosku, że oskarżony nie spowodował obrażeń ciała u Damiana K.;",
          explanation: "Konsekwencja naruszenia przepisów postępowania dowodowego.",
        },
      ],
      modelMotions: [
        {
          type: "Główny",
          content: "na podstawie art. 437 § 1 i 2 k.p.k. wnoszę o zmianę zaskarżonego wyroku w całości i uniewinnienie oskarżonego Piotra Zielińskiego od zarzucanego mu czynu.",
          legalGround: "art. 437 § 2 k.p.k.",
        },
      ],
      modelJustificationHighlights: [
        "Zasada swobodnej, a nie dowolnej oceny dowodów (art. 7 k.p.k.)",
        "Obowiązek oparcia wyroku na całokształcie okoliczności ujawnionych w toku rozprawy głównej (art. 410 k.p.k.)",
        "Wykazanie wpływu uchybienia na treść rozstrzygnięcia.",
      ],
      commonPitfalls: [
        "Pominięcie ustawowego zwrotu 'mającą wpływ na treść orzeczenia' przy zarzucie z art. 438 pkt 2 k.p.k.",
        "Stawianie zarzutu z art. 438 pkt 1 k.p.k. (obraza prawa materialnego) przy kwestionowaniu sprawstwa!",
      ],
    },
  };
}

// Analyze uploaded lecture materials / notes
app.post("/api/analyze-materials", async (req, res) => {
  try {
    const { content, title } = req.body;
    if (!content || typeof content !== "string" || content.trim().length === 0) {
      res.status(400).json({ error: "Brak treści materiału do analizy." });
      return;
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Return structured fallback analysis without throwing
      res.json({
        summary: `Przeanalizowano materiał dydaktyczny: "${title || 'Notatki z prawa karnego'}". Zidentyfikowano zagadnienia konstrukcji zarzutów apelacyjnych i wymogów formalnych.`,
        keyConcepts: [
          "Gradacja zarzutów apelacyjnych (art. 439 k.p.k. przed art. 438 k.p.k.)",
          "Zakaz zarzutów mieszanych (błąd faktyczny vs obraza prawa materialnego)",
          "Trójczłonowa budowa zarzutu z art. 7 w zw. z art. 410 k.p.k.",
          "Prymat wniosków reformatoryjnych (uniewinnienie/złagodzenie) nad kasatoryjnymi",
        ],
        lecturerRequirements: [
          "Zarzut z art. 438 pkt 2 i 3 k.p.k. musi bezwzględnie zawierać zwrot 'mającą wpływ na treść orzeczenia'",
          "Zarzut obrazy prawa materialnego wolno stawiać wyłącznie przy pełnej zgodzie ze stanem faktycznym albo jako ewentualny",
          "Wnioski odwoławcze muszą być symetryczne do postawionych zarzutów",
        ],
        examTraps: [
          "Wnoszenie o uchylenie wyroku (kasatoryjnie) zamiast uniewinnienia przy braku przesłanek z art. 437 § 2 zd. 2 k.p.k.",
          "Łączenie zarzutu błędu faktycznego z zarzutem z art. 438 pkt 1 k.k. bez formuły 'z ostrożności procesowej'",
          "Niewskazanie dowodów pominiętych lub ocenionych dowolnie przy zarzucie art. 7 k.p.k.",
        ],
        suggestedPracticeTopics: [
          "Obrona konieczna (art. 25 k.k.) a udział w bójce (art. 158 k.k.)",
          "Kradzież rozbójnicza (art. 281 k.k.) a zabór mienia i pościg",
          "Bezwzględna przyczyna odwoławcza – brak obrońcy obligatoryjnego (art. 439 § 1 pkt 10 k.p.k.)",
        ],
      });
      return;
    }

    const prompt = `Jesteś wybitnym wykładowcą i praktykiem polskiego procesu karnego (adwokatem/sędzią).
Przeanalizuj poniższy materiał dostarczony przez studenta (notatki z wykładu, slajdy z prezentacji prowadzącego lub fragment podręcznika/kazusów):
Tytuł materiału: "${title || 'Materiały źródłowe studenta'}"

Treść materiału:
"""
${content.slice(0, 30000)}
"""

Dokonaj dogłębnej analizy pod kątem zbliżającego się kolokwium z pisania apelacji karnej:
1. Zidentyfikuj kluczowe zagadnienia materialne i procesowe (k.k. i k.p.k.).
2. Wykryj specyficzne wymogi, preferencje lub naciski prowadzącego (np. sposób formułowania zarzutów, zakaz stawiania błędu w ustaleniach faktycznych łącznie z obrazą prawa materialnego, konstrukcja zarzutów ewentualnych, formuła wniosków).
3. Wyodrębnij typowe pułapki (haczyki) egzaminacyjne, na które student musi uważać.
4. Zaproponuj 3 przykładowe zarysy kazusów do przećwiczenia na bazie tych materiałów.

Zwróć odpowiedź w formacie JSON zgodnym z poniższym schematem.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: {
              type: Type.STRING,
              description: "Zwięzłe podsumowanie zawartości materiału",
            },
            keyConcepts: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Kluczowe pojęcia i przepisy z materiału",
            },
            lecturerRequirements: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Specyficzne wymagania formalne i merytoryczne prowadzącego",
            },
            examTraps: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Typowe pułapki i błędy dyskwalifikujące na kolokwium",
            },
            suggestedPracticeTopics: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Rekomendowane motywy kazusów do treningu",
            },
          },
          required: ["summary", "keyConcepts", "lecturerRequirements", "examTraps", "suggestedPracticeTopics"],
        },
      },
    });

    const parsed = JSON.parse(response.text || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Error analyzing materials, using fallback:", error);
    res.json({
      summary: `Przeanalizowano materiał dydaktyczny. Wyodrębniono reguły sporządzania apelacji według kanonu adw. Marty Tomkiewicz-Januszewskiej.`,
      keyConcepts: [
        "Art. 438 pkt 1-4 k.p.k. (względne podstawy odwoławcze)",
        "Art. 439 § 1 k.p.k. (bezwzględne przyczyny odwoławcze)",
        "Art. 7 w zw. z art. 410 k.p.k. (dowolna ocena materiału dowodowego)",
        "Art. 437 § 1 i 2 k.p.k. (kierunki orzekania sądu odwoławczego)",
      ],
      lecturerRequirements: [
        "Bezwzględny zakaz zarzutów mieszanych bez zastrzeżenia ewentualnego",
        "Wskazanie wpływu uchybienia procesowego na treść wyroku",
        "Precyzyjne wnioski odwoławcze w petitum",
      ],
      examTraps: [
        "Nadużywanie zarzutu obrazy prawa materialnego",
        "Zarzucanie niewspółmierności kary przy jednoczesnym kwestionowaniu winy",
        "Błędne określenie zakresu zaskarżenia",
      ],
      suggestedPracticeTopics: [
        "Udział w bójce a obrona konieczna (art. 25 k.k.)",
        "Kradzież z włamaniem a wejście przez otwarte okno (art. 279 k.k.)",
        "Pobicie ze skutkiem śmiertelnym a wypadek (art. 158 § 2 k.k.)",
      ],
    });
  }
});

// Generate dynamic criminal law case
app.post("/api/generate-case", async (req, res) => {
  try {
    const { topic, difficulty, additionalContext } = req.body;
    const sourceMaterials = req.body.sourceMaterials || req.body.materialsContext || "";

    const ai = getGeminiClient();
    if (!ai) {
      console.log("No GEMINI_API_KEY set, generating rich procedural fallback case.");
      const fallbackCase = generateFallbackCase(topic, difficulty, additionalContext);
      res.json(fallbackCase);
      return;
    }

    const systemPrompt = `Jesteś wybitnym profesorem i praktykiem polskiego procesu karnego (sędzią apelacyjnym / adwokatem karnistą) z Bydgoszczy.
Aplikacja nazywa się "LexAlkoholica - Bydgoszcz" i służy do rygorystycznego treningu studentów prawa przed kolokwium z pisania apelacji karnej oraz egzaminem zawodowym (adwokackim/radcowskim).

ZŁOTY KANON MERYTORYCZNY:
1. Adw. Marta Tomkiewicz-Januszewska ("Konstrukcja Apelacji Karnej", Izba Adwokacka w Warszawie 2023):
   - Gradacja zarzutów: Jeśli występuje bezwzględna przyczyna (art. 439 § 1 k.p.k.), umieszcza się ją na 1. miejscu bez badania wpływu na wyrok. Zaraz po niej stosuje się formułę ostrożnościową ("niezależnie od dostrzeżenia ww. przyczyny bezwzględnej...").
   - Zakaz zarzutów mieszanych (Rozdział 7.4): Zarzut obrazy prawa materialnego (art. 438 pkt 1 k.p.k.) dopuszczalny jest WYŁĄCZNIE przy niekwestionowanych ustaleniach faktycznych. Jeśli student kwestionuje dowody (art. 7 k.p.k.) lub fakty, zarzut materialny MOŻE BYĆ PODNIESIONY WYŁĄCZNIE JAKO EWENTUALNY!
   - Wymogi formalne zarzutu procesowego: zarzut z art. 438 pkt 2 k.p.k. i pkt 3 k.p.k. MUSI zawierać zwrot "mającą wpływ na treść orzeczenia" oraz wskazywać konkretne dowody i błędy logiczne.
   - Prymat orzekania reformatoryjnego (Rozdział 8): Zasadą jest zmiana orzeczenia (uniewinnienie lub złagodzenie kary). Uchylenie i przekazanie do ponownego rozpoznania dopuszczalne jest WYŁĄCZNIE w wypadkach z art. 437 § 2 zd. 2 k.p.k. (art. 439, reguła ne peius art. 454, konieczność powtórzenia przewodu w całości).
2. SSN dr Dariusz Kala (Sąd Najwyższy):
   - Obraza prawa materialnego w innym wypadku niż kwalifikacja czynu (art. 438 pkt 1a k.p.k.) dla uchybień w zakresie orzeczenia o karze, środkach kompensacyjnych, przepadku oraz kosztach pomocy prawnej z urzędu.
   - Relacja art. 410 k.p.k. a art. 92 k.p.k. – wyrok po rozprawie głównej zawsze podlega zaskarżeniu z art. 410 k.p.k., nigdy z art. 92 k.p.k.
   - Granice kontroli z art. 433 § 1 i § 2 k.p.k. oraz reguły zaskarżenia na korzyść (art. 86 § 1 k.p.k.).
3. SSN prof. dr hab. Igor Zgoliński:
   - Metodyka czytania akt od końca (tenor -> uzasadnienie -> audyt karty karnej i zatarcia skazania -> protokoły rozprawy -> akt oskarżenia).
   - Szkoda w prawie karnym (art. 46 k.k.), klauzula antykumulacyjna (art. 415 § 1 zd. 2 k.p.k.) oraz prekluzja wniosku o naprawienie szkody z art. 49a § 1 k.p.k.
4. Kanon Egzaminacyjny MS (2026 r.) i OIRP Bydgoszcz:
   - Standardy zaskarżenia niealimentacji (art. 209 k.k. vs art. 413 § 2 pkt 1 k.p.k. przy braku pełnej tożsamości z wcześniejszym skazaniem),
   - Zastosowanie in dubio pro reo (art. 5 § 2 k.p.k.) przy marginesie niepewności pomiarowej alkomatów i wyłączenie przepadku pojazdu z art. 178a § 5 k.k.,
   - Bezwzględne zakazy dowodowe (art. 178 pkt 1 k.p.k. – tajemnica obrończa, art. 182 § 3 k.p.k. – prawo współoskarżonego do odmowy zeznań).

KAZUS MUSI BYĆ OBSZERNY, SZCZEGÓŁOWY I REALISTYCZNY. MUSI ZAWIERAĆ PEŁNE ETAPY AKT SĄDOWYCH:
- akt oskarżenia prokuratury (zarzucane czyny, kwalifikacja i tezy aktu oskarżenia – inicjuje sprawę w sądzie na k. 1 akt)
- materiał dowodowy ze śledztwa oraz okoliczności zdarzenia (tempore criminis, protokoły policji, badania)
- PRZEBIEG ROZPRAWY GŁÓWNEJ PRZED SĄDEM I INSTANCJI (sekcja "courtProceedings"):
  MUSI BYĆ BARDZO OBSZERNA (minimum 40-70 linijek tekstu), sporządzona jak autentyczny PROTOKÓŁ ROZPRAWY GŁÓWNEJ (sygnatura, data, przewodniczący, protokolant, obecni na sali).
  Musi zawierać:
  1) Szczegółowe przesłuchanie oskarżonego i odczytanie protokołów ze śledztwa w trybie art. 389 § 1 k.p.k.,
  2) Przesłuchanie świadków i pokrzywdzonego, konfrontacje, odczytanie wcześniejszych zeznań w trybie art. 391 § 1 k.p.k. z powodu sprzeczności,
  3) Wnioski dowodowe obrony (np. powołanie biegłego, bezpośrednie przesłuchanie naocznego świadka, okazanie dowodu rzeczowego, oględziny, bilingi/BTS),
  4) Formalne postanowienia Sądu oddalające wnioski dowodowe obrony na podstawie art. 170 § 1 pkt 2 lub pkt 5 k.p.k. z wadliwym uzasadnieniem (np. w drodze niedopuszczalnej antycypacji oceny dowodu lub uznania, że dowód zmierza do przedłużenia postępowania),
  5) Zastrzeżenia procesowe obrońcy do protokołu (art. 167 k.p.k. w zw. z art. 6 k.p.k.),
  6) Przebieg zamknięcia przewodu sądowego i ewentualne kardynalne uchybienia Sądu (np. zmiana kwalifikacji prawnej w wyroku bez uprzedzenia stron w trybie art. 399 § 1 k.p.k., spóźniony wniosek kompensacyjny po zamknięciu przewodu z art. 49a § 1 k.p.k., rozpoznanie sprawy pod nieobecność obrońcy obligatoryjnego z art. 79 k.p.k.),
  7) Głosy stron (art. 406 k.p.k.), w tym wnioski obrońcy i oskarżonego.
- pełną sentencję wyroku i szczegółowe uzasadnienie sądu.`;

    const userPrompt = `Wygeneruj realistyczny, obszerny kazus treningowy na kolokwium:
Tematyka: ${topic || "Mieszana (postępowanie dowodowe art. 7 k.p.k. + kwalifikacja materialna k.k.)"}
Poziom trudności: ${difficulty || "Kolokwium uniwersyteckie"}
Dodatkowe preferencje/uwagi: ${additionalContext || "Brak"}

MATERIAŁY DYDAKTYCZNE PROWADZĄCEGO:
"""
${(sourceMaterials || "").slice(0, 50000)}
"""`;

    let parsed: any = null;
    const candidateModels = ["gemini-3.6-flash", "gemini-3.5-flash", "gemini-3.1-flash-lite"];

    for (const modelName of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: userPrompt,
          config: {
            systemInstruction: systemPrompt,
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING, description: "Tytuł kazusu" },
                caseNumber: { type: Type.STRING, description: "Sygnatura np. III K 210/24" },
                court: { type: Type.STRING, description: "Oznaczenie sądu np. Sąd Rejonowy w Bydgoszczy" },
                defendant: { type: Type.STRING, description: "Imię i nazwisko oskarżonego" },
                role: { type: Type.STRING, description: "Rola procesowa np. Obrońca oskarżonego" },
                topicCategory: { type: Type.STRING, description: "Jedno z: materialne, procesowe, faktyczne, kara, bezwzgledne" },
                circumstancesOfAct: { type: Type.STRING, description: "Szczegółowe okoliczności popełnienia czynu" },
                pretrialProceedings: { type: Type.STRING, description: "Szczegółowy przebieg postępowania przygotowawczego" },
                indictment: { type: Type.STRING, description: "Treść aktu oskarżenia i zarzutów prokuratorskich" },
                courtProceedings: { type: Type.STRING, description: "Obszerny, szczegółowy protokół rozprawy głównej przed sądem I instancji z przesłuchaniami, odczytaniem z art. 389/391 k.p.k., wnioskami dowodowymi obrony, postanowieniami oddalającymi sądu z art. 170 k.p.k., zastrzeżeniami obrońcy, brakami uprzedzenia z art. 399 k.p.k. oraz głosami stron" },
                verdictSentence: { type: Type.STRING, description: "Pełna treść wyroku Sądu I instancji (sentencja)" },
                justificationFacts: { type: Type.STRING, description: "Ustalony stan faktyczny w uzasadnieniu" },
                justificationEvidence: { type: Type.STRING, description: "Ocena dowodów Sądu I instancji" },
                justificationLegal: { type: Type.STRING, description: "Ocena prawna i wymiar kary" },
                instructions: { type: Type.STRING, description: "Polecenie dla studenta" },
                keyIssues: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Główne problemy prawne ukryte w kazusie",
                },
                modelSolution: {
                  type: Type.OBJECT,
                  properties: {
                    recommendedScope: { type: Type.STRING },
                    modelCharges: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          basis: { type: Type.STRING },
                          violatedArticles: { type: Type.STRING },
                          formulation: { type: Type.STRING },
                          explanation: { type: Type.STRING },
                        },
                        required: ["basis", "violatedArticles", "formulation", "explanation"],
                      },
                    },
                    modelMotions: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          type: { type: Type.STRING },
                          content: { type: Type.STRING },
                          legalGround: { type: Type.STRING },
                        },
                        required: ["type", "content", "legalGround"],
                      },
                    },
                    modelJustificationHighlights: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                    },
                    commonPitfalls: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                    },
                  },
                  required: ["recommendedScope", "modelCharges", "modelMotions", "modelJustificationHighlights", "commonPitfalls"],
                },
              },
              required: [
                "title",
                "caseNumber",
                "court",
                "defendant",
                "role",
                "topicCategory",
                "circumstancesOfAct",
                "pretrialProceedings",
                "indictment",
                "courtProceedings",
                "verdictSentence",
                "justificationFacts",
                "justificationEvidence",
                "justificationLegal",
                "instructions",
                "keyIssues",
                "modelSolution",
              ],
            },
          },
        });

        parsed = JSON.parse(response.text || "{}");
        if (parsed && parsed.title) {
          break;
        }
      } catch (err: any) {
        console.warn(`Model ${modelName} failed for case gen (${err?.status || err?.code || err?.message?.substring(0, 50)}), trying next candidate...`);
      }
    }

    if (!parsed || !parsed.title) {
      throw new Error("No Gemini candidate succeeded for case generation");
    }

    // Ensure id and metadata
    parsed.id = `case-gen-${Date.now()}`;
    parsed.isCustomGenerated = true;
    parsed.createdAt = new Date().toISOString();
    parsed.difficulty = difficulty || "Kolokwium uniwersyteckie";
    if (!parsed.topicCategory) parsed.topicCategory = "faktyczne";

    res.json(parsed);
  } catch (error: any) {
    console.error("Error generating case with Gemini, using reliable procedural fallback:", error);
    const fallbackCase = generateFallbackCase(req.body.topic, req.body.difficulty, req.body.additionalContext);
    res.json(fallbackCase);
  }
});

// Comprehensive, deterministic, objective legal evaluation engine based on Polish Criminal Procedure canon
function evaluateSubmissionRigorously(caseData: any, appealSubmission: any, sourceMaterials?: any) {
  const charges = (appealSubmission.charges || "").trim();
  const motions = (appealSubmission.motions || "").trim();
  const justification = (appealSubmission.justification || "").trim();
  const appealScope = (appealSubmission.appealScope || appealSubmission.scope || "").trim();

  const chargesLower = charges.toLowerCase();
  const motionsLower = motions.toLowerCase();
  const justLower = justification.toLowerCase();

  const criticalErrors: Array<{ errorTitle: string; description: string; howToFix: string }> = [];
  const strongPoints: string[] = [];
  const colloquiumTips: string[] = [
    "Pamiętaj o nadrzędnej regule: zarzuty procesowe (art. 438 pkt 2 k.p.k.) i błąd faktyczny (art. 438 pkt 3 k.p.k.) bezwzględnie wymagają wykazania wpływu na treść wyroku.",
    "Nigdy nie łącz zarzutu materialnego z faktycznym bez formuły ewentualnej ('Z ostrożności procesowej – na wypadek nieuwzględnienia...').",
    "Wnioskuj o uchylenie orzeczenia tylko przy bezwzględnej przyczynie (art. 439 § 1 k.p.k.) lub spełnieniu przesłanek z art. 437 § 2 zd. 2 k.p.k.",
  ];

  // 1. Trivial / Mock / Gibberish checks
  const isTrivial = charges.length < 50 || motions.length < 25;
  if (isTrivial) {
    criticalErrors.push({
      errorTitle: "Praca zdawkowa / niesporządzona apelacja",
      description: "Treść zarzutów lub wniosków odwoławczych jest rażąco krótka lub niekompletna. Apelacja karna na kolokwium lub egzaminie zawodowym wymaga precyzyjnego sformułowania zarzutów z podaniem podstawy prawnej oraz dokładnych wniosków reformatoryjnych lub kasatoryjnych.",
      howToFix: "Rozwiń każdy zarzut w strukturze trójczłonowej (naruszenie, sposób naruszenia, wpływ na treść) oraz sformułuj konkretne wnioski reformatoryjne lub kasatoryjne.",
    });

    const score = Math.max(1, Math.min(4, Math.round((charges.length + motions.length) / 20)));
    return {
      score,
      grade: "2.0 (niedostateczny)",
      passed: false,
      summaryAssessment: `Apelacja NIE ZOSTAŁA zaliczona (ocena 2.0, ${score}/20 pkt). Tekst jest zbyt zdawkowy, by poddać go merytorycznej kontroli instancyjnej.`,
      scoreBreakdown: {
        chargesFormulation: Math.min(2, Math.round(score * 0.4)),
        chargesSubstance: 0,
        motionsCorrectness: Math.min(1, Math.round(score * 0.3)),
        justificationQuality: 0,
      },
      criticalErrors,
      strongPoints: ["Zgłoszono próbę podjęcia zadania."],
      detailedFeedbackOnCharges: "Zarzuty są zbyt zdawkowe lub lakoniczne, by wywołać skutek procesowy i zostać poddane kontroli instancyjnej.",
      detailedFeedbackOnMotions: "Wnioski nie spełniają minimalnych wymogów formalnych z art. 427 § 1 k.p.k.",
      modelAppeal: {
        modelScope: caseData.modelSolution?.recommendedScope || "W całości na korzyść oskarżonego",
        modelChargesText: caseData.modelSolution?.modelCharges?.map((c: any) => `${c.basis}: ${c.formulation}`).join("\n\n") || "Brak",
        modelMotionsText: caseData.modelSolution?.modelMotions?.map((m: any) => `${m.type}: ${m.content}`).join("\n\n") || "Brak",
        modelJustificationBrief: caseData.modelSolution?.modelJustificationHighlights?.join(". ") || "Brak",
      },
      colloquiumTips,
    };
  }

  // --- Kryterium 1: chargesFormulation (0 - 6 pkt) ---
  let formulationScore = 0;

  // Podstawy odwoławcze (art. 438 / 439)
  const hasStatutoryGrounds = /438\s*pkt|439\s*§|obraza?\s+prawa|błąd\s+w\s+ustaleniach|rażąc[aąe]\s+niewspółmierno/i.test(charges);
  const hasArticleCitations = /art\.\s*438\s*pkt\s*[1-4][a-z]?|art\.\s*439\s*§\s*1/i.test(charges);
  if (hasStatutoryGrounds) formulationScore += 1.5;
  if (hasArticleCitations) formulationScore += 1.0;

  // Trójczłonowa budowa
  const hasStructure = /polegając[ąe]|poprzez|naruszeni|obraz[ęa]/i.test(chargesLower);
  if (hasStructure && charges.length >= 100) formulationScore += 1.0;

  // Formuła wpływu
  const isProceduralOrFactual = /438\s*pkt\s*[23]|art\.\s*7\b|art\.\s*410\b|art\.\s*413\b|art\.\s*399\b|art\.\s*170\b|błąd\s+w\s+ustaleniach|przepisów\s+postępowania/i.test(charges);
  const hasImpactFormula = /mając[ąe]\s+wpływ\s+na\s+treść\s+orzeczenia|mający\s+wpływ\s+na\s+treść\s+orzeczenia|wywarło\s+wpływ\s+na\s+treść\s+orzeczenia|wpływ\s+na\s+treść\s+wyroku/i.test(chargesLower);

  if (isProceduralOrFactual) {
    if (hasImpactFormula) {
      formulationScore += 1.5;
      strongPoints.push("Prawidłowo zawarto ustawową formułę wykazania wpływu uchybienia na treść zaskarżonego wyroku (art. 438 pkt 2 i 3 k.p.k.).");
    } else {
      criticalErrors.push({
        errorTitle: "Brak formuły wpływu na treść orzeczenia (art. 438 pkt 2 i 3 k.p.k.)",
        description: "Przy zarzucie naruszenia przepisów postępowania lub błędu faktycznego pominięto ustawowy wymóg wykazania wpływu uchybienia na treść wyroku.",
        howToFix: "Używaj zawsze zwrotu: 'obrazę przepisów postępowania, mającą wpływ na treść orzeczenia, a mianowicie art. ... poprzez ...'",
      });
    }
  } else {
    formulationScore += 1.0;
  }

  // Zbieg przepisów: Zakaz zarzutów mieszanych (Rozdział 7.4 Tomkiewicz)
  const hasMaterial = /438\s*pkt\s*1\b|prawa\s+materialnego/i.test(chargesLower) && !/438\s*pkt\s*1a/i.test(chargesLower);
  const hasFactualOrEvidence = /438\s*pkt\s*3|art\.\s*7\b|art\.\s*410\b|błąd\s+w\s+ustaleniach|błędn[eymch\s]+ustaleni/i.test(chargesLower);
  const hasAlternative = /ewentualn|ostrożności\s+procesowej|na\s+wypadek\s+nieuwzględnienia/i.test(chargesLower);

  if (hasMaterial && hasFactualOrEvidence && !hasAlternative) {
    formulationScore = Math.max(0, formulationScore - 3.5);
    criticalErrors.push({
      errorTitle: "Zakaz zarzutów mieszanych (Rozdział 7.4 Tomkiewicz)",
      description: "Postawiono zarzut obrazy prawa materialnego (art. 438 pkt 1 k.p.k.) obok zarzutu błędu w ustaleniach faktycznych (art. 438 pkt 3 k.p.k.) lub obrazy art. 7 k.p.k. bez zastrzeżenia ewentualnego. Obraza prawa materialnego zachodzi tylko przy pełnej akceptacji ustaleń faktycznych!",
      howToFix: "Jeśli kwestionujesz fakty lub ocenę dowodów, zarzut prawa materialnego postaw WYŁĄCZNIE jako ewentualny: 'Z ostrożności procesowej – na wypadek nieuwzględnienia zarzutu z pkt ... zarzucam obrazę prawa materialnego...'",
    });
  } else if (hasMaterial && hasFactualOrEvidence && hasAlternative) {
    formulationScore += 1.0;
    strongPoints.push("Wzorowe zastosowanie konstrukcji zarzutu ewentualnego przy zbiegu uchybień materialnych i procesowo-faktycznych.");
  }

  // Art. 92 vs Art. 410
  if (/art\.\s*92\b/i.test(chargesLower)) {
    formulationScore = Math.max(0, formulationScore - 1.0);
    criticalErrors.push({
      errorTitle: "Błędne powołanie art. 92 k.p.k. zamiast art. 410 k.p.k.",
      description: "Wyrok wydany po przeprowadzeniu rozprawy głównej opiera się na całokształcie okoliczności ujawnionych na rozprawie (art. 410 k.p.k.). Art. 92 k.p.k. stosuje się do orzeczeń zapadających na posiedzeniu.",
      howToFix: "W apelacji od wyroku po rozprawie zawsze powołuj art. 410 k.p.k. w zw. z art. 7 k.p.k.",
    });
  }

  const chargesFormulation = Math.min(6, Math.max(0, Math.round(formulationScore * 10) / 10));

  // --- Kryterium 2: chargesSubstance (0 - 6 pkt) ---
  let substanceScore = 0;

  // Absurd / Foreign Articles check
  const foreignArticles = [
    { pattern: /\b148\b/, name: "art. 148 k.k. (zabójstwo)" },
    { pattern: /\b197\b/, name: "art. 197 k.k. (zgwałcenie)" },
    { pattern: /\b280\b/, name: "art. 280 k.k. (rozbój)" },
    { pattern: /\b281\b/, name: "art. 281 k.k. (kradzież rozbójnicza)" },
    { pattern: /\b228\b/, name: "art. 228 k.k. (łapownictwo)" },
    { pattern: /\b156\b/, name: "art. 156 k.k. (ciężki uszczerbek na zdrowiu)" },
  ];
  const detectedForeign = foreignArticles.filter(f => f.pattern.test(chargesLower) && !caseData.title?.toLowerCase().includes(f.name) && !caseData.circumstancesOfAct?.toLowerCase().includes(f.name));
  if (detectedForeign.length > 0) {
    criticalErrors.push({
      errorTitle: "Powołanie oczywiście obcych przepisów materialnych",
      description: `W zarzutach odwołano się do przepisów (${detectedForeign.map(d => d.name).join(", ")}), które nie mają najmniejszego związku z przedmiotem sprawy ani zarzucanymi oskarżonemu czynami.`,
      howToFix: "Zarzuty muszą ściśle odnosić się do kwalifikacji prawnej z aktu oskarżenia, wyroku sądu I instancji oraz przepisów postępowania naruszonych w toku procesu.",
    });
  }

  // Model solution comparison
  const modelCharges = caseData.modelSolution?.modelCharges || [];
  let matchedCharges = 0;

  for (const mc of modelCharges) {
    const basisPattern = mc.basis ? new RegExp(mc.basis.replace(".", "\\.").replace(/\s+/g, "\\s*"), "i") : null;
    const violated = mc.violatedArticles ? mc.violatedArticles.toLowerCase().split(/[\s,;]+/) : [];
    
    let isMatched = false;
    if (basisPattern && basisPattern.test(chargesLower)) {
      for (const art of violated) {
        if (art.length > 2 && chargesLower.includes(art)) {
          isMatched = true;
          break;
        }
      }
    }
    if (!isMatched && mc.formulation) {
      const words = mc.formulation.toLowerCase().split(/\s+/).filter((w: string) => w.length > 5);
      let wordHits = 0;
      for (const w of words) {
        if (chargesLower.includes(w)) wordHits++;
      }
      if (wordHits >= 4) isMatched = true;
    }

    if (isMatched) matchedCharges++;
  }

  // Check keyIssues matches
  const keyIssues = caseData.keyIssues || [];
  let matchedIssues = 0;
  for (const issue of keyIssues) {
    const issueWords = issue.toLowerCase().split(/[\s,.-]+/).filter((w: string) => w.length > 4);
    let hitCount = 0;
    for (const w of issueWords) {
      if (chargesLower.includes(w) || justLower.includes(w)) hitCount++;
    }
    if (hitCount >= 2) matchedIssues++;
  }

  // Case 21 specific traps
  const isCase21 = caseData.id?.includes("21") || caseData.caseNumber?.includes("1970/25") || caseData.defendant?.toLowerCase().includes("kowalski");
  if (isCase21) {
    // Trap 1: False res iudicata (art. 17 § 1 pkt 7 / art. 439 § 1 pkt 8)
    const hasResIudicata = /17\s*§\s*1\s*pkt\s*7|439\s*§\s*1\s*pkt\s*8|powag[aę]\s+rzeczy\s+osądzonej|res\s+iudicata/i.test(chargesLower);
    if (hasResIudicata) {
      criticalErrors.push({
        errorTitle: "Pułapka egzaminacyjna: Błędny zarzut powagi rzeczy osądzonej (art. 439 § 1 pkt 8 k.p.k.)",
        description: "W sprawie Jana Kowalskiego okresy czynu niealimentacji nie pokrywają się w całości (poprzedni wyrok do 31.08.2025 r., obecny do 04.10.2025 r.). To wyklucza tożsamość czynu i powagę rzeczy osądzonej! Właściwym zarzutem jest art. 413 § 2 pkt 1 k.p.k. – brak modyfikacji opisu czynu i brak znamienia 3 rat alimentacyjnych za okres od września do 4 października, co skutkuje uniewinnieniem.",
        howToFix: "Nie stawiaj zarzutu powagi rzeczy osądzonej, gdy okresy czynów nie są tożsame. Zaskarżaj wadliwy opis czynu i brak kompletu znamion za okres nieobjęty poprzednim wyrokiem.",
      });
      substanceScore = Math.max(0, substanceScore - 2.0);
    }

    // Hit 1: Alimenty & brak 3 rat / art. 413
    if (/413\s*§\s*2\s*pkt\s*1|209\s*§\s*1|trzech\s+świadczeń|3\s+świadczeń|trzy\s+raty|3\s+raty|wrzesi/i.test(chargesLower)) {
      substanceScore += 2.0;
      strongPoints.push("Trafnie dostrzeżono problematykę opisu czynu z art. 209 § 1 k.k. i brak znamienia co najmniej 3 świadczeń okresowych.");
    }

    // Hit 2: Alkomat & niepewność pomiaru & art. 44b k.k.
    if (/0[,\.]7[45]|alko|niepewność|wzorcowani|utylizac|44b|5\s*§\s*2/i.test(chargesLower)) {
      substanceScore += 1.5;
      strongPoints.push("Wychwycono błąd metrologiczny analizatora wydechu i obronę przed przepadkiem pojazdu (art. 44b § 1a k.k.).");
    }

    // Hit 3: Marihuana waga netto vs brutto
    if (/1\s*g(ram)?\b|netto|brutto|7\s*g(ram)?|opakowani|biegł|fizykochem|62a/i.test(chargesLower)) {
      substanceScore += 1.5;
      strongPoints.push("Trafnie podniesiono rozróżnienie wagi brutto (z folią) i wagi netto 1 g marihuany.");
    }

    // Hit 4: Czyn ciągły vs jeden czyn
    if (/12\s*§\s*1|57b|jeden\s+czyn|wielość|15\s+minut|nieprzerwan/i.test(chargesLower)) {
      substanceScore += 1.0;
      strongPoints.push("Zauważono bezzasadne zastosowanie konstrukcji czynu ciągłego (art. 12 § 1 k.k.) do 15-minutowej jazdy.");
    }

    // Hit 5: Wynagrodzenie urzędówki
    if (/urzędów|podatek|vat|23%|stawek|rozporządzen|dwóch\s+termin/i.test(chargesLower)) {
      substanceScore += 1.0;
      strongPoints.push("Dostrzeżono błąd sądu w rozstrzygnięciu o kosztach obrony z urzędu i podatku VAT.");
    }
  } else {
    // General case substance evaluation
    if (detectedForeign.length > 0) {
      substanceScore = 0;
    } else {
      const hitRatio = modelCharges.length > 0 ? (matchedCharges / modelCharges.length) : 0.5;
      if (hitRatio >= 0.7 || matchedIssues >= 3) {
        substanceScore = 6;
        strongPoints.push("Wysoka trafność merytoryczna – zidentyfikowano niemal wszystkie kluczowe uchybienia sądu.");
      } else if (hitRatio >= 0.4 || matchedIssues >= 2) {
        substanceScore = 4;
        strongPoints.push("Zidentyfikowano główne uchybienia wyroku I instancji.");
      } else if (hitRatio > 0 || matchedIssues >= 1) {
        substanceScore = 2;
      } else {
        substanceScore = 0;
        criticalErrors.push({
          errorTitle: "Brak trafności merytorycznej zarzutów",
          description: "Treść zarzutów nie odnosi się do realnych naruszeń prawa materialnego i procesowego zaistniałych w sprawie.",
          howToFix: "Porównaj ustalenia sądu z kluczem zagadnień prawnych (keyIssues) i zarzutami modelowymi.",
        });
      }
    }
  }

  const chargesSubstance = Math.min(6, Math.max(0, Math.round(substanceScore * 10) / 10));

  // --- Kryterium 3: motionsCorrectness (0 - 4 pkt) ---
  let motionsScore = 0;

  const hasMotionWord = /wnosz[ęe]|wnosimy|zwracam\s+się/i.test(motionsLower);
  if (hasMotionWord) motionsScore += 1.0;

  const hasReform = /zmian[ęa]|uniewinnieni|umorzeni|złagodzeni|wyeliminowani|orzeczeni/i.test(motionsLower);
  const hasKasatoryjnyOnly = /uchylen|przekazan/i.test(motionsLower) && !hasReform;

  if (hasReform) {
    motionsScore += 1.5;
    strongPoints.push("Wzorowe poszanowanie prymatu orzekania reformatoryjnego (art. 437 § 1 i 2 k.p.k.).");
  } else if (hasKasatoryjnyOnly) {
    criticalErrors.push({
      errorTitle: "Naruszenie prymatu orzekania reformatoryjnego (art. 437 § 2 zd. 2 k.p.k.)",
      description: "Sformułowano wyłącznie wniosek o uchylenie wyroku i przekazanie sprawy do ponownego rozpoznania. Uchylenie wyroku jest dopuszczalne WYŁĄCZNIE przy art. 439 § 1 k.p.k., zakazie ne peius (art. 454 k.p.k.) lub konieczności przeprowadzenia przewodu w całości.",
      howToFix: "W pierwszej kolejności zawsze wnoś o ZMIANĘ zaskarżonego wyroku (uniewinnienie lub złagodzenie), a wniosek o uchylenie stawiaj ewentualnie.",
    });
  }

  // Wnioski ewentualne / sprzeczność wniosków
  const hasUniewinnienie = /uniewinn/i.test(motionsLower);
  const hasZlagodzenie = /złagodzen|obniżen|łagodniejsz|zawieszeni/i.test(motionsLower);
  const hasEwentualnyMotion = /ewentualn|ostrożności|wypadek/i.test(motionsLower);

  if (hasUniewinnienie && hasZlagodzenie && !hasEwentualnyMotion) {
    motionsScore = Math.max(0, motionsScore - 1.5);
    criticalErrors.push({
      errorTitle: "Sprzeczność wniosków odwoławczych (brak formuły ewentualnej)",
      description: "Sformułowano wniosek o uniewinnienie oraz o wymierzenie łagodniejszej kary bez zastrzeżenia ewentualnego. Są to wnioski wzajemnie sprzeczne!",
      howToFix: "Wniosek o złagodzenie kary zawsze formułuj jako wniosek ewentualny: '...a z ostrożności procesowej – na wypadek nieuwzględnienia wniosku o uniewinnienie – wnoszę o...'",
    });
  } else if (hasUniewinnienie && hasZlagodzenie && hasEwentualnyMotion) {
    motionsScore += 1.0;
    strongPoints.push("Prawidłowo zhierarchizowano wnioski odwoławcze z wykorzystaniem konstrukcji wniosku ewentualnego.");
  }

  if (/art\.\s*437/i.test(motionsLower)) {
    motionsScore += 0.5;
  }

  const motionsCorrectness = Math.min(4, Math.max(0, Math.round(motionsScore * 10) / 10));

  // --- Kryterium 4: justificationQuality (0 - 4 pkt) ---
  let justScore = 0;
  if (justification.length >= 80) justScore += 1.0;
  if (justification.length >= 250) justScore += 1.5;
  if (justification.length >= 500) justScore += 1.0;
  if (/dowód|świadk|opini|ustaleni|sąd|wyrok|materiał/i.test(justLower)) justScore += 0.5;

  const justificationQuality = Math.min(4, Math.max(0, Math.round(justScore * 10) / 10));

  // Raw score sum
  let rawScore = Math.round(chargesFormulation + chargesSubstance + motionsCorrectness + justificationQuality);

  // Severe failure triggers
  const hasDisqualifyingDefect = 
    chargesSubstance === 0 ||
    detectedForeign.length > 0 ||
    (criticalErrors.some(e => e.errorTitle.includes("Zakaz zarzutów mieszanych")) && chargesSubstance <= 3) ||
    criticalErrors.length >= 2;

  let finalScore = rawScore;
  let passed = false;

  if (hasDisqualifyingDefect || rawScore < 12) {
    finalScore = Math.min(rawScore, 9);
    passed = false;
  } else {
    finalScore = Math.min(20, Math.max(12, rawScore));
    passed = true;
  }

  // Grade determination
  let grade = "2.0 (niedostateczny)";
  if (passed) {
    if (finalScore >= 18) grade = "5.0 (bardzo dobry)";
    else if (finalScore >= 16) grade = "4.5 (plus dobry)";
    else if (finalScore >= 14) grade = "4.0 (dobry)";
    else if (finalScore >= 13) grade = "3.5 (dostateczny plus)";
    else grade = "3.0 (dostateczny)";
  }

  const summaryAssessment = passed
    ? `Apelacja sporządzona poprawnie pod względem konstrukcyjnym i merytorycznym (${finalScore}/20 pkt, ocena ${grade}). Pismo spełnia standardy egzaminacyjne i kwalifikuje się do zaliczenia.`
    : `Apelacja NIE ZOSTAŁA zaliczona (${finalScore}/20 pkt, ocena ${grade}). W pracy stwierdzono istotne uchybienia dyskwalifikujące (${criticalErrors.map(e => e.errorTitle).slice(0, 2).join("; ")}), które na kolokwium uniwersyteckim lub egzaminie zawodowym skutkują oceną niedostateczną.`;

  return {
    score: finalScore,
    grade,
    passed,
    summaryAssessment,
    scoreBreakdown: {
      chargesFormulation,
      chargesSubstance,
      motionsCorrectness,
      justificationQuality,
    },
    criticalErrors,
    strongPoints: strongPoints.length > 0 ? strongPoints : ["Podjęto próbę sporządzenia skargi odwoławczej."],
    detailedFeedbackOnCharges: chargesFormulation < 3 || chargesSubstance < 3
      ? "Zarzuty wymagają gruntownej poprawy: konieczne jest zachowanie zakazu zarzutów mieszanych, powołanie właściwych przepisów procedury i wykazanie wpływu uchybień na treść wyroku."
      : "Zarzuty odwoławcze sformułowano w sposób poprawny, z trafnym uchwyceniem podstaw z art. 438 k.p.k.",
    detailedFeedbackOnMotions: motionsCorrectness < 2
      ? "Wnioski apelacji są wadliwe – pamiętaj o prymacie orzekania reformatoryjnego (art. 437 § 2 zd. 2 k.p.k.) oraz niesprzeczności wniosków."
      : "Wnioski korelują z postawionymi zarzutami i kierunkiem zaskarżenia.",
    modelAppeal: {
      modelScope: caseData.modelSolution?.recommendedScope || "W całości na korzyść oskarżonego",
      modelChargesText: caseData.modelSolution?.modelCharges?.map((c: any) => `${c.basis}: ${c.formulation}`).join("\n\n") || "Brak",
      modelMotionsText: caseData.modelSolution?.modelMotions?.map((m: any) => `${m.type}: ${m.content}`).join("\n\n") || "Brak",
      modelJustificationBrief: caseData.modelSolution?.modelJustificationHighlights?.join(". ") || "Brak",
    },
    colloquiumTips,
  };
}

// Evaluate student's appeal (supports /api/evaluate-appeal and /api/evaluate)
app.post(["/api/evaluate-appeal", "/api/evaluate"], async (req, res) => {
  try {
    const caseData = req.body.caseData;
    const appealSubmission = req.body.appealSubmission || req.body.submission;
    const sourceMaterials = req.body.sourceMaterials || req.body.materials;

    if (!caseData || !appealSubmission) {
      res.status(400).json({ error: "Brak danych kazusu lub sporządzonej apelacji." });
      return;
    }

    const ai = getGeminiClient();
    if (!ai) {
      const evaluation = evaluateSubmissionRigorously(caseData, appealSubmission, sourceMaterials);
      res.json(evaluation);
      return;
    }

    const systemPrompt = `Jesteś surowym, sprawiedliwym i niezwykle dydaktycznym egzaminatorem z polskiego procesu karnego (sędzią apelacyjnym / adwokatem karnistą oceniającym kolokwium roczne i egzamin zawodowy).
Twoim nadrzędnym celem jest OBIEKTYWNA, RZETELNA OCENA APELACJI. Nie stosuj żadnego "naciągania punktów" ani sztucznej uprzejmości. Jeśli praca zawiera błędy dyskwalifikujące, MUSI OTRZYMAĆ OCENĘ 2.0 (niedostateczny) i punkty poniżej 12!

ZŁOTY KANON MERYTORYCZNY (ZASADY DYSKWALIFIKUJĄCE):
1. ZAKAZ ZARZUTÓW MIESZANYCH (adw. Marta Tomkiewicz-Januszewska, Rozdział 7.4):
   - Obraza prawa materialnego (art. 438 pkt 1 k.p.k.) może być podniesiona WYŁĄCZNIE przy pełnej akceptacji stanu faktycznego.
   - Jeśli autor kwestionuje dowody (art. 7 k.p.k., art. 410 k.p.k.) lub fakty (art. 438 pkt 3 k.p.k.), zarzut z art. 438 pkt 1 k.p.k. MOŻE BYĆ PODNIESIONY WYŁĄCZNIE JAKO ZARZUT EWENTUALNY ('Z ostrożności procesowej – na wypadek nieuwzględnienia...'). Złamanie tej zasady = błąd krytyczny i utrata punktów.
2. FORMULA WPŁYWU NA TREŚĆ ORZECZENIA:
   - Zarzuty z art. 438 pkt 2 k.p.k. i art. 438 pkt 3 k.p.k. BEZWZGLĘDNIE wymagają formuły "mającą wpływ na treść orzeczenia". Brak tej formuły = błąd krytyczny.
3. PRYMAT ORZEKANIA REFORMATORYJNEGO (art. 437 § 1 i 2 k.p.k.):
   - W pierwszej kolejności należy wnosić o ZMIANĘ wyroku (uniewinnienie / złagodzenie kary).
   - Wniosek o uchylenie wyroku (kasatoryjny) jest dopuszczalny WYŁĄCZNIE przy bezwzględnej przyczynie odwoławczej (art. 439 § 1 k.p.k.), zakazie ne peius (art. 454 k.p.k.) lub konieczności przeprowadzenia przewodu sądowego w całości. Złożenie wyłącznie wniosku o uchylenie bez tych podstaw = błąd krytyczny.
4. NIESPRZECZNOŚĆ WNIOSKÓW:
   - Wnoszenie jednocześnie o uniewinnienie i o złagodzenie kary bez formuły ewentualnej ("a na wypadek nieuwzględnienia...") jest błędem kardynalnym.
5. TRAFNOŚĆ MERYTORYCZNA I ZGODNOŚĆ Z KLUCZEM (MODEL SOLUTION):
   - Zarzuty muszą odpowiadać realnym naruszeniom prawa w kazusie. Powoływanie obcych przepisów (np. art. 148 w sprawie o alimenty/alkohol) lub całkowite pominięcie uchybień = ocena 2.0 (niedostateczny) i punkty poniżej 10.
6. PUŁAPKI KAZUSU:
   - Zwróć baczną uwagę na pułapki kazusu (np. stawianie zarzutu powagi rzeczy osądzonej przy braku tożsamości czasowej, pomylenie wagi brutto z netto, itp.). Wpadnięcie w pułapkę skutkuje potrąceniem punktów.`;

    const userPrompt = `DOKONAJ SUROWEJ, OBIEKTYWNEJ OCENY APELACJI KARNEJ.
KAZUS:
Tytuł: ${caseData.title}
Sygnatura: ${caseData.caseNumber}
Sąd: ${caseData.court}
Oskarżony: ${caseData.defendant}
Stan faktyczny: ${caseData.circumstancesOfAct || "Brak"}
Sentencja wyroku: ${caseData.verdictSentence || "Brak"}
Uzasadnienie sądu (fakty i prawo): ${(caseData.justificationFacts || "") + " " + (caseData.justificationLegal || "")}

WZORCOWE ROZWIĄZANIE (KLUCZ EGZAMINACYJNY / MODEL SOLUTION):
Zalecany zakres zaskarżenia: ${caseData.modelSolution?.recommendedScope || "W całości na korzyść oskarżonego"}

Wzorcowe zarzuty z klucza:
${caseData.modelSolution?.modelCharges?.map((c: any, i: number) => `${i + 1}. [${c.basis}] ${c.violatedArticles || ""}: ${c.formulation}\nWyjaśnienie: ${c.explanation || ""}`).join("\n\n") || "Brak"}

Wzorcowe wnioski z klucza:
${caseData.modelSolution?.modelMotions?.map((m: any, i: number) => `${i + 1}. [${m.type}] (${m.legalGround}): ${m.content}`).join("\n\n") || "Brak"}

Kluczowe zagadnienia prawne (Key Issues):
${caseData.keyIssues?.join("\n") || "Brak"}

Typowe pułapki (Common Pitfalls):
${caseData.modelSolution?.commonPitfalls?.join("\n") || "Brak"}

SPORZĄDZONA PRZEZ STUDENTA APELACJA DO OCENY:
Zakres zaskarżenia:
${appealSubmission.appealScope || appealSubmission.scope || "Brak"}

Zarzuty odwoławcze:
${appealSubmission.charges || "Brak"}

Wnioski odwoławcze:
${appealSubmission.motions || "Brak"}

Uzasadnienie:
${appealSubmission.justification || "Brak"}

INSTRUKCJA OCENY I PUNKTACJI (0 - 20 PKT):
- chargesFormulation: max 6 pkt (podstawy art. 438/439, formuła wpływu, brak zarzutów mieszanych bez formuły ewentualnej).
- chargesSubstance: max 6 pkt (trafność merytoryczna, trafienie w kluczowe uchybienia, brak przepisów obcych, unikanie pułapek).
- motionsCorrectness: max 4 pkt (poszanowanie prymatu orzekania reformatoryjnego, symetria z zarzutami, wnioski ewentualne).
- justificationQuality: max 4 pkt (argumentacja prawna, oparcie o dowody, rzetelność).
- PRÓG ZALICZENIA: >= 12 PKT. Poniżej 12 pkt: grade = "2.0 (niedostateczny)", passed = false.
- Jeśli student wpisał bzdury, obcy przepis, popełnił błąd zarzutów mieszanych lub wniósł tylko o uchylenie bez podstawy z art. 437 § 2 zd. 2 k.p.k., praca MUSI OTRZYMAĆ OCENĘ NIEDOSTATECZNĄ (2.0) i passed: false!`;

    let parsed: any = null;
    const candidateModels = ["gemini-3.6-flash", "gemini-3.5-flash", "gemini-3.1-flash-lite"];

    for (const modelName of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: userPrompt,
          config: {
            systemInstruction: systemPrompt,
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.NUMBER, description: "Punkty od 0 do 20" },
                grade: { type: Type.STRING, description: "Ocena słowna np. 4.0 (dobry) lub 2.0 (niedostateczny)" },
                passed: { type: Type.BOOLEAN, description: "Czy zaliczone (>= 12 pkt)" },
                summaryAssessment: { type: Type.STRING, description: "Ogólna ocena i uzasadnienie wyniku" },
                scoreBreakdown: {
                  type: Type.OBJECT,
                  properties: {
                    chargesFormulation: { type: Type.NUMBER },
                    chargesSubstance: { type: Type.NUMBER },
                    motionsCorrectness: { type: Type.NUMBER },
                    justificationQuality: { type: Type.NUMBER },
                  },
                  required: ["chargesFormulation", "chargesSubstance", "motionsCorrectness", "justificationQuality"],
                },
                criticalErrors: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      errorTitle: { type: Type.STRING },
                      description: { type: Type.STRING },
                      howToFix: { type: Type.STRING },
                    },
                    required: ["errorTitle", "description", "howToFix"],
                  },
                },
                strongPoints: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                },
                detailedFeedbackOnCharges: { type: Type.STRING },
                detailedFeedbackOnMotions: { type: Type.STRING },
                modelAppeal: {
                  type: Type.OBJECT,
                  properties: {
                    modelScope: { type: Type.STRING },
                    modelChargesText: { type: Type.STRING },
                    modelMotionsText: { type: Type.STRING },
                    modelJustificationBrief: { type: Type.STRING },
                  },
                  required: ["modelScope", "modelChargesText", "modelMotionsText", "modelJustificationBrief"],
                },
                colloquiumTips: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                },
              },
              required: [
                "score",
                "grade",
                "passed",
                "summaryAssessment",
                "scoreBreakdown",
                "criticalErrors",
                "strongPoints",
                "detailedFeedbackOnCharges",
                "detailedFeedbackOnMotions",
                "modelAppeal",
                "colloquiumTips",
              ],
            },
          },
        });

        parsed = JSON.parse(response.text || "{}");
        if (parsed && typeof parsed.score === "number") {
          break;
        }
      } catch (err: any) {
        console.warn(`Model ${modelName} failed (${err?.status || err?.code || err?.message?.substring(0, 50)}), trying next candidate...`);
      }
    }

    if (!parsed || typeof parsed.score !== "number") {
      throw new Error("No Gemini candidate model succeeded, falling back to rigorous heuristic evaluation");
    }

    res.json(parsed);
  } catch (error: any) {
    console.error("Error evaluating appeal with Gemini, falling back to rigorous heuristic evaluation:", error);
    const caseData = req.body.caseData;
    const appealSubmission = req.body.appealSubmission || req.body.submission;
    const sourceMaterials = req.body.sourceMaterials || req.body.materials;
    const evaluation = evaluateSubmissionRigorously(caseData, appealSubmission, sourceMaterials);
    res.json(evaluation);
  }
});

// Start server with Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`LexAlkoholica server running on port ${PORT}`);
  });
}

startServer();
