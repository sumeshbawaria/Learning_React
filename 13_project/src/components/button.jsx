import React from 'react'

export default function Button({
    children,
    type = 'button',
    bgColor = 'text-white',
    className = '',
    ...props}
) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${className}`}{...props}>
        {children}
    </button>
  );
}