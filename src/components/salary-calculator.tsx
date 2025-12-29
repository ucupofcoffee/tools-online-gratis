"use client";

import { useMemo, useState } from "react";
import { formatRupiah, parseNumber } from "@/lib/rupiah";

type PresetKey = "503020" | "4015251010" | "custom";

type AllocationItem = {
  key: string;
  label: string;
  percent: number;
  amount: number;
};

const PRESETS: Record<
  Exclude<PresetKey, "custom">,
  { name: string; items: { key: string; label: string; percent: number }[] }
> = {
  "503020": {
    name: "50 / 30 / 20",
    items: [
      { key: "kebutuhan", label: "Kebutuhan", percent: 50 },
      { key: "gayaHidup", label: "Gaya Hidup", percent: 30 },
      { key: "tabunganInvestasi", label: "Tabungan/Investasi", percent: 20 },
    ],
  },
  "4015251010": {
    name: "40 / 15 / 25 / 10 / 10",
    items: [
      { key: "kebutuhan", label: "Kebutuhan", percent: 40 },
      { key: "tabungan", label: "Tabungan", percent: 15 },
      { key: "investasi", label: "Investasi", percent: 25 },
      { key: "hiburan", label: "Hiburan", percent: 10 },
      { key: "danaDarurat", label: "Dana Darurat", percent: 10 },
    ],
  },
};

function clampPercent(n: number) {
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(100, n));
}

