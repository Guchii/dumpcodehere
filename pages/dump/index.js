import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineReload } from 'react-icons/ai'
import { generate } from "randomstring";
import toast, { Toaster } from "react-hot-toast"
const Dump = () => {
    useEffect(() => {
        setSlug(getSlug())
    }, [])
    const [slug, setSlug] = useState("0000");
    const infoRef = useRef(null)
    const codeRef = useRef(null)
    const router = useRouter()
    async function dumpHandler() {
        if (infoRef.current.value !== "" && codeRef.current.value !== "") {
            const prom = fetch('/api/create', {
                method: "POST",
                body: JSON.stringify({
                    slug,
                    info: infoRef.current.value,
                    code: codeRef.current.value
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            await toast.promise(prom, {
                loading: 'Dumping your Code',
                success: 'Successfull',
                error: 'Error Occured while Dumping your Code',
            });
            router.push(`/${slug}`);
        } else {
            // do something on null input
            toast.error("Please Enter All of the Required Inputs.", {
                duration: 2000,
            })
        }
    }
    return (
        <div className="d-flex flex-column p-5 mx-1 mx-lg-5">
            <Toaster />
            <div className="d-inline-flex justify-content-between pe-1 mb-3" style={{ width: "150px" }}>
                <div>
                    {/* <span className="fs-6 mb-5">slug: </span> */}
                    <span className="fs-3 fw-bolder">{slug}</span>
                </div>

                <span className="link-light mt-2" onClick={() => setSlug(getSlug())}><AiOutlineReload /></span>
            </div>

            <div className="mb-3">
                <label className="form-label fw-bold" htmlFor="info">Info</label>
                <input
                    type="text"
                    id="info"
                    placeholder="Binary Search Tree..."
                    className="form-control"
                    ref={infoRef}
                />
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold" htmlFor="text">Text/Code</label>
                <textarea
                    type="textarea"
                    id="text"
                    placeholder="#include <iostream>..."
                    className="form-control font-monospace"
                    style={{
                        height: '200px',
                        resize: 'none',
                    }}
                    ref={codeRef}
                />
            </div>
            <button
                className="btn btn-success btn-lg fw-bold shadow"
                onClick={dumpHandler}
            >
                Dump
            </button>
        </div>
    )
}

function getSlug() {
    const randomSlug = generate({
        length: 4,
        charset: 'alphanumeric'
    });
    return randomSlug;
}

export default Dump
