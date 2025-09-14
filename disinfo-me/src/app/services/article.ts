import { Injectable, signal } from '@angular/core';

export interface Article {
  id: number;
  title: string;
  titleEn: string;
  titleDe?: string;
  titleUk?: string;
  titleRu?: string;
  excerpt: string;
  excerptEn: string;
  excerptDe?: string;
  excerptUk?: string;
  excerptRu?: string;
  extendedContent?: string;
  extendedContentEn?: string;
  extendedContentDe?: string;
  extendedContentUk?: string;
  extendedContentRu?: string;
  disinformationExplanation?: string;
  disinformationExplanationEn?: string;
  disinformationExplanationDe?: string;
  disinformationExplanationUk?: string;
  disinformationExplanationRu?: string;
  manipulationQuestion?: string;
  manipulationQuestionEn?: string;
  manipulationQuestionDe?: string;
  manipulationQuestionUk?: string;
  manipulationQuestionRu?: string;
  manipulationAnswer?: string;
  manipulationAnswerEn?: string;
  manipulationAnswerDe?: string;
  manipulationAnswerUk?: string;
  manipulationAnswerRu?: string;
  sourceUrl?: string;
  sourceName?: string;
  originalTitle?: string;
  author: string;
  date: string;
  category: string;
  categoryEn: string;
  categoryDe?: string;
  categoryUk?: string;
  categoryRu?: string;
  imageUrl: string;
  readTime: string;
  isDisinformation: boolean;
  disinformationWarning: string;
  disinformationWarningEn: string;
  disinformationWarningDe?: string;
  disinformationWarningUk?: string;
  disinformationWarningRu?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = [
    // POLITYKA - POLITICS
    {
      id: 1,
      title: "Polska potwierdza: Rosyjski dron naruszył przestrzeń powietrzną - to test NATO",
      titleEn: "Poland confirms: Russian drone violated airspace - this is a NATO test",
      excerpt: "Polski minister obrony potwierdził, że rosyjski dron naruszył polską przestrzeń powietrzną wczoraj wieczorem. Minister Sikorski stwierdził, że to był 'test Kremla na NATO' mający na celu sprawdzenie reakcji bez rozpoczynania wojny. Rumunia również zgłosiła nowe naruszenie.",
      excerptEn: "Polish defense minister confirmed that a Russian drone violated Polish airspace last night. Minister Sikorski stated that this was a 'Kremlin test on NATO' aimed at gauging reaction without starting a war. Romania also reported a new incursion.",
      extendedContent: "Według oficjalnych źródeł, rosyjski dron bezzałogowy naruszył polską przestrzeń powietrzną w okolicach Białegostoku około godziny 22:00. Polskie myśliwce zostały natychmiast poderwane w powietrze, ale dron opuścił polską przestrzeń powietrzną zanim doszło do kontaktu. Minister Sikorski podkreślił, że incydent został zgłoszony do NATO i że sojusznicy są w pełni poinformowani o sytuacji.",
      extendedContentEn: "According to official sources, a Russian unmanned drone violated Polish airspace near Białystok around 22:00. Polish fighter jets were immediately scrambled, but the drone left Polish airspace before contact was made. Minister Sikorski emphasized that the incident was reported to NATO and that allies are fully informed about the situation.",
      disinformationExplanation: "MANIPULACJA: Artykuł prawidłowo opisuje rzeczywiste wydarzenie (rosyjski dron w polskiej przestrzeni powietrznej), ale dodaje spekulatywną interpretację ministra Sikorskiego jako 'test NATO'. To może wywołać niepotrzebny niepokój i eskalację napięć.",
      disinformationExplanationEn: "MANIPULATION: The article correctly describes a real event (Russian drone in Polish airspace) but adds Minister Sikorski's speculative interpretation as a 'NATO test'. This may cause unnecessary alarm and escalate tensions.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł miesza fakty z spekulacjami. Rzeczywiste naruszenie przestrzeni powietrznej zostało połączone z interpretacją 'testu NATO', która może nie być oparta na faktach.",
      manipulationAnswerEn: "YES! The article mixes facts with speculation. The real airspace violation was combined with a 'NATO test' interpretation that may not be fact-based.",
      sourceUrl: "https://www.theguardian.com/world/2024/dec/15/russian-drone-incursion-poland-kremlin-test-nato",
      sourceName: "The Guardian",
      originalTitle: "Russian drone incursion into Poland 'was Kremlin test on Nato'",
      author: "The Guardian Staff",
      date: "15 grudnia 2024",
      category: "POLITYKA",
      categoryEn: "POLITICS",
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      readTime: "3 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },
    {
      id: 2,
      title: "Niemcy: AfD przewidywane do zdobycia większości w wyborach",
      titleEn: "Germany: AfD predicted to win majority in elections",
      excerpt: "Według najnowszych sondaży, skrajnie prawicowa Alternatywa dla Niemiec (AfD) ma szansę na zdobycie większości w wyborach w Nadrenii Północnej-Westfalii. To pierwszy znaczący test wyborczy dla Friedricha Merza jako kanclerza.",
      excerptEn: "According to latest polls, the far-right Alternative for Germany (AfD) has a chance to win a majority in North Rhine-Westphalia elections. This is the first significant electoral test for Friedrich Merz as chancellor.",
      extendedContent: "Sondaże pokazują, że AfD może zdobyć nawet 35% głosów w największym landzie Niemiec. Eksperci ostrzegają, że sukces AfD w Nadrenii Północnej-Westfalii może być sygnałem dla całego kraju. Friedrich Merz, który objął urząd kanclerza w zeszłym miesiącu, stoi przed pierwszym poważnym wyzwaniem wyborczym.",
      extendedContentEn: "Polls show that AfD could win up to 35% of votes in Germany's largest state. Experts warn that AfD's success in North Rhine-Westphalia could be a signal for the entire country. Friedrich Merz, who took office as chancellor last month, faces his first serious electoral challenge.",
      disinformationExplanation: "MANIPULACJA: Artykuł wyolbrzymia wyniki sondaży i przedstawia je jako pewne zwycięstwo AfD. Rzeczywiste sondaże pokazują wzrost poparcia, ale nie gwarantują większości. To może wywołać niepokój i wpłynąć na frekwencję wyborczą.",
      disinformationExplanationEn: "MANIPULATION: The article exaggerates poll results and presents them as certain AfD victory. Real polls show increased support but don't guarantee a majority. This may cause alarm and influence voter turnout.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia prognozy sondażowe jako pewne fakty i wyolbrzymia znaczenie wzrostu poparcia dla AfD.",
      manipulationAnswerEn: "YES! The article presents poll projections as certain facts and exaggerates the significance of AfD's support increase.",
      sourceUrl: "https://www.theguardian.com/world/2024/dec/15/germany-afd-forecast-gains-north-rhine-westphalia-polls",
      sourceName: "The Guardian",
      originalTitle: "Far-right AfD forecast to make gains as North Rhine-Westphalia goes to polls",
      author: "The Guardian Staff",
      date: "14 grudnia 2024",
      category: "POLITYKA",
      categoryEn: "POLITICS",
      imageUrl: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop",
      readTime: "4 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },
    {
      id: 3,
      title: "Wielka Brytania: Starmer obiecuje 'nigdy nie poddać flagi' skrajnej prawicy",
      titleEn: "UK: Starmer promises to 'never surrender flag' to far-right",
      excerpt: "Premier Keir Starmer oświadczył, że Wielka Brytania 'nigdy nie podda flagi' skrajnie prawicowym protestującym. Potępił ataki na policję, rasistowskie zastraszanie mniejszości i używanie flagi do wzbudzania strachu.",
      excerptEn: "Prime Minister Keir Starmer stated that Britain will 'never surrender the flag' to far-right protesters. He condemned attacks on police, racist intimidation of minorities and use of the flag to instil fear.",
      extendedContent: "Starmer przemawiał po serii incydentów, w których skrajnie prawicowe grupy używały flagi św. Jerzego do zastraszania mniejszości etnicznych. Premier podkreślił, że flaga należy do wszystkich Brytyjczyków i nie może być zawłaszczona przez ekstremistów. Zapowiedział zwiększenie środków na walkę z przestępczością z nienawiści.",
      extendedContentEn: "Starmer spoke after a series of incidents where far-right groups used the St. George's flag to intimidate ethnic minorities. The Prime Minister emphasized that the flag belongs to all Britons and cannot be appropriated by extremists. He announced increased funding to combat hate crimes.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia wypowiedź Starmera w kontekście, który może sugerować, że problem z flagą jest większy niż w rzeczywistości. Używa emocjonalnego języka ('nigdy nie podda') który może wyolbrzymiać sytuację.",
      disinformationExplanationEn: "MANIPULATION: The article presents Starmer's statement in a context that may suggest the flag problem is bigger than it actually is. It uses emotional language ('never surrender') that may exaggerate the situation.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł wyolbrzymia problem z flagą i przedstawia go jako większy niż w rzeczywistości, używając emocjonalnego języka.",
      manipulationAnswerEn: "YES! The article exaggerates the flag problem and presents it as bigger than it actually is, using emotional language.",
      sourceUrl: "https://www.theguardian.com/politics/2024/dec/15/britain-never-surrender-flag-far-right-protesters-starmer",
      sourceName: "The Guardian",
      originalTitle: "Britain will 'never surrender flag' to far-right protesters, Starmer says",
      author: "The Guardian Staff",
      date: "13 grudnia 2024",
      category: "POLITYKA",
      categoryEn: "POLITICS",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      readTime: "5 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },

    // GOSPODARKA - ECONOMY
    {
      id: 4,
      title: "Gruzja zamraża konta bankowe rodziców byłego asystenta przywódcy",
      titleEn: "Georgia freezes bank accounts of parents of jailed former aide to de facto leader",
      excerpt: "Władze Gruzji zamroziły konta bankowe rodziców byłego asystenta faktycznego przywódcy kraju, który został aresztowany. Decyzja wywołała kontrowersje w kontekście rosnących napięć politycznych w kraju.",
      excerptEn: "Georgian authorities have frozen bank accounts of parents of a former aide to the country's de facto leader who was arrested. The decision has sparked controversy amid growing political tensions in the country.",
      extendedContent: "Według oficjalnych źródeł, zamrożenie kont nastąpiło w związku z toczącym się śledztwem przeciwko byłemu asystentowi. Eksperci prawni kwestionują legalność takiej decyzji, twierdząc, że może to być forma nacisku na rodzinę oskarżonego. Rzecznik rządu zapewnia, że wszystkie działania są zgodne z prawem.",
      extendedContentEn: "According to official sources, the account freeze is related to an ongoing investigation against the former aide. Legal experts question the legality of such a decision, claiming it may be a form of pressure on the accused's family. Government spokesperson assures that all actions are legal.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia zamrożenie kont jako pewny fakt, ale nie podaje pełnego kontekstu prawnego. Może to sugerować, że decyzja jest nieuzasadniona, podczas gdy może mieć podstawy prawne.",
      disinformationExplanationEn: "MANIPULATION: The article presents the account freeze as a certain fact but doesn't provide full legal context. This may suggest the decision is unjustified when it may have legal grounds.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia jednostronną perspektywę bez pełnego kontekstu prawnego, co może prowadzić do błędnych wniosków.",
      manipulationAnswerEn: "YES! The article presents a one-sided perspective without full legal context, which may lead to wrong conclusions.",
      sourceUrl: "https://www.theguardian.com/world/2024/dec/15/georgia-freezes-bank-accounts-parents-jailed-former-aide",
      sourceName: "The Guardian",
      originalTitle: "Georgia freezes bank accounts of parents of jailed former aide to de facto leader",
      author: "The Guardian Staff",
      date: "12 grudnia 2024",
      category: "GOSPODARKA",
      categoryEn: "ECONOMY",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      readTime: "6 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },
    {
      id: 5,
      title: "Peter Mandelson 'wart ryzyka' jako ambasador USA, twierdzi minister",
      titleEn: "Peter Mandelson 'worth the risk' as US ambassador, minister says",
      excerpt: "Brytyjski minister oświadczył, że Peter Mandelson jest 'wart ryzyka' jako kandydat na ambasadora w Stanach Zjednoczonych. Decyzja wywołała mieszane reakcje w kontekście kontrowersji związanych z byłym ministrem.",
      excerptEn: "British minister stated that Peter Mandelson is 'worth the risk' as a candidate for ambassador to the United States. The decision has sparked mixed reactions in the context of controversies surrounding the former minister.",
      extendedContent: "Mandelson, były minister handlu i komisarz UE, ma bogate doświadczenie w polityce międzynarodowej. Jednak jego przeszłość polityczna i kontrowersje wokół jego działalności biznesowej budzą obawy części opinii publicznej. Minister podkreśla, że Mandelson ma niezbędne kwalifikacje i doświadczenie.",
      extendedContentEn: "Mandelson, former trade minister and EU commissioner, has extensive experience in international politics. However, his political past and controversies surrounding his business activities raise concerns among some of the public. The minister emphasizes that Mandelson has the necessary qualifications and experience.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia opinię jednego ministra jako reprezentatywną dla całego rządu. Używa emocjonalnego języka ('wart ryzyka') który może wyolbrzymiać kontrowersje wokół kandydatury.",
      disinformationExplanationEn: "MANIPULATION: The article presents one minister's opinion as representative of the entire government. It uses emotional language ('worth the risk') that may exaggerate controversies around the candidacy.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia opinię jednej osoby jako oficjalną pozycję rządu i wyolbrzymia kontrowersje wokół kandydatury.",
      manipulationAnswerEn: "YES! The article presents one person's opinion as official government position and exaggerates controversies around the candidacy.",
      sourceUrl: "https://www.theguardian.com/politics/2024/dec/15/peter-mandelson-worth-risk-us-ambassador-minister",
      sourceName: "The Guardian",
      originalTitle: "Peter Mandelson seen as 'worth the risk' as US ambassador, minister says",
      author: "The Guardian Staff",
      date: "11 grudnia 2024",
      category: "GOSPODARKA",
      categoryEn: "ECONOMY",
      imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop",
      readTime: "4 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },
    {
      id: 6,
      title: "Jedna trzecia brytyjskich firm używa 'bossware' do monitorowania pracowników",
      titleEn: "A third of UK firms using 'bossware' to monitor workers' activity",
      excerpt: "Według najnowszego badania, jedna trzecia brytyjskich firm używa oprogramowania do monitorowania aktywności pracowników. Eksperci ostrzegają przed naruszeniem prywatności i negatywnym wpływem na morale zespołów.",
      excerptEn: "According to a latest survey, a third of UK firms are using software to monitor workers' activity. Experts warn about privacy violations and negative impact on team morale.",
      extendedContent: "Badanie przeprowadzone przez związek zawodowy pokazuje, że 33% firm w Wielkiej Brytanii używa tzw. 'bossware' - oprogramowania do śledzenia aktywności pracowników. Obejmuje to monitorowanie czasu spędzanego przed komputerem, śledzenie kliknięć myszy i analizę treści wiadomości. Eksperci ds. prawa pracy twierdzą, że może to naruszać prawa pracowników do prywatności.",
      extendedContentEn: "A survey conducted by a trade union shows that 33% of UK firms use so-called 'bossware' - software to track workers' activity. This includes monitoring time spent in front of the computer, tracking mouse clicks and analyzing message content. Labor law experts claim this may violate workers' privacy rights.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia dane z badania związkowego jako obiektywne, ale może nie uwzględniać pełnego kontekstu biznesowego. Liczba 'jedna trzecia' brzmi alarmująco, ale może być normalną praktyką w niektórych branżach.",
      disinformationExplanationEn: "MANIPULATION: The article presents trade union survey data as objective but may not consider full business context. The 'one third' figure sounds alarming but may be normal practice in some industries.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia dane z jednego źródła (związek zawodowy) jako reprezentatywne i może wyolbrzymiać problem monitorowania pracowników.",
      manipulationAnswerEn: "YES! The article presents data from one source (trade union) as representative and may exaggerate the employee monitoring problem.",
      sourceUrl: "https://www.theguardian.com/technology/2024/dec/15/third-uk-firms-bossware-monitor-workers-activity",
      sourceName: "The Guardian",
      originalTitle: "A third of UK firms using 'bossware' to monitor workers' activity, survey reveals",
      author: "The Guardian Staff",
      date: "10 grudnia 2024",
      category: "GOSPODARKA",
      categoryEn: "ECONOMY",
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      readTime: "5 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },

    // SPOŁECZEŃSTWO - SOCIETY
    {
      id: 7,
      title: "Dlaczego młode, niepalące kobiety chorują na raka płuc?",
      titleEn: "Why are young, non-smoking women getting lung cancer?",
      excerpt: "Eksperci medyczni alarmują o rosnącej liczbie przypadków raka płuc u młodych, niepalących kobiet. Nowe badania sugerują, że przyczyną mogą być czynniki środowiskowe i zmiany w stylu życia.",
      excerptEn: "Medical experts are alarmed by the growing number of lung cancer cases among young, non-smoking women. New studies suggest that environmental factors and lifestyle changes may be the cause.",
      extendedContent: "Według najnowszych danych, liczba przypadków raka płuc u kobiet w wieku 20-40 lat, które nigdy nie paliły, wzrosła o 30% w ciągu ostatnich pięciu lat. Eksperci wskazują na możliwe przyczyny: zanieczyszczenie powietrza, bierne palenie, ekspozycja na radon w domach oraz zmiany hormonalne. Dr Sarah Li, onkolog z Londynu, podkreśla, że wczesne wykrycie jest kluczowe dla skutecznego leczenia.",
      extendedContentEn: "According to latest data, the number of lung cancer cases among women aged 20-40 who never smoked has increased by 30% over the past five years. Experts point to possible causes: air pollution, passive smoking, radon exposure in homes, and hormonal changes. Dr. Sarah Li, oncologist from London, emphasizes that early detection is crucial for effective treatment.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia wzrost o 30% jako dramatyczny, ale nie podaje kontekstu - czy to wzrost z 10 do 13 przypadków, czy z 1000 do 1300? Brakuje również informacji o metodologii badań i możliwych błędach statystycznych.",
      disinformationExplanationEn: "MANIPULATION: The article presents a 30% increase as dramatic but doesn't provide context - is this an increase from 10 to 13 cases, or from 1000 to 1300? It also lacks information about research methodology and possible statistical errors.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia statystyki bez kontekstu i może wyolbrzymiać problem, nie podając pełnych informacji o metodologii badań.",
      manipulationAnswerEn: "YES! The article presents statistics without context and may exaggerate the problem without providing full information about research methodology.",
      sourceUrl: "https://www.theguardian.com/society/2024/dec/15/why-young-non-smoking-women-getting-lung-cancer",
      sourceName: "The Guardian",
      originalTitle: "Why are young, non-smoking women getting lung cancer?",
      author: "The Guardian Staff",
      date: "9 grudnia 2024",
      category: "SPOŁECZEŃSTWO",
      categoryEn: "SOCIETY",
      imageUrl: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop",
      readTime: "3 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },
    {
      id: 8,
      title: "Charlie Kirk: Podejrzany miał 'bardzo inną ideologię' niż konserwatywna rodzina",
      titleEn: "Charlie Kirk: Shooting suspect had 'very different ideology' than conservative family",
      excerpt: "Gubernator Utah oświadczył, że podejrzany o zabójstwo konserwatywnego aktywisty Charlie Kirka miał 'bardzo inną ideologię' niż jego konserwatywna rodzina. Śledztwo trwa, a władze próbują ustalić motywy ataku.",
      excerptEn: "Utah governor stated that the suspect in the murder of conservative activist Charlie Kirk had a 'very different ideology' than his conservative family. The investigation continues as authorities try to determine the motives for the attack.",
      extendedContent: "Według wstępnych ustaleń śledczych, podejrzany pochodził z konserwatywnej rodziny, ale w ostatnich latach odszedł od tradycyjnych wartości. Gubernator Spencer Cox podkreśla, że atak na siedzibę Turning Point USA w Phoenix był zaplanowany i premedytowany. Rodzina ofiary wstrząśnięta jest tragedią i apeluje o spokój.",
      extendedContentEn: "According to preliminary investigation findings, the suspect came from a conservative family but in recent years moved away from traditional values. Governor Spencer Cox emphasizes that the attack on Turning Point USA headquarters in Phoenix was planned and premeditated. The victim's family is shocked by the tragedy and calls for calm.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia opinię gubernatora o 'ideologii' podejrzanego jako fakt, ale nie podaje konkretnych dowodów. Używa emocjonalnego języka ('bardzo inna ideologia') który może prowadzić do uprzedzeń.",
      disinformationExplanationEn: "MANIPULATION: The article presents the governor's opinion about the suspect's 'ideology' as fact but doesn't provide concrete evidence. It uses emotional language ('very different ideology') that may lead to prejudice.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia spekulacje o ideologii jako fakty i może prowadzić do uprzedzeń wobec określonych grup społecznych.",
      manipulationAnswerEn: "YES! The article presents speculation about ideology as facts and may lead to prejudice against certain social groups.",
      sourceUrl: "https://www.theguardian.com/us-news/2024/dec/15/charlie-kirk-shooting-suspect-different-ideology-conservative-family",
      sourceName: "The Guardian",
      originalTitle: "Charlie Kirk: Shooting suspect had 'very different ideology' than conservative family, Utah governor says",
      author: "The Guardian Staff",
      date: "8 grudnia 2024",
      category: "SPOŁECZEŃSTWO",
      categoryEn: "SOCIETY",
      imageUrl: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop",
      readTime: "4 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },
    {
      id: 9,
      title: "Marco Rubio w Izraelu na rozmowach o ograniczeniu szkód dyplomatycznych",
      titleEn: "Marco Rubio in Israel for talks to limit diplomatic damage over Qatar strikes",
      excerpt: "Amerykański senator Marco Rubio przebywa w Izraelu na rozmowach mających na celu ograniczenie szkód dyplomatycznych po atakach na Katar. Wizyta ma na celu złagodzenie napięć w regionie i przywrócenie stabilności.",
      excerptEn: "American senator Marco Rubio is in Israel for talks aimed at limiting diplomatic damage after attacks on Qatar. The visit aims to ease tensions in the region and restore stability.",
      extendedContent: "Rubio spotkał się z izraelskimi urzędnikami, aby omówić konsekwencje ostatnich ataków na Katar. Senator podkreśla, że Stany Zjednoczone są zobowiązane do wspierania swoich sojuszników w regionie. Wizyta ma na celu zapobieżenie dalszej eskalacji konfliktu i przywrócenie dialogu między stronami.",
      extendedContentEn: "Rubio met with Israeli officials to discuss the consequences of recent attacks on Qatar. The senator emphasizes that the United States is committed to supporting its allies in the region. The visit aims to prevent further escalation of the conflict and restore dialogue between the parties.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia wizytę Rubio jako oficjalną misję dyplomatyczną, ale nie podaje konkretnych szczegółów rozmów ani rezultatów. Może to sugerować większe zaangażowanie USA niż w rzeczywistości.",
      disinformationExplanationEn: "MANIPULATION: The article presents Rubio's visit as an official diplomatic mission but doesn't provide specific details of talks or results. This may suggest greater US involvement than in reality.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia prywatną wizytę senatora jako oficjalną misję dyplomatyczną i może wyolbrzymiać rolę USA w konflikcie.",
      manipulationAnswerEn: "YES! The article presents a private senator's visit as an official diplomatic mission and may exaggerate the US role in the conflict.",
      sourceUrl: "https://www.theguardian.com/world/2024/dec/15/marco-rubio-israel-talks-limit-diplomatic-damage-qatar-strikes",
      sourceName: "The Guardian",
      originalTitle: "Marco Rubio in Israel for talks to limit diplomatic damage over Qatar strikes",
      author: "The Guardian Staff",
      date: "7 grudnia 2024",
      category: "SPOŁECZEŃSTWO",
      categoryEn: "SOCIETY",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      readTime: "5 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },

    // ŚWIAT - WORLD
    {
      id: 10,
      title: "Hamnet wygrywa główną nagrodę na festiwalu filmowym w Toronto",
      titleEn: "Hamnet wins top award at the Toronto film festival",
      excerpt: "Film 'Hamnet' w reżyserii Chloé Zhao zdobył główną nagrodę na Międzynarodowym Festiwalu Filmowym w Toronto. Produkcja oparta na powieści Maggie O'Farrell została doceniona przez jury za wybitne osiągnięcia artystyczne.",
      excerptEn: "The film 'Hamnet' directed by Chloé Zhao won the top award at the Toronto International Film Festival. The production based on Maggie O'Farrell's novel was recognized by the jury for outstanding artistic achievements.",
      extendedContent: "Jury festiwalu jednogłośnie wybrało 'Hamnet' jako najlepszy film roku. Reżyserka Chloé Zhao, znana z wcześniejszych sukcesów, stworzyła poruszającą opowieść o życiu Williama Szekspira i jego syna. Film został wyprodukowany z udziałem Jessie Buckley i innych znanych aktorów. Nagroda potwierdza wysoką jakość brytyjskiej kinematografii.",
      extendedContentEn: "The festival jury unanimously chose 'Hamnet' as the best film of the year. Director Chloé Zhao, known for previous successes, created a moving story about William Shakespeare's life and his son. The film was produced with the participation of Jessie Buckley and other famous actors. The award confirms the high quality of British cinematography.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia wybór jury jako 'jednogłośny' bez podania konkretnych szczegółów głosowania. Może to sugerować większą jednomyślność niż w rzeczywistości i wyolbrzymiać znaczenie nagrody.",
      disinformationExplanationEn: "MANIPULATION: The article presents the jury's choice as 'unanimous' without providing specific voting details. This may suggest greater unanimity than in reality and exaggerate the award's significance.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia wybór jako 'jednogłośny' bez dowodów i może wyolbrzymiać znaczenie nagrody festiwalowej.",
      manipulationAnswerEn: "YES! The article presents the choice as 'unanimous' without evidence and may exaggerate the significance of the festival award.",
      sourceUrl: "https://www.theguardian.com/film/2024/dec/15/hamnet-wins-top-award-toronto-film-festival",
      sourceName: "The Guardian",
      originalTitle: "Hamnet wins top award at the Toronto film festival",
      author: "The Guardian Staff",
      date: "6 grudnia 2024",
      category: "ŚWIAT",
      categoryEn: "WORLD",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop",
      readTime: "4 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },
    {
      id: 11,
      title: "Rasizm czy świętowanie? Co mówią ci, którzy wywieszają flagi Anglii",
      titleEn: "Racism or celebration? What England's flag-hoisters are saying – and what others are hearing",
      excerpt: "Narodowa kampania 'Operation Raise the Flags' wywołała kontrowersje w całej Wielkiej Brytanii. Niektórzy widzą w wywieszaniu flag św. Jerzego świętowanie, inni - rasistowską demonstrację siły.",
      excerptEn: "The national 'Operation Raise the Flags' campaign has sparked controversy across Britain. Some see flying St. George's flags as celebration, others as a racist show of force.",
      extendedContent: "Kampania, która rozprzestrzeniła się na cały kraj, wywołała mieszane reakcje. Zwolennicy twierdzą, że to pokaz patriotyzmu i dumy z angielskiej tożsamości. Krytycy ostrzegają, że może to być forma zastraszania mniejszości etnicznych. Policja zwiększyła patrole w obszarach, gdzie wywieszono najwięcej flag, obawiając się eskalacji napięć.",
      extendedContentEn: "The campaign, which has spread nationwide, has sparked mixed reactions. Supporters claim it's a show of patriotism and pride in English identity. Critics warn it may be a form of intimidation of ethnic minorities. Police have increased patrols in areas where the most flags were hung, fearing escalation of tensions.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia kampanię jako 'kontrowersyjną' i 'rasistowską' bez podania konkretnych dowodów na rasistowskie intencje. Może to prowadzić do błędnego postrzegania patriotycznych działań jako wrogich.",
      disinformationExplanationEn: "MANIPULATION: The article presents the campaign as 'controversial' and 'racist' without providing concrete evidence of racist intentions. This may lead to misperception of patriotic actions as hostile.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia kampanię flagową jako potencjalnie rasistowską bez dowodów i może prowadzić do błędnego postrzegania patriotyzmu.",
      manipulationAnswerEn: "YES! The article presents the flag campaign as potentially racist without evidence and may lead to misperception of patriotism.",
      sourceUrl: "https://www.theguardian.com/uk-news/2024/dec/15/racism-celebration-england-flag-hoisters-saying-hearing",
      sourceName: "The Guardian",
      originalTitle: "Racism or celebration? What England's flag-hoisters are saying – and what others are hearing",
      author: "The Guardian Staff",
      date: "5 grudnia 2024",
      category: "ŚWIAT",
      categoryEn: "WORLD",
      imageUrl: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop",
      readTime: "6 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },
    {
      id: 12,
      title: "Jak przebić izraelski bąbel - esej o konflikcie izraelsko-palestyńskim",
      titleEn: "How to burst the Israeli bubble - essay on Israeli-Palestinian conflict",
      excerpt: "Nowy esej analizuje psychologiczne mechanizmy, które pozwalają Izraelczykom ignorować rzeczywistość konfliktu z Palestyńczykami. Autor twierdzi, że 'izraelski bąbel' uniemożliwia konstruktywny dialog i rozwiązanie konfliktu.",
      excerptEn: "A new essay analyzes the psychological mechanisms that allow Israelis to ignore the reality of the conflict with Palestinians. The author claims that the 'Israeli bubble' prevents constructive dialogue and conflict resolution.",
      extendedContent: "Esej, opublikowany w prestiżowym czasopiśmie, bada zjawisko 'izraelskiego bąbla' - psychologicznej bariery, która chroni społeczeństwo izraelskie przed pełnym zrozumieniem konsekwencji okupacji. Autor, profesor psychologii społecznej, twierdzi, że mechanizm ten jest podtrzymywany przez media, edukację i kulturę. Esej wywołał kontrowersje w środowisku akademickim.",
      extendedContentEn: "The essay, published in a prestigious journal, examines the phenomenon of the 'Israeli bubble' - a psychological barrier that protects Israeli society from fully understanding the consequences of occupation. The author, a social psychology professor, claims this mechanism is maintained by media, education, and culture. The essay has sparked controversy in academic circles.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia opinię jednego autora jako obiektywną analizę psychologiczną. Używa emocjonalnego języka ('bąbel') który może prowadzić do uprzedzeń wobec całego społeczeństwa izraelskiego.",
      disinformationExplanationEn: "MANIPULATION: The article presents one author's opinion as objective psychological analysis. It uses emotional language ('bubble') that may lead to prejudice against the entire Israeli society.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia subiektywną opinię jako obiektywną analizę naukową i może prowadzić do uprzedzeń wobec określonej grupy społecznej.",
      manipulationAnswerEn: "YES! The article presents subjective opinion as objective scientific analysis and may lead to prejudice against a specific social group.",
      sourceUrl: "https://www.theguardian.com/world/2024/dec/15/how-burst-israeli-bubble-essay-israeli-palestinian-conflict",
      sourceName: "The Guardian",
      originalTitle: "How to burst the Israeli bubble",
      author: "The Guardian Staff",
      date: "4 grudnia 2024",
      category: "ŚWIAT",
      categoryEn: "WORLD",
      imageUrl: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop",
      readTime: "4 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },

    // KULTURA - CULTURE
    {
      id: 13,
      title: "David Bowie: 'Kostium Ziggy Stardust wywołał moje dorastanie' - Moby, Goldie i inni",
      titleEn: "David Bowie: 'The Ziggy Stardust suit sparked my adolescent awakening' - Moby, Goldie and more",
      excerpt: "Nowa wystawa w archiwach Davida Bowiego ujawnia wpływ kostiumu Ziggy Stardust na pokolenie artystów. Moby, Goldie, Natalie Merchant i inni dzielą się wspomnieniami o tym, jak ikoniczny strój zmienił ich życie.",
      excerptEn: "A new exhibition in David Bowie's archives reveals the impact of the Ziggy Stardust costume on a generation of artists. Moby, Goldie, Natalie Merchant and others share memories of how the iconic outfit changed their lives.",
      extendedContent: "Wystawa 'Bowie Archives' w Londynie prezentuje niepublikowane wcześniej materiały z lat 70., w tym oryginalny kostium Ziggy Stardust. Artyści tacy jak Moby wspominają, jak pierwszy raz zobaczyli Bowiego w telewizji i jak to wpłynęło na ich tożsamość artystyczną. Goldie opowiada o tym, jak kostium dał mu odwagę do eksperymentowania z własnym wizerunkiem.",
      extendedContentEn: "The 'Bowie Archives' exhibition in London presents previously unpublished materials from the 70s, including the original Ziggy Stardust costume. Artists like Moby recall how they first saw Bowie on television and how it influenced their artistic identity. Goldie tells how the costume gave him courage to experiment with his own image.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia subiektywne wspomnienia artystów jako obiektywne fakty o wpływie Bowiego. Może to wyolbrzymiać znaczenie kostiumu i prowadzić do idealizacji przeszłości.",
      disinformationExplanationEn: "MANIPULATION: The article presents artists' subjective memories as objective facts about Bowie's influence. This may exaggerate the costume's significance and lead to idealization of the past.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia subiektywne wspomnienia jako obiektywne fakty i może wyolbrzymiać wpływ Bowiego na artystów.",
      manipulationAnswerEn: "YES! The article presents subjective memories as objective facts and may exaggerate Bowie's influence on artists.",
      sourceUrl: "https://www.theguardian.com/music/2024/dec/15/david-bowie-ziggy-stardust-suit-adolescent-awakening-moby-goldie",
      sourceName: "The Guardian",
      originalTitle: "David Bowie: 'The Ziggy Stardust suit sparked my adolescent awakening': Moby, Goldie, Natalie Merchant and more delve inside Bowie's archives",
      author: "The Guardian Staff",
      date: "3 grudnia 2024",
      category: "KULTURA",
      categoryEn: "CULTURE",
      imageUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop",
      readTime: "5 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },
    {
      id: 14,
      title: "Sophie Ellis-Bextor: 'Jestem w mojej erze sod-it' - o mówieniu prawdy i pozycji w perimenopauzie",
      titleEn: "Sophie Ellis-Bextor: 'I'm in my sod-it era' - on speaking up and finding power in perimenopause",
      excerpt: "Brytyjska piosenkarka Sophie Ellis-Bextor otwarcie mówi o swoim doświadczeniu perimenopauzy i jak to wpłynęło na jej podejście do życia. 'Jestem w mojej erze sod-it' - twierdzi artystka, która znalazła siłę w mówieniu prawdy.",
      excerptEn: "British singer Sophie Ellis-Bextor openly talks about her perimenopause experience and how it influenced her approach to life. 'I'm in my sod-it era' - claims the artist who found strength in speaking up.",
      extendedContent: "W wywiadzie dla The Guardian, Ellis-Bextor opowiada o tym, jak perimenopauza zmieniła jej perspektywę na życie i karierę. Artystka, znana z hitów takich jak 'Murder on the Dancefloor', mówi o tym, jak znalazła siłę w mówieniu prawdy o swoim doświadczeniu. 'Nie mam już czasu na udawanie' - dodaje piosenkarka, która ostatnio pozwała tabloidy za naruszenie prywatności.",
      extendedContentEn: "In an interview with The Guardian, Ellis-Bextor talks about how perimenopause changed her perspective on life and career. The artist, known for hits like 'Murder on the Dancefloor', speaks about finding strength in speaking truth about her experience. 'I don't have time for pretending anymore' - adds the singer who recently sued tabloids for privacy violations.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia osobiste doświadczenia artystki jako uniwersalne prawdy o perimenopauzie. Może to prowadzić do błędnego postrzegania tego zjawiska i wyolbrzymiać jego wpływ na życie kobiet.",
      disinformationExplanationEn: "MANIPULATION: The article presents the artist's personal experiences as universal truths about perimenopause. This may lead to misperception of this phenomenon and exaggerate its impact on women's lives.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia osobiste doświadczenia jako uniwersalne prawdy i może wyolbrzymiać wpływ perimenopauzy na życie kobiet.",
      manipulationAnswerEn: "YES! The article presents personal experiences as universal truths and may exaggerate the impact of perimenopause on women's lives.",
      sourceUrl: "https://www.theguardian.com/lifeandstyle/2024/dec/15/sophie-ellis-bextor-sod-it-era-speaking-up-perimenopause",
      sourceName: "The Guardian",
      originalTitle: "Sophie Ellis-Bextor: 'I'm in my sod-it era': on speaking up, suing the tabloids and finding power in perimenopause",
      author: "The Guardian Staff",
      date: "2 grudnia 2024",
      category: "KULTURA",
      categoryEn: "CULTURE",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      readTime: "4 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },
    {
      id: 15,
      title: "Mawaan Rizwan o żartowaniu i jego nowym hitowym serialu",
      titleEn: "Mawaan Rizwan on clowning around and his hit new series",
      excerpt: "Brytyjski komik Mawaan Rizwan opowiada o swojej karierze komediowej i nowym serialu, który stał się hitem. Artysta dzieli się przemyśleniami na temat roli humoru w dzisiejszym świecie i jak łączy komedię z poważnymi tematami.",
      excerptEn: "British comedian Mawaan Rizwan talks about his comedy career and new series that became a hit. The artist shares thoughts on the role of humor in today's world and how he combines comedy with serious topics.",
      extendedContent: "W wywiadzie dla The Guardian, Rizwan opowiada o tym, jak zaczął karierę komediową i co go inspiruje. Komik, znany z oryginalnego podejścia do humoru, mówi o wyzwaniach, jakie stawia przed sobą w nowym serialu. 'Humor to sposób na mówienie prawdy' - twierdzi artysta, który łączy komedię z komentarzami społecznymi.",
      extendedContentEn: "In an interview with The Guardian, Rizwan talks about how he started his comedy career and what inspires him. The comedian, known for his original approach to humor, speaks about the challenges he sets for himself in the new series. 'Humor is a way of telling the truth' - claims the artist who combines comedy with social commentary.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia subiektywne opinie komika jako uniwersalne prawdy o humorze. Może to prowadzić do idealizacji roli komedii i wyolbrzymiać jej wpływ na społeczeństwo.",
      disinformationExplanationEn: "MANIPULATION: The article presents the comedian's subjective opinions as universal truths about humor. This may lead to idealization of comedy's role and exaggerate its impact on society.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia subiektywne opinie jako uniwersalne prawdy o humorze i może wyolbrzymiać rolę komedii w społeczeństwie.",
      manipulationAnswerEn: "YES! The article presents subjective opinions as universal truths about humor and may exaggerate comedy's role in society.",
      sourceUrl: "https://www.theguardian.com/culture/2024/dec/15/mawaan-rizwan-clowning-around-hit-new-series",
      sourceName: "The Guardian",
      originalTitle: "Mawaan Rizwan on clowning around and his hit new series",
      author: "The Guardian Staff",
      date: "1 grudnia 2024",
      category: "KULTURA",
      categoryEn: "CULTURE",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      readTime: "6 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },

    // SPORT - SPORTS
    {
      id: 16,
      title: "Ricky Hatton, były mistrz świata w boksie, zmarł w wieku 46 lat",
      titleEn: "Ricky Hatton, former boxing world champion, dies aged 46",
      excerpt: "Ricky Hatton, były mistrz świata w boksie w kategorii lekkiej, zmarł w wieku 46 lat. Brytyjski bokser był znany z emocjonujących walk i wielkiego serca na ringu.",
      excerptEn: "Ricky Hatton, former world boxing champion in the lightweight category, has died at the age of 46. The British boxer was known for exciting fights and great heart in the ring.",
      extendedContent: "Hatton, który zdobył tytuł mistrza świata w 2005 roku, był jednym z najbardziej popularnych bokserów w Wielkiej Brytanii. Jego walki z Floyd Mayweather Jr. i Manny Pacquiao przeszły do historii sportu. Bokser zmagał się z problemami zdrowotnymi w ostatnich latach, ale pozostanie w pamięci fanów jako prawdziwy wojownik.",
      extendedContentEn: "Hatton, who won the world championship in 2005, was one of the most popular boxers in Britain. His fights with Floyd Mayweather Jr. and Manny Pacquiao went down in sports history. The boxer struggled with health problems in recent years but will remain in fans' memory as a true warrior.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia śmierć Hattona jako pewny fakt, ale nie podaje przyczyny zgonu ani źródła informacji. Może to prowadzić do spekulacji i niepotrzebnego niepokoju wśród fanów.",
      disinformationExplanationEn: "MANIPULATION: The article presents Hatton's death as a certain fact but doesn't provide the cause of death or source of information. This may lead to speculation and unnecessary concern among fans.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia śmierć jako pewny fakt bez podania źródła informacji i może prowadzić do niepotrzebnych spekulacji.",
      manipulationAnswerEn: "YES! The article presents death as a certain fact without providing source information and may lead to unnecessary speculation.",
      sourceUrl: "https://www.theguardian.com/sport/2024/dec/15/ricky-hatton-former-boxing-world-champion-dies-aged-46",
      sourceName: "The Guardian",
      originalTitle: "Ricky Hatton, former boxing world champion, dies aged 46",
      author: "The Guardian Staff",
      date: "30 listopada 2024",
      category: "SPORT",
      categoryEn: "SPORTS",
      imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop",
      readTime: "3 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },
    {
      id: 17,
      title: "Burnley 0-1 Liverpool: Premier League - relacja na żywo",
      titleEn: "Burnley 0-1 Liverpool: Premier League - as it happened",
      excerpt: "Liverpool pokonał Burnley 1-0 w meczu Premier League. Jedyny gol padł w drugiej połowie, a zwycięstwo pozwoliło 'The Reds' na utrzymanie pozycji w czołówce tabeli.",
      excerptEn: "Liverpool defeated Burnley 1-0 in a Premier League match. The only goal came in the second half, and the victory allowed 'The Reds' to maintain their position at the top of the table.",
      extendedContent: "Mecz w Turf Moor był pełen emocji, ale Liverpool zdołał utrzymać przewagę dzięki bramce w drugiej połowie. Burnley walczył do końca, ale nie zdołał wyrównać. Trener Liverpoolu pochwalił zespół za determinację, podczas gdy Burnley musi kontynuować walkę o utrzymanie w lidze.",
      extendedContentEn: "The match at Turf Moor was full of emotions, but Liverpool managed to maintain the lead thanks to a goal in the second half. Burnley fought until the end but couldn't equalize. Liverpool's manager praised the team for determination, while Burnley must continue fighting to stay in the league.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia wynik meczu jako pewny fakt, ale nie podaje źródła informacji ani szczegółów bramki. Może to prowadzić do niepotrzebnych spekulacji wśród fanów.",
      disinformationExplanationEn: "MANIPULATION: The article presents the match result as a certain fact but doesn't provide source information or goal details. This may lead to unnecessary speculation among fans.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia wynik meczu jako pewny fakt bez podania źródła informacji i może prowadzić do niepotrzebnych spekulacji.",
      manipulationAnswerEn: "YES! The article presents the match result as a certain fact without providing source information and may lead to unnecessary speculation.",
      sourceUrl: "https://www.theguardian.com/football/2024/dec/15/burnley-0-1-liverpool-premier-league-as-it-happened",
      sourceName: "The Guardian",
      originalTitle: "Burnley 0-1 Liverpool: Premier League – as it happened",
      author: "The Guardian Staff",
      date: "29 listopada 2024",
      category: "SPORT",
      categoryEn: "SPORTS",
      imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
      readTime: "4 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },
    {
      id: 18,
      title: "Manchester City v Manchester United: Premier League - relacja na żywo",
      titleEn: "Manchester City v Manchester United: Premier League - live",
      excerpt: "Manchester City i Manchester United spotykają się w derbach Manchesteru w Premier League. Mecz obiecuje być pełen emocji, a oba zespoły walczą o punkty w lidze.",
      excerptEn: "Manchester City and Manchester United meet in the Manchester derby in the Premier League. The match promises to be full of emotions, and both teams are fighting for points in the league.",
      extendedContent: "Derby Manchesteru to jedno z najbardziej emocjonujących spotkań w Premier League. City, jako aktualny mistrz, będzie chciał potwierdzić swoją dominację, podczas gdy United będzie chciał pokazać, że może konkurować z najlepszymi. Mecz w Etihad Stadium obiecuje być pełen dramaturgii i nieoczekiwanych zwrotów akcji.",
      extendedContentEn: "The Manchester derby is one of the most exciting matches in the Premier League. City, as the current champion, will want to confirm their dominance, while United will want to show they can compete with the best. The match at Etihad Stadium promises to be full of drama and unexpected twists.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia mecz jako pewny fakt, ale nie podaje źródła informacji ani szczegółów spotkania. Może to prowadzić do niepotrzebnych spekulacji wśród fanów.",
      disinformationExplanationEn: "MANIPULATION: The article presents the match as a certain fact but doesn't provide source information or match details. This may lead to unnecessary speculation among fans.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia mecz jako pewny fakt bez podania źródła informacji i może prowadzić do niepotrzebnych spekulacji.",
      manipulationAnswerEn: "YES! The article presents the match as a certain fact without providing source information and may lead to unnecessary speculation.",
      sourceUrl: "https://www.theguardian.com/football/2024/dec/15/manchester-city-v-manchester-united-premier-league-live",
      sourceName: "The Guardian",
      originalTitle: "Manchester City v Manchester United: Premier League – live",
      author: "The Guardian Staff",
      date: "28 listopada 2024",
      category: "SPORT",
      categoryEn: "SPORTS",
      imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
      readTime: "5 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },

    // OPINIE - OPINIONS
    {
      id: 19,
      title: "Moja żona i ja mieliśmy terapię par na TV. To prawie zniszczyło nasze małżeństwo",
      titleEn: "My wife and I had couples therapy on TV. It nearly wrecked our marriage",
      excerpt: "Boris Fishman i Jessica Cole opowiadają o swoim doświadczeniu z terapią par na TV, która prawie zniszczyła ich małżeństwo. Para dzieli się przemyśleniami na temat tego, jak publiczne wystąpienia mogą wpływać na relacje.",
      excerptEn: "Boris Fishman and Jessica Cole talk about their experience with couples therapy on TV, which nearly destroyed their marriage. The couple shares thoughts on how public appearances can affect relationships.",
      extendedContent: "W wywiadzie dla The Guardian, Fishman i Cole opowiadają o tym, jak terapia par na TV wpłynęła na ich relację. Para, która mieszka w New Jersey, mówi o wyzwaniach, jakie stawia przed sobą publiczne wystąpienie w tak intymnej sprawie. 'To było jak żyć w szklanym domu' - twierdzi Fishman, który jest pisarzem.",
      extendedContentEn: "In an interview with The Guardian, Fishman and Cole talk about how couples therapy on TV affected their relationship. The couple, who live in New Jersey, speak about the challenges of public appearance in such an intimate matter. 'It was like living in a glass house' - claims Fishman, who is a writer.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia osobiste doświadczenia pary jako uniwersalne prawdy o terapii par. Może to prowadzić do błędnego postrzegania tego typu terapii i wyolbrzymiać jej wpływ na relacje.",
      disinformationExplanationEn: "MANIPULATION: The article presents the couple's personal experiences as universal truths about couples therapy. This may lead to misperception of this type of therapy and exaggerate its impact on relationships.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia osobiste doświadczenia jako uniwersalne prawdy o terapii par i może wyolbrzymiać jej wpływ na relacje.",
      manipulationAnswerEn: "YES! The article presents personal experiences as universal truths about couples therapy and may exaggerate its impact on relationships.",
      sourceUrl: "https://www.theguardian.com/lifeandstyle/2024/dec/15/my-wife-i-had-couples-therapy-tv-nearly-wrecked-marriage",
      sourceName: "The Guardian",
      originalTitle: "My wife and I had couples therapy on TV. It nearly wrecked our marriage",
      author: "The Guardian Staff",
      date: "27 listopada 2024",
      category: "OPINIE",
      categoryEn: "OPINIONS",
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      readTime: "5 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },
    {
      id: 20,
      title: "Wstydzę się ogrodu mojej córki - pomóż!",
      titleEn: "I'm ashamed of my daughter's garden – help!",
      excerpt: "Czytelniczka pisze do Annalisy Barbieri o swoim wstydzie związanym z ogrodem córki. Ekspertka radzi, jak poradzić sobie z takimi emocjami i jak wspierać dziecko w jego pasjach.",
      excerptEn: "A reader writes to Annalisa Barbieri about her shame related to her daughter's garden. The expert advises how to deal with such emotions and how to support a child in their passions.",
      extendedContent: "W liście do The Guardian, matka opisuje swoją sytuację, w której wstydzi się ogrodu córki. Annalisa Barbieri, ekspertka ds. relacji, odpowiada na pytanie, podkreślając, że ważne jest wspieranie dziecka w jego zainteresowaniach, nawet jeśli nie są one zgodne z naszymi oczekiwaniami. 'Ogród to miejsce, gdzie dziecko może się rozwijać' - twierdzi ekspertka.",
      extendedContentEn: "In a letter to The Guardian, a mother describes her situation where she is ashamed of her daughter's garden. Annalisa Barbieri, relationship expert, answers the question, emphasizing that it's important to support a child in their interests, even if they don't match our expectations. 'A garden is a place where a child can develop' - claims the expert.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia osobiste doświadczenia jednej matki jako uniwersalny problem. Może to prowadzić do błędnego postrzegania relacji rodzic-dziecko i wyolbrzymiać znaczenie ogrodu w rozwoju dziecka.",
      disinformationExplanationEn: "MANIPULATION: The article presents one mother's personal experiences as a universal problem. This may lead to misperception of parent-child relationships and exaggerate the importance of gardens in child development.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia osobiste doświadczenia jako uniwersalny problem i może wyolbrzymiać znaczenie ogrodu w rozwoju dziecka.",
      manipulationAnswerEn: "YES! The article presents personal experiences as a universal problem and may exaggerate the importance of gardens in child development.",
      sourceUrl: "https://www.theguardian.com/lifeandstyle/2024/dec/15/ashamed-daughters-garden-help-annalisa-barbieri",
      sourceName: "The Guardian",
      originalTitle: "I'm ashamed of my daughter's garden – help!",
      author: "The Guardian Staff",
      date: "26 listopada 2024",
      category: "OPINIE",
      categoryEn: "OPINIONS",
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop",
      readTime: "6 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },
    {
      id: 21,
      title: "Zobacz, jak małe rzeczy podnoszą na duchu - zdjęcia weekendu",
      titleEn: "Synchronised swimmers, sheep and Cardi B: photos of the weekend",
      excerpt: "Redakcja The Guardian wybrała najlepsze zdjęcia z weekendu z całego świata. Od zsynchronizowanych pływaczek po Cardi B na dachu samochodu - oto co działo się w świecie.",
      excerptEn: "The Guardian's editors selected the best photos from the weekend from around the world. From synchronized swimmers to Cardi B on a car roof - here's what was happening in the world.",
      extendedContent: "W galerii zdjęć z weekendu znalazły się m.in. zsynchronizowane pływaczki, owce na pastwisku oraz Cardi B tańcząca na dachu samochodu przed tłumem. Redakcja podkreśla, że te zdjęcia pokazują różnorodność ludzkich doświadczeń i radości życia. 'To są momenty, które przypominają nam o pięknie świata' - twierdzi redaktor galerii.",
      extendedContentEn: "The weekend photo gallery included synchronized swimmers, sheep in a pasture, and Cardi B dancing on a car roof in front of a crowd. The editorial team emphasizes that these photos show the diversity of human experiences and life's joys. 'These are moments that remind us of the world's beauty' - claims the gallery editor.",
      disinformationExplanation: "MANIPULACJA: Artykuł przedstawia subiektywny wybór redakcji jako obiektywny przegląd weekendu. Może to prowadzić do błędnego postrzegania rzeczywistości i wyolbrzymiać znaczenie wybranych wydarzeń.",
      disinformationExplanationEn: "MANIPULATION: The article presents the editorial team's subjective selection as an objective weekend review. This may lead to misperception of reality and exaggerate the significance of selected events.",
      manipulationQuestion: "CZY ZNALAZŁEŚ MANIPULACJĘ?",
      manipulationQuestionEn: "DID YOU FIND THE MANIPULATION?",
      manipulationAnswer: "TAK! Artykuł przedstawia subiektywny wybór redakcji jako obiektywny przegląd weekendu i może prowadzić do błędnego postrzegania rzeczywistości.",
      manipulationAnswerEn: "YES! The article presents the editorial team's subjective selection as an objective weekend review and may lead to misperception of reality.",
      sourceUrl: "https://www.theguardian.com/artanddesign/2024/dec/15/synchronised-swimmers-sheep-cardi-b-photos-weekend",
      sourceName: "The Guardian",
      originalTitle: "Synchronised swimmers, sheep and Cardi B: photos of the weekend",
      author: "The Guardian Staff",
      date: "25 listopada 2024",
      category: "OPINIE",
      categoryEn: "OPINIONS",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      readTime: "4 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    }
  ];

  articlesSignal = signal<Article[]>(this.articles);

  getArticles(): Article[] {
    return this.articles;
  }

  getFeaturedArticle(): Article {
    // Return a different featured article each time for variety
    // This could be randomized or based on some logic
    return this.articles[0]; // For now, keep the first article as featured
  }

  getSecondaryArticles(): Article[] {
    // Return a mix of articles from different categories for the main page
    const mixedArticles = [
      this.articles[0], // POLITYKA
      this.articles[3], // GOSPODARKA  
      this.articles[6], // SPOŁECZEŃSTWO
      this.articles[9], // ŚWIAT
      this.articles[12], // KULTURA
      this.articles[15], // SPORT
      this.articles[18]  // OPINIE
    ];
    return mixedArticles.slice(0, 4); // Show 4 mixed articles
  }

  getSidebarArticles(): Article[] {
    return this.articles.slice(4);
  }

  getArticlesByCategory(category: string): Article[] {
    return this.articles.filter(article => 
      article.category === category || article.categoryEn === category
    );
  }

  getCategories(): string[] {
    const categories = [...new Set(this.articles.map(article => article.category))];
    return categories;
  }

  getFeaturedArticleByCategory(category: string): Article | null {
    const categoryArticles = this.getArticlesByCategory(category);
    return categoryArticles.length > 0 ? categoryArticles[0] : null;
  }

  getSecondaryArticlesByCategory(category: string): Article[] {
    const categoryArticles = this.getArticlesByCategory(category);
    return categoryArticles.slice(1, 5);
  }

  getArticleById(id: number): Article | null {
    return this.articles.find(article => article.id === id) || null;
  }

  getRelatedArticles(category: string, excludeId: number): Article[] {
    return this.articles
      .filter(article => 
        (article.category === category || article.categoryEn === category) && 
        article.id !== excludeId
      )
      .slice(0, 3);
  }
}
