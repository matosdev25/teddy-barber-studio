import {
  BadgeDollarSign,
  Gift,
  Handshake,
  PackageCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

export const benefits = [
  {
    id: "ahorro-mensual",
    title: "Ahorro mensual",
    description: "Accede a más valor que pagando servicios por separado.",
    icon: BadgeDollarSign,
  },
  {
    id: "servicios-premium",
    title: "Servicios premium",
    description: "Elige combos y tratamientos especiales según tu plan.",
    icon: Sparkles,
  },
  {
    id: "descuentos-productos",
    title: "Descuentos en productos",
    description: "Hasta 15% de descuento en productos de barbería.",
    icon: PackageCheck,
  },
  {
    id: "pase-invitado",
    title: "Pase de invitado",
    description: "Lleva a un amigo 1 vez al mes con 50% de descuento.",
    icon: Handshake,
  },
  {
    id: "sorteos-regalos",
    title: "Sorteos y regalos",
    description: "Participas en sorteos exclusivos para miembros.",
    icon: Trophy,
  },
  {
    id: "snacks-bebidas",
    title: "Snacks y bebidas",
    description: "Disfruta una experiencia más cómoda y premium durante tu visita.",
    icon: Gift,
  },
];
