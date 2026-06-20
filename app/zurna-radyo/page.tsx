import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zurna Radyo - Canlı Radyo Dinle | Zurna.TR",
  description:
    "Zurna Radyo ile 7/24 canlı müzik yayını dinleyin. Pop, arabesk, fantazi ve slow müziklerle sohbet ederken keyifli vakit geçirin.",
};
export default function ZurnaRadyoPage() {
  return (
    
    <main className="max-w-7xl mx-auto px-6 py-12">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-800 rounded-3xl overflow-hidden mb-12">

        <div className="grid lg:grid-cols-2 gap-10 items-center p-10">

          <div>
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full font-bold mb-6">
              🎙️ 7/24 CANLI YAYIN
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
  Zurna Radyo
</h1>

            <p className="text-lg md:text-xl text-blue-100 leading-8 mb-8">
              7/24 Canlı Yayın - Kesintisiz Müzik Keyfi
            </p>

            <a
              href="#player"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition"
            >
              🎧 CANLI DİNLE
            </a>
          </div>

          <div>
            <img
              src="/zurna-radyo-banner.png"
              alt="Zurna Radyo"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>

        </div>

      </section>

      {/* PLAYER */}
      <section
        id="player"
        className="bg-[#081c5a] rounded-3xl shadow-xl p-8 mb-12"
      >

        <h2 className="text-3xl text-white font-bold mb-6">
          🔴 Zurna Radyo Canlı Yayın
        </h2>

        <iframe
          src="https://radyoserver.qbilisim.com/cp/widgets/player/single/?p=8174"
          height="110"
          width="100%"
          scrolling="no"
          style={{ border: "none" }}
        />

      </section>

      {/* ÖZELLİKLER */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-3">
            🎵 Kesintisiz Yayın
          </h3>

          <p className="text-slate-600 leading-7">
            Günün her saatinde canlı müzik yayını.
            Sevdiğiniz şarkıları kesintisiz dinleyin.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-3">
            🎙️ Canlı DJ Yayınları
          </h3>

          <p className="text-slate-600 leading-7">
            Deneyimli DJ kadromuz ile canlı yayınlar,
            istek parçalar ve eğlenceli etkinlikler.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-3">
            💬 Sohbet + Radyo
          </h3>

          <p className="text-slate-600 leading-7">
            Zurna Sohbet kullanıcılarıyla birlikte
            müzik dinleyip keyifli vakit geçirin.
          </p>
        </div>

      </section>

      {/* SEO ALANI */}
<section className="bg-white rounded-3xl shadow-xl p-10 mb-12">

  <h2 className="text-4xl font-bold mb-6">
    Zurna Radyo Canlı Yayın
  </h2>

  <p className="leading-8 text-slate-700 mb-5">
    Zurna Radyo, Zurna.TR kullanıcılarına günün her saati kesintisiz müzik
    yayını sunan internet radyosudur. Sohbet ederken müzik dinlemek isteyen
    kullanıcılar için hazırlanan yayınlarımız sayesinde hem yeni insanlarla
    tanışabilir hem de sevdiğiniz şarkıları dinleyebilirsiniz. Pop, arabesk,
    fantazi, slow ve karışık müzik yayınları ile her müzik zevkine hitap eden
    Zurna Radyo, sohbet deneyimini daha eğlenceli hale getirmektedir.
  </p>

  <p className="leading-8 text-slate-700 mb-5">
    Canlı radyo yayınları internet kullanıcılarının yıllardır vazgeçemediği
    eğlence araçlarından biridir. Özellikle sohbet sitelerinde radyo yayınları
    kullanıcıların aynı anda aynı müziği dinlemesine ve ortak bir ortam
    oluşturmasına yardımcı olur. Zurna Radyo da bu anlayışla yayın hayatına
    devam etmektedir.
  </p>

  <h2 className="text-3xl font-bold mt-10 mb-6">
    İnternet Radyosu Nedir?
  </h2>

  <p className="leading-8 text-slate-700 mb-5">
    İnternet radyosu, geleneksel FM yayınlarının internet üzerinden yayın yapan
    modern versiyonudur. Kullanıcılar herhangi bir frekans aramak zorunda
    kalmadan internet bağlantısı bulunan her cihaz üzerinden canlı yayınları
    dinleyebilirler.
  </p>

  <p className="leading-8 text-slate-700 mb-5">
    Teknolojinin gelişmesiyle birlikte internet radyoları büyük ilgi görmeye
    başlamıştır. Özellikle mobil cihazların yaygınlaşması sayesinde kullanıcılar
    evde, işte veya seyahat sırasında canlı yayınları takip edebilmektedir.
    Zurna Radyo da bu modern yayın anlayışını benimseyerek kullanıcılarına
    kaliteli ve kesintisiz müzik deneyimi sunmaktadır.
  </p>

  <h2 className="text-3xl font-bold mt-10 mb-6">
    Zurna Sohbet ve Zurna Radyo
  </h2>

  <p className="leading-8 text-slate-700 mb-5">
    Zurna.TR sadece bir sohbet platformu değil, aynı zamanda kullanıcıların
    keyifli vakit geçirebildiği sosyal bir topluluktur. Sohbet odalarında
    bulunan kullanıcılar canlı yayınları dinleyebilir, yayıncılarla etkileşim
    kurabilir ve istek parçalarını paylaşabilir.
  </p>

  <p className="leading-8 text-slate-700 mb-5">
    Sohbet ve müzik yıllardır birbirini tamamlayan iki önemli unsur olmuştur.
    İnsanlar sohbet ederken müzik dinlemeyi sever. Zurna Radyo bu deneyimi daha
    da ileri taşıyarak sohbet kullanıcılarını ortak bir yayın etrafında
    buluşturmaktadır.
  </p>

  <p className="leading-8 text-slate-700 mb-5">
    Zurna Sohbet kullanıcıları günün her saatinde radyo yayınlarını takip
    edebilir, farklı müzik türlerini keşfedebilir ve yayıncılarımızın
    hazırladığı özel programları dinleyebilir. Böylece sohbet deneyimi yalnızca
    yazışmadan ibaret kalmaz ve daha sosyal bir hale gelir.
  </p>

  <h2 className="text-3xl font-bold mt-10 mb-6">
    Canlı Radyo Dinlemenin Avantajları
  </h2>

  <p className="leading-8 text-slate-700 mb-5">
    Canlı radyo yayınları kullanıcılara birçok avantaj sunmaktadır. Öncelikle
    yayın akışı profesyonel yayıncılar tarafından hazırlandığı için
    kullanıcıların sürekli müzik seçmesine gerek kalmaz. Ayrıca canlı
    yayınlarda yapılan anonslar, etkinlikler ve özel programlar dinleme
    deneyimini daha eğlenceli hale getirir.
  </p>

  <ul className="list-disc pl-6 text-slate-700 leading-8 mb-8">
    <li>Kesintisiz müzik keyfi yaşayabilirsiniz.</li>
    <li>Farklı müzik türlerini keşfedebilirsiniz.</li>
    <li>Canlı DJ yayınlarını takip edebilirsiniz.</li>
    <li>Sohbet ederken müzik dinleyebilirsiniz.</li>
    <li>İstek parçalar gönderebilirsiniz.</li>
    <li>Canlı etkinliklere katılabilirsiniz.</li>
  </ul>

  <h2 className="text-3xl font-bold mt-10 mb-6">
    Mobil Cihazlardan Zurna Radyo Dinle
  </h2>

  <p className="leading-8 text-slate-700 mb-5">
    Mobil cihaz kullanımının artmasıyla birlikte internet radyolarına erişim de
    oldukça kolaylaşmıştır. Akıllı telefon ve tablet kullanıcıları herhangi bir
    ek uygulama kurmadan Zurna Radyo yayınlarını dinleyebilir.
  </p>

  <p className="leading-8 text-slate-700 mb-5">
    Mobil uyumlu yapısı sayesinde yayınlarımız Android ve iPhone cihazlarda
    sorunsuz şekilde çalışmaktadır. Böylece kullanıcılarımız günün her anında
    müzik keyfini yanında taşıyabilmektedir.
  </p>

  <h2 className="text-3xl font-bold mt-10 mb-6">
    Sık Sorulan Sorular
  </h2>

  <div className="space-y-6">

    <div>
      <h3 className="font-bold text-xl mb-2">
        Zurna Radyo ücretsiz mi?
      </h3>
      <p>Evet. Yayınlarımız tamamen ücretsizdir.</p>
    </div>

    <div>
      <h3 className="font-bold text-xl mb-2">
        Canlı yayınlar günün hangi saatlerinde aktif?
      </h3>
      <p>Yayınlarımız 7 gün 24 saat boyunca devam etmektedir.</p>
    </div>

    <div>
      <h3 className="font-bold text-xl mb-2">
        Mobil cihazlardan dinleyebilir miyim?
      </h3>
      <p>Evet. Android ve iPhone cihazlardan dinleyebilirsiniz.</p>
    </div>

    <div>
      <h3 className="font-bold text-xl mb-2">
        Sohbet ederken radyo dinleyebilir miyim?
      </h3>
      <p>Evet. Zurna.TR sohbet odalarında vakit geçirirken canlı yayını dinleyebilirsiniz.</p>
    </div>

  </div>

</section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-800 rounded-3xl p-10 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Müzik Dinle, Sohbete Katıl
        </h2>

        <p className="text-blue-100 text-lg mb-8">
          Zurna.TR kullanıcılarıyla birlikte sohbet ederken
          canlı radyo yayınlarını dinle.
        </p>

        <a
          href="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold transition"
        >
          SOHBETE BAĞLAN
        </a>

      </section>

    </main>
  );
}