import Image from "next/image";
import { supabase } from "@/lib/supabase";
import CanliDurum from "@/components/CanliDurum";

async function getPosts() {
  console.log("URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

  const { data, error, count } = await supabase
    .from("posts")
    .select("*", { count: "exact" });

  console.log("POSTS DATA:", data);
  console.log("POSTS COUNT:", count);
  console.log("POSTS ERROR:", error);
  

  return data || [];
}

export default async function Home() {
  const articles = await getPosts();

  return (
    <main className="min-h-screen bg-slate-100">
      ```tsx
{/* RADYO + MIRC */}
<section className="max-w-6xl mx-auto px-6 py-8">

  <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

    <a
      href="/zurna-radyo"
      className="group block rounded-3xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300"
    >
      <div className="relative">

        <span className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          🎙️ CANLI YAYIN
        </span>

        <img
          src="/zurna-radyo-banner.png"
          alt="Zurna Radyo"
          className="w-full block"
        />

      </div>
    </a>

    <a
      href="/mirc-indir"
      className="group block rounded-3xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300"
    >
      <div className="relative">

        <span className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          💻 WINDOWS
        </span>

        <img
          src="/mirc-banner.png"
          alt="Zurna MIRC"
          className="w-full block"
        />

      </div>
    </a>

  </div>

</section>
```

      {/* PARTNER SİTELER */}
<section className="max-w-7xl mx-auto px-6 pb-12">

  <div className="flex items-center justify-center gap-4 mb-10">
    <div className="h-px bg-slate-300 w-32"></div>
    <h2 className="text-4xl font-bold text-slate-800">
      Partner Sitelerimiz
    </h2>
    <div className="h-px bg-slate-300 w-32"></div>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    <a
      href="https://fantezisohbet.com"
      target="_blank"
      className="bg-white rounded-3xl shadow-xl p-6 text-center hover:-translate-y-1 transition"
    >
      <div className="text-5xl mb-4">💖</div>

      <h3 className="font-bold text-xl mb-3 text-pink-600">
        FanteziSohbet.com
      </h3>

      <p className="text-slate-600 text-sm mb-4">
        Türkiye'nin en keyifli fantezi sohbet
        platformlarından biri.
      </p>

      <span className="text-pink-600 font-bold">
        Siteye Git →
      </span>
    </a>

    <a
      href="https://sanalsohbet.net"
      target="_blank"
      className="bg-white rounded-3xl shadow-xl p-6 text-center hover:-translate-y-1 transition"
    >
      <div className="text-5xl mb-4">💬</div>

      <h3 className="font-bold text-xl mb-3 text-blue-700">
        SanalSohbet.net
      </h3>

      <p className="text-slate-600 text-sm mb-4">
        Mobil sohbet ve arkadaşlık
        odalarının buluşma noktası.
      </p>

      <span className="text-blue-700 font-bold">
        Siteye Git →
      </span>
    </a>

    <a
      href="https://yenidogan.net"
      target="_blank"
      className="bg-white rounded-3xl shadow-xl p-6 text-center hover:-translate-y-1 transition"
    >
      <div className="text-5xl mb-4">👶</div>

      <h3 className="font-bold text-xl mb-3 text-green-600">
        Yenidogan.net
      </h3>

      <p className="text-slate-600 text-sm mb-4">
        Bebek isimleri ve isim anlamları
        hakkında kapsamlı rehber.
      </p>

      <span className="text-green-600 font-bold">
        Siteye Git →
      </span>
    </a>

    <a
      href="https://resat.net"
      target="_blank"
      className="bg-white rounded-3xl shadow-xl p-6 text-center hover:-translate-y-1 transition"
    >
      <div className="text-5xl mb-4">📈</div>

      <h3 className="font-bold text-xl mb-3 text-orange-500">
        Resat.net
      </h3>

      <p className="text-slate-600 text-sm mb-4">
        Altın fiyatları ve ekonomi
        verilerini takip edin.
      </p>

      <span className="text-orange-500 font-bold">
        Siteye Git →
      </span>
    </a>

  </div>

</section>

<section className="max-w-7xl mx-auto px-6 py-14">

  <div className="bg-white rounded-[32px] shadow-xl overflow-hidden">

    {/* ÜST */}
    <div className="bg-gradient-to-r from-blue-950 to-blue-700 text-white p-10 md:p-14">

      <div className="max-w-4xl">

        <span className="inline-block bg-orange-500 px-4 py-2 rounded-full text-sm font-bold mb-6">
          💬 TÜRKİYE'NİN SAMİMİ SOHBET ORTAMI
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Zurna Sohbet ile
          <span className="text-orange-400">
            {" "}Yeni Arkadaşlıklar{" "}
          </span>
          Kurun
        </h2>

        <p className="text-blue-100 text-lg leading-8">
          Zurna Sohbet; ücretsiz sohbet odaları, mobil sohbet, IRC sohbet sistemi
          ve canlı radyo hizmetiyle Türkiye'nin en aktif sohbet platformlarından
          biridir. Günün her saatinde binlerce kullanıcıyla tanışabilir,
          güvenli ve eğlenceli sohbet ortamına katılabilirsiniz.
        </p>

      </div>

    </div>

    {/* İSTATİSTİKLER */}

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-slate-50">

      <div className="bg-white rounded-2xl shadow p-6 text-center">

        <div className="text-4xl mb-3">👥</div>

        <div className="text-3xl font-extrabold text-blue-900">
          2500+
        </div>

        <div className="text-slate-500">
          Toplam Kullanıcı
        </div>

      </div>

      <div className="bg-white rounded-2xl shadow p-6 text-center">

        <div className="text-4xl mb-3">💬</div>

        <div className="text-3xl font-extrabold text-blue-900">
          150+
        </div>

        <div className="text-slate-500">
          Aktif Sohbetçi
        </div>

      </div>

      <div className="bg-white rounded-2xl shadow p-6 text-center">

        <div className="text-4xl mb-3">📱</div>

        <div className="text-3xl font-extrabold text-blue-900">
          %100
        </div>

        <div className="text-slate-500">
          Mobil Uyumlu
        </div>

      </div>

      <div className="bg-white rounded-2xl shadow p-6 text-center">

        <div className="text-4xl mb-3">🎙️</div>

        <div className="text-3xl font-extrabold text-blue-900">
          7/24
        </div>

        <div className="text-slate-500">
          Canlı Radyo
        </div>

      </div>

    </div>

    {/* KARTLAR */}

    <div className="grid md:grid-cols-3 gap-6 p-8">

      <div className="rounded-2xl border hover:border-orange-500 hover:shadow-xl transition p-7">

        <div className="text-5xl mb-5">💬</div>

        <h3 className="text-2xl font-bold mb-3">
          Sohbet Odaları
        </h3>

        <p className="text-slate-600 leading-7">
          Genel sohbet, arkadaşlık sohbeti, şehir odaları ve eğlence
          kanallarında ücretsiz sohbet edin.
        </p>

      </div>

      <div className="rounded-2xl border hover:border-blue-600 hover:shadow-xl transition p-7">

        <div className="text-5xl mb-5">📱</div>

        <h3 className="text-2xl font-bold mb-3">
          Mobil Sohbet
        </h3>

        <p className="text-slate-600 leading-7">
          Android, iPhone ve tabletlerden uygulama kurmadan
          anında sohbet odalarına bağlanın.
        </p>

      </div>

      <div className="rounded-2xl border hover:border-green-500 hover:shadow-xl transition p-7">

        <div className="text-5xl mb-5">⚡</div>

        <h3 className="text-2xl font-bold mb-3">
          IRC Sohbet
        </h3>

        <p className="text-slate-600 leading-7">
          Güçlü IRC altyapısı sayesinde hızlı, güvenli ve
          kesintisiz sohbet deneyimi yaşayın.
        </p>

      </div>

    </div>

    {/* ALT */}

    <div className="bg-slate-100 text-center px-8 py-10">

      <div className="text-2xl font-bold text-blue-900 mb-3">
        ⭐ Türkiye'nin En Samimi Sohbet Platformlarından Biri
      </div>

      <p className="text-slate-600 max-w-3xl mx-auto leading-8 mb-8">
        Sohbet odaları, mobil sohbet, IRC sohbet sistemi ve canlı radyo
        hizmetiyle Zurna.TR her gün binlerce kullanıcıyı aynı ortamda
        buluşturur.
      </p>

      <a
        href="/zurna-sohbet"
        className="inline-block bg-orange-500 hover:bg-orange-600 transition text-white font-bold px-10 py-4 rounded-2xl shadow-lg"
      >
        Zurna Sohbet Hakkında Daha Fazla Bilgi →
      </a>

    </div>

  </div>

</section>
<CanliDurum />

      {/* SON EKLENEN YAZILAR */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center text-slate-800 mb-2">
          Son Eklenen Yazılar
        </h2>

        <p className="text-center text-slate-500 mb-10">
          Zurna Sohbet, Zurna Chat ve IRC Sohbet hakkında en güncel içerikler
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {articles.map((post: any) => (
            <a
              key={post.id}
              href={`/yazi/${post.slug}`}
              className="block bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-1 transition"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[16/9] object-cover rounded-2xl mb-4"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {post.title}
              </h3>

              <p className="text-slate-600 text-sm line-clamp-3">
                {post.excerpt}
              </p>

              <span className="mt-4 inline-block text-orange-500 font-semibold">
                Devamını Oku →
              </span>
            </a>
          ))}

        </div>
      </section>

    </main>

  );
}