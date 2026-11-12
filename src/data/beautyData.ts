export interface Service {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Package {
  id: string;
  name: string;
  subtitle: string;
  services: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  comment: string;
  rating: number;
  date: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'capilar',
    name: 'CUIDADO CAPILAR',
    description: 'Renueva tu melena con cortes de tendencia, hidrataciones profundas y coloraciones cuidadosas.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'manicura',
    name: 'MANICURA Y PEDICURA',
    description: 'Cuidado impecable para tus manos y pies con esmaltados duraderos y acabados profesionales.',
    image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cejas',
    name: 'CEJAS Y PESTAÑAS',
    description: 'Enmarca tu mirada con diseños precisos, laminados y extensiones de aspecto natural.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'facial',
    name: 'CUIDADO FACIAL',
    description: 'Devuelve la luminosidad y frescura a tu piel con limpiezas profundas y activos nutritivos.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'maquillaje',
    name: 'MAQUILLAJE',
    description: 'Luce radiante en cada ocasión especial con técnicas profesionales adaptadas a tu estilo.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'spa',
    name: 'SPA Y BIENESTAR',
    description: 'Desconecta de la rutina con masajes relajantes y rituales corporales revitalizantes.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
  }
];

export const SERVICES: Service[] = [
  // Cuidado Capilar
  {
    id: 'cap-1',
    categoryId: 'capilar',
    name: 'Corte femenino',
    description: 'Corte personalizado según la forma de tu rostro y tipo de cabello, incluye lavado y peinado básico.',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cap-2',
    categoryId: 'capilar',
    name: 'Lavado y secado',
    description: 'Lavado relajante con productos nutritivos y secado con brushing o definición de ondas.',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cap-3',
    categoryId: 'capilar',
    name: 'Hidratación capilar',
    description: 'Tratamiento intensivo con mascarilla de aceites botánicos para devolver suavidad y brillo.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cap-4',
    categoryId: 'capilar',
    name: 'Tratamiento reparador',
    description: 'Reconstrucción profunda para cabellos procesados o maltratados, con sellado de cutícula.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cap-5',
    categoryId: 'capilar',
    name: 'Coloración',
    description: 'Tinte completo, balayage o retoque de raíz con pigmentos cálidos de alta calidad y protección capilar.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600'
  },

  // Manicura y Pedicura
  {
    id: 'man-1',
    categoryId: 'manicura',
    name: 'Manicura clásica',
    description: 'Limpieza de cutículas, limado, exfoliación suave y esmaltado tradicional con acabado brillante.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'man-2',
    categoryId: 'manicura',
    name: 'Esmaltado semipermanente',
    description: 'Manicura completa con esmalte LED/UV de larga duración hasta 3 semanas sin imperfecciones.',
    image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'man-3',
    categoryId: 'manicura',
    name: 'Pedicura',
    description: 'Cuidado completo para pies, tratamiento de durezas, mascarilla refrescante y esmaltado.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'man-4',
    categoryId: 'manicura',
    name: 'Uñas acrílicas',
    description: 'Construcción y extensión de uñas con acrílico de alta resistencia y diseño a elección.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'man-5',
    categoryId: 'manicura',
    name: 'Diseño de uñas',
    description: 'Decoración artística personalizada (nail art, efectos, foil, cristales o minimalismo).',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600'
  },

  // Cejas y Pestañas
  {
    id: 'cej-1',
    categoryId: 'cejas',
    name: 'Diseño de cejas',
    description: 'Depilación con hilo o cera y diseño geométrico según la simetría natural de tu rostro.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cej-2',
    categoryId: 'cejas',
    name: 'Laminado de cejas',
    description: 'Tratamiento semipermanente para fijar los vellos hacia arriba, logrando grosor y definición.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cej-3',
    categoryId: 'cejas',
    name: 'Extensiones de pestañas',
    description: 'Colocación pelo a pelo para dar volumen, longitud y profundidad a tu mirada.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cej-4',
    categoryId: 'cejas',
    name: 'Lifting de pestañas',
    description: 'Curvatura natural desde la raíz y tinte para realzar tus pestañas sin necesidad de extensiones.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600'
  },

  // Cuidado Facial
  {
    id: 'fac-1',
    categoryId: 'facial',
    name: 'Limpieza facial',
    description: 'Exfoliación, extracción suave de impurezas, alta frecuencia y tónico equilibrante.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'fac-2',
    categoryId: 'facial',
    name: 'Hidratación facial',
    description: 'Infusión de ácido hialurónico y sueros vitamínicos para devolver elasticidad y frescura.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'fac-3',
    categoryId: 'facial',
    name: 'Mascarilla facial',
    description: 'Mascarilla botánica calmante o purificante adaptada a las necesidades específicas de tu piel.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'fac-4',
    categoryId: 'facial',
    name: 'Tratamiento cosmético personalizado',
    description: 'Protocolo avanzado con aparatología suave y principios activos para revitalización profunda.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600'
  },

  // Maquillaje
  {
    id: 'maq-1',
    categoryId: 'maquillaje',
    name: 'Maquillaje social',
    description: 'Look elegante y duradero para cócteles, cenas o compromisos especiales.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'maq-2',
    categoryId: 'maquillaje',
    name: 'Maquillaje de eventos',
    description: 'Maquillaje de alta definición con técnica de iluminación y fijación superior.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'maq-3',
    categoryId: 'maquillaje',
    name: 'Maquillaje de novia',
    description: 'Asesoría y maquillaje nupcial impecable que resiste lágrimas, abrazos y fotografías.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'maq-4',
    categoryId: 'maquillaje',
    name: 'Prueba de maquillaje',
    description: 'Sesión previa para definir el estilo perfecto para tu gran evento o boda.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600'
  },

  // Spa y Bienestar
  {
    id: 'spa-1',
    categoryId: 'spa',
    name: 'Masaje relajante',
    description: 'Masaje corporal con aceites esenciales aromáticos para liberar tensiones y calmar la mente.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'spa-2',
    categoryId: 'spa',
    name: 'Exfoliación corporal',
    description: 'Renovación celular con sales minerales y extractos botánicos que suavizan la piel.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'spa-3',
    categoryId: 'spa',
    name: 'Ritual de bienestar',
    description: 'Combinación de exfoliación suave, masaje corporal envolvente y aromaterapia.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'spa-4',
    categoryId: 'spa',
    name: 'Paquete de relajación',
    description: 'Experiencia integral de desconexión con masaje descontracturante y mascarilla facial express.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=600'
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'pkg-1',
    name: 'BEAUTY ESSENTIAL',
    subtitle: 'Cuidado esencial para mantener tu imagen impecable cada semana.',
    services: ['Manicura clásica', 'Pedicura', 'Lavado y secado'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pkg-2',
    name: 'GLOW EXPERIENCE',
    subtitle: 'Revitaliza tu rostro y mirada con un tratamiento completo de luminosidad.',
    services: ['Limpieza facial', 'Diseño de cejas', 'Lifting de pestañas'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pkg-3',
    name: 'AURA PREMIUM',
    subtitle: 'La experiencia definitiva de belleza y bienestar en un solo momento.',
    services: ['Ritual de bienestar', 'Corte femenino', 'Esmaltado semipermanente'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Sofía Valdés',
    role: 'Especialista en Estilismo',
    specialty: 'Cortes y Coloración',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    bio: 'Apasionada por realzar la personalidad de cada cliente a través de cortes vanguardistas y coloraciones cuidadas.'
  },
  {
    id: 'team-2',
    name: 'Valeria Morales',
    role: 'Experta en Manicura y Nail Art',
    specialty: 'Uñas y Cuidado de Manos',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=600',
    bio: 'Detallista y perfeccionista, experta en técnicas de esmaltado impecable y diseños delicados.'
  },
  {
    id: 'team-3',
    name: 'Camila Herrera',
    role: 'Esteticista Facial',
    specialty: 'Cuidado Facial y Bienestar',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600',
    bio: 'Dedicada a la salud de la piel con protocolos personalizados y técnicas relajantes.'
  },
  {
    id: 'team-4',
    name: 'Daniela Rivas',
    role: 'Maquilladora Profesional',
    specialty: 'Maquillaje Social y Novias',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
    bio: 'Especialista en resaltar la belleza natural con acabados luminosos y duraderos.'
  },
  {
    id: 'team-5',
    name: 'Mariana Castillo',
    role: 'Terapeuta de Spa',
    specialty: 'Masajes y Rituales',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    bio: 'Creadora de espacios de calma y desconexión absoluta mediante masajes envolventes.'
  }
];

export const GALLERY_ITEMS = [
  {
    title: 'Estilismo y Color Capilar',
    category: 'capilar',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Manicura Semipermanente',
    category: 'manicura',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Diseño de Cejas y Mirada',
    category: 'cejas',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Tratamiento Facial Luminosidad',
    category: 'facial',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Maquillaje de Eventos',
    category: 'maquillaje',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Espacio de Spa y Bienestar',
    category: 'spa',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Lucía Fernández',
    service: 'Cuidado Facial & Hidratación',
    comment: 'Una experiencia verdaderamente relajante. El ambiente es sofisticado y la atención cuidada al detalle desde que llegas.',
    rating: 5,
    date: 'Hace 2 semanas'
  },
  {
    id: 't-2',
    name: 'Marcela Gómez',
    service: 'Manicura & Esmaltado',
    comment: 'Me encantó la precisión y la calidad de los productos. Mis uñas quedaron naturales, elegantes e impecables.',
    rating: 5,
    date: 'Hace 1 mes'
  },
  {
    id: 't-3',
    name: 'Carolina Méndez',
    service: 'Corte & Brushing',
    comment: 'Excelente asesoría de imagen. El equipo entendió exactamente el estilo y movimiento que buscaba para mi cabello.',
    rating: 5,
    date: 'Hace 3 semanas'
  },
  {
    id: 't-4',
    name: 'Andrea Quirós',
    service: 'Diseño de Cejas & Lifting',
    comment: 'El diseño de cejas transformó por completo mi mirada de forma muy sutil. El trato fue súper cálido y profesional.',
    rating: 5,
    date: 'Hace 1 semana'
  },
  {
    id: 't-5',
    name: 'Paola Batista',
    service: 'Maquillaje de Eventos',
    comment: 'Mi maquillaje se mantuvo intacto toda la noche en el evento, con una piel luminosa y nada recargada. Lo recomiendo muchísimo.',
    rating: 5,
    date: 'Hace 3 semanas'
  },
  {
    id: 't-6',
    name: 'Gabriela Arosemena',
    service: 'Ritual de Bienestar & Spa',
    comment: 'Justo el respiro que necesitaba en la ciudad. La cabina, los aromas y el masaje fueron una desconexión total.',
    rating: 5,
    date: 'Hace 2 meses'
  }
];

export const FAQS = [
  {
    question: '¿Cómo puedo agendar una cita?',
    answer: 'Puedes utilizar nuestro calendario interactivo en la sección de reservas: selecciona tus tratamientos favoritos, elige fecha, horario y confirma tu solicitud en pocos pasos.'
  },
  {
    question: '¿Puedo seleccionar varios tratamientos en una misma cita?',
    answer: 'Sí, nuestro sistema te permite marcar todos los servicios que necesites para coordinar tu visita en un solo momento.'
  },
  {
    question: '¿Cómo consulto información o disponibilidad?',
    answer: 'Al completar tu solicitud de cita o escribirnos por WhatsApp, coordinamos contigo la disponibilidad exacta y cualquier recomendación previa para tu tratamiento.'
  },
  {
    question: '¿Puedo cambiar o reprogramar mi cita?',
    answer: 'Sí, puedes ponerte en contacto con nosotros con anticipación para ajustar la fecha u hora de tu visita según la disponibilidad.'
  },
  {
    question: '¿Puedo elegir a una profesional de mi preferencia?',
    answer: 'Durante el proceso de reserva, tienes la opción de indicar tu especialista preferida o dejar que te asignemos la primera disponible.'
  }
];
