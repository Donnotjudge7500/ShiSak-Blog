import React from 'react'

function Button({
    children,
    type = 'text',
    bgColor = 'bg-blue-600',
    className = '',
    textColor = 'text-white',
    ...props
}) {
    return (
        <button className={`${className} ${bgColor}  ${textColor}`} {...props}>
            {children}
        </button>
    )
}

export default Button