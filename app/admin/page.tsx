"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  async function loadPosts() {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("id", { ascending: false });

    setPosts(data || []);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  async function savePost() {
  if (editId) {
    const { error } = await supabase
      .from("posts")
      .update({
        title,
        slug,
        excerpt,
        content,
        image,
      })
      .eq("id", editId);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Yazı güncellendi");
    setEditId(null);
  } else {
    const { error } = await supabase.from("posts").insert([
      {
        title,
        slug,
        excerpt,
        content,
        image,
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Yazı kaydedildi");
  }

  setTitle("");
  setSlug("");
  setExcerpt("");
  setContent("");
  setImage("");

  loadPosts();
}

  async function deletePost(id: number) {
    const onay = confirm("Bu yazıyı silmek istiyor musun?");

    if (!onay) return;

    const { error } = await supabase
      .from("posts")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Yazı silindi");
    loadPosts();
  }
  function editPost(post: any) {
  setEditId(post.id);

  setTitle(post.title || "");
  setSlug(post.slug || "");
  setExcerpt(post.excerpt || "");
  setContent(post.content || "");
  setImage(post.image || "");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

  return (
    <main className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Zurna.TR Yönetim Paneli
      </h1>

      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        <input
          type="text"
          placeholder="Başlık"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="text"
          placeholder="Slug (ornek: zurna-sohbet)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="text"
          placeholder="/uploads/posts/resim.png"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border p-3 rounded-xl"
        />

        <textarea
          placeholder="Özet"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full border p-3 rounded-xl h-24"
        />

        <textarea
          placeholder="İçerik"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-3 rounded-xl h-64"
        />

        <button
          onClick={savePost}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl"
        >
          Yazıyı Kaydet
        </button>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">
          Eklenen Yazılar
        </h2>

        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border rounded-xl p-4 bg-white shadow"
            >
              <div className="font-bold text-xl">
                {post.title}
              </div>

              <div className="text-sm text-gray-500">
                /yazi/{post.slug}
              </div>

              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-40 rounded-xl mt-3"
                />
              )}

              <p className="mt-3 text-gray-700">
                {post.excerpt}
              </p>

              <div className="mt-4 flex gap-2">
                <a
                  href={`/yazi/${post.slug}`}
                  target="_blank"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Görüntüle
                </a>

                <button
  onClick={() => editPost(post)}
  className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
>
  Düzenle
</button>

                <button
                  onClick={() => deletePost(post.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Sil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}