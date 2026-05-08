import type { NavigationItem } from '@/types/NavigationTypes'

type FooterProps = {
  navigationItems: NavigationItem[]
}

export const Footer = ({ navigationItems }: FooterProps) => (
  <footer className="border-t border-border/50 bg-surface">
    <div className="container-page flex flex-col gap-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p className="font-serif text-lg leading-none text-foreground">
        Architecture Studio
      </p>

      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap gap-x-5 gap-y-3">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a className="transition-colors hover:text-foreground" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </footer>
)
