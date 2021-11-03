import { useEffect } from "react"
import "../components/main.scss"

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        //import bootstrap js on page reload.
        import('bootstrap/dist/js/bootstrap')
    }, [])
    return <Component {...pageProps} />
}

export default App
