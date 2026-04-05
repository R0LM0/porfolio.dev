# r0lm0 Portfolio

Portfolio estático en Astro + pnpm, pensado para correr rápido, mantenerse fácil y evitar JavaScript innecesario.

## Stack

- Astro
- Tailwind CSS
- Componentes `.astro`
- Endpoint estático para descarga de CV (`/api/cv.pdf`)

## Scripts

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

> Nota: en esta sesión NO ejecuté build porque la regla del proyecto dice que no se debe construir después de cambios.

## Dónde editar contenido

Toda la data editable vive en:

- `D:\WORKSPACES\PORTFOLIO\porfolio.dev\src\data\portfolio.ts`

Ahí podés cambiar:

- perfil principal
- links sociales
- experiencia
- proyectos
- skills
- textos de contacto

## Assets

- Avatar: `D:\WORKSPACES\PORTFOLIO\porfolio.dev\public\images\profile\avatar.jpg`
- Imágenes de proyectos: `D:\WORKSPACES\PORTFOLIO\porfolio.dev\public\images\projects\`
- CV fuente del endpoint: `D:\WORKSPACES\PORTFOLIO\porfolio.dev\src\assets\documents\lenin-osorio-cv-2026.pdf`

## Estructura

```text
src/
├── components/      # UI reusable en Astro
├── data/            # Fuente de verdad del portfolio
├── layouts/         # Layout global
├── pages/           # Página principal + endpoint del CV
└── styles/          # Tema cyberpunk profesional
```

## Decisiones

- Sin axios
- Sin React
- Sin `client:*`
- Todo enfocado en rendimiento, legibilidad y mantenimiento simple
