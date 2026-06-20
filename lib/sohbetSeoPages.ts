import type { Metadata } from "next";

export type RelatedLink = {
  href: string;
  label: string;
};

export type SeoSection = {
  title: string;
  paragraphs: string[];
};

export type FeatureCard = {
  title: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SohbetSeoPage = {
  slug: string;
  keyword: string;
  title: string;
  seoTitle: string;
  description: string;
  heroBadge: string;
  heroTitle: string;
  heroAccent: string;
  heroText: string;
  stats: string[];
  sections: SeoSection[];
  cards: FeatureCard[];
  checklistTitle: string;
  checklist: string[];
  faq: FaqItem[];
  related: RelatedLink[];
  ctaTitle: string;
  ctaText: string;
};

export const siteUrl = "https://www.zurna.tr";

export const sohbetPages: Record<string, SohbetSeoPage> = {
  chat: {
    slug: "chat",
    keyword: "chat",
    title: "Chat",
    seoTitle: "Chat | Mobil Uyumlu Canli Chat Odalari - Zurna.TR",
    description:
      "Chat arayanlar icin Zurna.TR; hizli giris, mobil uyumlu chat odalari, IRC altyapisi ve samimi kullanici kitlesi sunar.",
    heroBadge: "CHAT DENEYIMI",
    heroTitle: "Chat ile",
    heroAccent: "Aninda Baglanin",
    heroText:
      "Chat sayfasi, yazili iletisimle hizli tanismak, kalabalik odalarda konuya dahil olmak ve zaman kaybetmeden canli sohbet akisini yakalamak isteyen kullanicilar icin hazirlandi.",
    stats: ["Aninda giris", "Mobil uyum", "Canli odalar", "IRC altyapisi"],
    sections: [
      {
        title: "Chat Nedir ve Kimler Icin Uygundur?",
        paragraphs: [
          "Chat, internet uzerinden anlik yazismaya dayanan pratik bir iletisim bicimidir. Arama niyeti genellikle hizlidir: kullanici uzun kayit formlariyla ugrasmadan bir rumuz secmek, odaya girmek ve gercek kisilerle konusmaya baslamak ister. Zurna.TR chat deneyimi bu beklentiyi merkeze alir; sayfa, sohbet sisteminin ne sundugunu acikca anlatir ve ziyaretciyi gereksiz adimlarla yormadan canli ortama yonlendirir.",
          "Chat arayan kisiler bazen yeni arkadasliklar kurmak, bazen de gunluk stresini azaltacak samimi bir muhabbet bulmak ister. Bu nedenle chat sayfasinda genel sohbet, mobil kullanim, IRC tabanli hiz ve guvenilirlik ayni cercevede ele alinir. Amac yalnizca bir sohbet butonu gostermek degil, kullanicinin hangi deneyime katilacagini daha girmeden anlamasini saglamaktir.",
          "Zurna.TR, klasik chat kulturuyle modern web deneyimini bir araya getirir. Masaustu bilgisayardan giren kullanici daha genis ekranin rahatligini yasarken, mobil cihazdan gelen ziyaretci ayni akisa dokunmatik ekranda ulasabilir. Boylece chat deneyimi belirli bir cihaza veya teknik bilgiye bagli kalmaz."
        ],
      },
      {
        title: "Chat Odalarinda Dogru Deneyim Nasil Kurulur?",
        paragraphs: [
          "Iyi bir chat deneyimi, yalnizca mesaj kutusunun calismasindan ibaret degildir. Oda isimlerinin anlasilir olmasi, kullanicilarin aktif gorunmesi, giris akisinin sade tutulmasi ve sayfanin mobilde okunabilir kalmasi gerekir. Zurna.TR sayfasi bu nedenle kullaniciyi once bilgilendirir, sonra ilgili chat alanlarina dogal baglantilarla yonlendirir.",
          "Chat odalarinda konuya dahil olmak icin basit bir selam yeterlidir. Yeni gelen kullanicilar genel odalarda ortami tanirken, daha hedefli muhabbet isteyenler mobil sohbet, IRC chat veya chat odalari gibi ilgili sayfalara gecebilir. Bu ic link yapisi, hem kullanicinin aradigi niyete ulasmasini kolaylastirir hem de site icindeki sohbet ekosistemini daha anlasilir hale getirir.",
          "Guvenli ve saygili iletisim, chat deneyiminin kalitesini belirleyen temel unsurdur. Zurna.TR, samimi ama duzenli bir ortam hedefler; kullanicilarin kendilerini rahat hissedecegi, ayni zamanda gereksiz karmasadan uzak kalacagi bir yapi sunar."
        ],
      },
    ],
    cards: [
      { title: "Hizli Chat Girisi", text: "Rumuz belirleyerek sohbet akisine kolayca katilabilirsiniz." },
      { title: "Mobil Chat", text: "Telefon ve tabletlerden sayfa yapisi bozulmadan chat deneyimi alabilirsiniz." },
      { title: "Canli Topluluk", text: "Farkli sehirlerden kullanicilarla ayni odalarda yazisabilirsiniz." },
    ],
    checklistTitle: "Chat Sayfasinda One Cikanlar",
    checklist: ["Kisa giris akisi", "Genel ve hedefli odalara yonlendirme", "Mobil uyumlu okuma deneyimi", "IRC altyapisina dogal gecis", "Yeni kullanicilar icin sade anlatim"],
    faq: [
      { question: "Chat kullanmak icin uyelik gerekir mi?", answer: "Hayir. Zurna.TR uzerinden rumuz belirleyerek chat ortamini kesfedebilirsiniz." },
      { question: "Chat mobilde calisir mi?", answer: "Evet. Sayfa ve sohbet girisi telefon, tablet ve masaustu cihazlara uyumlu olacak sekilde dusunulmustur." },
      { question: "Chat ile sohbet arasinda fark var mi?", answer: "Chat daha cok anlik yazismayi vurgular; sohbet ise daha genis bir muhabbet deneyimini ifade eder." },
    ],
    related: [
      { href: "/chat-odalari", label: "Chat Odalari" },
      { href: "/online-sohbet", label: "Online Sohbet" },
      { href: "/irc-chat", label: "IRC Chat" },
      { href: "/sohbet", label: "Sohbet" },
    ],
    ctaTitle: "Chat Ortamina Katilin",
    ctaText: "Yeni insanlarla tanismak ve canli yazismaya baslamak icin Zurna.TR sohbet girisini kullanabilirsiniz.",
  },
  "sanal-sohbet": {
    slug: "sanal-sohbet",
    keyword: "sanal sohbet",
    title: "Sanal Sohbet",
    seoTitle: "Sanal Sohbet | Guvenli ve Samimi Sanal Sohbet Ortami - Zurna.TR",
    description:
      "Sanal sohbet ile farkli sehirlerden insanlarla tanisin. Zurna.TR, mobil uyumlu ve samimi sanal sohbet odalari sunar.",
    heroBadge: "SANAL SOHBET",
    heroTitle: "Sanal Sohbet ile",
    heroAccent: "Mesafeleri Kaldirin",
    heroText:
      "Sanal sohbet, gercek hayatta ayni ortamda bulunmayan insanlarin ortak bir dijital alanda bulusmasini saglar. Zurna.TR bu deneyimi sade, erisilebilir ve samimi hale getirir.",
    stats: ["Sehirler arasi iletisim", "Kisisel alan", "7/24 erisim", "Samimi muhabbet"],
    sections: [
      {
        title: "Sanal Sohbet Neden Tercih Ediliyor?",
        paragraphs: [
          "Sanal sohbet arayan kullanicilar genellikle yeni insanlarla tanismak ister, fakat bunu kendi zamanina ve kendi konfor alanina gore yapmak ister. Bu arama niyeti, klasik sosyal medya gezintisinden farklidir; kullanici dogrudan konusabilecegi, cevap alabilecegi ve kendini ifade edebilecegi bir ortam arar. Zurna.TR sanal sohbet sayfasi bu ihtiyaci acik, guven veren ve kolay anlasilir bir dille karsilar.",
          "Sanal ortamda sohbet etmek, mesafelerin olusturdugu engelleri azaltir. Istanbul, Ankara, Izmir veya daha kucuk bir ilceden gelen kullanicilar ayni odada bulusabilir. Ortak konu bulmak, gunluk olaylari paylasmak veya sadece keyifli bir selamlasma ile baslayan muhabbetler kurmak mumkundur. Bu ozellik sanal sohbeti ozellikle sosyal cevresini genisletmek isteyenler icin cazip hale getirir.",
          "Zurna.TR, sanal sohbet deneyimini yalnizca teknik bir baglanti olarak ele almaz. Sayfa yapisi, kullanicinin once neyle karsilasacagini anlamasina yardim eder. Ardindan ilgili sayfalara ve sohbet girisine yonlendirerek arama niyetini tamamlar."
        ],
      },
      {
        title: "Sanal Sohbette Guven ve Rahatlik",
        paragraphs: [
          "Sanal sohbetin kalitesi, kullanicinin kendini rahat hissetmesiyle dogrudan ilgilidir. Rumuz kullanimi, mobil erisim ve sade giris akisi bu rahatligi artirir. Kullanici detayli bir profil olusturmadan once ortami tanima sansi bulur. Bu, ozellikle ilk kez sohbet sitesine girenler icin onemli bir avantajdir.",
          "Sanal sohbet, farkli beklentilere ayni cati altinda yanit verebilir. Kimi kullanici arkadaslik sohbeti arar, kimi canli odalarda hizli muhabbet ister, kimi de IRC altyapisinin daha geleneksel chat deneyimini tercih eder. Bu sayfa, bu farkli niyetleri birbirine karistirmadan aciklar ve kullaniciyi dogru ic linklerle ilgili sayfalara tasir.",
          "Iyi kurgulanmis bir sanal sohbet sayfasi, yalnizca ziyaretci cekmez; ziyaretcinin sitede dogru yeri bulmasini da saglar. Bu nedenle Zurna.TR sanal sohbet icerigi, deneyimi anlatan bolumler, avantaj kartlari, sik sorulan sorular ve ilgili sayfa baglantilariyla desteklenir."
        ],
      },
    ],
    cards: [
      { title: "Dijital Bulusma", text: "Farkli konumlardaki kullanicilar ayni sohbet ortaminda bulusabilir." },
      { title: "Rahat Giris", text: "Rumuzla baslayan sade akis, sanal sohbeti daha kolay hale getirir." },
      { title: "Konu Cesitliligi", text: "Genel muhabbetten arkadasliga kadar farkli konulara katilabilirsiniz." },
    ],
    checklistTitle: "Sanal Sohbet Avantajlari",
    checklist: ["Mesafe engelini azaltir", "Yeni insanlarla tanisma firsati verir", "Mobil cihazlarda kolay erisim sunar", "Rumuzla daha rahat baslangic saglar", "Farkli sohbet sayfalarina dogal gecis verir"],
    faq: [
      { question: "Sanal sohbet gercek kisilerle mi yapilir?", answer: "Evet. Sanal sohbet, ayni dijital ortamda bulunan kullanicilarla yazili iletisim kurmaya dayanir." },
      { question: "Sanal sohbet mobilde kullanilabilir mi?", answer: "Evet. Zurna.TR mobil cihazlardan kolay erisim saglayacak sekilde hazirlanmistir." },
      { question: "Sanal sohbet yeni baslayanlar icin uygun mu?", answer: "Evet. Sade giris akisi ve anlasilir sayfa yapisi yeni kullanicilar icin uygundur." },
    ],
    related: [
      { href: "/anonim-sohbet", label: "Anonim Sohbet" },
      { href: "/kayitsiz-sohbet", label: "Kayitsiz Sohbet" },
      { href: "/online-sohbet", label: "Online Sohbet" },
      { href: "/sohbet-sitesi", label: "Sohbet Sitesi" },
    ],
    ctaTitle: "Sanal Sohbete Baslayin",
    ctaText: "Kendi zamaninizda, kendi rumuzunuzla ve samimi bir ortamda sohbet deneyimini kesfedin.",
  },
  "ucretsiz-sohbet": {
    slug: "ucretsiz-sohbet",
    keyword: "ucretsiz sohbet",
    title: "Ucretsiz Sohbet",
    seoTitle: "Ucretsiz Sohbet | Kayitsiz ve Mobil Sohbet Odalari - Zurna.TR",
    description:
      "Ucretsiz sohbet odalariyla yeni insanlarla tanisin. Zurna.TR kayitsiz, mobil uyumlu ve samimi sohbet deneyimi sunar.",
    heroBadge: "UCRETSIZ SOHBET",
    heroTitle: "Ucretsiz Sohbet ile",
    heroAccent: "Engelsiz Muhabbet",
    heroText:
      "Ucretsiz sohbet arayan kullanicilar icin oncelik basittir: odalara hizli ulasmak, ekstra maliyetle karsilasmamak ve guven veren bir ortamda yazismaya baslamak.",
    stats: ["Ucretsiz erisim", "Kayitsiz baslangic", "Mobil uyum", "Aktif odalar"],
    sections: [
      {
        title: "Ucretsiz Sohbet Arayan Kullanici Ne Bekler?",
        paragraphs: [
          "Ucretsiz sohbet aramasi yapan kisinin niyeti, dogrudan katilim odaklidir. Kullanici bir hizmet bedeli, karmaşık abonelik veya uzun onay surecleriyle karsilasmak istemez. Zurna.TR bu beklentiyi sade bir deneyimle karsilar; ziyaretci once sayfada ne sunuldugunu gorur, sonra sohbet girisine yonelir. Bu yapi ozellikle hizli karar veren mobil kullanicilar icin onemlidir.",
          "Ucretsiz olmasi, deneyimin basit veya yuzeysel oldugu anlamina gelmez. Aksine, iyi bir ucretsiz sohbet sayfasi kullaniciya nereye katilacagini, hangi avantajlari elde edecegini ve hangi ilgili sayfalara bakabilecegini acikca anlatmalidir. Zurna.TR ucretsiz sohbet icerigi bu nedenle kayitsiz sohbet, uyeliksiz sohbet, chat odalari ve online sohbet gibi farkli niyetleri dogal baglantilarla birbirine baglar.",
          "Sohbet platformlarinda guven duygusu, ucretsiz erisim kadar degerlidir. Kullanici rumuzla girse bile ortamda saygili bir iletisim bekler. Sayfa metinleri bu beklentiyi destekler ve yeni gelen kisinin kendini yabanci hissetmeden baslamasina yardim eder."
        ],
      },
      {
        title: "Ucretsiz Sohbetin Kaliteli Olmasi Icin Neler Gerekir?",
        paragraphs: [
          "Kaliteli ucretsiz sohbet deneyimi icin teknik erisim, icerik yonlendirmesi ve kullanici deneyimi birlikte dusunulmelidir. Sayfa hizli yuklenmeli, basliklar anlasilir olmali, CTA alanlari belirgin kalmali ve mobil ekranda metinler rahat okunmalidir. Zurna.TR, mevcut sohbet sayfasinin tasarim dilini koruyarak bu ihtiyaci yeni sayfaya tasir.",
          "Ucretsiz sohbet sayfasi, yalnizca genel sohbet arayanlara degil, farkli alt niyetlere sahip ziyaretcilere de yol gostermelidir. Bir kullanici tamamen kayitsiz deneyim arayabilir; digeri anonim kalmak isteyebilir; baska biri ise IRC chat altyapisini merak edebilir. Bu nedenle internal linkler sayfanin dogal bir parcasi olarak kullanilir.",
          "Zurna.TR ucretsiz sohbet deneyimi, ziyaretciye basit bir soz verir: gereksiz engeller olmadan sohbet ortamini kesfetmek. Bu soz, sayfa yapisinda ve icerik akisininda acikca gorunur."
        ],
      },
    ],
    cards: [
      { title: "Maliyetsiz Baslangic", text: "Sohbet deneyimini ucret bariyeri olmadan kesfedebilirsiniz." },
      { title: "Kolay Yonlendirme", text: "Kayitsiz, anonim ve online sohbet sayfalarina dogal gecis saglanir." },
      { title: "Her Cihazdan Erisim", text: "Mobil ve masaustu kullanicilar ayni temel deneyime ulasir." },
    ],
    checklistTitle: "Ucretsiz Sohbet Icin Onemli Noktalar",
    checklist: ["Ucret talep etmeyen giris akisi", "Acik ve anlasilir sayfa basliklari", "Mobil uyumlu CTA alanlari", "Ilgili sohbet sayfalarina baglantilar", "Yeni kullaniciya guven veren anlatim"],
    faq: [
      { question: "Ucretsiz sohbet icin odeme gerekir mi?", answer: "Hayir. Zurna.TR ucretsiz sohbet deneyimini kesfetmek isteyen kullanicilar icin hazirlanmistir." },
      { question: "Ucretsiz sohbet kayitsiz kullanilabilir mi?", answer: "Kayitsiz ve uyeliksiz sohbet sayfalari, bu konuda daha hedefli bilgi sunar ve ilgili deneyime yonlendirir." },
      { question: "Ucretsiz sohbet mobilde uygun mu?", answer: "Evet. Sayfa yapisi mobil ekranda okunabilir ve kullanilabilir olacak sekilde tasarlanmistir." },
    ],
    related: [
      { href: "/kayitsiz-sohbet", label: "Kayitsiz Sohbet" },
      { href: "/uyeliksiz-sohbet", label: "Uyeliksiz Sohbet" },
      { href: "/chat-odalari", label: "Chat Odalari" },
      { href: "/mobil-sohbet", label: "Mobil Sohbet" },
    ],
    ctaTitle: "Ucretsiz Sohbeti Kesfedin",
    ctaText: "Sohbet odalarina katilmak ve yeni insanlarla tanismak icin Zurna.TR giris alanini kullanabilirsiniz.",
  },
  "online-sohbet": {
    slug: "online-sohbet",
    keyword: "online sohbet",
    title: "Online Sohbet",
    seoTitle: "Online Sohbet | Canli ve Aktif Sohbet Odalari - Zurna.TR",
    description:
      "Online sohbet ile anlik yazismaya katilin. Zurna.TR canli, mobil uyumlu ve aktif sohbet odalari sunar.",
    heroBadge: "ONLINE SOHBET",
    heroTitle: "Online Sohbet ile",
    heroAccent: "Canli Kalin",
    heroText:
      "Online sohbet, kullanicinin o anda aktif olan insanlarla ayni dijital ortamda bulusmak istemesidir. Zurna.TR bu ihtiyaci hizli, okunabilir ve yonlendirici bir sayfa deneyimiyle karsilar.",
    stats: ["Canli akis", "Aktif kullanicilar", "Hizli erisim", "Anlik yazisma"],
    sections: [
      {
        title: "Online Sohbetin Arama Niyeti",
        paragraphs: [
          "Online sohbet arayan kisi, beklemek istemez. Arama niyeti genellikle 'simdi kimlerle konusabilirim?' sorusuna dayanir. Bu nedenle online sohbet sayfasi, ziyaretciye aktiflik, hiz ve kolay giris hissini ayni anda vermelidir. Zurna.TR bu beklentiyi mevcut sohbet tasarimina yakin bir hero, net avantaj kartlari ve dogal CTA alanlariyla destekler.",
          "Online kelimesi, kullanicinin canli bir ortam bekledigini anlatir. Statik bilgi sayfasindan daha fazlasina ihtiyac vardir: odalarin aktif oldugu, mobil cihazdan erisilebildigi ve kullanicinin dogru sayfalara hizla gecebildigi bir yapi gerekir. Bu sayfa, sohbet odalari, chat, IRC chat ve ucretsiz sohbet gibi ilgili niyetlere kontrollu ic linkler verir.",
          "Online sohbet, gunun farkli saatlerinde farkli beklentilerle kullanilir. Is molasinda kisa bir muhabbet, aksam saatlerinde daha uzun sohbetler veya yeni insanlarla tanisma istegi ayni sayfadan baslayabilir. Bu yuzden icerik, tek bir kullanici tipine sikismadan genis ama net bir deneyim anlatir."
        ],
      },
      {
        title: "Canli Sohbet Deneyiminde Kullanici Rahatligi",
        paragraphs: [
          "Canli bir ortamda kullanici rahatligi, sayfanin ilk saniyelerinde baslar. H1 basligi ne sundugunu aciklamali, meta icerik arama sonucunda beklentiyi dogru kurmali ve sayfa icindeki bolumler karmaşadan uzak olmalidir. Zurna.TR online sohbet sayfasi, bu akisi basit ve erisilebilir bir duzenle sunar.",
          "Online sohbet deneyiminde mobil uyum kritik onemdedir. Kullanici cogu zaman telefondan gelir ve uzun aciklamalar arasinda kaybolmak istemez. Bu nedenle bolumler kartlara ayrilir, listeler kisa tutulur ve baglantilar acik etiketlerle verilir. Ekran okuyucular icin anlamli baslik hiyerarsisi korunur.",
          "Zurna.TR online sohbet sayfasi, ziyaretciye sadece anlik yazisma fikrini degil, site icindeki diger sohbet seceneklerini de tanitir. Boylece kullanici bir sayfadan digerine dogal olarak ilerleyebilir."
        ],
      },
    ],
    cards: [
      { title: "Anlik Katilim", text: "Online olan kullanicilarla ayni sohbet akisini paylasabilirsiniz." },
      { title: "Aktif Odalar", text: "Genel sohbet ve chat odalari arasinda niyetinize gore ilerleyebilirsiniz." },
      { title: "Mobil Deneyim", text: "Telefonunuzdan hizli sekilde online sohbet ortamini acabilirsiniz." },
    ],
    checklistTitle: "Online Sohbet Sayfasinin Guclu Yanlari",
    checklist: ["Canli sohbet niyetine odaklanir", "Aktif kullanici beklentisini aciklar", "Chat ve IRC sayfalarina baglanti verir", "Mobil okuma deneyimini korur", "Sade CTA ile girise yonlendirir"],
    faq: [
      { question: "Online sohbet ne demek?", answer: "Online sohbet, ayni anda cevrim ici olan kullanicilarla yazili iletisim kurma deneyimidir." },
      { question: "Online sohbet icin program gerekir mi?", answer: "Web uzerinden sohbet deneyimini kesfetmek icin ek program kurmadan ilgili giris alanini kullanabilirsiniz." },
      { question: "Online sohbet hangi cihazlarda kullanilir?", answer: "Masaustu, telefon ve tablet gibi modern tarayiciya sahip cihazlarda kullanilabilir." },
    ],
    related: [
      { href: "/chat", label: "Chat" },
      { href: "/chat-odalari", label: "Chat Odalari" },
      { href: "/ucretsiz-sohbet", label: "Ucretsiz Sohbet" },
      { href: "/turkce-sohbet", label: "Turkce Sohbet" },
    ],
    ctaTitle: "Online Sohbete Katilin",
    ctaText: "Aktif kullanicilarla tanismak ve canli sohbet akisini yakalamak icin Zurna.TR girisini kullanabilirsiniz.",
  },
  "chat-odalari": {
    slug: "chat-odalari",
    keyword: "chat odalari",
    title: "Chat Odalari",
    seoTitle: "Chat Odalari | Canli ve Mobil Chat Kanallari - Zurna.TR",
    description:
      "Chat odalari ile farkli konularda yazisin. Zurna.TR mobil uyumlu, canli ve samimi chat odalari deneyimi sunar.",
    heroBadge: "CHAT ODALARI",
    heroTitle: "Chat Odalari ile",
    heroAccent: "Konuya Dahil Olun",
    heroText:
      "Chat odalari, kullanicilarin ilgi alanlarina, sohbet temposuna ve tanisma beklentisine gore farkli alanlarda bulusmasini saglar.",
    stats: ["Konu odakli odalar", "Genel muhabbet", "Mobil erisim", "Canli kullanici akisi"],
    sections: [
      {
        title: "Chat Odalari Ne Sunar?",
        paragraphs: [
          "Chat odalari arayan kullanicilar, tek bir genel alandan daha fazlasini bekler. Farkli konu basliklari, farkli sohbet temposu ve daha kolay dahil olunabilir ortamlar ister. Zurna.TR chat odalari sayfasi bu arama niyetini karsilamak icin odalarin ne ise yaradigini, kimler icin uygun oldugunu ve kullanicinin nasil baslayabilecegini aciklar.",
          "Bir chat odasi, dijital bir masa gibi dusunulebilir. Genel sohbet odasinda herkesin katilabilecegi konular one cikarken, arkadaslik veya mobil chat odakli alanlarda daha hedefli beklentiler bulunabilir. Kullanici dogru odaya girdiginde kendini daha hizli ifade eder ve sohbetten daha fazla verim alir.",
          "Zurna.TR, chat odalari deneyimini sadece liste halinde sunmak yerine, sayfa icindeki rehber metinlerle destekler. Boylece ziyaretci hangi secenegin kendisine uygun oldugunu anlayabilir ve ilgili sohbet sayfalarina gecis yapabilir."
        ],
      },
      {
        title: "Dogru Chat Odasini Secmek",
        paragraphs: [
          "Dogru chat odasini secmek, kullanicinin beklentisini bilmesiyle baslar. Hizli ve kalabalik bir akis isteyenler genel chat alanlarini tercih edebilir. Daha sakin tanisma isteyenler sanal sohbet veya anonim sohbet sayfalarini inceleyebilir. Teknik olarak IRC kulturuyle ilgilenenler ise IRC chat sayfasina gecebilir.",
          "Chat odalari sayfasinda hiyerarsi onemlidir. H1 ana hedef kelimeyi tasir, H2 bolumleri arama niyetini aciklar, H3 kartlari ise kullaniciya hizli karar noktasi verir. Bu yapi hem SEO hem de erisilebilirlik acisindan daha temiz bir deneyim olusturur.",
          "Mobil kullanicilar icin odalarin acik etiketlenmesi ve butonlarin rahat tiklanabilir olmasi gerekir. Zurna.TR tasarim dili, genis kartlar ve belirgin CTA alanlariyla bu ihtiyaci karsilar."
        ],
      },
    ],
    cards: [
      { title: "Genel Chat Odalari", text: "Herkesin katilabilecegi samimi ve hareketli muhabbet alanlari." },
      { title: "Arkadaslik Odalari", text: "Yeni kisilerle daha hedefli tanisma imkani sunan sohbet alanlari." },
      { title: "Mobil Chat Odalari", text: "Telefon ve tablet uzerinden kolay okunabilir chat deneyimi." },
    ],
    checklistTitle: "Chat Odalari Kullaniciya Ne Katar?",
    checklist: ["Konuya gore oda secimi", "Daha hizli uyum saglama", "Mobilde kolay katilim", "Yeni arkadaslik ihtimalini artirma", "Ilgili sohbet sayfalarina yonlendirme"],
    faq: [
      { question: "Chat odalari ucretsiz mi?", answer: "Zurna.TR chat odalari deneyimi ucretsiz sohbet beklentisini karsilayacak sekilde hazirlanmistir." },
      { question: "Hangi chat odasina girmeliyim?", answer: "Genel muhabbet icin genel odalari, tanisma icin arkadaslik odakli alanlari, teknik deneyim icin IRC chat sayfasini tercih edebilirsiniz." },
      { question: "Chat odalari mobilde rahat kullanilir mi?", answer: "Evet. Sayfa yapisi ve yonlendirmeler mobil cihazlarda rahat okunacak sekilde olusturulmustur." },
    ],
    related: [
      { href: "/chat", label: "Chat" },
      { href: "/sohbet-odalari", label: "Sohbet Odalari" },
      { href: "/irc-chat", label: "IRC Chat" },
      { href: "/online-sohbet", label: "Online Sohbet" },
    ],
    ctaTitle: "Chat Odalarini Kesfedin",
    ctaText: "Ilgi alaniniza uygun odalarda yeni insanlarla tanismak icin sohbet girisini kullanabilirsiniz.",
  },
  "kayitsiz-sohbet": {
    slug: "kayitsiz-sohbet",
    keyword: "kayitsiz sohbet",
    title: "Kayitsiz Sohbet",
    seoTitle: "Kayitsiz Sohbet | Uyeliksiz ve Hizli Sohbet Girisi - Zurna.TR",
    description:
      "Kayitsiz sohbet ile uzun form doldurmadan sohbet odalarini kesfedin. Zurna.TR hizli, mobil uyumlu ve samimi deneyim sunar.",
    heroBadge: "KAYITSIZ SOHBET",
    heroTitle: "Kayitsiz Sohbet ile",
    heroAccent: "Hemen Baslayin",
    heroText:
      "Kayitsiz sohbet, hesap olusturmadan once ortami gormek ve hizli sekilde yazismaya baslamak isteyen kullanicilarin en net arama niyetidir.",
    stats: ["Form yok", "Hizli baslangic", "Rumuzla giris", "Mobil uyum"],
    sections: [
      {
        title: "Kayitsiz Sohbet Neden Onemli?",
        paragraphs: [
          "Kayitsiz sohbet arayan kullanici, zaman kaybetmek istemez. Uzun uyelik adimlari, e-posta dogrulamalari veya karmaşık profil ekranlari yerine, once sohbet ortamini tanimak ister. Zurna.TR kayitsiz sohbet sayfasi bu niyeti dogrudan karsilar ve kullaniciya hizli baslangic mantigini aciklar.",
          "Kayitsiz deneyim, ozellikle yeni kullanicilar icin guven olusturur. Kisi once odalarin atmosferini gorur, hangi konularin konusuldugunu anlar ve daha sonra sitede kalip kalmayacagina karar verir. Bu yaklasim, kullaniciyi zorlamadan davet eden daha dogal bir UX sunar.",
          "Zurna.TR, kayitsiz sohbet kavramini ucretsiz sohbet ve uyeliksiz sohbet sayfalarindan ayirir. Kayitsiz arama niyeti daha cok 'hemen denemek' ile ilgilidir; uyeliksiz sohbet ise daha genis bir hesap gerektirmeme beklentisini anlatir. Bu ayrim, SEO iceriginin benzersiz kalmasina yardim eder."
        ],
      },
      {
        title: "Kayitsiz Giriste Kullanici Deneyimi",
        paragraphs: [
          "Kayitsiz giriste sayfa net olmalidir. Kullanici hangi adimi atacagini, ne beklemesi gerektigini ve hangi cihazlardan erisebilecegini hizla anlamalidir. Bu nedenle sayfa, kisa ama acik kartlar, fayda listesi, SSS ve ilgili sayfa baglantilariyla desteklenir.",
          "Mobilde kayitsiz sohbet daha da degerlidir. Telefonla gelen kullanici, klavyede uzun bilgiler yazmak istemez. Rumuzla giris fikri, mobil deneyimi daha hafif hale getirir. CTA alanlari belirgin tutuldugunda ziyaretci sayfa icinde kaybolmadan sohbet girisine ulasir.",
          "Kayitsiz sohbet, anonim sohbetle karistirilabilir; ancak iki niyet ayni degildir. Anonim sohbet daha cok kimlik gizliligi hissine odaklanirken, kayitsiz sohbet daha cok baslangic kolayligina odaklanir. Zurna.TR bu farki internal linklerle kullaniciya aciklar."
        ],
      },
    ],
    cards: [
      { title: "Hizli Deneme", text: "Sohbet ortamini uzun kayit adimlari olmadan tanima imkani verir." },
      { title: "Rumuz Esnekligi", text: "Kendinize uygun bir rumuzla sohbet akisini kesfedebilirsiniz." },
      { title: "Yeni Kullanici Dostu", text: "Ilk kez gelen ziyaretciler icin sade ve anlasilir bir baslangic sunar." },
    ],
    checklistTitle: "Kayitsiz Sohbetin Sagladiklari",
    checklist: ["Hizli ilk temas", "Daha az form yorgunlugu", "Mobilde kolay kullanim", "Anonim ve uyeliksiz sayfalara dogal baglanti", "Sohbet ortamini once tanima firsati"],
    faq: [
      { question: "Kayitsiz sohbet ne anlama gelir?", answer: "Kayitsiz sohbet, uzun hesap olusturma adimlari olmadan sohbet ortamini kesfetme beklentisini ifade eder." },
      { question: "Kayitsiz sohbet anonim midir?", answer: "Kayitsiz giris anonimlik hissi verebilir, ancak anonim sohbet sayfasi kimlik gizliligi niyetini daha ayrintili ele alir." },
      { question: "Kayitsiz sohbet mobilde uygun mu?", answer: "Evet. Hizli baslangic beklentisi mobil kullanicilar icin ozellikle uygundur." },
    ],
    related: [
      { href: "/uyeliksiz-sohbet", label: "Uyeliksiz Sohbet" },
      { href: "/anonim-sohbet", label: "Anonim Sohbet" },
      { href: "/ucretsiz-sohbet", label: "Ucretsiz Sohbet" },
      { href: "/sanal-sohbet", label: "Sanal Sohbet" },
    ],
    ctaTitle: "Kayitsiz Sohbete Goz Atin",
    ctaText: "Sohbet ortamini hizlica tanimak ve yeni insanlarla yazismaya baslamak icin Zurna.TR girisini kullanabilirsiniz.",
  },
  "uyeliksiz-sohbet": {
    slug: "uyeliksiz-sohbet",
    keyword: "uyeliksiz sohbet",
    title: "Uyeliksiz Sohbet",
    seoTitle: "Uyeliksiz Sohbet | Hesapsiz Sohbet Odalari - Zurna.TR",
    description:
      "Uyeliksiz sohbet ile hesap zorunlulugu olmadan sohbet odalarini kesfedin. Zurna.TR mobil uyumlu ve kolay giris deneyimi sunar.",
    heroBadge: "UYELIKSIZ SOHBET",
    heroTitle: "Uyeliksiz Sohbet ile",
    heroAccent: "Hesapsiz Kesfedin",
    heroText:
      "Uyeliksiz sohbet, profil olusturmadan sohbet ortamina goz atmak isteyen kullanicilar icin pratik ve rahat bir arama niyetini temsil eder.",
    stats: ["Hesap zorunlulugu yok", "Kolay erisim", "Sade deneyim", "Mobil uyum"],
    sections: [
      {
        title: "Uyeliksiz Sohbet Hangi Ihtiyaci Karsilar?",
        paragraphs: [
          "Uyeliksiz sohbet arayan kullanici, genellikle hesap acmadan once platformu tanimak ister. Bu niyet, kayitsiz sohbetle yakin olsa da daha cok uyelik bariyerinin ortadan kalkmasina odaklanir. Zurna.TR uyeliksiz sohbet sayfasi, kullanicinin hesap zorunlulugu olmadan sohbet deneyimini anlamasina yardim eder.",
          "Uyelik formlari bazi kullanicilar icin guven verirken, bazilari icin gereksiz bir ilk engel olabilir. Ozellikle kisa sureli muhabbet etmek, ortami tanimak veya mobil cihazdan hizlica baglanmak isteyenler daha hafif bir baslangic bekler. Bu sayfa, o beklentiyi sade bir anlatimla karsilar.",
          "Zurna.TR, uyeliksiz sohbeti tamamen kontrolsuz bir deneyim gibi sunmaz. Aksine, saygili iletisim, kolay erisim ve dogru yonlendirme birlikte ele alinir. Kullanici hem rahat baslar hem de ilgili sayfalardan deneyimini derinlestirebilir."
        ],
      },
      {
        title: "Hesap Olmadan Sohbet Deneyimi",
        paragraphs: [
          "Hesap olmadan sohbet fikri, kullaniciya esneklik kazandirir. Kisi uzun sureli bir profil yaratmadan once odalari, sohbet temposunu ve topluluk yapisini gorebilir. Bu ozellik, ilk ziyaretlerde karar vermeyi kolaylastirir ve platforma daha yumusak bir giris saglar.",
          "Uyeliksiz sohbet sayfasi, anonim sohbetten farkli olarak kimlik gizleme temasini degil, uyelik zorunlulugunun bulunmamasini merkeze alir. Bu ayrim, arama motorlari ve kullanicilar icin daha net bir sayfa amaci olusturur. Internal linkler sayesinde kullanici anonim veya kayitsiz sohbet gibi yakin niyetlere de ulasabilir.",
          "Sayfa, mevcut sohbet tasarimindaki genis hero ve kartli yapiyi kullanarak hem tanidik hem de hedef kelimeye ozgu bir deneyim sunar. Boylece yeni route, siteden kopuk durmaz."
        ],
      },
    ],
    cards: [
      { title: "Hesapsiz Baslangic", text: "Sohbet ortamini hesap olusturmadan once inceleyebilirsiniz." },
      { title: "Daha Az Engel", text: "Kullanici, uzun uyelik sureci olmadan deneyime odaklanir." },
      { title: "Dogal Yonlendirme", text: "Kayitsiz, anonim ve ucretsiz sohbet sayfalarina kolay gecis saglanir." },
    ],
    checklistTitle: "Uyeliksiz Sohbetin Farklari",
    checklist: ["Uyelik bariyerini azaltir", "Yeni kullaniciya rahat baslangic verir", "Mobilde daha hizli ilerler", "Kayitsiz sohbet niyetinden ayrisir", "Sohbet ekosistemine dogal gecis saglar"],
    faq: [
      { question: "Uyeliksiz sohbet ile kayitsiz sohbet ayni mi?", answer: "Yakin anlamlidir; ancak uyeliksiz sohbet hesap zorunlulugunun olmamasini, kayitsiz sohbet ise hizli deneme niyetini daha cok vurgular." },
      { question: "Uyeliksiz sohbet guvenli mi?", answer: "Guvenli deneyim, saygili kullanim ve duzenli ortam beklentisiyle desteklenmelidir. Zurna.TR bu konuda sade ve net yonlendirme sunar." },
      { question: "Uyeliksiz sohbet ucretsiz mi?", answer: "Ucretsiz sohbet sayfasi bu niyeti daha ayrintili aciklar; uyeliksiz sayfa ise hesap zorunluluguna odaklanir." },
    ],
    related: [
      { href: "/kayitsiz-sohbet", label: "Kayitsiz Sohbet" },
      { href: "/anonim-sohbet", label: "Anonim Sohbet" },
      { href: "/ucretsiz-sohbet", label: "Ucretsiz Sohbet" },
      { href: "/sohbet-sitesi", label: "Sohbet Sitesi" },
    ],
    ctaTitle: "Uyeliksiz Sohbeti Deneyin",
    ctaText: "Hesap zorunlulugu olmadan sohbet ortamini kesfetmek icin Zurna.TR giris alanindan baslayabilirsiniz.",
  },
  "anonim-sohbet": {
    slug: "anonim-sohbet",
    keyword: "anonim sohbet",
    title: "Anonim Sohbet",
    seoTitle: "Anonim Sohbet | Rumuzla Guvenli Sohbet Deneyimi - Zurna.TR",
    description:
      "Anonim sohbet ile rumuz kullanarak yeni insanlarla tanisin. Zurna.TR rahat, mobil uyumlu ve samimi sohbet deneyimi sunar.",
    heroBadge: "ANONIM SOHBET",
    heroTitle: "Anonim Sohbet ile",
    heroAccent: "Rahatca Konusun",
    heroText:
      "Anonim sohbet, kullanicinin kendini daha rahat ifade etmek ve once ortami tanimak istedigi durumlarda tercih ettigi bir sohbet bicimidir.",
    stats: ["Rumuz kullanimi", "Rahat ifade", "Mobil uyum", "Samimi ortam"],
    sections: [
      {
        title: "Anonim Sohbetin Temel Niyeti",
        paragraphs: [
          "Anonim sohbet arayan kullanici, genellikle kimligini on plana cikarmadan konusabilecegi bir alan ister. Bu, gizemli veya guvensiz bir deneyim anlamina gelmez; aksine, kullanicinin kendini daha rahat ifade etmesine yardim eden bir baslangic bicimidir. Zurna.TR anonim sohbet sayfasi bu niyeti acik ve dengeli bir dille ele alir.",
          "Rumuz kullanimi, anonim sohbet deneyiminin merkezindedir. Kullanici kendi adini vermek zorunda kalmadan bir takma adla ortama dahil olabilir. Bu sayede ilk temas daha hafif, daha rahat ve daha ozgur hissedilir. Elbette bu rahatligin saygili iletisimle desteklenmesi gerekir.",
          "Anonim sohbet sayfasi, kayitsiz ve uyeliksiz sohbet sayfalarindan ayrilir. Kayitsiz deneyim hizli baslangica, uyeliksiz deneyim hesap zorunlulugunun olmamasina, anonim deneyim ise kisinin kendini nasil temsil ettigine odaklanir. Bu ayrim sayfanin benzersiz arama niyetini guclendirir."
        ],
      },
      {
        title: "Rahat Iletisim ve Sorumlu Kullanim",
        paragraphs: [
          "Anonimlik, kullaniciya rahatlik saglarken sorumlu iletisim ihtiyacini ortadan kaldirmaz. Iyi bir sohbet ortami, rumuzla katilan kisilerin de karsilikli saygi icinde konusmasini gerektirir. Zurna.TR sayfasi bu dengeyi vurgular ve kullaniciyi samimi bir sohbet deneyimine davet eder.",
          "Anonim sohbet mobil kullanicilar icin de uygundur. Kisi kisa bir mola sirasinda, yolculukta veya evde dinlenirken sohbet ortamini acabilir. Sayfa yapisi, uzun bloklara bogulmadan bolumlere ayrildigi icin mobilde okunabilir kalir.",
          "Zurna.TR anonim sohbet sayfasi, kullanicinin gizlilik beklentisini dogru anlar ancak bunu abartili vaatlerle sunmaz. Sayfa, pratik rumuz deneyimini, rahat baslangici ve ilgili sohbet sayfalarina gecisi on plana cikarir."
        ],
      },
    ],
    cards: [
      { title: "Rumuzla Katilim", text: "Kendinizi bir rumuzla temsil ederek sohbet ortamina dahil olabilirsiniz." },
      { title: "Rahat Baslangic", text: "Ilk kez gelen kullanicilar icin daha dusuk baskili bir deneyim sunar." },
      { title: "Saygili Ortam", text: "Anonimlik, samimi ve duzenli iletisim beklentisiyle birlikte ele alinir." },
    ],
    checklistTitle: "Anonim Sohbetin Kullaniciya Katkisi",
    checklist: ["Kimlik baskisini azaltir", "Rumuzla ifade imkani verir", "Ilk temaslari kolaylastirir", "Kayitsiz ve uyeliksiz sayfalara baglanir", "Mobil kullanimda pratiklik saglar"],
    faq: [
      { question: "Anonim sohbet tamamen gizli midir?", answer: "Anonim sohbet, daha cok rumuzla katilim ve rahat ifade niyetini anlatir; her platformun teknik kosullari farkli olabilir." },
      { question: "Anonim sohbet icin uyelik gerekir mi?", answer: "Uyeliksiz sohbet sayfasi hesap zorunlulugu konusunu daha ayrintili ele alir." },
      { question: "Anonim sohbet kimler icin uygundur?", answer: "Once ortami tanimak, rumuzla konusmak ve daha rahat baslamak isteyen kullanicilar icin uygundur." },
    ],
    related: [
      { href: "/kayitsiz-sohbet", label: "Kayitsiz Sohbet" },
      { href: "/uyeliksiz-sohbet", label: "Uyeliksiz Sohbet" },
      { href: "/sanal-sohbet", label: "Sanal Sohbet" },
      { href: "/turkce-sohbet", label: "Turkce Sohbet" },
    ],
    ctaTitle: "Anonim Sohbeti Kesfedin",
    ctaText: "Rumuzunuzla katilin, ortami tanıyın ve samimi sohbet akisini kendi temponuzda deneyimleyin.",
  },
  "sohbet-sitesi": {
    slug: "sohbet-sitesi",
    keyword: "sohbet sitesi",
    title: "Sohbet Sitesi",
    seoTitle: "Sohbet Sitesi | Mobil Uyumlu Sohbet Odalari - Zurna.TR",
    description:
      "Sohbet sitesi arayanlar icin Zurna.TR; ucretsiz, mobil uyumlu, IRC destekli ve samimi sohbet odalari sunar.",
    heroBadge: "SOHBET SITESI",
    heroTitle: "Sohbet Sitesi Arayanlara",
    heroAccent: "Zurna.TR Deneyimi",
    heroText:
      "Sohbet sitesi aramasi, tek bir sayfadan daha fazlasini ifade eder: kullanici guven veren, aktif, mobil uyumlu ve kolay anlasilir bir sohbet ekosistemi arar.",
    stats: ["Sohbet ekosistemi", "SEO sayfalari", "Mobil deneyim", "IRC destekli yapi"],
    sections: [
      {
        title: "Iyi Bir Sohbet Sitesi Nasil Olmali?",
        paragraphs: [
          "Sohbet sitesi arayan kullanici, genellikle bir platformun tamamini degerlendirmek ister. Sadece tek bir sohbet odasi degil; anasayfa, giris alani, mobil uyum, ilgili sayfalar, guven veren icerik ve canli topluluk sinyalleri birlikte onem kazanir. Zurna.TR sohbet sitesi sayfasi bu genis niyeti karsilamak icin hazirlandi.",
          "Iyi bir sohbet sitesi, kullaniciya yol gosterir. Yeni gelen kisi ucretsiz sohbet sayfasindan baslayabilir, kayitsiz sohbet ile hizli deneme fikrini anlayabilir, chat odalari ile konu seceneklerini gorebilir veya IRC chat sayfasinda altyapi hakkinda bilgi alabilir. Bu ic link mimarisi, siteyi dağınık sayfalar toplulugu olmaktan cikarip anlamli bir deneyime donusturur.",
          "Zurna.TR tasariminda ortak layout, ustte sohbet girisi ve footer baglantilari kullanicinin her sayfada yonunu bulmasina yardim eder. Yeni SEO sayfalari da bu yapinin icine uyumlu sekilde eklenerek mevcut deneyimi bozmadan genisletilir."
        ],
      },
      {
        title: "Sohbet Sitesinde Guven, Hiz ve Icerik",
        paragraphs: [
          "Sohbet sitesi seciminde hiz onemlidir, fakat tek basina yeterli degildir. Kullanici sayfanin ne anlattigini, nereye tiklayacagini ve hangi deneyimi elde edecegini anlamalidir. Bu nedenle baslik hiyerarsisi, meta bilgileri, schema verileri ve ilgili sayfa baglantilari bir arada planlanir.",
          "Mobil uyumluluk, modern sohbet siteleri icin zorunlu hale gelmistir. Ziyaretciler cogu zaman telefon ekranindan gelir; kartlar, listeler ve CTA alanlari bu gercege gore okunabilir olmalidir. Zurna.TR yeni sayfalari, mevcut `/sohbet` sayfasinin genis ama sade yapisini referans alir.",
          "Bir sohbet sitesi, farkli arama niyetlerini ayni marka altinda cevapladiginda daha guclu olur. Zurna.TR icin olusturulan yeni sayfalar, chat, sanal sohbet, anonim sohbet ve Turkce sohbet gibi farkli beklentilere ayri ayri yanit verir."
        ],
      },
    ],
    cards: [
      { title: "Genis Icerik Agi", text: "Farkli sohbet niyetleri icin ayri ve hedefli sayfalar sunar." },
      { title: "Ortak Deneyim", text: "Tasarim dili ve giris akisi sayfalar arasinda tutarlidir." },
      { title: "Mobil Oncelik", text: "Sohbet sitesi deneyimi telefon ve tablet kullanicilarini da kapsar." },
    ],
    checklistTitle: "Zurna.TR Sohbet Sitesi Yapisi",
    checklist: ["Anlasilir route mimarisi", "Hedef kelimeye ozgu sayfalar", "Canonical ve sosyal metadata", "Breadcrumb ve WebPage schema", "Dogal internal linkler"],
    faq: [
      { question: "Sohbet sitesi seciminde neye bakilmali?", answer: "Mobil uyum, kolay giris, aktif odalar, net icerik ve guven veren sayfa yapisi onemlidir." },
      { question: "Zurna.TR sadece chat sitesi mi?", answer: "Zurna.TR chat, sohbet odalari, mobil sohbet, IRC chat ve radyo gibi farkli deneyimleri bir arada sunar." },
      { question: "Sohbet sitesi mobilde kullanilir mi?", answer: "Evet. Modern sohbet sitesi deneyimi mobil cihazlari temel kullanici kanali olarak dusunmelidir." },
    ],
    related: [
      { href: "/sohbet", label: "Sohbet" },
      { href: "/chat", label: "Chat" },
      { href: "/ucretsiz-sohbet", label: "Ucretsiz Sohbet" },
      { href: "/turkce-sohbet", label: "Turkce Sohbet" },
    ],
    ctaTitle: "Zurna.TR Sohbet Sitesini Kesfedin",
    ctaText: "Farkli sohbet sayfalarini inceleyin ve size en uygun muhabbet deneyimine kolayca ulasin.",
  },
  "irc-chat": {
    slug: "irc-chat",
    keyword: "irc chat",
    title: "IRC Chat",
    seoTitle: "IRC Chat | Hizli ve Koklu Chat Altyapisi - Zurna.TR",
    description:
      "IRC chat ile koklu sohbet kultürünü modern web deneyimiyle kesfedin. Zurna.TR mobil uyumlu ve hizli chat ortami sunar.",
    heroBadge: "IRC CHAT",
    heroTitle: "IRC Chat ile",
    heroAccent: "Koklu Altyapi",
    heroText:
      "IRC chat, internet sohbet kulturunun en koklu alanlarindan biridir. Zurna.TR bu deneyimi modern sayfa yapisi ve kolay erisimle daha anlasilir hale getirir.",
    stats: ["Koklu teknoloji", "Hizli mesaj akisi", "Kanal mantigi", "Mobil erisim"],
    sections: [
      {
        title: "IRC Chat Nedir?",
        paragraphs: [
          "IRC chat, Internet Relay Chat altyapisina dayanan geleneksel ve guclu bir yazisma deneyimini ifade eder. Bu arama niyetindeki kullanici, genellikle klasik chat kulturunu, kanal mantigini ve hizli mesaj akisini merak eder. Zurna.TR IRC chat sayfasi, teknik kavramlari gereksiz agirlastirmadan aciklar.",
          "IRC chat deneyiminde odalar genellikle kanal mantigiyla dusunulur. Kullanici belirli bir kanala katilir, oradaki akisi takip eder ve uygun anda mesaja dahil olur. Bu yapi, genel sohbet odalarindan farkli olarak daha organize bir hissiyat verebilir. Zurna.TR, IRC sohbet sayfasiyla birlikte bu sayfayi da chat arama niyetine uygun sekilde konumlandirir.",
          "Modern kullanicilar IRC chat kavramini duymus olabilir ama nasil baslayacagini bilmeyebilir. Bu nedenle sayfa, teknik ayrintiya bogulmadan faydayi anlatir: hizli baglanti, aktif kanallar, dusuk karmasa ve mobil cihazlardan erisim."
        ],
      },
      {
        title: "IRC Chat ve Modern Web Deneyimi",
        paragraphs: [
          "Klasik IRC kulturu, bugunun web beklentileriyle desteklendiginde daha genis bir kullanici kitlesine ulasir. Kullanici artik sadece masaustu programlarla degil, web uzerinden de sohbet deneyimini kesfetmek ister. Zurna.TR sayfasi bu gecisi anlatir ve mIRC indirme gibi ilgili sayfalara dogal baglanti kurar.",
          "IRC chat arayan kisiler bazen teknik, bazen nostaljik, bazen de hiz odaklidir. Bu farkli beklentileri tek metinde toplamak icin sayfa bolumlere ayrilir. H2 basliklari bilgi verir, H3 kartlari hizli karar noktasi sunar, SSS alani ise temel sorulari cevaplar.",
          "IRC chat sayfasi, chat ve IRC sohbet sayfalari arasinda kopru gorevi gorur. Boylece kullanici hem genel chat deneyimine hem de daha teknik IRC anlatimina kolayca ulasir."
        ],
      },
    ],
    cards: [
      { title: "Kanal Mantigi", text: "Farkli odalarda konuya veya topluluga gore yazisma imkani sunar." },
      { title: "Hizli AkiS", text: "IRC kulturu dusuk gecikmeli ve hizli mesajlasma beklentisiyle bilinir." },
      { title: "Webden Erisim", text: "Modern sayfa yapisi, IRC chat kavramini daha kolay anlasilir hale getirir." },
    ],
    checklistTitle: "IRC Chat Icin One Cikanlar",
    checklist: ["Koklu sohbet kulturu", "Kanal tabanli deneyim", "Hizli mesaj akisi", "Chat sayfalariyla guclu internal link", "mIRC indirme sayfasina dogal gecis"],
    faq: [
      { question: "IRC chat ile IRC sohbet ayni mi?", answer: "Temelde yakin kavramlardir; IRC chat daha cok chat arama niyetine, IRC sohbet ise Turkce sohbet anlatimina odaklanir." },
      { question: "IRC chat icin program gerekir mi?", answer: "Web deneyimiyle baslamak mumkundur; masaustu tercih edenler mIRC indirme sayfasini inceleyebilir." },
      { question: "IRC chat mobilde kullanilabilir mi?", answer: "Zurna.TR sayfalari mobil erisimi destekleyecek sekilde planlanmistir." },
    ],
    related: [
      { href: "/irc-sohbet", label: "IRC Sohbet" },
      { href: "/chat", label: "Chat" },
      { href: "/mirc-indir", label: "mIRC Indir" },
      { href: "/chat-odalari", label: "Chat Odalari" },
    ],
    ctaTitle: "IRC Chat Deneyimine Gecin",
    ctaText: "Koklu chat kulturunu modern Zurna.TR deneyimiyle kesfetmek icin sohbet girisini kullanabilirsiniz.",
  },
  "turkce-sohbet": {
    slug: "turkce-sohbet",
    keyword: "turkce sohbet",
    title: "Turkce Sohbet",
    seoTitle: "Turkce Sohbet | Turkce Chat ve Sohbet Odalari - Zurna.TR",
    description:
      "Turkce sohbet ile ayni dili konusan kullanicilarla tanisin. Zurna.TR samimi, mobil uyumlu ve aktif sohbet odalari sunar.",
    heroBadge: "TURKCE SOHBET",
    heroTitle: "Turkce Sohbet ile",
    heroAccent: "Ayni Dilde Bulusun",
    heroText:
      "Turkce sohbet, ayni dili konusan kullanicilarin daha dogal, daha hizli ve daha samimi bir muhabbet kurma istegine yanit verir.",
    stats: ["Turkce iletisim", "Yerel kultur", "Samimi muhabbet", "Mobil erisim"],
    sections: [
      {
        title: "Turkce Sohbet Neden Ayrı Bir Niyet Tasir?",
        paragraphs: [
          "Turkce sohbet arayan kullanici, sadece herhangi bir chat ortamina girmek istemez; ayni dili, benzer ifadeleri ve ortak kultur kodlarini paylasan insanlarla konusmak ister. Bu niyet, genel sohbet aramasindan farklidir. Zurna.TR Turkce sohbet sayfasi, bu dil ve kultur beklentisini merkeze alir.",
          "Ayni dilde sohbet etmek, muhabbetin akisini kolaylastirir. Espriler, gunluk ifadeler, sehirler, muzikler ve ortak gundemler daha hizli anlasilir. Bu nedenle Turkce sohbet sayfasi, kullaniciya sadece teknik bir chat deneyimi degil, daha tanidik bir sosyal alan vadeder.",
          "Zurna.TR, Turkce sohbet deneyimini mobil sohbet, chat odalari ve sanal sohbet sayfalariyla baglantili sekilde sunar. Kullanici ister genel odalarda yazissin ister daha hedefli sayfalari incelesin, site icinde Turkce icerik akisini kaybetmez."
        ],
      },
      {
        title: "Yerel Muhabbet ve Mobil Erisim",
        paragraphs: [
          "Turkce sohbet deneyiminde yerel his onemlidir. Kullanici farkli sehirlerden insanlarla konusabilir, gundelik konulari paylasabilir ve ortak ilgi alanlari uzerinden yeni arkadasliklar kurabilir. Bu sayfa, o yerel hissi abartmadan ve gereksiz tekrar yapmadan anlatir.",
          "Mobil erisim, Turkce sohbet arayanlar icin de temel beklentidir. Telefon ekraninda uzun paragraflarin bogucu olmamasi, basliklarin net kalmasi ve CTA alanlarinin kolay bulunmasi gerekir. Zurna.TR ortak sayfa componenti bu duzeni korur.",
          "Turkce sohbet sayfasi, site icinde hem genel sohbet hem de chat tarafina kopru kurar. Bu sayede ziyaretci dil odakli arama niyetinden, ucretsiz sohbet veya online sohbet gibi daha eylem odakli sayfalara rahatca gecebilir."
        ],
      },
    ],
    cards: [
      { title: "Ayni Dil", text: "Turkce konusan kullanicilarla daha dogal bir sohbet akisi kurabilirsiniz." },
      { title: "Yerel Konular", text: "Sehirler, muzik, gundem ve gunluk hayat uzerinden muhabbet edebilirsiniz." },
      { title: "Kolay Katilim", text: "Mobil uyumlu sayfa yapisi Turkce sohbet deneyimini pratik hale getirir." },
    ],
    checklistTitle: "Turkce Sohbetin Degeri",
    checklist: ["Ayni dilde hizli anlasma", "Yerel kulturle daha samimi muhabbet", "Mobil cihazlardan kolay erisim", "Chat ve sohbet sayfalarina dogal gecis", "Yeni arkadasliklar icin uygun ortam"],
    faq: [
      { question: "Turkce sohbet kimler icin uygun?", answer: "Turkce konusan kullanicilarla daha dogal ve samimi muhabbet kurmak isteyen herkes icin uygundur." },
      { question: "Turkce sohbet ucretsiz mi?", answer: "Ucretsiz sohbet sayfasi bu niyeti ayrintili aciklar; Turkce sohbet sayfasi dil ve kultur odakli deneyimi anlatir." },
      { question: "Turkce sohbet mobilde kullanilir mi?", answer: "Evet. Zurna.TR sayfalari mobil ekranlarda okunabilir ve kullanilabilir olacak sekilde hazirlanmistir." },
    ],
    related: [
      { href: "/sohbet", label: "Sohbet" },
      { href: "/online-sohbet", label: "Online Sohbet" },
      { href: "/sanal-sohbet", label: "Sanal Sohbet" },
      { href: "/ucretsiz-sohbet", label: "Ucretsiz Sohbet" },
    ],
    ctaTitle: "Turkce Sohbete Katilin",
    ctaText: "Ayni dili konusan kullanicilarla samimi muhabbet etmek icin Zurna.TR sohbet girisini kullanabilirsiniz.",
  },
  "sesli-sohbet": {
    slug: "sesli-sohbet",
    keyword: "sesli sohbet",
    title: "Sesli Sohbet",
    seoTitle: "Sesli Sohbet | Canli Muhabbet ve Sohbet Odalari - Zurna.TR",
    description:
      "Sesli sohbet arayanlar icin Zurna.TR, canli muhabbet kulturunu mobil uyumlu sohbet odalari ve kolay giris deneyimiyle anlatir.",
    heroBadge: "SESLI SOHBET",
    heroTitle: "Sesli Sohbet ile",
    heroAccent: "Daha Yakin Hissedin",
    heroText:
      "Sesli sohbet aramasi, yazili mesajdan daha sicak ve daha dogrudan iletisim isteyen kullanicilarin niyetini tasir. Zurna.TR bu ihtiyaci canli muhabbet, guvenli ortam ve kolay erisim baglaminda ele alir.",
    stats: ["Daha dogal iletisim", "Canli muhabbet", "Mobil erisim", "Samimi ortam"],
    sections: [
      {
        title: "Sesli Sohbet Neden Aranir?",
        paragraphs: [
          "Sesli sohbet arayan kullanici genellikle yazili mesajlasmanin otesine gecmek ister. Ses tonu, duraklama, gulme ve anlik tepki gibi unsurlar iletisimde daha insani bir his olusturur. Bu nedenle sesli sohbet arama niyeti, sadece bir odaya girmekten cok daha fazlasini anlatir; kullanici kendini daha yakin hissedecegi bir dijital ortam arar.",
          "Zurna.TR sesli sohbet sayfasi, bu beklentiyi abartili teknik vaatlerle degil, kullanicinin aradigi deneyimi sade bir dille aciklayarak karsilar. Sohbet odalarinda yazili baslayan muhabbetler zamanla daha canli, daha sicak ve daha samimi bir etkilesime donebilir. Bu sayfa, sesli sohbet kavramini mevcut sohbet ekosistemine dogal sekilde baglar.",
          "Sesli sohbet deneyimi ozellikle yalnizlik hissini azaltmak, yeni insanlarla daha hizli kaynasmak veya yaziyla ifade edilmesi zor duygulari daha rahat aktarmak isteyenler icin anlamlidir. Bu nedenle sayfa, kullanicinin duygusal ve pratik beklentilerini birlikte ele alir."
        ],
      },
      {
        title: "Sesli Sohbette Konfor ve Guven",
        paragraphs: [
          "Sesli sohbetin kaliteli olmasi icin kullanici kendini rahat hissetmelidir. Rumuzla baslamak, ortami once yazili olarak tanimak ve sonra daha canli bir muhabbet temposuna gecmek bircok kisi icin daha guvenli bir yoldur. Zurna.TR, bu gecisi destekleyen sohbet sayfalariyla kullaniciya kademeli bir deneyim sunar.",
          "Mobil cihazlar sesli sohbet niyetinde onemli rol oynar. Kullanici bilgisayar basinda olmasa bile telefonundan sohbet ortamini acmak, aktif kullanicilari gormek ve uygun bir zamanda muhabbete dahil olmak ister. Sayfa yapisi bu nedenle mobilde okunabilir kartlar, net basliklar ve belirgin CTA alaniyla kurgulanmistir.",
          "Sesli sohbet sayfasi, canli sohbet, muhabbet ve arkadaslik sohbet gibi yakin arama niyetlerine dogal internal linkler verir. Boylece ziyaretci, aradigi sicak iletisim bicimine en yakin sayfayi kolayca bulabilir."
        ],
      },
    ],
    cards: [
      { title: "Sicak Iletisim", text: "Sesli sohbet niyeti daha dogal, daha yakin ve daha hizli anlasilan bir muhabbet beklentisini tasir." },
      { title: "Kademeli Baslangic", text: "Kullanici once ortami tanir, sonra kendini hazir hissettigi sohbet akisine dahil olabilir." },
      { title: "Mobil Uyum", text: "Telefon ve tablet kullanicilari icin sayfa akisi kolay okunur ve hizli karar vermeyi destekler." },
    ],
    checklistTitle: "Sesli Sohbet Icin One Cikanlar",
    checklist: ["Daha samimi iletisim arayisi", "Canli sohbet niyetine yakin deneyim", "Mobil cihazlardan kolay erisim", "Muhabbet ve arkadaslik sayfalarina baglanti", "Yeni kullanicilar icin rahat baslangic"],
    faq: [
      { question: "Sesli sohbet kimler icin uygundur?", answer: "Yazili mesajlasmadan daha sicak ve dogal bir iletisim hissi arayan kullanicilar icin uygundur." },
      { question: "Sesli sohbet ile canli sohbet ayni mi?", answer: "Yakin niyetlerdir; sesli sohbet daha cok sesli iletisim beklentisini, canli sohbet ise anlik aktif muhabbeti vurgular." },
      { question: "Sesli sohbet mobilde kullanilabilir mi?", answer: "Zurna.TR sayfa yapisi mobil kullanicilarin sohbet deneyimine kolay ulasmasi icin hazirlanmistir." },
    ],
    related: [
      { href: "/canli-sohbet", label: "Canli Sohbet" },
      { href: "/muhabbet", label: "Muhabbet" },
      { href: "/arkadaslik-sohbet", label: "Arkadaslik Sohbet" },
      { href: "/mobil-chat", label: "Mobil Chat" },
    ],
    ctaTitle: "Sesli Sohbet Deneyimini Kesfedin",
    ctaText: "Daha yakin ve daha samimi bir sohbet hissi icin Zurna.TR sohbet girisinden ortami tanimaya baslayabilirsiniz.",
  },
  "mobil-chat": {
    slug: "mobil-chat",
    keyword: "mobil chat",
    title: "Mobil Chat",
    seoTitle: "Mobil Chat | Telefondan Chat Odalari ve Sohbet - Zurna.TR",
    description:
      "Mobil chat ile telefon ve tablet uzerinden chat odalarini kesfedin. Zurna.TR hizli, sade ve mobil uyumlu sohbet deneyimi sunar.",
    heroBadge: "MOBIL CHAT",
    heroTitle: "Mobil Chat ile",
    heroAccent: "Her Yerden Yazisin",
    heroText:
      "Mobil chat, bilgisayar basinda olmadan chat odalarina katilmak isteyen kullanicilarin pratik arama niyetini karsilar.",
    stats: ["Telefondan erisim", "Hizli yukleme", "Kisa giris akisi", "Dokunmatik uyum"],
    sections: [
      {
        title: "Mobil Chat Arayan Kullanici Ne Bekler?",
        paragraphs: [
          "Mobil chat arayan kullanici, genellikle telefonundan hizli acilan, karmasik olmayan ve yazismaya cabuk goturen bir deneyim ister. Masaustu icin tasarlanmis agir sayfalar mobil ekranda yorucu olabilir. Bu nedenle mobil chat sayfasi, kullanicinin kisa surede ne yapacagini anlamasina ve ilgili sohbet alanina gecmesine yardim etmelidir.",
          "Zurna.TR mobil chat sayfasi, mobil sohbet sayfasindan farkli olarak chat kelimesinin anlik yazisma ve oda deneyimiyle kurdugu iliskiye odaklanir. Kullanici burada telefonla sadece site gezmek istemez; chat akisini gormek, odalara katilmak ve kisa mesajlarla muhabbete dahil olmak ister.",
          "Mobil chat deneyiminin guclu olmasi icin basliklar net, kartlar okunabilir ve CTA alani belirgin olmalidir. Zurna.TR ortak SEO componenti bu yapiyi koruyarak sayfanin hem arama motorlari hem de gercek kullanicilar icin temiz kalmasini saglar."
        ],
      },
      {
        title: "Telefonla Chat Deneyimini Kolaylastiran Unsurlar",
        paragraphs: [
          "Telefonla chat yaparken kullanici uzun formlar, kucuk linkler veya karisik menulerle ugrasmamalidir. Rumuzla baslama fikri, mobil ekranda yazma yukunu azaltir ve ziyaretciyi daha hizli aksiyona tasir. Bu sayfa, mobil kullanicinin dikkat suresine uygun sekilde bolumlere ayrilir.",
          "Mobil chat, online sohbet ve chat odalari sayfalariyla dogal bir bag kurar. Bir kullanici once mobil uyumu merak edebilir, sonra daha aktif odalara veya IRC chat gibi teknik bir alternatife gecmek isteyebilir. Internal linkler bu yolculugu destekler.",
          "Zurna.TR icin mobil chat sayfasi, hareket halindeki kullaniciyi merkeze alir. Evde, iste, okul cikisinda veya yolculukta sohbet ortamina ulasmak isteyenler icin pratik ve anlasilir bir giris noktasi olusturur."
        ],
      },
    ],
    cards: [
      { title: "Telefon Odakli", text: "Sayfa akisi mobil ekranda hizli okunacak ve kolay tiklanacak sekilde dusunulur." },
      { title: "Chat Niyeti", text: "Mobil sohbetten farkli olarak anlik chat odalari ve yazisma deneyimi one cikar." },
      { title: "Hizli Gecis", text: "Kullanici ilgili chat ve online sohbet sayfalarina kolayca ilerleyebilir." },
    ],
    checklistTitle: "Mobil Chat Avantajlari",
    checklist: ["Telefonla hizli erisim", "Kisa ve sade giris deneyimi", "Chat odalarina dogal baglanti", "Online sohbet niyetine gecis", "Dokunmatik kullanima uygun sayfa yapisi"],
    faq: [
      { question: "Mobil chat nedir?", answer: "Mobil chat, telefon veya tablet uzerinden chat odalarina ve anlik yazisma deneyimine ulasma niyetini ifade eder." },
      { question: "Mobil chat ile mobil sohbet farkli mi?", answer: "Mobil chat daha cok chat odalari ve anlik yazismayi, mobil sohbet ise daha genel mobil sohbet deneyimini vurgular." },
      { question: "Mobil chat icin uygulama gerekir mi?", answer: "Zurna.TR web deneyimi uzerinden sohbet girisine yonlendirir; kullanici sayfayi mobil tarayicidan acabilir." },
    ],
    related: [
      { href: "/mobil-sohbet", label: "Mobil Sohbet" },
      { href: "/chat", label: "Chat" },
      { href: "/chat-odalari", label: "Chat Odalari" },
      { href: "/online-sohbet", label: "Online Sohbet" },
    ],
    ctaTitle: "Mobil Chat Ortamina Gecin",
    ctaText: "Telefonunuzdan chat odalarini kesfetmek ve anlik yazismaya katilmak icin Zurna.TR girisini kullanabilirsiniz.",
  },
  "canli-sohbet": {
    slug: "canli-sohbet",
    keyword: "canli sohbet",
    title: "Canli Sohbet",
    seoTitle: "Canli Sohbet | Aktif Kullanici ve Anlik Muhabbet - Zurna.TR",
    description:
      "Canli sohbet ile aktif kullanicilarla anlik muhabbet edin. Zurna.TR mobil uyumlu, hizli ve samimi sohbet deneyimi sunar.",
    heroBadge: "CANLI SOHBET",
    heroTitle: "Canli Sohbet ile",
    heroAccent: "Aninda Karsilik Bulun",
    heroText:
      "Canli sohbet, beklemeden cevap almak ve o anda aktif olan kullanicilarla ayni sohbet akisini paylasmak isteyenlerin arama niyetidir.",
    stats: ["Anlik cevap", "Aktif kullanicilar", "Hizli giris", "Kesintisiz akis"],
    sections: [
      {
        title: "Canli Sohbet Neden Farkli Bir Deneyimdir?",
        paragraphs: [
          "Canli sohbet arayan kisi, statik bir bilgi sayfasindan daha fazlasini bekler. Kullanici o anda aktif olan insanlarla yazismak, cevap almak ve sohbetin akisini hissetmek ister. Bu nedenle canli sohbet sayfasi, aktiflik ve hiz duygusunu acik bir sekilde vermelidir.",
          "Zurna.TR canli sohbet sayfasi, online sohbet sayfasina yakin dursa da daha cok anlik etkilesim beklentisine odaklanir. Online sohbet cevrim ici olma durumunu anlatirken, canli sohbet kullanicinin karsilikli ve akici muhabbet aradigini gosterir. Bu ayrim, sayfanin SEO niyetini benzersiz hale getirir.",
          "Canli sohbet deneyiminde kullanici odalara hizli ulasmak, kimlerin aktif oldugunu hissetmek ve konuya kolayca dahil olmak ister. Sayfadaki kartlar, SSS ve ilgili linkler bu beklentiyi destekleyecek sekilde kurgulanir."
        ],
      },
      {
        title: "Canli Sohbette Dogru Akis",
        paragraphs: [
          "Dogru canli sohbet akisi, kullaniciyi once bilgilendirir ve sonra net bir aksiyona yonlendirir. Uzun ama daginik metinler yerine, niyeti anlatan bolumler daha faydalidir. Zurna.TR ortak sayfa yapisi, H1 ve H2 hiyerarsisini koruyarak bu akisi duzenli hale getirir.",
          "Mobil kullanicilar canli sohbet sayfalarinda hiz bekler. Bu nedenle CTA alani gorunur, ilgili sayfalar net etiketli ve metinler rahat okunur olmalidir. Canli sohbet sayfasi, mobil chat ve sesli sohbet gibi yakin niyetlere baglanti vererek kullanicinin farkli iletisim bicimlerini kesfetmesine yardim eder.",
          "Canli sohbetin en guclu yani, bekleme hissini azaltmasidir. Kullanici bir mesaj attiginda ortamin yasadigini hissetmek ister. Sayfa icerigi bu beklentiyi guvenli, samimi ve erisilebilir bir deneyim olarak anlatir."
        ],
      },
    ],
    cards: [
      { title: "Anlik Etkilesim", text: "Canli sohbet, kullanicinin beklemeden cevap ve hareketli bir ortam aradigini gosterir." },
      { title: "Aktif Akis", text: "Oda yapisi ve internal linkler kullaniciyi daha aktif sohbet alanlarina tasir." },
      { title: "Kolay Katilim", text: "Sade CTA ve mobil uyumlu layout, canli muhabbete gecisi kolaylastirir." },
    ],
    checklistTitle: "Canli Sohbetin Sagladiklari",
    checklist: ["Anlik muhabbet beklentisi", "Aktif kullanici hissi", "Online sohbet sayfasiyla dogal bag", "Sesli sohbet niyetine gecis", "Mobilde hizli okuma ve aksiyon"],
    faq: [
      { question: "Canli sohbet ne demek?", answer: "Canli sohbet, o anda aktif olan kullanicilarla anlik ve akici bir yazisma deneyimi arama niyetini ifade eder." },
      { question: "Canli sohbet ile online sohbet ayni mi?", answer: "Yakin kavramlardir; canli sohbet anlik karsilik ve hareketli akis beklentisini daha cok vurgular." },
      { question: "Canli sohbet mobilde rahat kullanilir mi?", answer: "Evet. Zurna.TR sayfa yapisi mobilde hizli okuma ve kolay yonlendirme icin hazirlanmistir." },
    ],
    related: [
      { href: "/online-sohbet", label: "Online Sohbet" },
      { href: "/sesli-sohbet", label: "Sesli Sohbet" },
      { href: "/mobil-chat", label: "Mobil Chat" },
      { href: "/sohbet-odalari", label: "Sohbet Odalari" },
    ],
    ctaTitle: "Canli Sohbet Akisina Katilin",
    ctaText: "Aktif kullanicilarla anlik muhabbet etmek ve sohbet ortamini hissetmek icin Zurna.TR girisini kullanabilirsiniz.",
  },
  "arkadaslik-sohbet": {
    slug: "arkadaslik-sohbet",
    keyword: "arkadaslik sohbet",
    title: "Arkadaslik Sohbet",
    seoTitle: "Arkadaslik Sohbet | Yeni Dostluklar ve Sohbet Odalari - Zurna.TR",
    description:
      "Arkadaslik sohbet ile yeni insanlarla tanisin. Zurna.TR samimi, mobil uyumlu ve guven veren sohbet odalari deneyimi sunar.",
    heroBadge: "ARKADASLIK SOHBET",
    heroTitle: "Arkadaslik Sohbet ile",
    heroAccent: "Yeni Insanlar Taniyin",
    heroText:
      "Arkadaslik sohbet aramasi, sadece yazismak degil; ortak ilgi alanlariyla yeni dostluklar kurmak isteyen kullanicilarin niyetini yansitir.",
    stats: ["Yeni tanismalar", "Samimi ortam", "Ortak konular", "Mobil erisim"],
    sections: [
      {
        title: "Arkadaslik Sohbet Arayan Kullanici Ne Ister?",
        paragraphs: [
          "Arkadaslik sohbet arayan kullanici, yalnizca genel bir chat odasina girmek istemeyebilir. Daha cok yeni insanlarla tanismak, ortak konular bulmak ve zamanla guven veren bir muhabbet kurmak ister. Bu nedenle arkadaslik sohbet sayfasi, tanisma niyetini genel sohbetten ayiran ozgun bir icerik yapisina sahip olmalidir.",
          "Zurna.TR arkadaslik sohbet sayfasi, kullanicinin sosyal ihtiyacini merkeze alir. Gunluk hayattan konular, sehirler, muzik, hobiler veya ortak ilgi alanlari yeni sohbetlerin baslangic noktasi olabilir. Sayfa, bu ihtimali gercekci ve samimi bir dille anlatir.",
          "Arkadaslik sohbet deneyimi, aceleci degil dogal olmalidir. Yeni kullanici once ortami tanir, sonra kendi temposunda muhabbete dahil olur. Bu nedenle sayfa kayitsiz sohbet, anonim sohbet ve Turkce sohbet gibi destekleyici sayfalara dogal linkler verir."
        ],
      },
      {
        title: "Yeni Dostluklar Icin Sohbet Ortami",
        paragraphs: [
          "Yeni dostluklar kurmak icin sohbet ortaminda saygi, rahatlik ve ortak konu bulma kolayligi gerekir. Kullanici kendini baski altinda hissetmeden mesaj yazabilmeli, karsilik alabilmeli ve isterse farkli odalara gecebilmelidir. Zurna.TR sayfa yapisi bu ihtiyaci temiz bir hiyerarsiyle sunar.",
          "Arkadaslik sohbet sayfasi, arkadaslik chat ifadesinden farkli olarak Turkce sohbet arama diline daha yakindir. Kullanici burada daha samimi, daha yerel ve daha uzun soluklu muhabbet beklentisi tasir. Bu ayrim, sayfanin arama niyetini guclendirir.",
          "Mobil uyum da arkadaslik sohbet icin onemlidir. Bir kullanici gun icinde kisa aralarda bile yeni insanlarla tanismak isteyebilir. Net CTA, okunabilir kartlar ve ilgili sayfalar bu yolculugu kolaylastirir."
        ],
      },
    ],
    cards: [
      { title: "Tanisma Odakli", text: "Arkadaslik sohbet, yeni insanlarla daha anlamli baslangiclar kurma niyetine odaklanir." },
      { title: "Samimi Muhabbet", text: "Gunluk konular ve ortak ilgi alanlari sohbeti daha dogal hale getirir." },
      { title: "Guven Veren Akis", text: "Kullanici once ortami taniyabilir, sonra kendi temposunda sohbete katilabilir." },
    ],
    checklistTitle: "Arkadaslik Sohbet Icin One Cikanlar",
    checklist: ["Yeni insanlarla tanisma niyeti", "Samimi ve yerel muhabbet dili", "Anonim ve kayitsiz sayfalara gecis", "Turkce sohbetle dogal bag", "Mobilde rahat kullanim"],
    faq: [
      { question: "Arkadaslik sohbet ne anlama gelir?", answer: "Arkadaslik sohbet, yeni insanlarla tanismak ve ortak konular uzerinden dostluk kurmak isteyen kullanicilarin arama niyetidir." },
      { question: "Arkadaslik sohbet ucretsiz mi?", answer: "Ucretsiz sohbet sayfasi bu niyeti ayrintili anlatir; arkadaslik sohbet sayfasi tanisma beklentisine odaklanir." },
      { question: "Arkadaslik sohbet anonim baslayabilir mi?", answer: "Anonim sohbet sayfasi rumuzla rahat baslangic konusunu daha detayli ele alir." },
    ],
    related: [
      { href: "/anonim-sohbet", label: "Anonim Sohbet" },
      { href: "/kayitsiz-sohbet", label: "Kayitsiz Sohbet" },
      { href: "/turkce-sohbet", label: "Turkce Sohbet" },
      { href: "/muhabbet", label: "Muhabbet" },
    ],
    ctaTitle: "Arkadaslik Sohbete Baslayin",
    ctaText: "Yeni insanlarla tanismak ve samimi muhabbetler kurmak icin Zurna.TR sohbet girisini kullanabilirsiniz.",
  },
  muhabbet: {
    slug: "muhabbet",
    keyword: "muhabbet",
    title: "Muhabbet",
    seoTitle: "Muhabbet | Samimi Sohbet ve Keyifli Konusmalar - Zurna.TR",
    description:
      "Muhabbet arayanlar icin Zurna.TR, samimi sohbet odalari, Turkce iletisim ve mobil uyumlu sohbet deneyimi sunar.",
    heroBadge: "MUHABBET",
    heroTitle: "Muhabbet ile",
    heroAccent: "Sohbetin Tadina Varin",
    heroText:
      "Muhabbet aramasi, resmi olmayan, sicak, rahat ve gunluk konularla akan bir sohbet deneyimi arayan kullanicilarin niyetini tasir.",
    stats: ["Samimi dil", "Gunluk konular", "Rahat ortam", "Kolay katilim"],
    sections: [
      {
        title: "Muhabbet Niyeti Sohbetten Nasil Ayrilir?",
        paragraphs: [
          "Muhabbet kelimesi, sohbetten daha sicak ve daha gunluk bir anlam tasir. Kullanici muhabbet aradiginda genellikle ciddi bir bilgi sayfasindan cok, rahatca konusabilecegi, selam verip konu acabilecegi ve kendini kasmadan yazabilecegi bir ortam ister. Zurna.TR muhabbet sayfasi bu samimi arama niyetine odaklanir.",
          "Muhabbet bazen bir radyo yayini etrafinda, bazen sehirlerden gelen kullanicilar arasinda, bazen de genel sohbet odalarinda baslar. Onemli olan konunun buyuk veya resmi olmasi degil, akisin dogal olmasidir. Sayfa icerigi bu nedenle daha rahat bir tonla, ama SEO hiyerarsisini bozmadan hazirlanmistir.",
          "Zurna.TR icinde muhabbet sayfasi, arkadaslik sohbet, Turkce sohbet ve canli sohbet sayfalariyla dogal bir ag kurar. Kullanici daha tanisma odakliysa arkadaslik sayfasina, daha aktif bir akis ariyorsa canli sohbet sayfasina gecebilir."
        ],
      },
      {
        title: "Keyifli Muhabbet Icin Dogru Ortam",
        paragraphs: [
          "Keyifli muhabbet icin ortam kolay baslatilabilir olmalidir. Kullanici uzun aciklamalar okumadan, neyle karsilasacagini anlayabilmeli ve isterse hemen sohbet girisine ilerleyebilmelidir. Zurna.TR ortak componenti, bu ihtiyaci hero, kartlar, checklist ve SSS alanlariyla duzenler.",
          "Muhabbet arayan kullanicilar genellikle ayni dili konusan, ortak kulturden gelen veya benzer gunluk konulara ilgi duyan kisilerle yazismak ister. Bu nedenle Turkce sohbet ve sohbet odalari sayfalariyla kurulan internal linkler kullanici yolculugunu guclendirir.",
          "Mobil cihazlardan muhabbet etmek de gunumuzde yaygindir. Kullanici kisa bir mola sirasinda sayfayi acabilir ve ortamla bag kurabilir. Bu sayfa, mobilde okunabilir bolumleri ve sade CTA yapisiyla bu davranisi destekler."
        ],
      },
    ],
    cards: [
      { title: "Rahat Baslangic", text: "Muhabbet sayfasi resmi olmayan, kolay baslayan sohbet niyetini merkeze alir." },
      { title: "Gunluk Konular", text: "Gundem, muzik, sehirler ve yasam uzerinden dogal sohbetler kurulabilir." },
      { title: "Samimi Bag", text: "Arkadaslik sohbet ve Turkce sohbet sayfalariyla daha sicak bir internal link agi olusur." },
    ],
    checklistTitle: "Muhabbet Sayfasinin Odaklari",
    checklist: ["Rahat ve samimi arama niyeti", "Gunluk konulara uygun anlatim", "Arkadaslik sohbetle baglanti", "Turkce sohbet ve canli sohbet gecisi", "Mobil kullanicilar icin sade akis"],
    faq: [
      { question: "Muhabbet ile sohbet ayni mi?", answer: "Yakin anlamlidir; muhabbet daha samimi, gunluk ve rahat konusma hissini vurgular." },
      { question: "Muhabbet sayfasi kimler icin uygun?", answer: "Resmi olmayan, keyifli ve sicak bir sohbet ortami arayan kullanicilar icin uygundur." },
      { question: "Muhabbet mobilde yapilabilir mi?", answer: "Evet. Zurna.TR sayfa yapisi mobil kullanicilarin rahat okuma ve sohbet girisine ulasma ihtiyacini destekler." },
    ],
    related: [
      { href: "/arkadaslik-sohbet", label: "Arkadaslik Sohbet" },
      { href: "/turkce-sohbet", label: "Turkce Sohbet" },
      { href: "/canli-sohbet", label: "Canli Sohbet" },
      { href: "/sesli-sohbet", label: "Sesli Sohbet" },
    ],
    ctaTitle: "Muhabbete Katilin",
    ctaText: "Samimi ve rahat bir sohbet ortamini kesfetmek icin Zurna.TR sohbet girisinden baslayabilirsiniz.",
  },
  "irc-sunucusu": {
    slug: "irc-sunucusu",
    keyword: "irc sunucusu",
    title: "IRC Sunucusu",
    seoTitle: "IRC Sunucusu | Sohbet Altyapisi ve Kanal Deneyimi - Zurna.TR",
    description:
      "IRC sunucusu arayanlar icin Zurna.TR, kanal mantigi, chat altyapisi ve modern sohbet deneyimini sade sekilde aciklar.",
    heroBadge: "IRC SUNUCUSU",
    heroTitle: "IRC Sunucusu ile",
    heroAccent: "Sohbet Altyapisini Taniyin",
    heroText:
      "IRC sunucusu aramasi, sohbetin teknik tarafini, kanal yapisini ve baglanti mantigini merak eden kullanicilarin daha bilgi odakli niyetini karsilar.",
    stats: ["Altyapi bilgisi", "Kanal yapisi", "IRC kulturu", "mIRC baglantisi"],
    sections: [
      {
        title: "IRC Sunucusu Ne Ise Yarar?",
        paragraphs: [
          "IRC sunucusu, kullanicilarin kanallar uzerinden birbirleriyle gercek zamanli iletisim kurmasini saglayan altyapiyi ifade eder. Bu sayfayi arayan kullanici, genellikle sadece sohbet etmek degil, sohbet sisteminin nasil calistigini de anlamak ister. Zurna.TR IRC sunucusu sayfasi bu teknik niyeti sade ve anlasilir bir dille karsilar.",
          "IRC kulturunde sunucu, kanallar ve kullanicilar arasindaki iletisimin merkezidir. Kullanici bir sunucuya baglanir, ilgili kanala girer ve mesaj akisini takip eder. Bu yapi, klasik chat odalarindan daha organize bir deneyim sunabilir. Sayfa, bu mantigi teknik detaylara bogmadan aciklar.",
          "Zurna.TR icinde IRC sunucusu sayfasi, IRC chat, IRC sohbet ve mIRC indir sayfalari arasinda bilgi odakli bir kopru gorevi gorur. Boylece teknik merakla gelen ziyaretci, ister webden sohbet girisine ister masaustu istemci tarafina dogal sekilde ilerleyebilir."
        ],
      },
      {
        title: "IRC Sunucusu Arayanlar Icin Yol Haritasi",
        paragraphs: [
          "IRC sunucusu arayan kisiler bazen baglanti bilgisi, bazen kanal listesi, bazen de IRC kulturu hakkinda temel bilgi arar. Bu nedenle sayfa, once kavrami tanitir, sonra kanal yapisini ve ilgili sayfalari gosterir. Kullanici arama niyetini tek sayfada daha iyi konumlandirabilir.",
          "Modern web deneyimi, IRC sunucusu kavramini daha erisilebilir hale getirir. Her kullanicinin teknik komutlari bilmesi gerekmez; onemli olan hangi deneyime katildigini anlamasidir. Zurna.TR sayfasi, teknik meraki olan kullaniciyi korkutmadan bilgilendirir.",
          "Bu sayfa, ozellikle IRC kanallari ve IRC chat sayfalariyla guclu internal link kurar. Kanal detayini merak edenler IRC kanallari sayfasina, chat deneyimini merak edenler IRC chat sayfasina gecebilir."
        ],
      },
    ],
    cards: [
      { title: "Teknik Merak", text: "IRC sunucusu sayfasi sohbet altyapisini merak eden kullanicilar icin bilgi verir." },
      { title: "Kanal Baglantisi", text: "Sunucu ve kanal mantigi arasindaki iliski sade sekilde anlatilir." },
      { title: "Dogal Gecis", text: "IRC chat, IRC kanallari ve mIRC indir sayfalarina anlamli baglantilar kurulur." },
    ],
    checklistTitle: "IRC Sunucusu Sayfasinda One Cikanlar",
    checklist: ["Altyapi odakli arama niyeti", "Kanal mantigina acik gecis", "IRC chat ile teknik bag", "mIRC indirme niyetine yonlendirme", "Yeni kullanici icin sade anlatim"],
    faq: [
      { question: "IRC sunucusu nedir?", answer: "IRC sunucusu, kullanicilarin kanallar uzerinden gercek zamanli yazismasini saglayan sohbet altyapisidir." },
      { question: "IRC sunucusu ile IRC kanali farkli mi?", answer: "Sunucu altyapiyi, kanal ise sunucu uzerindeki belirli sohbet alanini ifade eder." },
      { question: "IRC sunucusuna nasil baglanilir?", answer: "Web deneyimiyle sohbet girisi kullanilabilir; masaustu tercih edenler mIRC indir sayfasini inceleyebilir." },
    ],
    related: [
      { href: "/irc-kanallari", label: "IRC Kanallari" },
      { href: "/irc-chat", label: "IRC Chat" },
      { href: "/irc-sohbet", label: "IRC Sohbet" },
      { href: "/mirc-indir", label: "mIRC Indir" },
    ],
    ctaTitle: "IRC Altyapisini Kesfedin",
    ctaText: "IRC sunucusu ve kanal mantigini tanidiktan sonra Zurna.TR sohbet deneyimine kolayca gecis yapabilirsiniz.",
  },
  "irc-kanallari": {
    slug: "irc-kanallari",
    keyword: "irc kanallari",
    title: "IRC Kanallari",
    seoTitle: "IRC Kanallari | Sohbet Kanallari ve IRC Chat - Zurna.TR",
    description:
      "IRC kanallari ile farkli sohbet alanlarini taniyin. Zurna.TR kanal mantigini, IRC chat deneyimini ve mobil erisimi sade sekilde anlatir.",
    heroBadge: "IRC KANALLARI",
    heroTitle: "IRC Kanallari ile",
    heroAccent: "Dogru Odayi Bulun",
    heroText:
      "IRC kanallari aramasi, kullanicinin belirli konu veya topluluk alanlarina gore sohbet etmek istedigini gosterir.",
    stats: ["Konu kanallari", "Topluluk yapisi", "IRC chat baglantisi", "Kolay yonlendirme"],
    sections: [
      {
        title: "IRC Kanallari Neden Onemlidir?",
        paragraphs: [
          "IRC kanallari, sunucu uzerindeki farkli sohbet alanlarini temsil eder. Kullanici genel muhabbet, arkadaslik, radyo, oyun veya farkli ilgi alanlari icin ayri kanallara katilabilir. Bu arama niyeti, chat odalari aramasina benzer ama IRC kulturu ve kanal mantigi nedeniyle daha teknik bir anlam tasir.",
          "Zurna.TR IRC kanallari sayfasi, kullanicinin hangi kanala neden katilabilecegini anlamasina yardim eder. Kanal yapisi, sohbeti daha duzenli ve konu odakli hale getirir. Kullanici kendi ilgisine yakin bir alan buldugunda muhabbete daha kolay dahil olur.",
          "IRC kanallari sayfasi, IRC sunucusu sayfasindan farkli olarak altyapiyi degil, sunucu uzerindeki sohbet alanlarini merkeze alir. Bu ayrim hem kullanici deneyimini hem de SEO hedeflemesini daha net hale getirir."
        ],
      },
      {
        title: "Kanal Secimi ve Sohbet Deneyimi",
        paragraphs: [
          "Dogru kanali secmek, sohbet deneyiminin kalitesini belirler. Genel bir kanalda herkesle yazismak mumkunken, daha hedefli kanallarda ortak ilgi alanlari uzerinden daha verimli muhabbet kurulabilir. Zurna.TR sayfasi bu secimi kolaylastiracak sekilde ilgili sayfalara baglantilar sunar.",
          "IRC kanallari arayan kullanici, bazen teknik baglanti bilgisi, bazen de hangi odanin aktif oldugunu anlamak ister. Bu sayfa, kullaniciyi IRC sunucusu, IRC chat ve sohbet odalari sayfalarina yonlendirerek ihtiyaca gore ilerleme imkani verir.",
          "Mobil uyum, IRC kanallari icin de onemlidir. Kullanici telefonundan kanal mantigini okuyabilir, ilgili sayfalari inceleyebilir ve sohbet girisine gecebilir. Ortak SEO componenti sayesinde bu akis mevcut site deneyimiyle tutarlidir."
        ],
      },
    ],
    cards: [
      { title: "Konuya Gore Kanal", text: "Farkli kanallar kullanicinin ilgi alanina gore sohbet etmesini kolaylastirir." },
      { title: "IRC Kulturu", text: "Kanal mantigi klasik IRC deneyiminin en ayirt edici parcalarindan biridir." },
      { title: "Yol Gosterici Linkler", text: "IRC sunucusu, IRC chat ve sohbet odalari sayfalariyla dogal gecis kurulur." },
    ],
    checklistTitle: "IRC Kanallari Icin One Cikanlar",
    checklist: ["Konu odakli sohbet alanlari", "IRC sunucusu ile guclu bag", "Chat odalarindan ayrisan teknik niyet", "Mobilde okunabilir rehber", "Ilgili IRC sayfalarina dogal link"],
    faq: [
      { question: "IRC kanali nedir?", answer: "IRC kanali, sunucu uzerinde belirli konu veya topluluk icin ayrilmis sohbet alanidir." },
      { question: "IRC kanallari ile chat odalari ayni mi?", answer: "Benzer islev tasirlar; IRC kanallari klasik IRC sunucu yapisindaki sohbet alanlarini ifade eder." },
      { question: "Hangi IRC kanalina girmeliyim?", answer: "Genel muhabbet icin genel kanallari, teknik merak icin IRC chat ve IRC sunucusu sayfalarini inceleyebilirsiniz." },
    ],
    related: [
      { href: "/irc-sunucusu", label: "IRC Sunucusu" },
      { href: "/irc-chat", label: "IRC Chat" },
      { href: "/chat-odalari", label: "Chat Odalari" },
      { href: "/sohbet-odalari", label: "Sohbet Odalari" },
    ],
    ctaTitle: "IRC Kanallarini Taniyin",
    ctaText: "Konuya uygun sohbet alanlarini kesfetmek ve IRC chat deneyimine gecmek icin Zurna.TR girisini kullanabilirsiniz.",
  },
  "sohbet-girisi": {
    slug: "sohbet-girisi",
    keyword: "sohbet girisi",
    title: "Sohbet Girisi",
    seoTitle: "Sohbet Girisi | Hemen Sohbet Odalarina Baglan - Zurna.TR",
    description:
      "Sohbet girisi arayanlar icin Zurna.TR, rumuzla hizli baslangic, mobil uyum ve aktif sohbet odalarina kolay yonlendirme sunar.",
    heroBadge: "SOHBET GIRISI",
    heroTitle: "Sohbet Girisi ile",
    heroAccent: "Beklemeden Baslayin",
    heroText:
      "Sohbet girisi sayfasi bilgi okumaktan cok hemen aksiyon almak isteyen kullanicilara odaklanir; amac, ziyaretcinin sohbet ortamina en kisa yoldan ulasmasidir.",
    stats: ["Hizli baslangic", "Rumuzla ilerleme", "Mobil uyum", "Net yonlendirme"],
    sections: [
      {
        title: "Sohbet Girisi Arayan Kullanici Ne Ister?",
        paragraphs: [
          "Sohbet girisi sorgusu, kullanicinin karar asamasini buyuk olcude tamamladigini gosterir. Ziyaretci artik sohbetin ne oldugunu ogrenmekten ziyade, girecegi alanin kolay, anlasilir ve guven veren bir giris akisi sunmasini bekler. Bu sayfa genel sohbet iceriginden farkli olarak dogrudan baslama niyetini karsilar.",
        ],
      },
      {
        title: "Giris Deneyimini Kolaylastiran Ayrintilar",
        paragraphs: [
          "Kisa aciklamalar, belirgin CTA ve ilgili sayfalara verilen linkler, sohbet girisi sayfasinin degerini artirir. Kullanici ister ucretsiz sohbet, ister kayitsiz sohbet, ister sohbet odalari uzerinden ilerlemek istesin; bu sayfa onun icin merkezi bir baslangic noktasi olur.",
        ],
      },
    ],
    cards: [
      { title: "Dogru Baslangic", text: "Bilgi sayfalarindan farkli olarak ziyaretciyi giris aksiyonuna hazirlar." },
      { title: "Kisa Yol", text: "Sohbet odalarina ulasmak isteyen kullaniciya daha az karar yuku verir." },
      { title: "Giris Odakli Linkler", text: "Kayitsiz, ucretsiz ve odalara giris sayfalariyla dogal bag kurar." },
    ],
    checklistTitle: "Sohbet Girisi Icin Gerekenler",
    checklist: ["Net CTA", "Rumuzla baslama vurgusu", "Mobilde hizli okuma", "Oda girisine baglanti", "Ucretsiz sohbet sayfasina gecis"],
    faq: [
      { question: "Sohbet girisi ne icin kullanilir?", answer: "Sohbet ortamini tanimaktan cok dogrudan sohbete baslamak isteyen kullanicilar icin kullanilir." },
      { question: "Sohbet girisi mobilde uygun mu?", answer: "Evet. Sayfa kisa karar akisi ve mobil uyumlu yonlendirme mantigi ile hazirlanmistir." },
      { question: "Sohbet girisi ile sohbet sayfasi farkli mi?", answer: "Sohbet sayfasi daha genis bilgi verir; sohbet girisi sayfasi baslama niyetini hedefler." },
    ],
    related: [
      { href: "/sohbet-odalarina-giris", label: "Sohbet Odalarina Giris" },
      { href: "/ucretsiz-sohbet", label: "Ucretsiz Sohbet" },
      { href: "/kayitsiz-sohbet", label: "Kayitsiz Sohbet" },
      { href: "/sohbet", label: "Sohbet" },
    ],
    ctaTitle: "Sohbet Girisini Kullanin",
    ctaText: "Rumuzunuzu belirleyip Zurna.TR sohbet ortamini hizli ve sade bir akisla kesfetmeye baslayabilirsiniz.",
  },
  "chat-girisi": {
    slug: "chat-girisi",
    keyword: "chat girisi",
    title: "Chat Girisi",
    seoTitle: "Chat Girisi | Hemen Chat Odalarina Katil - Zurna.TR",
    description:
      "Chat girisi ile Zurna.TR chat odalarina hizli ulasin. Mobil uyumlu, sade ve anlik yazisma odakli giris deneyimini kesfedin.",
    heroBadge: "CHAT GIRISI",
    heroTitle: "Chat Girisi ile",
    heroAccent: "Yazismaya Gecin",
    heroText:
      "Chat girisi, kullanicinin chat odalarina ulasmak ve anlik yazismaya baslamak istedigi en net aksiyon sorgularindan biridir.",
    stats: ["Anlik yazisma", "Chat odakli akis", "Kolay erisim", "Mobil uyum"],
    sections: [
      {
        title: "Chat Girisi Hangi Niyeti Karsilar?",
        paragraphs: [
          "Chat girisi arayan ziyaretci genellikle genel bilgi istemez; chat ekranina giden en kisa yolu arar. Bu nedenle sayfa, chat nedir anlatimini geri planda tutar ve kullaniciyi chat odalari, mobil chat ve kayitsiz chat gibi daha eylem odakli seceneklere yonlendirir.",
        ],
      },
      {
        title: "Chat Ekranina Gecmeden Once",
        paragraphs: [
          "Iyi bir chat girisi sayfasi kullanicinin beklentisini netlestirir: rumuz, hizli katilim, mobil uyum ve aktif odalar. Zurna.TR icinde bu sayfa, chat ekosisteminin giris kapisi olarak konumlanir ve gereksiz icerik kalabaligindan uzak kalir.",
        ],
      },
    ],
    cards: [
      { title: "Chat Odakli", text: "Sohbet degil, dogrudan chat yazisma niyetini karsilar." },
      { title: "Hizli Yon", text: "Kullanici hangi sayfadan devam edecegini kolayca secer." },
      { title: "Mobil Esneklik", text: "Telefonla gelen ziyaretcinin kisa karar surecini destekler." },
    ],
    checklistTitle: "Chat Girisi Sayfasinin Rolü",
    checklist: ["Chat ekranina yonlendirme", "Mobil chat baglantisi", "Kayitsiz chat gecisi", "Chat odalari iliskisi", "Anlik yazisma vurgusu"],
    faq: [
      { question: "Chat girisi ne demektir?", answer: "Chat girisi, kullanicinin chat odalarina hizli sekilde ulasmak istemesini ifade eder." },
      { question: "Chat girisi ucretsiz mi?", answer: "Ucretsiz chat sayfasi bu niyeti ayrintili anlatir; chat girisi sayfasi baslama aksiyonuna odaklanir." },
      { question: "Chat girisi telefondan yapilir mi?", answer: "Mobil chat sayfasi telefon deneyimini detaylandirir; bu sayfa mobil kullaniciyi de destekler." },
    ],
    related: [
      { href: "/ucretsiz-chat", label: "Ucretsiz Chat" },
      { href: "/kayitsiz-chat", label: "Kayitsiz Chat" },
      { href: "/mobil-chat", label: "Mobil Chat" },
      { href: "/chat-odalari", label: "Chat Odalari" },
    ],
    ctaTitle: "Chat Girisine Devam Edin",
    ctaText: "Zurna.TR chat deneyimine hizli gecis yapmak icin giris alanini kullanabilirsiniz.",
  },
  "sohbet-odalarina-giris": {
    slug: "sohbet-odalarina-giris",
    keyword: "sohbet odalarina giris",
    title: "Sohbet Odalarina Giris",
    seoTitle: "Sohbet Odalarina Giris | Oda Sec ve Sohbete Basla - Zurna.TR",
    description:
      "Sohbet odalarina giris sayfasi, Zurna.TR uzerinde oda secmek, rumuzla baslamak ve aktif sohbet alanlarina ulasmak isteyenler icindir.",
    heroBadge: "ODALARA GIRIS",
    heroTitle: "Sohbet Odalarina",
    heroAccent: "Kolayca Girin",
    heroText:
      "Sohbet odalarina giris aramasi, kullanicinin belirli bir odaya veya genel sohbet alanina katilmak istedigini gosterir.",
    stats: ["Oda secimi", "Aktif alanlar", "Kolay katilim", "Net rota"],
    sections: [
      {
        title: "Odaya Girme Niyeti Neden Ayridir?",
        paragraphs: [
          "Sohbet odalari sayfasi odalarin ne sundugunu anlatirken, sohbet odalarina giris sayfasi kullanicinin o alana nasil ve neden katilacagini hedefler. Bu fark, arama niyetini netlestirir ve sayfayi daha donusum odakli hale getirir.",
        ],
      },
      {
        title: "Dogru Oda Secimi",
        paragraphs: [
          "Genel muhabbet, arkadaslik, mobil sohbet veya chat odalari farkli beklentiler tasir. Bu sayfa, kullanicinin hangi odaya yaklasmasi gerektigini aciklar ve ilgili SEO sayfalarina dogal gecisler sunar.",
        ],
      },
    ],
    cards: [
      { title: "Oda Odakli", text: "Kullaniciya genel site degil, katilacagi alan uzerinden rehberlik eder." },
      { title: "Katilim Niyeti", text: "Bilgi aramadan aksiyona gecen ziyaretciye daha net yanit verir." },
      { title: "Kategori Baglari", text: "Genel sohbet, chat odalari ve mobil sohbet sayfalarina kopru kurar." },
    ],
    checklistTitle: "Odalara Giris Akisi",
    checklist: ["Oda secimi anlatimi", "Genel sohbet linki", "Chat odalari linki", "Mobil uyum vurgusu", "Giris CTA alani"],
    faq: [
      { question: "Sohbet odalarina giris nasil dusunulmeli?", answer: "Kullanici once uygun oda tipini secer, sonra giris alanindan sohbet akisini baslatir." },
      { question: "Hangi sohbet odasina girmeliyim?", answer: "Genel muhabbet icin genel sohbet, yazisma odakli deneyim icin chat odalari incelenebilir." },
      { question: "Odalara giris mobilde kolay mi?", answer: "Evet. Sayfa mobil kullanicinin hizli karar vermesine yardim edecek sekilde kurgulanmistir." },
    ],
    related: [
      { href: "/sohbet-odalari", label: "Sohbet Odalari" },
      { href: "/chat-odalari", label: "Chat Odalari" },
      { href: "/genel-sohbet", label: "Genel Sohbet" },
      { href: "/mobil-sohbet", label: "Mobil Sohbet" },
    ],
    ctaTitle: "Odalara Gecis Yapin",
    ctaText: "Size uygun sohbet alanini secip Zurna.TR uzerinden muhabbete baslayabilirsiniz.",
  },
  "canli-chat": {
    slug: "canli-chat",
    keyword: "canli chat",
    title: "Canli Chat",
    seoTitle: "Canli Chat | Anlik Yazisma ve Aktif Chat Odalari - Zurna.TR",
    description:
      "Canli chat ile aktif kullanicilarla anlik yazisin. Zurna.TR mobil uyumlu chat odalari ve hizli giris deneyimi sunar.",
    heroBadge: "CANLI CHAT",
    heroTitle: "Canli Chat ile",
    heroAccent: "Anlik Yazisin",
    heroText:
      "Canli chat sayfasi, chat kelimesinin hizli yazisma dilini canli ve aktif kullanici beklentisiyle birlestirir.",
    stats: ["Anlik chat", "Aktif odalar", "Hizli cevap", "Mobil destek"],
    sections: [
      {
        title: "Canli Chat Hangi Beklentiyi Tasir?",
        paragraphs: [
          "Canli chat arayan kisi, chat odasinda bekleyen veya yavas ilerleyen bir ortam degil, o anda hareket eden bir yazisma akisi ister. Bu sayfa, canli sohbetten farkli olarak chat dilini ve kisa mesaj temposunu merkeze alir.",
        ],
      },
      {
        title: "Anlik Yazisma Deneyimi",
        paragraphs: [
          "Canli chat deneyiminde kullanici mesaj atmak, cevap almak ve konunun icinde kalmak ister. Internal linkler online sohbet, chat girisi ve mobil chat sayfalarina yonelerek bu canli akisi farkli cihaz ve niyetlerle destekler.",
        ],
      },
    ],
    cards: [
      { title: "Chat Temposu", text: "Kisa mesajlar ve hizli cevap beklentisini hedefler." },
      { title: "Aktiflik Algisi", text: "Kullaniciya yasanan bir chat ortami fikri verir." },
      { title: "Cihazdan Bagimsiz", text: "Mobil ya da masaustu kullaniciyi ayni giris niyetinde toplar." },
    ],
    checklistTitle: "Canli Chat Icin Odaklar",
    checklist: ["Anlik yazisma", "Chat girisi baglantisi", "Mobil chat gecisi", "Online sohbet iliskisi", "Aktif oda beklentisi"],
    faq: [
      { question: "Canli chat neyi ifade eder?", answer: "Canli chat, aktif kullanicilarla anlik yazisma ve hizli cevap beklentisini ifade eder." },
      { question: "Canli chat ile canli sohbet farkli mi?", answer: "Canli chat daha cok kisa yazisma temposuna, canli sohbet ise daha genis muhabbet akisine odaklanir." },
      { question: "Canli chat icin kayit gerekir mi?", answer: "Kayitsiz chat sayfasi bu beklentiyi ayrintili ele alir ve ilgili giris niyetine yonlendirir." },
    ],
    related: [
      { href: "/canli-sohbet", label: "Canli Sohbet" },
      { href: "/chat-girisi", label: "Chat Girisi" },
      { href: "/mobil-chat", label: "Mobil Chat" },
      { href: "/online-sohbet", label: "Online Sohbet" },
    ],
    ctaTitle: "Canli Chat Akisina Girin",
    ctaText: "Aktif chat odalarini kesfetmek ve anlik yazismaya baslamak icin Zurna.TR girisini kullanabilirsiniz.",
  },
  "ucretsiz-chat": {
    slug: "ucretsiz-chat",
    keyword: "ucretsiz chat",
    title: "Ucretsiz Chat",
    seoTitle: "Ucretsiz Chat | Bedelsiz Chat Odalari ve Mobil Yazisma - Zurna.TR",
    description:
      "Ucretsiz chat arayanlar icin Zurna.TR, bedelsiz chat odalari, mobil uyum ve kolay giris odakli bir deneyim sunar.",
    heroBadge: "UCRETSIZ CHAT",
    heroTitle: "Ucretsiz Chat ile",
    heroAccent: "Bedelsiz Yazisin",
    heroText:
      "Ucretsiz chat sayfasi, ucret bariyeri olmadan yazismaya baslamak isteyen chat kullanicilarini hedefler.",
    stats: ["Ucret yok", "Chat odalari", "Mobil erisim", "Kolay baslangic"],
    sections: [
      {
        title: "Ucretsiz Chat Arayanlarin Onceligi",
        paragraphs: [
          "Ucretsiz chat sorgusu, chat deneyimine bedel odemeden ulasma beklentisini tasir. Bu sayfa ucretsiz sohbetten ayrilarak yazisma, chat odalari ve hizli katilim vurgusunu merkeze alir.",
        ],
      },
      {
        title: "Bedelsiz Deneyimde Guven",
        paragraphs: [
          "Ucretsiz olmasi, kullanicinin kalite beklentisini azaltmaz. Sayfa, ziyaretciye sade giris, mobil uyum ve ilgili kayitsiz chat sayfalariyla daha guvenli bir yol haritasi sunar.",
        ],
      },
    ],
    cards: [
      { title: "Ucret Bariyeri Yok", text: "Chat deneyimini denemek isteyen kullanicilar icin hafif bir baslangic sunar." },
      { title: "Chat Niyeti Net", text: "Genel sohbet yerine yazisma odakli kullaniciyi hedefler." },
      { title: "Yan Niyetler", text: "Kayitsiz ve uyeliksiz chat sayfalarina dogal gecis kurar." },
    ],
    checklistTitle: "Ucretsiz Chat Sayfasinda Neler Var?",
    checklist: ["Bedelsiz chat vurgusu", "Chat odalari baglantisi", "Kayitsiz chat gecisi", "Mobil chat iliskisi", "Guvenli chat alternatifi"],
    faq: [
      { question: "Ucretsiz chat ne demek?", answer: "Kullaniciya chat odalarini bedel odemeden kesfetme niyetini anlatir." },
      { question: "Ucretsiz chat ile ucretsiz sohbet ayni mi?", answer: "Ucretsiz chat yazisma ve chat odalarina, ucretsiz sohbet daha genis muhabbet deneyimine odaklanir." },
      { question: "Ucretsiz chat mobilde kullanilir mi?", answer: "Mobil chat sayfasi cihaz deneyimini detaylandirir; bu sayfa mobil erisimi destekler." },
    ],
    related: [
      { href: "/ucretsiz-sohbet", label: "Ucretsiz Sohbet" },
      { href: "/kayitsiz-chat", label: "Kayitsiz Chat" },
      { href: "/uyeliksiz-chat", label: "Uyeliksiz Chat" },
      { href: "/chat-odalari", label: "Chat Odalari" },
    ],
    ctaTitle: "Ucretsiz Chat Deneyin",
    ctaText: "Bedelsiz chat odalarini kesfetmek ve yazismaya baslamak icin Zurna.TR giris alanini kullanabilirsiniz.",
  },
  "kayitsiz-chat": {
    slug: "kayitsiz-chat",
    keyword: "kayitsiz chat",
    title: "Kayitsiz Chat",
    seoTitle: "Kayitsiz Chat | Kayıt Olmadan Chat Odalari - Zurna.TR",
    description:
      "Kayitsiz chat ile uzun form doldurmadan chat odalarini kesfedin. Zurna.TR hizli, mobil uyumlu ve yazisma odakli deneyim sunar.",
    heroBadge: "KAYITSIZ CHAT",
    heroTitle: "Kayitsiz Chat ile",
    heroAccent: "Hemen Yazisin",
    heroText:
      "Kayitsiz chat, hesap olusturmadan once chat ortamini denemek ve hizli sekilde yazismaya baslamak isteyen kullanicilara yoneliktir.",
    stats: ["Form yok", "Chat akisi", "Hizli deneme", "Mobil uyum"],
    sections: [
      {
        title: "Kayitsiz Chat Neden Ayridir?",
        paragraphs: [
          "Kayitsiz sohbet genel muhabbet deneyimini anlatirken, kayitsiz chat daha kisa mesaj, oda ve yazisma temposuna odaklanir. Kullanici uzun kayit surecine girmeden chat ortamini gormek ister.",
        ],
      },
      {
        title: "Deneme Odakli Chat Yolculugu",
        paragraphs: [
          "Bu sayfa, ziyaretciye once chat deneyimini tanima sansi verir. Sonra ucretsiz chat, anonim chat ve chat girisi sayfalariyla farkli baslangic senaryolarina gecis saglar.",
        ],
      },
    ],
    cards: [
      { title: "Kayitsiz Deneme", text: "Yeni kullanicinin chat ortamini once hafif sekilde tanimasini saglar." },
      { title: "Az Engel", text: "Uzun form veya hesap sureci yerine chat deneyimine odaklanir." },
      { title: "Chat Baglami", text: "Konu sohbet degil, yazisma odalarina hizli gecistir." },
    ],
    checklistTitle: "Kayitsiz Chat Odaklari",
    checklist: ["Kayit bariyerini azaltma", "Chat odalarina gecis", "Anonim chat baglantisi", "Ucretsiz chat iliskisi", "Mobilde kisa karar akisi"],
    faq: [
      { question: "Kayitsiz chat ne anlama gelir?", answer: "Kullanıcinin uzun kayit adimlari olmadan chat deneyimini denemek istemesini anlatir." },
      { question: "Kayitsiz chat anonim midir?", answer: "Anonim chat rumuz ve kimlik temsilini, kayitsiz chat ise kayit bariyerinin olmamasini vurgular." },
      { question: "Kayitsiz chat ile chat girisi farkli mi?", answer: "Chat girisi aksiyona, kayitsiz chat ise kayit olmadan deneme beklentisine odaklanir." },
    ],
    related: [
      { href: "/kayitsiz-sohbet", label: "Kayitsiz Sohbet" },
      { href: "/anonim-chat", label: "Anonim Chat" },
      { href: "/ucretsiz-chat", label: "Ucretsiz Chat" },
      { href: "/chat-girisi", label: "Chat Girisi" },
    ],
    ctaTitle: "Kayitsiz Chat Deneyin",
    ctaText: "Kisa bir baslangicla chat ortamini tanimak icin Zurna.TR giris alanindan ilerleyebilirsiniz.",
  },
  "uyeliksiz-chat": {
    slug: "uyeliksiz-chat",
    keyword: "uyeliksiz chat",
    title: "Uyeliksiz Chat",
    seoTitle: "Uyeliksiz Chat | Hesapsiz Chat Odalari - Zurna.TR",
    description:
      "Uyeliksiz chat arayanlar icin Zurna.TR, hesap zorunlulugu olmadan chat odalarini taniyabileceginiz mobil uyumlu bir deneyim sunar.",
    heroBadge: "UYELIKSIZ CHAT",
    heroTitle: "Uyeliksiz Chat ile",
    heroAccent: "Hesapsiz Baslayin",
    heroText:
      "Uyeliksiz chat, profil acmadan chat ortamini gormek ve yazisma deneyimini daha hafif bir ilk adimla denemek isteyen kullanicilara hitap eder.",
    stats: ["Hesapsiz deneyim", "Chat odakli", "Kolay baslangic", "Az adim"],
    sections: [
      {
        title: "Hesap Zorunlulugu Olmadan Chat",
        paragraphs: [
          "Uyeliksiz chat sayfasi, hesap olusturma isteksizligini merkeze alir. Kayitsiz chat hizli deneme vurgusu yaparken, bu sayfa kullanicinin uyelik zorunluluguna takilmadan chat akisini anlamak istemesine yanit verir.",
        ],
      },
      {
        title: "Chat Kullanıcisi Icin Hafif Giris",
        paragraphs: [
          "Hesap acmadan ilerleme fikri, ozellikle mobil kullanicilar icin onemlidir. Sayfa, chat girisi ve ucretsiz chat sayfalarina baglanarak ziyaretciyi daha uygun baslangic seceneklerine tasir.",
        ],
      },
    ],
    cards: [
      { title: "Hesap Bariyeri Yok", text: "Kullanici chat deneyimini hesap acmadan once degerlendirebilir." },
      { title: "Yazisma Odakli", text: "Sohbetin genis anlamindan cok chat odalari niyetini karsilar." },
      { title: "Rahat Ilk Adim", text: "Yeni gelen ziyaretciye dusuk baskili bir baslangic sunar." },
    ],
    checklistTitle: "Uyeliksiz Chat Sayfasinin Farki",
    checklist: ["Hesap zorunlulugu itirazini karsilama", "Kayitsiz chatten ayrisma", "Chat girisine link", "Ucretsiz chat destegi", "Anonim chat baglantisi"],
    faq: [
      { question: "Uyeliksiz chat neyi hedefler?", answer: "Hesap acmadan chat odalarini tanimak isteyen kullanicilarin niyetini hedefler." },
      { question: "Uyeliksiz chat ile kayitsiz chat ayni mi?", answer: "Yakindir; uyeliksiz chat hesap zorunlulugunu, kayitsiz chat hizli deneme davranisini one cikarir." },
      { question: "Uyeliksiz chat guvenli midir?", answer: "Guvenli chat sayfasi bu konuyu ayrintili isler; burada hesap bariyeri odağa alinir." },
    ],
    related: [
      { href: "/uyeliksiz-sohbet", label: "Uyeliksiz Sohbet" },
      { href: "/kayitsiz-chat", label: "Kayitsiz Chat" },
      { href: "/anonim-chat", label: "Anonim Chat" },
      { href: "/chat-girisi", label: "Chat Girisi" },
    ],
    ctaTitle: "Uyeliksiz Chat Yolunu Kesfedin",
    ctaText: "Hesap olusturma baskisi olmadan chat ortamini tanimak icin Zurna.TR sayfalarinda ilerleyebilirsiniz.",
  },
  "anonim-chat": {
    slug: "anonim-chat",
    keyword: "anonim chat",
    title: "Anonim Chat",
    seoTitle: "Anonim Chat | Rumuzla Chat ve Rahat Yazisma - Zurna.TR",
    description:
      "Anonim chat ile rumuz kullanarak chat odalarini kesfedin. Zurna.TR rahat, mobil uyumlu ve yazisma odakli bir deneyim sunar.",
    heroBadge: "ANONIM CHAT",
    heroTitle: "Anonim Chat ile",
    heroAccent: "Rumuzla Yazisin",
    heroText:
      "Anonim chat, kimligini one cikarmadan chat ortamini tanimak ve rumuzla yazismak isteyen kullanicilarin arama niyetidir.",
    stats: ["Rumuzla katilim", "Rahat yazisma", "Chat odalari", "Gizlilik hissi"],
    sections: [
      {
        title: "Anonim Chat Hangi Ihtiyaci Karsilar?",
        paragraphs: [
          "Anonim sohbet daha genis bir muhabbet rahatligini anlatirken, anonim chat kisa yazisma ve chat odasi deneyimine odaklanir. Kullanici kendisini rumuzla temsil ederek once ortami gozlemlemek isteyebilir.",
        ],
      },
      {
        title: "Rumuzla Chat Davranisi",
        paragraphs: [
          "Rumuz kullanimi, ilk mesajlari daha kolay hale getirir. Sayfa, anonimlik iddiasini abartmadan; saygili, rahat ve chat odakli bir deneyim beklentisini aciklar.",
        ],
      },
    ],
    cards: [
      { title: "Rumuz Kimligi", text: "Kullanici kendi adini vermeden chat akisini deneyebilir." },
      { title: "Daha Rahat Ilk Mesaj", text: "Anonimlik hissi yeni kullanicinin cekingenligini azaltabilir." },
      { title: "Chat Kapsami", text: "Anonim sohbetten farkli olarak yazisma odalarina odaklanir." },
    ],
    checklistTitle: "Anonim Chat Icin One Cikanlar",
    checklist: ["Rumuzla yazisma", "Kayitsiz chat baglantisi", "Uyeliksiz chat iliskisi", "Guvenli chat gecisi", "Mobilde rahat okuma"],
    faq: [
      { question: "Anonim chat tamamen gizlilik mi vadeder?", answer: "Bu sayfa teknik gizlilik vaadi degil, rumuzla rahat yazisma niyetini anlatir." },
      { question: "Anonim chat kimler icin uygun?", answer: "Once ortami tanimak ve kisisel bilgilerini one cikarmadan yazismak isteyenler icin uygundur." },
      { question: "Anonim chat ile anonim sohbet arasinda fark var mi?", answer: "Anonim chat yazisma odakli, anonim sohbet daha genis muhabbet odaklidir." },
    ],
    related: [
      { href: "/anonim-sohbet", label: "Anonim Sohbet" },
      { href: "/kayitsiz-chat", label: "Kayitsiz Chat" },
      { href: "/uyeliksiz-chat", label: "Uyeliksiz Chat" },
      { href: "/guvenli-sohbet", label: "Guvenli Sohbet" },
    ],
    ctaTitle: "Anonim Chat Akisini Taniyin",
    ctaText: "Rumuzla yazisma deneyimini kesfetmek icin Zurna.TR chat ekosisteminde ilerleyebilirsiniz.",
  },
  "chat-sitesi": {
    slug: "chat-sitesi",
    keyword: "chat sitesi",
    title: "Chat Sitesi",
    seoTitle: "Chat Sitesi | Mobil Uyumlu Chat Odalari - Zurna.TR",
    description:
      "Chat sitesi arayanlar icin Zurna.TR, chat odalari, mobil chat, kayitsiz chat ve canli yazisma deneyimini bir arada sunar.",
    heroBadge: "CHAT SITESI",
    heroTitle: "Chat Sitesi Arayanlara",
    heroAccent: "Zurna.TR Rehberi",
    heroText:
      "Chat sitesi sayfasi, tek bir oda degil; chat girisi, odalar, mobil deneyim ve guven hissini birlikte degerlendiren kullanicilari hedefler.",
    stats: ["Platform arayisi", "Chat odalari", "Mobil destek", "Giris kolayligi"],
    sections: [
      {
        title: "Iyi Bir Chat Sitesi Nasil Secilir?",
        paragraphs: [
          "Chat sitesi arayan kullanici genellikle bir platformun tamamini degerlendirir. Kolay giris, aktif odalar, mobil uyum ve anlasilir sayfa yapisi birlikte karar verir. Bu sayfa sohbet sitesi sayfasindan ayrilarak chat odakli secim kriterlerini anlatir.",
        ],
      },
      {
        title: "Chat Ekosistemini Bir Arada Dusunmek",
        paragraphs: [
          "Bir chat sitesinde kullanici bazen ucretsiz chat, bazen kayitsiz chat, bazen de canli chat arar. Zurna.TR bu alt niyetleri internal linklerle birbirine baglayarak ziyaretciye daha net bir yol sunar.",
        ],
      },
    ],
    cards: [
      { title: "Platform Secimi", text: "Kullanici sadece oda degil, guven veren bir chat sitesi arar." },
      { title: "Alt Niyetler", text: "Mobil, kayitsiz, ucretsiz ve canli chat sayfalariyla tamamlanir." },
      { title: "Marka Girisi", text: "Zurna.TR chat ekosistemini tek sayfada konumlandirir." },
    ],
    checklistTitle: "Chat Sitesi Degerlendirme Kriterleri",
    checklist: ["Kolay chat girisi", "Mobil uyum", "Aktif chat odalari", "Ucretsiz chat secenegi", "Guven veren yapi"],
    faq: [
      { question: "Chat sitesi ne sunmali?", answer: "Kolay giris, aktif chat odalari, mobil uyum ve kullaniciyi yormayan bir deneyim sunmalidir." },
      { question: "Chat sitesi ile sohbet sitesi farkli mi?", answer: "Chat sitesi yazisma ve chat odalari diline, sohbet sitesi daha genis muhabbet deneyimine odaklanir." },
      { question: "Zurna.TR chat sitesi olarak nasil konumlanir?", answer: "Chat, mobil chat, kayitsiz chat ve chat odalari sayfalarini ayni ekosistemde birlestirir." },
    ],
    related: [
      { href: "/chat-siteleri", label: "Chat Siteleri" },
      { href: "/chat-girisi", label: "Chat Girisi" },
      { href: "/canli-chat", label: "Canli Chat" },
      { href: "/mobil-chat", label: "Mobil Chat" },
    ],
    ctaTitle: "Chat Sitesini Kesfedin",
    ctaText: "Zurna.TR chat sayfalarini inceleyerek size en uygun yazisma deneyimine ulasabilirsiniz.",
  },
  "sohbet-siteleri": {
    slug: "sohbet-siteleri",
    keyword: "sohbet siteleri",
    title: "Sohbet Siteleri",
    seoTitle: "Sohbet Siteleri | Guvenli ve Mobil Sohbet Secimi - Zurna.TR",
    description:
      "Sohbet siteleri arayanlar icin Zurna.TR, kaliteli sohbet, guvenli ortam, mobil uyum ve kolay giris kriterlerini aciklar.",
    heroBadge: "SOHBET SITELERI",
    heroTitle: "Sohbet Siteleri Arasinda",
    heroAccent: "Dogru Secimi Yapin",
    heroText:
      "Sohbet siteleri sorgusu, kullanicinin platformlari karsilastirdigi ve guven veren bir adres aradigi arastirma niyetini tasir.",
    stats: ["Karsilastirma", "Guven arayisi", "Mobil kriter", "Kalite sinyali"],
    sections: [
      {
        title: "Sohbet Siteleri Arastirmasi",
        paragraphs: [
          "Sohbet siteleri arayan kullanici tek bir sayfaya degil, alternatifler arasinda karar vermeye odaklanir. Bu sayfa, en iyi sohbet sitesi ve sohbet sitesi sayfalarindan ayrilarak cogul arastirma niyetine yanit verir.",
        ],
      },
      {
        title: "Secimde Hangi Kriterler Onemli?",
        paragraphs: [
          "Aktiflik, mobil uyum, kolay giris, seviyeli dil ve guvenli ortam, sohbet siteleri arastirmasinda one cikan kriterlerdir. Zurna.TR bu kriterleri kendi ekosistemi icindeki ilgili sayfalara baglar.",
        ],
      },
    ],
    cards: [
      { title: "Karsilastirma Niyeti", text: "Kullanici farkli sohbet sitesi ozelliklerini anlamak ister." },
      { title: "Guven Kriteri", text: "Seviyeli ve guvenli sohbet sayfalariyla bag kurar." },
      { title: "Mobil Beklenti", text: "Modern sohbet sitesi seciminde telefon deneyimi kritik rol oynar." },
    ],
    checklistTitle: "Sohbet Siteleri Icin Kontrol Listesi",
    checklist: ["Aktif kullanici hissi", "Guvenli sohbet anlatimi", "Seviyeli ortam", "Mobil giris", "Kolay sohbet girisi"],
    faq: [
      { question: "Sohbet siteleri arasinda neye bakilmali?", answer: "Giris kolayligi, mobil uyum, seviyeli ortam ve aktif sohbet odalari onemlidir." },
      { question: "Sohbet siteleri sayfasi neden gerekli?", answer: "Cunku kullanici burada tek bir markadan cok secim kriterlerini arastirir." },
      { question: "Bu sayfa en iyi sohbet sitesiyle ayni mi?", answer: "Hayir. En iyi sayfasi tercih iddiasina, bu sayfa cogul arastirma niyetine odaklanir." },
    ],
    related: [
      { href: "/sohbet-sitesi", label: "Sohbet Sitesi" },
      { href: "/en-iyi-sohbet-sitesi", label: "En Iyi Sohbet Sitesi" },
      { href: "/guvenli-sohbet", label: "Guvenli Sohbet" },
      { href: "/seviyeli-sohbet", label: "Seviyeli Sohbet" },
    ],
    ctaTitle: "Sohbet Sitesi Secimini Netlestirin",
    ctaText: "Zurna.TR sohbet ekosistemini inceleyerek hangi deneyimin size uygun oldugunu kolayca gorebilirsiniz.",
  },
  "en-iyi-sohbet-sitesi": {
    slug: "en-iyi-sohbet-sitesi",
    keyword: "en iyi sohbet sitesi",
    title: "En Iyi Sohbet Sitesi",
    seoTitle: "En Iyi Sohbet Sitesi | Kaliteli ve Guvenli Sohbet - Zurna.TR",
    description:
      "En iyi sohbet sitesi arayanlar icin Zurna.TR, kalite, guven, mobil uyum, aktif odalar ve kolay giris kriterlerini bir arada anlatir.",
    heroBadge: "EN IYI SOHBET SITESI",
    heroTitle: "En Iyi Sohbet Sitesi Icin",
    heroAccent: "Kriterleri Bilin",
    heroText:
      "En iyi sohbet sitesi sorgusu, kullanicinin tercih yapmadan once kalite ve guven sinyallerini tarttigi karar niyetini tasir.",
    stats: ["Tercih niyeti", "Kalite arayisi", "Guven kriteri", "Mobil deneyim"],
    sections: [
      {
        title: "En Iyi Olma Kriteri Nedir?",
        paragraphs: [
          "Bu sayfa, sohbet siteleri listesinden farkli olarak kullanicinin karar vermesine yardim eden kriterleri merkeze alir. En iyi ifadesi; aktif odalar, kolay giris, seviyeli ortam, mobil uyum ve anlasilir sayfa yapisi gibi somut beklentilerle desteklenmelidir.",
        ],
      },
      {
        title: "Zurna.TR Neyi One Cikarir?",
        paragraphs: [
          "Zurna.TR, sohbet girisi, guvenli sohbet, kaliteli sohbet ve mobil sohbet sayfalarini ayni ekosistemde bulusturarak kullanicinin karar yolculugunu kisaltir. Bu sayfa marka iddiasini abartmadan, secim kriterlerini aciklar.",
        ],
      },
    ],
    cards: [
      { title: "Karar Sayfasi", text: "Kullanici hangi sohbet sitesine yonelecegini degerlendirir." },
      { title: "Kalite Kaniti", text: "Kaliteli ve seviyeli sohbet sayfalariyla desteklenen bir ag kurar." },
      { title: "Guvenli Baslangic", text: "Guvenli sohbet sayfasina dogal gecis verir." },
    ],
    checklistTitle: "En Iyi Sohbet Sitesi Kriterleri",
    checklist: ["Aktif odalar", "Mobil uyum", "Kolay giris", "Seviyeli dil", "Guven veren yapi"],
    faq: [
      { question: "En iyi sohbet sitesi nasil secilir?", answer: "Aktiflik, guven, mobil uyum, kolay giris ve kullanici deneyimi birlikte degerlendirilmelidir." },
      { question: "Bu sayfa sohbet siteleri sayfasindan farkli mi?", answer: "Evet. Bu sayfa karar ve kalite kriterlerine, sohbet siteleri sayfasi arastirma niyetine odaklanir." },
      { question: "En iyi sohbet sitesi ucretsiz olmali mi?", answer: "Ucretsiz erisim onemlidir; ancak kalite ve guven kriterleriyle birlikte dusunulmelidir." },
    ],
    related: [
      { href: "/kaliteli-sohbet", label: "Kaliteli Sohbet" },
      { href: "/guvenli-sohbet", label: "Guvenli Sohbet" },
      { href: "/seviyeli-sohbet", label: "Seviyeli Sohbet" },
      { href: "/sohbet-siteleri", label: "Sohbet Siteleri" },
    ],
    ctaTitle: "Dogru Sohbet Sitesini Secin",
    ctaText: "Kalite, guven ve kolay giris kriterlerini inceleyerek Zurna.TR sohbet deneyimini degerlendirebilirsiniz.",
  },
  "seviyeli-sohbet": {
    slug: "seviyeli-sohbet",
    keyword: "seviyeli sohbet",
    title: "Seviyeli Sohbet",
    seoTitle: "Seviyeli Sohbet | Saygili ve Samimi Sohbet Ortami - Zurna.TR",
    description:
      "Seviyeli sohbet arayanlar icin Zurna.TR, saygili dil, guven veren ortam ve mobil uyumlu sohbet deneyimini one cikarir.",
    heroBadge: "SEVIYELI SOHBET",
    heroTitle: "Seviyeli Sohbet ile",
    heroAccent: "Rahat Konusun",
    heroText:
      "Seviyeli sohbet, kullanicinin saygili, dengeli ve rahatsiz etmeyen bir muhabbet ortami aradigi guven odakli niyettir.",
    stats: ["Saygili dil", "Rahat ortam", "Guven hissi", "Samimi muhabbet"],
    sections: [
      {
        title: "Seviyeli Sohbet Neden Aranir?",
        paragraphs: [
          "Sohbet sitelerinde kullanicilar sadece aktiflik degil, iletisim kalitesi de arar. Seviyeli sohbet sayfasi, rahatsiz edici dil veya karmasa istemeyen ziyaretcinin daha olgun ve saygili bir ortam beklentisini karsilar.",
        ],
      },
      {
        title: "Saygi Odakli Deneyim",
        paragraphs: [
          "Bu sayfa guvenli sohbetten ayrilarak teknik veya risk odakli degil, iletisim tarzi odakli bir niyeti hedefler. Samimi sohbet, kaliteli sohbet ve arkadaslik sohbet sayfalariyla dogal bag kurar.",
        ],
      },
    ],
    cards: [
      { title: "Dil Kalitesi", text: "Sohbetin nasil kurulduguna ve kullanici rahatligina odaklanir." },
      { title: "Sakin Ortam", text: "Kullaniciya daha duzenli ve saygili muhabbet beklentisi sunar." },
      { title: "Guvenle Iliskili", text: "Guvenli sohbet sayfasini tamamlar ama onunla ayni niyeti tasimaz." },
    ],
    checklistTitle: "Seviyeli Sohbet Sinyalleri",
    checklist: ["Saygili ton", "Rahatsiz etmeyen ortam", "Kaliteli sohbet baglantisi", "Samimi sohbet gecisi", "Arkadaslik niyetiyle uyum"],
    faq: [
      { question: "Seviyeli sohbet ne demektir?", answer: "Karsilikli saygiya dayali, duzenli ve rahat bir muhabbet beklentisini ifade eder." },
      { question: "Seviyeli sohbet ile guvenli sohbet ayni mi?", answer: "Hayir. Seviyeli sohbet iletisim kalitesini, guvenli sohbet daha cok risk ve rahatlik hissini ele alir." },
      { question: "Seviyeli sohbet kimler icin uygun?", answer: "Daha sakin, saygili ve samimi bir ortam arayan kullanicilar icin uygundur." },
    ],
    related: [
      { href: "/kaliteli-sohbet", label: "Kaliteli Sohbet" },
      { href: "/guvenli-sohbet", label: "Guvenli Sohbet" },
      { href: "/samimi-sohbet", label: "Samimi Sohbet" },
      { href: "/arkadaslik-sohbet", label: "Arkadaslik Sohbet" },
    ],
    ctaTitle: "Seviyeli Sohbeti Kesfedin",
    ctaText: "Saygili ve rahat bir muhabbet deneyimi icin Zurna.TR sohbet alanlarini inceleyebilirsiniz.",
  },
  "kaliteli-sohbet": {
    slug: "kaliteli-sohbet",
    keyword: "kaliteli sohbet",
    title: "Kaliteli Sohbet",
    seoTitle: "Kaliteli Sohbet | Iyi Deneyim ve Aktif Odalar - Zurna.TR",
    description:
      "Kaliteli sohbet arayanlar icin Zurna.TR; aktif odalar, mobil uyum, seviyeli iletisim ve kolay giris kriterlerini bir arada sunar.",
    heroBadge: "KALITELI SOHBET",
    heroTitle: "Kaliteli Sohbet ile",
    heroAccent: "Daha Iyi Deneyim",
    heroText:
      "Kaliteli sohbet sayfasi, sadece sohbet etmek degil, iyi tasarlanmis ve guven veren bir deneyim arayan kullanicilari hedefler.",
    stats: ["Deneyim kalitesi", "Aktif ortam", "Mobil uyum", "Seviyeli dil"],
    sections: [
      {
        title: "Kalite Sohbette Neyi Degistirir?",
        paragraphs: [
          "Kaliteli sohbet aramasi, kullanicinin rastgele bir odaya girmek istemedigini gosterir. Sayfa, aktiflik, okunabilirlik, saygili dil ve kolay giris gibi deneyim kriterlerini aciklar.",
        ],
      },
      {
        title: "Kaliteyi Olusturan Parcalar",
        paragraphs: [
          "Guvenli ortam, seviyeli iletisim, mobil uyum ve anlasilir internal linkler kaliteli sohbet deneyiminin parcalaridir. Bu sayfa, en iyi sohbet sitesi niyetine gecis icin de destekleyici bir roldedir.",
        ],
      },
    ],
    cards: [
      { title: "Deneyim Odakli", text: "Kullanici sadece oda degil, iyi bir sohbet akisi arar." },
      { title: "Kalite Kriterleri", text: "Mobil uyum, aktiflik ve seviyeli dil birlikte ele alinir." },
      { title: "Marka Guveni", text: "Zurna.TR ekosisteminin kalite sinyallerini toplar." },
    ],
    checklistTitle: "Kaliteli Sohbet Icin Kriterler",
    checklist: ["Aktif odalar", "Okunabilir sayfa", "Guvenli ortam", "Seviyeli dil", "Kolay giris"],
    faq: [
      { question: "Kaliteli sohbet nasil anlasilir?", answer: "Aktif kullanici, duzenli sayfa yapisi, saygili dil ve kolay giris kaliteli deneyimin temel gostergeleridir." },
      { question: "Kaliteli sohbet ucretsiz olabilir mi?", answer: "Evet. Ucretsiz olmasi kaliteyi engellemez; deneyim tasarimi ve ortam dili belirleyicidir." },
      { question: "Kaliteli sohbet ile seviyeli sohbet farkli mi?", answer: "Kaliteli sohbet genel deneyimi, seviyeli sohbet iletisim tarzini vurgular." },
    ],
    related: [
      { href: "/en-iyi-sohbet-sitesi", label: "En Iyi Sohbet Sitesi" },
      { href: "/seviyeli-sohbet", label: "Seviyeli Sohbet" },
      { href: "/guvenli-sohbet", label: "Guvenli Sohbet" },
      { href: "/sohbet-sitesi", label: "Sohbet Sitesi" },
    ],
    ctaTitle: "Kaliteli Sohbet Deneyimini Inceleyin",
    ctaText: "Zurna.TR sohbet sayfalarini gezerek size uygun kaliteli sohbet yolunu secabilirsiniz.",
  },
  "guvenli-sohbet": {
    slug: "guvenli-sohbet",
    keyword: "guvenli sohbet",
    title: "Guvenli Sohbet",
    seoTitle: "Guvenli Sohbet | Rahat ve Kontrollu Sohbet Deneyimi - Zurna.TR",
    description:
      "Guvenli sohbet arayanlar icin Zurna.TR, rumuzla baslangic, seviyeli iletisim ve rahat sohbet ortamini sade sekilde anlatir.",
    heroBadge: "GUVENLI SOHBET",
    heroTitle: "Guvenli Sohbet ile",
    heroAccent: "Rahat Hissedin",
    heroText:
      "Guvenli sohbet, kullanicinin yeni insanlarla tanisirken rahatlik, saygi ve kontrol hissi aradigi hassas bir niyettir.",
    stats: ["Rahatlik", "Kontrol hissi", "Saygili ortam", "Rumuzla baslangic"],
    sections: [
      {
        title: "Guvenli Sohbet Arayan Kullanici",
        paragraphs: [
          "Guvenli sohbet sorgusu, kullanicinin sadece aktif oda degil, kendini rahat hissedecegi bir ortam aradigini gosterir. Bu sayfa teknik garanti iddiasi yerine, guven veren deneyim unsurlarini aciklar.",
        ],
      },
      {
        title: "Rahat Baslangic ve Dogru Yonlendirme",
        paragraphs: [
          "Rumuzla baslama, kayitsiz deneyim, seviyeli dil ve anlasilir sayfa yapisi guven hissini destekler. Guvenli sohbet sayfasi anonim chat ve seviyeli sohbet sayfalariyla birlikte kullanicinin cekincelerini azaltir.",
        ],
      },
    ],
    cards: [
      { title: "Cekinceyi Azaltir", text: "Yeni kullanicinin ortam hakkindaki belirsizligini giderir." },
      { title: "Saygi Baglami", text: "Seviyeli sohbet sayfasiyla guven algisini destekler." },
      { title: "Kontrollu Baslangic", text: "Rumuz ve kayitsiz deneyimle daha rahat bir ilk adim sunar." },
    ],
    checklistTitle: "Guvenli Sohbet Unsurlari",
    checklist: ["Rumuzla baslangic", "Seviyeli dil", "Anonim chat baglantisi", "Kayitsiz sohbet gecisi", "Net CTA"],
    faq: [
      { question: "Guvenli sohbet neyi anlatir?", answer: "Kullanicinin rahat, saygili ve kontrol hissi veren bir sohbet ortami aramasini anlatir." },
      { question: "Guvenli sohbet teknik garanti midir?", answer: "Bu sayfa teknik garanti degil, kullanici deneyiminde guven hissini destekleyen unsurlari aciklar." },
      { question: "Guvenli sohbet anonim olabilir mi?", answer: "Anonim chat ve anonim sohbet sayfalari rumuzla baslangic beklentisini destekler." },
    ],
    related: [
      { href: "/seviyeli-sohbet", label: "Seviyeli Sohbet" },
      { href: "/anonim-chat", label: "Anonim Chat" },
      { href: "/kayitsiz-sohbet", label: "Kayitsiz Sohbet" },
      { href: "/kaliteli-sohbet", label: "Kaliteli Sohbet" },
    ],
    ctaTitle: "Guvenli Sohbet Yolunu Secin",
    ctaText: "Rahat ve saygili bir sohbet deneyimi icin Zurna.TR ekosistemindeki ilgili sayfalari inceleyebilirsiniz.",
  },
  "sohbet-et": {
    slug: "sohbet-et",
    keyword: "sohbet et",
    title: "Sohbet Et",
    seoTitle: "Sohbet Et | Hemen Muhabbete Basla - Zurna.TR",
    description:
      "Sohbet et aramasi yapanlar icin Zurna.TR, dogrudan muhabbet baslatmaya yonelik kolay giris ve ilgili sohbet sayfalari sunar.",
    heroBadge: "SOHBET ET",
    heroTitle: "Sohbet Et ve",
    heroAccent: "Muhabbete Katil",
    heroText:
      "Sohbet et sayfasi, bilgi aramaktan cok bir eyleme gecmek isteyen kullanicinin dogrudan konusma niyetini hedefler.",
    stats: ["Fiil odakli", "Hemen baslama", "Muhabbet niyeti", "Kolay giris"],
    sections: [
      {
        title: "Sohbet Et Aramasi Ne Anlatir?",
        paragraphs: [
          "Bu sorgu kullanicinin hazir oldugunu gosterir. Genel sohbet sayfasindan farkli olarak burada niyet, tanim okumak degil; yeni insanlarla konusmaya baslamaktir.",
        ],
      },
      {
        title: "Eylem Odakli Sayfa Kurgusu",
        paragraphs: [
          "Sayfa, sohbet girisi, canli sohbet ve muhabbet gibi aksiyon sayfalarina baglanir. Boylece kullanici aradigi konusma bicimine gore hizli bir yol secer.",
        ],
      },
    ],
    cards: [
      { title: "Dogru Fiil", text: "Kullanici aramasinda direkt eylem bildirir." },
      { title: "Kisa Karar", text: "Uzun aciklama yerine net baslama yollarini one cikarir." },
      { title: "Muhabbete Gecis", text: "Muhabbet ve canli sohbet sayfalariyla dogal bag kurar." },
    ],
    checklistTitle: "Sohbet Et Sayfasinin Gorevi",
    checklist: ["Eylem niyeti", "Sohbet girisi linki", "Canli sohbet baglantisi", "Muhabbet sayfasina gecis", "Mobilde hizli aksiyon"],
    faq: [
      { question: "Sohbet et sayfasi neden ayridir?", answer: "Cunku kullanici burada bilgi degil, dogrudan konusmaya baslama yolu arar." },
      { question: "Sohbet et ile sohbet girisi ayni mi?", answer: "Sohbet girisi teknik baslangica, sohbet et ise eylem ve muhabbet istegine odaklanir." },
      { question: "Sohbet et mobilde uygun mu?", answer: "Evet. Sayfa mobil kullanicinin hizli aksiyon almasini destekler." },
    ],
    related: [
      { href: "/sohbet-girisi", label: "Sohbet Girisi" },
      { href: "/canli-sohbet", label: "Canli Sohbet" },
      { href: "/muhabbet", label: "Muhabbet" },
      { href: "/samimi-sohbet", label: "Samimi Sohbet" },
    ],
    ctaTitle: "Sohbet Etmeye Baslayin",
    ctaText: "Yeni insanlarla konusmak icin Zurna.TR sohbet girisini kullanarak ilk adimi atabilirsiniz.",
  },
  "chat-yap": {
    slug: "chat-yap",
    keyword: "chat yap",
    title: "Chat Yap",
    seoTitle: "Chat Yap | Hemen Yazismaya Basla - Zurna.TR",
    description:
      "Chat yap aramasi yapanlar icin Zurna.TR, chat girisi, canli chat ve mobil chat sayfalariyla hizli yazisma yolu sunar.",
    heroBadge: "CHAT YAP",
    heroTitle: "Chat Yap ve",
    heroAccent: "Aninda Yazis",
    heroText:
      "Chat yap sayfasi, kullanicinin chat eylemine gecmek istedigi kisa ve net arama niyetini karsilar.",
    stats: ["Yazisma eylemi", "Hizli chat", "Mobil uyum", "Chat girisi"],
    sections: [
      {
        title: "Chat Yap Sorgusunun Dili",
        paragraphs: [
          "Chat yap ifadesi, kullanicinin teknik bilgi degil, hemen yazisma beklentisi tasidigini gosterir. Sayfa bu nedenle chat girisi ve canli chat sayfalarina yakin konumlanir.",
        ],
      },
      {
        title: "Yazismaya Baslama Yolu",
        paragraphs: [
          "Kullanici chat yapmak istediginde cihaz, kayit ve ucret gibi engelleri hizla anlamak ister. Bu sayfa mobil chat, kayitsiz chat ve ucretsiz chat sayfalarina baglanti vererek karar surecini kisaltir.",
        ],
      },
    ],
    cards: [
      { title: "Eylem Odakli Chat", text: "Kullanici chat yapma davranisina hazirdir." },
      { title: "Kisa Yol Haritasi", text: "Chat girisi, mobil chat ve canli chat arasinda gecis saglar." },
      { title: "Yazisma Temposu", text: "Genel sohbetten daha hizli ve kisa mesaj odakli bir beklenti tasir." },
    ],
    checklistTitle: "Chat Yap Sayfasinda One Cikanlar",
    checklist: ["Chat girisi", "Canli chat", "Mobil chat", "Kayitsiz chat", "Ucretsiz chat"],
    faq: [
      { question: "Chat yap ne anlama gelir?", answer: "Kullanicinin bir chat ortaminda hemen yazismaya baslama istegini anlatir." },
      { question: "Chat yap ile sohbet et farkli mi?", answer: "Chat yap kisa yazisma ve chat odalarina, sohbet et daha genis muhabbet niyetine odaklanir." },
      { question: "Chat yapmak icin mobil kullanilir mi?", answer: "Mobil chat sayfasi telefonla yazisma deneyimini detayli aciklar." },
    ],
    related: [
      { href: "/chat-girisi", label: "Chat Girisi" },
      { href: "/canli-chat", label: "Canli Chat" },
      { href: "/mobil-chat", label: "Mobil Chat" },
      { href: "/ucretsiz-chat", label: "Ucretsiz Chat" },
    ],
    ctaTitle: "Chat Yapmaya Baslayin",
    ctaText: "Zurna.TR chat ekosisteminde size uygun giris yolunu secerek yazismaya gecis yapabilirsiniz.",
  },
  "genel-sohbet": {
    slug: "genel-sohbet",
    keyword: "genel sohbet",
    title: "Genel Sohbet",
    seoTitle: "Genel Sohbet | Herkese Acik Sohbet Odalari - Zurna.TR",
    description:
      "Genel sohbet arayanlar icin Zurna.TR, herkesin katilabilecegi samimi, mobil uyumlu ve konuya acik sohbet alanlarini anlatir.",
    heroBadge: "GENEL SOHBET",
    heroTitle: "Genel Sohbet ile",
    heroAccent: "Konuya Dahil Olun",
    heroText:
      "Genel sohbet, belirli bir tema aramadan herkesle konusmak ve ortami tanimak isteyen kullanicilarin baslangic niyetidir.",
    stats: ["Herkese acik", "Konu esnekligi", "Yeni baslayanlara uygun", "Oda girisi"],
    sections: [
      {
        title: "Genel Sohbet Neden Temel Bir Sayfadir?",
        paragraphs: [
          "Genel sohbet arayan kullanici, belirli bir kategoriye karar vermemis olabilir. Bu sayfa, sohbet odalarina giris ile arkadaslik sohbet arasinda daha genis ve esnek bir baslangic noktasi olusturur.",
        ],
      },
      {
        title: "Ilk Mesaj Icin Rahat Alan",
        paragraphs: [
          "Genel odalarda konu acmak daha kolaydir; selamlasma, gundem, muzik veya gunluk yasam uzerinden muhabbet baslayabilir. Sayfa bu esnekligi anlatir ve ilgili odalara gecis verir.",
        ],
      },
    ],
    cards: [
      { title: "Esnek Konular", text: "Tek bir tema ile sinirli kalmadan konusma imkani sunar." },
      { title: "Baslangic Noktasi", text: "Yeni kullanicilar icin sohbet ekosistemine yumusak giris saglar." },
      { title: "Oda Baglantisi", text: "Sohbet odalarina giris ve muhabbet sayfalariyla iliski kurar." },
    ],
    checklistTitle: "Genel Sohbet Icin Kullanici Beklentileri",
    checklist: ["Kolay baslangic", "Serbest konu akisi", "Sohbet odalari baglantisi", "Yeni sohbet gecisi", "Samimi ortam"],
    faq: [
      { question: "Genel sohbet kimler icin uygun?", answer: "Belirli bir konu secmeden sohbet ortamini tanimak isteyen herkes icin uygundur." },
      { question: "Genel sohbet ile sohbet odalari farkli mi?", answer: "Genel sohbet bir oda/konu tipidir; sohbet odalari daha genis kategori yapisini anlatir." },
      { question: "Genel sohbette hangi konular konusulur?", answer: "Gundem, muzik, gunluk yasam, tanisma ve serbest muhabbet gibi konular one cikar." },
    ],
    related: [
      { href: "/sohbet-odalarina-giris", label: "Sohbet Odalarina Giris" },
      { href: "/muhabbet", label: "Muhabbet" },
      { href: "/samimi-sohbet", label: "Samimi Sohbet" },
      { href: "/sohbet-odalari", label: "Sohbet Odalari" },
    ],
    ctaTitle: "Genel Sohbete Katilin",
    ctaText: "Konu secmeden samimi bir sohbet ortamini tanimak icin Zurna.TR giris alanini kullanabilirsiniz.",
  },
  "7-24-sohbet": {
    slug: "7-24-sohbet",
    keyword: "7/24 sohbet",
    title: "7/24 Sohbet",
    seoTitle: "7/24 Sohbet | Gun Boyu Aktif Sohbet Deneyimi - Zurna.TR",
    description:
      "7/24 sohbet arayanlar icin Zurna.TR, gunun farkli saatlerinde aktif sohbet, mobil erisim ve canli muhabbet niyetini karsilar.",
    heroBadge: "7/24 SOHBET",
    heroTitle: "7/24 Sohbet ile",
    heroAccent: "Her Saat Baglanin",
    heroText:
      "7/24 sohbet sayfasi, gunun herhangi bir saatinde aktif ortam bulmak isteyen kullanicilarin zaman odakli arama niyetini hedefler.",
    stats: ["Zaman esnekligi", "Gece-gunduz erisim", "Aktiflik beklentisi", "Mobil baglanti"],
    sections: [
      {
        title: "7/24 Sohbet Arayanlarin Beklentisi",
        paragraphs: [
          "Bu sorguda kullanici belirli bir saatle sinirlanmak istemez. Is cikisi, gece saatleri veya kisa molalarda sohbet ortamina ulasabilmek ister. Sayfa, canli sohbet ve gece sohbet niyetlerine yakin ama gun boyu aktiflik vurgusuyla ayrisir.",
        ],
      },
      {
        title: "Her Saat Ulasilabilir Deneyim",
        paragraphs: [
          "Mobil uyum, hizli giris ve aktif odalar 7/24 sohbet beklentisinin temel parcalaridir. Zurna.TR bu sayfada kullaniciya zaman esnekligini ve dogru sayfalara gecis imkanini anlatir.",
        ],
      },
    ],
    cards: [
      { title: "Zaman Bagimsiz", text: "Kullanici sohbeti belirli saatlere sikistirmadan dusunur." },
      { title: "Aktiflik Sinyali", text: "Canli ve online sohbet sayfalariyla desteklenen bir niyet tasir." },
      { title: "Mobil Kullanim", text: "Her saat erisim beklentisi mobil deneyimle guclenir." },
    ],
    checklistTitle: "7/24 Sohbet Icin Gerekenler",
    checklist: ["Aktif ortam hissi", "Canli sohbet baglantisi", "Online sohbet gecisi", "Mobil erisim", "Hizli giris"],
    faq: [
      { question: "7/24 sohbet ne demek?", answer: "Kullanicinin gunun farkli saatlerinde sohbet ortamina ulasma beklentisini ifade eder." },
      { question: "7/24 sohbet ile canli sohbet ayni mi?", answer: "Canli sohbet anlik akisi, 7/24 sohbet zaman esnekligini vurgular." },
      { question: "7/24 sohbet mobilde onemli mi?", answer: "Evet. Her saat erisim beklentisi telefonla kullanimi daha degerli hale getirir." },
    ],
    related: [
      { href: "/canli-sohbet", label: "Canli Sohbet" },
      { href: "/online-sohbet", label: "Online Sohbet" },
      { href: "/hizli-sohbet", label: "Hizli Sohbet" },
      { href: "/mobil-sohbet", label: "Mobil Sohbet" },
    ],
    ctaTitle: "Her Saat Sohbeti Kesfedin",
    ctaText: "Zurna.TR sohbet alanlarina gunun size uygun aninda baglanmak icin giris yolunu kullanabilirsiniz.",
  },
  "web-sohbet": {
    slug: "web-sohbet",
    keyword: "web sohbet",
    title: "Web Sohbet",
    seoTitle: "Web Sohbet | Tarayicidan Sohbet Odalari - Zurna.TR",
    description:
      "Web sohbet ile tarayici uzerinden sohbet odalarini kesfedin. Zurna.TR program kurmadan, mobil uyumlu ve kolay giris deneyimi sunar.",
    heroBadge: "WEB SOHBET",
    heroTitle: "Web Sohbet ile",
    heroAccent: "Tarayicidan Baglanin",
    heroText:
      "Web sohbet sayfasi, program kurmadan tarayici uzerinden sohbet etmek isteyen kullanicilarin teknik kolaylik niyetini karsilar.",
    stats: ["Tarayici erisimi", "Programsiz deneyim", "Mobil uyum", "Kolay giris"],
    sections: [
      {
        title: "Web Sohbet Neyi Cozer?",
        paragraphs: [
          "Kullanici program indirmek istemediginde web sohbet arar. Bu sayfa, mIRC indir gibi masaustu niyetlerinden ayrilarak tarayici uzerinden pratik erisim beklentisini hedefler.",
        ],
      },
      {
        title: "Kurulumsuz Sohbet Mantigi",
        paragraphs: [
          "Web sohbet deneyimi, tarayicidan sohbet ve web chat sayfalariyla birlikte dusunulmelidir. Zurna.TR burada kullanicinin cihaz veya kurulum bariyerini azaltan yolu aciklar.",
        ],
      },
    ],
    cards: [
      { title: "Kurulum Yok", text: "Program indirme ihtiyaci olmadan sohbet fikrini anlatir." },
      { title: "Tarayici Odakli", text: "Web uzerinden baglanma niyetini netlestirir." },
      { title: "IRC ile Kopru", text: "Web IRC ve mIRC indir sayfalari arasinda anlamli ayrim kurar." },
    ],
    checklistTitle: "Web Sohbet Avantajlari",
    checklist: ["Programsiz erisim", "Tarayicidan sohbet baglantisi", "Mobil uyum", "Web chat gecisi", "mIRC alternatifi"],
    faq: [
      { question: "Web sohbet nedir?", answer: "Tarayici uzerinden sohbet odalarina ulasma beklentisini anlatir." },
      { question: "Web sohbet icin program gerekir mi?", answer: "Hayir. Web sohbet sayfasi programsiz erisim niyetine odaklanir." },
      { question: "Web sohbet ile web chat farkli mi?", answer: "Web sohbet genel muhabbeti, web chat daha yazisma ve chat odasi dilini vurgular." },
    ],
    related: [
      { href: "/tarayicidan-sohbet", label: "Tarayicidan Sohbet" },
      { href: "/web-chat", label: "Web Chat" },
      { href: "/mirc-indir", label: "mIRC Indir" },
      { href: "/irc-chat", label: "IRC Chat" },
    ],
    ctaTitle: "Web Sohbeti Deneyin",
    ctaText: "Tarayicinizdan sohbet ortamini kesfetmek icin Zurna.TR giris alanindan ilerleyebilirsiniz.",
  },
  "tarayicidan-sohbet": {
    slug: "tarayicidan-sohbet",
    keyword: "tarayicidan sohbet",
    title: "Tarayicidan Sohbet",
    seoTitle: "Tarayicidan Sohbet | Program Kurmadan Sohbet - Zurna.TR",
    description:
      "Tarayicidan sohbet ile program kurmadan sohbet odalarini taniyin. Zurna.TR kolay giris, mobil uyum ve web sohbet deneyimi sunar.",
    heroBadge: "TARAYICIDAN SOHBET",
    heroTitle: "Tarayicidan Sohbet ile",
    heroAccent: "Kurulumsuz Baslayin",
    heroText:
      "Tarayicidan sohbet sayfasi, kullanicinin program indirmeden ve teknik ayarlarla ugrasmadan sohbet etmek istemesini hedefler.",
    stats: ["Kurulumsuz", "Hizli erisim", "Web tabanli", "Cihaz esnekligi"],
    sections: [
      {
        title: "Neden Tarayicidan Sohbet?",
        paragraphs: [
          "Bazı kullanicilar mIRC gibi programlari indirmek yerine dogrudan tarayicidan ilerlemek ister. Bu sayfa, web sohbetten daha acik bir sekilde programsiz baslangic niyetini yakalar.",
        ],
      },
      {
        title: "Teknik Engel Olmadan Muhabbet",
        paragraphs: [
          "Tarayicidan sohbet, ozellikle yeni kullanicilar icin daha dusuk teknik esik sunar. Sayfa, web sohbet, mobil sohbet ve sohbet girisi sayfalarina baglanarak baslangic yolunu sade tutar.",
        ],
      },
    ],
    cards: [
      { title: "Programsiz Baslangic", text: "Indirme veya kurulum istemeyen kullanicilari hedefler." },
      { title: "Yeni Kullanici Dostu", text: "Teknik bilgi gerektirmeyen bir sohbet yolculugu anlatir." },
      { title: "Web Baglantisi", text: "Web sohbet ve web chat sayfalarina dogal gecis saglar." },
    ],
    checklistTitle: "Tarayicidan Sohbet Icin Neler Onemli?",
    checklist: ["Kurulum gerektirmeme", "Web sohbet linki", "Mobil uyum", "Sohbet girisi", "mIRC alternatifi anlatimi"],
    faq: [
      { question: "Tarayicidan sohbet etmek mumkun mu?", answer: "Evet. Bu sayfa programsiz ve web tabanli sohbet niyetini anlatir." },
      { question: "Tarayicidan sohbet ile mIRC farkli mi?", answer: "mIRC masaustu istemci niyetidir; tarayicidan sohbet kurulum istemeyen kullanicilara yoneliktir." },
      { question: "Tarayicidan sohbet mobilde calisir mi?", answer: "Mobil tarayici deneyimi mobil sohbet sayfalariyla birlikte desteklenir." },
    ],
    related: [
      { href: "/web-sohbet", label: "Web Sohbet" },
      { href: "/web-chat", label: "Web Chat" },
      { href: "/sohbet-girisi", label: "Sohbet Girisi" },
      { href: "/mobil-sohbet", label: "Mobil Sohbet" },
    ],
    ctaTitle: "Tarayicidan Sohbete Gecin",
    ctaText: "Program kurmadan sohbet ortamini tanimak icin Zurna.TR web deneyimini kullanabilirsiniz.",
  },
  "samimi-sohbet": {
    slug: "samimi-sohbet",
    keyword: "samimi sohbet",
    title: "Samimi Sohbet",
    seoTitle: "Samimi Sohbet | Sicak ve Rahat Muhabbet - Zurna.TR",
    description:
      "Samimi sohbet arayanlar icin Zurna.TR, rahat muhabbet, arkadaslik sohbet ve Turkce sohbet deneyimini dogal bir dille sunar.",
    heroBadge: "SAMIMI SOHBET",
    heroTitle: "Samimi Sohbet ile",
    heroAccent: "Sicak Bir Ortam Bulun",
    heroText:
      "Samimi sohbet, resmi olmayan, yakin ve rahat bir konusma ortami arayan kullanicilarin duygusal niyetini hedefler.",
    stats: ["Sicak ton", "Rahat muhabbet", "Arkadaslik hissi", "Turkce akış"],
    sections: [
      {
        title: "Samimiyet Arama Niyeti",
        paragraphs: [
          "Samimi sohbet arayan kullanici, sadece aktif oda degil, kendini yabanci hissetmeyecegi bir ortam ister. Bu sayfa muhabbetten farkli olarak duygusal yakinlik ve sicak ton beklentisini merkeze alir.",
        ],
      },
      {
        title: "Rahat Konusma Ortami",
        paragraphs: [
          "Samimi bir ortamda ilk mesaj daha kolay atilir. Arkadaslik sohbet, muhabbet ve Turkce sohbet sayfalariyla kurulan baglar, bu sicak deneyimi site icinde yayar.",
        ],
      },
    ],
    cards: [
      { title: "Sicak Dil", text: "Kullanici kendini daha rahat ifade etmek ister." },
      { title: "Yabancilik Azalir", text: "Samimi ton yeni gelenlerin ortama alismasini kolaylastirir." },
      { title: "Muhabbet Baglantisi", text: "Muhabbet ve arkadaslik sayfalarina dogal gecis verir." },
    ],
    checklistTitle: "Samimi Sohbetin Isaretleri",
    checklist: ["Sicak anlatim", "Arkadaslik baglantisi", "Muhabbet gecisi", "Turkce sohbet iliskisi", "Seviyeli ortam"],
    faq: [
      { question: "Samimi sohbet ne demek?", answer: "Kullanıcinin kendini rahat hissettigi, sicak ve dogal bir muhabbet beklentisidir." },
      { question: "Samimi sohbet ile muhabbet ayni mi?", answer: "Muhabbet daha gunluk konusma, samimi sohbet daha sicak ortam hissini vurgular." },
      { question: "Samimi sohbet yeni kullanicilar icin uygun mu?", answer: "Evet. Daha yumusak ve rahat bir baslangic hissi verir." },
    ],
    related: [
      { href: "/muhabbet", label: "Muhabbet" },
      { href: "/arkadaslik-sohbet", label: "Arkadaslik Sohbet" },
      { href: "/seviyeli-sohbet", label: "Seviyeli Sohbet" },
      { href: "/turkce-sohbet", label: "Turkce Sohbet" },
    ],
    ctaTitle: "Samimi Sohbet Ortamini Taniyin",
    ctaText: "Sicak ve rahat bir muhabbet deneyimi icin Zurna.TR sohbet sayfalarindan ilerleyebilirsiniz.",
  },
  "yeni-sohbet": {
    slug: "yeni-sohbet",
    keyword: "yeni sohbet",
    title: "Yeni Sohbet",
    seoTitle: "Yeni Sohbet | Guncel ve Aktif Sohbet Deneyimi - Zurna.TR",
    description:
      "Yeni sohbet arayanlar icin Zurna.TR, guncel sohbet ortami, aktif odalar, mobil uyum ve kolay giris deneyimini anlatir.",
    heroBadge: "YENI SOHBET",
    heroTitle: "Yeni Sohbet ile",
    heroAccent: "Guncel Ortami Kesfedin",
    heroText:
      "Yeni sohbet sayfasi, eski veya durgun odalar yerine guncel, aktif ve kesfedilebilir bir sohbet deneyimi arayan kullanicilara yoneliktir.",
    stats: ["Guncel arayis", "Aktif ortam", "Kesif niyeti", "Kolay baslangic"],
    sections: [
      {
        title: "Yeni Sohbet Aramasi Neyi Gosterir?",
        paragraphs: [
          "Yeni sohbet sorgusu, kullanicinin farkli ve guncel bir ortam aradigini gosterir. Bu sayfa genel sohbetten ayrilarak kesif, tazelik ve aktiflik beklentisini hedefler.",
        ],
      },
      {
        title: "Guncel Ortama Ilk Adim",
        paragraphs: [
          "Kullanici yeni bir sohbet deneyimi ararken kolay giris, mobil uyum ve samimi ortam sinyalleri bekler. Yeni sohbet sayfasi sohbet girisi ve kaliteli sohbet sayfalariyla bu beklentiyi destekler.",
        ],
      },
    ],
    cards: [
      { title: "Kesif Duygusu", text: "Kullanici daha once denemedigi bir ortam arar." },
      { title: "Guncel Deneyim", text: "Aktiflik ve tazelik hissi on plana cikar." },
      { title: "Baslangic Linkleri", text: "Sohbet girisi ve genel sohbet sayfalariyla desteklenir." },
    ],
    checklistTitle: "Yeni Sohbet Sayfasinda Odaklar",
    checklist: ["Guncellik hissi", "Aktif oda beklentisi", "Kolay giris", "Genel sohbet baglantisi", "Kaliteli sohbet gecisi"],
    faq: [
      { question: "Yeni sohbet ne anlama gelir?", answer: "Kullanıcinin guncel, aktif ve kesfedilebilir bir sohbet deneyimi aramasini ifade eder." },
      { question: "Yeni sohbet ile genel sohbet farkli mi?", answer: "Genel sohbet konu esnekligine, yeni sohbet tazelik ve kesif niyetine odaklanir." },
      { question: "Yeni sohbet mobilde kesfedilebilir mi?", answer: "Evet. Mobil uyum bu tur kesif odakli aramalarda onemlidir." },
    ],
    related: [
      { href: "/genel-sohbet", label: "Genel Sohbet" },
      { href: "/sohbet-girisi", label: "Sohbet Girisi" },
      { href: "/kaliteli-sohbet", label: "Kaliteli Sohbet" },
      { href: "/canli-sohbet", label: "Canli Sohbet" },
    ],
    ctaTitle: "Yeni Sohbet Deneyimini Kesfedin",
    ctaText: "Guncel ve aktif bir sohbet ortamini tanimak icin Zurna.TR sayfalarinda ilerleyebilirsiniz.",
  },
  "muhabbet-odalari": {
    slug: "muhabbet-odalari",
    keyword: "muhabbet odalari",
    title: "Muhabbet Odalari",
    seoTitle: "Muhabbet Odalari | Samimi Konusma Alanlari - Zurna.TR",
    description:
      "Muhabbet odalari arayanlar icin Zurna.TR, rahat konusma, samimi sohbet, genel odalar ve mobil uyumlu muhabbet deneyimini anlatir.",
    heroBadge: "MUHABBET ODALARI",
    heroTitle: "Muhabbet Odalari ile",
    heroAccent: "Rahatca Konusun",
    heroText:
      "Muhabbet odalari, kullanicinin resmi olmayan, sicak ve konuya gore ayrilabilen konusma alanlari aradigi oda niyetini karsilar.",
    stats: ["Oda mantigi", "Rahat konular", "Samimi ortam", "Genel muhabbet"],
    sections: [
      {
        title: "Muhabbet Odalari Neden Ayridir?",
        paragraphs: [
          "Muhabbet sayfasi genel kavrami anlatirken, muhabbet odalari sayfasi kullanicinin belirli alanlarda konusmak istedigini gosterir. Bu niyet sohbet odalarina benzer ama daha rahat ve gunluk konulara odaklanir.",
        ],
      },
      {
        title: "Konuya Gore Muhabbet",
        paragraphs: [
          "Kimi kullanici genel odada selamlasmak, kimi arkadaslik odakli alanda tanismak ister. Bu sayfa genel sohbet, samimi sohbet ve canli muhabbet sayfalarina dogal gecis verir.",
        ],
      },
    ],
    cards: [
      { title: "Oda Odakli Muhabbet", text: "Kullanici belirli bir konusma alanina katilmak ister." },
      { title: "Rahat Ton", text: "Gunluk ve samimi konulara uygun bir deneyim anlatir." },
      { title: "Kategori Gecisi", text: "Sohbet odalari ve muhabbet sayfalarini birbirine baglar." },
    ],
    checklistTitle: "Muhabbet Odalari Icin Odaklar",
    checklist: ["Rahat oda niyeti", "Genel sohbet baglantisi", "Samimi sohbet gecisi", "Canli muhabbet iliskisi", "Mobil uyum"],
    faq: [
      { question: "Muhabbet odalari nedir?", answer: "Gunluk ve rahat konular etrafinda kullanicilarin bulustugu sohbet alanlarini ifade eder." },
      { question: "Muhabbet odalari ile sohbet odalari farkli mi?", answer: "Sohbet odalari daha genis kategori, muhabbet odalari daha samimi konusma tonu vurgular." },
      { question: "Muhabbet odalari yeni kullanicilar icin uygun mu?", answer: "Evet. Rahat konular sayesinde ilk mesaj atmak daha kolay olabilir." },
    ],
    related: [
      { href: "/muhabbet", label: "Muhabbet" },
      { href: "/canli-muhabbet", label: "Canli Muhabbet" },
      { href: "/genel-sohbet", label: "Genel Sohbet" },
      { href: "/samimi-sohbet", label: "Samimi Sohbet" },
    ],
    ctaTitle: "Muhabbet Odalarini Kesfedin",
    ctaText: "Rahat ve samimi konusma alanlarina ulasmak icin Zurna.TR sohbet girisini kullanabilirsiniz.",
  },
  "canli-muhabbet": {
    slug: "canli-muhabbet",
    keyword: "canli muhabbet",
    title: "Canli Muhabbet",
    seoTitle: "Canli Muhabbet | Anlik ve Samimi Konusmalar - Zurna.TR",
    description:
      "Canli muhabbet arayanlar icin Zurna.TR, anlik konusma, samimi ortam, aktif odalar ve mobil uyumlu sohbet deneyimi sunar.",
    heroBadge: "CANLI MUHABBET",
    heroTitle: "Canli Muhabbet ile",
    heroAccent: "Sicak Akisa Katilin",
    heroText:
      "Canli muhabbet, aktiflik beklentisini daha samimi ve gunluk bir konusma diliyle birlestiren kullanici niyetidir.",
    stats: ["Anlik akis", "Samimi ton", "Aktif ortam", "Rahat konusma"],
    sections: [
      {
        title: "Canli Muhabbet Neyi Hedefler?",
        paragraphs: [
          "Canli sohbet aktifligi, muhabbet ise samimi dili vurgular. Canli muhabbet sayfasi bu iki niyeti bir araya getirir ve kullanicinin hem hareketli hem de sicak bir ortam aramasina yanit verir.",
        ],
      },
      {
        title: "Hareketli Ama Rahat Bir Ortam",
        paragraphs: [
          "Kullanici cevap beklemeden konusmak, ama bunu sert veya resmi bir chat temposunda degil, daha dogal bir muhabbet havasinda yapmak ister. Sayfa sesli sohbet, muhabbet odalari ve samimi sohbet sayfalarina baglanir.",
        ],
      },
    ],
    cards: [
      { title: "Canli Akis", text: "Aktif kullanici hissini one cikarir." },
      { title: "Muhabbet Tonu", text: "Canli chatten daha sicak ve gunluk bir dil hedefler." },
      { title: "Dogal Gecis", text: "Samimi sohbet ve sesli sohbet sayfalariyla uyumludur." },
    ],
    checklistTitle: "Canli Muhabbet Odaklari",
    checklist: ["Anlik konusma", "Samimi ton", "Muhabbet odalari baglantisi", "Sesli sohbet gecisi", "Mobil erisim"],
    faq: [
      { question: "Canli muhabbet ne demek?", answer: "Aktif ve anlik bir sohbet akisini samimi konusma diliyle birlestiren niyettir." },
      { question: "Canli muhabbet ile canli sohbet ayni mi?", answer: "Canli sohbet genel aktifligi, canli muhabbet daha rahat ve samimi konusma havasini vurgular." },
      { question: "Canli muhabbet hangi sayfalarla iliskili?", answer: "Muhabbet odalari, samimi sohbet ve sesli sohbet sayfalariyla dogal bag kurar." },
    ],
    related: [
      { href: "/muhabbet-odalari", label: "Muhabbet Odalari" },
      { href: "/samimi-sohbet", label: "Samimi Sohbet" },
      { href: "/sesli-sohbet", label: "Sesli Sohbet" },
      { href: "/canli-sohbet", label: "Canli Sohbet" },
    ],
    ctaTitle: "Canli Muhabbete Katilin",
    ctaText: "Aktif ve samimi bir konusma akisini kesfetmek icin Zurna.TR sohbet alanlarina gecis yapabilirsiniz.",
  },
  "arkadaslik-chat": {
    slug: "arkadaslik-chat",
    keyword: "arkadaslik chat",
    title: "Arkadaslik Chat",
    seoTitle: "Arkadaslik Chat | Chat ile Yeni Insanlar Tani - Zurna.TR",
    description:
      "Arkadaslik chat arayanlar icin Zurna.TR, yeni insanlarla yazisma, mobil chat ve tanisma odakli chat deneyimini anlatir.",
    heroBadge: "ARKADASLIK CHAT",
    heroTitle: "Arkadaslik Chat ile",
    heroAccent: "Yeni Kisilerle Yazisin",
    heroText:
      "Arkadaslik chat, tanisma istegini chat odalarinin hizli yazisma diliyle birlestiren arama niyetidir.",
    stats: ["Tanisma", "Chat yazismasi", "Yeni kisiler", "Mobil chat"],
    sections: [
      {
        title: "Arkadaslik Chat Neden Gerekli?",
        paragraphs: [
          "Arkadaslik sohbet daha genis muhabbet ve dostluk diline odaklanirken, arkadaslik chat daha kisa mesajlarla tanisma ve yazisma beklentisini hedefler.",
        ],
      },
      {
        title: "Chat ile Tanisma Akisi",
        paragraphs: [
          "Kullanici once kisa mesajlarla ortami yoklar, sonra daha samimi bir muhabbete gecebilir. Bu sayfa tanisma sohbet, anonim chat ve mobil chat sayfalariyla dogal bag kurar.",
        ],
      },
    ],
    cards: [
      { title: "Tanisma Odakli Chat", text: "Yeni insanlarla yazisma beklentisini karsilar." },
      { title: "Kisa Mesaj Temposu", text: "Arkadaslik sohbetten daha chat agirlikli bir deneyim sunar." },
      { title: "Rahat Baslangic", text: "Anonim chat ve kayitsiz chat sayfalarina gecis verir." },
    ],
    checklistTitle: "Arkadaslik Chat Icin One Cikanlar",
    checklist: ["Yeni kisilerle yazisma", "Tanisma sohbet baglantisi", "Mobil chat gecisi", "Anonim chat destegi", "Samimi sohbet iliskisi"],
    faq: [
      { question: "Arkadaslik chat ne anlama gelir?", answer: "Chat yoluyla yeni insanlarla tanisma ve yazisma niyetini ifade eder." },
      { question: "Arkadaslik chat ile arkadaslik sohbet farkli mi?", answer: "Arkadaslik chat kisa yazisma temposuna, arkadaslik sohbet daha genis muhabbete odaklanir." },
      { question: "Arkadaslik chat anonim baslayabilir mi?", answer: "Anonim chat sayfasi rumuzla baslama beklentisini destekler." },
    ],
    related: [
      { href: "/arkadaslik-sohbet", label: "Arkadaslik Sohbet" },
      { href: "/tanisma-sohbet", label: "Tanisma Sohbet" },
      { href: "/anonim-chat", label: "Anonim Chat" },
      { href: "/mobil-chat", label: "Mobil Chat" },
    ],
    ctaTitle: "Arkadaslik Chat Deneyimini Taniyin",
    ctaText: "Yeni insanlarla yazismaya baslamak icin Zurna.TR chat sayfalarinda ilerleyebilirsiniz.",
  },
  "tanisma-sohbet": {
    slug: "tanisma-sohbet",
    keyword: "tanisma sohbet",
    title: "Tanisma Sohbet",
    seoTitle: "Tanisma Sohbet | Yeni Insanlarla Samimi Muhabbet - Zurna.TR",
    description:
      "Tanisma sohbet arayanlar icin Zurna.TR, yeni insanlarla konusma, arkadaslik sohbet ve samimi muhabbet deneyimini anlatir.",
    heroBadge: "TANISMA SOHBET",
    heroTitle: "Tanisma Sohbet ile",
    heroAccent: "Yeni Baglar Kurun",
    heroText:
      "Tanisma sohbet sayfasi, kullanicinin yeni insanlarla ilk temasi kurmak ve sohbeti doğal sekilde baslatmak istemesine odaklanir.",
    stats: ["Ilk temas", "Yeni kisiler", "Samimi akis", "Arkadaslik potansiyeli"],
    sections: [
      {
        title: "Tanisma Sohbet Niyetini Ayirmak",
        paragraphs: [
          "Arkadaslik sohbet daha uzun vadeli dostluk beklentisini tasirken, tanisma sohbet ilk mesaj ve ilk temas asamasini hedefler. Bu sayfa, kullanicinin yeni kisilerle nasil rahat baslayabilecegini anlatir.",
        ],
      },
      {
        title: "Ilk Mesaji Kolaylastirmak",
        paragraphs: [
          "Tanisma surecinde konu acmak, rumuzla baslamak ve samimi ama seviyeli bir dil kullanmak onemlidir. Sayfa arkadaslik chat, samimi sohbet ve anonim sohbet linkleriyle desteklenir.",
        ],
      },
    ],
    cards: [
      { title: "Ilk Mesaj", text: "Kullanici yeni biriyle konusmaya baslama cesareti arar." },
      { title: "Dogal Tanisma", text: "Zorlama olmayan, samimi bir sohbet akisi hedeflenir." },
      { title: "Dostluk Koprusu", text: "Dostluk sohbet ve arkadaslik sayfalariyla ilerleme saglar." },
    ],
    checklistTitle: "Tanisma Sohbet Unsurlari",
    checklist: ["Ilk mesaj kolayligi", "Arkadaslik chat baglantisi", "Samimi sohbet destegi", "Anonim baslangic", "Seviyeli ton"],
    faq: [
      { question: "Tanisma sohbet kimler icin uygun?", answer: "Yeni insanlarla ilk kez konusmak ve sohbeti dogal baslatmak isteyenler icin uygundur." },
      { question: "Tanisma sohbet ile arkadaslik sohbet farkli mi?", answer: "Tanisma sohbet ilk temasa, arkadaslik sohbet daha uzun sureli bag kurmaya odaklanir." },
      { question: "Tanisma sohbet anonim olabilir mi?", answer: "Anonim sohbet sayfasi rumuzla rahat baslangic icin destekleyici bir yoldur." },
    ],
    related: [
      { href: "/arkadaslik-chat", label: "Arkadaslik Chat" },
      { href: "/arkadaslik-sohbet", label: "Arkadaslik Sohbet" },
      { href: "/dostluk-sohbet", label: "Dostluk Sohbet" },
      { href: "/samimi-sohbet", label: "Samimi Sohbet" },
    ],
    ctaTitle: "Tanisma Sohbetine Baslayin",
    ctaText: "Yeni insanlarla dogal bir baslangic yapmak icin Zurna.TR sohbet alanlarini kullanabilirsiniz.",
  },
  "dostluk-sohbet": {
    slug: "dostluk-sohbet",
    keyword: "dostluk sohbet",
    title: "Dostluk Sohbet",
    seoTitle: "Dostluk Sohbet | Kalici Arkadasliklar Icin Muhabbet - Zurna.TR",
    description:
      "Dostluk sohbet arayanlar icin Zurna.TR, uzun soluklu arkadaslik, samimi muhabbet ve seviyeli sohbet deneyimini anlatir.",
    heroBadge: "DOSTLUK SOHBET",
    heroTitle: "Dostluk Sohbet ile",
    heroAccent: "Kalici Baglar Kurun",
    heroText:
      "Dostluk sohbet, gecici yazismadan cok daha anlamli ve uzun soluklu iletisim arayan kullanicilarin niyetidir.",
    stats: ["Kalici bag", "Samimiyet", "Seviyeli iletisim", "Arkadaslik"],
    sections: [
      {
        title: "Dostluk Sohbetin Farki",
        paragraphs: [
          "Tanisma sohbet ilk temasa, arkadaslik sohbet yeni insanlarla bulusmaya odaklanirken, dostluk sohbet daha kalici ve guven veren bir bag beklentisini hedefler.",
        ],
      },
      {
        title: "Uzun Soluklu Muhabbet",
        paragraphs: [
          "Dostluk kurmak icin samimi dil, seviyeli iletisim ve tekrar konusma istegi gerekir. Bu sayfa samimi sohbet, seviyeli sohbet ve arkadaslik sohbet sayfalarina dogal gecis saglar.",
        ],
      },
    ],
    cards: [
      { title: "Kalicilik Niyeti", text: "Kullanici sadece mesaj degil, surekli iletisim arar." },
      { title: "Guvenli Ton", text: "Dostluk beklentisi seviyeli ve samimi bir dille desteklenir." },
      { title: "Arkadasliktan Derin", text: "Arkadaslik sohbetten daha uzun vadeli bag hissi tasir." },
    ],
    checklistTitle: "Dostluk Sohbet Icin Gerekli Ortam",
    checklist: ["Samimi iletisim", "Seviyeli ton", "Arkadaslik sohbet baglantisi", "Tanisma sohbet gecisi", "Guvenli sohbet destegi"],
    faq: [
      { question: "Dostluk sohbet neyi hedefler?", answer: "Yeni insanlarla daha kalici ve guven veren bir iletisim kurma niyetini hedefler." },
      { question: "Dostluk sohbet ile tanisma sohbet ayni mi?", answer: "Tanisma ilk temasa, dostluk sohbet daha uzun soluklu bag kurmaya odaklanir." },
      { question: "Dostluk sohbet icin seviyeli ortam onemli mi?", answer: "Evet. Kalici iletisim icin saygili ve samimi bir dil onemlidir." },
    ],
    related: [
      { href: "/tanisma-sohbet", label: "Tanisma Sohbet" },
      { href: "/arkadaslik-sohbet", label: "Arkadaslik Sohbet" },
      { href: "/samimi-sohbet", label: "Samimi Sohbet" },
      { href: "/seviyeli-sohbet", label: "Seviyeli Sohbet" },
    ],
    ctaTitle: "Dostluk Sohbetini Kesfedin",
    ctaText: "Daha kalici ve samimi baglar kurabileceginiz sohbet yollarini Zurna.TR uzerinden inceleyebilirsiniz.",
  },
  "hizli-sohbet": {
    slug: "hizli-sohbet",
    keyword: "hizli sohbet",
    title: "Hizli Sohbet",
    seoTitle: "Hizli Sohbet | Beklemeden Sohbete Basla - Zurna.TR",
    description:
      "Hizli sohbet arayanlar icin Zurna.TR, kolay giris, kisa karar akisi, mobil uyum ve aktif sohbet alanlarini anlatir.",
    heroBadge: "HIZLI SOHBET",
    heroTitle: "Hizli Sohbet ile",
    heroAccent: "Zaman Kaybetmeyin",
    heroText:
      "Hizli sohbet, kullanicinin beklemeden, uzun adimlara takilmadan ve mobilde kolayca sohbete baslamak istemesini hedefler.",
    stats: ["Az adim", "Hizli giris", "Mobil karar", "Aksiyon odakli"],
    sections: [
      {
        title: "Hizli Sohbet Neden Donusum Odaklidir?",
        paragraphs: [
          "Bu sorgu kullanicinin sabirsiz degil, pratik oldugunu gosterir. Kisa aciklama, belirgin CTA ve sohbet girisi linki sayfanin temel rolunu olusturur.",
        ],
      },
      {
        title: "Hiz ve Kalite Dengesi",
        paragraphs: [
          "Hizli baslamak, kalitesiz deneyim anlamina gelmemelidir. Sayfa kaliteli sohbet, sohbet girisi ve 7/24 sohbet sayfalarina baglanarak pratik ama guven veren bir yol sunar.",
        ],
      },
    ],
    cards: [
      { title: "Kisa Yol", text: "Ziyaretciyi gereksiz karar yukuyle yormaz." },
      { title: "Mobil Uygunluk", text: "Telefonla gelen kullanici icin hiz kritik hale gelir." },
      { title: "Giris Baglantisi", text: "Sohbet girisi ve chat girisi sayfalariyla birlikte calisir." },
    ],
    checklistTitle: "Hizli Sohbet Unsurlari",
    checklist: ["Kisa CTA", "Sohbet girisi", "Mobil uyum", "7/24 sohbet baglantisi", "Kalite dengesi"],
    faq: [
      { question: "Hizli sohbet ne demek?", answer: "Kullanicinin uzun adimlara takilmadan sohbet ortamina ulasma istegini ifade eder." },
      { question: "Hizli sohbet ile sohbet girisi ayni mi?", answer: "Sohbet girisi baslama kapisini, hizli sohbet ise az adim ve zaman kazanma beklentisini vurgular." },
      { question: "Hizli sohbet kaliteden odun verir mi?", answer: "Vermez; kaliteli sohbet ve guvenli sohbet sayfalari bu dengeyi destekler." },
    ],
    related: [
      { href: "/sohbet-girisi", label: "Sohbet Girisi" },
      { href: "/7-24-sohbet", label: "7/24 Sohbet" },
      { href: "/kaliteli-sohbet", label: "Kaliteli Sohbet" },
      { href: "/chat-girisi", label: "Chat Girisi" },
    ],
    ctaTitle: "Hizli Sohbete Gecin",
    ctaText: "Zaman kaybetmeden sohbet ortamini tanimak icin Zurna.TR giris alanini kullanabilirsiniz.",
  },
  "web-chat": {
    slug: "web-chat",
    keyword: "web chat",
    title: "Web Chat",
    seoTitle: "Web Chat | Tarayicidan Chat Odalari - Zurna.TR",
    description:
      "Web chat ile tarayici uzerinden chat odalarini kesfedin. Zurna.TR programsiz, mobil uyumlu ve anlik yazisma odakli deneyim sunar.",
    heroBadge: "WEB CHAT",
    heroTitle: "Web Chat ile",
    heroAccent: "Tarayicidan Yazisin",
    heroText:
      "Web chat, program kurmadan chat odalarina tarayici uzerinden ulasmak isteyen yazisma odakli kullanicilari hedefler.",
    stats: ["Web tabanli", "Chat odakli", "Programsiz", "Mobil destek"],
    sections: [
      {
        title: "Web Chat ve Web Sohbet Ayrimi",
        paragraphs: [
          "Web sohbet genel muhabbet deneyimini anlatirken, web chat daha kisa yazisma ve chat odasi diline odaklanir. Bu sayfa programsiz chat niyetini netlestirir.",
        ],
      },
      {
        title: "Tarayicidan Chat Deneyimi",
        paragraphs: [
          "Kullanici indirme yapmadan yazismak ister. Web chat sayfasi chat girisi, mobil chat ve tarayicidan sohbet sayfalarina baglanarak teknik bariyeri azaltir.",
        ],
      },
    ],
    cards: [
      { title: "Programsiz Chat", text: "Indirme yapmadan chat odalarina ulasma niyetini hedefler." },
      { title: "Web Uzerinden Yazisma", text: "Tarayici deneyimini chat odakli anlatir." },
      { title: "Mobil Uyumluluk", text: "Telefon tarayicisindan gelen kullaniciyi de kapsar." },
    ],
    checklistTitle: "Web Chat Icin Odaklar",
    checklist: ["Programsiz chat", "Tarayicidan sohbet baglantisi", "Chat girisi", "Mobil chat gecisi", "Web sohbet ayrimi"],
    faq: [
      { question: "Web chat nedir?", answer: "Tarayici uzerinden chat odalarina ulasma ve yazisma niyetini anlatir." },
      { question: "Web chat ile web sohbet farkli mi?", answer: "Web chat yazisma ve chat odalarina, web sohbet daha genis muhabbet deneyimine odaklanir." },
      { question: "Web chat icin uygulama gerekir mi?", answer: "Hayir. Sayfa programsiz web deneyimi niyetini karsilar." },
    ],
    related: [
      { href: "/web-sohbet", label: "Web Sohbet" },
      { href: "/tarayicidan-sohbet", label: "Tarayicidan Sohbet" },
      { href: "/chat-girisi", label: "Chat Girisi" },
      { href: "/mobil-chat", label: "Mobil Chat" },
    ],
    ctaTitle: "Web Chat Deneyimini Acin",
    ctaText: "Tarayicidan chat odalarini kesfetmek icin Zurna.TR web chat yolunu kullanabilirsiniz.",
  },
  "android-sohbet": {
    slug: "android-sohbet",
    keyword: "android sohbet",
    title: "Android Sohbet",
    seoTitle: "Android Sohbet | Telefondan Mobil Sohbet Deneyimi - Zurna.TR",
    description:
      "Android sohbet arayanlar icin Zurna.TR, Android telefondan sohbet, mobil uyum, tarayicidan giris ve hizli muhabbet deneyimini anlatir.",
    heroBadge: "ANDROID SOHBET",
    heroTitle: "Android Sohbet ile",
    heroAccent: "Telefondan Baglanin",
    heroText:
      "Android sohbet sayfasi, Android telefon kullanan ziyaretcinin mobil uyumlu sohbet deneyimi aramasini hedefler.",
    stats: ["Android cihaz", "Mobil tarayici", "Hizli giris", "Dokunmatik uyum"],
    sections: [
      {
        title: "Android Sohbet Neden Ayrı Bir Niyet?",
        paragraphs: [
          "Mobil sohbet genel cihazlari kapsar; Android sohbet ise Android telefon kullanan kisinin daha ozgun cihaz niyetini yakalar. Sayfa, telefondan sohbet ve mobil sohbet sayfalariyla birlikte calisir.",
        ],
      },
      {
        title: "Android Telefonda Sohbet Akisi",
        paragraphs: [
          "Android kullanicilari tarayicidan hizli acilan, okunabilir ve kolay tiklanabilir bir deneyim bekler. Bu sayfa mobil chat, web sohbet ve hizli sohbet linkleriyle cihaz yolculugunu destekler.",
        ],
      },
    ],
    cards: [
      { title: "Android Odakli", text: "Mobil sohbetin Android cihaz segmentini hedefler." },
      { title: "Tarayici Uyumlu", text: "Program zorunlulugu olmadan web deneyimine baglanir." },
      { title: "Hizli Mobil Akis", text: "Kisa karar ve kolay giris beklentisini destekler." },
    ],
    checklistTitle: "Android Sohbet Icin Gerekenler",
    checklist: ["Mobil uyum", "Telefondan sohbet baglantisi", "Web sohbet gecisi", "Hizli sohbet destegi", "Mobil chat iliskisi"],
    faq: [
      { question: "Android sohbet nedir?", answer: "Android telefon uzerinden sohbet deneyimi arayan kullanicilarin cihaz odakli niyetidir." },
      { question: "Android sohbet icin uygulama gerekir mi?", answer: "Tarayici uzerinden web sohbet deneyimi de kullanilabilir; uygulama zorunlulugu vurgulanmaz." },
      { question: "Android sohbet ile mobil sohbet farkli mi?", answer: "Mobil sohbet tum cihazlari kapsar; Android sohbet Android kullanicilarina ozellesir." },
    ],
    related: [
      { href: "/mobil-sohbet", label: "Mobil Sohbet" },
      { href: "/mobil-chat", label: "Mobil Chat" },
      { href: "/web-sohbet", label: "Web Sohbet" },
      { href: "/hizli-sohbet", label: "Hizli Sohbet" },
    ],
    ctaTitle: "Android Sohbeti Kesfedin",
    ctaText: "Android telefonunuzdan sohbet ortamini tanimak icin Zurna.TR mobil uyumlu sayfalarini kullanabilirsiniz.",
  },
  "iphone-sohbet": {
    slug: "iphone-sohbet",
    keyword: "iphone sohbet",
    title: "iPhone Sohbet",
    seoTitle: "iPhone Sohbet | iOS Cihazdan Mobil Sohbet - Zurna.TR",
    description:
      "iPhone sohbet arayanlar icin Zurna.TR, iOS cihazdan sohbet, mobil tarayici uyumu, kolay giris ve samimi muhabbet deneyimini anlatir.",
    heroBadge: "IPHONE SOHBET",
    heroTitle: "iPhone Sohbet ile",
    heroAccent: "iOS Uzerinden Baglanin",
    heroText:
      "iPhone sohbet sayfasi, iOS cihaz kullanan ziyaretcinin mobilde rahat ve hizli sohbet deneyimi aramasini hedefler.",
    stats: ["iOS cihaz", "Mobil Safari", "Kolay okuma", "Hizli giris"],
    sections: [
      {
        title: "iPhone Sohbet Niyeti",
        paragraphs: [
          "iPhone sohbet, mobil sohbetin iOS cihazlara ozellesen arama bicimidir. Kullanici telefonundan sayfanin duzgun acilmasini, butonlarin rahat tiklanmasini ve sohbet girisinin kolay bulunmasini bekler.",
        ],
      },
      {
        title: "iOS Kullanıcisi Icin Rahat Deneyim",
        paragraphs: [
          "iPhone kullanicilari web sohbet, mobil sohbet ve tarayicidan sohbet sayfalariyla dogal bir yolculuk izleyebilir. Bu sayfa cihaz odakli beklentiyi marka ekosistemine baglar.",
        ],
      },
    ],
    cards: [
      { title: "iOS Odakli", text: "Mobil sohbet aramasini iPhone kullanicilari icin netlestirir." },
      { title: "Tarayici Deneyimi", text: "Safari ve mobil web kullanimi beklentisini destekler." },
      { title: "Kolay Gecis", text: "Mobil sohbet ve web sohbet sayfalarina dogal link verir." },
    ],
    checklistTitle: "iPhone Sohbet Icin Odaklar",
    checklist: ["iOS cihaz niyeti", "Mobil sohbet baglantisi", "Tarayicidan sohbet gecisi", "Web chat iliskisi", "Hizli giris"],
    faq: [
      { question: "iPhone sohbet ne demek?", answer: "iPhone veya iOS cihaz uzerinden sohbet deneyimi arama niyetini ifade eder." },
      { question: "iPhone sohbet icin uygulama gerekir mi?", answer: "Sayfa, mobil tarayici ve web sohbet deneyimini one cikarir; uygulama zorunlulugu anlatmaz." },
      { question: "iPhone sohbet Android sohbetten farkli mi?", answer: "Ikisi de mobil niyettir; biri iOS, digeri Android cihaz kullanicisini hedefler." },
    ],
    related: [
      { href: "/mobil-sohbet", label: "Mobil Sohbet" },
      { href: "/web-sohbet", label: "Web Sohbet" },
      { href: "/tarayicidan-sohbet", label: "Tarayicidan Sohbet" },
      { href: "/android-sohbet", label: "Android Sohbet" },
    ],
    ctaTitle: "iPhone Sohbet Yolunu Inceleyin",
    ctaText: "iOS cihazinizdan sohbet ortamina ulasmak icin Zurna.TR mobil uyumlu sayfalarini kesfedebilirsiniz.",
  },
};

export function getSohbetPage(slug: string) {
  const page = sohbetPages[slug];

  if (!page) {
    throw new Error(`Sohbet SEO page not found: ${slug}`);
  }

  return page;
}

export function buildSohbetMetadata(page: SohbetSeoPage): Metadata {
  const canonical = `${siteUrl}/${page.slug}`;
  const image = `${siteUrl}/zurna-logo-cropped.png`;

  return {
    title: page.seoTitle,
    description: page.description,
    keywords: [
      page.keyword,
      `${page.keyword} odalari`,
      `zurna ${page.keyword}`,
      "zurna sohbet",
      "mobil sohbet",
      "irc sohbet",
      "chat odalari",
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.description,
      url: canonical,
      siteName: "Zurna.TR",
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: image,
          alt: `${page.title} - Zurna.TR`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.description,
      images: [image],
    },
  };
}

export function buildPageSchema(page: SohbetSeoPage) {
  const url = `${siteUrl}/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.seoTitle,
        description: page.description,
        inLanguage: "tr-TR",
        isPartOf: {
          "@type": "WebSite",
          name: "Zurna.TR",
          url: siteUrl,
        },
        about: {
          "@type": "Thing",
          name: page.keyword,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Anasayfa",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.title,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
