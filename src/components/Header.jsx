import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { LOGO_SRC } from "../data/brand.js";

const navLinks = [
  { label: "Inicio", href: "#barberos" },
  { label: "Barberos", href: "#barberos" },
  { label: "Membresías", href: "#membresias" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
];

function Header({ bookingLink }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4">
      <div className="container-shell">
        <div className="flex h-20 items-center justify-between gap-4 rounded-[1.25rem] border border-gold/25 bg-ink/88 px-4 shadow-card backdrop-blur-md md:px-6">
          <a href="#barberos" className="flex shrink-0 items-center overflow-visible" aria-label="Teddy Barber Studio">
            <img
              className="block h-16 w-auto max-w-[150px] object-contain md:h-[4.25rem] md:max-w-[180px] lg:h-[4.5rem]"
              src={LOGO_SRC}
              alt="Teddy Barber Studio"
            />
          </a>

          <nav className="hidden items-center gap-5 xl:gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="relative text-sm font-semibold text-soft/85 transition after:absolute after:-bottom-3 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:text-gold hover:after:w-full"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a className="btn btn-primary" href={bookingLink} target="_blank" rel="noreferrer">
              Agendar por WhatsApp
            </a>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-soft lg:hidden"
            type="button"
            aria-label="Abrir menú"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mx-3 mt-2 rounded-3xl border border-gold/20 bg-ink/95 shadow-card backdrop-blur-md lg:hidden">
          <div className="container-shell flex flex-col gap-2 py-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="rounded-2xl px-3 py-3 text-sm font-bold text-muted hover:bg-white/5 hover:text-gold"
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="btn btn-primary mt-2"
              href={bookingLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Agendar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default React.memo(Header);
