import { HeroContainer } from '@/components/containers/HeroContainer'
import { StudioSectionContainer } from '@/components/containers/StudioSectionContainer'
import { MainLayout } from '@/layouts/MainLayout'

export const HomePage = () => (
  <MainLayout>
    <HeroContainer />
    <StudioSectionContainer />
  </MainLayout>
)
