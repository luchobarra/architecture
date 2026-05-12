import { HeroInteriorCarousel } from '@/components/presentational/HeroInteriorCarousel'
import type { HeroContent, HeroVisualSlide } from '@/types/ContentTypes'

type HeroDesktopProps = {
  activeVisualSlide: HeroVisualSlide
  activeVisualSlideId: string
  activeVisualSlideNumber: number
  content: HeroContent
  totalVisualSlides: number
  visualSlides: HeroVisualSlide[]
  onSelectVisualSlide: (slideId: string) => void
}

export const HeroDesktop = ({
  activeVisualSlide,
  activeVisualSlideId,
  activeVisualSlideNumber,
  content,
  totalVisualSlides,
  visualSlides,
  onSelectVisualSlide,
}: HeroDesktopProps) => (
  <div className="relative hidden min-h-[720px] overflow-hidden lg:block">
    <div className="absolute inset-0">
      <img
        key={`desktop-${activeVisualSlide.id}`}
        src={activeVisualSlide.image}
        alt={activeVisualSlide.alt}
        className="h-full w-full animate-[heroImageFade_800ms_var(--ease-cinematic)] object-cover object-[64%_center]"
        loading="eager"
      />
    </div>

    <div
      className="pointer-events-none absolute inset-0 bg-accentDeep/8"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute inset-y-0 left-0 w-[min(64vw,54rem)] bg-[linear-gradient(90deg,var(--color-accentDeep)_0%,rgb(28_26_24_/_0.96)_32%,rgb(28_26_24_/_0.68)_52%,rgb(28_26_24_/_0.3)_72%,rgb(28_26_24_/_0)_100%)]"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute inset-y-0 left-[min(48vw,40rem)] w-[min(14vw,12rem)] bg-[linear-gradient(90deg,rgb(28_26_24_/_0.18)_0%,rgb(28_26_24_/_0)_100%)] blur-[1.5rem]"
      aria-hidden="true"
    />

    <div className="container-page relative z-10 flex min-h-[45rem] items-center py-20 lg:min-h-[720px] lg:py-0">
      <div className="max-w-[30rem] -translate-y-[2vh]">
        <p className="max-w-full break-words text-[clamp(0.62rem,1vw,0.72rem)] font-medium uppercase tracking-[0.18em] text-textWhite/48">
          {content.eyebrow}
        </p>

        <h1 className="mt-5 max-w-[min(100%,29rem)] break-words text-balance font-serif text-[clamp(2.55rem,4.5vw,3.8rem)] leading-[1.04] text-textWhite/94 lg:text-[clamp(2.9rem,3.35vw,4.15rem)]">
          {content.title}
        </h1>

        <p className="mt-5 max-w-[min(100%,25rem)] text-[clamp(0.88rem,1.1vw,0.98rem)] leading-[1.75] text-textWhite/62">
          {content.description}
        </p>

        <a
          href={content.ctaHref}
          className="mt-7 inline-flex max-w-full items-center gap-4 text-[clamp(0.64rem,1vw,0.72rem)] font-medium uppercase tracking-[0.16em] text-textWhite/92 transition-colors hover:text-textWhite"
        >
          {content.ctaLabel}
          <span className="h-px w-11 bg-textWhite/38" aria-hidden="true" />
        </a>
      </div>
    </div>

    <div className="pointer-events-none absolute bottom-[clamp(1.5rem,4vh,3rem)] left-1/2 z-20 flex -translate-x-1/2 items-center gap-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-textWhite/74">
      <span>{String(activeVisualSlideNumber).padStart(2, '0')}</span>
      <span className="h-px w-12 bg-textWhite/46" aria-hidden="true" />
      <span>{String(totalVisualSlides).padStart(2, '0')}</span>
    </div>

    <div className="absolute bottom-[clamp(1.5rem,4vh,3rem)] right-[clamp(1.5rem,3vw,3rem)] top-[clamp(1.5rem,4vh,3rem)] z-20 hidden w-[clamp(10rem,12vw,13rem)] overflow-hidden border-l border-textWhite/10 bg-accentDeep/82 shadow-elevated backdrop-blur-md lg:block">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-[linear-gradient(180deg,var(--color-accentDeep)_0%,rgb(28_26_24_/_0)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-[linear-gradient(0deg,var(--color-accentDeep)_0%,rgb(28_26_24_/_0)_100%)]"
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
