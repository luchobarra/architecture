import { HeroDesktop } from '@/components/presentational/HeroDesktop'
import { HeroMobile } from '@/components/presentational/HeroMobile'
import { HeroTablet } from '@/components/presentational/HeroTablet'
import type { HeroContent, HeroVisualSlide } from '@/types/ContentTypes'

type HeroProps = {
  activeVisualSlideId: string
  content: HeroContent
  visualSlides: HeroVisualSlide[]
  onSelectNextVisualSlide: () => void
  onSelectPreviousVisualSlide: () => void
  onSelectVisualSlide: (slideId: string) => void
}

export const Hero = ({
  activeVisualSlideId,
  content,
  visualSlides,
  onSelectNextVisualSlide,
  onSelectPreviousVisualSlide,
  onSelectVisualSlide,
}: HeroProps) => {
  const activeVisualSlide =
    visualSlides.find((slide) => slide.id === activeVisualSlideId) ?? visualSlides[0]
  const activeVisualSlideIndex = visualSlides.findIndex(
    (slide) => slide.id === activeVisualSlide.id,
  )
  const activeVisualSlideNumber = activeVisualSlideIndex >= 0 ? activeVisualSlideIndex + 1 : 1

  return (
    <section
      id="hero"
      aria-label={content.title}
      className="relative isolate overflow-hidden bg-surface text-accentDeep sm:min-h-[45rem] sm:bg-accentDeep lg:min-h-[720px]"
    >
      <HeroMobile
        activeVisualSlide={activeVisualSlide}
        activeVisualSlideNumber={activeVisualSlideNumber}
        content={content}
        totalVisualSlides={visualSlides.length}
        onSelectNextVisualSlide={onSelectNextVisualSlide}
        onSelectPreviousVisualSlide={onSelectPreviousVisualSlide}
      />

      <HeroTablet
        activeVisualSlide={activeVisualSlide}
        activeVisualSlideId={activeVisualSlideId}
        activeVisualSlideNumber={activeVisualSlideNumber}
        content={content}
        totalVisualSlides={visualSlides.length}
        visualSlides={visualSlides}
        onSelectVisualSlide={onSelectVisualSlide}
      />

      <HeroDesktop
        activeVisualSlide={activeVisualSlide}
        activeVisualSlideId={activeVisualSlideId}
        activeVisualSlideNumber={activeVisualSlideNumber}
        content={content}
        totalVisualSlides={visualSlides.length}
        visualSlides={visualSlides}
        onSelectVisualSlide={onSelectVisualSlide}
      />
    </section>
  )
}
