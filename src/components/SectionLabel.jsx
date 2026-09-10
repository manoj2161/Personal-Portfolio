function SectionLabel({ number, children }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.16em]">
      <span className="border-2 border-black px-2 py-1">{number}</span>
      <span>{children}</span>
    </div>
  );
}

export default SectionLabel;
