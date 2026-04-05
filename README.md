# r0lm0 Portfolio

Portfolio estático en Astro + pnpm, pensado para correr rápido, mantenerse fácil y evitar JavaScript innecesario.

## Stack

- Astro
- Tailwind CSS
- Componentes `.astro`
- Archivo estático para descarga de CV (`/documents/lenin-osorio-cv-2026.pdf`)

## Scripts

```bash
pnpm install
pnpm dev
pnpm generate:profile-assets
pnpm generate:github-readme
pnpm generate:linkedin-sync
```

> Nota: en esta sesión NO ejecuté build porque la regla del proyecto dice que no se debe construir después de cambios.

## Fuente única de verdad

Toda la data editable vive en:

- `D:\WORKSPACES\PORTFOLIO\porfolio.dev\src\data\profile-source.json`

Ese archivo alimenta:

- `D:\WORKSPACES\PORTFOLIO\porfolio.dev\src\data\portfolio.ts`
- `D:\WORKSPACES\PORTFOLIO\porfolio.dev\generated\github-profile\README.md`
- `D:\WORKSPACES\PORTFOLIO\porfolio.dev\generated\linkedin-sync\PROFILE.md`

## Cómo regenerar

```bash
pnpm generate:profile-assets
```

También podés usar alias específicos:

```bash
pnpm generate:github-readme
pnpm generate:linkedin-sync
```

## Dónde editar contenido

Si querés cambiar datos concretos, editá:

- `D:\WORKSPACES\PORTFOLIO\porfolio.dev\src\data\profile-source.json`

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
- CV público descargable: `D:\WORKSPACES\PORTFOLIO\porfolio.dev\public\documents\lenin-osorio-cv-2026.pdf`

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
- LinkedIn no se sincroniza automáticamente: se mantiene un paquete manual y profesional
- Todo enfocado en rendimiento, legibilidad y mantenimiento simple
