import { FastifyInstance } from "fastify"
import TopicController from './topic.controller';
import { $ref } from "./topic.schema";

const TopicRoutes = async (app: FastifyInstance) => {
    app.post('/', TopicController.create)
    app.get('/', TopicController.getAll)
    app.get('/:id', {
        schema: {
            params: $ref('topicIdSchema'),
            response: {
                200: $ref('topicResponseDataSchema')
            }
        }
    }, TopicController.getById)
    app.put('/:id', {
        schema: {
            body: $ref('topicCoreSchema'),
            params: $ref('topicIdSchema'),
            response: {
                200: $ref('topicResponseDataSchema')
            }
        }
    }, TopicController.update)
    app.delete('/:id', {
        schema: {
            params: $ref('topicIdSchema')
        }
    }, TopicController.remove)
}

export default TopicRoutes