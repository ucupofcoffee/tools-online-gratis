import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto grid max-w-5xl gap-6 px-4 py-10 md:grid-cols-2">
        <div>
          <p className="font-semibold">Tools Online Gratis</p>
          <p className="mt-2 text-sm text-black/70">
            Tools sederhana yang fokus membantu. Tanpa login. Tanpa simpan data.
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <div className="space-y-2">
            <p className="font-medium">Navigasi</p>
            <div className="flex flex-col gap-2 text-black/70">
              <Link className="hover:text-black" href="/">
                Beranda
              </Link>
              <Link className="hover:text-black" href="/tools/kalkulator-gaji">
                Kalkulator Gaji
              </Link>
              <Link className="hover:text-black" href="/about">
                Tentang
              </Link>
              <Link className="hover:text-black" href="/privacy-policy">
                Privasi
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-medium">Catatan</p>
            <p className="text-black/70">
              Hasil kalkulator bersifat estimasi dan tidak menggantikan nasihat
              keuangan profesional.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-10 text-xs text-black/60">
        © {new Date().getFullYear()} Tools Online Gratis
      </div>
    </footer>
  );
}
