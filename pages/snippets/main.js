import React from 'react'
import NextLink from 'next/link'
import Layout from '../../components/layout'

const Main = () => {
    return (
        <Layout>
            <Text h1>All Snippets Here!!</Text>
            <NextLink href="/">
                <Link block>Back To Home</Link>
            </NextLink>
        </Layout>
    )
}

export default Main
