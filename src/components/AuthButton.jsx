import Image from "next/image"
import Link from "next/link"
import UserLogo from '../assets/person.svg'

function AuthButton() {
    return (
        <div className="flex items-center px-6 py-4 ml-5 space-x-4 font-bold rounded-full shadow-md bg-yellow text-blue-950">
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                <Image src={UserLogo} width={30} height={30} alt="user" />
            </div>
            <div className="flex flex-row space-x-3 text-lg">
                <Link href={"/login"} className="cursor-pointer">Log in</Link>
                <h1>|</h1>
                <Link href={"/signup"} className="cursor-pointer">Sign up</Link>
            </div>
        </div>
    )
}

export default AuthButton