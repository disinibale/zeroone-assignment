import { z } from 'zod'
import { buildJsonSchemas } from 'fastify-zod'

const newsIdSchema = z.object({
    id: z.number()
})

const newsParamSchema = z.object({
    status: z.string().optional(),
    topic: z.string().optional(),
})

const topicsDataSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
})

const arrTopicSchema = z.array(topicsDataSchema).optional()

const newsCoreSchema = z.object({
    title: z.string(),
    slug: z.string().optional(),
    thumbnail: z.string().optional(),
    content: z.string(),
    status: z.string(),
    topics: arrTopicSchema
})


const newsResponseSchema = z.object({
    id: z.number(),
    title: z.string(),
    slug: z.string().optional(),
    thumbnail: z.string().optional(),
    content: z.string(),
    status: z.string(),
    topics: arrTopicSchema,
    createdAt: z.string(),
    updatedAt: z.string()
})

export type inputDataSchema = z.infer<typeof newsCoreSchema>
export type searchDataSchema = z.infer<typeof newsIdSchema>
export type searcByParamSchema = z.infer<typeof newsParamSchema>
export type responseDataSchema = z.infer<typeof newsResponseSchema>
export type topicsInputSchema = z.infer<typeof topicsDataSchema>
export type topicArraySchema = z.infer<typeof arrTopicSchema>

export const { schemas: NewsSchemas, $ref } = buildJsonSchemas({
    newsCoreSchema,
    newsIdSchema,
    newsParamSchema,
    newsResponseSchema,
})