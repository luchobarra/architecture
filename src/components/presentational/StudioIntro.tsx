import { SectionWrapper } from '@/components/ui/SectionWrapper'
import type { StudioIntroContent } from '@/types/ContentTypes'

type StudioIntroProps = {
  content: StudioIntroContent
}

export const StudioIntro = ({ content }: StudioIntroProps) => (
  <SectionWrapper id="studio" aria-labelledby="studio-intro-title">
    <div className="mx-auto flex min-h-[60svh] max-w-[62rem] flex-col items-center justify-center border-y border-border/60 py-16 text-center sm:py-20 lg:py-24">
      <h2
        id="studio-intro-title"
        className="text-balance font-serif text-[clamp(2.5rem,10vw,3.5rem)] leading-[1.04] text-foreground lg:text-[clamp(4rem,5.6vw,5.5rem)]"
      >
        {content.statement}
      </h2>

      <p className="mt-8 max-w-[42rem] text-base leading-7 text-muted sm:text-lg sm:leading-8">
        {content.description}
      </p>

      <ul className="mt-12 grid w-full gap-0 border-y border-border/60 text-xs uppercase tracking-[0.18em] text-muted sm:grid-cols-3">
        {content.concepts.map((concept) => (
          <li
            key={concept}
            className="border-b border-border/60 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
          >
            {concept}
          </li>
        ))}
      </ul>
    </div>
  </SectionWrapper>
)
