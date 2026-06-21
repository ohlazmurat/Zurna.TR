import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  buildCityPageSchema,
  cityPages,
  getCityPage,
  getCityPageUrl,
} from "@/lib/cityPages";
import { siteUrl } from "@/lib/sohbetSeoPages";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return cityPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getCityPage(slug);

  if (!page) {
    return {
      title: "Sayfa bulunamadı | Zurna.TR",
    };
  }

  const url = getCityPageUrl(page);

  return {
    title: `${page.title} | Şehre Özel Sohbet Odaları - Zurna.TR`,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${page.title} | Zurna.TR`,
      description: page.description,
      url,
      siteName: "Zurna.TR",
      locale: "tr_TR",
      type: "article",
      images: [
        {
          url: `${siteUrl}/zurna-logo-cropped.png`,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | Zurna.TR`,
      description: page.description,
      images: [`${siteUrl}/zurna-logo-cropped.png`],
    },
  };
}

export default async function CitySohbetPage({ params }: Props) {
  const { slug } = await params;
  const page = getCityPage(slug);

  if (!page) {
    notFound();
  }

  const schema = buildCityPageSchema(page);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="text-orange-500 hover:text-orange-600">
              Anasayfa
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-semibold text-slate-700">
            {page.title}
          </li>
        </ol>
      </nav>

      <section
        aria-labelledby={`${page.slug}-hero`}
        className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 rounded-[32px] overflow-hidden shadow-2xl mb-12"
      >
        <div className="p-10 md:p-16">
          <span className="inline-flex items-center bg-orange-500 text-white px-5 py-2 rounded-full font-bold text-sm mb-6">
            ŞEHİR SOHBETLERİ
          </span>

          <h1
            id={`${page.slug}-hero`}
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-8"
          >
            {page.city} Sohbet
            <span className="text-orange-400"> Odaları </span>
          </h1>

          <p className="text-blue-100 text-xl leading-9 max-w-4xl">
            {page.summary}
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">
            Yerel Muhabbet
          </h2>
          <p className="text-slate-600 leading-8">
            {page.city} gündemine ve şehir kültürüne yakın sohbet başlıklarıyla
            daha doğal tanışmalar kurabilirsiniz.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">
            Mobil Uyum
          </h2>
          <p className="text-slate-600 leading-8">
            Telefon ve tabletlerden şehir sohbet sayfasını okuyabilir, sohbet
            giriş alanına hızlıca geçebilirsiniz.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">
            Türkçe Sohbet
          </h2>
          <p className="text-slate-600 leading-8">
            Zurna.TR, şehir odaklı sayfaları Türkçe sohbet ekosistemiyle
            birleştirerek anlaşılır bir yol sunar.
          </p>
        </div>
      </section>

      {page.contentSections.map((section) => (
        <section
          key={section.title}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-10 mb-10"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            {section.title}
          </h2>

          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-slate-700 leading-8 mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <section className="bg-slate-100 rounded-3xl p-8 md:p-10 mb-10">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Popüler Şehir Sohbetleri
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {page.relatedLinks.slice(0, 6).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white rounded-2xl p-5 shadow hover:shadow-xl transition font-bold text-center"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-3xl shadow-xl p-8 md:p-10 mb-10">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          Sık Sorulan Sorular
        </h2>

        <div className="space-y-8">
          {page.faqs.map((item) => (
            <article key={item.question}>
              <h3 className="text-2xl font-bold mb-3">{item.question}</h3>
              <p className="text-slate-700 leading-8">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 rounded-3xl p-8 md:p-10 mb-10">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          İlgili Sayfalar
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {page.relatedLinks.slice(6).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white rounded-2xl p-5 shadow hover:shadow-xl transition font-bold"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl text-center p-10 md:p-12 mb-10">
        <h2 className="text-4xl font-bold text-white mb-4">
          {page.city} Sohbetine Katılın
        </h2>
        <p className="text-orange-100 text-lg mb-8 max-w-3xl mx-auto">
          {page.city} çevresinden yeni insanlarla tanışmak ve şehir odaklı
          muhabbeti başlatmak için Zurna.TR sohbet girişini kullanabilirsiniz.
        </p>
        <Link
          href="/sohbet/index.html"
          className="inline-block bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold hover:scale-105 transition"
          aria-label={`${page.city} sohbet sayfasından sohbete bağlan`}
        >
          SOHBETE BAĞLAN
        </Link>
      </section>
    </main>
  );
}
