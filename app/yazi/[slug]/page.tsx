import Link from "next/link";
import { supabase } from "@/lib/supabase";

async function getPost(slug: string) {
  const { data } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  return data;
}

async function getLatestPosts() {
  const { data } = await supabase
    .from("posts")
    .select("*")
    .order("id", { ascending: false })
    .limit(5);

  return data || [];
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);
  const latestPosts = await getLatestPosts();

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto p-10">
        Yazı bulunamadı.
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto py-10 px-4">

      <div className="mb-6 text-sm text-gray-500">
        <Link href="/" className="text-orange-500">
          Anasayfa
        </Link>
        {" > "}
        {post.title}
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="md:col-span-2">

          <h1 className="text-5xl font-bold mb-6">
            {post.title}
          </h1>

          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-2xl mb-8 shadow"
            />
          )}

          <div className="text-lg leading-9 whitespace-pre-line">
            {post.content}
          </div>

        </div>

        <aside className="space-y-6">

  <div className="bg-white rounded-2xl border p-5 shadow">
    <h3 className="text-2xl font-bold mb-4">
      🎵 Zurna Radyo
    </h3>

    <img
      src="/zurna-radyo-banner.png"
      alt="Zurna Radyo"
      className="w-full rounded-xl"
    />
  </div>

  <div className="bg-white rounded-2xl border p-5 shadow">
    <h3 className="text-2xl font-bold mb-5">
      🟠 Zurna.TR Sunucusuna Bağlı Online Sistem
    </h3>

    <div className="space-y-4">

      <div className="flex justify-between">
        <span>#zurna</span>
        <span className="text-green-600 font-bold">
          158 Online
        </span>
      </div>

      <div className="flex justify-between">
        <span>#sohbet</span>
        <span className="text-green-600 font-bold">
          142 Online
        </span>
      </div>

      <div className="flex justify-between">
        <span>#fantesisohbet</span>
        <span className="text-green-600 font-bold">
          321 Online
        </span>
      </div>

    </div>

    <a
      href="/"
      className="block text-center mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl"
    >
      HEMEN SOHBETE BAŞLA
    </a>
  </div>

  <div className="bg-white rounded-2xl border p-5 shadow">
    <h3 className="font-bold text-xl mb-4">
      Son Yazılar
    </h3>

    <div className="space-y-3">
      {latestPosts.map((item: any) => (
        <Link
          key={item.id}
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