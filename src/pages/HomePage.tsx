import { HeroContainer } from '@/components/containers/HeroContainer'
import { StudioIntroContainer } from '@/components/containers/StudioIntroContainer'
import { MainLayout } from '@/layouts/MainLayout'

export const HomePage = () => (
  <MainLayout>
    <HeroContainer />
    <StudioIntroContainer />
  </MainLayout>
)
