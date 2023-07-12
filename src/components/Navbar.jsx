import Link from "next/link"
import AuthButton from "./AuthButton"
import Logo from "./Logo"

function Navbar() {
    return (
        <div className="flex items-center justify-between py-5 mx-24 my-5">
            <Logo />
            <div className="flex items-center ml-10 space-x-4 text-xl text-darkBlue">
                <Link href={"/"}>Home</Link>
                <Link href={"/courses"}>Courses</Link>
                <Link href={"/gallery"}>Gallery</Link>
                <Link href={"/about"}>About us</Link>
                <Link href={"/contact_us"}>Contact us</Link>
            </div>
            <AuthButton />
        </div>
    )
}

export default Navbar