import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
const ErrorPage = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>router.push('/'), 3000)
    })
    return (
        <Layout>
            <div className="text-center">
                <h1 className="fs-3">
                    <b>404</b>{" "}
                    Sorry we couldn't find the page you were looking for
                </h1>
                <p className="lead">redirecting you to home in 3 seconds ...</p>
            </div>
        </Layout>
    )
}

export default ErrorPage
