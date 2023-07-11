import Link from "next/link"
import AuthButton from "./AuthButton"
import Logo from "./Logo"

function Navbar() {
    return (
        <div className="flex items-center justify-between px-24 py-5">
            <Logo />
            <div className="flex items-center ml-10 space-x-4 text-lg text-blue-950">
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/gallery"}>Gallery</Link>
                <Link href={"/contact_us"}>Contact us</Link>
            </div>
            <AuthButton />
        </div>
    )
}

export default Navbar