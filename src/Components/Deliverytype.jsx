import React from 'react'

const DeliverytypeObject = [
    {
        deImg: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png'
    }
]

const Deliverytype = () =>{
    return (
       <>
        <div className='delivery-type bg-orange-500'>
            <div className='container mx-auto grid grid-cols-2 lg:grid-cols-4  px-20 '>
                <div className='delivery-type-box w-auto h-[20rem] rounded cursor-pointer' >
                    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png' className='w-auto object-cover'></img>
                </div>
                <div className='delivery-type-box w-auto h-[20rem] rounded cursor-pointer' >
                    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png'></img>
                </div>
                <div className='delivery-type-box w-auto h-[20rem] rounded cursor-pointer' >
                    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png'></img>
                </div>
                <div className='delivery-type-box w-auto h-[20rem] rounded cursor-pointer' >
                    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png'></img>
                </div>
            </div>
        </div> 
       </>
    )
}

export default Deliverytype