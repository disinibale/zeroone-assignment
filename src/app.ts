import fastify from 'fastify'

import NewsRoutes from './modules/news/news.routes'
import { NewsSchemas } from './modules/news/news.schema'
import TopicRoutes from './modules/topic/topic.routes'
import { TopicSchemas } from './modules/topic/topic.schema'
import swagger from 'fastify-swagger'
import { withRefResolver } from 'fastify-zod'
import { version } from '../package.json'

const app = fastify()

const main = async () => {
    for (const schema of [...TopicSchemas, ...NewsSchemas]) {
        app.addSchema(schema)
    }

    app.register(
        swagger,
        withRefResolver({
            routePrefix: '/docs',
            exposeRoute: true,
            staticCSP: true,
            openapi: {
                info: {
                    title: 'Zero One Assignment API',
                    description: 'This API is for Assigment purpose',
                    version
                }
            }
        })
    )

    app.register(TopicRoutes, {prefix: 'api/topics'})
    app.register(NewsRoutes, {prefix: 'api/news'})

    try {
        await app.listen(3000, '0.0.0.0')        

        console.log(`Server Berjalan di htpp://localhost:3000`)
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

main()