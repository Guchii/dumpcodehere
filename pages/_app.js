import { useEffect } from "react"
import Layout from "../components/layout"
import "../components/main.scss"

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        //import bootstrap js on page reload.
        import('bootstrap/dist/js/bootstrap')
    }, [])
    return (<Layout><Component {...pageProps} /></Layout>)
}

export default App
