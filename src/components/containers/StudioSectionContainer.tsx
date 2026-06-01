import StudioSectionBackground from '@/assets/images/StudioSectionBackground.jpg'
import { StudioCallToAction } from '@/components/presentational/StudioCallToAction'
import { StudioContentCard } from '@/components/presentational/StudioContentCard'
import { StudioHeaderBlock } from '@/components/presentational/StudioHeaderBlock'
import { StudioImageBlock } from '@/components/presentational/StudioImageBlock'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { studioSectionContent } from '@/data/HomePageData'

export const StudioSectionContainer = () => {
  const { concepts, ctaHref, ctaLabel, eyebrow, image, imageAlt, imageCaption, title } =
    studioSectionContent

  return (
    <SectionWrapper
      id="studio"
      aria-labelledby="studio-title"
      className="relative isolate !py-0 overflow-hidden bg-accentDeep bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${StudioSectionBackground})` }}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-accentDeep/28"
        aria-hidden="true"
      />
      <div className="py-10 sm:py-14 lg:min-h-[100svh] lg:py-0">
        <div className="mx-auto grid w-full max-w-[78rem] gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-rows-[auto_auto_auto] lg:gap-x-0 lg:gap-y-9 xl:gap-y-10 [@media(min-width:1024px)_and_(max-height:820px)]:gap-y-6">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1">
            <StudioHeaderBlock eyebrow={eyebrow} title={title} />
          </div>

          <div className="-mx-[clamp(1.25rem,3vw,3rem)] lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:mx-0 lg:flex lg:items-center lg:justify-center">
            <StudioImageBlock
              src={image}
              alt={imageAlt}
              caption={imageCaption}
            />
          </div>

          <div className="mt-6 grid gap-7 sm:grid-cols-2 lg:col-start-1 lg:row-start-2 lg:mt-0 lg:gap-10 xl:gap-12">
            {concepts.map((concept) => (
              <StudioContentCard
                key={concept.indexLabel}
                indexLabel={concept.indexLabel}
                title={concept.title}
                highlight={concept.highlight}
                body={concept.body}
              />
            ))}
          </div>

          <div className="mt-4 grid gap-7 sm:grid-cols-2 lg:col-start-1 lg:row-start-3 lg:mt-5 lg:gap-10 xl:gap-12">
            <StudioCallToAction href={ctaHref} label={ctaLabel} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
