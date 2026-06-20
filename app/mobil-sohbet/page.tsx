import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mobil Sohbet | Telefondan Ücretsiz Sohbet ve Mobil Chat - Zurna.TR",

  description:
    "Mobil sohbet ile telefon ve tablet üzerinden ücretsiz sohbet edin. Zurna.TR mobil sohbet odalarına giriş yapın, yeni insanlarla tanışın ve kesintisiz sohbet deneyimi yaşayın.",

  keywords: [
    "mobil sohbet",
    "mobil chat",
    "telefondan sohbet",
    "mobil sohbet odaları",
    "ücretsiz mobil sohbet",
    "mobil irc",
    "mobil chat odaları",
    "zurna mobil sohbet",
    "android sohbet",
    "ios sohbet"
  ],
};

export default function MobilSohbetPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-800 rounded-3xl overflow-hidden mb-12">

        <div className="grid lg:grid-cols-2 gap-10 items-center p-10">

          <div>
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full font-bold mb-6">
              📱 MOBİL SOHBET
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-5">
              MOBİL
              <span className="block text-orange-400">
                SOHBET
              </span>
            </h1>

            <p className="text-lg text-blue-100 leading-8 mb-8">
              Telefon veya tabletinizden ücretsiz sohbet edin.
              Zurna.TR mobil sohbet odalarına giriş yaparak
              yeni insanlarla tanışabilir ve dilediğiniz her yerden
              sohbet keyfini yaşayabilirsiniz.
            </p>

            <a
              href="/sohbet/index.html"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold"
            >
              📲 Mobil Sohbete Katıl
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 text-white">

            <h2 className="text-3xl font-bold mb-6">
              Neden Mobil Sohbet?
            </h2>

            <ul className="space-y-4 text-lg">
              <li>✅ Telefondan hızlı giriş</li>
              <li>✅ Android ve iPhone uyumlu</li>
              <li>✅ Ücretsiz sohbet odaları</li>
              <li>✅ Kayıt olmadan giriş</li>
              <li>✅ 7/24 aktif kullanıcılar</li>
            </ul>

          </div>

        </div>

      </section>

      {/* KARTLAR */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            📱 Her Yerden Sohbet
          </h3>

          <p className="text-slate-600 leading-8">
            Mobil sohbet sistemi sayesinde evde,
            işte veya yolculuk sırasında sohbet
            odalarına bağlanabilirsiniz.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            ⚡ Hızlı ve Kolay
          </h3>

          <p className="text-slate-600 leading-8">
            Ek uygulama kurmadan mobil cihazınızın
            tarayıcısı üzerinden anında sohbet
            deneyimi yaşayabilirsiniz.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            💬 Gerçek Kullanıcılar
          </h3>

          <p className="text-slate-600 leading-8">
            Türkiye'nin farklı şehirlerinden
            kullanıcılarla tanışabilir ve
            yeni arkadaşlıklar kurabilirsiniz.
          </p>
        </div>

      </section>

      {/* SEO MAKALESİ */}
      <section className="bg-white rounded-3xl shadow-xl p-10 mb-12">

        <h2 className="text-4xl font-bold mb-6">
          Mobil Sohbet Nedir?
        </h2>

        <p className="leading-8 text-slate-700 mb-5">
          Mobil sohbet, kullanıcıların cep telefonu veya tablet
          üzerinden internet bağlantısı kullanarak sohbet odalarına
          katılmasını sağlayan modern iletişim sistemidir.
          Günümüzde masaüstü bilgisayarlardan çok mobil cihazlar
          kullanıldığı için mobil sohbet platformları oldukça
          popüler hale gelmiştir.
        </p>

        <p className="leading-8 text-slate-700 mb-5">
          Zurna.TR mobil sohbet sistemi sayesinde Android ve iOS
          cihazlardan hızlı şekilde giriş yapabilir, ücretsiz sohbet
          odalarında vakit geçirebilir ve yeni insanlarla tanışabilirsiniz.
          Mobil uyumlu altyapımız sayesinde sayfalar hızlı açılır,
          sohbet deneyimi kesintisiz şekilde devam eder.
        </p>

        <p className="leading-8 text-slate-700 mb-5">
          Mobil sohbet odaları özellikle gün içerisinde bilgisayar
          başında bulunmayan kullanıcılar için büyük kolaylık sağlar.
          İster evde ister dışarıda olun, tek yapmanız gereken
          internet bağlantısına sahip bir telefon kullanmaktır.
        </p>

        <p className="leading-8 text-slate-700">
          Zurna.TR mobil sohbet platformu kullanıcılarına ücretsiz,
          hızlı ve güvenli sohbet ortamı sunmaktadır. Mobil chat,
          arkadaşlık sohbetleri, IRC sohbet sistemi ve canlı kullanıcı
          kitlesi ile günün her saatinde aktif bir sohbet deneyimi
          yaşayabilirsiniz.
        </p>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-800 rounded-3xl p-10 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hemen Mobil Sohbete Katıl
        </h2>

        <p className="text-blue-100 text-lg mb-8">
          Telefonundan bağlan, yeni arkadaşlıklar kur ve sohbet etmeye başla.
        </p>

        <a
          href="/sohbet/index.html"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold"
        >
          SOHBETE BAĞLAN
        </a>

      </section>

    </main>
  );
}