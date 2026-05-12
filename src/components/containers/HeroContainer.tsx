import { useEffect, useState } from 'react'

import { Hero } from '@/components/presentational/Hero'
import { heroContent, heroVisualSlides } from '@/data/HomePageData'

export const HeroContainer = () => {
  const [activeVisualSlideId, setActiveVisualSlideId] = useState(
    heroVisualSlides[0]?.id ?? '',
  )

  const activeVisualSlideIndex = heroVisualSlides.findIndex(
    (slide) => slide.id === activeVisualSlideId,
  )

  const selectVisualSlideByOffset = (offset: number) => {
    const safeCurrentIndex = activeVisualSlideIndex >= 0 ? activeVisualSlideIndex : 0
    const nextIndex =
      (safeCurrentIndex + offset + heroVisualSlides.length) % heroVisualSlides.length

    setActiveVisualSlideId(heroVisualSlides[nextIndex]?.id ?? '')
  }

  useEffect(() => {
    const autoplayInterval = window.setInterval(() => {
      selectVisualSlideByOffset(1)
    }, 6500)

    return () => {
      window.clearInterval(autoplayInterval)
    }
  })

  return (
    <Hero
      activeVisualSlideId={activeVisualSlideId}
      content={heroContent}
      onSelectNextVisualSlide={() => selectVisualSlideByOffset(1)}
      onSelectPreviousVisualSlide={() => selectVisualSlideByOffset(-1)}
      onSelectVisualSlide={setActiveVisualSlideId}
      visualSlides={heroVisualSlides}
    />
  )
}
