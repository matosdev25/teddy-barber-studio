import { Clock, MapPin, Navigation } from "lucide-react";
import React from "react";

function Location({ bookingLink }) {
  return (
    <section id="ubicacion" className="section-padding bg-charcoal">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">NUESTRA CASA</p>
          <h2 className="section-title">
            Visítanos en <span className="text-gold">Margarita</span>
          </h2>
          <p className="section-copy">
            Reserva tu cita o acércate a vivir la experiencia Teddy.
          </p>
          <div className="gold-divider" />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="gold-card p-7 md:p-8">
            <span className="icon-orb">
              <MapPin size={23} />
            </span>
            <h3 className="mt-6 text-2xl font-black">Margarita, Plaza El Sol, Panamá</h3>
            <p className="mt-4 leading-7 text-muted">
              Estamos en una zona de fácil acceso para que tu visita sea cómoda,
              puntual y con la experiencia premium que mereces.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                className="btn btn-primary"
                href="https://www.google.com/maps/search/?api=1&query=Margarita%20Plaza%20El%20Sol%20Panama"
                target="_blank"
                rel="noreferrer"
              >
                <Navigation size={18} />
                Ver ubicación
              </a>
              <a className="btn btn-secondary" href={bookingLink} target="_blank" rel="noreferrer">
                Reservar por WhatsApp
              </a>
            </div>
          </article>

          <article className="gold-card p-7 md:p-8">
            <span className="icon-orb">
              <Clock size={23} />
            </span>
            <h3 className="mt-6 text-2xl font-black">Horario</h3>
            <div className="mt-7 divide-y divide-white/10">
              <div className="flex items-center justify-between gap-5 py-4">
                <span className="font-semibold text-muted">Lunes a Viernes</span>
                <span className="text-right font-black">9:00 AM – 7:30 PM</span>
              </div>
              <div className="flex items-center justify-between gap-5 py-4">
                <span className="font-semibold text-muted">Sábado y Domingo</span>
                <span className="text-right font-black">9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Location);
