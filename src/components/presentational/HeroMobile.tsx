import type { HeroContent, HeroVisualSlide } from '@/types/ContentTypes'

type HeroMobileProps = {
  activeVisualSlide: HeroVisualSlide
  activeVisualSlideNumber: number
  content: HeroContent
  totalVisualSlides: number
  onSelectNextVisualSlide: () => void
  onSelectPreviousVisualSlide: () => void
}

export const HeroMobile = ({
  activeVisualSlide,
  activeVisualSlideNumber,
  content,
  totalVisualSlides,
  onSelectNextVisualSlide,
  onSelectPreviousVisualSlide,
}: HeroMobileProps) => (
  <div className="sm:hidden">
    <div className="relative h-[46svh] min-h-[18rem] max-h-[25rem] overflow-hidden bg-accentDeep">
      <img
        key={`mobile-${activeVisualSlide.id}`}
        src={activeVisualSlide.image}
        alt={activeVisualSlide.alt}
        className="h-full w-full animate-[heroImageFade_700ms_var(--ease-cinematic)] object-cover object-[62%_center]"
        loading="eager"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-accentDeep/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgb(20_19_18_/_0)_0%,var(--color-accentDeep)_100%)]"
        aria-hidden="true"
      />
      <button
        type="button"
        className="absolute left-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center border border-textWhite/12 bg-accentDeep/24 text-textWhite/68 backdrop-blur-sm transition-[background-color,color,transform] hover:bg-accentDeep/48 hover:text-textWhite active:scale-95"
        aria-label="Ver imagen anterior"
        onClick={onSelectPreviousVisualSlide}
      >
        <span className="h-2 w-2 rotate-45 border-b border-l border-current" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center border border-textWhite/12 bg-accentDeep/24 text-textWhite/68 backdrop-blur-sm transition-[background-color,color,transform] hover:bg-accentDeep/48 hover:text-textWhite active:scale-95"
        aria-label="Ver imagen siguiente"
        onClick={onSelectNextVisualSlide}
      >
        <span className="h-2 w-2 rotate-45 border-r border-t border-current" aria-hidden="true" />
      </button>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-textWhite/72">
        <span>{String(activeVisualSlideNumber).padStart(2, '0')}</span>
        <span className="h-px w-8 bg-textWhite/42" aria-hidden="true" />
        <span>{String(totalVisualSlides).padStart(2, '0')}</span>
      </div>
    </div>

    <div className="relative -mt-1 bg-accentDeep pb-10 pt-8 text-center text-textWhite">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-textWhite/10"
        aria-hidden="true"
      />
      <div className="container-page flex flex-col items-center">
        <p className="max-w-full break-words text-[clamp(0.56rem,2.1vw,0.66rem)] font-medium uppercase tracking-[0.16em] text-textWhite/42">
          {content.eyebrow}
        </p>

        <h1 className="mt-3 max-w-[22rem] break-words text-balance font-serif text-[clamp(1.82rem,8vw,2.42rem)] leading-[1.06] text-textWhite/84">
          {content.title}
        </h1>

        <p className="mt-4 max-w-[21rem] text-[clamp(0.82rem,3.2vw,0.92rem)] leading-[1.68] text-textWhite/58">
          {content.description}
        </p>

        <a
          href={content.ctaHref}
          className="mt-6 inline-flex max-w-full items-center gap-3 text-[clamp(0.58rem,2.2vw,0.68rem)] font-medium uppercase tracking-[0.16em] text-textWhite/82"
        >
          {content.ctaLabel}
          <span className="h-px w-10 bg-textWhite/42" aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>
)
