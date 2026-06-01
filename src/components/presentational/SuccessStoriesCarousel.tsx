import { useRef } from 'react'
import { motion } from 'framer-motion'
import type { SuccessStoriesSectionContent } from '@/types/ContentTypes'

type SuccessStoriesCarouselProps = {
  content: SuccessStoriesSectionContent
}

export const SuccessStoriesCarousel = ({
  content,
}: SuccessStoriesCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollStories = (direction: 'previous' | 'next') => {
    const carousel = carouselRef.current

    if (!carousel) {
      return
    }

    const scrollAmount = carousel.clientWidth * 0.82

    carousel.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative overflow-hidden pb-16 pt-0 text-textWhite sm:pb-20 lg:pb-28">
      <div className="mx-auto max-w-[74rem]">
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            className="relative mx-auto max-w-[42rem] text-center lg:mx-0 lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12% 0px' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-[4.75rem] h-[11rem] w-[min(31rem,84vw)] -translate-x-1/2 bg-copper/10 blur-[4.5rem] sm:top-[5.75rem] sm:h-[13rem] lg:top-[6.25rem]"
              aria-hidden="true"
            />

            <p className="relative z-10 mx-auto flex w-fit items-center gap-3 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-copper sm:gap-4 sm:text-[0.68rem] sm:tracking-[0.22em] lg:mx-0">
              <span className="h-px w-6 bg-copper/55 sm:w-8" aria-hidden="true" />
              {content.eyebrow}
            </p>

            <h2
              id="success-stories-title"
              className="relative z-10 mt-5 break-words text-balance font-serif text-[clamp(1.95rem,9vw,2.65rem)] leading-[1.08] text-textWhite/82 sm:mt-7 sm:text-[clamp(2.2rem,7.4vw,3.45rem)] lg:text-[clamp(2.9rem,3.75vw,4.05rem)]"
            >
              {content.title}
            </h2>

            <p className="relative z-10 mx-auto mt-4 max-w-[34rem] text-[0.84rem] leading-6 text-textWhite/62 sm:mt-5 sm:text-base sm:leading-8 lg:mx-0">
              {content.description}
            </p>
          </motion.div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              className="grid h-12 w-12 place-items-center border border-textWhite/14 text-xl leading-none text-textWhite/70 transition-colors duration-300 hover:border-copper/65 hover:text-textWhite focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-copper/70"
              aria-label="Ver caso anterior"
              onClick={() => scrollStories('previous')}
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              className="grid h-12 w-12 place-items-center border border-textWhite/14 text-xl leading-none text-textWhite/70 transition-colors duration-300 hover:border-copper/65 hover:text-textWhite focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-copper/70"
              aria-label="Ver caso siguiente"
              onClick={() => scrollStories('next')}
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="mt-10 overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] sm:mt-12 lg:mt-14 [&::-webkit-scrollbar]:hidden"
        >
          <ul className="flex snap-x snap-mandatory gap-3 pr-4 sm:gap-5 lg:gap-6">
            {content.stories.map((story, index) => (
              <motion.li
                key={story.id}
                className="w-[76vw] max-w-[20.5rem] shrink-0 snap-start sm:w-[44vw] sm:max-w-[26rem] lg:w-[31rem] lg:max-w-none"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{
                  duration: 0.72,
                  delay: Math.min(index * 0.08, 0.24),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <article className="group h-full border border-textWhite/10 bg-stone/24 transition-colors duration-300 hover:border-copper/42">
                  <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[5/4] lg:aspect-[16/11]">
                    <img
                      src={story.image}
                      alt={story.imageAlt}
                      className="h-full w-full object-cover object-center opacity-[0.78] saturate-[0.72] transition duration-700 group-hover:scale-[1.025] group-hover:opacity-[0.88]"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accentDeep/80 via-accentDeep/12 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5 sm:gap-4">
                      <div className="min-w-0">
                        <p className="text-[0.54rem] font-medium uppercase tracking-[0.16em] text-copper sm:text-[0.62rem] sm:tracking-[0.2em]">
                          {story.category}
                        </p>
                        <h3 className="mt-1.5 break-words font-serif text-[1.45rem] leading-none text-textWhite sm:mt-2 sm:text-[2rem]">
                          {story.title}
                        </h3>
                      </div>
                      <span className="shrink-0 border border-textWhite/16 bg-accentDeep/42 px-2.5 py-1.5 text-[0.52rem] font-medium uppercase tracking-[0.12em] text-textWhite/72 backdrop-blur-sm sm:px-3 sm:py-2 sm:text-[0.55rem] sm:tracking-[0.14em]">
                        {story.year}
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-4 px-3.5 py-4 sm:gap-5 sm:px-5 sm:py-6">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.54rem] font-medium uppercase tracking-[0.13em] text-textWhite/45 sm:gap-x-4 sm:gap-y-2 sm:text-[0.64rem] sm:tracking-[0.18em]">
                      <span>{story.location}</span>
                      <span className="h-px w-5 bg-copper/35 sm:w-7" aria-hidden="true" />
                      <span className="text-copper">{story.metric}</span>
                    </div>

                    <p className="text-[0.8rem] leading-5 text-textWhite/66 sm:text-[0.94rem] sm:leading-7">
                      {story.description}
                    </p>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
