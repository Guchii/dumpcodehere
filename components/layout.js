import { FaKissWinkHeart } from 'react-icons/fa'
import Head from 'next/head'
import Header from './header'
const Layout = ({ children, title }) => {
    return (
        <div className="d-flex flex-column justify-content-between min-vh-100 bg-dark text-light mx-auto"
        style={{
            maxWidth: "1280px"
        }}
        >
                <Header/>
                {children}
                <footer className="d-flex flex-wrap justify-content-between align-items-center text-light px-4 py-3">
                    <span className="fw-bold">dump code here</span>
                    <span className="fw-bold">
                        made with <FaKissWinkHeart />
                    </span>
                </footer>
                <Head>
                    <title>{title}</title>
                </Head>
            </div>
    )
}
Layout.defaultProps = {
    title: "DumpCodeHere",
}
export default Layout
