import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

export const getStaticProps = async () => {
    try {
        const res = await fetch(
            'https://wallhaven.cc/api/v1/search/?q=linux&resolutions=1920x1080'
        )
        const data = await res.json()
        return {
            props: {
                myWalls: data,
            },
        }
    } catch (err) {
        console.log(err)
    }
}

const Main = ({ myWalls }) => {
    return (
        <Layout>
            <head>
                <title>Wallpapers</title>
            </head>
            <h2>Linux Wallpapers here</h2>
            {myWalls.data.map((wall) => (
                <Link href={wall.path}>
                    <a>
                        <img
                            src={wall.thumbs.large}
                            key={wall.id}
                            height={200}
                            width={(16 / 9) * 200}
                        />
                    </a>
                </Link>
            ))}
            <br />
            <Link href="/">
                <a>Back To Home</a>
            </Link>
        </Layout>
    )
}

export default Main
