import type { Metadata } from "next";
import { getLatestBlogPosts } from "@/lib/blogPosts";
import { cityPages } from "@/lib/cityPages";
import { siteUrl } from "@/lib/sohbetSeoPages";

export type CountryLinkGroup = {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
};

export type CountryPage = {
  country: string;
  slug: string;
  region: string;
  audience: string;
  culture: string;
  diaspora: string;
  dailyLife: string;
  title: string;
  seoTitle: string;
  description: string;
  summary: string;
  heroTitle: string;
  heroText: string;
  highlights: string[];
  contentSections: {
    title: string;
    intro: string;
    paragraphs: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedGroups: CountryLinkGroup[];
};

type CountrySeed = {
  country: string;
  slug: string;
  region: string;
  audience: string;
  culture: string;
  diaspora: string;
  dailyLife: string;
  angle: string;
};

const countrySeeds: CountrySeed[] = [
  { country: "Türkiye", slug: "turkiye-sohbet", region: "Anadolu ve Trakya", audience: "Türkiye'nin farklı şehirlerinden katılan kullanıcılar", culture: "memleket muhabbeti, şehir gündemi ve sıcak Türkçe sohbet dili", diaspora: "yurt içindeki şehir değişiklikleri ve gurbetten memlekete bağlanma isteği", dailyLife: "iş, okul, aile, müzik, futbol ve güncel internet sohbeti", angle: "yerel ama herkese açık bir sohbet başlangıcı" },
  { country: "Almanya", slug: "almanya-sohbet", region: "Batı Avrupa", audience: "Almanya'da yaşayan Türkler, öğrenciler ve gurbetçi aileler", culture: "düzenli şehir hayatı, iş temposu ve güçlü Türk toplulukları", diaspora: "kuşaklar arası gurbet deneyimi ve memleket özlemi", dailyLife: "Berlin, Köln, Hamburg, vardiya düzeni, okul ve hafta sonu buluşmaları", angle: "gurbet ile memleket arasında köprü kuran sohbet" },
  { country: "Hollanda", slug: "hollanda-sohbet", region: "Batı Avrupa", audience: "Hollanda'daki Türk toplulukları ve yeni çevre arayanlar", culture: "bisikletli şehir hayatı, açık iletişim ve çok kültürlü mahalleler", diaspora: "Rotterdam ve Amsterdam çevresindeki Türkçe konuşma ihtiyacı", dailyLife: "kanallar, iş çıkışı sohbetleri, eğitim ve aile ziyaretleri", angle: "rahat, pratik ve samimi çevrim içi tanışma" },
  { country: "Belçika", slug: "belcika-sohbet", region: "Batı Avrupa", audience: "Belçika'da yaşayan Türkler ve Avrupa içinde bağlantı arayanlar", culture: "Brüksel'in çok dilli yapısı ve sakin mahalle sohbetleri", diaspora: "Avrupa merkezinde Türkçe muhabbeti canlı tutma isteği", dailyLife: "Brüksel, Anvers, Gent, iş hayatı ve hafta sonu aile ziyaretleri", angle: "çok dilli ortamda Türkçe sohbet konforu" },
  { country: "Fransa", slug: "fransa-sohbet", region: "Batı Avrupa", audience: "Fransa'daki Türkler, öğrenciler ve yeni arkadaşlık arayan kullanıcılar", culture: "şehirli yaşam, kafe kültürü ve güçlü gurbetçi bağları", diaspora: "Paris, Lyon ve Strasbourg hattında memleketle bağ kurma ihtiyacı", dailyLife: "üniversite, çalışma hayatı, futbol, kültür ve günlük planlar", angle: "Fransa temposunda sıcak Türkçe sohbet" },
  { country: "İngiltere", slug: "ingiltere-sohbet", region: "Kuzeybatı Avrupa", audience: "İngiltere'de yaşayan Türkler, öğrenciler ve çalışanlar", culture: "Londra merkezli çok kültürlü yaşam ve hızlı şehir ritmi", diaspora: "uzakta yaşayanların Türkçe konuşarak rahatlama ihtiyacı", dailyLife: "Londra, Manchester, eğitim, iş görüşmeleri ve yağmurlu gün muhabbeti", angle: "kalabalık şehir içinde tanıdık bir sohbet alanı" },
  { country: "Amerika", slug: "amerika-sohbet", region: "Kuzey Amerika", audience: "Amerika'da yaşayan Türkler, öğrenciler ve yeni göçmenler", culture: "geniş mesafeler, eyalet farkları ve hareketli dijital topluluklar", diaspora: "farklı saat dilimlerinde memlekete yakın kalma isteği", dailyLife: "New York, New Jersey, California, kampüs hayatı ve çalışma düzeni", angle: "uzak mesafeleri azaltan Türkçe sohbet köprüsü" },
  { country: "Kanada", slug: "kanada-sohbet", region: "Kuzey Amerika", audience: "Kanada'daki Türkler, öğrenciler ve aileler", culture: "sakin şehir düzeni, göçmenlik deneyimi ve doğa odaklı yaşam", diaspora: "Toronto, Vancouver ve Montreal çevresinde Türkçe muhabbet arayışı", dailyLife: "kış, okul, iş başvuruları, kahve molaları ve hafta sonu planları", angle: "sakin ama derin bir gurbet sohbeti" },
  { country: "Avustralya", slug: "avustralya-sohbet", region: "Okyanusya", audience: "Avustralya'da yaşayan Türkler ve uzak kıtada çevre arayanlar", culture: "sahil yaşamı, geniş zaman farkı ve rahat şehir atmosferi", diaspora: "Melbourne ve Sydney çevresindeki Türk topluluğuyla bağ kurma isteği", dailyLife: "iş, eğitim, sahil, aile özlemi ve gece sohbetleri", angle: "zaman farkına rağmen canlı kalan Türkçe muhabbet" },
  { country: "Avusturya", slug: "avusturya-sohbet", region: "Orta Avrupa", audience: "Avusturya'da yaşayan Türkler ve Avrupa içi gurbetçiler", culture: "Viyana'nın kültürel dokusu ve düzenli günlük yaşam", diaspora: "Avrupa'nın kalbinde Türkçe sohbet etme alışkanlığı", dailyLife: "Viyana, Linz, Graz, iş çıkışı ve aile sohbetleri", angle: "düzenli şehir hayatında samimi sohbet" },
  { country: "İsviçre", slug: "isvicre-sohbet", region: "Orta Avrupa", audience: "İsviçre'deki Türkler, çalışanlar ve öğrenciler", culture: "çok dilli kanton yapısı, sakin yaşam ve yüksek düzen", diaspora: "Zurich, Basel ve Cenevre çevresinde Türkçe bağ kurma ihtiyacı", dailyLife: "iş disiplini, doğa, tren yolculukları ve aile haberleri", angle: "çok dilli ülkede ana dil rahatlığı" },
  { country: "İsveç", slug: "isvec-sohbet", region: "Kuzey Avrupa", audience: "İsveç'te yaşayan Türkler ve yeni sosyal çevre arayanlar", culture: "sakin kuzey yaşamı, uzun kışlar ve güçlü dijital alışkanlıklar", diaspora: "Stockholm ve Göteborg çevresinde Türkçe sıcaklık arayışı", dailyLife: "okul, iş, kış akşamları, kahve molaları ve aile bağları", angle: "kuzey sakinliğinde içten sohbet" },
  { country: "Norveç", slug: "norvec-sohbet", region: "Kuzey Avrupa", audience: "Norveç'teki Türkler ve yalnızlık hissini azaltmak isteyenler", culture: "doğa, sakinlik ve mesafeli ama saygılı sosyal yaşam", diaspora: "uzun kış günlerinde Türkçe muhabbetle yakınlık kurma isteği", dailyLife: "Oslo, Bergen, iş hayatı, doğa planları ve memleket haberleri", angle: "sakin coğrafyada sıcak çevrim içi bağ" },
  { country: "Danimarka", slug: "danimarka-sohbet", region: "Kuzey Avrupa", audience: "Danimarka'da yaşayan Türkler ve öğrenciler", culture: "Kopenhag çevresinde dengeli yaşam ve topluluk bilinci", diaspora: "Türkçe konuşarak gündelik stresi hafifletme ihtiyacı", dailyLife: "iş, okul, bisikletli ulaşım, aile ve hafta sonu planları", angle: "dengeli yaşam içinde doğal sohbet" },
  { country: "Finlandiya", slug: "finlandiya-sohbet", region: "Kuzey Avrupa", audience: "Finlandiya'da yaşayan Türkler ve yeni arkadaş arayanlar", culture: "sessiz şehirler, teknoloji kültürü ve uzun kış akşamları", diaspora: "Helsinki çevresinde Türkçe sohbetle yakınlık kurma isteği", dailyLife: "öğrenci hayatı, yaz-kış farkı, kahve ve çevrim içi arkadaşlık", angle: "sessiz kuzeyde samimi dijital muhabbet" },
  { country: "İtalya", slug: "italya-sohbet", region: "Güney Avrupa", audience: "İtalya'daki Türkler, öğrenciler ve kültür meraklıları", culture: "sıcak sosyal yaşam, şehir meydanları ve aile odaklı iletişim", diaspora: "Roma, Milano ve Bologna çevresinde Türkçe konuşma ihtiyacı", dailyLife: "üniversite, tasarım, yemek, futbol ve günlük şehir sohbetleri", angle: "Akdeniz sıcaklığında Türkçe sohbet" },
  { country: "İspanya", slug: "ispanya-sohbet", region: "Güney Avrupa", audience: "İspanya'da yaşayan Türkler ve sosyal çevre kurmak isteyenler", culture: "renkli şehir hayatı, geç saatlere uzayan muhabbet ve Akdeniz dili", diaspora: "Madrid ve Barcelona çevresinde memleketle bağ arayışı", dailyLife: "okul, iş, futbol, sahil ve akşam sohbetleri", angle: "hareketli şehirlerde doğal arkadaşlık" },
  { country: "Portekiz", slug: "portekiz-sohbet", region: "Güneybatı Avrupa", audience: "Portekiz'de yaşayan Türkler ve yeni tanışmalar arayanlar", culture: "sakin sahil yaşamı, Lizbon enerjisi ve yumuşak sosyal tempo", diaspora: "uzakta ama Avrupa içinde Türkçe muhabbet kurma isteği", dailyLife: "Lizbon, Porto, eğitim, kahve, deniz ve günlük haberler", angle: "sahil ritminde rahat sohbet" },
  { country: "Yunanistan", slug: "yunanistan-sohbet", region: "Güneydoğu Avrupa", audience: "Yunanistan'da yaşayan Türkler ve komşu kültürleri sevenler", culture: "Ege komşuluğu, benzer sofralar ve yakın sosyal dil", diaspora: "Selanik, Atina ve adalar çevresinde Türkçe iletişim ihtiyacı", dailyLife: "Ege, turizm, aile, müzik ve komşu gündemi", angle: "yakın coğrafyada tanıdık muhabbet" },
  { country: "Bulgaristan", slug: "bulgaristan-sohbet", region: "Balkanlar", audience: "Bulgaristan Türkleri ve Balkanlarda yaşayan kullanıcılar", culture: "Balkan sıcaklığı, akrabalık bağları ve sınır komşuluğu", diaspora: "Türkiye ile güçlü bağları olan toplulukların sohbet ihtiyacı", dailyLife: "Sofya, Filibe, köy ziyaretleri, aile ve memleket konuları", angle: "Balkan Türkçesiyle yakın sohbet" },
  { country: "Romanya", slug: "romanya-sohbet", region: "Balkanlar", audience: "Romanya'da yaşayan Türkler ve Dobruca çevresinden kullanıcılar", culture: "Karadeniz etkisi, çok kültürlü şehirler ve sakin sosyal çevre", diaspora: "Köstence ve Bükreş hattında Türkçe bağ kurma isteği", dailyLife: "iş, eğitim, aile, tarih ve şehir sohbetleri", angle: "Karadeniz'e yakın Balkan muhabbeti" },
  { country: "Rusya", slug: "rusya-sohbet", region: "Avrasya", audience: "Rusya'daki Türkler, öğrenciler ve iş için bulunanlar", culture: "geniş coğrafya, büyük şehir temposu ve güçlü kış kültürü", diaspora: "Moskova ve St. Petersburg çevresinde Türkçe iletişim arayışı", dailyLife: "eğitim, ticaret, kış yaşamı, spor ve güncel haberler", angle: "geniş coğrafyada yakın sohbet" },
  { country: "Ukrayna", slug: "ukrayna-sohbet", region: "Doğu Avrupa", audience: "Ukrayna'da yaşayan Türkler ve bölgeyle bağı olanlar", culture: "Karadeniz yakınlığı, şehir dayanışması ve değişen gündem", diaspora: "Ukrayna ile Türkiye arasında kişisel bağları olanların konuşma ihtiyacı", dailyLife: "Kiev, Odessa, eğitim, aile haberleri ve güvenli iletişim", angle: "duyarlı, sakin ve destekleyici sohbet" },
  { country: "Azerbaycan", slug: "azerbaycan-sohbet", region: "Kafkasya", audience: "Azerbaycan'daki kullanıcılar ve kardeş ülke bağını önemseyenler", culture: "ortak dil yakınlığı, müzik, misafirperverlik ve güçlü kardeşlik duygusu", diaspora: "Türkiye ile Azerbaycan arasında doğal sohbet köprüsü", dailyLife: "Bakü, eğitim, iş, müzik, futbol ve aile muhabbeti", angle: "tek millet iki devlet sıcaklığında sohbet" },
  { country: "Kazakistan", slug: "kazakistan-sohbet", region: "Orta Asya", audience: "Kazakistan'daki Türkler, öğrenciler ve Türk dünyasına ilgi duyanlar", culture: "bozkır kültürü, modern şehirler ve Türk dünyası bağı", diaspora: "Astana ve Almatı çevresinde Türkçe temas kurma ihtiyacı", dailyLife: "eğitim, iş, geniş mesafeler, gelenek ve güncel sohbet", angle: "Türk dünyasını yakınlaştıran muhabbet" },
  { country: "Türkmenistan", slug: "turkmenistan-sohbet", region: "Orta Asya", audience: "Türkmenistan'la bağı olan Türkçe konuşan kullanıcılar", culture: "Türkmen kültürü, aile bağı ve sakin iletişim geleneği", diaspora: "Orta Asya ile Türkiye arasında tanıdık sözler arama isteği", dailyLife: "Aşkabat, eğitim, aile, gelenek ve gündelik yaşam", angle: "ortak kültür üzerinden seviyeli sohbet" },
  { country: "Özbekistan", slug: "ozbekistan-sohbet", region: "Orta Asya", audience: "Özbekistan'daki kullanıcılar ve Türk dünyası meraklıları", culture: "Semerkant mirası, misafirperverlik ve tarih kokan şehirler", diaspora: "Türkiye ile Orta Asya arasında kültürel yakınlık kurma isteği", dailyLife: "Taşkent, eğitim, ticaret, tarih ve aile sohbetleri", angle: "tarih ve samimiyet eksenli sohbet" },
  { country: "Kırgızistan", slug: "kirgizistan-sohbet", region: "Orta Asya", audience: "Kırgızistan'daki Türkçe konuşan kullanıcılar ve öğrenciler", culture: "dağ kültürü, Manas mirası ve doğal dostluk dili", diaspora: "Bişkek çevresinde Türkçe iletişim ve yeni arkadaşlık arayışı", dailyLife: "üniversite, doğa, aile, gelenek ve gençlik sohbetleri", angle: "dağların sakinliğinde dostça sohbet" },
  { country: "Japonya", slug: "japonya-sohbet", region: "Doğu Asya", audience: "Japonya'da yaşayan Türkler, öğrenciler ve kültür meraklıları", culture: "disiplinli şehir yaşamı, teknoloji ve saygılı iletişim dili", diaspora: "Tokyo ve Osaka çevresinde Türkçe konuşma rahatlığı arayışı", dailyLife: "üniversite, çalışma temposu, anime, teknoloji ve gündelik gözlemler", angle: "uzak kültürde tanıdık Türkçe alan" },
  { country: "Çin", slug: "cin-sohbet", region: "Doğu Asya", audience: "Çin'de yaşayan Türkler, öğrenciler ve ticaretle ilgilenenler", culture: "büyük şehir temposu, teknoloji ve farklı kültürlerle karşılaşma", diaspora: "Şanghay, Pekin ve Guangzhou çevresinde Türkçe bağlantı ihtiyacı", dailyLife: "eğitim, iş, ticaret, yemek ve şehir deneyimleri", angle: "büyük mesafede pratik sohbet köprüsü" },
  { country: "Güney Kore", slug: "guney-kore-sohbet", region: "Doğu Asya", audience: "Güney Kore'de yaşayan Türkler ve Kore kültürüne ilgi duyanlar", culture: "Seul temposu, teknoloji, müzik ve saygılı sosyal dil", diaspora: "öğrenciler ve çalışanlar için Türkçe muhabbet ihtiyacı", dailyLife: "Seul, Busan, K-pop, eğitim, iş ve yemek kültürü", angle: "popüler kültürle başlayan doğal tanışma" },
  { country: "Pakistan", slug: "pakistan-sohbet", region: "Güney Asya", audience: "Pakistan'daki Türkçe bilen kullanıcılar ve bölgeyle bağı olanlar", culture: "misafirperverlik, aile odaklı yaşam ve sıcak sohbet dili", diaspora: "Türkiye ile Pakistan arasındaki kardeşlik duygusunu konuşma isteği", dailyLife: "Lahor, Karaçi, eğitim, spor ve aile sohbetleri", angle: "dost ülke sıcaklığında çevrim içi muhabbet" },
  { country: "Hindistan", slug: "hindistan-sohbet", region: "Güney Asya", audience: "Hindistan'da yaşayan Türkler, öğrenciler ve kültür meraklıları", culture: "renkli şehirler, kalabalık gündem ve zengin kültürel çeşitlilik", diaspora: "Delhi, Mumbai ve Bangalore çevresinde Türkçe bağ kurma ihtiyacı", dailyLife: "eğitim, teknoloji, sinema, yemek ve günlük şehir deneyimleri", angle: "renkli kültür içinde Türkçe tanışma" },
  { country: "Afganistan", slug: "afganistan-sohbet", region: "Orta ve Güney Asya", audience: "Afganistan'la bağı olan kullanıcılar ve Türkçe konuşan topluluklar", culture: "aile bağı, misafirperverlik ve dayanışma duygusu", diaspora: "göç, eğitim ve memleket haberleri etrafında konuşma ihtiyacı", dailyLife: "aile, güvenli iletişim, gelenek ve gündelik dayanışma", angle: "sakin, saygılı ve destekleyici sohbet" },
  { country: "Irak", slug: "irak-sohbet", region: "Orta Doğu", audience: "Irak Türkmenleri, bölgede yaşayan Türkler ve akrabalık bağı olanlar", culture: "Türkmen kültürü, komşuluk ve güçlü aile bağları", diaspora: "Türkiye ile Irak arasında yakın haberleşme isteği", dailyLife: "Bağdat, Kerkük, Erbil, aile, müzik ve günlük haberler", angle: "komşu coğrafyada sıcak Türkçe sohbet" },
  { country: "İran", slug: "iran-sohbet", region: "Orta Doğu", audience: "İran'daki Türkler, Azeri Türkleri ve bölgeyle bağı olanlar", culture: "zengin tarih, komşuluk, müzik ve güçlü sohbet geleneği", diaspora: "Tebriz, Tahran ve Türkiye arasında kültürel yakınlık arayışı", dailyLife: "aile, eğitim, ticaret, müzik ve komşu gündemi", angle: "ortak coğrafyanın samimi dili" },
  { country: "Suriye", slug: "suriye-sohbet", region: "Orta Doğu", audience: "Suriye ile bağı olan Türkçe konuşan kullanıcılar ve aileler", culture: "komşuluk, yemek kültürü ve dayanışma hafızası", diaspora: "Türkiye'deki ve farklı ülkelerdeki aile bağlarını koruma ihtiyacı", dailyLife: "aile haberleri, güvenli iletişim, gündelik yaşam ve kültür", angle: "duyarlı ve insani bir sohbet alanı" },
  { country: "Mısır", slug: "misir-sohbet", region: "Kuzey Afrika", audience: "Mısır'da yaşayan Türkler, öğrenciler ve kültür meraklıları", culture: "Kahire kalabalığı, tarih, Nil ve sıcak sosyal dil", diaspora: "öğrenciler ve çalışanlar için Türkçe konuşma ihtiyacı", dailyLife: "Kahire, İskenderiye, üniversite, tarih ve gündelik muhabbet", angle: "tarihi şehirlerde canlı sohbet" },
  { country: "Fas", slug: "fas-sohbet", region: "Kuzey Afrika", audience: "Fas'taki Türkler ve kültür meraklıları", culture: "renkli pazarlar, Atlantik sahili ve sıcak misafirperverlik", diaspora: "Kazablanka ve Rabat çevresinde Türkçe bağ arayışı", dailyLife: "turizm, eğitim, yemek, müzik ve günlük şehir sohbetleri", angle: "renkli Kuzey Afrika atmosferinde sohbet" },
  { country: "Tunus", slug: "tunus-sohbet", region: "Kuzey Afrika", audience: "Tunus'ta yaşayan Türkler ve Akdeniz kültürünü sevenler", culture: "sahil şehirleri, Akdeniz ritmi ve samimi sosyal yaşam", diaspora: "Tunus ile Türkiye arasında kültürel yakınlık kurma isteği", dailyLife: "Tunis, Sousse, eğitim, turizm ve günlük haberler", angle: "Akdeniz'in iki yakasını buluşturan sohbet" },
  { country: "Cezayir", slug: "cezayir-sohbet", region: "Kuzey Afrika", audience: "Cezayir'deki Türkler ve bölgeyle ilişkisi olan kullanıcılar", culture: "geniş sahil şehirleri, güçlü tarih ve sıcak aile bağları", diaspora: "Cezayir ve Türkiye arasında gündelik iletişim arayışı", dailyLife: "Cezayir şehri, Oran, iş, eğitim, futbol ve aile sohbetleri", angle: "Kuzey Afrika sıcaklığında Türkçe muhabbet" },
  { country: "Suudi Arabistan", slug: "suudi-arabistan-sohbet", region: "Orta Doğu", audience: "Suudi Arabistan'da çalışan, okuyan veya yaşayan Türkler", culture: "büyük şehir düzeni, hac-umre bağlantıları ve gurbet çalışma hayatı", diaspora: "Riyad, Cidde ve Medine çevresinde Türkçe sohbet ihtiyacı", dailyLife: "iş, ibadet yolculukları, aile özlemi ve akşam sohbetleri", angle: "çalışma ve ibadet yolculuğunda tanıdık ses" },
  { country: "Birleşik Arap Emirlikleri", slug: "birlesik-arap-emirlikleri-sohbet", region: "Körfez", audience: "Dubai ve Abu Dabi çevresinde yaşayan Türkler ve çalışanlar", culture: "hızlı iş temposu, uluslararası çevre ve modern şehir hayatı", diaspora: "Körfez'deki yoğun çalışma düzeninde Türkçe rahatlama ihtiyacı", dailyLife: "Dubai, Abu Dabi, iş, turizm, teknoloji ve akşam planları", angle: "modern şehir temposunda pratik sohbet" },
  { country: "İrlanda", slug: "irlanda-sohbet", region: "Kuzeybatı Avrupa", audience: "İrlanda'daki Türkler, dil okulu öğrencileri ve çalışanlar", culture: "Dublin merkezli öğrenci hayatı ve samimi pub kültürü", diaspora: "yeni gelenlerin Türkçe destek ve arkadaşlık arayışı", dailyLife: "dil okulu, iş, yağmurlu günler, müzik ve hafta sonu gezileri", angle: "yeni başlangıçlara eşlik eden sohbet" },
  { country: "Polonya", slug: "polonya-sohbet", region: "Orta Avrupa", audience: "Polonya'da yaşayan Türkler, öğrenciler ve Erasmus çevresi", culture: "üniversite şehirleri, tarih ve gelişen iş hayatı", diaspora: "Varşova, Krakow ve Wroclaw çevresinde Türkçe çevre ihtiyacı", dailyLife: "öğrenci hayatı, teknoloji işleri, şehir gezileri ve günlük sohbet", angle: "Avrupa öğrenci ritminde tanışma" },
  { country: "Çekya", slug: "cekya-sohbet", region: "Orta Avrupa", audience: "Çekya'daki Türkler ve Prag çevresinde yaşayanlar", culture: "tarihi şehir dokusu, öğrenci ortamı ve sakin sosyal yaşam", diaspora: "Prag ve Brno çevresinde Türkçe konuşma ihtiyacı", dailyLife: "üniversite, turizm, iş, kahve ve şehir yürüyüşleri", angle: "tarihi şehirde sıcak muhabbet" },
  { country: "Macaristan", slug: "macaristan-sohbet", region: "Orta Avrupa", audience: "Macaristan'da yaşayan Türkler ve öğrenciler", culture: "Budapeşte merkezli tarih, üniversite ve Tuna kıyısı yaşamı", diaspora: "Orta Avrupa'da Türkçe çevre kurma ihtiyacı", dailyLife: "Budapeşte, eğitim, iş, termal kültür ve günlük haberler", angle: "Tuna kıyısında dostça sohbet" },
  { country: "Slovakya", slug: "slovakya-sohbet", region: "Orta Avrupa", audience: "Slovakya'daki Türkler ve Avrupa içinde yeni çevre arayanlar", culture: "Bratislava çevresinde sakin şehir yaşamı ve komşu ülke geçişleri", diaspora: "az sayıdaki Türk topluluğunun birbirini bulma ihtiyacı", dailyLife: "iş, okul, şehir gezileri, aile ve Avrupa gündemi", angle: "küçük topluluklar için görünür sohbet alanı" },
  { country: "Slovenya", slug: "slovenya-sohbet", region: "Orta Avrupa", audience: "Slovenya'da yaşayan Türkler ve doğa odaklı yaşamı sevenler", culture: "Ljubljana sakinliği, doğa ve düzenli sosyal hayat", diaspora: "küçük ülkede Türkçe sohbetle yakın çevre kurma isteği", dailyLife: "eğitim, iş, göl gezileri, doğa ve günlük planlar", angle: "sakin Avrupa yaşamında samimi bağ" },
  { country: "Hırvatistan", slug: "hirvatistan-sohbet", region: "Balkanlar", audience: "Hırvatistan'da yaşayan Türkler ve Adriyatik kültürüne ilgi duyanlar", culture: "sahil şehirleri, turizm ve Balkan-Akdeniz karışımı sosyal dil", diaspora: "Zagreb ve sahil hattında Türkçe konuşma arayışı", dailyLife: "turizm, deniz, iş, eğitim ve sezon sohbetleri", angle: "Adriyatik kıyısında rahat muhabbet" },
  { country: "Sırbistan", slug: "sirbistan-sohbet", region: "Balkanlar", audience: "Sırbistan'daki Türkler ve Balkan kültürünü sevenler", culture: "Belgrad enerjisi, Balkan müziği ve güçlü sosyal hayat", diaspora: "Balkanlarda Türkçe tanışma ve komşu kültür konuşma isteği", dailyLife: "Belgrad, öğrenci hayatı, müzik, spor ve günlük haberler", angle: "Balkan enerjisinde canlı sohbet" },
  { country: "Bosna Hersek", slug: "bosna-hersek-sohbet", region: "Balkanlar", audience: "Bosna Hersek'teki Türkler ve kardeş coğrafya bağını önemseyenler", culture: "Saraybosna sıcaklığı, tarih, kahve ve dostluk dili", diaspora: "Türkiye ile Bosna arasındaki duygusal yakınlığı konuşma ihtiyacı", dailyLife: "Saraybosna, Mostar, eğitim, tarih ve aile sohbetleri", angle: "kardeş coğrafyada içten muhabbet" },
  { country: "Karadağ", slug: "karadag-sohbet", region: "Balkanlar", audience: "Karadağ'da yaşayan Türkler ve küçük topluluklarda çevre arayanlar", culture: "sahil kasabaları, dağ manzaraları ve sakin Balkan yaşamı", diaspora: "Podgorica ve Budva çevresinde Türkçe bağlantı ihtiyacı", dailyLife: "turizm, sahil, iş, yaz sezonu ve günlük planlar", angle: "küçük ülkede kolay tanışma" },
  { country: "Arnavutluk", slug: "arnavutluk-sohbet", region: "Balkanlar", audience: "Arnavutluk'taki Türkler ve Balkan yakınlığını sevenler", culture: "Tiran hareketliliği, sahil şehirleri ve samimi aile bağları", diaspora: "Türkiye ile Balkanlar arasında gündelik sohbet kurma isteği", dailyLife: "Tiran, turizm, eğitim, yemek ve şehir gündemi", angle: "yakın kültürler arasında doğal sohbet" },
  { country: "Kosova", slug: "kosova-sohbet", region: "Balkanlar", audience: "Kosova'daki Türkler ve Türkçe konuşan topluluklar", culture: "Prizren kültürü, Balkan misafirperverliği ve yakın dil bağları", diaspora: "Kosova Türkleriyle çevrim içi muhabbet kurma ihtiyacı", dailyLife: "Prizren, Priştine, aile, eğitim ve kültür sohbetleri", angle: "Balkan Türkçesine yakın sıcak sohbet" },
  { country: "Kuzey Makedonya", slug: "kuzey-makedonya-sohbet", region: "Balkanlar", audience: "Kuzey Makedonya Türkleri ve bölgeyle bağı olanlar", culture: "Üsküp çarşısı, tarih ve çok kültürlü mahalleler", diaspora: "Balkan Türk topluluklarını görünür kılma isteği", dailyLife: "Üsküp, Manastır, aile, eğitim, tarih ve günlük yaşam", angle: "çarşı sıcaklığında Türkçe sohbet" },
  { country: "Moldova", slug: "moldova-sohbet", region: "Doğu Avrupa", audience: "Moldova'da yaşayan Türkler ve Gagavuz kültürüne ilgi duyanlar", culture: "sakin şehirler, bağ kültürü ve çok dilli sosyal yapı", diaspora: "Kişinev ve Gagavuzya çevresinde Türkçe bağlantı arayışı", dailyLife: "eğitim, iş, aile, yerel kültür ve güncel haberler", angle: "küçük toplulukları buluşturan sohbet" },
  { country: "Gürcistan", slug: "gurcistan-sohbet", region: "Kafkasya", audience: "Gürcistan'daki Türkler, öğrenciler ve sınır komşuluğu olanlar", culture: "Tiflis enerjisi, Karadeniz yakınlığı ve misafirperverlik", diaspora: "Türkiye ile Kafkasya arasında kolay sohbet kurma ihtiyacı", dailyLife: "Tiflis, Batum, turizm, eğitim, iş ve komşu gündemi", angle: "Kafkasya kapısında samimi muhabbet" },
  { country: "Ermenistan", slug: "ermenistan-sohbet", region: "Kafkasya", audience: "Ermenistan bölgesini takip eden ve kültürler arası sohbet arayan kullanıcılar", culture: "Kafkas şehirleri, tarih ve sakin gündelik yaşam", diaspora: "bölgeyi anlamak isteyenlerin saygılı konuşma ihtiyacı", dailyLife: "Erivan, kültür, tarih, komşu haberleri ve günlük gözlemler", angle: "saygılı ve ölçülü bölge sohbeti" },
  { country: "Kıbrıs", slug: "kibris-sohbet", region: "Doğu Akdeniz", audience: "Kıbrıs'ta yaşayan Türkler, öğrenciler ve adada çevre arayanlar", culture: "ada yaşamı, üniversite ortamı ve Akdeniz rahatlığı", diaspora: "Kuzey Kıbrıs çevresinde Türkçe sohbet ve arkadaşlık ihtiyacı", dailyLife: "Lefkoşa, Girne, öğrencilik, sahil ve gece muhabbetleri", angle: "ada ritminde canlı sohbet" },
  { country: "Malta", slug: "malta-sohbet", region: "Akdeniz", audience: "Malta'da yaşayan Türkler, dil okulu öğrencileri ve çalışanlar", culture: "küçük ada yaşamı, dil okulları ve turizm temposu", diaspora: "yeni gelenlerin Türkçe destek ve arkadaşlık araması", dailyLife: "Valletta, dil okulu, iş, sahil ve hafta sonu planları", angle: "küçük adada kolay çevre kurma" },
  { country: "Lüksemburg", slug: "luksemburg-sohbet", region: "Batı Avrupa", audience: "Lüksemburg'da çalışan Türkler ve Avrupa kurumları çevresindekiler", culture: "çok dilli iş hayatı, küçük ülke düzeni ve profesyonel tempo", diaspora: "az sayıdaki Türk kullanıcının birbirini bulma ihtiyacı", dailyLife: "iş, finans, aile, kısa seyahatler ve Avrupa gündemi", angle: "küçük ülkede görünür Türkçe sohbet" },
  { country: "Lihtenştayn", slug: "lihtenstayn-sohbet", region: "Orta Avrupa", audience: "Lihtenştayn çevresindeki Türkler ve yakın ülkelerden kullanıcılar", culture: "küçük ülke sakinliği, Alp manzarası ve düzenli yaşam", diaspora: "İsviçre ve Avusturya hattındaki Türkçe bağ arayışı", dailyLife: "iş, sınır geçişleri, doğa ve aile haberleri", angle: "küçük coğrafyada yakın sohbet" },
  { country: "Monako", slug: "monako-sohbet", region: "Batı Avrupa", audience: "Monako çevresinde yaşayan veya çalışan Türkler", culture: "Akdeniz kıyısı, lüks şehir ritmi ve uluslararası sosyal çevre", diaspora: "Fransa hattında Türkçe konuşma rahatlığı arayışı", dailyLife: "iş, turizm, sahil, etkinlikler ve günlük planlar", angle: "Akdeniz kıyısında seçici sohbet" },
  { country: "Andorra", slug: "andorra-sohbet", region: "Güneybatı Avrupa", audience: "Andorra çevresindeki Türkler ve dağ yaşamını sevenler", culture: "Pirene sakinliği, küçük ülke düzeni ve turizm", diaspora: "İspanya-Fransa hattında Türkçe bağ kurma isteği", dailyLife: "kayak, turizm, iş, kısa geziler ve günlük haberler", angle: "dağ ülkesinde sıcak muhabbet" },
  { country: "İzlanda", slug: "izlanda-sohbet", region: "Kuzey Avrupa", audience: "İzlanda'da yaşayan Türkler ve kuzey yaşamını merak edenler", culture: "uzak ada yaşamı, doğa, sessizlik ve güçlü dijital iletişim", diaspora: "az sayıdaki Türk kullanıcının yalnızlık hissini azaltma ihtiyacı", dailyLife: "Reykjavik, doğa, kış, iş ve memleket sohbetleri", angle: "uzak adada tanıdık Türkçe ses" },
  { country: "Estonya", slug: "estonya-sohbet", region: "Baltık", audience: "Estonya'daki Türkler, teknoloji çalışanları ve öğrenciler", culture: "dijital devlet, sakin şehirler ve teknoloji odaklı yaşam", diaspora: "Tallinn çevresinde Türkçe çevre kurma ihtiyacı", dailyLife: "teknoloji, eğitim, startup, kış ve günlük muhabbet", angle: "dijital ülkede pratik sohbet" },
  { country: "Letonya", slug: "letonya-sohbet", region: "Baltık", audience: "Letonya'da yaşayan Türkler ve Baltık kültürünü merak edenler", culture: "Riga merkezli sakin şehir yaşamı ve mevsimsel ritim", diaspora: "küçük Türk toplulukları için görünür sohbet alanı", dailyLife: "eğitim, iş, kış akşamları, şehir gezileri ve aile haberleri", angle: "Baltık sakinliğinde sıcak sohbet" },
  { country: "Litvanya", slug: "litvanya-sohbet", region: "Baltık", audience: "Litvanya'daki Türkler, öğrenciler ve çalışanlar", culture: "Vilnius çevresinde öğrenci yaşamı ve sakin sosyal çevre", diaspora: "Baltık bölgesinde Türkçe muhabbet kurma isteği", dailyLife: "üniversite, iş, tarih, kış ve günlük şehir sohbetleri", angle: "küçük toplulukları yakınlaştıran sohbet" },
  { country: "Belarus", slug: "belarus-sohbet", region: "Doğu Avrupa", audience: "Belarus'ta yaşayan Türkler ve bölgeyle bağı olanlar", culture: "Minsk merkezli düzenli şehir yaşamı ve sakin sosyal tempo", diaspora: "eğitim veya iş için bulunanların Türkçe bağ kurma ihtiyacı", dailyLife: "üniversite, iş, kış, aile ve güncel haberler", angle: "sakin Doğu Avrupa muhabbeti" },
  { country: "Brezilya", slug: "brezilya-sohbet", region: "Güney Amerika", audience: "Brezilya'da yaşayan Türkler ve Latin kültürünü sevenler", culture: "renkli şehirler, futbol, müzik ve sıcak sosyal yaşam", diaspora: "Sao Paulo ve Rio çevresinde Türkçe bağlantı arayışı", dailyLife: "futbol, iş, sahil, müzik, aile ve günlük haberler", angle: "Latin enerjisinde Türkçe sohbet" },
  { country: "Arjantin", slug: "arjantin-sohbet", region: "Güney Amerika", audience: "Arjantin'deki Türkler ve Güney Amerika meraklıları", culture: "Buenos Aires ritmi, futbol, tango ve uzun sohbet geleneği", diaspora: "uzak kıtada Türkçe muhabbetle yakınlık kurma isteği", dailyLife: "futbol, eğitim, iş, kahve ve şehir kültürü", angle: "uzak kıtada sıcak tanışma" },
  { country: "Şili", slug: "sili-sohbet", region: "Güney Amerika", audience: "Şili'de yaşayan Türkler ve And kültürünü merak edenler", culture: "uzun kıyı ülkesi, dağ manzarası ve sakin şehir hayatı", diaspora: "Santiago çevresinde Türkçe iletişim ihtiyacı", dailyLife: "iş, eğitim, doğa, aile özlemi ve günlük sohbet", angle: "uzun mesafede yakın hissettiren sohbet" },
  { country: "Peru", slug: "peru-sohbet", region: "Güney Amerika", audience: "Peru'daki Türkler ve tarih-doğa meraklıları", culture: "And kültürü, tarihi miras ve renkli pazarlar", diaspora: "Lima çevresinde Türkçe konuşma ve tanışma arayışı", dailyLife: "turizm, eğitim, yemek, tarih ve günlük haberler", angle: "tarih ve keşifle başlayan sohbet" },
  { country: "Kolombiya", slug: "kolombiya-sohbet", region: "Güney Amerika", audience: "Kolombiya'da yaşayan Türkler ve Latin Amerika'yı sevenler", culture: "müzik, kahve, sıcak sosyal dil ve hareketli şehirler", diaspora: "Bogota ve Medellin çevresinde Türkçe çevre kurma ihtiyacı", dailyLife: "kahve, müzik, iş, eğitim, seyahat ve aile haberleri", angle: "kahve tadında samimi sohbet" },
  { country: "Meksika", slug: "meksika-sohbet", region: "Kuzey Amerika", audience: "Meksika'da yaşayan Türkler ve Latin kültürüne ilgi duyanlar", culture: "renkli yemek kültürü, müzik ve aile odaklı sosyal yaşam", diaspora: "Mexico City ve Cancun çevresinde Türkçe bağ kurma ihtiyacı", dailyLife: "turizm, iş, yemek, futbol ve günlük planlar", angle: "renkli kültürde sıcak Türkçe muhabbet" },
  { country: "Uruguay", slug: "uruguay-sohbet", region: "Güney Amerika", audience: "Uruguay'daki Türkler ve sakin Latin yaşamını sevenler", culture: "Montevideo sakinliği, sahil ve futbol sohbetleri", diaspora: "küçük topluluklarda Türkçe arkadaşlık ihtiyacı", dailyLife: "sahil, iş, aile, futbol ve günlük haberler", angle: "sakin Latin kıyısında sohbet" },
  { country: "Paraguay", slug: "paraguay-sohbet", region: "Güney Amerika", audience: "Paraguay'da yaşayan Türkler ve bölgeyle bağı olanlar", culture: "sakin şehirler, aile bağları ve sıcak iklim", diaspora: "Asuncion çevresinde Türkçe çevre kurma isteği", dailyLife: "iş, ticaret, aile, futbol ve günlük yaşam", angle: "küçük topluluğu görünür kılan sohbet" },
  { country: "Bolivya", slug: "bolivya-sohbet", region: "Güney Amerika", audience: "Bolivya'daki Türkler ve And coğrafyasını merak edenler", culture: "yüksek şehirler, yerel pazarlar ve güçlü gelenekler", diaspora: "La Paz ve Santa Cruz çevresinde Türkçe bağlantı ihtiyacı", dailyLife: "seyahat, iş, kültür, aile ve günlük haberler", angle: "yüksek coğrafyada yakın sohbet" },
  { country: "Ekvador", slug: "ekvador-sohbet", region: "Güney Amerika", audience: "Ekvador'da yaşayan Türkler ve seyahat meraklıları", culture: "Ekvator çizgisi, And doğası ve sahil yaşamı", diaspora: "Quito çevresinde Türkçe sohbet etme ihtiyacı", dailyLife: "seyahat, eğitim, iş, doğa ve gündelik muhabbet", angle: "keşif duygusuyla başlayan sohbet" },
  { country: "Venezuela", slug: "venezuela-sohbet", region: "Güney Amerika", audience: "Venezuela ile bağı olan Türkçe konuşan kullanıcılar", culture: "Karayip etkisi, müzik ve güçlü aile ilişkileri", diaspora: "uzak coğrafyada güvenli ve sakin konuşma arayışı", dailyLife: "aile haberleri, müzik, futbol, iş ve gündelik yaşam", angle: "duyarlı ve saygılı Latin sohbeti" },
  { country: "Panama", slug: "panama-sohbet", region: "Orta Amerika", audience: "Panama'da yaşayan Türkler ve ticaretle ilgilenenler", culture: "kanal ülkesi, uluslararası iş çevresi ve tropik şehir hayatı", diaspora: "Panama City çevresinde Türkçe bağlantı ihtiyacı", dailyLife: "ticaret, lojistik, turizm, aile ve günlük planlar", angle: "geçiş noktasında pratik sohbet" },
  { country: "Kosta Rika", slug: "kosta-rika-sohbet", region: "Orta Amerika", audience: "Kosta Rika'daki Türkler ve doğa yaşamını sevenler", culture: "doğa, sakin hayat ve çevre duyarlılığı", diaspora: "küçük ülkede Türkçe arkadaşlık arayışı", dailyLife: "turizm, doğa, iş, sahil ve günlük sohbet", angle: "doğa içinde rahat muhabbet" },
  { country: "Küba", slug: "kuba-sohbet", region: "Karayipler", audience: "Küba'daki Türkler ve Karayip kültürünü merak edenler", culture: "müzik, tarih, sokak yaşamı ve sıcak iletişim", diaspora: "Havana çevresinde Türkçe konuşma ihtiyacı", dailyLife: "müzik, seyahat, kültür, aile ve günlük gözlemler", angle: "müzikle açılan samimi sohbet" },
  { country: "Dominik Cumhuriyeti", slug: "dominik-cumhuriyeti-sohbet", region: "Karayipler", audience: "Dominik Cumhuriyeti'ndeki Türkler ve turizm çevresi", culture: "sahil, müzik, sıcak iklim ve hareketli sosyal hayat", diaspora: "turizm veya iş için bulunanların Türkçe bağ araması", dailyLife: "sahil, otelcilik, müzik, seyahat ve günlük planlar", angle: "Karayip sıcaklığında Türkçe sohbet" },
  { country: "Jamaika", slug: "jamaika-sohbet", region: "Karayipler", audience: "Jamaika'da yaşayan Türkler ve ada kültürünü sevenler", culture: "müzik, ada rahatlığı ve sıcak sosyal iletişim", diaspora: "uzak adada Türkçe konuşma ve arkadaşlık ihtiyacı", dailyLife: "müzik, turizm, sahil, iş ve günlük muhabbet", angle: "ada ritminde samimi sohbet" },
  { country: "Güney Afrika", slug: "guney-afrika-sohbet", region: "Afrika", audience: "Güney Afrika'daki Türkler, iş insanları ve öğrenciler", culture: "Cape Town manzarası, Johannesburg temposu ve çok kültürlü yapı", diaspora: "Afrika'nın güneyinde Türkçe bağ kurma ihtiyacı", dailyLife: "iş, eğitim, doğa, spor ve aile haberleri", angle: "çok kültürlü coğrafyada Türkçe sohbet" },
  { country: "Nijerya", slug: "nijerya-sohbet", region: "Batı Afrika", audience: "Nijerya'da yaşayan Türkler ve iş bağlantısı olanlar", culture: "Lagos enerjisi, ticaret, müzik ve kalabalık şehir hayatı", diaspora: "iş için bulunanların Türkçe muhabbet arayışı", dailyLife: "ticaret, eğitim, futbol, müzik ve günlük şehir gündemi", angle: "hareketli şehirlerde hızlı sohbet" },
  { country: "Kenya", slug: "kenya-sohbet", region: "Doğu Afrika", audience: "Kenya'daki Türkler, öğrenciler ve yardım çalışmaları çevresi", culture: "Nairobi temposu, doğa ve topluluk dayanışması", diaspora: "Doğu Afrika'da Türkçe konuşma ve çevre kurma ihtiyacı", dailyLife: "iş, eğitim, doğa, aile ve şehir sohbetleri", angle: "doğa ve şehir arasında samimi bağ" },
  { country: "Etiyopya", slug: "etiyopya-sohbet", region: "Doğu Afrika", audience: "Etiyopya'da yaşayan Türkler ve bölgeyle bağı olanlar", culture: "Addis Ababa hareketliliği, kahve kültürü ve tarih", diaspora: "iş, eğitim veya kurum çalışmaları için bulunanların Türkçe ihtiyacı", dailyLife: "kahve, iş, kültür, aile ve günlük haberler", angle: "kahve kültürüyle ısınan sohbet" },
  { country: "Gana", slug: "gana-sohbet", region: "Batı Afrika", audience: "Gana'daki Türkler ve Batı Afrika'yı merak edenler", culture: "Accra canlılığı, sahil, müzik ve misafirperverlik", diaspora: "küçük Türk çevresinde arkadaşlık kurma isteği", dailyLife: "iş, eğitim, müzik, futbol ve günlük planlar", angle: "sıcak sosyal yaşamda Türkçe muhabbet" },
  { country: "Senegal", slug: "senegal-sohbet", region: "Batı Afrika", audience: "Senegal'de yaşayan Türkler ve kültürel bağ arayanlar", culture: "Dakar sahili, müzik, misafirperverlik ve sakin sosyal dil", diaspora: "Batı Afrika'da Türkçe konuşma ve çevre bulma ihtiyacı", dailyLife: "iş, eğitim, turizm, aile ve günlük haberler", angle: "sahil şehrinde rahat sohbet" },
  { country: "Tanzanya", slug: "tanzanya-sohbet", region: "Doğu Afrika", audience: "Tanzanya'daki Türkler ve doğa-turizm çevresi", culture: "Darüsselam sahili, Zanzibar ve doğal yaşam", diaspora: "uzak ülkede Türkçe bağlantı ve güvenli sohbet arayışı", dailyLife: "turizm, iş, doğa, sahil ve aile haberleri", angle: "doğa ve sahil arasında samimi sohbet" },
  { country: "Uganda", slug: "uganda-sohbet", region: "Doğu Afrika", audience: "Uganda'da yaşayan Türkler ve bölgede çalışanlar", culture: "Kampala hareketliliği, göl çevresi ve topluluk dayanışması", diaspora: "iş, eğitim veya sosyal projeler için bulunanların Türkçe ihtiyacı", dailyLife: "iş, eğitim, aile, doğa ve günlük planlar", angle: "küçük çevreleri buluşturan sohbet" },
  { country: "Sudan", slug: "sudan-sohbet", region: "Kuzeydoğu Afrika", audience: "Sudan ile bağı olan Türkçe konuşan kullanıcılar", culture: "Nil çevresi, aile bağı ve sakin iletişim", diaspora: "bölge gündemini saygılı ve güvenli şekilde konuşma ihtiyacı", dailyLife: "aile haberleri, eğitim, gündem ve günlük dayanışma", angle: "duyarlı ve ölçülü sohbet" },
  { country: "Libya", slug: "libya-sohbet", region: "Kuzey Afrika", audience: "Libya'da çalışan Türkler ve bölgeyle bağı olanlar", culture: "Akdeniz kıyısı, çalışma hayatı ve komşu coğrafya yakınlığı", diaspora: "iş için bulunanların Türkçe konuşarak rahatlama ihtiyacı", dailyLife: "Trablus, Bingazi, iş, aile ve güncel haberler", angle: "çalışma gurbetinde tanıdık muhabbet" },
  { country: "Ürdün", slug: "urdun-sohbet", region: "Orta Doğu", audience: "Ürdün'deki Türkler, öğrenciler ve bölgeyle bağı olanlar", culture: "Amman sakinliği, tarih ve misafirperverlik", diaspora: "eğitim veya çalışma için bulunanların Türkçe çevre arayışı", dailyLife: "Amman, Petra, okul, iş, aile ve günlük sohbet", angle: "sakin Orta Doğu muhabbeti" },
  { country: "Lübnan", slug: "lubnan-sohbet", region: "Orta Doğu", audience: "Lübnan'daki Türkler ve Akdeniz-Orta Doğu kültürünü sevenler", culture: "Beyrut enerjisi, müzik, yemek ve çok kültürlü sosyal yapı", diaspora: "yakın coğrafyada Türkçe sohbet etme ihtiyacı", dailyLife: "Beyrut, eğitim, iş, müzik ve aile haberleri", angle: "çok kültürlü şehirde canlı sohbet" },
  { country: "İsrail", slug: "israil-sohbet", region: "Orta Doğu", audience: "İsrail'de yaşayan Türkler ve bölge gündemini takip edenler", culture: "Tel Aviv hareketliliği, tarih ve çok dilli sosyal çevre", diaspora: "bölgedeki Türkçe konuşanların güvenli sohbet arayışı", dailyLife: "iş, eğitim, aile, teknoloji ve güncel haberler", angle: "çok dilli ortamda Türkçe alan" },
  { country: "Filistin", slug: "filistin-sohbet", region: "Orta Doğu", audience: "Filistin ile bağı olan ve duyarlı sohbet arayan kullanıcılar", culture: "aile bağı, dayanışma ve güçlü toplumsal hafıza", diaspora: "haberleşme, destek ve saygılı konuşma ihtiyacı", dailyLife: "aile, gündem, güvenli iletişim ve insani dayanışma", angle: "duyarlı ve saygılı çevrim içi muhabbet" },
  { country: "Katar", slug: "katar-sohbet", region: "Körfez", audience: "Katar'da çalışan Türkler ve Körfez çevresindekiler", culture: "Doha modernliği, iş temposu ve uluslararası topluluklar", diaspora: "yoğun çalışma düzeninde Türkçe rahatlama arayışı", dailyLife: "Doha, iş, spor, aile özlemi ve akşam sohbetleri", angle: "Körfez temposunda pratik sohbet" },
  { country: "Kuveyt", slug: "kuveyt-sohbet", region: "Körfez", audience: "Kuveyt'te yaşayan veya çalışan Türkler", culture: "sıcak iklim, iş merkezli yaşam ve aile bağları", diaspora: "çalışma gurbetinde Türkçe iletişim ihtiyacı", dailyLife: "iş, aile, hafta sonu planları ve günlük haberler", angle: "çalışma hayatını yumuşatan sohbet" },
  { country: "Bahreyn", slug: "bahreyn-sohbet", region: "Körfez", audience: "Bahreyn'deki Türkler ve küçük Körfez toplulukları", culture: "ada ülkesi düzeni, iş hayatı ve uluslararası çevre", diaspora: "küçük topluluk içinde Türkçe arkadaşlık ihtiyacı", dailyLife: "Manama, iş, sahil, aile ve günlük planlar", angle: "küçük adada görünür sohbet" },
  { country: "Umman", slug: "umman-sohbet", region: "Körfez", audience: "Umman'da yaşayan Türkler ve sakin Körfez yaşamını sevenler", culture: "Maskat sakinliği, deniz ve geleneksel misafirperverlik", diaspora: "iş veya aile nedeniyle bulunanların Türkçe sohbet ihtiyacı", dailyLife: "Maskat, iş, sahil, aile ve doğa planları", angle: "sakin Körfez atmosferinde muhabbet" },
  { country: "Yemen", slug: "yemen-sohbet", region: "Arap Yarımadası", audience: "Yemen ile bağı olan Türkçe konuşan kullanıcılar", culture: "tarih, aile bağı ve dayanışma duygusu", diaspora: "bölge gündemini saygılı bir dille konuşma ihtiyacı", dailyLife: "aile haberleri, güvenli iletişim, kültür ve gündelik dayanışma", angle: "duyarlı ve sakin sohbet" },
  { country: "Malezya", slug: "malezya-sohbet", region: "Güneydoğu Asya", audience: "Malezya'da yaşayan Türkler, öğrenciler ve gezginler", culture: "Kuala Lumpur modernliği, çok kültürlü yaşam ve sıcak iklim", diaspora: "öğrenciler ve çalışanlar için Türkçe arkadaşlık arayışı", dailyLife: "üniversite, teknoloji, yemek, seyahat ve günlük sohbet", angle: "Asya'da çok kültürlü Türkçe muhabbet" },
  { country: "Endonezya", slug: "endonezya-sohbet", region: "Güneydoğu Asya", audience: "Endonezya'daki Türkler ve ada kültürünü merak edenler", culture: "geniş ada ülkesi, sıcak sosyal dil ve güçlü topluluk yaşamı", diaspora: "Jakarta ve Bali çevresinde Türkçe bağlantı ihtiyacı", dailyLife: "turizm, eğitim, iş, yemek ve sahil sohbetleri", angle: "ada ülkesinde geniş sohbet ağı" },
  { country: "Singapur", slug: "singapur-sohbet", region: "Güneydoğu Asya", audience: "Singapur'da çalışan Türkler ve teknoloji çevresi", culture: "hızlı şehir düzeni, iş disiplini ve çok dilli yaşam", diaspora: "yoğun şehir temposunda Türkçe rahatlama arayışı", dailyLife: "iş, finans, teknoloji, kahve molası ve günlük planlar", angle: "modern şehirde pratik sohbet" },
  { country: "Tayland", slug: "tayland-sohbet", region: "Güneydoğu Asya", audience: "Tayland'da yaşayan Türkler, gezginler ve turizm çalışanları", culture: "Bangkok hareketliliği, turizm, yemek ve sahil yaşamı", diaspora: "uzak ülkede Türkçe arkadaşlık ve deneyim paylaşımı ihtiyacı", dailyLife: "Bangkok, Phuket, turizm, yemek, iş ve gezi sohbetleri", angle: "seyahatle başlayan canlı muhabbet" },
  { country: "Vietnam", slug: "vietnam-sohbet", region: "Güneydoğu Asya", audience: "Vietnam'da yaşayan Türkler ve Asya kültürünü merak edenler", culture: "Hanoi ve Ho Chi Minh temposu, sokak lezzetleri ve çalışma hayatı", diaspora: "Asya'da Türkçe çevre kurma ihtiyacı", dailyLife: "iş, eğitim, yemek, motorlu şehir hayatı ve günlük haberler", angle: "hızlı şehir ritminde tanışma" },
  { country: "Filipinler", slug: "filipinler-sohbet", region: "Güneydoğu Asya", audience: "Filipinler'de yaşayan Türkler ve ada ülkesi meraklıları", culture: "ada yaşamı, sıcak iletişim ve güçlü aile bağları", diaspora: "Manila çevresinde Türkçe sohbet ve arkadaşlık arayışı", dailyLife: "iş, turizm, sahil, aile ve günlük muhabbet", angle: "ada sıcaklığında Türkçe sohbet" },
  { country: "Bangladeş", slug: "banglades-sohbet", region: "Güney Asya", audience: "Bangladeş'te yaşayan Türkler ve iş bağlantısı olanlar", culture: "Dakaka yoğunluğu, tekstil, aile ve sıcak sosyal yapı", diaspora: "iş veya eğitim için bulunanların Türkçe konuşma ihtiyacı", dailyLife: "ticaret, eğitim, aile, yemek ve günlük haberler", angle: "yoğun şehir içinde rahat sohbet" },
  { country: "Sri Lanka", slug: "sri-lanka-sohbet", region: "Güney Asya", audience: "Sri Lanka'daki Türkler ve ada kültürünü sevenler", culture: "Hint Okyanusu sahilleri, çay kültürü ve sakin yaşam", diaspora: "uzak adada Türkçe bağlantı ve arkadaşlık arayışı", dailyLife: "turizm, çay, doğa, iş ve aile haberleri", angle: "okyanus kıyısında sakin sohbet" },
  { country: "Nepal", slug: "nepal-sohbet", region: "Güney Asya", audience: "Nepal'deki Türkler, gezginler ve dağ kültürünü sevenler", culture: "Himalaya atmosferi, sakin şehirler ve manevi yolculuklar", diaspora: "Katmandu çevresinde Türkçe deneyim paylaşımı ihtiyacı", dailyLife: "seyahat, doğa, eğitim, kültür ve günlük gözlemler", angle: "dağ yolculuklarından doğan sohbet" },
  { country: "Moğolistan", slug: "mogolistan-sohbet", region: "Doğu ve Orta Asya", audience: "Moğolistan'daki Türkler ve bozkır kültürünü merak edenler", culture: "geniş bozkırlar, göçebe hafıza ve sakin şehir yaşamı", diaspora: "Ulan Batur çevresinde Türkçe bağlantı arayışı", dailyLife: "doğa, tarih, eğitim, iş ve gündelik haberler", angle: "bozkır coğrafyasında yakın sohbet" },
  { country: "Tayvan", slug: "tayvan-sohbet", region: "Doğu Asya", audience: "Tayvan'da yaşayan Türkler, öğrenciler ve teknoloji çevresi", culture: "Taipei hareketliliği, teknoloji, gece pazarları ve saygılı iletişim", diaspora: "Asya'da Türkçe çevre ve arkadaşlık kurma ihtiyacı", dailyLife: "eğitim, teknoloji, yemek, şehir ulaşımı ve günlük sohbet", angle: "teknoloji adasında Türkçe muhabbet" },
  { country: "Hong Kong", slug: "hong-kong-sohbet", region: "Doğu Asya", audience: "Hong Kong'daki Türkler ve finans/iş çevresi", culture: "yoğun şehir ritmi, liman kültürü ve uluslararası yaşam", diaspora: "kalabalık şehirde Türkçe rahatlama ve tanışma ihtiyacı", dailyLife: "iş, finans, eğitim, kahve molaları ve şehir haberleri", angle: "yüksek tempoda kısa ve canlı sohbet" },
  { country: "Yeni Zelanda", slug: "yeni-zelanda-sohbet", region: "Okyanusya", audience: "Yeni Zelanda'da yaşayan Türkler ve uzak kıta sakinleri", culture: "doğa, sakin şehirler ve aile odaklı günlük yaşam", diaspora: "zaman farkına rağmen Türkçe bağ kurma ihtiyacı", dailyLife: "Auckland, Wellington, iş, doğa, aile özlemi ve gece sohbetleri", angle: "uzak ülkede yakın hissettiren sohbet" },
  { country: "Fiji", slug: "fiji-sohbet", region: "Okyanusya", audience: "Fiji'deki Türkler ve ada yaşamını merak eden kullanıcılar", culture: "Pasifik adaları, sahil, sakinlik ve topluluk sıcaklığı", diaspora: "çok küçük Türk çevresinde görünür sohbet ihtiyacı", dailyLife: "turizm, sahil, iş, aile ve günlük planlar", angle: "Pasifik sakinliğinde Türkçe sohbet" },
  { country: "Papua Yeni Gine", slug: "papua-yeni-gine-sohbet", region: "Okyanusya", audience: "Papua Yeni Gine ile bağı olan Türkçe konuşan kullanıcılar", culture: "ada coğrafyası, yerel çeşitlilik ve uzak yaşam deneyimi", diaspora: "uzak bölgelerde Türkçe iletişim kurma ihtiyacı", dailyLife: "iş, saha çalışmaları, aile, doğa ve güvenli iletişim", angle: "uzak coğrafyada ölçülü sohbet" },
  { country: "Kamboçya", slug: "kambocya-sohbet", region: "Güneydoğu Asya", audience: "Kamboçya'daki Türkler ve tarih meraklıları", culture: "Angkor mirası, sakin şehirler ve turizm odaklı yaşam", diaspora: "Phnom Penh ve Siem Reap çevresinde Türkçe çevre arayışı", dailyLife: "turizm, eğitim, kültür, yemek ve günlük haberler", angle: "tarih ve seyahatle başlayan sohbet" },
  { country: "Laos", slug: "laos-sohbet", region: "Güneydoğu Asya", audience: "Laos'ta yaşayan Türkler ve sakin Asya yaşamını sevenler", culture: "Mekong kıyısı, yavaş şehir ritmi ve doğal iletişim", diaspora: "küçük topluluklarda Türkçe muhabbet ihtiyacı", dailyLife: "seyahat, doğa, iş, aile ve günlük gözlemler", angle: "sakin nehir kıyısında sohbet" },
  { country: "Myanmar", slug: "myanmar-sohbet", region: "Güneydoğu Asya", audience: "Myanmar ile bağı olan ve bölgeyi takip eden kullanıcılar", culture: "tapınaklar, tarih ve sakin gündelik hayat", diaspora: "bölge gündemini saygılı ve güvenli şekilde konuşma ihtiyacı", dailyLife: "aile haberleri, kültür, seyahat ve günlük gözlemler", angle: "ölçülü ve sakin bölge sohbeti" },
  { country: "Brunei", slug: "brunei-sohbet", region: "Güneydoğu Asya", audience: "Brunei'de yaşayan Türkler ve küçük ülke toplulukları", culture: "sakin şehir düzeni, aile odaklı yaşam ve tropik iklim", diaspora: "az sayıdaki Türk kullanıcının birbirini bulma isteği", dailyLife: "iş, aile, eğitim, doğa ve günlük planlar", angle: "küçük ülkede görünür sohbet" },
  { country: "Maldivler", slug: "maldivler-sohbet", region: "Hint Okyanusu", audience: "Maldivler'de çalışan Türkler ve turizm çevresi", culture: "ada turizmi, deniz, sezon temposu ve sakin yaşam", diaspora: "turizm çalışanlarının Türkçe sohbetle rahatlama ihtiyacı", dailyLife: "otelcilik, sahil, iş, aile özlemi ve günlük haberler", angle: "ada mesaisinden sonra rahat sohbet" },
  { country: "Kazakistan Türkleri", slug: "kazakistan-turkleri-sohbet", region: "Orta Asya", audience: "Kazakistan'daki Türk toplulukları ve Türk dünyası takipçileri", culture: "ortak tarih, bozkır hafızası ve modern şehir hayatı", diaspora: "Türk dünyası içinde ana dil ve kültür bağı kurma isteği", dailyLife: "Almatı, Astana, eğitim, gelenek ve güncel internet sohbeti", angle: "Türk dünyası içinde daha hedefli sohbet" },
  { country: "Kuzey Kıbrıs", slug: "kuzey-kibris-sohbet", region: "Doğu Akdeniz", audience: "Kuzey Kıbrıs'taki öğrenciler, çalışanlar ve ada sakinleri", culture: "üniversite yaşamı, ada rahatlığı ve Türkçe sosyal çevre", diaspora: "Türkiye'den gelen öğrencilerin hızlı çevre kurma ihtiyacı", dailyLife: "Lefkoşa, Girne, kampüs, sahil ve gece sohbetleri", angle: "öğrenci ve ada yaşamını buluşturan sohbet" },
  { country: "Doğu Timor", slug: "dogu-timor-sohbet", region: "Güneydoğu Asya", audience: "Doğu Timor ile bağı olan Türkçe konuşan kullanıcılar", culture: "ada yaşamı, sakin topluluklar ve uzak coğrafya deneyimi", diaspora: "az sayıdaki kullanıcının güvenli Türkçe iletişim ihtiyacı", dailyLife: "iş, saha çalışması, aile, sahil ve günlük haberler", angle: "uzak adada ölçülü sohbet" },
  { country: "Moritanya", slug: "moritanya-sohbet", region: "Batı Afrika", audience: "Moritanya'da yaşayan Türkler ve Sahra kültürünü merak edenler", culture: "Sahra etkisi, sakin şehirler ve geleneksel misafirperverlik", diaspora: "Nouakchott çevresinde Türkçe bağlantı arayışı", dailyLife: "iş, eğitim, aile, kültür ve gündelik dayanışma", angle: "çöl sakinliğinde samimi sohbet" },
  { country: "Mali", slug: "mali-sohbet", region: "Batı Afrika", audience: "Mali ile bağı olan Türkçe konuşan kullanıcılar", culture: "Batı Afrika müziği, tarih ve topluluk dayanışması", diaspora: "bölge gündemini güvenli ve saygılı konuşma ihtiyacı", dailyLife: "aile haberleri, iş, kültür, müzik ve günlük yaşam", angle: "duyarlı Batı Afrika sohbeti" },
  { country: "Nijer", slug: "nijer-sohbet", region: "Batı Afrika", audience: "Nijer'de yaşayan Türkler ve bölgeyle ilişkisi olanlar", culture: "Sahra geçişi, sakin sosyal hayat ve topluluk bağı", diaspora: "iş veya yardım çalışmaları için bulunanların Türkçe ihtiyacı", dailyLife: "iş, aile, güvenli iletişim, kültür ve günlük haberler", angle: "sakin ve ölçülü sohbet" },
  { country: "Çad", slug: "cad-sohbet", region: "Orta Afrika", audience: "Çad ile bağı olan Türkçe konuşan kullanıcılar", culture: "göl çevresi, geniş coğrafya ve dayanışma kültürü", diaspora: "uzak görevlerde veya işte bulunanların Türkçe bağ ihtiyacı", dailyLife: "iş, aile, gündem, güvenli iletişim ve günlük yaşam", angle: "uzak coğrafyada tanıdık muhabbet" },
  { country: "Kamerun", slug: "kamerun-sohbet", region: "Orta Afrika", audience: "Kamerun'daki Türkler ve Afrika kültürünü merak edenler", culture: "futbol, müzik, çok dilli yaşam ve sıcak sosyal ortam", diaspora: "Yaounde ve Douala çevresinde Türkçe arkadaşlık arayışı", dailyLife: "iş, eğitim, futbol, müzik ve aile haberleri", angle: "çok dilli ülkede Türkçe sohbet" },
  { country: "Fildişi Sahili", slug: "fildisi-sahili-sohbet", region: "Batı Afrika", audience: "Fildişi Sahili'nde yaşayan Türkler ve iş çevresi", culture: "Abidjan enerjisi, sahil, müzik ve ticaret", diaspora: "Batı Afrika'da Türkçe bağlantı ve rahatlama ihtiyacı", dailyLife: "iş, ticaret, futbol, aile ve günlük planlar", angle: "sahil ve ticaret temposunda sohbet" },
  { country: "Angola", slug: "angola-sohbet", region: "Güney Afrika", audience: "Angola'da çalışan Türkler ve bölgeyle bağı olanlar", culture: "Luanda hareketliliği, sahil ve çalışma odaklı yaşam", diaspora: "iş için bulunanların Türkçe sohbetle yakınlık kurma isteği", dailyLife: "iş, aile, sahil, futbol ve günlük haberler", angle: "çalışma gurbetinde samimi muhabbet" },
  { country: "Mozambik", slug: "mozambik-sohbet", region: "Güneydoğu Afrika", audience: "Mozambik'teki Türkler ve sahil kültürünü sevenler", culture: "Hint Okyanusu kıyısı, müzik ve sakin sosyal yaşam", diaspora: "Maputo çevresinde Türkçe konuşma ihtiyacı", dailyLife: "iş, turizm, sahil, aile ve günlük planlar", angle: "okyanus kıyısında rahat sohbet" },
  { country: "Zambiya", slug: "zambiya-sohbet", region: "Güney Afrika", audience: "Zambiya'da yaşayan Türkler ve doğa meraklıları", culture: "Victoria Şelalesi, sakin şehirler ve topluluk dayanışması", diaspora: "Lusaka çevresinde Türkçe çevre kurma isteği", dailyLife: "iş, doğa, aile, eğitim ve günlük haberler", angle: "doğa yakınlığında samimi sohbet" },
  { country: "Zimbabve", slug: "zimbabve-sohbet", region: "Güney Afrika", audience: "Zimbabve ile bağı olan Türkçe konuşan kullanıcılar", culture: "Harare yaşamı, doğa ve sakin sosyal çevre", diaspora: "uzak coğrafyada Türkçe bağlantı ihtiyacı", dailyLife: "iş, aile, doğa, kültür ve günlük planlar", angle: "uzak ülkede yakın sohbet" },
  { country: "Namibya", slug: "namibya-sohbet", region: "Güney Afrika", audience: "Namibya'da yaşayan Türkler ve çöl-doğa meraklıları", culture: "geniş çöller, sakin şehirler ve doğa odaklı yaşam", diaspora: "Windhoek çevresinde Türkçe sohbet ve arkadaşlık arayışı", dailyLife: "doğa, iş, aile, seyahat ve günlük haberler", angle: "geniş sessizlikte sıcak muhabbet" },
  { country: "Botsvana", slug: "botsvana-sohbet", region: "Güney Afrika", audience: "Botsvana'daki Türkler ve sakin Afrika yaşamını sevenler", culture: "Gaborone düzeni, doğa ve topluluk odaklı sosyal hayat", diaspora: "küçük Türk çevresinde görünür bağlantı ihtiyacı", dailyLife: "iş, doğa, aile, eğitim ve günlük planlar", angle: "sakin ülkede kolay sohbet" },
  { country: "Madagaskar", slug: "madagaskar-sohbet", region: "Hint Okyanusu", audience: "Madagaskar'da yaşayan Türkler ve ada doğasını sevenler", culture: "benzersiz doğa, ada yaşamı ve sakin sosyal ritim", diaspora: "uzak adada Türkçe iletişim kurma arayışı", dailyLife: "doğa, turizm, iş, aile ve günlük gözlemler", angle: "benzersiz adada tanıdık sohbet" },
  { country: "Mauritius", slug: "mauritius-sohbet", region: "Hint Okyanusu", audience: "Mauritius'taki Türkler ve ada yaşamı meraklıları", culture: "çok kültürlü ada, turizm ve sakin sahil atmosferi", diaspora: "küçük Türk çevresinde arkadaşlık ve Türkçe sohbet ihtiyacı", dailyLife: "turizm, sahil, iş, aile ve günlük planlar", angle: "çok kültürlü adada samimi sohbet" },
  { country: "Seyşeller", slug: "seyseller-sohbet", region: "Hint Okyanusu", audience: "Seyşeller'de yaşayan Türkler ve turizm çevresi", culture: "küçük ada topluluğu, deniz ve sakin yaşam", diaspora: "turizm çalışanlarının Türkçe sohbetle rahatlama ihtiyacı", dailyLife: "otelcilik, sahil, aile özlemi ve günlük haberler", angle: "küçük adada sıcak Türkçe alan" },
  { country: "Ruanda", slug: "ruanda-sohbet", region: "Doğu Afrika", audience: "Ruanda'daki Türkler ve Afrika'da yeni çevre arayanlar", culture: "Kigali düzeni, yeşil tepeler ve gelişen şehir yaşamı", diaspora: "iş veya kurum çalışmaları için bulunanların Türkçe ihtiyacı", dailyLife: "iş, eğitim, doğa, aile ve günlük haberler", angle: "düzenli şehirde sakin sohbet" },
  { country: "Burundi", slug: "burundi-sohbet", region: "Doğu Afrika", audience: "Burundi ile bağı olan Türkçe konuşan kullanıcılar", culture: "göl kıyısı, sakin topluluklar ve dayanışma", diaspora: "uzak coğrafyada güvenli Türkçe iletişim arayışı", dailyLife: "aile, iş, eğitim, gündem ve günlük yaşam", angle: "küçük toplulukta ölçülü sohbet" },
  { country: "Somali", slug: "somali-sohbet", region: "Doğu Afrika", audience: "Somali ile bağı olan Türkçe konuşan kullanıcılar", culture: "sahil, aile bağı ve güçlü dayanışma duygusu", diaspora: "Türkiye ile Somali arasındaki insani ve sosyal bağları konuşma isteği", dailyLife: "aile haberleri, iş, eğitim, güvenli iletişim ve kültür", angle: "duyarlı ve destekleyici sohbet" },
  { country: "Cibuti", slug: "cibuti-sohbet", region: "Doğu Afrika", audience: "Cibuti'de yaşayan Türkler ve bölgede çalışanlar", culture: "liman ülkesi, stratejik konum ve sıcak iklim", diaspora: "iş veya görev nedeniyle bulunanların Türkçe sohbet ihtiyacı", dailyLife: "liman, iş, aile, sahil ve günlük planlar", angle: "küçük ülkede pratik bağlantı" },
  { country: "Eritre", slug: "eritre-sohbet", region: "Doğu Afrika", audience: "Eritre ile bağı olan Türkçe konuşan kullanıcılar", culture: "Kızıldeniz kıyısı, sakin sosyal yapı ve tarih", diaspora: "bölgeyle bağlantısı olanların saygılı sohbet ihtiyacı", dailyLife: "aile, kültür, gündem, güvenli iletişim ve günlük yaşam", angle: "Kızıldeniz kıyısında ölçülü sohbet" },
  { country: "Gabon", slug: "gabon-sohbet", region: "Orta Afrika", audience: "Gabon'da yaşayan Türkler ve doğa odaklı yaşamı sevenler", culture: "ormanlar, sahil ve sakin şehir düzeni", diaspora: "Libreville çevresinde Türkçe bağlantı ihtiyacı", dailyLife: "iş, doğa, aile, seyahat ve günlük haberler", angle: "yeşil coğrafyada samimi sohbet" },
  { country: "Kongo", slug: "kongo-sohbet", region: "Orta Afrika", audience: "Kongo'da çalışan Türkler ve bölgeyle bağı olanlar", culture: "nehir kültürü, müzik ve hareketli şehir yaşamı", diaspora: "iş ve proje çevresinde Türkçe rahatlama ihtiyacı", dailyLife: "iş, aile, müzik, şehir gündemi ve günlük planlar", angle: "hareketli coğrafyada Türkçe muhabbet" },
  { country: "Demokratik Kongo Cumhuriyeti", slug: "demokratik-kongo-cumhuriyeti-sohbet", region: "Orta Afrika", audience: "Demokratik Kongo Cumhuriyeti'nde bulunan Türkler", culture: "geniş coğrafya, nehir yaşamı ve güçlü yerel çeşitlilik", diaspora: "uzak çalışma koşullarında Türkçe bağ kurma ihtiyacı", dailyLife: "iş, aile, güvenli iletişim, müzik ve günlük haberler", angle: "geniş coğrafyada yakınlık kuran sohbet" },
  { country: "Orta Afrika Cumhuriyeti", slug: "orta-afrika-cumhuriyeti-sohbet", region: "Orta Afrika", audience: "Orta Afrika Cumhuriyeti ile bağı olan Türkçe kullanıcılar", culture: "sakin topluluklar, saha çalışmaları ve dayanışma", diaspora: "uzak görevlerde Türkçe iletişim ihtiyacı", dailyLife: "iş, aile, güvenli iletişim, gündem ve günlük dayanışma", angle: "uzak bölgede ölçülü muhabbet" },
  { country: "Benin", slug: "benin-sohbet", region: "Batı Afrika", audience: "Benin'de yaşayan Türkler ve Batı Afrika kültürünü sevenler", culture: "Cotonou sahili, yerel pazarlar ve sıcak sosyal yaşam", diaspora: "küçük Türk çevresinde arkadaşlık arayışı", dailyLife: "iş, eğitim, sahil, aile ve günlük haberler", angle: "sahil pazarlarından çevrim içi sohbete" },
  { country: "Togo", slug: "togo-sohbet", region: "Batı Afrika", audience: "Togo'daki Türkler ve küçük ülke toplulukları", culture: "Lome sahili, sakin şehir hayatı ve misafirperverlik", diaspora: "az sayıdaki kullanıcının Türkçe bağ kurma ihtiyacı", dailyLife: "iş, aile, sahil, eğitim ve günlük planlar", angle: "küçük ülkede samimi sohbet" },
  { country: "Burkina Faso", slug: "burkina-faso-sohbet", region: "Batı Afrika", audience: "Burkina Faso ile bağı olan Türkçe konuşan kullanıcılar", culture: "topluluk dayanışması, müzik ve sade şehir yaşamı", diaspora: "bölge gündemini saygılı bir dille konuşma ihtiyacı", dailyLife: "aile, iş, güvenli iletişim, kültür ve günlük haberler", angle: "duyarlı ve sakin sohbet" },
  { country: "Gine", slug: "gine-sohbet", region: "Batı Afrika", audience: "Gine'de yaşayan Türkler ve bölgeyle bağı olanlar", culture: "Conakry sahili, müzik ve sıcak sosyal ortam", diaspora: "Batı Afrika'da Türkçe çevre kurma ihtiyacı", dailyLife: "iş, eğitim, aile, müzik ve günlük planlar", angle: "sahil ritminde Türkçe sohbet" },
  { country: "Sierra Leone", slug: "sierra-leone-sohbet", region: "Batı Afrika", audience: "Sierra Leone'deki Türkler ve yardım/iş çevresi", culture: "Freetown sahili, topluluk sıcaklığı ve sakin yaşam", diaspora: "uzak ülkede Türkçe konuşarak yakınlık kurma isteği", dailyLife: "iş, aile, sahil, eğitim ve günlük haberler", angle: "küçük topluluklarda sıcak sohbet" },
  { country: "Liberya", slug: "liberya-sohbet", region: "Batı Afrika", audience: "Liberya ile bağı olan Türkçe konuşan kullanıcılar", culture: "sahil yaşamı, topluluk dayanışması ve sakin şehirler", diaspora: "Monrovia çevresinde Türkçe bağlantı ihtiyacı", dailyLife: "iş, aile, eğitim, sahil ve günlük planlar", angle: "sahil ülkesinde ölçülü sohbet" },
  { country: "Yeşil Burun Adaları", slug: "yesil-burun-adalari-sohbet", region: "Atlantik", audience: "Yeşil Burun Adaları'nda yaşayan Türkler ve ada kültürü meraklıları", culture: "Atlantik adaları, müzik ve sakin sahil yaşamı", diaspora: "çok küçük Türk çevresinde görünür sohbet arayışı", dailyLife: "turizm, müzik, sahil, aile ve günlük haberler", angle: "Atlantik adalarında Türkçe muhabbet" },
  { country: "Gambiya", slug: "gambiya-sohbet", region: "Batı Afrika", audience: "Gambiya'da yaşayan Türkler ve küçük topluluklar", culture: "nehir ülkesi, sıcak sosyal dil ve turizm", diaspora: "Banjul çevresinde Türkçe çevre kurma ihtiyacı", dailyLife: "turizm, iş, aile, nehir ve günlük planlar", angle: "küçük coğrafyada samimi sohbet" },
  { country: "Gine Bissau", slug: "gine-bissau-sohbet", region: "Batı Afrika", audience: "Gine Bissau ile bağı olan Türkçe konuşan kullanıcılar", culture: "sahil, ada toplulukları ve sakin gündelik yaşam", diaspora: "az sayıdaki kullanıcının güvenli sohbet ihtiyacı", dailyLife: "aile, iş, eğitim, sahil ve günlük haberler", angle: "küçük ülkede ölçülü muhabbet" },
  { country: "Ekvator Ginesi", slug: "ekvator-ginesi-sohbet", region: "Orta Afrika", audience: "Ekvator Ginesi'ndeki Türkler ve bölgeyle bağı olanlar", culture: "ada ve ana kara yaşamı, petrol ekonomisi ve sıcak iklim", diaspora: "iş için bulunanların Türkçe rahatlama ihtiyacı", dailyLife: "iş, aile, sahil, gündem ve günlük planlar", angle: "tropik coğrafyada Türkçe sohbet" },
  { country: "São Tomé ve Príncipe", slug: "sao-tome-ve-principe-sohbet", region: "Orta Afrika", audience: "São Tomé ve Príncipe ile bağı olan Türkçe kullanıcılar", culture: "küçük ada yaşamı, kakao kültürü ve sakinlik", diaspora: "uzak adada Türkçe iletişim kurma ihtiyacı", dailyLife: "turizm, doğa, iş, aile ve günlük gözlemler", angle: "küçük adada tanıdık sohbet" },
  { country: "Komorlar", slug: "komorlar-sohbet", region: "Hint Okyanusu", audience: "Komorlar'daki Türkler ve ada coğrafyasını merak edenler", culture: "Hint Okyanusu adaları, sakin sosyal yaşam ve aile bağı", diaspora: "küçük topluluk içinde Türkçe bağ kurma arayışı", dailyLife: "sahil, iş, aile, kültür ve günlük haberler", angle: "ada sakinliğinde samimi sohbet" },
  { country: "Lesotho", slug: "lesotho-sohbet", region: "Güney Afrika", audience: "Lesotho ile bağı olan Türkçe konuşan kullanıcılar", culture: "dağ ülkesi, sakin şehirler ve topluluk dayanışması", diaspora: "az sayıdaki kullanıcının güvenli sohbet ihtiyacı", dailyLife: "doğa, iş, aile, eğitim ve günlük planlar", angle: "dağ ülkesinde yakın sohbet" },
  { country: "Esvatini", slug: "esvatini-sohbet", region: "Güney Afrika", audience: "Esvatini'deki Türkler ve küçük ülke yaşamını merak edenler", culture: "sakin ülke düzeni, gelenek ve topluluk bağı", diaspora: "küçük Türk çevresinde arkadaşlık arama ihtiyacı", dailyLife: "iş, aile, doğa, kültür ve günlük haberler", angle: "küçük ülkede samimi muhabbet" },
];

const sectionThemes = [
  "Gurbet ve Türkçe Muhabbet",
  "Yeni Arkadaşlık ve Tanışma",
  "Mobil Sohbet Deneyimi",
  "Ücretsiz ve Güvenli Sohbet",
  "IRC Kültürü ve Çevrim İçi Akış",
  "Güncel İnternet Sohbeti",
];

const cityRelated = cityPages
  .filter((page) =>
    ["istanbul-sohbet", "ankara-sohbet", "izmir-sohbet", "antalya-sohbet", "bursa-sohbet", "duzce-sohbet"].includes(page.slug)
  )
  .map((page) => ({
    href: `/${page.slug}`,
    label: page.title,
  }));

function pick<T>(items: T[], index: number, offset = 0) {
  return items[(index + offset) % items.length];
}

function buildCountryLinks(seed: CountrySeed, index: number): CountryLinkGroup[] {
  const countryLinks = countrySeeds
    .filter((item) => item.slug !== seed.slug)
    .slice(index + 1)
    .concat(countrySeeds.slice(0, index))
    .slice(0, 6)
    .map((item) => ({
      href: `/${item.slug}`,
      label: `${item.country} Sohbet`,
    }));

  const blogLinks = getLatestBlogPosts(4).map((post) => ({
    href: `/yazi/${post.slug}`,
    label: post.title,
  }));

  return [
    { title: "İlgili Ülkeler", links: countryLinks },
    { title: "İlgili Şehirler", links: cityRelated },
    { title: "Blog Yazıları", links: blogLinks },
  ];
}

function buildCountrySections(seed: CountrySeed, index: number) {
  const bridge = pick(
    [
      "Bu sayfanın amacı yalnızca bir sohbet kapısı göstermek değil; ülkeyi, orada yaşayan Türklerin günlük ritmini ve yeni gelenlerin gerçek ihtiyaçlarını aynı metinde anlaşılır kılmaktır.",
      "Ziyaretçi ister yıllardır orada yaşayan bir gurbetçi olsun ister yeni taşınmış bir öğrenci, sayfa onu aynı ortak noktada karşılar: Türkçe, rahat ve ölçülü muhabbet.",
      "Ülke bazlı sohbet sayfaları genel sohbet sayfalarından ayrılır; çünkü kullanıcının aklındaki yer, saat farkı, kültür ve çevre arayışı doğrudan içerikte karşılık bulur.",
    ],
    index
  );

  const safety = pick(
    [
      "Kişisel bilgileri hemen paylaşmadan, önce ortak konu ve genel odalar üzerinden ilerlemek daha sağlıklı bir tanışma sağlar.",
      "Rumuzla başlamak, özellikle yeni gelen kullanıcılar için hem rahat hem de kontrollü bir ilk adım oluşturur.",
      "Saygılı dil, sınırları koruma ve acele etmeden tanıma alışkanlığı çevrim içi sohbetin kalitesini belirler.",
    ],
    index,
    1
  );

  return [
    {
      title: `${seed.country} Sohbet Odaları`,
      intro: `${seed.country} sohbet sayfası, ${seed.audience} için hazırlanmış ülke odaklı bir tanışma ve iletişim alanıdır.`,
      paragraphs: [
        `${seed.country}, ${seed.region} içinde ${seed.culture} ile öne çıkan bir yaşam alanı sunar. Zurna.TR üzerindeki ${seed.country} sohbet içeriği, bu ülkeye ilgi duyan veya orada yaşayan kullanıcıların yalnızca rastgele bir odaya girmesini değil, kendine yakın bir muhabbet zemini bulmasını hedefler. ${bridge}`,
        `${seed.audience}, çoğu zaman ortak bir başlangıç cümlesine ihtiyaç duyar. ${seed.dailyLife} gibi konular konuşmayı doğal biçimde açar; böylece ilk mesaj zorlama görünmez. Sohbetin ülke adıyla ayrışması, aynı yerde yaşayanların birbirini fark etmesini ve uzakta olanların da o ülkeye dair güncel bir bağ kurmasını kolaylaştırır.`,
      ],
    },
    {
      title: `${seed.country} Türkleri ve Gurbetçi Sohbeti`,
      intro: `${seed.diaspora}, ${seed.country} sohbetinin en önemli arama niyetlerinden biridir.`,
      paragraphs: [
        `Gurbet sohbeti yalnızca memleket özlemini anlatmaz; aynı zamanda yeni düzen kurma, iş veya okul temposunu paylaşma, çocukların iki kültür arasında büyümesini konuşma ve benzer deneyimleri olan kişilerden küçük tavsiyeler alma ihtiyacını da taşır. ${seed.country} sayfasında bu beklenti, abartılı vaatler yerine sakin ve gerçekçi bir dille ele alınır.`,
        `${seed.country} içinde yaşayan Türkler için çevrim içi sohbet, günün yorgunluğunu azaltan kısa bir mola olabilir. Bazı kullanıcılar sadece Türkçe birkaç cümle duymak ister, bazıları yeni arkadaş edinmek ister, bazıları da memleket gündemini takip ederken yanında konuşacak birini arar. Bu farklı niyetler aynı sayfada doğal bir akışla buluşur.`,
      ],
    },
    {
      title: `${seed.country} İçin Mobil Sohbet ve Kolay Giriş`,
      intro: `Mobil sohbet, ${seed.country} sayfasında özellikle hızlı erişim isteyen kullanıcılar için öne çıkar.`,
      paragraphs: [
        `Telefonla gelen ziyaretçi uzun formlar, karmaşık menüler veya zor okunan ekranlar istemez. Zurna.TR, ülke sayfasından sohbet girişine giden yolu sade tutar; kullanıcı önce neyle karşılaşacağını okur, sonra dilerse "Hemen Sohbete Katıl" alanıyla canlı ortama geçer. Bu yaklaşım, özellikle iş çıkışı, toplu taşıma, okul molası veya gece saatlerinde yapılan kısa ziyaretlerde önemlidir.`,
        `${seed.country} sohbet deneyimi masaüstüyle sınırlı değildir. Mobil cihazlardan gelen kullanıcılar da ${seed.dailyLife} etrafında konuşabilir, yeni kişilere selam verebilir ve sohbetin temposunu kendi zamanına göre ayarlayabilir. Mobil uyum, program indirmeden web üzerinden sohbet etmek isteyenler için pratik bir güven duygusu oluşturur.`,
      ],
    },
    {
      title: `${seed.country} Ücretsiz ve Güvenli Sohbet Yaklaşımı`,
      intro: `Ücretsiz sohbet beklentisi, ${seed.country} sayfasında kalite ve güven duygusuyla birlikte düşünülür.`,
      paragraphs: [
        `Bir sohbet sayfasının ücretsiz olması, içeriğin yüzeysel veya kontrolsüz olması gerektiği anlamına gelmez. Kullanıcılar açık bir anlatım, rahat bir giriş yolu, mobil uyum ve seviyeli bir iletişim tonu bekler. ${seed.country} sohbet sayfası bu nedenle arama niyetini kısa anahtar kelime tekrarlarına sıkıştırmaz; ülke deneyimini, arkadaşlık ihtiyacını ve güvenli sohbet alışkanlıklarını birlikte açıklar.`,
        `${safety} Bu tutum, yeni arkadaşlıkların daha doğal kurulmasına yardımcı olur. ${seed.country} gibi belirli bir ülke odağı olduğunda kullanıcılar ortak şehir, okul, iş alanı, kültür veya gündem üzerinden konuşmaya başlayabilir; bu da sohbeti daha faydalı ve daha az rastgele hale getirir.`,
      ],
    },
    {
      title: `${seed.country} Sohbetinde IRC Kültürü`,
      intro: `IRC kültürü, Zurna.TR'nin ülke sayfalarındaki çevrim içi sohbet anlayışına klasik bir temel kazandırır.`,
      paragraphs: [
        `IRC geleneğinde sohbet odaları, rumuzlar, kanallar ve anlık yazışma akışı önemli yer tutar. ${seed.country} sayfası bu kültürü modern web deneyimiyle birleştirir: kullanıcı teknik ayrıntıya boğulmadan sohbet mantığını anlar, ardından ister genel sohbet ister ülke odaklı tanışma niyetiyle ilerleyebilir. Böylece eski chat alışkanlığı ile güncel mobil kullanım arasında anlaşılır bir bağ kurulur.`,
        `${seed.angle.charAt(0).toUpperCase()}${seed.angle.slice(1)}, IRC'nin hızlı ve doğrudan yazışma ruhuyla uyumludur. Kullanıcılar uzun profil düzenlemelerine girmeden, kendilerini tanıtan kısa bir rumuzla ortama dahil olabilir. Bu yapı, hem nostaljik sohbet kültürünü sevenlere hem de ilk kez çevrim içi sohbet deneyecek kişilere sade bir başlangıç verir.`,
      ],
    },
    {
      title: `${seed.country} Arkadaşlık ve Güncel İnternet Sohbeti`,
      intro: `Güncel internet sohbeti, ${seed.country} gibi ülke odaklı sayfalarda yalnızca boş zaman etkinliği değil, sosyal çevre kurma aracıdır.`,
      paragraphs: [
        `Yeni bir ülkede çevre edinmek bazen beklenenden daha yavaş ilerler. Dil, çalışma saatleri, okul düzeni, aile sorumlulukları veya şehirler arası mesafe insanları çevrim içi tanışmaya yöneltebilir. ${seed.country} sohbet sayfası, bu ihtiyacı doğal kabul eder ve kullanıcıyı spam hissi veren ifadeler yerine faydalı başlıklarla karşılar.`,
        `Arkadaşlık sohbeti zamanla gelişen bir süreçtir. İlk mesajda ortak bir konu açmak, karşı tarafın sınırlarına saygı göstermek ve sohbeti aceleye getirmemek önemlidir. ${seed.country} özelinde ${seed.dailyLife} gibi başlıklar, kullanıcıların birbirini daha gerçekçi tanımasına yardım eder. Bu yüzden sayfa hem SEO hem de kullanıcı faydası açısından ülkeye özel, okunabilir ve yönlendirici bir içerik sunar.`,
      ],
    },
  ];
}

function buildCountryFaq(seed: CountrySeed, index: number) {
  const firstTopic = pick(["gurbetçiler", "öğrenciler", "çalışanlar"], index);
  const secondTopic = pick(["mobil giriş", "ücretsiz sohbet", "IRC kültürü"], index, 2);

  return [
    {
      question: `${seed.country} sohbet sayfası kimler için uygun?`,
      answer: `${seed.audience} için uygundur. Ülke odaklı yapı sayesinde ortak gündem, memleket bağı, ${seed.dailyLife} gibi konular üzerinden doğal sohbet başlatılabilir.`,
    },
    {
      question: `${seed.country} içinde yaşayan ${firstTopic} bu sayfadan nasıl faydalanabilir?`,
      answer: `Benzer deneyime sahip kişilerle tanışmak, günlük yaşamı konuşmak ve Türkçe muhabbetle rahatlamak için sayfadaki sohbet giriş alanı kullanılabilir.`,
    },
    {
      question: `${seed.country} sohbet mobil telefonda kullanılabilir mi?`,
      answer: `Evet. Sayfa mobil cihazlardan okunabilir; kullanıcılar sohbet girişine telefon veya tablet üzerinden kolayca geçebilir.`,
    },
    {
      question: `${seed.country} sohbetinde hangi konular doğal olur?`,
      answer: `${seed.dailyLife}, ülke gündemi, Türkçe müzik, arkadaşlık, aile haberleri ve güvenli çevrim içi sohbet gibi başlıklar doğal başlangıç konularıdır.`,
    },
    {
      question: `${seed.country} için ${secondTopic} arayanlar nelere dikkat etmeli?`,
      answer: `Rumuzla başlamak, kişisel bilgileri hemen paylaşmamak, saygılı bir dil kullanmak ve sohbeti karşılıklı güven oluştukça ilerletmek önemlidir.`,
    },
    {
      question: `${seed.country} sohbet sayfasındaki ilgili linkler ne işe yarar?`,
      answer: `İlgili ülkeler, şehir sayfaları ve blog yazıları kullanıcıya alternatif sohbet yolları sunar; böylece ziyaretçi tek bir sayfada kalmadan Zurna.TR içindeki doğru içeriğe ulaşabilir.`,
    },
  ];
}

export const countryPages: CountryPage[] = countrySeeds.map((seed, index) => ({
  ...seed,
  title: `${seed.country} Sohbet`,
  seoTitle: `${seed.country} Sohbet | Gurbetçiler İçin Mobil ve Ücretsiz Sohbet - Zurna.TR`,
  description: `${seed.country} sohbet sayfası ile ${seed.audience.toLocaleLowerCase("tr-TR")} için mobil uyumlu, ücretsiz, güvenli ve Türkçe çevrim içi sohbet deneyimini keşfedin.`,
  summary: `${seed.country} sohbet, ${seed.diaspora} etrafında şekillenen; yeni arkadaşlık, mobil sohbet, ücretsiz sohbet ve IRC kültürünü doğal biçimde birleştiren ülke odaklı Zurna.TR sayfasıdır.`,
  heroTitle: `${seed.country} Sohbet`,
  heroText: `${seed.country} odaklı bu sayfa, ${seed.audience.toLocaleLowerCase("tr-TR")} için hazırlanmış samimi, okunabilir ve faydalı bir sohbet başlangıcı sunar.`,
  highlights: [
    pick(sectionThemes, index),
    "Mobil uyumlu giriş",
    "Ücretsiz sohbet",
    "Güvenli tanışma",
  ],
  contentSections: buildCountrySections(seed, index),
  faqs: buildCountryFaq(seed, index),
  relatedGroups: buildCountryLinks(seed, index),
}));

export function getCountryPage(slug: string) {
  return countryPages.find((page) => page.slug === slug);
}

export function getCountryPageUrl(page: CountryPage) {
  return `${siteUrl}/${page.slug}`;
}

export function buildCountryMetadata(page: CountryPage): Metadata {
  const canonical = getCountryPageUrl(page);
  const image = `${siteUrl}/zurna-logo-cropped.png`;

  return {
    title: page.seoTitle,
    description: page.description,
    keywords: [
      `${page.country} sohbet`,
      `${page.country} chat`,
      `${page.country} Türkleri sohbet`,
      "gurbetçi sohbet",
      "mobil sohbet",
      "ücretsiz sohbet",
      "güvenli sohbet",
      "IRC sohbet",
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
      type: "article",
      images: [
        {
          url: image,
          alt: `${page.country} Sohbet - Zurna.TR`,
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

export function buildCountryPageSchema(page: CountryPage) {
  const url = getCountryPageUrl(page);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: page.title,
        description: page.description,
        inLanguage: "tr-TR",
        author: {
          "@type": "Organization",
          name: "Zurna.TR",
        },
        publisher: {
          "@type": "Organization",
          name: "Zurna.TR",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/zurna-logo-cropped.png`,
          },
        },
        mainEntityOfPage: url,
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
        mainEntity: page.faqs.map((item) => ({
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
