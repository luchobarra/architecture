type StudioImageBlockProps = {
  alt: string
  caption: string
  src: string
}

export const StudioImageBlock = ({ alt, caption, src }: StudioImageBlockProps) => (
  <figure className="relative aspect-[4/3] overflow-hidden border border-textWhite/10 shadow-[0_1.5rem_3.5rem_rgb(0_0_0_/_0.34)] sm:aspect-[16/10] lg:aspect-[4/5] lg:h-[clamp(40rem,82vh,54rem)] lg:w-full lg:max-w-[31rem] lg:shadow-[0_2.75rem_6.5rem_rgb(0_0_0_/_0.46)]">
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover object-[50%_58%]"
      loading="lazy"
    />
    <div
      className="pointer-events-none absolute inset-0 bg-accentDeep/16"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute inset-3 border border-textWhite/12"
      aria-hidden="true"
    />

    <div
      className="pointer-events-none absolute left-5 top-5 h-px w-16 bg-textWhite/42 sm:left-7 sm:top-7 sm:w-24"
      aria-hidden="true"
    />
    <span className="absolute right-5 top-5 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-textWhite/82 sm:right-7 sm:top-7">
      Studio
    </span>

    <figcaption className="absolute bottom-5 left-5 max-w-[calc(100%-2.5rem)] text-[0.58rem] font-semibold uppercase leading-loose tracking-[0.2em] text-textWhite sm:bottom-7 sm:left-7 sm:max-w-[28rem]">
      <span className="block">{caption}</span>
      <span className="mt-2 block text-textWhite/76">
        Materialidad / Luz / Escala
      </span>
    </figcaption>
  </figure>
)
