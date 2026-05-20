import { ArrowRight, Crown, MapPin } from "lucide-react";
import React from "react";
import { featuredMembershipBenefits, heroStats } from "../data/hero.js";
import { createWhatsappLink } from "../utils/whatsapp.js";

const FEATURED_MEMBERSHIP_LINK = createWhatsappLink(
  "Hola, quiero información sobre la membresía Cliente Fiel VIP de Teddy Barber Studio.",
);

const HeroStat = React.memo(function HeroStat({ stat }) {
  const Icon = stat.icon;

  return (
    <div className="flex items-center gap-4">
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/45 bg-black/35 text-gold shadow-glow">
        <Icon size={20} />
      </span>
      <p className="text-base font-black text-soft">
        {stat.value}
        <span className="block text-sm font-semibold text-muted">{stat.label}</span>
      </p>
    </div>
  );
});

const FeaturedBenefit = React.memo(function FeaturedBenefit({ benefit }) {
  const Icon = benefit.icon;

  return (
    <div className="flex gap-3">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
        <Icon size={17} />
      </span>
      <p className="font-semibold leading-7 text-soft">{benefit.text}</p>
    </div>
  );
});

function Hero({ bookingLink }) {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden bg-ink pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <img
          className="h-full w-full object-cover opacity-36"
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1800&q=78"
          alt="Interior premium de barbería"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.9)_36%,rgba(5,5,5,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(245,160,0,0.26),transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-shell grid min-h-[calc(100vh-8rem)] items-center gap-12 py-14 lg:grid-cols-[1.06fr_0.94fr]">
        <div>
          <p className="eyebrow">BARBERÍA PREMIUM EN MARGARITA</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] text-soft drop-shadow-2xl md:text-7xl xl:text-8xl">
            Cortes, barba y <span className="text-gold">membresías</span> para
            verte siempre impecable
          </h1>
          <div className="mt-8 h-px w-72 bg-gradient-to-r from-gold via-champagne to-transparent shadow-glow" />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
            Vive la experiencia Teddy Barber Studio: servicios premium, atención
            personalizada y planes mensuales para clientes frecuentes.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="btn btn-primary" href={bookingLink} target="_blank" rel="noreferrer">
              Agendar por WhatsApp <ArrowRight size={18} />
            </a>
            <a className="btn btn-secondary" href="#membresias">
              Ver membresías
            </a>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <HeroStat key={stat.id} stat={stat} />
            ))}
          </div>
        </div>

        <div className="gold-card relative mx-auto w-full max-w-md p-6 md:p-8 lg:translate-y-8">
          <div className="absolute -top-8 left-1/2 z-10 -translate-x-1/2">
            <span className="icon-orb h-20 w-20">
              <Crown size={34} />
            </span>
          </div>
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gold/15 blur-2xl" />
          <div className="relative pt-8">
            <div className="flex justify-center">
              <p className="rounded-full border border-gold/40 px-5 py-2 text-[0.65rem] font-black uppercase tracking-[0.22em] text-champagne">
                Membresía destacada
              </p>
            </div>
            <h2 className="mt-7 text-center text-4xl font-black text-champagne">Cliente Fiel VIP</h2>
            <div className="mt-4 flex items-end justify-center gap-2">
              <span className="text-6xl font-black text-soft drop-shadow-[0_0_18px_rgba(245,160,0,0.45)]">$60</span>
              <span className="pb-2 text-muted">/mes</span>
            </div>
            <div className="mt-8 space-y-4">
              {featuredMembershipBenefits.map((benefit) => (
                <FeaturedBenefit benefit={benefit} key={benefit.id} />
              ))}
            </div>
            <a className="btn btn-primary mt-9 w-full" href={FEATURED_MEMBERSHIP_LINK} target="_blank" rel="noreferrer">
              Quiero esta membresía
            </a>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-muted">
              <MapPin size={17} className="text-gold" />
              Margarita, Plaza El Sol, Panamá
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Hero);
