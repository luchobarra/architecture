# Initial Architecture Plan

Planificacion inicial para la primera etapa del proyecto Architecture Studio, definida desde el rol de Architecture Agent y alineada con `AGENTS.md`, `ArchitectureAgent.md`, `UIUXAgent.md` y `FrontendAgent.md`.

El objetivo de esta etapa es organizar correctamente el comienzo del desarrollo antes de implementar UI compleja, animaciones avanzadas o modelos 3D.

## Objetivo De La Primera Etapa

Crear una base tecnica limpia, escalable y mantenible que permita desarrollar una landing premium de arquitectura sin comprometer la arquitectura del proyecto.

La prioridad no es construir impacto visual todavia, sino preparar una estructura solida para que Hero, storytelling, animaciones y 3D puedan crecer de forma ordenada.

## Roadmap Inicial

1. **Foundation**
   Definir tokens globales, layout base, helpers minimos, data inicial y convenciones de composicion. Esta etapa ya empezo con Tailwind, `Globals.css`, paleta y estructura `src`.

2. **Page Shell**
   Crear la estructura real de la pagina sin UI compleja: layout principal, navegacion base, main content y footer placeholder. Debe ser semantico, responsive y listo para recibir secciones.

3. **Section Scaffolding**
   Crear secciones iniciales como componentes simples, sin animaciones avanzadas ni 3D. Cada seccion debe tener responsabilidad clara y contenido mock/data-driven.

4. **Design System Base**
   Crear componentes UI minimos reutilizables: botones, contenedores, links, etiquetas, headings o wrappers. Sin variantes excesivas.

5. **Animation Readiness**
   Preparar refs, hooks y estructura para animaciones futuras, pero sin implementar timelines complejos todavia.

6. **3D Readiness**
   Reservar carpetas, boundaries y componentes placeholder para futuras escenas 3D sin cargar Three.js en secciones reales todavia.

## Orden Recomendado De Implementacion

1. Consolidar `src/styles/Globals.css` y tokens.
2. Crear `src/layouts/MainLayout.tsx`.
3. Crear `src/pages/HomePage.tsx` como composicion de secciones.
4. Crear data inicial en `src/data/HomePageData.ts`.
5. Crear tipos en `src/types/ContentTypes.ts`.
6. Crear UI base minima.
7. Crear containers de secciones.
8. Crear presentational components simples.
9. Preparar hooks futuros para scroll/viewport.
10. Recién después empezar diseño visual avanzado, animaciones y 3D.

## Estructura Propuesta

```txt
src/
  pages/
    HomePage.tsx

  layouts/
    MainLayout.tsx

  components/
    containers/
      HeaderContainer.tsx
      HeroContainer.tsx
      FeaturedProjectsContainer.tsx
      StudioIntroContainer.tsx
      ServicesContainer.tsx
      ProcessContainer.tsx
      ContactContainer.tsx
      FooterContainer.tsx

    presentational/
      Header.tsx
      Hero.tsx
      FeaturedProjects.tsx
      StudioIntro.tsx
      Services.tsx
      Process.tsx
      Contact.tsx
      Footer.tsx

    ui/
      PrimaryButton.tsx
      SectionWrapper.tsx
      SectionHeading.tsx
      TextLink.tsx
      Tag.tsx

  data/
    HomePageData.ts
    NavigationData.ts

  hooks/
    usePrefersReducedMotion.ts
    useScrollSection.ts

  utils/
    Formatters.ts
    AnimationConfig.ts

  types/
    ContentTypes.ts
    NavigationTypes.ts

  assets/
    images/
    models/
    textures/

  styles/
    Globals.css
```

## Paginas Y Layouts

`HomePage.tsx` deberia funcionar como la pagina principal y componer containers:

```txt
HomePage
  MainLayout
    HeroContainer
    StudioIntroContainer
    FeaturedProjectsContainer
    ServicesContainer
    ProcessContainer
    ContactContainer
```

`MainLayout.tsx` deberia manejar la estructura global:

- `HeaderContainer`
- `<main>`
- `FooterContainer`

No deberia tener logica visual compleja ni contenido especifico de secciones.

## Componentes Iniciales

Primeros componentes recomendados:

```txt
layouts/MainLayout.tsx
components/ui/SectionWrapper.tsx
components/ui/SectionHeading.tsx
components/ui/PrimaryButton.tsx
components/containers/HeaderContainer.tsx
components/presentational/Header.tsx
components/containers/FooterContainer.tsx
components/presentational/Footer.tsx
```

