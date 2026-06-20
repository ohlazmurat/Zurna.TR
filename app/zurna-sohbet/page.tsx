import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zurna Sohbet | Ücretsiz Sohbet Odaları ve Zurna Chat",
  description:
    "Zurna Sohbet ile ücretsiz sohbet odalarına katılın. Mobil sohbet, IRC sohbet, arkadaşlık odaları ve Zurna Chat platformunda yeni insanlarla tanışın.",
  keywords: [
    "zurna sohbet",
    "zurna chat",
    "sohbet odaları",
    "ücretsiz sohbet",
    "mobil sohbet",
    "irc sohbet",
    "chat odaları",
    "zurna.tr",
  ],
};

export default function ZurnaSohbetPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      {/* BAŞLIK */}
      <section className="bg-white rounded-3xl shadow-xl p-10 mb-10">

        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          Zurna Sohbet
        </h1>

        <p className="text-lg leading-8 text-slate-700">
          Zurna Sohbet, Türkiye'nin dört bir yanından kullanıcıları bir araya
          getiren ücretsiz sohbet platformlarından biridir. Sohbet odalarına
          katılarak yeni arkadaşlıklar kurabilir, farklı şehirlerden insanlarla
          tanışabilir ve keyifli vakit geçirebilirsiniz.
        </p>

      </section>

      {/* İSTATİSTİKLER */}
      <section className="grid md:grid-cols-4 gap-6 mb-12">

        <div className="bg-white rounded-3xl shadow-xl p-6 text-center">
          <div className="text-5xl mb-3">👥</div>
          <h3 className="text-3xl font-bold text-blue-900">2500+</h3>
          <p className="text-slate-600">Toplam Kullanıcı</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 text-center">
          <div className="text-5xl mb-3">💬</div>
          <h3 className="text-3xl font-bold text-blue-900">150+</h3>
          <p className="text-slate-600">Aktif Sohbetçi</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 text-center">
          <div className="text-5xl mb-3">📱</div>
          <h3 className="text-3xl font-bold text-blue-900">%100</h3>
          <p className="text-slate-600">Mobil Uyumlu</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 text-center">
          <div className="text-5xl mb-3">🎙️</div>
          <h3 className="text-3xl font-bold text-blue-900">7/24</h3>
          <p className="text-slate-600">Canlı Radyo</p>
        </div>

      </section>

      {/* NEDİR */}
      <section className="bg-white rounded-3xl shadow-xl p-10 mb-10">

        <h2 className="text-4xl font-bold mb-6">
          Zurna Sohbet Nedir?
        </h2>

        <p className="leading-8 text-slate-700 mb-5">
          Zurna Sohbet, internet üzerinden güvenli ve hızlı şekilde sohbet etmek
          isteyen kullanıcılar için hazırlanmış modern bir sohbet platformudur.
          Kullanıcılar ücretsiz olarak sohbet odalarına katılabilir ve yeni
          insanlarla tanışabilir.
        </p>

        <p className="leading-8 text-slate-700">
          Aktif kullanıcı kitlesi, mobil uyumlu yapısı ve IRC altyapısı sayesinde
          Türkiye'nin en çok tercih edilen sohbet platformlarından biri olmayı
          hedeflemektedir.
        </p>

      </section>

      {/* ODALAR */}
      <section className="mb-12">

        <h2 className="text-4xl font-bold text-center mb-8">
          Popüler Sohbet Odaları
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              💬 Genel Sohbet
            </h3>

            <p className="text-slate-600 leading-8">
              Türkiye'nin farklı şehirlerinden kullanıcılarla sohbet edebilir,
              yeni arkadaşlıklar kurabilirsiniz.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              💘 Fantezi Sohbet
            </h3>

            <p className="text-slate-600 leading-8">
              Eğlenceli ve samimi sohbet ortamlarında yeni insanlarla
              tanışabilirsiniz.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              🎙️ Radyo Sohbet
            </h3>

            <p className="text-slate-600 leading-8">
              Canlı yayın eşliğinde sohbet ederek müzik ve sohbet keyfini bir
              arada yaşayabilirsiniz.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              👫 Arkadaşlık Sohbeti
            </h3>

            <p className="text-slate-600 leading-8">
              Yeni arkadaşlıklar kurmak isteyen kullanıcıların buluşma
              noktalarından biridir.
            </p>
          </div>

        </div>

      </section>

      {/* AVANTAJLAR */}
      <section className="bg-white rounded-3xl shadow-xl p-10 mb-10">

        <h2 className="text-4xl font-bold mb-6">
          Neden Zurna Sohbet?
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-slate-700">

          <div>✓ Ücretsiz kullanım</div>
          <div>✓ Mobil uyumlu sistem</div>
          <div>✓ Aktif sohbet odaları</div>
          <div>✓ IRC altyapısı</div>
          <div>✓ Canlı radyo yayınları</div>
          <div>✓ Hızlı bağlantı</div>
          <div>✓ Güvenli sohbet ortamı</div>
          <div>✓ Yeni arkadaşlıklar</div>

        </div>

      </section>

      {/* SSS */}
      <section className="bg-white rounded-3xl shadow-xl p-10 mb-10">

        <h2 className="text-4xl font-bold mb-8">
          Sık Sorulan Sorular
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="font-bold text-xl mb-2">
              Zurna Sohbet ücretsiz mi?
            </h3>
            <p>Evet, tamamen ücretsizdir.</p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">
              Mobil cihazdan bağlanabilir miyim?
            </h3>
            <p>Evet, telefon ve tabletlerden bağlanabilirsiniz.</p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">
              IRC sohbet desteği var mı?
            </h3>
            <p>Evet, sistem IRC altyapısı ile çalışmaktadır.</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-800 rounded-3xl p-12 text-center">

        <h2 className="text-4xl font-bold text-white mb-4">
          Hemen Sohbete Katılın
        </h2>

        <p className="text-blue-100 text-lg mb-8">
          Binlerce kullanıcıyla tanışmak için şimdi sohbet odalarına giriş yapın.
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