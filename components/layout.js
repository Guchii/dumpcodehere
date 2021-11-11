import { HiMenuAlt3 } from 'react-icons/hi'
import { FaKissWinkHeart } from 'react-icons/fa'
import Link from 'next/link'

const Layout = ({ children }) => {
    return (
        <div className="d-flex flex-column justify-content-between min-vh-100 bg-dark text-light mx-auto"
        style={{
            maxWidth: "1280px"
        }}
        >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
                    <div className="container-fluid">
                        <Link href="/">
                            <a className="navbar-brand fw-bold">
                                DCH
                            </a>
                        </Link>
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
                                <li className="nav-item">
                                    <Link href="/dump">
                                        <a className="nav-link">
                                            Dump
                                        </a>
                                    </Link>

                                </li>
                                <li className="nav-item">
                                    <Link href="/find">
                                        <a className="nav-link">
                                            Find
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {children}
                <footer className="d-flex flex-wrap justify-content-between align-items-center text-light px-4 py-3">
                    <span className="fw-bold">dump code here</span>
                    <span className="fw-bold">
                        made with <FaKissWinkHeart />
                    </span>
                </footer>
            </div>
    )
}

export default Layout
