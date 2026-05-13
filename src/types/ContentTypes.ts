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

export type StudioSectionContent = {
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
  imageCaption: string
  metadata: {
    label: string
    value: string
  }[]
  sections: {
    title: string
    text: string
  }[]
  ctaLabel: string
  ctaHref: string
}
