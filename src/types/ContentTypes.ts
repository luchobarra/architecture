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

export type StudioConcept = {
  indexLabel: string
  title: string
  highlight: string
  body: string
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
  concepts: StudioConcept[]
  ctaLabel: string
  ctaHref: string
}

export type SuccessStory = {
  id: string
  title: string
  location: string
  year: string
  category: string
  metric: string
  description: string
  image: string
  imageAlt: string
}

export type SuccessStoriesSectionContent = {
  eyebrow: string
  title: string
  description: string
  stories: SuccessStory[]
}
