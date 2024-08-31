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

            <div className='w-5/6 h-48 shadow-lg bg-gray-500 rounded-2xl overflow-hidden'>
                { post.featuredImage ? <img src={ configurationService.getFilePreview(post.featuredImage) } alt={ post.title } /> : <h2>Loading...</h2> }
            </div>
            <div className='flex flex-col px-4 w-full mt-4'>
                <div className='flex flex-col items-center font-bold border-2 rounded-lg p-3 text-xl w-full'>
                    <h1 className='w-full font-Inter'>{ post.title }</h1>
                    <p className='font-Inter font-light text-sm w-full pt-3'>{ isAuther ? "Owner: YOU" : "Owner: OTHER" }</p>
                </div>

                <div>
                    { isAuther && (
                        <div className='flex gap-x-4 mt-2 text-xl font-Inter'>
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
            <div className='w-4/5 mt-2 text-xl font-Inter shadow-xl p-8 browser-css'>

                { parse(post.content) }
            </div>
        </div>

    ) : <div className='w-full bg-black/10 min-h-screen flex justify-center items-center text-2xl font-Inter'>Loading...</div>;
}

export default Post