import React, { Suspense } from 'react';
import configurationService from '../../appwrite/configuration.js';
import LazyLoad from 'react-lazyload';


function LoadComponent({
    featuredImage,
    title
}) {
    return (
        <Suspense fallback={<div className='text-sm text-black'>Loading...</div>}>
            <LazyLoad>
                <img
                    src={ configurationService.getFilePreview(featuredImage) }
                    alt={ title }
                    className="h-[200px] w-full rounded-md object-cover shadow-sm"
                />
            </LazyLoad>
        </Suspense>
    )
}

export default LoadComponent; 