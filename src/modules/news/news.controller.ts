import { FastifyRequest, FastifyReply } from 'fastify'
import { inputDataSchema, searchDataSchema, topicArraySchema, searcByParamSchema, topicsInputSchema } from './news.schema';
import NewsServices from './news.service';
import slugify from 'slugify'

const create = async (
    request: FastifyRequest<{
        Body: inputDataSchema,
    }>,
    reply: FastifyReply
) => {

    const { title, thumbnail, content, status, topics } = request.body
    const slugged = slugify(title, { replacement: '-', lower: true })
    const slug = slugged || undefined

    try {
        const response = await NewsServices.createNews({
            title,
            slug,
            thumbnail,
            content,
            status,
        }, topics)

        return reply.code(201).send({response})
    } catch (e) {
        reply.code(400).send(e)
        console.log(e)
    }
}

const getAll = async (request: FastifyRequest<{
    Querystring: searcByParamSchema
}>, reply: FastifyReply) => {

    try {
        const response = await NewsServices.getAllNews(request.query)

        return reply.code(200).send({response})
    } catch (e) {
        console.log(e)
        reply.code(400).send(e)
    }
}

const getById = async (
    request: FastifyRequest<{
        Params: searchDataSchema
    }>,
    reply: FastifyReply
) => {

    const { id } = request.params

    try {
        const response = await NewsServices.getNews(id)

        return reply.code(200).send({response})
    } catch (e) {
        console.log(e)
        reply.code(500).send(e)
    }
}

const update = async (
    request: FastifyRequest<{
        Body: inputDataSchema,
        Params: searchDataSchema
    }>,
    reply: FastifyReply
) => {
    const { id } = request.params
    const { title, topics } = request.body
    const slugged = slugify(title, { replacement: '-', lower: true })
    const slug = slugged || undefined

    try {
        const response = await NewsServices.updateNews({ id }, request.body , topics)

        return reply.code(201).send(response)
    } catch (e) {
        console.log(e)
        reply.code(400).send(e)
    }
}

const remove = async (request: FastifyRequest<{
    Params: searchDataSchema
}>, reply: FastifyReply) => {
    try {
        const response = await NewsServices.deleteNews(request.params)

        return response
    } catch (e) {
        console.log(e)
        return reply.code(400).send(e)
    }
}

const NewsController = {
    create,
    getAll,
    getById,
    update,
    remove
}

export default NewsController