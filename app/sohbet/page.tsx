
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sohbet | Ücretsiz Sohbet Odaları, Mobil Sohbet ve Chat - Zurna.TR",
  description:
    "Sohbet ile yeni arkadaşlıklar kurun. Ücretsiz sohbet odaları, mobil sohbet, IRC sohbet ve güvenli chat deneyimini Zurna.TR'de keşfedin.",
  keywords: [
    "sohbet",
    "ücretsiz sohbet",
    "sohbet odaları",
    "mobil sohbet",
    "online sohbet",
    "chat",
    "irc sohbet",
    "zurna sohbet",
    "zurna chat",
    "zurna.tr",
  ],
};

export default function SohbetPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 rounded-[32px] overflow-hidden shadow-2xl mb-12">

        <div className="p-10 md:p-16">

          <span className="inline-flex items-center bg-orange-500 text-white px-5 py-2 rounded-full font-bold text-sm mb-6">
            💬 TÜRKİYE'NİN SAMİMİ SOHBET ORTAMI
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-8">
            Sohbet ile
            <span className="text-orange-400">
              {" "}Yeni İnsanlarla{" "}
            </span>
            Tanışın
          </h1>

          <p className="text-blue-100 text-xl leading-9 max-w-4xl">
            Sohbet; insanların düşüncelerini paylaşabildiği, yeni arkadaşlıklar
            kurabildiği ve sosyal bağlarını güçlendirebildiği en değerli dijital
            iletişim yöntemlerinden biridir. Zurna.TR ücretsiz sohbet odaları,
            mobil sohbet desteği ve güçlü IRC altyapısıyla günün her saatinde
            güvenli ve keyifli bir sohbet deneyimi sunmaktadır.
          </p>

        </div>

      </section>

      {/* İSTATİSTİKLER */}

      <section className="grid md:grid-cols-4 gap-6 mb-12">

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

          <div className="text-5xl mb-3">👥</div>

          <div className="text-3xl font-extrabold text-blue-900">
            2500+
          </div>

          <div className="text-slate-500">
            Toplam Kullanıcı
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

          <div className="text-5xl mb-3">💬</div>

          <div className="text-3xl font-extrabold text-blue-900">
            150+
          </div>

          <div className="text-slate-500">
            Aktif Sohbetçi
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

          <div className="text-5xl mb-3">📱</div>

          <div className="text-3xl font-extrabold text-blue-900">
            %100
          </div>

          <div className="text-slate-500">
            Mobil Uyumlu
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

          <div className="text-5xl mb-3">⚡</div>

          <div className="text-3xl font-extrabold text-blue-900">
            7/24
          </div>

          <div className="text-slate-500">
            Kesintisiz Sohbet
          </div>

        </div>

      </section>

      {/* İÇERİK */}

      <section className="bg-white rounded-3xl shadow-xl p-10 mb-10">

        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Sohbet Nedir?
        </h2>

        <p className="text-slate-700 leading-8 mb-6">
          Sohbet, insanların duygu ve düşüncelerini karşılıklı olarak
          paylaşmasını sağlayan doğal bir iletişim biçimidir. Teknolojinin
          gelişmesiyle birlikte sohbet yalnızca yüz yüze yapılan bir etkinlik
          olmaktan çıkmış, internet üzerinden milyonlarca insanın bir araya
          gelebildiği dijital bir sosyal deneyime dönüşmüştür.
        </p>

        <p className="text-slate-700 leading-8 mb-6">
          Günümüzde kullanıcılar farklı şehirlerden, farklı yaş gruplarından ve
          farklı ilgi alanlarından insanlarla aynı sohbet ortamında buluşarak
          yeni arkadaşlıklar kurabilmektedir. Bu durum internet sohbet
          platformlarını sosyal yaşamın önemli parçalarından biri haline
          getirmiştir.
        </p>

        <p className="text-slate-700 leading-8">
          Zurna.TR, güvenli altyapısı ve kullanıcı dostu tasarımı sayesinde
          sohbet kültürünü modern teknolojiyle buluşturarak herkes için hızlı,
          ücretsiz ve keyifli bir iletişim ortamı sunmaktadır.
        </p>

      </section>

      {/* ÖZELLİKLER */}

      <section className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="text-5xl mb-5">💬</div>

          <h3 className="text-2xl font-bold mb-4">
            Sohbet Odaları
          </h3>

          <p className="text-slate-600 leading-8">
            Genel sohbet, şehir sohbetleri, arkadaşlık sohbetleri ve farklı
            ilgi alanlarına yönelik odalarda yeni insanlarla tanışabilirsiniz.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="text-5xl mb-5">📱</div>

          <h3 className="text-2xl font-bold mb-4">
            Mobil Sohbet
          </h3>

          <p className="text-slate-600 leading-8">
            Telefon, tablet ve bilgisayar fark etmeksizin dilediğiniz yerden
            sohbet odalarına bağlanabilir ve kesintisiz iletişim kurabilirsiniz.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="text-5xl mb-5">⚡</div>

          <h3 className="text-2xl font-bold mb-4">
            IRC Sohbet
          </h3>

          <p className="text-slate-600 leading-8">
            Güçlü IRC altyapısı sayesinde hızlı bağlantı, düşük gecikme ve
            güvenilir sohbet deneyimi yaşayabilirsiniz.
          </p>

        </div>

      </section>
