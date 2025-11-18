import ProfileCard from "@/components/ui/cards/ProfileCard";
import { teamMembers } from "@/lib/data/about";

export default function TeamGrid() {
  return (
    <section className="border-y border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2e8230]">
            Meet the team
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            The humans connecting technology and impact.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600">
            We champion flexibility—remote collaboration with periodic on-ground
            immersion across Luzon, Visayas, and Mindanao—to stay close to the
            communities we serve.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <ProfileCard
              key={member.name}
              name={member.name}
              role={member.role}
              photo={member.photo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
