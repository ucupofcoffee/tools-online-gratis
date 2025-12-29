import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/seo";

const slug = "/artikel/cara-membagi-gaji-50-30-20";
const canonicalUrl = `${SITE.url}${slug}`;

export const metadata: Metadata = {
  title: "Cara Membagi Gaji 50/30/20 yang Realistis (Lengkap + Contoh)",
  description:
    "Panduan cara membagi gaji dengan metode 50/30/20 secara realistis: penjelasan, contoh angka, kesalahan umum, dan tips agar konsisten.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Cara Membagi Gaji 50/30/20 yang Realistis",
    description:
      "Pelajari metode 50/30/20 untuk mengatur gaji: kebutuhan, keinginan, dan tabungan/investasi, lengkap dengan contoh dan tips praktis.",
    url: canonicalUrl,
    siteName: SITE.name,
    type: "article",
  },
};

export default function ArticlePage() {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <header className="mb-8 space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Cara Membagi Gaji 50/30/20 yang Realistis (Lengkap + Contoh)
        </h1>
        <p className="text-sm text-black/60">
          Terakhir diperbarui:{" "}
          {new Date().toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className="text-base leading-relaxed text-black/70">
          Metode 50/30/20 sering disebut sebagai cara paling sederhana untuk
          mengatur gaji bulanan. Tapi, apakah metode ini selalu cocok untuk semua
          orang? Di artikel ini, kita bahas cara membagi gaji 50/30/20 secara
          realistis, lengkap dengan contoh angka, kesalahan umum, dan tips agar
          kamu bisa konsisten menjalaninya.
        </p>
      </header>

      {/* Content */}
      <section className="prose prose-neutral max-w-none">
        <h2>Apa Itu Metode 50/30/20?</h2>
        <p>
          Metode 50/30/20 adalah aturan pembagian gaji bulanan menjadi tiga
          kategori utama:
        </p>
        <ul>
          <li>
            <strong>50%</strong> untuk <strong>kebutuhan</strong>
          </li>
          <li>
            <strong>30%</strong> untuk <strong>keinginan</strong>
          </li>
          <li>
            <strong>20%</strong> untuk <strong>tabungan dan investasi</strong>
          </li>
        </ul>
        <p>
          Konsep ini populer karena mudah dipahami dan tidak memerlukan perhitungan
          yang rumit. Cocok untuk pemula yang baru mulai mengatur keuangan
          pribadi.
        </p>

        <h2>Penjelasan Tiap Kategori</h2>

        <h3>1. 50% untuk Kebutuhan</h3>
        <p>
          Kebutuhan adalah pengeluaran yang wajib kamu bayar agar bisa hidup dan
          bekerja dengan normal. Contohnya:
        </p>
        <ul>
          <li>Sewa kos atau cicilan rumah</li>
          <li>Makan sehari-hari</li>
          <li>Transportasi</li>
          <li>Listrik, air, internet</li>
          <li>Asuransi dasar</li>
        </ul>
        <p>
          Idealnya, total semua kebutuhan ini tidak lebih dari 50% gaji. Jika
          ternyata lebih, itu tanda kamu perlu meninjau ulang gaya hidup atau
          komposisi keuangan.
        </p>

        <h3>2. 30% untuk Keinginan</h3>
        <p>
          Keinginan adalah pengeluaran yang sifatnya opsional. Tanpa ini kamu
          tetap bisa hidup, tapi kualitas hidup mungkin terasa lebih “kering”.
          Contohnya:
        </p>
        <ul>
          <li>Nongkrong, ngopi, atau makan di luar</li>
          <li>Langganan streaming</li>
          <li>Belanja hobi</li>
          <li>Liburan</li>
        </ul>
        <p>
          Banyak orang terjebak karena keinginan sering terasa seperti kebutuhan.
          Di sinilah disiplin berperan penting.
        </p>

        <h3>3. 20% untuk Tabungan & Investasi</h3>
        <p>
          Bagian ini adalah pondasi masa depan finansial kamu. Isinya bisa
          dibagi lagi, misalnya:
        </p>
        <ul>
          <li>Dana darurat</li>
          <li>Tabungan jangka pendek</li>
          <li>Investasi (reksa dana, saham, dll)</li>
        </ul>
        <p>
          Kalau memungkinkan, kamu bahkan boleh menaikkan porsi ini. Tapi untuk
          awal, 20% sudah sangat baik.
        </p>

        <h2>Contoh Pembagian Gaji 50/30/20</h2>
        <p>
          Misalnya gaji kamu <strong>Rp7.000.000</strong> per bulan:
        </p>
        <ul>
          <li>50% kebutuhan: Rp3.500.000</li>
          <li>30% keinginan: Rp2.100.000</li>
          <li>20% tabungan/investasi: Rp1.400.000</li>
        </ul>
        <p>
          Dengan angka ini, kamu punya batas yang jelas untuk tiap kategori,
          sehingga lebih terkontrol.
        </p>

        <p>
          Kalau mau hitung otomatis dan langsung lihat hasilnya dalam Rupiah,
          kamu bisa pakai{" "}
          <Link
            href="/tools/kalkulator-gaji"
            className="text-black underline underline-offset-4"
          >
            kalkulator alokasi gaji ini
          </Link>
          .
        </p>

        <h2>Kesalahan Umum Saat Pakai Metode 50/30/20</h2>
        <h3>1. Semua Pengeluaran Dimasukkan ke “Kebutuhan”</h3>
        <p>
          Banyak orang menganggap nongkrong atau beli gadget sebagai kebutuhan.
          Akibatnya, porsi 50% cepat jebol dan metode ini terasa “tidak bekerja”.
        </p>

        <h3>2. Tidak Punya Dana Darurat</h3>
        <p>
          Kalau 20% langsung habis untuk investasi berisiko tanpa dana darurat,
          kamu akan kelabakan saat ada kejadian tak terduga.
        </p>

        <h3>3. Terlalu Kaku</h3>
        <p>
          Metode ini adalah panduan, bukan aturan mati. Kalau kondisi hidup kamu
          belum memungkinkan 50/30/20, tidak apa-apa menyesuaikan sementara.
        </p>

        <h2>Apakah Metode 50/30/20 Cocok untuk Semua Orang?</h2>
        <p>
          Jawabannya: tidak selalu. Untuk fresh graduate dengan gaji UMR dan
          biaya hidup tinggi, porsi kebutuhan bisa saja lebih dari 50%.
          Sebaliknya, kalau penghasilan sudah stabil, kamu bisa memperbesar
          porsi tabungan dan investasi.
        </p>

        <p>
          Yang terpenting adalah <em>punya struktur</em>. Metode 50/30/20 bisa
          jadi titik awal sebelum kamu membuat versi yang lebih personal.
        </p>

        <p>
          Kamu juga bisa menyesuaikan kategori dan persentasenya secara fleksibel
          menggunakan{" "}
          <Link
            href="/tools/kalkulator-gaji"
            className="text-black underline underline-offset-4"
          >
            kalkulator alokasi gaji
          </Link>{" "}
          yang menyediakan mode custom.
        </p>

        <h2>Tips Agar Konsisten Menjalankan 50/30/20</h2>
        <ul>
          <li>Catat pengeluaran minimal 1 bulan pertama</li>
          <li>Pisahkan rekening jika perlu</li>
          <li>Otomatiskan tabungan di awal gajian</li>
          <li>Evaluasi tiap 3 bulan</li>
        </ul>

        <h2>Disclaimer</h2>
        <p>
          Semua contoh dan perhitungan di artikel ini bersifat{" "}
          <strong>estimasi</strong> dan tidak menggantikan nasihat keuangan
          profesional. Setiap orang memiliki kondisi finansial yang berbeda.
        </p>

        <h2>FAQ – Pertanyaan yang Sering Ditanyakan</h2>
        <h3>Apakah 50/30/20 wajib diikuti?</h3>
        <p>
          Tidak. Ini hanya panduan awal agar keuangan lebih terstruktur.
        </p>

        <h3>Bagaimana kalau kebutuhan saya lebih dari 50%?</h3>
        <p>
          Tidak masalah. Kamu bisa menyesuaikan sementara sambil mencari cara
          menekan biaya atau menaikkan penghasilan.
        </p>

        <h3>Apakah cicilan termasuk kebutuhan?</h3>
        <p>
          Ya, cicilan pokok seperti rumah atau kendaraan biasanya masuk
          kebutuhan.
        </p>

        <h3>Bolehkah tabungan lebih dari 20%?</h3>
        <p>
          Sangat boleh, terutama jika penghasilan sudah cukup dan kebutuhan
          terkendali.
        </p>

        <h3>Perlu pakai aplikasi khusus?</h3>
        <p>
          Tidak wajib. Tapi alat bantu seperti kalkulator alokasi gaji bisa
          mempercepat dan mengurangi kesalahan hitung.
        </p>
      </section>

      {/* Footer article links */}
      <footer className="mt-10 border-t border-black/10 pt-6 text-sm text-black/70">
        <p>
          Ingin tahu tujuan proyek ini? Baca halaman{" "}
          <Link href="/about" className="underline underline-offset-4">
            Tentang
          </Link>{" "}
          atau kebijakan privasi di{" "}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </footer>
    </article>
  );
}
