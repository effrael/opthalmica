export const contacto = {
  telefono: "+51 913 061 138",
  telefonoHref: "tel:+51913061138",
  whatsappNumero: "51913061138",
  whatsappCita:
    "https://wa.me/51913061138?text=Hola%2C%20quisiera%20reservar%20una%20cita%20online.",
  whatsappInfo:
    "https://wa.me/51913061138?text=Hola%2C%20quisiera%20recibir%20informaci%C3%B3n.",
  direccion: ["Morona 373, Iquitos,", "Perú, 11006"],
  sede: "Iquitos",
  mapa: {
    /** Lo que se busca en Google Maps (dirección o nombre del lugar) */
    lugar: "Morona 373, Iquitos 16001, Perú",
    /** Acercamiento: 1 = mundo, 15 = calles, 20 = edificios */
    zoom: 18,
  },
  horario: ["Lun – Sáb: 9:00 am a 1:00 pm /", "3:00 pm a 8:00 pm"],
};

export const navegacion = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios", conSubmenu: true },
  { label: "Contacto", href: "/contacto" },
];

// TODO: completar los enlaces de Instagram y YouTube
export const redes = [
  { nombre: "Facebook", href: "https://www.facebook.com/opthalmicavision", icono: "facebook" },
  { nombre: "Instagram", href: "#", icono: "instagram" },
  { nombre: "YouTube", href: "#", icono: "youtube" },
] as const;
