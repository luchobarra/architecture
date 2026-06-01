type StudioCallToActionProps = {
  href: string
  label: string
  supportingLabel?: string
}

export const StudioCallToAction = ({
  href,
  label,
  supportingLabel,
}: StudioCallToActionProps) => (
  <a
    href={href}
    className="group relative flex min-h-[2.875rem] w-full items-center overflow-hidden border border-textWhite/16 bg-copper/30 px-5 py-2 text-textWhite shadow-[0_1rem_2.5rem_rgb(0_0_0_/_0.26)] backdrop-blur-[0.12rem] transition-[border-color,background-color,transform,box-shadow] duration-500 ease-[var(--ease-cinematic)] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(135deg,rgb(255_244_224_/_0.08)_0%,rgb(156_136_115_/_0.08)_42%,rgb(0_0_0_/_0.22)_100%)] hover:-translate-y-0.5 hover:border-textWhite/36 hover:bg-copper/38 hover:shadow-[0_1.5rem_3.5rem_rgb(0_0_0_/_0.34)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-textWhite/60 sm:min-h-[3rem] sm:px-6 sm:py-2 lg:min-h-[3.125rem]"
  >
    <span
      className="pointer-events-none absolute inset-0 border border-textWhite/7"
      aria-hidden="true"
    />

    <span className="relative z-10 flex w-full items-center gap-5">
      {supportingLabel ? (
        <span className="whitespace-nowrap text-[0.56rem] font-semibold uppercase leading-none tracking-[0.18em] text-textWhite/52 transition-colors duration-300 group-hover:text-textWhite/68">
          {supportingLabel}
        </span>
      ) : null}

      <span className="whitespace-nowrap text-[0.66rem] font-bold uppercase leading-none tracking-[0.18em] text-textWhite/88 transition-colors duration-300 group-hover:text-textWhite sm:text-[0.7rem]">
        {label}
      </span>
      <span
        className="h-px min-w-8 flex-1 bg-copper/62 transition-colors duration-300 group-hover:bg-textWhite/58"
        aria-hidden="true"
      />
    </span>
  </a>
)
