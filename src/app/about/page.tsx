import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Tentang Tools Online Gratis: proyek sederhana yang fokus membantu lewat tool cepat dan mudah.",
};

export default function AboutPage() {
  return (
    <div className="grid gap-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Tentang
        </h1>
        <p className="text-sm text-black/70">
          Tools Online Gratis adalah proyek yang sedang dikembangkan.
        </p>
      </header>

      <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold tracking-tight">Tujuan</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-black/70">
          <li>Menyediakan tools sederhana, cepat, dan mudah dipakai</li>
          <li>Menjadi aset jangka panjang yang bisa ditambah tool lain</li>
          <li>SEO-friendly agar bisa ditemukan lewat Google</li>
          <li>Tanpa backend: privasi lebih aman, biaya tetap nol</li>
        </ul>

        <p className="mt-4 text-sm text-black/70">
          Kalau kamu punya ide tool yang ingin ditambahkan, kamu bisa kirim lewat
          kontak di halaman privasi.
        </p>
      </section>
    </div>
  );
}
