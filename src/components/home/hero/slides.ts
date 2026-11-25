export type TemaSlide = "azul" | "claro" | "verde";

export interface Slide {
  etiqueta: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  tema: TemaSlide;
  cta: { texto: string; href: string };
}

export const slides: Slide[] = [
  {
    etiqueta: "Tecnología y experiencia",
    titulo: "Precisión para cuidar tus ojos",
    descripcion:
      "Contamos con atención oftalmológica especializada y procedimientos orientados a lograr los mejores resultados.",
    imagen: "/images/imagen1.png",
    tema: "azul",
    cta: { texto: "Reserva tu cita", href: "/contacto" },
  },
  {
    etiqueta: "Cuidado visual integral",
    titulo: "Tu visión merece el mejor cuidado",
    descripcion:
      "Evaluación especializada y atención personalizada para proteger tu salud visual en cada etapa de tu vida.",
    imagen: "/images/imagen2.png",
    tema: "claro",
    cta: { texto: "Reserva tu cita", href: "/contacto" },
  },
  {
    etiqueta: "Atención que inspira confianza",
    titulo: "Tu bienestar es nuestra prioridad",
    descripcion:
      "Acompañamos cada consulta con cercanía, claridad y el compromiso que tu salud visual necesita.",
    imagen: "/images/imagen3.png",
    tema: "verde",
    cta: { texto: "Reserva tu cita", href: "/contacto" },
  },
];
