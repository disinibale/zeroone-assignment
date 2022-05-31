import { number, string, z } from 'zod'
import { buildJsonSchemas } from 'fastify-zod'

const topicIdSchema = z.object({
    id: z.number()
})

const topicCoreSchema = z.object({
    name: z.string(),
    description: z.string()
})

const topicResponseDataSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    createdAt: z.string(),
    updatedAt: z.string()
})

export type inputDataSchema = z.infer<typeof topicCoreSchema>
export type searchDataSchema = z.infer<typeof topicIdSchema>

export const { schemas: TopicSchemas, $ref } = buildJsonSchemas({
    topicIdSchema,
    topicCoreSchema,
    topicResponseDataSchema
})