import type { NavigationItem } from '@/types/NavigationTypes'

type HeaderProps = {
  navigationItems: NavigationItem[]
}

export const Header = ({ navigationItems }: HeaderProps) => (
  <header className="border-b border-border/50 bg-background">
    <div className="container-page flex flex-col gap-5 py-5 sm:flex-row sm:items-center sm:justify-between">
      <a
        href="/"
        className="font-serif text-xl leading-none text-foreground"
        aria-label="Architecture Studio home"
      >
        Architecture Studio
      </a>

      <nav aria-label="Primary navigation">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.18em] text-muted">
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
  </header>
)
