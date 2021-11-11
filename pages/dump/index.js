import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineReload } from 'react-icons/ai'

const Dump = () => {
    useEffect(() => {
        setSlugToField();
    }, [])
    const [slug, setSlug] = useState("0000");
    const infoRef = useRef(null)
    const codeRef = useRef(null)
    const router = useRouter()
    async function setSlugToField() {
        const res = fetch('/api/getSlug');
        const data = await (await res).json();
        const slug = data.randomSlug;
        setSlug(slug);
    }
    async function dumpHandler() {
        if (infoRef.current.value !== "" && codeRef.current.value !== "") {
            await fetch('/api/create', {
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
            // setSlugToField();
            // infoRef.current.value = "";
            // codeRef.current.value = "";
            router.push(`/${slug}`);
        } else {
            // do something on null input
            console.log("Null input")
        }


    }
    return (
        <div className="d-flex flex-column p-5 mx-1 mx-lg-5">
            <div className="d-inline-flex justify-content-between pe-1 mb-3" style={{ width: "150px" }}>
                <div>
                    <span className="fs-6 mb-5">slug: </span>
                    <span className="fs-3 fw-bolder">{slug}</span>
                </div>

                <span className="link-light mt-2" onClick={setSlugToField}><AiOutlineReload /></span>
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
export default Dump
