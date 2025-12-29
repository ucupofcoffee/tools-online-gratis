import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Kebijakan privasi Tools Online Gratis. Tidak menyimpan data pribadi dan tidak mewajibkan login.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="grid gap-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Kebijakan Privasi
        </h1>
        <p className="text-sm text-black/70">
          Versi ringkas — dibuat agar jelas dan mudah dipahami.
        </p>
      </header>

      <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold tracking-tight">
          Data yang kami kumpulkan
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-black/70">
          Saat ini, situs ini <b>tidak</b> mewajibkan login dan <b>tidak</b>{" "}
          menyimpan input pengguna (misalnya gaji). Semua perhitungan dilakukan
          di perangkat kamu (client-side).
        </p>

        <h2 className="mt-6 text-lg font-semibold tracking-tight">Cookies</h2>
        <p className="mt-2 text-sm leading-relaxed text-black/70">
          Untuk saat ini, kami tidak memasang cookie iklan atau pelacakan yang
          berlebihan. Jika ke depannya ada perubahan (misalnya AdSense), halaman
          ini akan diperbarui.
        </p>

        <h2 className="mt-6 text-lg font-semibold tracking-tight">Kontak</h2>
        <p className="mt-2 text-sm leading-relaxed text-black/70">
          Untuk masukan atau permintaan penghapusan data (jika suatu hari ada),
          kamu bisa menghubungi:
        </p>
        <p className="mt-2 text-sm font-medium">
          Email: <span className="text-black/70">kontak@contoh.com</span>
        </p>

        <p className="mt-6 text-xs text-black/60">
          Terakhir diperbarui: {new Date().toLocaleDateString("id-ID")}
        </p>
      </section>
    </div>
  );
}
