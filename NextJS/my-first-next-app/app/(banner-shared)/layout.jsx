import React from 'react'

export default function LayoutShared({ children }) {
    return (
        <div>
            <marquee style={{ color: "#1b7161", backgroundColor: "#fff123" }}>
                Esto es una web para practicar NodeJS compartiendo layout entre "about" y "posts"
            </marquee>
            {children}
        </div>
    )
}
