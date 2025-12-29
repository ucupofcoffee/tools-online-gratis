import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Tools online gratis untuk membantu hal-hal praktis sehari-hari. Mulai dari Kalkulator Alokasi Gaji.",
  openGraph: {
    title: "Tools Online Gratis",
    description:
      "Kumpulan tools online gratis yang sederhana, cepat, dan mudah dipakai.",
  },
};

export default function HomePage() {
  return (
    <div className="grid gap-10">
      <section className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:p-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Tools Online Gratis
          </h1>
          <p className="mt-4 text-base leading-relaxed text-black/70 md:text-lg">
            Kumpulan tools sederhana yang bisa dipakai siapa saja — cepat, rapi,
            dan tanpa ribet. Tanpa login. Tanpa simpan data.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/tools/kalkulator-gaji"
              className="rounded-2xl bg-black px-5 py-3 text-center text-sm font-semibold text-white hover:bg-black/90"
            >
              Coba Kalkulator Gaji
            </a>
            <a
              href="/about"
              className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-center text-sm font-semibold hover:bg-black/5"
            >
              Tentang proyek ini
            </a>
          </div>

          <p className="mt-4 text-xs text-black/60">
            Catatan: situs ini masih berkembang — tool baru akan ditambahkan
            bertahap.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold tracking-tight">
            Kenapa gratis?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-black/70">
            Fokusnya validasi pasar dan kegunaan tool. Kamu bisa pakai tanpa
            akun, tanpa iklan, dan tanpa data disimpan. Nanti kalau sudah
            berkembang, baru dipertimbangkan monetisasi yang wajar (misalnya
            AdSense).
          </p>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold tracking-tight">
            Prinsip desain
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-black/70">
            <li>Mobile-first, cepat dibuka, tampilan rapi</li>
            <li>Perhitungan sepenuhnya di device kamu</li>
            <li>Konten jelas, tidak “jualan”</li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold tracking-tight">Tools tersedia</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <a
            href="/tools/kalkulator-gaji"
            className="rounded-2xl border border-black/10 bg-white p-5 hover:bg-black/5"
          >
            <p className="text-sm font-semibold">Kalkulator Alokasi Gaji</p>
            <p className="mt-1 text-sm text-black/70">
              Hitung pembagian gaji 50/30/20, 40/15/25/10/10, atau custom.
            </p>
          </a>

          <div className="rounded-2xl border border-dashed border-black/15 bg-white p-5">
            <p className="text-sm font-semibold">
              Tool berikutnya (coming soon)
            </p>
            <p className="mt-1 text-sm text-black/70">
              Akan ditambah secara bertahap berdasarkan kebutuhan pengguna.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold tracking-tight">
          Artikel Terbaru
        </h2>

        <a
          href="/artikel/cara-membagi-gaji-50-30-20"
          className="mt-4 block rounded-2xl border border-black/10 bg-white p-5 hover:bg-black/5"
        >
          <p className="text-sm font-semibold">
            Cara Membagi Gaji 50/30/20 yang Realistis
          </p>
          <p className="mt-1 text-sm text-black/70">
            Panduan santai untuk memahami metode 50/30/20, lengkap dengan contoh
            angka, kesalahan umum, dan tips agar konsisten.
          </p>
        </a>
      </section>
    </div>
  );
}
