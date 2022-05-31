import client from "../../utils/client"
import {
    inputDataSchema,
    searchDataSchema,
    searcByParamSchema
} from "./news.schema"

const createNews = async (data: inputDataSchema) => {
    const news = await client.news.create({
        data
    })

    return news
}

const getAllNews = async () => {
    const news = await client.news.findMany()

    return news
}


const getNews = async (id: number) => {
    const news = await client.news.findUnique({
        where: {
            id
        }
    })

    return news
}

const getNewsByParam = async (data: searcByParamSchema) => {
    const news = await client.news.findMany({
        where: data
    })

    return news
}

const updateNews = async (id: searchDataSchema, data: inputDataSchema) => {
    const news = await client.news.update({
        where: id,
        data
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
    getNewsByParam,
    updateNews,
    deleteNews
}

export default NewsServices