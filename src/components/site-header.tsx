import Link from "next/link";

const nav = [
  { href: "/", label: "Beranda" },
  { href: "/tools/kalkulator-gaji", label: "Kalkulator Gaji" },
  { href: "/about", label: "Tentang" },
  { href: "/privacy-policy", label: "Privasi" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Tools Online Gratis
        </Link>

        <nav className="hidden gap-5 text-sm text-black/70 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-black">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/tools/kalkulator-gaji"
          className="rounded-xl border border-black/10 bg-black px-3 py-2 text-sm text-white hover:bg-black/90"
        >
          Coba Tool
        </Link>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-3 md:hidden">
        <nav className="flex flex-wrap gap-3 text-xs text-black/70">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-black">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
