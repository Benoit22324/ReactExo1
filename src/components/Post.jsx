import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const Post = () => {
    const [postData, setPostData] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const fetchPostData = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.org/posts/${id}`);
            setPostData(response.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchPostData();
    }, [])

    return <>
        {loading ? <p>Récupération en cours...</p>
        : <PostScreen title={postData.title} content={postData.content} />
        }
    </>
}

const PostScreen = ({title, content}) => {
    return <>
        <h1>{title}</h1>
        <p>{content}</p>
    </>
}