import { z } from 'zod'
import { buildJsonSchemas } from 'fastify-zod'

const newsIdSchema = z.object({
    id: z.number()
})

const newsParamSchema = z.object({
    status: z.string(),
    topic: z.string()
})

const newsCoreSchema = z.object({
    title: z.string(),
    slug: z.string().optional(),
    thumbnail: z.string().optional(),
    content: z.string(),
    status: z.string()
})

const newsResponseSchema = z.object({
    id: z.number(),
    title: z.string(),
    slug: z.string().optional(),
    thumbnail: z.string().optional(),
    content: z.string(),
    status: z.string(),
    createdAt: z.string(),
    updatedAt: z.string()
})

export type inputDataSchema = z.infer<typeof newsCoreSchema>
export type searchDataSchema = z.infer<typeof newsIdSchema>
export type searcByParamSchema = z.infer<typeof newsParamSchema>

export const { schemas: NewsSchemas, $ref } = buildJsonSchemas({
    newsCoreSchema,
    newsIdSchema,
    newsParamSchema,
    newsResponseSchema,
})