```tsx
      {/* SEO İÇERİĞİ */}

      <section className="bg-white rounded-3xl shadow-xl p-10 mb-10">

        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          İnternet Üzerinden Sohbet Etmenin Avantajları
        </h2>

        <p className="text-slate-700 leading-8 mb-6">
          İnternet üzerinden sohbet etmek, günümüzde yalnızca mesajlaşmaktan
          ibaret değildir. İnsanlar ortak ilgi alanlarına sahip kişilerle
          tanışabilir, yeni dostluklar kurabilir ve farklı şehirlerde yaşayan
          kullanıcılarla iletişim kurabilir. Dijital iletişim sayesinde mesafeler
          ortadan kalkarken, sosyal çevre de her geçen gün genişlemektedir.
        </p>

        <p className="text-slate-700 leading-8 mb-6">
          Özellikle mobil cihazların yaygınlaşmasıyla birlikte sohbet etmek çok
          daha kolay hale gelmiştir. Kullanıcılar herhangi bir uygulama kurmadan
          tarayıcı üzerinden sohbet odalarına bağlanabilir ve günün her saatinde
          aktif kullanıcılarla iletişim kurabilir.
        </p>

        <p className="text-slate-700 leading-8">
          Zurna.TR; ücretsiz sohbet odaları, mobil sohbet desteği ve güçlü IRC
          altyapısıyla kullanıcılarına hızlı, güvenli ve eğlenceli bir sohbet
          deneyimi sunmaktadır.
        </p>

      </section>

      {/* NEDEN ZURNA */}

      <section className="grid md:grid-cols-2 gap-6 mb-10">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-blue-900 mb-5">
            Neden Zurna.TR?
          </h2>

          <ul className="space-y-4 text-slate-700 leading-8">
            <li>✅ Ücretsiz sohbet odaları</li>
            <li>✅ Mobil cihazlardan hızlı giriş</li>
            <li>✅ Güçlü IRC altyapısı</li>
            <li>✅ Aktif kullanıcı topluluğu</li>
            <li>✅ Canlı Zurna Radyo</li>
            <li>✅ Güvenli sohbet ortamı</li>
            <li>✅ Kolay kullanım</li>
          </ul>

        </div>

        <div className="bg-gradient-to-r from-blue-950 to-blue-700 rounded-3xl p-8 text-white">

          <h2 className="text-3xl font-bold mb-5">
            Güvenli Sohbet Deneyimi
          </h2>

          <p className="leading-8 text-blue-100">
            Zurna.TR kullanıcı deneyimini ön planda tutan modern altyapısı ile
            güvenli, hızlı ve kesintisiz sohbet deneyimi sunmaktadır.
            Sohbet odalarında yeni insanlarla tanışabilir, farklı konular
            hakkında konuşabilir ve keyifli vakit geçirebilirsiniz.
          </p>

        </div>

      </section>

      {/* FAQ */}

      <section className="bg-white rounded-3xl shadow-xl p-10 mb-10">

        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          Sık Sorulan Sorular
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-2xl font-bold mb-3">
              Sohbet ücretsiz mi?
            </h3>

            <p className="text-slate-700 leading-8">
              Evet. Zurna.TR sohbet odalarına tamamen ücretsiz şekilde
              bağlanabilirsiniz.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">
              Mobil cihazlardan giriş yapılabilir mi?
            </h3>

            <p className="text-slate-700 leading-8">
              Evet. Android ve iPhone cihazlardan uygulama kurmadan
              sohbet sistemine bağlanabilirsiniz.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">
              IRC sohbet nedir?
            </h3>

            <p className="text-slate-700 leading-8">
              IRC, kullanıcıların gerçek zamanlı iletişim kurmasını sağlayan
              köklü sohbet teknolojilerinden biridir. Zurna.TR bu altyapıyı
              modern web teknolojileriyle birleştirerek kolay kullanım sunar.
            </p>
          </div>

        </div>

      </section>

      {/* İLGİLİ SAYFALAR */}

      <section className="bg-slate-100 rounded-3xl p-10 mb-10">

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          İlgili Sayfalar
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <a href="/zurna-sohbet" className="bg-white rounded-2xl p-5 shadow hover:shadow-xl transition font-bold">
            Zurna Sohbet →
          </a>

          <a href="/zurna-chat" className="bg-white rounded-2xl p-5 shadow hover:shadow-xl transition font-bold">
            Zurna Chat →
          </a>

          <a href="/mobil-sohbet" className="bg-white rounded-2xl p-5 shadow hover:shadow-xl transition font-bold">
            Mobil Sohbet →
          </a>

          <a href="/irc-sohbet" className="bg-white rounded-2xl p-5 shadow hover:shadow-xl transition font-bold">
            IRC Sohbet →
          </a>

          <a href="/sohbet-odalari" className="bg-white rounded-2xl p-5 shadow hover:shadow-xl transition font-bold">
            Sohbet Odaları →
          </a>

          <a href="/" className="bg-white rounded-2xl p-5 shadow hover:shadow-xl transition font-bold">
            Anasayfa →
          </a>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl text-center p-12 mb-10">

        <h2 className="text-4xl font-bold text-white mb-4">
          Sohbet Etmeye Hazır mısınız?
        </h2>

        <p className="text-orange-100 text-lg mb-8">
          Binlerce kullanıcıyla tanışın, ücretsiz sohbet odalarına katılın ve
          Zurna.TR farkını hemen yaşamaya başlayın.
        </p>

        <a
          href="/"
          className="inline-block bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold hover:scale-105 transition"
        >
          SOHBETE BAĞLAN
        </a>

      </section>

    </main>
  );
}
