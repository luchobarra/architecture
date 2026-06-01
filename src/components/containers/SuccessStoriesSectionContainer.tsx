import { SuccessStoriesCarousel } from '@/components/presentational/SuccessStoriesCarousel'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { successStoriesSectionContent } from '@/data/HomePageData'

export const SuccessStoriesSectionContainer = () => (
  <SectionWrapper
    id="success-stories"
    aria-labelledby="success-stories-title"
    className="!py-0 bg-accentDeep text-textWhite"
  >
    <SuccessStoriesCarousel content={successStoriesSectionContent} />
  </SectionWrapper>
)
