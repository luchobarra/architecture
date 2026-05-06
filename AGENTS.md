# Proyecto

Landing page moderna y premium para una empresa/estudio de arquitectura.

El objetivo es crear una experiencia web inmersiva, profesional, interactiva y visualmente impactante, enfocada principalmente en frontend, animaciones, storytelling visual y modelos 3D.

El proyecto será desarrollado utilizando Codex como asistencia principal.

---

# Stack principal

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- Three.js
- @react-three/fiber
- @react-three/drei

---

# Objetivos principales

- Crear una experiencia premium y moderna.
- Priorizar calidad visual, animaciones y experiencia de usuario.
- Integrar modelos 3D y animaciones como parte importante del proyecto.
- Mantener el proyecto responsive, optimizado y profesional.
- Desarrollar una arquitectura escalable y mantenible.
- Crear un proyecto de nivel portfolio profesional.

---

# Estructura del proyecto

Todo el código debe vivir dentro de `src`.

Estructura base recomendada:

```txt
src/
  pages/
  components/
    containers/
    presentational/
    ui/
  assets/
  hooks/
  utils/
  types/
  data/
```

---

# Reglas de componentes

- Separar correctamente lógica y presentación.
- Los componentes lógicos deben ir dentro de `containers`.
- Los componentes visuales deben ir dentro de `presentational`.
- Los componentes reutilizables genéricos deben ir dentro de `ui`.

Ejemplos:

```txt
HeroContainer.tsx
Hero.tsx
PrimaryButton.tsx
```

---

# Reglas de nomenclatura

- Los nombres de archivos, carpetas y componentes deben estar en inglés.
- Utilizar PascalCase.
- No utilizar kebab-case.
- Los nombres deben describir correctamente lo que hace o muestra el componente.
- Utilizar named exports.

Ejemplo:

```tsx
export const HeroContainer = () => {}
```

---

# Reglas de código

- Mantener el código limpio, prolijo y mantenible.
- Evitar componentes gigantes.
- Separar correctamente responsabilidades.
- Evitar lógica duplicada.
- Priorizar reutilización de componentes.
- Mantener consistencia arquitectónica en todo el proyecto.
- Mantener una estructura clara y escalable.

---

# Responsive y medidas

- Utilizar enfoque mobile-first.
- Priorizar medidas relativas y fluidas.
- Evitar tamaños fijos innecesarios.
- Utilizar `rem`, `%`, `vw`, `vh` y `clamp()` cuando sea necesario.
- Mantener una experiencia consistente en diferentes tamaños de pantalla.

---

# Colores y estilos globales

- Utilizar una paleta de colores global.
- Evitar colores hardcodeados dentro de componentes.
- Mantener consistencia visual en todo el proyecto.
- Los estilos globales y la configuración del theme se definirán más adelante.
- Tener en cuenta futuros archivos globales como:

```txt
globals.css
theme.css
```

---

# Animaciones y experiencia visual

- Las animaciones son una parte fundamental del proyecto.
- Priorizar animaciones suaves, cinematográficas y profesionales.
- Evitar animaciones excesivas o innecesarias.
- Utilizar GSAP para animaciones complejas y scroll storytelling.
- Utilizar Framer Motion para animaciones simples de UI.
- Priorizar fluidez y experiencia premium.

---

# Modelos 3D

- Integrar modelos 3D optimizados dentro de la experiencia web.
- Priorizar performance y carga eficiente.
- Los modelos pueden ser utilizados en secciones como Hero o recorridos interactivos.
- Mantener interacciones suaves y elegantes.

---

# Optimización y SEO

- Priorizar performance y buenas prácticas.
- Optimizar imágenes, animaciones y modelos 3D.
- Evitar renders innecesarios.
- Mantener una estructura semántica correcta.
- Tener en cuenta SEO y accesibilidad básica desde el inicio.

---

# Filosofía del proyecto

El proyecto debe sentirse como una experiencia web premium real, moderna y profesional, similar a una página destacada de arquitectura o diseño.

La prioridad principal es la calidad de la experiencia frontend, la prolijidad del código, la consistencia visual y la sensación premium del producto final.