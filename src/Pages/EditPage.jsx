import React,{ useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import configurationService from '../appwrite/configuration.js';
import { PostForm } from '../components/Index.js';


function EditPage() {
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    const { slug } = useParams();

    useEffect(() => {
        if (slug) {
            configurationService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                }
            })
        } else navigate('/');
    }, [slug, navigate]);

    
    return post ? <div>
        <PostForm post={post}/>
    </div> : null;
}

export default EditPage