import Link from "next/link";
import { buildPageSchema, type SohbetSeoPage } from "@/lib/sohbetSeoPages";

type Props = {
  page: SohbetSeoPage;
};

export default function SohbetSeoPage({ page }: Props) {
  const schema = buildPageSchema(page);

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
            {page.heroBadge}
          </span>

          <h1
            id={`${page.slug}-hero`}
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-8"
          >
            {page.heroTitle}
            <span className="text-orange-400"> {page.heroAccent} </span>
          </h1>

          <p className="text-blue-100 text-xl leading-9 max-w-4xl">
            {page.heroText}
          </p>
        </div>
      </section>

      <section
        aria-label={`${page.title} istatistikleri`}
        className="grid md:grid-cols-4 gap-6 mb-12"
      >
        {page.stats.map((stat, index) => (
          <div
            key={stat}
            className="bg-white rounded-3xl shadow-xl p-8 text-center"
          >
            <div className="text-3xl font-extrabold text-blue-900">
              {index === 0 ? "01" : `0${index + 1}`}
            </div>
            <div className="text-slate-500 mt-3">{stat}</div>
          </div>
        ))}
      </section>

      {page.sections.map((section) => (
        <section
          key={section.title}
          aria-labelledby={`${page.slug}-${section.title}`}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-10 mb-10"
        >
          <h2
            id={`${page.slug}-${section.title}`}
            className="text-4xl font-bold text-blue-900 mb-6"
          >
            {section.title}
          </h2>

          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-slate-700 leading-8 mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <section
        aria-label={`${page.title} ozellikleri`}
        className="grid md:grid-cols-3 gap-6 mb-10"
      >
        {page.cards.map((card) => (
          <article key={card.title} className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
              {card.title}
            </h3>
            <p className="text-slate-600 leading-8">{card.text}</p>
          </article>
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-5">
            {page.checklistTitle}
          </h2>

          <ul className="space-y-4 text-slate-700 leading-8">
            {page.checklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 font-bold">
                  -
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-950 to-blue-700 rounded-3xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-5">Neden Zurna.TR?</h2>
          <p className="leading-8 text-blue-100">
            Zurna.TR, {page.keyword} arayan kullanicilar icin sade giris,
            mobil uyumlu sayfa yapisi, aktif sohbet odalari ve dogal internal
            linklerle desteklenen anlasilir bir deneyim sunar.
          </p>
        </div>
      </section>

      <section
        aria-labelledby={`${page.slug}-faq`}
        className="bg-white rounded-3xl shadow-xl p-8 md:p-10 mb-10"
      >
        <h2
          id={`${page.slug}-faq`}
          className="text-4xl font-bold text-blue-900 mb-8"
        >
          Sik Sorulan Sorular
        </h2>

        <div className="space-y-8">
          {page.faq.map((item) => (
            <article key={item.question}>
              <h3 className="text-2xl font-bold mb-3">{item.question}</h3>
              <p className="text-slate-700 leading-8">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 rounded-3xl p-8 md:p-10 mb-10">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Ilgili Sayfalar
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {page.related.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white rounded-2xl p-5 shadow hover:shadow-xl transition font-bold"
            >
              {link.label}
              <span aria-hidden="true"> -</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl text-center p-10 md:p-12 mb-10">
        <h2 className="text-4xl font-bold text-white mb-4">{page.ctaTitle}</h2>
        <p className="text-orange-100 text-lg mb-8 max-w-3xl mx-auto">
          {page.ctaText}
        </p>
        <a
          href="/sohbet/index.html"
          className="inline-block bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold hover:scale-105 transition"
          aria-label={`${page.title} sayfasindan sohbete baglan`}
        >
          SOHBETE BAGLAN
        </a>
      </section>
    </main>
  );
}
