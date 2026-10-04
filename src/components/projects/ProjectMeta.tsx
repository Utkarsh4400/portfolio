export default function ProjectMeta({
  role,
  year,
  stack,
}: {
  role: string;
  year: string;
  stack: string[];
}) {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <div className="flex flex-wrap gap-x-8 gap-y-2 text-[var(--muted)]">
        <span>{role}</span>
        <span>{year}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--fg)]/80"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
