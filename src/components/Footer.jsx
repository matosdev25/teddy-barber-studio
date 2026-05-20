import { Instagram, MapPin, Phone } from "lucide-react";
import React from "react";
import { LOGO_SRC } from "../data/brand.js";
import { INFO_WHATSAPP_LINK } from "../data/site.js";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,#111,#050505)] py-12">
      <div className="container-shell">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="md:border-r md:border-white/10 md:pr-10">
            <img
              className="h-20 w-auto max-w-[12rem] object-contain sm:h-24 sm:max-w-[14rem]"
              src={LOGO_SRC}
              alt="Teddy Barber Studio"
            />
            <p className="mt-4 max-w-md leading-7 text-muted">
              Barbería premium en Margarita con servicios y membresías exclusivas.
            </p>
            <a
              className="mt-5 inline-flex items-center gap-2 font-bold text-soft hover:text-gold"
              href="https://www.instagram.com/teddybarberstudio"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={18} />
              @teddybarberstudio
            </a>
          </div>

          <div className="md:border-r md:border-white/10 md:pr-10">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-gold">
              Contacto
            </h3>
            <div className="mt-5 space-y-4 text-muted">
              <a
                className="flex items-center gap-3 hover:text-gold"
                href={INFO_WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                <Phone size={18} />
                +507 6847-5071
              </a>
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-gold" />
                Margarita, Plaza El Sol, Panamá
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-gold">
              Horario
            </h3>
            <p className="mt-5 leading-7 text-muted">
              Mar – Vie: 9:00 AM – 7:30 PM
              <br />
              Sáb – Dom: 9:00 AM – 6:00 PM
              <br />
              Lunes: <span className="font-black text-red-500">Cerrado</span>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-7 text-sm font-semibold text-muted">
          Copyright 2026 Teddy Barber Studio. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
