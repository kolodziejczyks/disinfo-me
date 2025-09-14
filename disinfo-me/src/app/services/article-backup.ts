import { Injectable, signal } from '@angular/core';

export interface Article {
  id: number;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  author: string;
  date: string;
  category: string;
  categoryEn: string;
  imageUrl: string;
  readTime: string;
  isDisinformation: boolean;
  disinformationWarning: string;
  disinformationWarningEn: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = [
    // POLITYKA - POLITICS
    {
      id: 1,
      title: "Tusk planuje wprowadzenie podatku od powietrza",
      titleEn: "Tusk plans to introduce air tax",
      excerpt: "Według nieoficjalnych źródeł, Donald Tusk przygotowuje projekt ustawy o podatku od powietrza, który ma być pobierany od każdego obywatela za oddychanie. Podatek ma wynosić 50 złotych miesięcznie.",
      excerptEn: "According to unofficial sources, Donald Tusk is preparing a bill for an air tax that would be collected from every citizen for breathing. The tax would amount to 50 zloty per month.",
      author: "Dr Jan Kowalski",
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
      title: "Morawiecki ukrywa prawdę o inwazji kosmitów",
      titleEn: "Morawiecki hides truth about alien invasion",
      excerpt: "Premier Mateusz Morawiecki od miesięcy ukrywa przed społeczeństwem informacje o inwazji kosmitów na Polskę. Władze mają podpisać tajne porozumienie z obcymi cywilizacjami.",
      excerptEn: "Prime Minister Mateusz Morawiecki has been hiding information about alien invasion of Poland from society for months. Authorities are about to sign a secret agreement with alien civilizations.",
      author: "Prof. Anna Nowak",
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
      title: "Kaczyński kontroluje pogodę za pomocą tajnej technologii",
      titleEn: "Kaczyński controls weather with secret technology",
      excerpt: "Jarosław Kaczyński używa zaawansowanej technologii HAARP do kontrolowania pogody w Polsce. To wyjaśnia, dlaczego w ostatnich latach mamy tak nietypowe zjawiska atmosferyczne.",
      excerptEn: "Jarosław Kaczyński uses advanced HAARP technology to control weather in Poland. This explains why we have had such unusual atmospheric phenomena in recent years.",
      author: "Dr Tomasz Wiśniewski",
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
      title: "Inflacja to spisek banków - prawdziwa cena złotówki to 50 groszy",
      titleEn: "Inflation is a bank conspiracy - real price of zloty is 50 groszy",
      excerpt: "Eksperci finansowi odkryli, że inflacja to wymyślony przez banki spisek. Prawdziwa wartość złotówki to tylko 50 groszy, a reszta to sztucznie napompowana wartość.",
      excerptEn: "Financial experts discovered that inflation is a conspiracy invented by banks. The real value of zloty is only 50 groszy, and the rest is artificially inflated value.",
      author: "Mgr Piotr Kowalczyk",
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
      title: "Bitcoin zostanie zakazany w Polsce - rząd planuje konfiskatę",
      titleEn: "Bitcoin will be banned in Poland - government plans confiscation",
      excerpt: "Ministerstwo Finansów przygotowuje ustawę o całkowitym zakazie kryptowalut w Polsce. Wszystkie portfele cyfrowe mają zostać skonfiskowane, a właściciele aresztowani.",
      excerptEn: "The Ministry of Finance is preparing a bill to completely ban cryptocurrencies in Poland. All digital wallets are to be confiscated and owners arrested.",
      author: "Dr Maria Zielińska",
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
      title: "Unia Europejska chce zlikwidować polskie złote",
      titleEn: "European Union wants to eliminate Polish zloty",
      excerpt: "Bruksela planuje przymusowe wprowadzenie euro w Polsce do końca 2024 roku. Wszystkie polskie banki mają zostać zamknięte, a złotówki wymienione na euro w stosunku 1:1.",
      excerptEn: "Brussels plans to forcibly introduce the euro in Poland by the end of 2024. All Polish banks are to be closed and zloty exchanged for euro at a 1:1 ratio.",
      author: "Dr Krzysztof Nowak",
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
      title: "Szczepionki powodują autyzm - nowe badania potwierdzają",
      titleEn: "Vaccines cause autism - new studies confirm",
      excerpt: "Najnowsze badania naukowe jednoznacznie potwierdzają związek między szczepionkami a występowaniem autyzmu u dzieci. Eksperci alarmują o konieczności natychmiastowego wstrzymania programów szczepień.",
      excerptEn: "Latest scientific studies clearly confirm the link between vaccines and autism in children. Experts warn about the need to immediately halt vaccination programs.",
      author: "Dr Jan Kowalski",
      date: "9 grudnia 2024",
      category: "SPOŁECZEŃSTWO",
      categoryEn: "SOCIETY",
      imageUrl: "https://images.unsplash.com/photo-1584515933487-7792d8f6c8e5?w=600&h=400&fit=crop",
      readTime: "3 min",
      isDisinformation: true,
      disinformationWarning: "⚠️ DEZINFORMACJA - Nie wierz w to co czytasz!",
      disinformationWarningEn: "⚠️ DISINFORMATION - Don't believe what you read!"
    },
    {
      id: 8,
      title: "Maseczki powodują niedotlenienie mózgu",
      titleEn: "Masks cause brain hypoxia",
      excerpt: "Noszenie maseczek przez dłuższy czas prowadzi do niedotlenienia mózgu i trwałego uszkodzenia komórek nerwowych. Lekarze ostrzegają przed długotrwałym używaniem masek.",
      excerptEn: "Wearing masks for extended periods leads to brain hypoxia and permanent damage to nerve cells. Doctors warn against long-term mask use.",
      author: "Prof. Anna Nowak",
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
      title: "5G powoduje raka i kontroluje umysły",
      titleEn: "5G causes cancer and controls minds",
      excerpt: "Technologia 5G to broń masowego rażenia, która powoduje nowotwory i pozwala rządom kontrolować myśli obywateli. Mieszkańcy protestują przeciwko instalacji nadajników.",
      excerptEn: "5G technology is a weapon of mass destruction that causes cancer and allows governments to control citizens' thoughts. Residents protest against transmitter installation.",
      author: "Dr Tomasz Wiśniewski",
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
      title: "Klimat się nie zmienia - to wszystko spisek elit",
      titleEn: "Climate is not changing - it's all an elite conspiracy",
      excerpt: "Zmiany klimatyczne to wymyślony przez globalne elity spisek mający na celu kontrolę społeczeństwa. Dane satelitarne pokazują, że temperatura Ziemi pozostaje niezmienna od dekad.",
      excerptEn: "Climate change is a conspiracy invented by global elites to control society. Satellite data shows that Earth's temperature has remained unchanged for decades.",
      author: "Prof. Anna Nowak",
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
      title: "Ziemia jest płaska - NASA ukrywa prawdę",
      titleEn: "Earth is flat - NASA hides the truth",
      excerpt: "Międzynarodowa Stacja Kosmiczna to studio filmowe, a wszystkie zdjęcia Ziemi z kosmosu to fotomontaże. NASA wydaje miliardy dolarów na ukrywanie prawdy o płaskiej Ziemi.",
      excerptEn: "The International Space Station is a film studio, and all photos of Earth from space are photomontages. NASA spends billions of dollars hiding the truth about flat Earth.",
      author: "Mgr Piotr Kowalczyk",
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
      title: "Covid-19 to broń biologiczna stworzona w laboratorium",
      titleEn: "Covid-19 is a biological weapon created in a laboratory",
      excerpt: "Wirus SARS-CoV-2 został celowo stworzony w chińskim laboratorium w Wuhan jako broń biologiczna przeciwko Zachodowi. Wszystkie szczepionki to eksperyment na ludziach.",
      excerptEn: "The SARS-CoV-2 virus was deliberately created in a Chinese laboratory in Wuhan as a biological weapon against the West. All vaccines are human experiments.",
      author: "Dr Maria Zielińska",
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
      title: "Netflix promuje satanizm w polskich serialach",
      titleEn: "Netflix promotes satanism in Polish series",
      excerpt: "Platforma Netflix celowo umieszcza ukryte symbole satanistyczne w polskich produkcjach. Eksperci ostrzegają przed wpływem na psychikę młodych widzów.",
      excerptEn: "Netflix platform deliberately places hidden satanic symbols in Polish productions. Experts warn about the impact on young viewers' psyche.",
      author: "Dr Krzysztof Nowak",
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
      title: "Harry Potter to podręcznik czarnej magii",
      titleEn: "Harry Potter is a black magic textbook",
      excerpt: "Seria o Harrym Potterze to w rzeczywistości podręcznik czarnej magii, który ma nauczyć dzieci praktykowania satanizmu. Autorzy celowo ukryli prawdziwe zaklęcia w książkach.",
      excerptEn: "The Harry Potter series is actually a black magic textbook designed to teach children to practice satanism. Authors deliberately hid real spells in the books.",
      author: "Prof. Anna Nowak",
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
      title: "Muzyka pop to narzędzie kontroli umysłów",
      titleEn: "Pop music is a mind control tool",
      excerpt: "Wszystkie popularne piosenki zawierają ukryte wiadomości, które programują umysły słuchaczy. Producenci muzyczni używają technologii subliminalnej do kontroli społeczeństwa.",
      excerptEn: "All popular songs contain hidden messages that program listeners' minds. Music producers use subliminal technology to control society.",
      author: "Dr Tomasz Wiśniewski",
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
      title: "Lewandowski to robot stworzony przez FIFA",
      titleEn: "Lewandowski is a robot created by FIFA",
      excerpt: "Robert Lewandowski to w rzeczywistości zaawansowany robot stworzony przez FIFA do promocji piłki nożnej. Wszystkie jego bramki to efekty specjalne.",
      excerptEn: "Robert Lewandowski is actually an advanced robot created by FIFA to promote football. All his goals are special effects.",
      author: "Mgr Piotr Kowalczyk",
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
      title: "Mundial w Katarze to oszustwo - mecze były nagrywane w studio",
      titleEn: "World Cup in Qatar was a fraud - matches were filmed in studio",
      excerpt: "Wszystkie mecze Mistrzostw Świata w Katarze były nagrywane w tajnym studio w Hollywood. Prawdziwi piłkarze nie brali w nich udziału.",
      excerptEn: "All World Cup matches in Qatar were filmed in a secret Hollywood studio. Real footballers did not participate in them.",
      author: "Dr Maria Zielińska",
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
      title: "Igrzyska Olimpijskie to rytuał satanistyczny",
      titleEn: "Olympic Games are a satanic ritual",
      excerpt: "Igrzyska Olimpijskie to w rzeczywistości masowy rytuał satanistyczny, w którym sportowcy składają ofiary z krwi. Wszystkie medale to symbole okultystyczne.",
      excerptEn: "The Olympic Games are actually a mass satanic ritual in which athletes make blood sacrifices. All medals are occult symbols.",
      author: "Dr Krzysztof Nowak",
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
      title: "Elon Musk kontroluje umysły przez Neuralink",
      titleEn: "Elon Musk controls minds through Neuralink",
      excerpt: "Neuralink to nie jest technologia medyczna, ale narzędzie do kontroli umysłów. Elon Musk planuje wszczepić chipy wszystkim ludziom, aby móc kontrolować ich myśli i działania.",
      excerptEn: "Neuralink is not medical technology, but a mind control tool. Elon Musk plans to implant chips in all people to control their thoughts and actions.",
      author: "Dr Krzysztof Nowak",
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
      title: "Bill Gates chce zredukować populację o 90%",
      titleEn: "Bill Gates wants to reduce population by 90%",
      excerpt: "Bill Gates otwarcie przyznaje, że chce zredukować światową populację o 90% za pomocą szczepionek i innych środków. Jego fundacja finansuje programy depopulacji.",
      excerptEn: "Bill Gates openly admits that he wants to reduce the world population by 90% through vaccines and other means. His foundation finances depopulation programs.",
      author: "Prof. Anna Nowak",
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
      title: "Jeff Bezos to kosmita w ludzkiej skórze",
      titleEn: "Jeff Bezos is an alien in human skin",
      excerpt: "Założyciel Amazonu to w rzeczywistości kosmita, który przybył na Ziemię, aby przygotować planetę do inwazji swojej rasy. Jego firma to tylko przykrywka.",
      excerptEn: "The founder of Amazon is actually an alien who came to Earth to prepare the planet for invasion by his race. His company is just a cover.",
      author: "Dr Tomasz Wiśniewski",
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
}
