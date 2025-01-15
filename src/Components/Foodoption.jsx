import React from "react";
import foodItem from "./Constants";

const dinOutItems = [
    {
        dineOut: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1690892117/a6e93fb04ce7c4e1b9543a3fe4e7b66a.jpg',
        dinName: 'The Empty Head',
        dinRating: '4.1',
        dinLoaction: 'Chinese . North Indian, Globsyn Crystal, Salt Lake, Kolkata', 
        dinPrice: '$2500 for two',
        dinDes: '4.5 km'
    },
    {
        dineOut: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1709449209/d8a6232867a48a572577da636fdab41b.jpg',
        dinName: 'QFC - Quality Fried Chicken',
        dinRating: '4.2',
        dinLoaction: 'Fast Food Kestopur, Kolakata', 
        dinPrice: '$400 for two',
        dinDes: '1.2 km'
    },
    {
        dineOut: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1675319520/70c0ab36f8d3f6032078c356aed2440a.jpg',
        dinName: 'Boho Amigo Cafe And Diner',
        dinRating: '4.3',
        dinLoaction: 'Continental Mexican, Salt Lake, Kolkata', 
        dinPrice: '$1000 for two',
        dinDes: '1.8 km'
    },

]

const Foodoption = () =>{
    return (
        <>
            <div className="container mx-auto food-option lg:px-24 py-24">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-900 ml-10">Order our best food options</div>
                    <div className="flex">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 h-9 w-9 bg-gray-100 text-gray-500 rounded-full p-2 cursor-pointer">
                    <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 h-9 w-9 bg-gray-300 rounded-full p-2 cursor-pointer mx-2">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                    </svg>
                    </div>
                </div>
                <div className="food-option-item my-6">
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                        {foodItem.map((data) => (
                            <div className=""><a href="" className=""><img src={data.imgUrl}></img> </a></div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between items-center mt-20">
                    <div className="text-2xl font-bold text-gray-900 ml-10">Shop groceries on Instamart</div>
                    <div className="flex">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 h-9 w-9 bg-gray-100 text-gray-500 rounded-full p-2 cursor-pointer">
                    <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 h-9 w-9 bg-gray-300 rounded-full p-2 cursor-pointer mx-2">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                    </svg>
                    </div>
                </div>
                <div className="food-option-item my-6">
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                        {foodItem.map((data) => (
                            <div className="px-4">
                                <a href="" className=""><img src={data.instaUrl}></img> </a>
                                <div className=" text-center text-xl pt-2 font-semibold text-gray-600">{data.instaName}</div>
                            </div>
                           
                        ))}
                    </div>
                </div>

                <div className="flex justify-between items-center mt-20">
                    <div className="text-2xl font-bold text-gray-900 ml-10">Discover best restaurants on Dineout</div>
                    <div className="flex">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 h-9 w-9 bg-gray-100 text-gray-500 rounded-full p-2 cursor-pointer">
                    <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 h-9 w-9 bg-gray-300 rounded-full p-2 cursor-pointer mx-2">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                    </svg>
                    </div>
                </div>

                <div className="food-option-item my-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        {dinOutItems.map((data) => (
                            <div className="mx-3 mt-4 relative rounded-xl border overflow-hidden">
                                <a href="" className=" ">
                                    <div className=" relative h-48 overflow-hidden"><img src={data.dineOut}></img>
                                    <div className="flex justify-between absolute p-2 bottom-0 pb-2 left-0  bg-gradient-to-t from-[#000000] to-[#dddddd2c]  w-full">
                                        <div className=" text-lg font-bold text-white">{data.dinName}</div>
                                        <div className="text-lg font-bold text-white">{data.dinRating}</div>
                                    </div>
                                    </div>
                                    <div className=" flex justify-between p-2">
                                        <div className=" text-sm text-gray-500 w-[70%]">{data.dinLoaction}</div>
                                        <div className=" text-sm text-gray-500 w-[30%] text-right">{data.dinPrice}<br/>{data.dinDes}</div>
                                    </div>
                                    <div className="  flex justify-between bg-green-700 rounded-lg px-3 py-2 mx-2 my-2">
                                        <div className="text-white font-bold ">Flat 40% off on pre-booking</div>
                                        <div className="text-white font-bold text-sm">+3 More</div>
                                    </div>
                                    <div className="bg-green-100 px-2 py-2 border-green-600 text-green-700 rounded-lg border m-2 "> Up to 10% off with bank offers</div>
                                </a>

                                
                            </div>
                           
                        ))}
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Foodoption;