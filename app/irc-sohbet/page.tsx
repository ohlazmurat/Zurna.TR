import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IRC Sohbet | Ücretsiz IRC Chat ve Sohbet Odaları",
  description:
    "IRC Sohbet ile ücretsiz sohbet odalarına katılın. Mobil IRC chat, güvenli sohbet ortamı ve aktif kullanıcı kitlesiyle Zurna.TR'de yeni insanlarla tanışın.",
  keywords: [
    "irc sohbet",
    "irc chat",
    "sohbet odaları",
    "mobil sohbet",
    "ücretsiz sohbet",
    "irc sunucu",
    "zurna sohbet",
    "zurna.tr",
  ],
};

export default function IrcSohbetPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-800 rounded-3xl p-12 text-white mb-10">

        <h1 className="text-5xl font-bold mb-6">
          IRC Sohbet
        </h1>

        <p className="text-xl text-blue-100 leading-9 max-w-4xl">
          IRC Sohbet, yıllardır internet dünyasının en köklü sohbet
          sistemlerinden biridir. Zurna.TR IRC altyapısı sayesinde
          kullanıcılar hızlı, güvenli ve kesintisiz şekilde sohbet
          odalarına bağlanabilir.
        </p>

      </section>

      {/* İSTATİSTİKLER */}
      <section className="grid md:grid-cols-4 gap-6 mb-12">

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="text-5xl mb-3">⚡</div>
          <div className="text-3xl font-bold text-blue-900">7/24</div>
          <div className="text-slate-600">Aktif IRC</div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="text-5xl mb-3">👥</div>
          <div className="text-3xl font-bold text-blue-900">150+</div>
          <div className="text-slate-600">Aktif Kullanıcı</div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="text-5xl mb-3">💬</div>
          <div className="text-3xl font-bold text-blue-900">20+</div>
          <div className="text-slate-600">IRC Kanalı</div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="text-5xl mb-3">📱</div>
          <div className="text-3xl font-bold text-blue-900">%100</div>
          <div className="text-slate-600">Mobil Uyumlu</div>
        </div>

      </section>

      {/* IRC NEDİR */}
      <section className="bg-white rounded-3xl shadow-xl p-10 mb-10">

        <h2 className="text-4xl font-bold mb-6">
          IRC Sohbet Nedir?
        </h2>

        <p className="leading-8 text-slate-700 mb-5">
          IRC (Internet Relay Chat), internet üzerinde gerçek zamanlı
          iletişim kurulmasını sağlayan en eski sohbet sistemlerinden
          biridir. Milyonlarca kullanıcı yıllar boyunca IRC sohbet
          ağlarında arkadaşlıklar kurmuş ve farklı insanlarla iletişim
          kurmuştur.
        </p>

        <p className="leading-8 text-slate-700">
          Günümüzde modern web teknolojileri sayesinde IRC sohbet
          sistemleri çok daha kolay kullanılabilir hale gelmiştir.
          Zurna.TR üzerinden doğrudan bağlanabilir ve sohbet etmeye
          başlayabilirsiniz.
        </p>

      </section>

      {/* AVANTAJLAR */}
      <section className="grid md:grid-cols-2 gap-6 mb-12">

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            🚀 Hızlı Bağlantı
          </h3>

          <p className="text-slate-700 leading-8">
            IRC altyapısı sayesinde düşük gecikmeli ve hızlı sohbet
            deneyimi sunulur.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            🔒 Güvenli Sohbet
          </h3>

          <p className="text-slate-700 leading-8">
            Modern sistemlerle desteklenen güvenli sohbet ortamı
            kullanıcı deneyimini artırır.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            💬 Aktif Kanallar
          </h3>

          <p className="text-slate-700 leading-8">
            Genel sohbet, arkadaşlık, radyo ve çeşitli ilgi alanlarına
            yönelik kanallarda sohbet edebilirsiniz.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            📱 Mobil IRC
          </h3>

          <p className="text-slate-700 leading-8">
            Telefon ve tabletlerden IRC sohbet sistemine kolayca
            bağlanabilirsiniz.
          </p>
        </div>

      </section>

      {/* SEO METNİ */}
      <section className="bg-white rounded-3xl shadow-xl p-10 mb-10">

        <h2 className="text-4xl font-bold mb-6">
          Neden IRC Sohbet Tercih Ediliyor?
        </h2>

        <p className="leading-8 text-slate-700 mb-5">
          IRC sohbet sistemleri uzun yıllardır internet kullanıcıları
          tarafından tercih edilmektedir. Hızlı yapısı, düşük kaynak
          kullanımı ve güçlü kanal sistemi sayesinde sohbet kültürünün
          temel taşlarından biri olmuştur.
        </p>

        <p className="leading-8 text-slate-700 mb-5">
          Zurna.TR kullanıcıları modern web arayüzü sayesinde herhangi
          bir program kurmadan IRC sohbet sistemine bağlanabilir ve
          sohbet odalarında aktif olarak yer alabilir.
        </p>

        <p className="leading-8 text-slate-700">
          Eğer güvenli, hızlı ve ücretsiz bir IRC sohbet deneyimi
          arıyorsanız Zurna.TR sizin için doğru adreslerden biridir.
        </p>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center text-white">

        <h2 className="text-4xl font-bold mb-4">
          IRC Sohbete Hemen Katılın
        </h2>

        <p className="text-xl mb-8">
          Aktif IRC kanallarına bağlanın ve yeni insanlarla tanışın.
        </p>

        <a
          href="/"
          className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-2xl"
        >
          SOHBETE BAĞLAN
        </a>

      </section>

    </main>
  );
}