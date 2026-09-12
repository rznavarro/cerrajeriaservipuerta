type IconProps = { className?: string };

export function DoorIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="14" y="6" width="36" height="52" rx="1" />
      <line x1="14" y1="58" x2="50" y2="58" strokeWidth="2" />
      <circle cx="40" cy="32" r="2.2" fill="currentColor" stroke="none" />
      <line x1="14" y1="6" x2="8" y2="10" />
      <line x1="8" y1="10" x2="8" y2="56" />
      <line x1="8" y1="56" x2="14" y2="58" />
    </svg>
  );
}

export function KeyIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="22" cy="22" r="12" />
      <circle cx="22" cy="22" r="4" />
      <line x1="30.5" y1="30.5" x2="54" y2="54" strokeWidth="2" />
      <line x1="46" y1="46" x2="52" y2="40" />
      <line x1="50" y1="50" x2="56" y2="44" />
    </svg>
  );
}

export function LockDigitalIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="12" y="24" width="40" height="30" rx="3" />
      <path d="M20 24v-6a12 12 0 0 1 24 0v6" />
      <circle cx="32" cy="37" r="2.4" fill="currentColor" stroke="none" />
      <line x1="32" y1="39.5" x2="32" y2="45" strokeWidth="2" />
      <rect x="40" y="30" width="7" height="4" rx="1" strokeWidth="1.2" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M32 6 12 14v16c0 14 8.5 24.6 20 28 11.5-3.4 20-14 20-28V14L32 6Z" />
      <path d="M22 32l7 7 13-15" strokeWidth="2" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="24" />
      <path d="M32 18v14l10 6" strokeWidth="2" />
    </svg>
  );
}

export function ReceiptIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M16 6h32v52l-6-4-6 4-6-4-6 4-8-4V6Z" />
      <line x1="22" y1="18" x2="42" y2="18" />
      <line x1="22" y1="26" x2="42" y2="26" />
      <line x1="22" y1="34" x2="34" y2="34" />
    </svg>
  );
}

export function FingerprintIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M32 12a20 20 0 0 1 20 20v6" />
      <path d="M12 38v-6a20 20 0 0 1 8-16" />
      <path d="M32 20a12 12 0 0 1 12 12v8a2 2 0 0 0 4 0v-8" />
      <path d="M20 32a12 12 0 0 1 6-10.4" />
      <path d="M24 42v-10a8 8 0 0 1 16 0v6" />
      <path d="M28 46v-14a4 4 0 0 1 8 0" />
    </svg>
  );
}
