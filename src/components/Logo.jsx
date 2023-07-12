import Image from 'next/image'
import ACSLogo from '../assets/acs_logo-removebg-preview.png'

function Logo() {
    return (
        <div className="flex flex-row items-center space-x-4">
            <Image src={ACSLogo} alt="ACS logo" width={50} height={50} />
            <h1 className="text-2xl font-bold text-darkBlue">ACS</h1>
        </div>
    )
}

export default Logo
