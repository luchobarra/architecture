import HeroLuxuryHouseHero from '@/assets/images/HeroLuxuryHouseHero.jpg'
import InteriorBathroom from '@/assets/images/InteriorBathroom.jpg'
import InteriorBedroom from '@/assets/images/InteriorBedroom.jpg'
import InteriorCourtyard from '@/assets/images/InteriorCourtyard.jpg'
import InteriorDiningRoom from '@/assets/images/InteriorDiningRoom.jpg'
import InteriorGallery from '@/assets/images/InteriorGallery.jpg'
import InteriorKitchen from '@/assets/images/InteriorKitchen.jpg'
import InteriorLivingRoom from '@/assets/images/InteriorLivingRoom.jpg'
import InteriorOffice from '@/assets/images/InteriorOffice.jpg'
import StudioWorktable from '@/assets/images/StudioWorktable.jpg'
import type {
  HeroContent,
  HeroVisualSlide,
  StudioSectionContent,
  SuccessStoriesSectionContent,
} from '@/types/ContentTypes'

export const heroContent: HeroContent = {
  eyebrow: 'Arquitectura para habitar tus sueños',
  title: 'Convertimos la casa que imaginás en un lugar para vivirla cada día.',
  description:
    'Escuchamos tu forma de vivir, interpretamos lo que soñás y lo transformamos en un proyecto claro, sensible y construido con precisión.',
  ctaLabel: 'Empezar mi proyecto',
  ctaHref: '#studio',
}

export const heroVisualSlides: HeroVisualSlide[] = [
  {
    id: 'exterior',
    title: 'Exterior',
    category: 'Residencia',
    image: HeroLuxuryHouseHero,
    alt: 'Fachada de residencia de lujo al atardecer.',
    isExterior: true,
  },
  {
    id: 'kitchen',
    title: 'Cocina',
    category: 'Interior',
    image: InteriorKitchen,
    alt: 'Cocina minimalista y cálida dentro de la residencia.',
  },
  {
    id: 'living-room',
    title: 'Living',
    category: 'Interior',
    image: InteriorLivingRoom,
    alt: 'Living contemporáneo con vista al jardín.',
  },
  {
    id: 'bedroom',
    title: 'Suite principal',
    category: 'Suite privada',
    image: InteriorBedroom,
    alt: 'Dormitorio principal sereno con iluminación arquitectónica cálida.',
  },
  {
    id: 'bathroom',
    title: 'Baño',
    category: 'Bienestar',
    image: InteriorBathroom,
    alt: 'Baño tipo spa con superficies de piedra y luz de patio.',
  },
  {
    id: 'gallery',
    title: 'Galería',
    category: 'Exterior',
    image: InteriorGallery,
    alt: 'Galería exterior cubierta con estar de diseño refinado.',
  },
  {
    id: 'dining-room',
    title: 'Comedor',
    category: 'Interior',
    image: InteriorDiningRoom,
    alt: 'Comedor refinado con materiales cálidos y vistas al jardín.',
  },
  {
    id: 'office',
    title: 'Estudio',
    category: 'Trabajo',
    image: InteriorOffice,
    alt: 'Estudio silencioso con madera oscura y vista al patio.',
  },
  {
    id: 'courtyard',
    title: 'Patio',
    category: 'Paisaje',
    image: InteriorCourtyard,
    alt: 'Patio privado con espejo de agua e iluminación de paisaje.',
  },
]

export const studioSectionContent: StudioSectionContent = {
  eyebrow: 'Sobre el estudio',
  title: 'Creamos hogares serenos, precisos y profundamente habitados.',
  description:
    'Una arquitectura de líneas claras, atmósferas cálidas y decisiones pensadas para acompañar la vida cotidiana.',
  image: StudioWorktable,
  imageAlt:
    'Mesa de trabajo de un estudio de arquitectura con planos, maqueta y muestras de materiales.',
  imageCaption: 'Mesa de estudio / Planos / Materialidad',
  metadata: [
    {
      label: 'Especialidad',
      value: 'Residencial',
    },
    {
      label: 'Proceso',
      value: 'Diseño + Obra',
    },
    {
      label: 'Lenguaje',
      value: 'Luz y materia',
    },
  ],
  concepts: [
    {
      indexLabel: '01',
      title: 'Quiénes somos',
      highlight: 'Un estudio que proyecta desde la escucha.',
      body:
        'Trabajamos con una mirada cercana, técnica y sensible para entender cómo vive cada cliente antes de dibujar una respuesta.',
    },
    {
      indexLabel: '02',
      title: 'Qué hacemos',
      highlight: 'Diseño residencial con dirección clara.',
      body:
        'Desarrollamos proyectos integrales desde la idea inicial hasta la definición de obra, ordenando necesidades, luz y materialidad.',
    },
  ],
  ctaLabel: 'Nuestros proyectos',
  ctaHref: '#success-stories',
}

export const successStoriesSectionContent: SuccessStoriesSectionContent = {
  eyebrow: 'Proyectos recientes',
  title: 'Residencias diseñadas para vivir mejor, con luz, calma y precisión.',
  description:
    'Cada casa parte de una forma distinta de habitar. Traducimos necesidades reales en espacios claros, cálidos y construidos con atención al detalle.',
  stories: [
    {
      id: 'casa-norte',
      title: 'Casa Norte',
      location: 'San Isidro',
      year: '2025',
      category: 'Vivienda familiar',
      metric: 'Interior + paisaje',
      description:
        'Una casa pensada para una familia que buscaba amplitud sin perder intimidad. El estar se abre al jardín con galerías profundas, madera cálida y una transición natural entre vida interior y exterior.',
      image: InteriorLivingRoom,
      imageAlt:
        'Estar de una vivienda familiar contemporánea abierto hacia un jardín privado.',
    },
    {
      id: 'villa-umbria',
      title: 'Villa Umbría',
      location: 'Mendoza',
      year: '2024',
      category: 'Casa de retiro',
      metric: 'Paisaje + materialidad',
      description:
        'Un refugio de descanso integrado al paisaje mendocino. La piedra, la madera y las sombras largas ordenan una experiencia serena, con espacios sociales abiertos a la montaña y protegidos del sol directo.',
      image: InteriorDiningRoom,
      imageAlt:
        'Comedor y galería de una casa de retiro con piedra, madera y vista a la montaña.',
    },
    {
      id: 'patio-litoral',
      title: 'Patio Litoral',
      location: 'Rosario',
      year: '2025',
      category: 'Reforma integral',
      metric: 'Luz + ventilación',
      description:
        'La intervención recupera una casa urbana cerrada y la convierte en una secuencia de patios habitables. El agua, el ladrillo y la vegetación llevan luz y ventilación a los ambientes principales.',
      image: InteriorCourtyard,
      imageAlt:
        'Patio interior urbano con espejo de agua, ladrillo visto, vegetación y galerías vidriadas.',
    },
    {
      id: 'suite-clara',
      title: 'Suite Clara',
      location: 'Nordelta',
      year: '2024',
      category: 'Suite principal',
      metric: 'Descanso + guardado',
      description:
        'Una suite diseñada como pausa dentro de la rutina diaria. El proyecto integra descanso, vestidor y baño con carpinterías a medida, iluminación indirecta y una paleta suave de madera y textiles naturales.',
      image: InteriorOffice,
      imageAlt:
        'Suite principal cálida con carpinterías de madera, vestidor integrado e iluminación indirecta.',
    },
  ],
}
