import { StudioEditorial } from '@/components/presentational/StudioEditorial'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { studioSectionContent } from '@/data/HomePageData'

export const StudioSectionContainer = () => (
  <SectionWrapper
    id="studio"
    aria-labelledby="studio-editorial-title"
    className="!py-0 bg-accentDeep text-textWhite"
  >
    <StudioEditorial content={studioSectionContent} />
  </SectionWrapper>
)
