export interface Servicio {
  nombre: string;
  slug: string;
  href: string;
  imagen: string;
  /** Punto de enfoque de la imagen (CSS object-position) */
  enfoque: string;
  /** Texto bajo el título en la página del servicio */
  descripcion: string;
  /** Título de la sección "Cuidado integral" */
  tituloCuidado: string;
  /** Puntos con check de la sección "Cuidado integral" */
  puntos: string[];
}

const lista: Omit<Servicio, "href">[] = [
  {
    nombre: "Consulta oftalmológica integral",
    slug: "consulta-oftalmologica-integral",
    imagen: "/images/services/consulta_integral.png",
    enfoque: "center",
    descripcion: "Evaluación completa de la salud visual para niños, adultos y adultos mayores.",
    tituloCuidado: "Una evaluación completa para cuidar tu visión",
    puntos: [
      "Revisamos tu agudeza visual y el estado general de tus ojos.",
      "Identificamos señales tempranas de enfermedades oculares.",
      "Te explicamos los resultados y los siguientes pasos con claridad.",
    ],
  },
  {
    nombre: "Catarata",
    slug: "catarata",
    imagen: "/images/services/catarata.png",
    enfoque: "center",
    descripcion:
      "Evaluación, diagnóstico y tratamiento quirúrgico, con estudio preoperatorio y cálculo de lente intraocular.",
    tituloCuidado: "Recupera claridad y calidad en tu visión",
    puntos: [
      "Evaluamos el grado de opacidad del cristalino y cómo afecta tu vida diaria.",
      "Realizamos el estudio preoperatorio y el cálculo de lente intraocular.",
      "Te acompañamos antes, durante y después del tratamiento quirúrgico.",
    ],
  },
  {
    nombre: "Glaucoma",
    slug: "glaucoma",
    imagen: "/images/services/glaucoma.png",
    enfoque: "center",
    descripcion: "Detección, diagnóstico, tratamiento y seguimiento orientados a preservar la función visual.",
    tituloCuidado: "Detección y seguimiento para proteger tu visión",
    puntos: [
      "Medimos la presión ocular y evaluamos el nervio óptico.",
      "Complementamos el diagnóstico con estudios especializados cuando son necesarios.",
      "Diseñamos un plan de control y tratamiento según la evolución de cada paciente.",
    ],
  },
  {
    nombre: "Retina y mácula",
    slug: "retina-y-macula",
    imagen: "/images/services/retinaymacula.png",
    enfoque: "center",
    descripcion:
      "Evaluación de enfermedades retinianas y maculares, incluidas alteraciones relacionadas con diabetes y edad.",
    tituloCuidado: "Cuidado especializado para la retina y la mácula",
    puntos: [
      "Evaluamos cambios visuales relacionados con diabetes, edad y otras condiciones.",
      "Estudiamos con precisión las estructuras del fondo del ojo.",
      "Indicamos tratamiento y seguimiento de acuerdo con cada diagnóstico.",
    ],
  },
  {
    nombre: "Córnea y superficie ocular",
    slug: "cornea-y-superficie-ocular",
    imagen: "/images/services/superficie_ocular.png",
    enfoque: "center",
    descripcion:
      "Diagnóstico y tratamiento de enfermedades corneales, ojo seco, alergias y otras alteraciones de la superficie ocular.",
    tituloCuidado: "Bienestar y claridad para la superficie de tus ojos",
    puntos: [
      "Diagnosticamos ojo seco, alergias y enfermedades de la córnea.",
      "Identificamos las causas de irritación, ardor o visión fluctuante.",
      "Ofrecemos un tratamiento personalizado para recuperar comodidad visual.",
    ],
  },
  {
    nombre: "Oftalmología pediátrica y estrabismo",
    slug: "oftalmologia-pediatrica-y-estrabismo",
    imagen: "/images/services/oftalmologia_pediatrica_estrabismo.png",
    enfoque: "center",
    descripcion: "Evaluación visual infantil, estrabismo, ambliopía y otros trastornos del desarrollo visual.",
    tituloCuidado: "Cuidamos la visión desde los primeros años",
    puntos: [
      "Realizamos evaluaciones adaptadas a la edad y desarrollo de cada niño.",
      "Detectamos estrabismo, ambliopía y problemas refractivos oportunamente.",
      "Orientamos a la familia durante el tratamiento y seguimiento visual.",
    ],
  },
  {
    nombre: "Cirugía oftalmológica",
    slug: "cirugia-oftalmologica",
    imagen: "/images/services/cirugia_oftalmologica.png",
    enfoque: "center",
    descripcion:
      "Tratamiento quirúrgico de diferentes enfermedades oculares, con evaluación individualizada y seguimiento postoperatorio.",
    tituloCuidado: "Precisión, tecnología y cuidado en cada intervención",
    puntos: [
      "Evaluamos cada caso y explicamos con claridad las alternativas quirúrgicas.",
      "Planificamos el procedimiento de manera individualizada y responsable.",
      "Realizamos seguimiento postoperatorio para acompañar tu recuperación.",
    ],
  },
  {
    nombre: "Urgencias y trauma ocular",
    slug: "urgencias-y-trauma-ocular",
    imagen: "/images/services/urgencia_trauma_ocular.png",
    enfoque: "center",
    descripcion:
      "Evaluación de lesiones, cuerpos extraños, infecciones y otros problemas oculares que requieren atención oportuna.",
    tituloCuidado: "Atención oportuna cuando tus ojos más lo necesitan",
    puntos: [
      "Evaluamos lesiones, infecciones, dolor y pérdida repentina de visión.",
      "Retiramos cuerpos extraños y tratamos problemas que requieren atención rápida.",
      "Indicamos cuidados y seguimiento para reducir riesgos y complicaciones.",
    ],
  },
  {
    nombre: "Exámenes oftalmológicos especializados",
    slug: "examenes-oftalmologicos-especializados",
    imagen: "/images/services/examen_especializado.png",
    enfoque: "center",
    descripcion:
      "Tecnología diagnóstica para complementar la evaluación médica y estudiar con precisión las estructuras y funciones del ojo.",
    tituloCuidado: "Tecnología especializada para diagnósticos precisos",
    puntos: [
      "Realizamos estudios que complementan la evaluación oftalmológica.",
      "Analizamos estructuras y funciones del ojo con equipamiento especializado.",
      "Entregamos información útil para orientar el diagnóstico y tratamiento.",
    ],
  },
];

export const servicios: Servicio[] = lista.map((s) => ({ ...s, href: `/servicios/${s.slug}` }));
