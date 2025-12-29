import type { Metadata } from "next";
import { SalaryCalculator } from "@/components/salary-calculator";

export const metadata: Metadata = {
  title: "Kalkulator Alokasi Gaji",
  description:
    "Kalkulator alokasi gaji gratis: 50/30/20, 40/15/25/10/10, atau custom. Tanpa login, tanpa simpan data.",
  openGraph: {
    title: "Kalkulator Alokasi Gaji",
    description:
      "Hitung pembagian gaji dengan cepat. Tanpa login, tanpa simpan data.",
  },
};

export default function SalaryToolPage() {
  return (
    <div className="grid gap-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Kalkulator Alokasi Gaji
        </h1>
        <p className="text-sm leading-relaxed text-black/70">
          Masukkan gaji bulanan, pilih metode pembagian, lalu hitung nominal per
          kategori. Semua perhitungan dilakukan di perangkat kamu.
        </p>
      </header>

      <SalaryCalculator />

      <section className="rounded-2xl border border-black/10 bg-white p-5 text-sm text-black/70 shadow-sm">
        <h2 className="text-base font-semibold tracking-tight">Disclaimer</h2>
        <p className="mt-2">
          Hasil perhitungan adalah estimasi dan tidak menjamin kondisi finansial
          tertentu. Sesuaikan pembagian dengan kebutuhan, tanggungan, dan tujuan
          keuangan kamu.
        </p>
      </section>
    </div>
  );
}
