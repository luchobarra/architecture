type StudioContentCardProps = {
  indexLabel?: string
  title: string
  highlight: string
  body: string
}

export const StudioContentCard = ({
  indexLabel,
  title,
  highlight,
  body,
}: StudioContentCardProps) => (
  <article className="relative flex min-h-[17rem] flex-col overflow-hidden border border-copper/18 bg-walnut/78 p-7 shadow-[0_2.25rem_5.5rem_rgb(0_0_0_/_0.42)] backdrop-blur-[0.12rem] before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-copper/80 after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(135deg,rgb(255_244_224_/_0.055)_0%,transparent_34%,rgb(0_0_0_/_0.18)_100%)] sm:min-h-[18rem] sm:p-8 lg:min-h-[18.5rem] lg:shadow-[0_3rem_7rem_rgb(0_0_0_/_0.52)] xl:p-8">
    <div
      className="pointer-events-none absolute inset-0 border border-textWhite/8"
      aria-hidden="true"
    />

    {indexLabel ? (
      <span className="pointer-events-none absolute left-7 top-7 z-10 text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-copper/55 sm:left-8 sm:top-8 xl:left-9 xl:top-9">
        {indexLabel}
      </span>
    ) : null}

    <h3 className="relative z-10 flex items-center gap-4 pt-10 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-copper">
      <span className="h-px w-11 bg-copper/85" aria-hidden="true" />
      {title}
    </h3>

    <p className="relative z-10 mt-6 font-serif text-[clamp(1.28rem,1.78vw,1.68rem)] leading-[1.12] text-textWhite">
      {highlight}
    </p>

    <p className="relative z-10 mt-7 max-w-[21rem] text-[0.84rem] font-medium leading-7 text-textWhite/66">
      {body}
    </p>
  </article>
)
