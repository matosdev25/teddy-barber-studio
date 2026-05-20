import { createWhatsappLink } from "../utils/whatsapp.js";

export const barbers = [
  {
    id: "alberto",
    name: "Alberto Barber",
    description: "Especialista en cortes modernos, degradados y estilo masculino premium.",
    image: "/assets/barbers/alberto-barber.jpeg",
    alt: "Alberto Barber en Teddy Barber Studio",
    cta: "Reservar con Alberto",
    whatsappLink: createWhatsappLink("Hola, me gustaría reservar con Alberto Barber."),
  },
  {
    id: "fred",
    name: "Fred Barber",
    description: "Precisión, detalle y acabado profesional en cada corte.",
    image: "/assets/barbers/fred-barber.jpeg",
    alt: "Fred Barber en Teddy Barber Studio",
    cta: "Reservar con Fred",
    whatsappLink: createWhatsappLink("Hola, me gustaría reservar con Fred Barber."),
  },
  {
    id: "daniel",
    name: "Daniel Barber",
    description: "Cortes, barba y asesoría de imagen para un look impecable.",
    image: "/assets/barbers/daniel-barber.jpeg",
    alt: "Daniel Barber en Teddy Barber Studio",
    cta: "Reservar con Daniel",
    whatsappLink: createWhatsappLink("Hola, me gustaría reservar con Daniel Barber."),
  },
];
