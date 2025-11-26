import { publikasi } from "@/const/Publikasi";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

interface Props {
  slug: string;
}

// Server Component
export default function PostDetail({ slug }: Props) {
  const post = publikasi.find((p) => p.slug === slug);

  if (!post) return <p className="text-center mt-8">Post tidak ditemukan</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-4">
        <Link href="/">Home</Link> /{" "}
        <Link href="/publikasi">Publikasi</Link> /{" "}
        <span className="text-gray-700">{post.judul}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">{post.judul}</h1>
      <p className="text-gray-600 mb-6">{post.ringkasan}</p>

      {post.gambar && (
        <img
          src={post.gambar}
          alt={post.judul}
          className="mb-6 rounded-lg shadow-sm"
        />
      )}

      <div className="prose prose-lg">
        <ReactMarkdown>{post.konten_md}</ReactMarkdown>
      </div>
    </div>
  );
}