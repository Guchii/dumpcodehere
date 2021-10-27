import React from 'react'
import styles from "./layout.module.css"

const Layout = ({ children }) => {
    return (
        <div>
        <span>This will show up on every page</span>
            {children}
            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                        Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                        Helvetica Neue, sans-serif;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    )
}

export default Layout
