import { BsGithub } from 'react-icons/bs'
import Image from "next/image"
import LoveBadge from "../public/built-with-love.svg";
import styles from "./footer.module.scss"
const footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center text-light px-4 py-3">
            <a className={styles.footer__left} href="https://github.com/guchii/dumpcodehere">
                <span className="fw-bold fs-6">dump code here</span>
                <BsGithub className={styles.icon}/>
            </a>
            <Image src={LoveBadge} />
        </footer>
    )
}

export default footer
