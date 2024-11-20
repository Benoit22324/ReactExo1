import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const Post = () => {
    const [postData, setPostData] = useState({});
    const { id } = useParams();

    const fetchPostData = async () => {
        const response = await axios.get(`https://jsonplaceholder.org/posts/${id}`);
        setPostData(response.data);
    }

    useEffect(() => {
        fetchPostData();
    }, [])

    return <>
        <h1>{postData.title}</h1>
        <p>{postData.content}</p>
    </>
}