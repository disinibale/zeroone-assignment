import { buildJsonSchemas } from 'fastify-zod'
import { z } from 'zod'

const globalIdSchema = z.object({
    id: z.number()
})

export type searchByIdSchema = z.infer<typeof globalIdSchema>

export const {schemas: GlobalSchemas, $ref} = buildJsonSchemas({
    
})