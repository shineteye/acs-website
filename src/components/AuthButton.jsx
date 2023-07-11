import Image from "next/image"
import Link from "next/link"
import UserLogo from '../assets/person.svg'

function AuthButton() {
    return (
        <div className="flex items-center px-5 py-3 ml-5 space-x-4 font-bold bg-yellow-400 rounded-full shadow-md text-blue-950">
            <div className="flex items-center justify-center bg-white rounded-full w-9 h-9">
                <Image src={UserLogo} width={30} height={30} alt="user" />
            </div>
            <div className="flex flex-row space-x-3">
                <Link href={"/login"} className="cursor-pointer">Log in</Link>
                <h1>|</h1>
                <Link href={"/signup"} className="cursor-pointer">Sign up</Link>
            </div>
        </div>
    )
}

export default AuthButton