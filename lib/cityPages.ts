import { siteUrl } from "@/lib/sohbetSeoPages";

export type CityPage = {
  city: string;
  slug: string;
  title: string;
  description: string;
  summary: string;
  contentSections: {
    title: string;
    paragraphs: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedLinks: {
    href: string;
    label: string;
  }[];
};

type CitySeed = {
  city: string;
  slug: string;
  region: string;
  character: string;
  audience: string;
  topic: string;
};

const popularCityLinks = [
  { href: "/istanbul-sohbet", label: "İstanbul Sohbet" },
  { href: "/ankara-sohbet", label: "Ankara Sohbet" },
  { href: "/izmir-sohbet", label: "İzmir Sohbet" },
  { href: "/bursa-sohbet", label: "Bursa Sohbet" },
  { href: "/antalya-sohbet", label: "Antalya Sohbet" },
  { href: "/duzce-sohbet", label: "Düzce Sohbet" },
];

const citySeeds: CitySeed[] = [
  { city: "Adana", slug: "adana-sohbet", region: "Akdeniz", character: "enerjik ve sıcak şehir kültürü", audience: "Adana'da yaşayan veya Adana'yı merak eden kullanıcılar", topic: "kebap, Seyhan, üniversite hayatı ve gündelik muhabbet" },
  { city: "Adıyaman", slug: "adiyaman-sohbet", region: "Güneydoğu Anadolu", character: "Nemrut'un gölgesindeki sakin ve samimi atmosfer", audience: "Adıyaman çevresinden yeni insanlarla tanışmak isteyenler", topic: "Nemrut, yerel yaşam, aile bağları ve dostluk sohbetleri" },
  { city: "Afyonkarahisar", slug: "afyonkarahisar-sohbet", region: "Ege", character: "termal kültürü ve yol üstü buluşmalarla bilinen şehir yapısı", audience: "Afyonkarahisar'dan sohbet arkadaşı arayan kullanıcılar", topic: "termal tatil, sucuk, kaymak ve sakin muhabbet" },
  { city: "Ağrı", slug: "agri-sohbet", region: "Doğu Anadolu", character: "dağ manzaraları ve güçlü yerel aidiyet", audience: "Ağrı ve çevresindeki kullanıcılarla tanışmak isteyenler", topic: "Ağrı Dağı, kış yaşamı, memleket sohbeti ve arkadaşlık" },
  { city: "Amasya", slug: "amasya-sohbet", region: "Karadeniz", character: "tarihi evleri ve Yeşilırmak kıyısındaki huzurlu doku", audience: "Amasya'nın sakin sohbet havasını arayanlar", topic: "tarih, nehir kıyısı, öğrenci yaşamı ve kültür sohbetleri" },
  { city: "Ankara", slug: "ankara-sohbet", region: "İç Anadolu", character: "başkent temposu ve düzenli şehir yaşamı", audience: "Ankara'da yaşayan öğrenciler, çalışanlar ve yeni çevre arayanlar", topic: "Kızılay, üniversiteler, memur hayatı ve güncel konular" },
  { city: "Antalya", slug: "antalya-sohbet", region: "Akdeniz", character: "turizm, deniz ve yıl boyu hareketli sosyal yaşam", audience: "Antalya'da sohbet ve yeni arkadaşlık arayan kullanıcılar", topic: "sahil, turizm, yazlık yaşam ve canlı muhabbet" },
  { city: "Artvin", slug: "artvin-sohbet", region: "Karadeniz", character: "yeşil vadileri ve doğa tutkusu", audience: "Artvin'in doğa ruhunu paylaşan sohbet kullanıcıları", topic: "yaylalar, doğa yürüyüşü, Karadeniz kültürü ve sakin sohbet" },
  { city: "Aydın", slug: "aydin-sohbet", region: "Ege", character: "Ege rahatlığı ve sıcak ilçe yaşamı", audience: "Aydın ve çevresinden samimi sohbet arayanlar", topic: "Kuşadası, incir, üniversite yaşamı ve Ege muhabbeti" },
  { city: "Balıkesir", slug: "balikesir-sohbet", region: "Marmara", character: "Ege ile Marmara arasında dengeli ve geniş yaşam alanı", audience: "Balıkesir'de yeni sohbet çevresi kurmak isteyenler", topic: "Ayvalık, Edremit, sahil yaşamı ve yerel dostluk" },
  { city: "Bilecik", slug: "bilecik-sohbet", region: "Marmara", character: "tarihi kökleri ve küçük şehir samimiyeti", audience: "Bilecik'te sakin sohbet ortamı arayan kullanıcılar", topic: "Osmanlı tarihi, öğrenci hayatı, komşuluk ve günlük sohbet" },
  { city: "Bingöl", slug: "bingol-sohbet", region: "Doğu Anadolu", character: "doğa, yayla ve güçlü memleket bağı", audience: "Bingöl çevresinden arkadaşlık kurmak isteyenler", topic: "doğa, yöresel yaşam, memleket özlemi ve sohbet odaları" },
  { city: "Bitlis", slug: "bitlis-sohbet", region: "Doğu Anadolu", character: "tarihi geçitleri ve Van Gölü çevresiyle özgün şehir havası", audience: "Bitlis'ten samimi muhabbet arayan kullanıcılar", topic: "tarih, kış yaşamı, göl çevresi ve dostluk" },
  { city: "Bolu", slug: "bolu-sohbet", region: "Karadeniz", character: "ormanları ve doğayla iç içe yaşamı", audience: "Bolu'da sakin ve doğal sohbet isteyenler", topic: "Abant, Gölcük, kamp, üniversite ve doğa sohbeti" },
  { city: "Burdur", slug: "burdur-sohbet", region: "Akdeniz", character: "göl kültürü ve sakin şehir ritmi", audience: "Burdur'da yeni insanlarla tanışmak isteyenler", topic: "Salda, üniversite, yerel yaşam ve samimi sohbet" },
  { city: "Bursa", slug: "bursa-sohbet", region: "Marmara", character: "sanayi, tarih ve yeşil şehir dokusu", audience: "Bursa'da sohbet odalarına katılmak isteyen kullanıcılar", topic: "Uludağ, tarihi çarşı, iş hayatı ve arkadaşlık" },
  { city: "Çanakkale", slug: "canakkale-sohbet", region: "Marmara", character: "tarih, üniversite ve deniz kıyısı yaşamı", audience: "Çanakkale'de sosyal çevre arayanlar", topic: "boğaz, üniversite, tarih ve sahil muhabbeti" },
  { city: "Çankırı", slug: "cankiri-sohbet", region: "İç Anadolu", character: "sakin şehir düzeni ve güçlü yerel bağlar", audience: "Çankırı'da sohbet etmek isteyen kullanıcılar", topic: "tuz mağarası, yerel yaşam, komşuluk ve günlük sohbet" },
  { city: "Çorum", slug: "corum-sohbet", region: "Karadeniz", character: "Hitit mirası ve İç Anadolu'ya yakın şehir dili", audience: "Çorum'dan yeni arkadaşlık arayanlar", topic: "leblebi, tarih, şehir gündemi ve samimi muhabbet" },
  { city: "Denizli", slug: "denizli-sohbet", region: "Ege", character: "Pamukkale, tekstil ve çalışkan şehir temposu", audience: "Denizli'de sohbet ve arkadaşlık arayan kullanıcılar", topic: "Pamukkale, iş hayatı, üniversite ve Ege sohbeti" },
  { city: "Diyarbakır", slug: "diyarbakir-sohbet", region: "Güneydoğu Anadolu", character: "surları, kültürü ve güçlü muhabbet geleneği", audience: "Diyarbakır'da samimi sohbet arayanlar", topic: "tarih, müzik, yerel lezzetler ve dostluk" },
  { city: "Edirne", slug: "edirne-sohbet", region: "Marmara", character: "sınır şehri kültürü ve tarihi dokusu", audience: "Edirne'den sohbet arkadaşı arayan kullanıcılar", topic: "Selimiye, üniversite, Trakya kültürü ve günlük sohbet" },
  { city: "Elazığ", slug: "elazig-sohbet", region: "Doğu Anadolu", character: "Harput kültürü ve sıcak yerel muhabbet", audience: "Elazığ'da yeni insanlarla tanışmak isteyenler", topic: "Harput, müzik, yerel yaşam ve arkadaşlık sohbeti" },
  { city: "Erzincan", slug: "erzincan-sohbet", region: "Doğu Anadolu", character: "dağlar, ova ve sakin şehir dengesi", audience: "Erzincan çevresinden sohbet etmek isteyenler", topic: "doğa, üniversite, memleket sohbeti ve günlük yaşam" },
  { city: "Erzurum", slug: "erzurum-sohbet", region: "Doğu Anadolu", character: "kış kültürü, üniversite ve güçlü şehir kimliği", audience: "Erzurum'da arkadaşlık ve sohbet arayanlar", topic: "Palandöken, cağ kebabı, öğrenci hayatı ve kış sohbeti" },
  { city: "Eskişehir", slug: "eskisehir-sohbet", region: "İç Anadolu", character: "öğrenci şehri enerjisi ve canlı sosyal yaşam", audience: "Eskişehir'de yeni çevre edinmek isteyen kullanıcılar", topic: "Porsuk, üniversiteler, kafeler ve genç sohbetleri" },
  { city: "Gaziantep", slug: "gaziantep-sohbet", region: "Güneydoğu Anadolu", character: "gastronomi, ticaret ve güçlü şehir enerjisi", audience: "Gaziantep'te sohbet odası arayan kullanıcılar", topic: "baklava, yemek kültürü, iş hayatı ve arkadaşlık" },
  { city: "Giresun", slug: "giresun-sohbet", region: "Karadeniz", character: "fındık, deniz ve Karadeniz samimiyeti", audience: "Giresun'da muhabbet etmek isteyenler", topic: "fındık bahçeleri, sahil, yayla ve yerel sohbet" },
  { city: "Gümüşhane", slug: "gumushane-sohbet", region: "Karadeniz", character: "dağlık yapı ve sakin memleket havası", audience: "Gümüşhane'de yeni sohbet çevresi arayanlar", topic: "yaylalar, pestil, köme ve memleket sohbeti" },
  { city: "Hakkari", slug: "hakkari-sohbet", region: "Doğu Anadolu", character: "dağ kültürü ve güçlü yerel dayanışma", audience: "Hakkari'den samimi sohbet arayan kullanıcılar", topic: "doğa, kış yaşamı, yerel bağlar ve dostluk" },
  { city: "Hatay", slug: "hatay-sohbet", region: "Akdeniz", character: "çok kültürlü yapı ve zengin sofra geleneği", audience: "Hatay'da sohbet ve tanışma arayanlar", topic: "Antakya, lezzetler, kültür, dayanışma ve muhabbet" },
  { city: "Isparta", slug: "isparta-sohbet", region: "Akdeniz", character: "gül kokulu şehir kimliği ve öğrenci yaşamı", audience: "Isparta'da yeni insanlarla tanışmak isteyenler", topic: "gül, göller, üniversite ve sakin sohbet" },
  { city: "Mersin", slug: "mersin-sohbet", region: "Akdeniz", character: "sahil, liman ve hareketli Akdeniz yaşamı", audience: "Mersin'de canlı sohbet arayan kullanıcılar", topic: "sahil, tantuni, yazlık yaşam ve arkadaşlık" },
  { city: "İstanbul", slug: "istanbul-sohbet", region: "Marmara", character: "kalabalık, hızlı ve çok kültürlü metropol yaşamı", audience: "İstanbul'da yeni arkadaşlık ve sohbet arayanlar", topic: "semtler, iş temposu, üniversiteler ve gece sohbeti" },
  { city: "İzmir", slug: "izmir-sohbet", region: "Ege", character: "Ege rahatlığı, sahil kültürü ve sosyal yaşam", audience: "İzmir'de samimi sohbet arayan kullanıcılar", topic: "Kordon, sahil, üniversite, müzik ve Ege muhabbeti" },
  { city: "Kars", slug: "kars-sohbet", region: "Doğu Anadolu", character: "kış, tarih ve sınır şehri atmosferi", audience: "Kars'ta sohbet arkadaşı arayanlar", topic: "Ani, kaşar, kış kültürü ve memleket sohbeti" },
  { city: "Kastamonu", slug: "kastamonu-sohbet", region: "Karadeniz", character: "tarihi konaklar ve sakin Karadeniz iç yaşamı", audience: "Kastamonu'dan muhabbet arayan kullanıcılar", topic: "tarih, doğa, yerel lezzetler ve sohbet odaları" },
  { city: "Kayseri", slug: "kayseri-sohbet", region: "İç Anadolu", character: "ticaret, Erciyes ve güçlü şehir disiplini", audience: "Kayseri'de yeni insanlarla tanışmak isteyenler", topic: "Erciyes, mantı, iş hayatı ve şehir gündemi" },
  { city: "Kırklareli", slug: "kirklareli-sohbet", region: "Marmara", character: "Trakya kültürü ve sakin sınır şehri yaşamı", audience: "Kırklareli'nde sohbet etmek isteyenler", topic: "Trakya, bağlar, üniversite ve gündelik muhabbet" },
  { city: "Kırşehir", slug: "kirsehir-sohbet", region: "İç Anadolu", character: "Abdal kültürü ve İç Anadolu samimiyeti", audience: "Kırşehir'de arkadaşlık arayan kullanıcılar", topic: "müzik, yerel kültür, öğrenci yaşamı ve sohbet" },
  { city: "Kocaeli", slug: "kocaeli-sohbet", region: "Marmara", character: "sanayi, körfez ve yoğun şehir temposu", audience: "Kocaeli'de yeni çevre edinmek isteyenler", topic: "İzmit, Gebze, iş hayatı ve hızlı şehir sohbeti" },
  { city: "Konya", slug: "konya-sohbet", region: "İç Anadolu", character: "geniş şehir yapısı ve köklü kültür", audience: "Konya'da seviyeli sohbet arayan kullanıcılar", topic: "Mevlana, üniversite, aile yaşamı ve sakin muhabbet" },
  { city: "Kütahya", slug: "kutahya-sohbet", region: "Ege", character: "çini kültürü ve öğrenci şehri havası", audience: "Kütahya'da sohbet odalarına katılmak isteyenler", topic: "çini, üniversite, termal yaşam ve arkadaşlık" },
  { city: "Malatya", slug: "malatya-sohbet", region: "Doğu Anadolu", character: "kayısı, güçlü yerel bağ ve şehir dayanışması", audience: "Malatya'da yeni sohbet çevresi arayanlar", topic: "kayısı, şehir gündemi, memleket sohbeti ve dostluk" },
  { city: "Manisa", slug: "manisa-sohbet", region: "Ege", character: "Ege üretim kültürü ve İzmir'e yakın sosyal yaşam", audience: "Manisa'da sohbet etmek isteyen kullanıcılar", topic: "Spil, mesir, iş hayatı ve Ege sohbeti" },
  { city: "Kahramanmaraş", slug: "kahramanmaras-sohbet", region: "Akdeniz", character: "dondurma, edebiyat ve güçlü şehir hafızası", audience: "Kahramanmaraş'ta samimi sohbet arayanlar", topic: "dondurma, yerel kültür, dayanışma ve arkadaşlık" },
  { city: "Mardin", slug: "mardin-sohbet", region: "Güneydoğu Anadolu", character: "taş sokakları ve çok kültürlü şehir dili", audience: "Mardin'de kültürlü muhabbet arayanlar", topic: "tarih, mimari, kültür, fotoğraf ve dostluk" },
  { city: "Muğla", slug: "mugla-sohbet", region: "Ege", character: "turizm, üniversite ve doğayla iç içe yaşam", audience: "Muğla'da yeni insanlarla tanışmak isteyenler", topic: "Bodrum, Fethiye, üniversite, deniz ve yaz sohbeti" },
  { city: "Muş", slug: "mus-sohbet", region: "Doğu Anadolu", character: "ova kültürü ve sakin memleket bağı", audience: "Muş çevresinden sohbet arkadaşı arayanlar", topic: "kış yaşamı, yerel gündem, memleket ve arkadaşlık" },
  { city: "Nevşehir", slug: "nevsehir-sohbet", region: "İç Anadolu", character: "Kapadokya'nın turistik ve masalsı atmosferi", audience: "Nevşehir'de sohbet ve tanışma arayanlar", topic: "Kapadokya, turizm, üniversite ve kültür sohbeti" },
  { city: "Niğde", slug: "nigde-sohbet", region: "İç Anadolu", character: "üniversite, tarım ve sakin şehir dengesi", audience: "Niğde'de yeni çevre arayan kullanıcılar", topic: "üniversite, Aladağlar, şehir gündemi ve sohbet" },
  { city: "Ordu", slug: "ordu-sohbet", region: "Karadeniz", character: "deniz, yayla ve Karadeniz sıcaklığı", audience: "Ordu'da samimi sohbet arayanlar", topic: "Boztepe, fındık, sahil ve Karadeniz muhabbeti" },
  { city: "Rize", slug: "rize-sohbet", region: "Karadeniz", character: "çay, yayla ve hareketli Karadeniz mizacı", audience: "Rize'de sohbet odası arayan kullanıcılar", topic: "çay, yaylalar, yağmur, futbol ve yerel sohbet" },
  { city: "Sakarya", slug: "sakarya-sohbet", region: "Marmara", character: "üniversite, doğa ve Marmara geçiş kültürü", audience: "Sakarya'da yeni insanlarla tanışmak isteyenler", topic: "Sapanca, üniversite, iş hayatı ve arkadaşlık" },
  { city: "Samsun", slug: "samsun-sohbet", region: "Karadeniz", character: "büyük Karadeniz şehri ve sahil yaşamı", audience: "Samsun'da canlı sohbet arayan kullanıcılar", topic: "sahil, üniversite, şehir merkezi ve Karadeniz sohbeti" },
  { city: "Siirt", slug: "siirt-sohbet", region: "Güneydoğu Anadolu", character: "yerel lezzetler ve güçlü komşuluk bağı", audience: "Siirt'te sohbet etmek isteyen kullanıcılar", topic: "büryan, fıstık, aile kültürü ve dostluk" },
  { city: "Sinop", slug: "sinop-sohbet", region: "Karadeniz", character: "sakin liman şehri ve huzurlu yaşam", audience: "Sinop'ta sakin sohbet arayanlar", topic: "liman, tarih, deniz ve huzurlu muhabbet" },
  { city: "Sivas", slug: "sivas-sohbet", region: "İç Anadolu", character: "geniş coğrafya ve güçlü memleket kültürü", audience: "Sivas'ta arkadaşlık ve sohbet arayanlar", topic: "aşık geleneği, kış, üniversite ve şehir gündemi" },
  { city: "Tekirdağ", slug: "tekirdag-sohbet", region: "Marmara", character: "Trakya sahili ve hareketli ilçe yaşamı", audience: "Tekirdağ'da sohbet odalarına katılmak isteyenler", topic: "sahil, Trakya kültürü, iş hayatı ve arkadaşlık" },
  { city: "Tokat", slug: "tokat-sohbet", region: "Karadeniz", character: "tarihi doku ve İç Karadeniz samimiyeti", audience: "Tokat'ta yeni sohbet çevresi arayanlar", topic: "tarih, bağ evleri, yerel lezzetler ve muhabbet" },
  { city: "Trabzon", slug: "trabzon-sohbet", region: "Karadeniz", character: "futbol, yayla ve güçlü Karadeniz enerjisi", audience: "Trabzon'da canlı sohbet arayan kullanıcılar", topic: "futbol, yaylalar, sahil ve Karadeniz mizahı" },
  { city: "Tunceli", slug: "tunceli-sohbet", region: "Doğu Anadolu", character: "doğa, kültür ve özgün şehir kimliği", audience: "Tunceli'de seviyeli sohbet arayanlar", topic: "Munzur, doğa, kültür, üniversite ve sakin sohbet" },
  { city: "Şanlıurfa", slug: "sanliurfa-sohbet", region: "Güneydoğu Anadolu", character: "tarih, müzik ve güçlü sofra kültürü", audience: "Şanlıurfa'da yeni insanlarla tanışmak isteyenler", topic: "Balıklıgöl, sıra gecesi, yemek kültürü ve dostluk" },
  { city: "Uşak", slug: "usak-sohbet", region: "Ege", character: "Ege ile İç Anadolu arasında sakin şehir dengesi", audience: "Uşak'ta sohbet arkadaşı arayanlar", topic: "üniversite, halı kültürü, şehir gündemi ve muhabbet" },
  { city: "Van", slug: "van-sohbet", region: "Doğu Anadolu", character: "göl, kahvaltı ve güçlü şehir canlılığı", audience: "Van'da sohbet odası arayan kullanıcılar", topic: "Van Gölü, kahvaltı, üniversite ve doğu sohbeti" },
  { city: "Yozgat", slug: "yozgat-sohbet", region: "İç Anadolu", character: "bozkır kültürü ve sakin şehir yaşamı", audience: "Yozgat'ta yeni arkadaşlık arayanlar", topic: "bozkır, memleket sohbeti, aile kültürü ve günlük yaşam" },
  { city: "Zonguldak", slug: "zonguldak-sohbet", region: "Karadeniz", character: "maden kültürü, sahil ve emekçi şehir ruhu", audience: "Zonguldak'ta samimi sohbet arayan kullanıcılar", topic: "maden, sahil, iş hayatı ve Karadeniz muhabbeti" },
  { city: "Aksaray", slug: "aksaray-sohbet", region: "İç Anadolu", character: "Kapadokya geçişi ve sakin şehir gelişimi", audience: "Aksaray'da sohbet etmek isteyenler", topic: "Ihlara, üniversite, şehir yaşamı ve arkadaşlık" },
  { city: "Bayburt", slug: "bayburt-sohbet", region: "Karadeniz", character: "küçük şehir samimiyeti ve güçlü memleket bağı", audience: "Bayburt'ta sohbet arkadaşı arayan kullanıcılar", topic: "kale, üniversite, memleket ve sakin muhabbet" },
  { city: "Karaman", slug: "karaman-sohbet", region: "İç Anadolu", character: "dil mirası ve üretim kültürüyle öne çıkan şehir", audience: "Karaman'da yeni insanlarla tanışmak isteyenler", topic: "tarih, üniversite, yerel yaşam ve sohbet" },
  { city: "Kırıkkale", slug: "kirikkale-sohbet", region: "İç Anadolu", character: "Ankara'ya yakınlığı ve sanayi şehir düzeni", audience: "Kırıkkale'de sohbet odası arayanlar", topic: "üniversite, iş yaşamı, yakın şehir gündemi ve arkadaşlık" },
  { city: "Batman", slug: "batman-sohbet", region: "Güneydoğu Anadolu", character: "genç nüfus ve gelişen şehir enerjisi", audience: "Batman'da yeni sohbet çevresi kurmak isteyenler", topic: "şehir merkezi, gençlik, iş hayatı ve samimi sohbet" },
  { city: "Şırnak", slug: "sirnak-sohbet", region: "Güneydoğu Anadolu", character: "dağlık coğrafya ve güçlü yerel dayanışma", audience: "Şırnak'ta sohbet etmek isteyen kullanıcılar", topic: "yerel yaşam, memleket bağı, dostluk ve günlük muhabbet" },
  { city: "Bartın", slug: "bartin-sohbet", region: "Karadeniz", character: "Amasra sahili ve sakin Karadeniz yaşamı", audience: "Bartın'da samimi sohbet arayanlar", topic: "Amasra, üniversite, sahil ve sakin muhabbet" },
  { city: "Ardahan", slug: "ardahan-sohbet", region: "Doğu Anadolu", character: "serin iklimi ve güçlü memleket duygusu", audience: "Ardahan çevresinden sohbet arkadaşı arayanlar", topic: "kış, yaylalar, memleket sohbeti ve dostluk" },
  { city: "Iğdır", slug: "igdir-sohbet", region: "Doğu Anadolu", character: "sınır kültürü ve bereketli ova yaşamı", audience: "Iğdır'da yeni insanlarla tanışmak isteyenler", topic: "Ağrı manzarası, ova, yerel kültür ve sohbet" },
  { city: "Yalova", slug: "yalova-sohbet", region: "Marmara", character: "termal, sahil ve İstanbul'a yakın sakin yaşam", audience: "Yalova'da sohbet etmek isteyen kullanıcılar", topic: "termal, sahil, yazlık yaşam ve arkadaşlık" },
  { city: "Karabük", slug: "karabuk-sohbet", region: "Karadeniz", character: "Safranbolu mirası ve üniversite yaşamı", audience: "Karabük'te sohbet odalarına katılmak isteyenler", topic: "Safranbolu, üniversite, tarih ve günlük sohbet" },
  { city: "Kilis", slug: "kilis-sohbet", region: "Güneydoğu Anadolu", character: "sınır şehri samimiyeti ve yerel lezzetleri", audience: "Kilis'te yeni sohbet çevresi arayanlar", topic: "yerel lezzetler, komşuluk, kültür ve muhabbet" },
  { city: "Osmaniye", slug: "osmaniye-sohbet", region: "Akdeniz", character: "Çukurova sıcaklığı ve gelişen şehir yapısı", audience: "Osmaniye'de arkadaşlık arayan kullanıcılar", topic: "yayla, yerel yaşam, iş hayatı ve sohbet" },
  { city: "Düzce", slug: "duzce-sohbet", region: "Karadeniz", character: "Marmara ile Karadeniz arasında hızlı erişimli şehir yapısı", audience: "Düzce'de sohbet ve yeni arkadaşlık arayanlar", topic: "Akçakoca, üniversite, doğa ve yerel muhabbet" },
];

function buildRelatedLinks(seed: CitySeed) {
  const cityLinks = popularCityLinks.filter((link) => link.href !== `/${seed.slug}`);

  return [
    ...cityLinks.slice(0, 5),
    { href: "/sohbet-odalari", label: "Sohbet Odaları" },
    { href: "/mobil-sohbet", label: "Mobil Sohbet" },
    { href: "/turkce-sohbet", label: "Türkçe Sohbet" },
  ];
}

export const cityPages: CityPage[] = citySeeds.map((seed) => ({
  city: seed.city,
  slug: seed.slug,
  title: `${seed.city} Sohbet`,
  description: `${seed.city} sohbet odaları ile ${seed.region} bölgesinden yeni insanlarla tanışın. Zurna.TR üzerinde mobil uyumlu, samimi ve şehir odaklı sohbet deneyimini keşfedin.`,
  summary: `${seed.city} sohbet sayfası, ${seed.audience} için hazırlanmış şehir odaklı bir tanışma ve muhabbet alanıdır.`,
  contentSections: [
    {
      title: `${seed.city} Sohbet Odaları`,
      paragraphs: [
        `${seed.city}, ${seed.character} ile sohbet arayan kullanıcılar için kendine özgü bir başlangıç noktası sunar. Bu sayfa, genel sohbet sayfalarından farklı olarak ${seed.city} çevresinde ortak konu bulmak isteyen ziyaretçilere odaklanır.`,
        `${seed.audience}, Zurna.TR üzerinden ${seed.topic} gibi başlıklarla doğal bir muhabbet başlatabilir. Şehir odaklı sohbet sayfaları, aynı memleketten gelen veya o şehri merak eden kişilerin daha hızlı bağ kurmasına yardımcı olur.`,
      ],
    },
    {
      title: `${seed.city} İçin Mobil ve Canlı Sohbet Deneyimi`,
      paragraphs: [
        `${seed.city} sohbet deneyimi yalnızca masaüstü kullanıcıları için düşünülmez. Telefon ve tabletlerden gelen ziyaretçiler de mobil uyumlu yapı sayesinde sohbet odalarına kolayca ulaşabilir, kısa bir rumuzla ortama dahil olabilir.`,
        `${seed.region} kültürünü ve ${seed.city} gündemini paylaşmak isteyen kullanıcılar için şehir sayfası, hem yerel muhabbet hem de yeni arkadaşlık niyetini aynı yerde toplar. Zurna.TR bu deneyimi canlı sohbet, Türkçe sohbet ve sohbet odaları sayfalarıyla destekler.`,
      ],
    },
  ],
  faqs: [
    {
      question: `${seed.city} sohbet sayfası kimler için uygun?`,
      answer: `${seed.city} ve çevresinden yeni insanlarla tanışmak, şehir gündemi konuşmak veya memleket muhabbeti yapmak isteyen kullanıcılar için uygundur.`,
    },
    {
      question: `${seed.city} sohbet mobilde kullanılabilir mi?`,
      answer: `Evet. ${seed.city} sohbet sayfası mobil cihazlardan okunabilir ve sohbet giriş alanına kolayca yönlendirilecek şekilde hazırlanmıştır.`,
    },
    {
      question: `${seed.city} sohbet odalarında hangi konular konuşulur?`,
      answer: `${seed.topic} gibi yerel başlıkların yanında genel sohbet, arkadaşlık, müzik ve günlük yaşam konuları da konuşulabilir.`,
    },
  ],
  relatedLinks: buildRelatedLinks(seed),
}));

export function getCityPage(slug: string) {
  return cityPages.find((page) => page.slug === slug);
}

export function getCityPageUrl(page: CityPage) {
  return `${siteUrl}/${page.slug}`;
}

export function buildCityPageSchema(page: CityPage) {
  const url = getCityPageUrl(page);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: page.title,
        description: page.description,
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
