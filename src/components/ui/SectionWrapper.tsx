import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type SectionWrapperProps = ComponentPropsWithoutRef<'section'> & {
  children: ReactNode
}

export const SectionWrapper = ({
  children,
  className = '',
  ...sectionProps
}: SectionWrapperProps) => (
  <section
    className={`py-16 sm:py-20 lg:py-28 xl:py-32 ${className}`}
    {...sectionProps}
  >
    <div className="container-page">{children}</div>
  </section>
)
