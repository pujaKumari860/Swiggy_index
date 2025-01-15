import React from "react";
import Logo from "../../src/brand-logo.png";
import Profiles from "./Profiles.jsx";


const Header = () => {
    return(
        <>
        <header className="bg-orange-500 py-8">
            <div className="container mx-auto px-4">
                <div className="navbar flex items-center justify-between">
                    <div className="brand-logo lg:ml-20 flex items-center">
                        <img src={Logo} alt="" className="w-auto h-12" />
                    </div>
                    <div className="page-menu  flex items-center">
                        <ul className="flex justify-center items-center">
                            <li className="mx-4"><a className="text-white font-bold hidden lg:block" href="" target="_blank" rel="noopener noreferrer">Swiggy Corporate</a></li>
                            <li className="mx-4"><a className="text-white font-bold hidden lg:block" href="" target="_blank" rel="noopener noreferrer">Parter with us</a></li>
                        </ul>
                        <div className="get-app rounded-lg border border-white p-3 mx-10">
                            <a className="flex items-center text-white font-bold" href="">Get the App <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5" strokeWidth={3}>
  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
</svg>
                            </a>
                        </div>
                        <div className="profile lg:mr-20">
                           <Profiles/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header