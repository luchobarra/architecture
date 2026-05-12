import type { NavigationItem } from '@/types/NavigationTypes'

type FooterProps = {
  navigationItems: NavigationItem[]
}

export const Footer = ({ navigationItems }: FooterProps) => (
  <footer className="border-t border-textWhite/10 bg-accentDeep">
    <div className="container-page flex flex-col gap-6 py-8 text-sm text-textWhite/54 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-serif text-lg leading-none text-textWhite/92">
        Estudio Arquitectura
      </p>

      <nav aria-label="Navegación del pie de página">
        <ul className="flex flex-wrap gap-x-5 gap-y-3">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a className="transition-colors hover:text-textWhite" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </footer>
)
