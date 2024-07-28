import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import { Button, DeletePost } from '../components/Index.js';
import configurationService from '../appwrite/configuration.js';
import { openDialogBox } from '../store/features/deleteSlice.js';


function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();
    const navigate = useNavigate();
    const { isOpen } = useSelector((store) => store.deleteSlice);
    const dispatch = useDispatch();

    const userData = useSelector((store) => store.authenticationSlice.userData);
    const isAuther = post && userData ? post.UserId === userData.$id : false;
    console.log(isAuther)

    useEffect(() => {
        if (slug) {
            configurationService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                    setLoading(false);
                } else navigate('/');
            })
        } else navigate('/');
    }, [slug, navigate]);


    return post && !loading ? (
        <div className='w-full min-h-dvh bg-zinc-50 shadow-lg py-10 flex flex-col items-center gap-4'>

            <div className='w-1/2 shadow-lg bg-gray-500 rounded-2xl overflow-hidden'>
                { post.featuredImage ? <img src={ configurationService.getFilePreview(post.featuredImage) } alt={ post.title } /> : <h2>Loading...</h2> }
            </div>
            <div className='flex gap-56 mt-4'>
                <div className='font-bold text-xl w-full'>
                    <h1 className='bg-black/5 px-10 py-2 w-fit shadow-lg rounded-md'>{ post.title }</h1>
                    <p className='font-Inter font-light text-sm mt-5 ml-3'>{ isAuther ? "You are the owner" : "Someone else owns this" }</p>
                </div>

                <div>
                    { isAuther && (
                        <div className='flex gap-4 text-xl font-Inter'>
                            <Link to={ `/edit-post/${post.$id}` }>
                                <Button
                                    className='bg-green-600 px-3 py-1 rounded-xl'
                                > Update </Button>
                            </Link>
                            <Button
                                className='bg-red-600 px-2 py-1 rounded-xl'
                                onClick={ () => dispatch(openDialogBox()) }
                            >
                                Delete
                            </Button>
                        </div>
                    ) }
                </div>
            </div>
            { isOpen && <DeletePost /> }
            <div className='w-8/12 mt-7 shadow-xl p-8 browser-css'>
                { parse(post.content) }
            </div>
        </div>

    ) : <div className='w-full bg-black/10 min-h-screen flex justify-center items-center text-2xl font-Inter'>Loading...</div>;
}

export default Post