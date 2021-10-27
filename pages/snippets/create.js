import React from 'react'
import Link from 'next/link'
import Layout from '../../components/layout'

const Create = () => {
    return (
        <Layout>
            <h1 className="header">Create Code Snippets</h1>
            <form action="/" method="post" className="niceForm">
                <input
                    type="Label"
                    className="inputBox"
                    placeholder="Enter Statement/Question related to your code"
                    name="statement"
                    required
                />
                <br />
                <textarea
                    name="code"
                    id="codeBox"
                    placeholder="Paste your code here"
                    cols="30"
                    rows="10"
                    required
                />
                <br />
                <button type="submit">Create Snippet</button>
            </form>
            <Link href="/">
                <a>Back To Home</a>
            </Link>
            <style jsx>{`
                .inputBox {
                    width: 40%;
                }

                #codeBox {
                    width: 40%;
                    max-width: 40%;
                    max-height: 30%;
                    margin-top: 20px;
                }
                form button {
                    margin: 20px 0;
                }
                .niceForm {
                    padding: 20px;
                }
                .header {
                    margin: 0;
                    line-height: 1.15;
                    font-size: 4rem;
                }
            `}</style>
        </Layout>
    )
}

export default Create
