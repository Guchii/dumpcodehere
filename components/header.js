import { HiMenuAlt3 } from 'react-icons/hi'
import Navlink from './helpers/navlink'
const header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold">
                    DCH
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <HiMenuAlt3 />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Navlink href="/" text="Home" />
                        <Navlink href="/dump" text="Dump" />
                        <Navlink href="/find" text="Find" />
                        <Navlink href="/useapi" text="API" />
                        <Navlink href="/about" text="About" />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default header
