import { FastifyInstance } from 'fastify'
import NewsController from './news.controller'
import { $ref } from './news.schema'

const NewsRoutes = async (app: FastifyInstance) => {
    app.post('/', NewsController.create)
    app.get('/', NewsController.getAll)
    app.get('/:id', {
        schema: {
            params: $ref('newsIdSchema'),
            response: {
                200: $ref('newsResponseSchema')
            }            
        }
    }, NewsController.getById)
    app.put('/:id', {
        schema: {
            params: $ref('newsIdSchema'),
            body: $ref('newsCoreSchema'),
            response: {
                201: $ref('newsResponseSchema')
            }
        }        
    }, NewsController.update)
    app.delete('/:id', {
        schema: {
            params: $ref('newsIdSchema')
        }
    }, NewsController.remove)
}

export default NewsRoutes