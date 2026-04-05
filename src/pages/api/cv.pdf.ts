import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';

const resumeFile = new URL('../../assets/documents/lenin-osorio-cv-2026.pdf', import.meta.url);

export const GET = (async () => {
  const file = await readFile(resumeFile);

  return new Response(file, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="Lenin-G-Osorio-Martinez-CV-2026.pdf"',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}) satisfies APIRoute;
