import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  buildArticleSchema,
  getBlogPost,
  getBlogPostUrl,
  getBlogPosts,
  getRelatedBlogPosts,
} from "@/lib/blogPosts";
import { siteUrl } from "@/lib/sohbetSeoPages";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Yazı bulunamadı | Zurna.TR",
    };
  }

  const url = getBlogPostUrl(post);

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      siteName: "Zurna.TR",
      locale: "tr_TR",
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: `${siteUrl}${post.image}`,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`${siteUrl}${post.image}`],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const latestPosts = getRelatedBlogPosts(post, 5);
  const schema = buildArticleSchema(post);

  return (
    <main className="max-w-7xl mx-auto py-10 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <Link href="/" className="text-orange-500">
          Anasayfa
        </Link>
        {" > "}
        <span aria-current="page">{post.title}</span>
      </nav>

      <div className="grid md:grid-cols-3 gap-8">
        <article className="md:col-span-2">
          <h1 className="text-5xl font-bold mb-4">{post.title}</h1>

          <div className="text-sm text-gray-500 mb-6">
            {post.publishedAt} - {post.readingTime}
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-2xl mb-8 shadow"
          />

          <div className="text-lg leading-9 space-y-6">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <section className="mt-10 bg-white rounded-2xl border p-6 shadow">
            <h2 className="text-3xl font-bold mb-5">Sık Sorulan Sorular</h2>

            <div className="space-y-5">
              {post.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                  <p className="text-gray-700 leading-8">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <aside className="space-y-6">
          <div className="bg-white rounded-2xl border p-5 shadow">
            <h2 className="text-2xl font-bold mb-4">Zurna Radyo</h2>

            <img
              src="/zurna-radyo-banner.png"
              alt="Zurna Radyo"
              className="w-full rounded-xl"
            />
          </div>

          <div className="bg-white rounded-2xl border p-5 shadow">
            <h2 className="text-2xl font-bold mb-5">
              Zurna.TR Sunucusuna Bağlı Online Sistem
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>#zurna</span>
                <span className="text-green-600 font-bold">158 Online</span>
              </div>

              <div className="flex justify-between">
                <span>#sohbet</span>
                <span className="text-green-600 font-bold">142 Online</span>
              </div>

              <div className="flex justify-between">
                <span>#fantezisohbet</span>
                <span className="text-green-600 font-bold">321 Online</span>
              </div>
            </div>

            <a
              href="/sohbet/index.html"
              className="block text-center mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl"
            >
              HEMEN SOHBETE BAŞLA
            </a>
          </div>

          <div className="bg-white rounded-2xl border p-5 shadow">
            <h2 className="font-bold text-xl mb-4">İlgili Yazılar</h2>

            <div className="space-y-3">
              {latestPosts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/yazi/${item.slug}`}
                  className="block hover:text-orange-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
