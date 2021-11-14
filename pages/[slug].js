import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { Snippet } from "../models/Snippet";
import { AiFillCopy, AiOutlineLink } from "react-icons/ai"
import connect from "../utils/db"
import copy from "clipboard-copy"
import toast, { Toaster } from "react-hot-toast"
const showSnippet = ({ found=null, info=null, code=null }) => {
    const router = useRouter()
    useEffect(() => {
        if (!found) {
            router.push("/404")
        }
    }, [])
    return (
        <>
        <Toaster/>
            <div className="d-flex flex-column p-5 mx-1 mx-lg-5">
                <div className="d-inline-flex flex-row justify-content-between mb-3">
                    <span className="fs-4 fw-bold">{info}</span>
                    <div className="btn-group">
                        <a className="btn btn-lg btn-success" onClick={() =>{ 
                            toast.success("Link copied to clipboard", {duration: 2000});
                            copy(window.location)}}><AiOutlineLink /></a>
                        <a className="btn btn-lg btn-success" onClick={() => {
                            toast.success("Code copied to clipboard", {duration: 2000});
                            copy(code)}}><AiFillCopy /></a>
                    </div>
                </div>
                <textarea className="fs-4 bg-dark text-light font-monospace" disabled rows={10} style={{ resize: "none" }} value={code}/>
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
