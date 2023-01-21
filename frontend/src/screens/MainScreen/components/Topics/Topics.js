import React, { useEffect } from "react";
import axios from 'axios'
import {useQuery} from '@tanstack/react-query'
export default function Topics() {

    async function fetchTopics() {
        const response = await axios.get('http://localhost:8000/api/topics')
        const topics = response.data
        return topics
    }

    const {status, error,data:topics} = useQuery({
        queryKey: ['topics'],
        queryFn: fetchTopics,
    })
    
    return (
        <div>
            {topics && topics.map((topic) => {
                return (
                    <div key={topic.id}>
                        <h2>{topic.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}