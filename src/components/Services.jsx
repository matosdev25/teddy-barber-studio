import { MessageCircle } from "lucide-react";
import React from "react";
import { services } from "../data/services.js";
import { createWhatsappLink } from "../utils/whatsapp.js";

const ServiceCard = React.memo(function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <a
      className="gold-card premium-card-hover flex min-h-60 flex-col p-7 text-center focus:outline-none focus:ring-2 focus:ring-gold/70 focus:ring-offset-2 focus:ring-offset-charcoal"
      href={createWhatsappLink(service.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Reservar ${service.title} por WhatsApp`}
    >
      <span className="icon-orb mx-auto">
        <Icon size={28} />
      </span>
      <h3 className="mt-7 text-xl font-black">{service.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-muted">{service.description}</p>
      <span className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-black text-gold">
        Reservar por WhatsApp
        <MessageCircle size={17} />
      </span>
    </a>
  );
});

function Services({ bookingLink }) {
  return (
    <section id="servicios" className="section-padding section-bg bg-charcoal">
      <div className="container-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">SERVICIOS</p>
          <h2 className="section-title">
            Servicios <span className="text-gold">Teddy Barber Studio</span>
          </h2>
          <p className="section-copy">
            También puedes reservar servicios individuales sin membresía.
          </p>
          <div className="gold-divider" />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="gold-card mt-12 flex flex-col gap-5 px-7 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <span className="icon-orb shrink-0">
              <MessageCircle size={28} />
            </span>
            <div>
              <p className="text-2xl font-black">¿Prefieres atención personalizada?</p>
              <p className="mt-2 text-muted">
                <span className="text-gold">Agenda directo por WhatsApp</span>
              </p>
            </div>
          </div>
          <a className="btn btn-primary shrink-0" href={bookingLink} target="_blank" rel="noreferrer">
            Reservar ahora
          </a>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Services);
