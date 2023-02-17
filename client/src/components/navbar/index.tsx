import { useState } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const TITLE = "Users Management";
    const [dark , setDark] = useState(true);
    const [openMenu, setOpenMenu] = useState(false);
    const linkToImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydBphsLdspvTPZxL3tEqhwXorxUi55ygUuw&usqp=CAU"
    const handleClick = () => {
        document.getElementsByTagName("html")[0].classList.toggle("dark");
        setDark(!dark);
    };
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <nav className="bg-white mb-2 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <button className="flex items-center">
                    <img src={linkToImage} className="mr-3 h-6 w-9 rounded-full sm:h-9 sm:w-9" alt="React Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{TITLE}</span>
                </button>
                <button onClick={handleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd">
                        </path>
                    </svg>
                </button>
                <div className={`${openMenu ? "" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/users" className="block px-4 py-2 text-gray-900 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Users</Link>
                        </li>
                        <li>
                            <Link to="/users/create" className="block mx-10 px-4 py-2 text-gray-900 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Add User</Link>
                        </li>
                        <li>
                            <label htmlFor="checked-toggle" className="inline-flex relative items-center cursor-pointer">
                                <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" checked={dark} readOnly />
                                <div
                                    onClick={handleClick}
                                    className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                </div>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{dark? "dark": "light"}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;