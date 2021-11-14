import Head from 'next/head'
import Header from './header'
import Footer from "./footer"

const Layout = ({ children, title }) => {
    return (
        <div className="d-flex flex-column justify-content-between min-vh-100 bg-dark text-light mx-auto"
            style={{
                maxWidth: "1280px"
            }}
        >
            <Header />
            {children}
            <Footer />
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
