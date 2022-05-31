import fastify from 'fastify'

import NewsRoutes from './modules/news/news.routes'
import { NewsSchemas } from './modules/news/news.schema'
import TopicRoutes from './modules/topic/topic.routes'
import { TopicSchemas } from './modules/topic/topic.schema'

import { Server } from 'tls'
import { GlobalSchemas } from './modules/global/global.schema'

const app = fastify()

const main = async () => {
    for (const schema of [...TopicSchemas, ...NewsSchemas]) {
        app.addSchema(schema)
    }

    console.log(app.getSchemas())

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