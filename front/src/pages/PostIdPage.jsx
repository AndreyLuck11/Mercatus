import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useFetching } from '../components/hooks/useFetching';
import PostService from '../API/PostServise';
import { useState } from 'react';
import Loader from '../components/UI/loader/Loader';
const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
    },[])
    
    return (
        <div>
            <h1>Вы открыли страниу поста c ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id} {post.title}</div>
            }
        </div>
    );
};

export default PostIdPage;