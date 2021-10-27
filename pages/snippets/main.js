import React from 'react'
import Link from 'next/link'
import Layout from '../../components/layout'


const Main = ({ myWalls }) => {
    return (
        <Layout>
            <h1>All Snippets Here!!</h1>
            <Link href="/">
                <a>Back To Home</a>
            </Link>
        </Layout>
    )
}

export default Main
