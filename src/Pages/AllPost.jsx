import React, { useEffect, useState } from 'react';
import { PostCard, Error } from '../components/Index.js';
import { useSelector, useDispatch } from 'react-redux';

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
        <div className='w-11/12 max-w-screen-lg min-h-dvh m-auto mb-20'>
            { error ? <Error /> : <div>
                <p className="text-3xl mt-20 font-bold text-gray-900 md:text-5xl md:leading-10">
                    Resources and insights
                </p>
                <div className="flex w-full items-end border-b border-gray-300 mt-7"></div>
                <div className='flex flex-wrap gap-x-16 pl-14'>
                    { posts.map((post) => (
                        <div key={ post.$id } className='w-1/4 py-4 px-3'>
                            <PostCard { ...post } />
                        </div>
                    )) }
                </div>
            </div> }
            
        </div>
    )
}
export default AllPost;