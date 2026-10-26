import { defineCollection } from "astro/content/config";
import { glob } from 'astro/loaders';
import { z } from "astro/zod";

const posts = defineCollection({
    loader: glob({ 
        pattern: ['**/*.md', '**/*.mdx'], 
        base: './src/content/posts'
    }),
    schema: z.object({
        titulo: z.string(),
        fecha: z.string(),
        autor: z.string(),
        tags: z.array(z.string()).optional()
    })
})

const proyectos = defineCollection({
  loader: glob({ 
      pattern: ['**/*.md', '**/*.mdx'], 
      base: './src/content/proyectos'
  }),
  schema: z.object({
      titulo: z.string(),
      descripcion: z.string(),
      autor: z.string(),
      tags: z.array(z.string()).optional()
  })
});

export const collections = { posts, proyectos }