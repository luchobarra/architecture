import type { ReactNode } from 'react'

import { FooterContainer } from '@/components/containers/FooterContainer'
import { HeaderContainer } from '@/components/containers/HeaderContainer'

type MainLayoutProps = {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="min-h-dvh bg-background text-foreground">
    <HeaderContainer />
    <main id="main-content">{children}</main>
    <FooterContainer />
  </div>
)
