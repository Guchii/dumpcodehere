import { useRouter } from 'next/router'
const Index = () => {
    const router = useRouter();
    return (
            <div className="text-center px-4 py-52 h-50 d-flex flex-column justify-content-center">
                <h1 className="display-5 fw-bold">Dump Code Here</h1>
                <p className="lead">
                    Share your text files with the world easily or find one
                    shared publicly by others.
                </p>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-success fw-bold px-5 py-2 me-2 shadow"
                    onClick={()=>router.push('/dump')}
                    >
                        Dump Now
                    </button>
                    <button className="btn btn-danger px-5 py-2 fw-bold shadow"
                    onClick={()=>router.push('/find')}
                    >
                        Find Stuff
                    </button>
                </div>
            </div>
    )
}

export default Index
