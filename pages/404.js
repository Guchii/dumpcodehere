import { useEffect } from 'react'
import { useRouter } from 'next/router'
const ErrorPage = () => {
    const router = useRouter();
    useEffect(() => {
        // setTimeout(()=>router.push('/'), 5000)
    })
    return (
        <div className="text-center d-flex flex-column justify-content-center align-items-center">
            <div>
                <h1 className="fs-3">
                    <b>404</b>{" "}
                    Sorry we couldn't find the page you were looking for
                </h1>
                <p className="lead">redirecting you to home in 5 seconds ...</p>
            </div>
        </div>
    )
}

export default ErrorPage
