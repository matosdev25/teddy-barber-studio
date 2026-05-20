import {
  Crown,
  MapPin,
} from "lucide-react";
import React from "react";
import { benefits } from "../data/benefits.js";

const BenefitCard = React.memo(function BenefitCard({ benefit }) {
  const Icon = benefit.icon;

  return (
    <article className="gold-card premium-card-hover flex min-h-44 items-center gap-5 p-6">
      <span className="icon-orb shrink-0">
        <Icon size={28} />
      </span>
      <div>
        <h3 className="text-2xl font-black">{benefit.title}</h3>
        <p className="mt-3 leading-7 text-muted">{benefit.description}</p>
      </div>
    </article>
  );
});

function Benefits() {
  return (
    <section className="section-padding section-bg bg-ink">
      <div className="container-shell relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">BENEFICIOS EXCLUSIVOS</p>
          <h2 className="section-title">
            ¿Por qué elegir una <span className="text-gold">membresía</span>?
          </h2>
          <p className="section-copy">
            Convierte cada visita en más ahorro, más beneficios y una mejor
            experiencia Teddy.
          </p>
          <div className="gold-divider" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <BenefitCard benefit={benefit} key={benefit.id} />
          ))}
        </div>

        <div className="gold-card mt-12 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_1fr_1fr_auto] md:items-center">
            <div className="flex items-center gap-4 border-white/10 md:border-r">
              <span className="icon-orb h-14 w-14">$</span>
              <p className="font-black">
                <span className="block text-xs uppercase tracking-[0.28em] text-gold">Desde</span>
                <span className="text-3xl text-soft">$40</span>
                <span className="text-gold">/mes</span>
              </p>
            </div>
            <div className="flex items-center gap-4 border-white/10 md:border-r">
              <span className="icon-orb h-14 w-14"><Crown size={23} /></span>
              <p className="text-lg font-black">
                Planes <span className="text-gold">individual, VIP y familiar</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="icon-orb h-14 w-14"><MapPin size={23} /></span>
              <p className="text-lg font-black">
                Atención premium en <span className="text-gold">Margarita</span>
              </p>
            </div>
            <a className="btn btn-primary shrink-0" href="#membresias">
              Ver planes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Benefits);
