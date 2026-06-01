type StudioHeaderBlockProps = {
  eyebrow: string
  title: string
}

export const StudioHeaderBlock = ({ eyebrow, title }: StudioHeaderBlockProps) => (
  <div className="grid min-h-[11.75rem] items-center bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-walnut)_86%,transparent)_0%,color-mix(in_srgb,var(--color-walnut)_76%,transparent)_24%,color-mix(in_srgb,var(--color-walnut)_46%,transparent)_56%,color-mix(in_srgb,var(--color-walnut)_16%,transparent)_82%,transparent_100%)] px-6 py-6 sm:min-h-[13.75rem] sm:px-8 sm:py-7 lg:min-h-[16.5rem] lg:px-10 lg:py-8">
    <div className="grid w-full lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-8 xl:gap-x-10">
      <div className="flex min-w-0 flex-col">
        <p className="flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.24em] text-copper">
          <span className="h-px w-8 bg-copper/70" aria-hidden="true" />
          {eyebrow}
        </p>

        <h2
          id="studio-title"
          className="mt-4 max-w-[28rem] font-serif text-[clamp(1.65rem,5.8vw,2.45rem)] leading-none text-textWhite lg:text-[clamp(2.1rem,2.6vw,2.75rem)]"
        >
          {title}
        </h2>
      </div>
    </div>
  </div>
)
