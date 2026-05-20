import { Check, Crown, ShieldCheck } from "lucide-react";
import React from "react";
import { memberships } from "../data/memberships.js";
import { createWhatsappLink } from "../utils/whatsapp.js";

const MembershipBenefit = React.memo(function MembershipBenefit({ benefit }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-soft">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/45 bg-gold/10 text-gold">
        <Check size={16} />
      </span>
      <span>{benefit}</span>
    </li>
  );
});

const MembershipCard = React.memo(function MembershipCard({ membership }) {
  const link = createWhatsappLink(
    `Hola, quiero información sobre la membresía ${membership.name} de Teddy Barber Studio.`,
  );
  const price = membership.price.replace("/mes", "");

  return (
    <article
      className={`gold-card premium-card-hover relative flex min-h-[475px] flex-col p-5 pt-14 ${
        membership.featured
          ? "z-10 border-gold/80 bg-[linear-gradient(180deg,rgba(245,160,0,0.18),rgba(12,12,12,0.98))] shadow-glow xl:-translate-y-4"
          : ""
      }`}
    >
      <span className="icon-orb absolute -top-9 left-1/2 -translate-x-1/2">
        <Crown size={26} />
      </span>
      {membership.badge && (
        <span className="mx-auto mb-4 rounded-full border border-gold/55 bg-black/60 px-5 py-2 text-xs font-black text-gold">
          {membership.badge}
        </span>
      )}
      <h3 className="text-center text-2xl font-black text-champagne">{membership.name}</h3>
      <p className="mt-2 min-h-12 text-center text-sm leading-6 text-muted">{membership.description}</p>
      <p className="mt-6 text-center text-5xl font-black text-soft drop-shadow-[0_0_14px_rgba(245,160,0,0.4)]">
        {price}
        <span className="text-xl text-gold">/mes</span>
      </p>
      <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent shadow-glow" />
      <ul className="mt-7 flex-1 space-y-4">
        {membership.benefits.map((benefit) => (
          <MembershipBenefit benefit={benefit} key={`${membership.id}-${benefit}`} />
        ))}
      </ul>
      <a className="btn btn-primary mt-8 w-full" href={link} target="_blank" rel="noreferrer">
        Quiero esta membresía
      </a>
    </article>
  );
});

function Memberships() {
  return (
    <section id="membresias" className="section-padding section-bg bg-charcoal">
      <div className="container-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-4 grid h-10 w-10 place-items-center text-gold">
            <ShieldCheck size={28} />
          </span>
          <p className="eyebrow">MEMBRESÍAS PREMIUM</p>
          <h2 className="section-title">
            Elige tu <span className="text-gold">membresía</span> Teddy
          </h2>
          <p className="section-copy">
            Planes mensuales diseñados para quienes cuidan su imagen con
            beneficios reales en cada visita.
          </p>
          <div className="gold-divider" />
        </div>

        <div className="mt-24 grid gap-x-5 gap-y-16 md:grid-cols-2 xl:grid-cols-5">
          {memberships.map((membership) => (
            <MembershipCard membership={membership} key={membership.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Memberships);
