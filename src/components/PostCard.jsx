import React from 'react';
import { LoadComponent } from './Index.js';
import { Link } from 'react-router-dom';


function PostCard({
    $id,
    featuredImage,
    title,
}) {

    return (
        <div className="w-[280px] rounded-md h-fit md:min-h-[349.33px] sm:min-h-[349.33px] border-2  bg-zinc-100 md:bg-transparent md:border hover:scale-105 transition-all duration-500">
            <LoadComponent featuredImage={ featuredImage } title={ title } />

            <div className="p-4">
                <h1 className="text-lg font-bold font-Inter sm:font-semibold min-h-14">{ title }</h1>
                <p className="mt-3 text-sm text-gray-600">
                </p>
                <Link to={ `/post/${$id}` }>
                    <button
                        type="button"
                        className="sm:block mt-4 w-full rounded-sm bg-black px-2.5 py-1 text-base font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Read
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default PostCard