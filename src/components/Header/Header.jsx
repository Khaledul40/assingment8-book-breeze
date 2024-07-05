import { NavLink } from "react-router-dom";


const Header = () => {
   
    const links = <>
        <li className=""><NavLink to="/">Home</NavLink></li>
        <li className="mr-2"><NavLink to="/listed">Listed Books</NavLink></li>
        <li><NavLink to="/pages">Pages to Read</NavLink></li>
        <li><NavLink to="/pages">Blogs</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
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
                    {links}
                </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold font-sans">Book Breeze</a>
            </div>
            <div className="navbar-center hidden lg:flex font-sans">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn mr-4 text-white font-bold bg-green-500 px-7">Sign In</a>
                <a className="btn text-white font-bold bg-blue-300 px-7">Sign Up</a>
            </div>
            
        </div>
    );
};

export default Header;