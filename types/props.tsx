export interface BlogCardProps {
  id: number;
  judul: string;
  slug: string;
  konten_md: string;
  ringkasan?: string;
  gambar?: string;
  kategori?: string;
  penulis?: string;
  waktu_baca: number;
  jumlah_komentar: number;
  unggulan: boolean;
  tanggal_dibuat: string;
  tanggal_diperbarui: string;
}

/**
 * Props BlogCard adalah turunan Artikel
 */
export interface Artikel {
  id: number;
  judul: string;
  slug: string;
  konten_md: string;
  ringkasan?: string;
  gambar?: string;
  kategori?: string;
  penulis?: string;
  waktu_baca?: number;
  jumlah_komentar?: number;
  unggulan?: boolean;
  tanggal_dibuat: string;
}
