import Image from "next/image"
import UserLogo from '../assets/person.svg'

function Button() {
    return (
        <div className="flex space-x-4 items-center px-5 py-3 ml-5 bg-yellow-400 text-blue-950 font-bold rounded-full shadow-md">
            <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
                <Image src={UserLogo} width={30} height={30} alt="user" />
            </div>
            <div className="flex flex-row space-x-3">
                <h1 className="cursor-pointer">Log in</h1>
                <h1>|</h1>
                <h1 className="cursor-pointer">Sign up</h1>
            </div>
        </div>
    )
}

export default Button