Despues:

```txt
components/containers/HeroContainer.tsx
components/presentational/Hero.tsx
components/containers/StudioIntroContainer.tsx
components/presentational/StudioIntro.tsx
```

Hero puede existir pronto, pero todavia como estructura sobria, sin 3D real ni animaciones avanzadas.

## Containers

Los containers deben encargarse de composicion, data y preparacion de logica:

```txt
HeroContainer.tsx
FeaturedProjectsContainer.tsx
ServicesContainer.tsx
ProcessContainer.tsx
ContactContainer.tsx
HeaderContainer.tsx
FooterContainer.tsx
```

Responsabilidades:

- Leer datos desde `data`.
- Pasar props limpias al componente visual.
- Preparar refs futuras para animacion.
- Decidir composicion de subcomponentes.
- Evitar markup visual detallado excesivo.

## Presentational Components

Los componentes presentacionales deben encargarse de estructura visual y HTML semantico:

```txt
Hero.tsx
FeaturedProjects.tsx
StudioIntro.tsx
Services.tsx
Process.tsx
Contact.tsx
Header.tsx
Footer.tsx
```

Reglas:

- Sin logica de negocio.
- Sin datos hardcodeados extensos.
- Props tipadas.
- Tailwind usando tokens globales.
- Markup semantico y responsive.

## UI Components

Componentes genericos reutilizables:

```txt
PrimaryButton.tsx
SectionWrapper.tsx
SectionHeading.tsx
TextLink.tsx
Tag.tsx
```

Responsabilidades:

- Resolver patrones repetidos.
- Mantener consistencia visual.
- Evitar duplicacion de clases.
- No conocer contenido especifico de arquitectura.

## Data Y Types

Conviene preparar contenido mock estructurado desde el inicio:

```txt
data/HomePageData.ts
data/NavigationData.ts
types/ContentTypes.ts
types/NavigationTypes.ts
```

Esto evita que las secciones crezcan con textos hardcodeados y facilita futuras iteraciones.

Tipos sugeridos:

```txt
NavigationItem
HeroContent
ProjectPreview
ServiceItem
ProcessStep
ContactInfo
```

## Preparacion Para Animaciones

Dejar preparado, sin implementar timelines todavia:

```txt
hooks/usePrefersReducedMotion.ts
hooks/useScrollSection.ts
utils/AnimationConfig.ts
```

`AnimationConfig.ts` puede centralizar duraciones, easings y offsets futuros. GSAP y ScrollTrigger deberian entrar recien cuando exista estructura estable de secciones.

Prioridad futura:

1. Framer Motion para microinteracciones.
2. GSAP para narrativa por scroll.
3. Reduced motion como criterio desde el inicio.

## Preparacion Para 3D

No implementar 3D en esta etapa. Si dejar prevista la estructura:

```txt
assets/models/
assets/textures/
components/containers/SceneContainer.tsx
components/presentational/ArchitectureScene.tsx
```

Esos componentes no deberian crearse hasta que exista una decision concreta de modelo, peso, objetivo visual y fallback responsive.

Para el futuro, el 3D deberia entrar como una capa aislada, probablemente en Hero o una seccion inmersiva especifica, no mezclado con la logica general de la landing.

## Primera Implementacion Recomendada

La primera implementacion real deberia ser:

1. Crear `layouts/MainLayout.tsx`.
2. Crear `data/NavigationData.ts`.
3. Crear `types/NavigationTypes.ts`.
4. Crear `HeaderContainer` y `Header`.
5. Crear `FooterContainer` y `Footer`.
6. Crear `SectionWrapper`.
7. Ajustar `HomePage.tsx` para usar `MainLayout`.

Esto deja una base profesional sin adelantar diseño complejo. Luego se puede avanzar seccion por seccion con este orden:

1. Hero
2. Studio Intro
3. Featured Projects
4. Services
5. Process
6. Contact

## Criterios De Calidad

- Todo el codigo debe vivir dentro de `src`.
- Los nombres de archivos, carpetas y componentes deben estar en ingles.
- Los componentes deben usar PascalCase.
- Las exportaciones deben ser named exports.
- La arquitectura debe separar containers, presentational components y ui.
- El desarrollo debe ser mobile-first.
- Los colores deben venir del theme global.
- Las animaciones deben ser progresivas, suaves y justificadas.
- El 3D debe integrarse de forma aislada, optimizada y con fallback.
- La estructura debe priorizar escalabilidad, mantenibilidad y prolijidad.
