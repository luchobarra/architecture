import { HeroInteriorCarousel } from '@/components/presentational/HeroInteriorCarousel'
import type { HeroContent, HeroVisualSlide } from '@/types/ContentTypes'

type HeroTabletProps = {
  activeVisualSlide: HeroVisualSlide
  activeVisualSlideId: string
  activeVisualSlideNumber: number
  content: HeroContent
  totalVisualSlides: number
  visualSlides: HeroVisualSlide[]
  onSelectVisualSlide: (slideId: string) => void
}

export const HeroTablet = ({
  activeVisualSlide,
  activeVisualSlideId,
  activeVisualSlideNumber,
  content,
  totalVisualSlides,
  visualSlides,
  onSelectVisualSlide,
}: HeroTabletProps) => (
  <div className="relative hidden min-h-[clamp(36rem,78svh,44rem)] overflow-hidden sm:block lg:hidden">
    <div className="absolute inset-0">
      <img
        key={`tablet-${activeVisualSlide.id}`}
        src={activeVisualSlide.image}
        alt={activeVisualSlide.alt}
        className="h-full w-full animate-[heroImageFade_800ms_var(--ease-cinematic)] object-cover object-[60%_center]"
        loading="eager"
      />
    </div>

    <div
      className="pointer-events-none absolute inset-0 bg-accentDeep/8"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute inset-y-0 left-0 w-[min(58vw,34rem)] bg-[linear-gradient(90deg,var(--color-accentDeep)_0%,rgb(20_19_18_/_0.9)_34%,rgb(20_19_18_/_0.46)_62%,rgb(20_19_18_/_0)_100%)]"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute inset-y-0 left-[min(43vw,27rem)] w-[min(12vw,8rem)] bg-[linear-gradient(90deg,rgb(20_19_18_/_0.1)_0%,rgb(20_19_18_/_0)_100%)] blur-[1.25rem]"
      aria-hidden="true"
    />

    <div className="container-page relative z-10 flex min-h-[clamp(36rem,78svh,44rem)] items-center py-12">
      <div className="max-w-[22.5rem] -translate-y-[5vh]">
        <p className="max-w-full break-words text-[clamp(0.54rem,1.15vw,0.64rem)] font-medium uppercase tracking-[0.18em] text-textWhite/42">
          {content.eyebrow}
        </p>

        <h1 className="mt-4 max-w-[22.5rem] break-words text-balance font-serif text-[clamp(1.9rem,4.45vw,2.8rem)] leading-[1.06] text-textWhite/86">
          {content.title}
        </h1>

        <p className="mt-4 max-w-[20.5rem] text-[clamp(0.78rem,1.55vw,0.9rem)] leading-[1.7] text-textWhite/58">
          {content.description}
        </p>

        <a
          href={content.ctaHref}
          className="mt-6 inline-flex max-w-full items-center gap-4 text-[clamp(0.58rem,1.25vw,0.66rem)] font-medium uppercase tracking-[0.16em] text-textWhite/82 transition-colors hover:text-textWhite"
        >
          {content.ctaLabel}
          <span className="h-px w-10 bg-textWhite/38" aria-hidden="true" />
        </a>
      </div>
    </div>

    <div className="pointer-events-none absolute bottom-[clamp(1.5rem,4vh,2.5rem)] left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 text-[0.66rem] font-medium uppercase tracking-[0.2em] text-textWhite/70">
      <span>{String(activeVisualSlideNumber).padStart(2, '0')}</span>
      <span className="h-px w-10 bg-textWhite/42" aria-hidden="true" />
      <span>{String(totalVisualSlides).padStart(2, '0')}</span>
    </div>

    <div className="absolute bottom-[clamp(1.5rem,4vh,2.5rem)] right-[clamp(1.5rem,3vw,2.5rem)] top-[clamp(1.5rem,4vh,2.5rem)] z-20 w-[clamp(7.25rem,13vw,8.75rem)] overflow-hidden border-l border-textWhite/10 bg-accentDeep/78 shadow-elevated backdrop-blur-md">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-14 bg-[linear-gradient(180deg,var(--color-accentDeep)_0%,rgb(20_19_18_/_0)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 bg-[linear-gradient(0deg,var(--color-accentDeep)_0%,rgb(20_19_18_/_0)_100%)]"
        aria-hidden="true"
      />
      <HeroInteriorCarousel
        activeSlideId={activeVisualSlideId}
        orientation="vertical"
        slides={visualSlides}
        onSelectSlide={onSelectVisualSlide}
      />
    </div>
  </div>
)
