import HeroLuxuryHouseHero from '@/assets/images/HeroLuxuryHouseHero.jpg'
import InteriorBathroom from '@/assets/images/InteriorBathroom.jpg'
import InteriorBedroom from '@/assets/images/InteriorBedroom.jpg'
import InteriorCourtyard from '@/assets/images/InteriorCourtyard.jpg'
import InteriorDiningRoom from '@/assets/images/InteriorDiningRoom.jpg'
import InteriorGallery from '@/assets/images/InteriorGallery.jpg'
import InteriorKitchen from '@/assets/images/InteriorKitchen.jpg'
import InteriorLivingRoom from '@/assets/images/InteriorLivingRoom.jpg'
import InteriorOffice from '@/assets/images/InteriorOffice.jpg'
import type {
  HeroContent,
  HeroVisualSlide,
  StudioIntroContent,
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

export const studioIntroContent: StudioIntroContent = {
  statement:
    'Cada proyecto nace de una conversación: lo que necesitás, lo que imaginás y la vida que querés construir.',
  description:
    'Te acompañamos con una mirada profesional y cercana para darle forma a un hogar único, pensado en detalle, con decisiones claras y una arquitectura que se sienta verdaderamente tuya.',
  concepts: ['Escucha real', 'Diseño a medida', 'Confianza profesional'],
}
