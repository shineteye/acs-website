import Image from 'next/image'
import ACSLogo from '../assets/acs_logo-removebg-preview.png'

function Logo() {
    return (
        <div className="flex flex-row items-center space-x-2">
            <Image src={ACSLogo} alt="ACS logo" width={40} height={40} />
            <h1 className="text-2xl font-bold text-blue-950">ACS</h1>
        </div>
    )
}

export default Logo
