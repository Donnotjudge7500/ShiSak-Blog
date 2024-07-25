import React from 'react';
import configurationService from '../appwrite/configuration.js';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

function PostCard({
    $id,
    featuredImage,
    title,
}) {
    return (
        <div className="w-[280px] rounded-md min-h-[349.33px] border hover:scale-105 transition-all duration-500">
            <img
                src={ configurationService.getFilePreview(featuredImage) }
                alt={ title }
                className="h-[200px] w-full rounded-md object-cover shadow-sm"
            />

            <div className="p-4">
                <h1 className="text-lg font-semibold min-h-[56px]">{ title }</h1>
                <p className="mt-3 text-sm text-gray-600">
                </p>
                <Link to={ `/post/${$id}`}>
                    <button
                        type="button"
                        className="mt-4 w-full rounded-sm bg-black px-2.5 py-1 text-base font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Read
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default PostCard