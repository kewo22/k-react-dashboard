import React from 'react'
import Nav from '../components/Nav'

export default function DefaultLayout({ children, title = "title", subtitle = "" }: any) {
    return (
        <div>
            <Nav />
            <main>
                <h1 className="title">{title}</h1>
                {subtitle && <h2 className="subtitle">{subtitle}</h2>}
                {children}
            </main>
        </div>
    )
}
