import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sohbet Odaları | Ücretsiz Sohbet, Mobil Sohbet ve Chat Odaları - Zurna.TR",

  description:
    "Sohbet odaları ile ücretsiz sohbet edin. Mobil sohbet, IRC sohbet, chat odaları ve arkadaşlık platformunda yeni insanlarla tanışın. Zurna.TR'nin samimi sohbet ortamına hemen katılın.",

  keywords: [
    "sohbet odaları",
    "ücretsiz sohbet odaları",
    "mobil sohbet",
    "chat odaları",
    "irc sohbet",
    "arkadaşlık sohbet",
    "online sohbet",
    "zurna sohbet",
    "zurna chat",
    "zurna.net",
  ],
};

export default function SohbetOdalariPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-800 rounded-3xl p-10 mb-12 text-center">

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
          Sohbet Odaları
        </h1>

        <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-8">
          Türkiye'nin en samimi sohbet odalarında yeni insanlarla tanışın,
          ücretsiz sohbet edin ve keyifli vakit geçirin.
          Mobil sohbet ve IRC sohbet sistemi ile anında bağlanın.
        </p>

        <a
          href="/"
          className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-2xl"
        >
          💬 Hemen Sohbete Katıl
        </a>

      </section>

      {/* ODALAR */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

        {[
          "Genel Sohbet",
          "Arkadaşlık Odası",
          "Mobil Sohbet",
          "IRC Sohbet",
          "Muhabbet Odası",
          "Radyo Odası",
          "Oyun Sohbeti",
          "Chat Odaları",
        ].map((oda) => (
          <div
            key={oda}
            className="bg-white rounded-3xl shadow-xl p-6 text-center hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-bold text-blue-900">
              #{oda}
            </h3>
          </div>
        ))}

      </section>

      {/* SEO İÇERİĞİ */}
      <section className="bg-white rounded-3xl shadow-xl p-10 mb-12">

        <h2 className="text-4xl font-bold mb-6">
          Sohbet Odaları Nedir?
        </h2>

        <p className="leading-8 text-slate-700 mb-5">
          Sohbet odaları, farklı şehirlerden ve farklı yaş gruplarından
          insanların bir araya gelerek iletişim kurabildiği çevrim içi
          topluluk alanlarıdır. Günümüzde sohbet odaları sayesinde insanlar
          yeni arkadaşlıklar kurabilir, günlük yaşamlarını paylaşabilir ve
          ortak ilgi alanlarına sahip kişilerle tanışabilir.
        </p>

        <p className="leading-8 text-slate-700 mb-5">
          Zurna.TR sohbet odaları kullanıcılarına ücretsiz sohbet imkanı
          sunmaktadır. Üstelik mobil sohbet desteği sayesinde telefon,
          tablet ve bilgisayar üzerinden kolayca bağlanabilirsiniz.
          IRC sohbet altyapısı sayesinde hızlı ve kesintisiz bir deneyim
          yaşayabilirsiniz.
        </p>

        <p className="leading-8 text-slate-700 mb-5">
          Arkadaşlık sohbet odaları, genel sohbet odaları, mobil sohbet ve
          chat odaları gibi farklı kategoriler sayesinde herkes kendi
          ilgi alanına uygun bir ortam bulabilir. Samimi sohbet ortamı,
          aktif kullanıcı kitlesi ve kolay kullanımı sayesinde Zurna.TR
          her gün binlerce kişiyi bir araya getirmektedir.
        </p>

      </section>

      {/* AVANTAJLAR */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-3">
            🚀 Hızlı Giriş
          </h3>
          <p>
            Üyelik gerektirmeden saniyeler içinde sohbet etmeye başlayın.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-3">
            📱 Mobil Uyumlu
          </h3>
          <p>
            Telefon, tablet ve bilgisayardan sorunsuz erişim sağlayın.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-3">
            🔒 Güvenli Sohbet
          </h3>
          <p>
            Modern IRC altyapısı ile güvenli ve hızlı sohbet deneyimi.
          </p>
        </div>

      </section>

      {/* SSS */}
      <section className="bg-white rounded-3xl shadow-xl p-10 mb-12">

        <h2 className="text-4xl font-bold mb-8">
          Sık Sorulan Sorular
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="font-bold text-xl mb-2">
              Sohbet odaları ücretsiz mi?
            </h3>
            <p>
              Evet, Zurna.TR sohbet odaları tamamen ücretsizdir.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">
              Mobil cihazlardan giriş yapılabilir mi?
            </h3>
            <p>
              Evet, tüm mobil cihazlardan giriş yapabilirsiniz.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">
              Üyelik gerekli mi?
            </h3>
            <p>
              Hayır, rumuz belirleyerek hemen sohbet etmeye başlayabilirsiniz.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-800 rounded-3xl p-10 text-center">

        <h2 className="text-4xl font-bold text-white mb-4">
          Türkiye'nin Samimi Sohbet Ortamına Katılın
        </h2>

        <p className="text-blue-100 mb-8">
          Yeni insanlarla tanışın, ücretsiz sohbet edin ve keyifli vakit geçirin.
        </p>

        <a
          href="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-2xl"
        >
          SOHBETE BAĞLAN
        </a>

      </section>

    </main>
  );
}