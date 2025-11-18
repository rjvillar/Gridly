import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProfileCardProps {
  name: string;
  role: string;
  photo: string;
  className?: string;
}

export default function ProfileCard({
  name,
  role,
  photo,
  className,
}: ProfileCardProps) {
  return (
    <article
      className={cn(
        "rounded-3xl border border-slate-100 bg-slate-50/80 p-4 text-center shadow-[0_18px_35px_rgba(15,35,25,0.08)]",
        className
      )}
    >
      <div className="mx-auto h-40 w-40 overflow-hidden rounded-2xl border border-white">
        <Image
          src={photo}
          alt={name}
          width={220}
          height={220}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{name}</h3>
      <p className="text-sm text-slate-600">{role}</p>
    </article>
  );
}
