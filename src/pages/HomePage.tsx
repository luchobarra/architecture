import { HeroContainer } from '@/components/containers/HeroContainer'
import { StudioSectionContainer } from '@/components/containers/StudioSectionContainer'
import { SuccessStoriesSectionContainer } from '@/components/containers/SuccessStoriesSectionContainer'
import { MainLayout } from '@/layouts/MainLayout'

export const HomePage = () => (
  <MainLayout>
    <HeroContainer />
    <StudioSectionContainer />
    <SuccessStoriesSectionContainer />
  </MainLayout>
)
