// Text that rolls up to a copy of itself when the parent (class "group/roll") is hovered.
export default function RollText({ children }: { children: string }) {
  return (
    <span className="relative inline-flex overflow-hidden leading-[1.25]">
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:-translate-y-full group-focus-visible/roll:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:-translate-y-full group-focus-visible/roll:-translate-y-full"
      >
        {children}
      </span>
    </span>
  );
}
