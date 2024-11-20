import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

export const Posts = () => {
    const [postsList, setPostsList] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        const response = await axios.get("https://jsonplaceholder.org/posts");
        setPostsList(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return <>
        <h1>Bienvenue sur la page des Posts</h1>
        {
            loading ? <p>Chargement des posts...</p>
                : <ul>
                    {postsList.map(post => <PostLi key={post.id} id={post.id} title={post.title} />)}
                </ul>
        }
    </>
}

const PostLi = ({id, title}) => {
    return <>
        <li>
            <Link to={`/post/${id}`}>{title}</Link>
        </li>
    </>
}