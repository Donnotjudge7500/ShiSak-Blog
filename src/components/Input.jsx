import React from 'react'
import { forwardRef, useId } from 'react';

const Input = forwardRef(
    function Input({
        label,
        type = 'text',
        className = '',
        ...props
    }, ref) {
        const id = useId()
        return (
            <div>
                { label && (<label key={ id } className='text-base font-medium text-gray-900'>
                    { label }
                </label>) }
                <input type={ type }
                    ref={ ref }
                    className={`className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"${className}`}
                    { ...props }
                    id={id}
                />
            </div>
        )
    }
)

export default Input