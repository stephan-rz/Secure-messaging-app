import { Button } from "@nextui-org/react";
import MaxWidthWrapper from "./MaxWidthWrapper"
import Link from "next/link";

const NavBar = () => {

    return (
        
            <header>
                <MaxWidthWrapper>
                    <nav className="flex justify-between items-center py-4">
                        <div>
                            <h1 className="text-3xl font-bold">WP Vulnerability Scanner</h1>
                        </div>
                        <div>
                            <ul className="flex space-x-4">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-2">
                            <Button as={Link} href="/login" color="primary">Login</Button>
                            <Button as={Link} href="/signup" color="primary" variant="ghost">Register</Button>

                        </div>
                    </nav>
                </MaxWidthWrapper>
            </header>
        
    )
}

export default NavBar;