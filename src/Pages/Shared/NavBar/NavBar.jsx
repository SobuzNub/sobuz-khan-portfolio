import { Link } from 'react-router-dom';
import image from '../../../assets/IMG_20240503_232900_758.jpg'
import { FaDownload } from "react-icons/fa";

const NavBar = () => {
    const navLinks = <>
        <div className='font-semibold flex text-black text-xl ml-4'>
            <li><a>ABOUT</a></li>
            <li><a>PROJECTS</a></li>
            <li><a>SKILL</a></li>
            <li><a>CONTACT</a></li>
        </div>
    </>
    return (
        <div className="navbar p-6 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <div className="w-[86px] ml-2">
                    <img className="rounded-full border border-black"
                        alt="Profile"
                        src={image} />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='https://drive.google.com/file/d/1-C-DULlYqKgNMPPup_kcq40lsAilan9T/view?usp=sharing' className="btn text-gray-500 bg-slate-900 hover:bg-slate-950">Resume <FaDownload></FaDownload></Link>
            </div>
        </div>
    );
};

export default NavBar;