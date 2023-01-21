import React, { useEffect } from "react";
import axios from 'axios'
import {useQuery} from '@tanstack/react-query'
export default function Discussions() {

    async function fetchDiscussion() {
        const response = await axios.get('http://localhost:8000/api/discussions/')
        const discussions = response.data
        return discussions
    }

    const {status, error,data:discussions} = useQuery({
        queryKey: ['discussions'],
        queryFn: fetchDiscussion,
    })
    
    return (
        <div>
            {discussions && discussions.map((discussion) => {
                return (
                    <div key={discussion.id}>
                        <h2>{discussion.title}</h2>
                        <h2>{discussion.description}</h2>
                        <h2>{discussion.author}</h2>
                        <h2>{discussion.created_at}</h2>
                        <h2>{discussion.likes}</h2>
                        

                    </div>
                )
            })}
        </div>
    )
}