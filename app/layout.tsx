import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SohbetGiris from "@/components/SohbetGiris";
import MobileMenu from "@/components/MobileMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title:
    "Zurna Sohbet - Sohbet Odaları, Mobil Sohbet ve Zurna Chat",

  description:
    "Zurna Sohbet ile ücretsiz sohbet odalarına katılın. Mobil sohbet, Zurna Chat, IRC sohbet ve Zurna Radyo ile yeni arkadaşlar edinin ve keyifli vakit geçirin.",

  keywords: [
    "zurna sohbet",
    "zurna chat",
    "sohbet odaları",
    "mobil sohbet",
    "irc sohbet",
    "ücretsiz sohbet",
    "chat odaları",
    "zurna.tr"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

<header className="bg-white shadow-sm relative z-[9999]">
  <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center md:justify-between">

   <a href="/">
  <img
    src="/zurna-logo.png"
    alt="Zurna.TR - Sohbetin Yerli Uzantısı"
    className="h-30 w-auto mx-auto md:mx-0 md:h-20"
  />
</a>

    <nav className="hidden md:flex gap-10 font-bold text-[#0a1f63]">
      <a href="/">Anasayfa</a>
      <a href="/sohbet-odalari">Sohbet Odaları</a>
      <a href="/mobil-sohbet">Mobil Sohbet</a>
      <a href="/zurna-radyo">Zurna Radyo</a>
      <a href="/mirc-indir">MIRC İndir</a>
    </nav>

    <MobileMenu />

  </div>
</header>

<section className="bg-gradient-to-r from-blue-950 to-blue-800">
  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Türkiye'nin
          <br />
          <span className="text-orange-400">
            Samimi Sohbet
          </span>
          <br />
          Ortamı
        </h1>

        <p className="mt-6 text-base md:text-xl text-blue-100">
          Zurna Sohbet ile yeni arkadaşlar edinin,
          sohbet odalarında keyifli vakit geçirin.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-5 md:p-8">
        <h2 className="text-3xl font-bold mb-5">
          Sohbete Giriş Yap
        </h2>

        <SohbetGiris />
      </div>

    </div>

  </div>
</section>

{children}
<footer className="bg-[#081c5a] text-white mt-auto">
  <div className="max-w-7xl mx-auto px-6 py-12">

    <div className="grid md:grid-cols-4 gap-10">

      {/* Logo ve Açıklama */}
      <div>
        <img
          src="/zurna-logo-cropped.png"
          alt="Zurna.TR"
          className="h-30 mb-4"
        />

        <p className="text-gray-300 leading-7">
          Zurna Sohbet, Türkiye'nin samimi sohbet
          ortamlarından biridir. Sohbet odaları,
          mobil sohbet ve Zurna Chat hizmetleriyle
          binlerce kullanıcıyı bir araya getirir.
        </p>
      </div>

      {/* Menü */}
      <div>
        <h3 className="font-bold text-xl mb-4">
          Hızlı Menü
        </h3>

        <ul className="space-y-2 text-gray-300">
  <li><a href="/">Anasayfa</a></li>
  <li><a href="/sohbet-odalari">Sohbet Odaları</a></li>
  <li><a href="/mobil-sohbet">Mobil Sohbet</a></li>
  <li><a href="/zurna-radyo">Zurna Radyo</a></li>
  <li><a href="/mirc-indir">MIRC İndir</a></li>
</ul>
      </div>

      {/* SEO Alanı */}
      <div>
        <h3 className="font-bold text-xl mb-4">
          Popüler Aramalar
        </h3>

      <ul className="space-y-2 text-gray-300">
  <li><a href="/zurna-sohbet">Zurna Sohbet</a></li>
  <li><a href="/zurna-chat">Zurna Chat</a></li>
  <li><a href="/mobil-sohbet">Mobil Sohbet</a></li>
  <li><a href="/irc-sohbet">IRC Sohbet</a></li>
  <li><a href="/sohbet-odalari">Sohbet Odaları</a></li>
  <li><a href="/zurna-radyo">Zurna Radyo</a></li>
  <li><a href="/mirc-indir">mIRC İndir</a></li>
</ul>
      </div>

      {/* Bilgi */}
      <div>
        <h3 className="font-bold text-xl mb-4">
          Zurna.TR
        </h3>

        <p className="text-gray-300 leading-7">
          Ücretsiz sohbet odaları, mobil sohbet,
          IRC sohbet sistemi ve canlı radyo
          yayınlarıyla eğlenceli ve güvenli
          sohbet deneyimi sunar.
        </p>
      </div>

    </div>

    <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400">
      © 2026 Zurna.TR - Tüm Hakları Saklıdır. -- ohlaz --
    </div>

  </div>
</footer>

</body>
    </html>
  );
}
