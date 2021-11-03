import React from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { FaKissWinkHeart } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Layout = ({ children }) => {
    const router = useRouter()
    return (
        <div className="d-flex flex-column justify-content-between min-vh-100 bg-dark text-light">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow p-4">
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
            <footer className="d-flex flex-wrap justify-content-between align-items-center text-light border-top px-4 pt-3">
                <p className="fw-bold">dump code here</p>
                <p className="fw-bold">
                    made with <FaKissWinkHeart />
                </p>
            </footer>
        </div>
    )
}

export default Layout
