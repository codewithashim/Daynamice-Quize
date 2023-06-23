'use client';
import Image from "next/image";
import Link from "next/link";
import QuizeLogo from "../../../Assects/QuizeLogo.png";

const Navbar = () => {

    return (
        <nav className="mainNav">
            <div className="">
                <div className="navLogo">
                    <Link href={"/"}>
                        <Image
                            src={QuizeLogo}
                            alt="Picture of the author"
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;