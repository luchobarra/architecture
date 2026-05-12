export type HeroContent = {
  eyebrow: string
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
}

export type HeroVisualSlide = {
  id: string
  title: string
  category: string
  image: string
  alt: string
  isExterior?: boolean
}

export type StudioIntroContent = {
  statement: string
  description: string
  concepts: string[]
}
