import type { HeroContent } from '@/types/ContentTypes'

type HeroProps = {
  content: HeroContent
}

export const Hero = ({ content }: HeroProps) => (
  <section
    id="hero"
    aria-labelledby="hero-title"
    className="bg-background py-16 sm:py-20 lg:py-28 xl:py-32"
  >
    <div className="container-page grid min-h-[calc(100svh-5rem)] items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="max-w-[44rem] lg:col-span-6">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent sm:text-sm">
          {content.eyebrow}
        </p>

        <h1
          id="hero-title"
          className="mt-6 text-balance font-serif text-[clamp(3.25rem,14vw,4.75rem)] leading-[0.94] text-foreground sm:text-[clamp(4.5rem,10vw,6.25rem)] lg:text-[clamp(5.5rem,7.5vw,8rem)]"
        >
          {content.title}
        </h1>

        <p className="mt-7 max-w-[36rem] text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:text-xl">
          {content.description}
        </p>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.18em] text-muted">
          {content.meta.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-6">
        <div
          className="min-h-[18rem] border border-border/60 bg-surface sm:min-h-[24rem] lg:min-h-[clamp(32rem,58vh,42rem)]"
          aria-hidden="true"
        />
      </div>
    </div>
  </section>
)
