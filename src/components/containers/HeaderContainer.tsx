import { useState } from 'react'

import { Header } from '@/components/presentational/Header'
import { navigationItems } from '@/data/NavigationData'

export const HeaderContainer = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((currentValue) => !currentValue)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <Header
      isMobileMenuOpen={isMobileMenuOpen}
      navigationItems={navigationItems}
      onCloseMobileMenu={closeMobileMenu}
      onToggleMobileMenu={toggleMobileMenu}
    />
  )
}
