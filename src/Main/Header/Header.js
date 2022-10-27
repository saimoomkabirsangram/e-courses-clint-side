import React from "react";
import { Link } from "react-router-dom";



const Header = () =>{
    return(
        <div>
            <header className="p-4 bg-gray-400 text-dark">
	<div className="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<img className="w-44" src="icon.png" alt="" />
		</a>
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<Link rel="noopener noreferrer" to="/home" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">HOME</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="/courses" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">COURSES</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="/blog" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">BLOG</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="/faq" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">FAQ</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="/logIn" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Log In</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="/register" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Register</Link>
			</li>
		</ul>
		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	    </div>
        </header>
    </div>
    )
}

export default Header;