export function SalaryCalculator() {
  const [salaryInput, setSalaryInput] = useState<string>("");
  const [preset, setPreset] = useState<PresetKey>("503020");

  // Custom rows (default: 4 kategori, total 100)
  const [custom, setCustom] = useState<
    { key: string; label: string; percent: number }[]
  >([
    { key: "kebutuhan", label: "Kebutuhan", percent: 40 },
    { key: "tabungan", label: "Tabungan", percent: 20 },
    { key: "investasi", label: "Investasi", percent: 25 },
    { key: "lainnya", label: "Lainnya", percent: 15 },
  ]);

  const [error, setError] = useState<string>("");
  const [result, setResult] = useState<AllocationItem[] | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const salary = useMemo(() => parseNumber(salaryInput), [salaryInput]);

  const activeItems = useMemo(() => {
    if (preset === "custom") return custom;
    return PRESETS[preset].items;
  }, [preset, custom]);

  const totalPercent = useMemo(
    () => activeItems.reduce((sum, it) => sum + (it.percent || 0), 0),
    [activeItems]
  );

  function validate(): string {
    if (!salary || salary <= 0) return "Masukkan gaji bulanan yang valid (lebih dari 0).";
    if (preset === "custom" && totalPercent !== 100) {
      return `Total persentase harus 100%. Saat ini: ${totalPercent}%.`;
    }
    // Cegah label kosong di custom
    if (preset === "custom") {
      const hasEmpty = custom.some((c) => !c.label.trim());
      if (hasEmpty) return "Nama kategori di mode Custom tidak boleh kosong.";
    }
    return "";
  }

  function compute() {
    setCopied(false);
    const msg = validate();
    if (msg) {
      setError(msg);
      setResult(null);
      return;
    }
    setError("");

    const allocations: AllocationItem[] = activeItems.map((it) => {
      const pct = clampPercent(it.percent);
      const amount = Math.round((salary * pct) / 100);
      return { key: it.key, label: it.label, percent: pct, amount };
    });

    setResult(allocations);
  }

  function reset() {
    setSalaryInput("");
    setPreset("503020");
    setCustom([
      { key: "kebutuhan", label: "Kebutuhan", percent: 40 },
      { key: "tabungan", label: "Tabungan", percent: 20 },
      { key: "investasi", label: "Investasi", percent: 25 },
      { key: "lainnya", label: "Lainnya", percent: 15 },
    ]);
    setError("");
    setResult(null);
    setCopied(false);
  }

  async function copyResult() {
    if (!result || result.length === 0) return;

    const lines: string[] = [];
    lines.push("Hasil Alokasi Gaji (Estimasi)");
    lines.push(`Gaji: ${formatRupiah(salary)}`);
    lines.push("");
    result.forEach((r) => {
      lines.push(`${r.label} (${r.percent}%): ${formatRupiah(r.amount)}`);
    });
    lines.push("");
    lines.push("Catatan: hasil perhitungan ini adalah estimasi.");

    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setError("Gagal menyalin. Browser kamu mungkin memblokir akses clipboard.");
    }
  }

  function updateCustomLabel(idx: number, label: string) {
    setCustom((prev) =>
      prev.map((it, i) => (i === idx ? { ...it, label } : it))
    );
  }

  function updateCustomPercent(idx: number, percentRaw: string) {
    const n = clampPercent(Number(percentRaw));
    setCustom((prev) =>
      prev.map((it, i) => (i === idx ? { ...it, percent: n } : it))
    );
  }

  function addCustomRow() {
    setCustom((prev) => [
      ...prev,
      {
        key: `k_${crypto.randomUUID().slice(0, 8)}`,
        label: "Kategori Baru",
        percent: 0,
      },
    ]);
  }

  function removeCustomRow(idx: number) {
    setCustom((prev) => prev.filter((_, i) => i !== idx));
  }

  return (
    <div className="grid gap-6">
      <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
        <div className="grid gap-4">
          <div>
            <label className="text-sm font-medium">Gaji bulanan (Rupiah)</label>
            <input
              inputMode="numeric"
              value={salaryInput}
              onChange={(e) => setSalaryInput(e.target.value)}
              placeholder="Contoh: 7000000"
              className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-base outline-none focus:border-black/30"
            />
            <p className="mt-2 text-sm text-black/60">
              Preview: <span className="font-medium">{formatRupiah(salary)}</span>
            </p>
          </div>

          <div className="grid gap-2">
            <p className="text-sm font-medium">Pilih pembagian</p>

            <div className="grid gap-2 md:grid-cols-3">
              <button
                type="button"
                onClick={() => setPreset("503020")}
                className={[
                  "rounded-xl border px-4 py-3 text-left",
                  preset === "503020"
                    ? "border-black/20 bg-black text-white"
                    : "border-black/10 bg-white hover:bg-black/5",
                ].join(" ")}
              >
                <p className="text-sm font-semibold">50 / 30 / 20</p>
                <p className="text-xs opacity-80">
                  Kebutuhan • Gaya Hidup • Tabungan/Investasi
                </p>
              </button>

              <button
                type="button"
                onClick={() => setPreset("4015251010")}
                className={[
                  "rounded-xl border px-4 py-3 text-left",
                  preset === "4015251010"
                    ? "border-black/20 bg-black text-white"
                    : "border-black/10 bg-white hover:bg-black/5",
                ].join(" ")}
              >
                <p className="text-sm font-semibold">40 / 15 / 25 / 10 / 10</p>
                <p className="text-xs opacity-80">
                  Kebutuhan • Tabungan • Investasi • Hiburan • Dana Darurat
                </p>
              </button>

              <button
                type="button"
                onClick={() => setPreset("custom")}
                className={[
                  "rounded-xl border px-4 py-3 text-left",
                  preset === "custom"
                    ? "border-black/20 bg-black text-white"
                    : "border-black/10 bg-white hover:bg-black/5",
                ].join(" ")}
              >
                <p className="text-sm font-semibold">Custom</p>
                <p className="text-xs opacity-80">Atur kategori & persentase sendiri</p>
              </button>
            </div>
          </div>

          {preset === "custom" && (
            <div className="rounded-2xl border border-black/10 bg-black/2 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">Mode Custom</p>
                  <p className="text-xs text-black/60">
                    Total persentase harus 100%.
                  </p>
                </div>
                <div className="text-sm">
                  Total:{" "}
                  <span
                    className={[
                      "font-semibold",
                      totalPercent === 100 ? "text-black" : "text-red-600",
                    ].join(" ")}
                  >
                    {totalPercent}%
                  </span>
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                {custom.map((row, idx) => (
                  <div
                    key={row.key}
                    className="grid gap-2 rounded-xl border border-black/10 bg-white p-3 md:grid-cols-[1fr_140px_40px]"
                  >
                    <div>
                      <label className="text-xs font-medium text-black/70">
                        Nama kategori
                      </label>
                      <input
                        value={row.label}
                        onChange={(e) => updateCustomLabel(idx, e.target.value)}
                        className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:border-black/30"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-black/70">
                        Persen (%)
                      </label>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        value={row.percent}
                        onChange={(e) => updateCustomPercent(idx, e.target.value)}
                        className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:border-black/30"
                      />
                    </div>

                    <div className="flex items-end justify-end">
                      <button
                        type="button"
                        onClick={() => removeCustomRow(idx)}
                        className="rounded-lg border border-black/10 px-2 py-2 text-sm hover:bg-black/5"
                        aria-label="Hapus baris"
                        title="Hapus"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addCustomRow}
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium hover:bg-black/5"
                >
                  + Tambah kategori
                </button>
              </div>
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-3 md:flex-row">
            <button
              type="button"
              onClick={compute}
              className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90"
            >
              Hitung
            </button>
            <button
              type="button"
              onClick={reset}
              className="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/5"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={copyResult}
              disabled={!result}
              className={[
                "rounded-xl border px-5 py-3 text-sm font-semibold",
                result
                  ? "border-black/10 bg-white hover:bg-black/5"
                  : "cursor-not-allowed border-black/5 bg-black/3 text-black/40",
              ].join(" ")}
            >
              {copied ? "Tersalin ✓" : "Copy hasil"}
            </button>
          </div>

          <p className="text-xs text-black/60">
            Disclaimer: hasil perhitungan ini adalah <b>estimasi</b> dan bisa berbeda
            tergantung kondisi masing-masing.
          </p>
        </div>
      </div>

      {result && (
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold tracking-tight">Hasil Alokasi</h2>
          <p className="mt-1 text-sm text-black/60">
            Berdasarkan gaji <span className="font-medium">{formatRupiah(salary)}</span>
          </p>

          <div className="mt-4 grid gap-3">
            {result.map((r) => (
              <div
                key={r.key}
                className="flex items-center justify-between rounded-xl border border-black/10 bg-white px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold">{r.label}</p>
                  <p className="text-xs text-black/60">{r.percent}%</p>
                </div>
                <p className="text-sm font-semibold">{formatRupiah(r.amount)}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-black/60">
            Tips: kamu bisa pakai mode Custom untuk menyesuaikan kategori sesuai gaya
            hidup (misalnya cicilan, orang tua, sedekah, dll).
          </p>
        </div>
      )}
    </div>
  );
}
