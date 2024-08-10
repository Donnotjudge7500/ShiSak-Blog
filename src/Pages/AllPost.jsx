import React, { useEffect, useState } from 'react';
import { PostCard, Error, Sidebar } from '../components/Index.js';
import { useSelector, useDispatch } from 'react-redux';
import PostEvents from '../components/PostEvents.jsx';

function AllPost() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(true);
    const fetchedPosts = useSelector((store) => store.postSlice.allPost.posts);

    useEffect(() => {
        try {
            if (fetchedPosts.documents) {
                setPosts(fetchedPosts.documents)
            }
            setError(false);
        } catch (error) {
            console.log(error.message)
        }
    },[])

    return (
        <div className='w-full max-w-screen-lg min-h-dvh m-auto mb-20'>
            { error ? <Error /> : <div>
                <div className='bg-white flex flex-col '>
                    <p className="text-3xl pl-4 mt-10 font-bold text-gray-900 md:text-5xl md:leading-10">
                        Resources and insights
                    </p>
                    <div className="w-full border-b border-gray-400 mt-7 flex flex-col items-end"></div>
                </div>
                <div className='w-full py-4 flex flex-col items-center gap-7 md:flex-row md:flex-wrap md:gap-10 md:ml-12'>
                    { posts.map((post) => (
                        <div key={ post.$id } >
                            <PostCard { ...post } />
                        </div>
                    )) }
                </div>
            </div> }
            <div className='w-full h-20 bg-white rounded-t-md fixed bottom-0 md:hidden'>
                <PostEvents />
            </div>
        </div>
    )
}
export default AllPost;