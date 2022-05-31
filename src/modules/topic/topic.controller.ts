import { FastifyReply, FastifyRequest } from "fastify"
import { inputDataSchema, searchDataSchema } from './topic.schema';
import { createTopic, deleteTopic, getTopic, getTopics, updateTopic } from "./topic.service";


const create = async (
    request: FastifyRequest<{
        Body: inputDataSchema
    }>,
    reply: FastifyReply
) => {
    try {
        const response = await createTopic(request.body)

        reply.code(201).send(response)
    } catch (e) {
        reply.code(400).send(e)
        console.log(e)
    }
}

const getAll = async () => {
    const response = await getTopics()

    return response
}

const getById = async (
    request: FastifyRequest<{
        Params: searchDataSchema
    }>,
    reply: FastifyReply

) => {

    const { id } = request.params

    try {
        const response = await getTopic(id)

        return response
    } catch (e) {
        reply.code(400).send(e)
        console.log(e)
    }
}

const update = async (
    request: FastifyRequest<{
        Params: searchDataSchema,
        Body: inputDataSchema
    }>,
    reply: FastifyReply
) => {
    const { id } = request.params

    try {
        const response = await updateTopic(id, request.body)

        return response
    } catch (e) {
        reply.code(400).send(e)
        console.log(e)
    }
}

const remove = async (request: FastifyRequest<{Params: searchDataSchema}>, reply: FastifyReply) => {
    const { id } = request.params

    try {
        const response = await deleteTopic(id)

        return response
    } catch (e) {
        reply.code(400).send(e)
        console.log(e)
    }
}

const debug = async (request: FastifyRequest<{ Params: searchDataSchema }>, reply: FastifyReply) => {
    const { id } = request.params

    // const parsedId = parseInt(id)
    try {
        const response = await getTopic(id)

        return response
    } catch (e) {
        reply.code(400).send(e)
        console.log(e)
    }
}

const TopicController = {
    create,
    getAll,
    getById,
    update,
    remove,
    debug
}

export default TopicController