import client from "../../utils/client"
import { inputDataSchema, searchDataSchema } from './topic.schema';

const createTopic = async (data: inputDataSchema) => {
    const topic = await client.topic.create({
        data
    })

    return topic
}

const getTopics = async () => {
    const topic = await client.topic.findMany()

    return topic
}

const getTopic = async (id: number) => {
    const topic = await client.topic.findUnique({
        where: {
            id
        }
    })

    return topic
}

const updateTopic = async (id: number, data: inputDataSchema) => {
    const topic = await client.topic.update({
        where: {
            id
        }, data
    })

    return topic
}

const deleteTopic = async (id: number) => {
    const topic = await client.topic.delete({
        where: {
            id
        }
    })

    return null
}

export {
    createTopic,
    getTopics,
    getTopic,
    updateTopic,
    deleteTopic
}