import client from "../../utils/client"
import { topicsInputSchema, topicArraySchema } from './news.schema';
import {
    inputDataSchema,
    searchDataSchema,
    searcByParamSchema,
} from "./news.schema"

const createNews = async (data: inputDataSchema, topics: topicArraySchema) => {

    const { ...rest } = data

    const query: any[] = []

    topics?.forEach(topic => {
        query.push({
            create: topic,
            where: {
                name: topic.name
            }
        })
    })

    // return query

    const news = await client.news.create({
        data: {
            ...rest,
            topics: {
                connectOrCreate: query
            }
        },
        include: {
            topics: {
                select: {
                    name: true
                }
            }
        }
    })

    return news
}

// const getAllNews = async () => {
//     const news = await client.news.findMany()

//     return news
// }

const getAllNews = async (params: searcByParamSchema,) => {
    const news = await client.news.findMany({
        select: {
            id: true,
            title: true,
            slug: true,
            thumbnail: true,
            content: true,
            status: true,
            createdAt: true,
            updatedAt: true,
            topics: {
                select: {
                    id: true,
                    name: true
                }
            }
        },
        where: {
            OR: [
                {
                    status: {
                        contains: params.status
                    },
                    OR: {
                        topics: {
                            some: {
                                name: params.topic
                            }
                        }
                    }            
                },                
            ]
        }
    })

    return news
}

const getNews = async (id: number) => {
    const news = await client.news.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            title: true,
            slug: true,
            thumbnail: true,
            content: true,
            status: true,
            createdAt: true,
            updatedAt: true,
            topics: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })

    return news
}

const updateNews = async (id: searchDataSchema, data: inputDataSchema, topics: topicArraySchema) => {
    const { title, slug, thumbnail, content, status } = data        
    const topicQuery: any[] = []

    topics?.forEach(topic => {
        topicQuery.push({
            where: {
                name: topic.name
            },
            update: topic,
            create: topic,
        })
    })

    const news = await client.news.update({
        where: id,
        data: {
            title,
            slug,
            thumbnail,
            content,
            status,
            topics: {
                upsert: topicQuery
            }
        }
    })

    return news
}

const deleteNews = async (id: searchDataSchema) => {
    const news = await client.news.delete({
        where: id
    })

    return null
}

const NewsServices = {
    createNews,
    getAllNews,
    getNews,
    updateNews,
    deleteNews
}

export default NewsServices