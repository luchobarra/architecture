import type { StudioSectionContent } from '@/types/ContentTypes'

type StudioEditorialProps = {
  content: StudioSectionContent
}

export const StudioEditorial = ({ content }: StudioEditorialProps) => (
  <div className="relative overflow-hidden py-10 sm:py-20 lg:py-24">
    <div
      className="pointer-events-none absolute left-1/2 top-10 hidden h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-copper/8 blur-[5rem] sm:block"
      aria-hidden="true"
    />

    <div className="relative mx-auto max-w-[74rem] px-4 py-10 text-textWhite sm:px-8 sm:py-18 lg:px-10 lg:py-22">
      <div
        className="pointer-events-none absolute bottom-56 left-0 top-56 hidden w-[2px] bg-textWhite/10 lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-56 right-0 top-56 hidden w-[2px] bg-textWhite/10 lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-textWhite/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-textWhite/10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[52rem] text-center">
        <p className="mx-auto flex w-fit items-center gap-3 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-copper sm:gap-4 sm:text-[0.68rem] sm:tracking-[0.22em]">
          <span className="h-px w-6 bg-copper/55 sm:w-8" aria-hidden="true" />
          {content.eyebrow}
          <span className="h-px w-6 bg-copper/55 sm:w-8" aria-hidden="true" />
        </p>

        <h2
          id="studio-editorial-title"
          className="mt-6 break-words text-balance font-serif text-[clamp(1.95rem,9vw,2.65rem)] leading-[1.08] text-textWhite/82 sm:mt-8 sm:text-[clamp(2.2rem,7.4vw,3.45rem)] lg:text-[clamp(2.9rem,3.75vw,4.05rem)]"
        >
          {content.title}
        </h2>

        <p className="mx-auto mt-4 max-w-[28rem] text-[0.82rem] leading-6 text-textWhite/62 sm:mt-5 sm:max-w-[34rem] sm:text-base sm:leading-8">
          {content.description}
        </p>
      </div>

      <figure className="relative mx-auto mt-8 max-w-[46rem] overflow-hidden border border-textWhite/10 bg-stone/38 p-2 shadow-soft sm:mt-12 sm:p-4 lg:max-w-[50rem]">
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 border border-copper/18"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 border border-copper/14"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-4 top-4 z-10 h-5 w-5 border-l border-t border-copper/65 sm:left-8 sm:top-8 sm:h-7 sm:w-7"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-20 right-4 z-10 h-5 w-5 border-b border-r border-copper/65 sm:bottom-16 sm:right-8 sm:h-7 sm:w-7"
          aria-hidden="true"
        />

        <img
          src={content.image}
          alt={content.imageAlt}
          className="aspect-[5/4] w-full object-cover opacity-[0.76] saturate-[0.66] sm:aspect-[16/7.9] lg:aspect-[16/7.8]"
          loading="lazy"
        />

        <figcaption className="flex flex-col gap-1.5 border-t border-textWhite/10 px-2 py-2 text-center text-[0.52rem] font-medium uppercase tracking-[0.13em] text-textWhite/52 sm:flex-row sm:items-center sm:justify-between sm:px-3 sm:py-2.5 sm:text-left sm:text-[0.6rem] sm:tracking-[0.18em]">
          <span>{content.imageCaption}</span>
          <span className="text-copper">Materialidad / Luz / Escala</span>
        </figcaption>
      </figure>

      <ul className="mx-auto grid max-w-[50rem] border-x border-b border-textWhite/10 sm:grid-cols-3">
        {content.metadata.map((item) => (
          <li
            key={item.label}
            className="grid gap-1 border-t border-textWhite/10 px-4 py-2.5 text-center sm:border-r sm:border-t-0 sm:px-5 sm:py-3.5 sm:last:border-r-0"
          >
            <span className="text-[0.54rem] font-medium uppercase tracking-[0.15em] text-textWhite/42 sm:text-[0.62rem] sm:tracking-[0.18em]">
              {item.label}
            </span>
            <span className="text-[0.82rem] text-surface sm:text-sm">{item.value}</span>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-6 grid max-w-[62rem] gap-4 sm:mt-7 sm:grid-cols-2 sm:gap-5 lg:mt-8 lg:gap-6">
        {content.sections.map((section, index) => (
          <article
            key={section.title}
            className="border border-textWhite/8 bg-stone/24 px-4 py-5 sm:px-6 sm:py-6 lg:px-7"
          >
            <h3 className="flex items-center gap-3 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-surface sm:gap-4 sm:text-[0.68rem] sm:tracking-[0.22em]">
              <span className="text-copper">
                {String(index + 1).padStart(2, '0')}
              </span>
              {section.title}
              <span className="h-px flex-1 bg-copper/20" aria-hidden="true" />
            </h3>

            <p className="mt-4 max-w-[34rem] text-[0.84rem] leading-6 text-textWhite/68 sm:mt-5 sm:text-base sm:leading-8">
              {section.text}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex justify-center sm:mt-10">
        <a
          href={content.ctaHref}
          className="inline-flex max-w-full items-center justify-center border border-copper/65 px-6 py-3.5 text-center text-[0.58rem] font-medium uppercase tracking-[0.16em] text-surface transition-colors duration-300 hover:bg-stone/24 hover:text-surface focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-copper/70 sm:px-7 sm:py-4 sm:text-[0.68rem] sm:tracking-[0.18em]"
        >
          {content.ctaLabel}
        </a>
      </div>
    </div>
  </div>
)
