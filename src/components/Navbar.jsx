import Button from "./Button"
import Logo from "./Logo"

function Navbar() {
    return (
        <div className="flex items-center justify-between">
            <Logo />
            <div className="flex ml-10 items-center space-x-4 text-blue-950 text-lg">
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Gallery</h1>
                <h1>Contact us</h1>
            </div>
            <Button />
        </div>
    )
}

export default Navbar