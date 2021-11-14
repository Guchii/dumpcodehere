import classNames from "classnames"
import Link from "next/link"
import { useRouter } from "next/router";
const navlink = ({ href, text }) => {
    const router = useRouter();
    const linkClassNames = classNames("nav-link", { "active": router.pathname === (href) });
    return (
        <Link href={href}>
            <a className={linkClassNames}>
                {text}
            </a>
        </Link>
    )
}

export default navlink
