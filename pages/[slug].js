import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { Snippet } from "../models/Snippet";
import connect from "../utils/db"

const showSnippet = ({ found, info, code }) => {
    const router = useRouter()
    useEffect(() => {
        if (!found) {
            router.push("/404")
        }
    }, [])
    return (
        <>
            <div className="d-flex flex-column p-5 mx-1 mx-lg-5">
                <span className="fs-4 fw-bold mb-3">{info}</span>
                <textarea className="fs-4 bg-dark text-light font-monospace" disabled rows={10} style={{ resize: "none" }}>{code}</textarea>
            </div>
        </>
    )
}


export const getServerSideProps = async (context) => {
    await connect();
    const slug = context.params.slug;
    const snippetObject = await Snippet.findOne({ slug });
    let found = (snippetObject) ? true : false;
    return {
        props: {
            found,
            code: (snippetObject) ? snippetObject.code : null,
            info: (snippetObject) ? snippetObject.info : null
        }
    }
}

export default showSnippet
