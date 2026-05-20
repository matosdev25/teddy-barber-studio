import { Crown } from "lucide-react";
import React from "react";

function FinalCta({ bookingLink }) {
  return (
    <section className="bg-charcoal pb-20 md:pb-28">
      <div className="container-shell">
        <div className="gold-card relative overflow-hidden px-7 py-12 md:px-12">
          <img
            className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-35 lg:block"
            src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=78"
            alt="Cliente recibiendo un corte premium en barbería"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/86 to-black/35" />
          <div className="relative max-w-3xl">
            <span className="icon-orb">
              <Crown size={29} />
            </span>
            <h2 className="mt-7 text-4xl font-black leading-tight md:text-6xl">
              ¿Listo para tu <span className="text-gold">próxima cita</span>?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Agenda por WhatsApp o consulta la membresía ideal para ti.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn btn-primary" href={bookingLink} target="_blank" rel="noreferrer">
                Agendar por WhatsApp
              </a>
              <a className="btn btn-secondary" href="#membresias">
                Ver membresías
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(FinalCta);
