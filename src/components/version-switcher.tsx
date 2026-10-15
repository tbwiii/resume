// TEMPORARY: remove this component (and its use in App.tsx) once a design is chosen.
export type VersionKey = "refined" | "spec" | "editorial" | "timeline";

export const versions: { key: VersionKey; label: string; note: string }[] = [
  { key: "refined", label: "A", note: "Original, refined" },
  { key: "spec", label: "B", note: "Spec sheet" },
  { key: "editorial", label: "C", note: "Editorial" },
  { key: "timeline", label: "D", note: "Timeline" },
];

export default function VersionSwitcher({
  value,
  onChange,
}: {
  value: VersionKey;
  onChange: (key: VersionKey) => void;
}) {
  return (
    <div className="print:hidden sticky top-0 z-50 flex flex-wrap items-center gap-2 bg-black text-white px-4 py-2 text-sm font-sans">
      <span className="opacity-60 mr-2">Design versions (temporary)</span>
      {versions.map((v) => (
        <button
          key={v.key}
          type="button"
          onClick={() => onChange(v.key)}
          aria-pressed={value === v.key}
          className={`rounded px-3 py-1 border ${
            value === v.key
              ? "bg-white text-black border-white"
              : "border-white/40 hover:border-white"
          }`}
        >
          {v.label} · {v.note}
        </button>
      ))}
    </div>
  );
}
