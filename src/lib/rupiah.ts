export function formatRupiah(value: number): string {
  if (!Number.isFinite(value)) return "Rp0";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function parseNumber(input: string): number {
  // Ambil angka saja (untuk input yang mungkin ada titik/koma/spasi)
  const cleaned = input.replace(/[^\d]/g, "");
  if (!cleaned) return 0;
  return Number(cleaned);
}
