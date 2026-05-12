import type { HeroVisualSlide } from '@/types/ContentTypes'

type HeroInteriorCarouselProps = {
  activeSlideId: string
  className?: string
  orientation?: 'horizontal' | 'vertical'
  slides: HeroVisualSlide[]
  onSelectSlide: (slideId: string) => void
}

export const HeroInteriorCarousel = ({
  activeSlideId,
  className = '',
  orientation = 'horizontal',
  slides,
  onSelectSlide,
}: HeroInteriorCarouselProps) => {
  const isVertical = orientation === 'vertical'
  const visibleSlides = isVertical ? [...slides, ...slides] : slides

  return (
    <section aria-label="Hero visual selector" className={`w-full ${className}`}>
      <div
        className={`[scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isVertical ? 'h-full overflow-hidden px-2 py-4' : 'overflow-x-auto'
        }`}
      >
        <ul
          className={`flex gap-3 ${
            isVertical
              ? 'animate-[heroCarouselVertical_90s_linear_infinite] flex-col hover:[animation-play-state:paused]'
              : ''
          }`}
        >
          {visibleSlides.map((slide, index) => {
            const isActive = slide.id === activeSlideId
            const isDuplicate = isVertical && index >= slides.length

            return (
              <li
                key={`${slide.id}-${index}`}
                className={isVertical ? 'py-1' : 'shrink-0'}
                aria-hidden={isDuplicate}
              >
                <button
                  type="button"
                  className={`group block text-left transition-opacity duration-300 active:scale-[0.98] ${
                    isVertical
                      ? 'w-full'
                      : 'w-[72vw] sm:w-[clamp(8rem,15vw,11rem)] lg:w-[clamp(7.5rem,9vw,9.75rem)]'
                  } ${
                    isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-pressed={isActive}
                  tabIndex={isDuplicate ? -1 : undefined}
                  onClick={() => onSelectSlide(slide.id)}
                >
                  <span className="relative z-0 block aspect-[4/3] bg-accentDeep transition-transform duration-300 group-hover:z-10 group-hover:scale-[1.06]">
                    <span className="absolute inset-0 overflow-hidden">
                      <img
                        src={slide.image}
                        alt={isDuplicate ? '' : slide.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                        loading={index < 3 ? 'eager' : 'lazy'}
                      />
                    </span>
                    <span
                      className={`pointer-events-none absolute inset-0 border transition-colors duration-300 ${
                        isActive ? 'border-textWhite/70' : 'border-textWhite/14 group-hover:border-textWhite/42'
                      }`}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="relative z-20 mt-3 flex items-center justify-between gap-3">
                    <span>
                      <span className="block text-[0.56rem] font-medium uppercase tracking-[0.18em] text-textWhite/42 transition-colors duration-300 group-hover:text-textWhite/58">
                        {slide.category}
                      </span>
                      <span className="mt-1 block text-[0.74rem] font-medium text-textWhite/82 transition-colors duration-300 group-hover:text-textWhite">
                        {slide.title}
                      </span>
                    </span>
                    <span
                      className={`h-px w-7 transition-[background-color,width] duration-300 ${
                        isActive ? 'bg-textWhite group-hover:w-8' : 'bg-textWhite/18 group-hover:w-8 group-hover:bg-textWhite/58'
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
