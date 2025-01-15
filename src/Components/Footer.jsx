import React from "react";
import foLogo from "../../src/footerlogo.png";

const Footer = () => {
    return (
        <>
        <div className="py-10  bg-gray-200">
            <div className="container mx-auto ">
                <div className="grid grid-cols-5 px-28">
                    <div className="">
                    <img src={foLogo}></img>
                        <p className="mt-3">@2025 Swiggy Limited</p>
                    </div>
                    <div className="">
                        <p className="font-bold text-xl mb-3">Company</p>
                        <ul>
                            <li className="py-1"><a href="">About Us </a> </li>
                            <li className="py-1"><a href="">Swiggy Coporate </a></li>
                            <li className="py-1"><a href="">Carrer</a></li>
                            <li className="py-1"><a href="">Team </a></li>
                            <li className="py-1"><a href="">Swiggy Dineout </a></li>
                        </ul>
                    </div>
                    <div className="">
                        <p className="font-bold text-xl mb-3">Contact Us</p>
                        <ul>
                            <li className="py-1"><a href="">Help & Support </a> </li>
                            <li className="py-1"><a href="">Partner With Us </a></li>
                            <li className="py-1"><a href="">Ride With Us</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <p className="font-bold text-xl mb-3">Legal</p>
                        <ul>
                            <li className="py-1"><a href="">Terms & Condition </a> </li>
                            <li className="py-1"><a href="">Cookie Policy </a></li>
                            <li className="py-1"><a href="">Privacy Policy</a></li>
                        </ul>
                        
                    </div>
                    <div className="">
                        <p className="font-bold text-xl mb-3">Available in</p>
                        <ul>
                            <li className="py-1"><a href="">Bangalore </a> </li>
                            <li className="py-1"><a href="">Mumbai </a></li>
                            <li className="py-1"><a href="">Hyderabad</a></li>
                            <li className="py-1"><a href="">Delhi </a></li>
                            <li className="py-1"><a href="">Kolkata</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;