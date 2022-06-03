import { FastifyInstance } from 'fastify'
import NewsController from './news.controller'
import { $ref } from './news.schema';

const NewsRoutes = async (app: FastifyInstance) => {
    app.post('/', NewsController.create)
    app.get('/',  NewsController.getAll)
    app.get('/:id', {
        schema: {
            params: $ref('newsIdSchema'),
        }
    }, NewsController.getById)
    app.put('/:id', {
        schema: {
            params: $ref('newsIdSchema'),
            body: $ref('newsCoreSchema'),
        }        
    }, NewsController.update)
    app.delete('/:id', {
        schema: {
            params: $ref('newsIdSchema')
        }
    }, NewsController.remove)
}

export default NewsRoutes