import Image from "next/image";

type TeamMemberAvatarProps = {
  initials: string;
  name: string;
  photoSrc?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-16 w-16 text-lg",
  md: "h-24 w-24 text-xl",
  lg: "h-44 w-44 text-2xl",
} as const;

export function TeamMemberAvatar({
  initials,
  name,
  photoSrc,
  size = "md",
}: TeamMemberAvatarProps) {
  if (photoSrc) {
    return (
      <Image
        src={photoSrc}
        alt={`${name} portrait`}
        width={176}
        height={176}
        className={`shrink-0 rounded-md object-cover object-top ${sizeClasses[size]}`}
        sizes="(max-width: 768px) 176px, 176px"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${name} avatar`}
      className={`flex shrink-0 items-center justify-center rounded-md bg-xone-accent-muted font-semibold text-xone-violet ${sizeClasses[size]}`}
    >
      {initials}
    </div>
  );
}
