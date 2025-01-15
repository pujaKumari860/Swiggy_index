import React from "react";

const Herobanner = () => {
    return(
        <>
            <div className="hero-banner bg-orange-500 ">
                <div className="relative text-center">
                    <div className="container mx-auto pt-14 pb-9">
                        <h1 className="text-5xl text-white lg:w-[60%]  mx-auto font-bold ">Order food & groceries. Discover best restaurants. Swiggy it!</h1>
                    
                    <div className="search flex items-center lg:w-2/3 mx-auto mt-8 justify-center">
                        <div className="search-location bg-white flex px-5 py-3 rounded-lg w-auto w-full lg:w-[40%] items-center justify-between ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 23" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M10.115 21.8122C12.4772 19.4062 17.7886 13.4751 17.7886 8.78883C17.7886 3.79647 13.9976 0 9.00526 0C4.0129 0 0.210938 3.79647 0.210938 8.78883C0.210938 13.4755 5.52998 19.4073 7.89476 21.8129C8.51149 22.4403 9.49871 22.44 10.115 21.8122ZM8.99988 12.7888C11.4269 12.7888 13.3943 10.8214 13.3943 8.39441C13.3943 5.96745 11.4269 4 8.99988 4C6.57292 4 4.60547 5.96745 4.60547 8.39441C4.60547 10.8214 6.57292 12.7888 8.99988 12.7888Z" fill="#FF5200"></path></svg>
                            <input type="text" placeholder="Enter your delivery location..." className="font-semibold size-full pl-3 text-[#999] focus:outline-none focus:border-sky-500 " name=" " id="" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-10">
  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
                        </div>
                        <div className="search-rest bg-white flex px-5 py-5 rounded-lg w-auto items-center  w-full lg:w-[60%] ml-5">
                            <input type="text" placeholder="Search for Restaurant, item or more" className="font-semibold size-full pr-3 text-[#999] focus:outline-none focus:border-sky-500" name="" id="" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#999" className="size-6" >
  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
</svg>

                        </div>
                        <div className="food-category">
                            
                        </div>
                     </div>

                    <div className="bann-img1 absolute left-0 top-0 lg:w-64 md:w-28 sm:w-20  " >
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                    </div> 
                    <div className="bann-img2 absolute right-0 top-0 lg:w-64 md:w-28 sm:w-20 "  >
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                    </div>
                    </div>  
                </div>
            </div> 
        </>
            )
}
export default Herobanner