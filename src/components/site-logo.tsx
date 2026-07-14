export function SiteLogo({ className = "size-9" }: { className?: string }) {
  return (
    <img
      src="/logo.svg"
      alt="Leisure Lifestyle Villages"
      width={36}
      height={36}
      className={className}
      decoding="async"
    />
  );
}
