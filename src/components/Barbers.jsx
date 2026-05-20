import { MessageCircle } from "lucide-react";
import React from "react";
import { barbers } from "../data/barbers.js";

const BarberCard = React.memo(function BarberCard({ barber }) {
  return (
    <article className="gold-card premium-card-hover">
      <div className="p-4 pb-0">
        <div className="aspect-[4/5] overflow-hidden rounded-[1rem] border border-gold/20 bg-black">
          <img
            className="h-full w-full object-cover"
            src={barber.image}
            alt={barber.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className="flex min-h-64 flex-col p-7 pt-6">
        <h3 className="text-2xl font-black text-soft">{barber.name}</h3>
        <p className="mt-3 flex-1 leading-7 text-muted">{barber.description}</p>
        <a
          className="btn btn-primary mt-7 w-full"
          href={barber.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={18} />
          {barber.cta}
        </a>
      </div>
    </article>
  );
});

function Barbers() {
  return (
    <section id="barberos" className="section-padding section-bg bg-ink">
      <div className="container-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">EQUIPO</p>
          <h2 className="section-title">
            Nuestros <span className="text-gold">Barberos</span>
          </h2>
          <p className="section-copy">
            Elige tu barbero de confianza y reserva tu cita directamente por WhatsApp.
          </p>
          <div className="gold-divider" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {barbers.map((barber) => (
            <BarberCard key={barber.id} barber={barber} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Barbers);
