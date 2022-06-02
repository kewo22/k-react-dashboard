import Link from 'next/link'
import React from 'react'
import Nav from '../components/Nav'

export default function DefaultLayout({ children, title = "title", subtitle = "", to = "" }: any) {


    const titleOnly = () => {
        return <h1 className="title">{title}</h1>
    }

    const titleAndLink = () => {
        return (
            <div className='is-flex is-justify-content-space-between is-align-items-center mb-5'>
                <h1 className="title m-0">{title}</h1>
                <Link href={to}>
                    <a className=''>More Examples</a>
                </Link>
            </div>
        )
    }


    return (
        <div>
            {/* <Nav /> */}
            <main className='p-3'>

                {to ? titleAndLink() : titleOnly()}

                {subtitle && <h2 className="subtitle">{subtitle}</h2>}
                {children}
            </main>
        </div>
    )
}
