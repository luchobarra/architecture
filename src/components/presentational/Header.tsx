import type { NavigationItem } from '@/types/NavigationTypes'

type HeaderProps = {
  isMobileMenuOpen: boolean
  navigationItems: NavigationItem[]
  onCloseMobileMenu: () => void
  onToggleMobileMenu: () => void
}

export const Header = ({
  isMobileMenuOpen,
  navigationItems,
  onCloseMobileMenu,
  onToggleMobileMenu,
}: HeaderProps) => (
  <header className="relative z-30 border-b border-textWhite/10 bg-accentDeep/96 text-textWhite backdrop-blur-md">
    <div className="container-page flex items-center justify-between py-4 md:py-5">
      <a
        href="/"
        className="hidden font-serif text-xl leading-none text-textWhite/92 transition-[color,transform] duration-200 hover:text-textWhite active:scale-[0.98] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-textWhite/60 md:block"
        aria-label="Inicio de Estudio Arquitectura"
      >
        Estudio Arquitectura
      </a>

      <a
        href="/"
        className="group inline-flex items-center gap-3 transition-[color,transform,opacity] duration-200 hover:text-textWhite active:scale-[0.97] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-textWhite/60 md:hidden"
        aria-label="Inicio de Estudio Arquitectura"
      >
        <span className="font-serif text-[1.7rem] leading-none tracking-[0.02em] text-textWhite/94 transition-colors duration-200 group-hover:text-textWhite">
          EA
        </span>
        <span
          className="h-8 w-px bg-textWhite/18 transition-colors duration-200 group-hover:bg-textWhite/42"
          aria-hidden="true"
        />
        <span className="flex flex-col gap-1 text-[0.55rem] font-medium uppercase leading-none tracking-[0.18em] text-textWhite/52 transition-colors duration-200 group-hover:text-textWhite/78">
          <span>Estudio</span>
          <span>Arquitectura</span>
        </span>
      </a>

      <nav className="hidden md:block" aria-label="Navegación principal">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.18em] text-textWhite/52">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                className="relative transition-[color,transform] duration-200 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-textWhite/54 after:transition-transform after:duration-200 hover:text-textWhite hover:after:scale-x-100 active:scale-[0.97] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-textWhite/60"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="grid h-11 w-11 place-items-center text-textWhite/86 transition-[color,transform] duration-200 hover:text-textWhite active:scale-90 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-textWhite/60 md:hidden"
        aria-controls="mobile-navigation"
        aria-expanded={isMobileMenuOpen}
        aria-label={isMobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        onClick={onToggleMobileMenu}
      >
        <span className="relative h-4 w-5" aria-hidden="true">
          <span
            className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-y-[0.45rem] rotate-45' : ''
            }`}
          />
          <span
            className={`absolute left-0 top-[0.45rem] h-px w-5 bg-current transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 h-px w-5 bg-current transition-transform duration-300 ${
              isMobileMenuOpen ? '-translate-y-[0.45rem] -rotate-45' : ''
            }`}
          />
        </span>
      </button>
    </div>

    <nav
      id="mobile-navigation"
      className={`absolute inset-x-0 top-full overflow-hidden border-y border-textWhite/10 bg-accentDeep shadow-elevated transition-[max-height,opacity,transform] duration-300 md:hidden ${
        isMobileMenuOpen
          ? 'max-h-96 translate-y-0 opacity-100'
          : 'pointer-events-none max-h-0 -translate-y-2 opacity-0'
      }`}
      aria-label="Navegación móvil"
    >
      <ul className="container-page divide-y divide-textWhite/10 py-2">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <a
              className="group flex items-center justify-between py-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-textWhite/74 transition-[color,transform,padding] duration-200 hover:pl-2 hover:text-textWhite active:scale-[0.98] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-0.35rem] focus-visible:outline-textWhite/60"
              href={item.href}
              onClick={onCloseMobileMenu}
            >
              {item.label}
              <span
                className="relative h-px w-8 bg-textWhite/28 transition-[width,background-color] duration-200 group-hover:w-10 group-hover:bg-textWhite/70"
                aria-hidden="true"
              >
                <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 border-r border-t border-textWhite/42 transition-colors duration-200 group-hover:border-textWhite/80" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)
