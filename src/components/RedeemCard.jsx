import React, { useState } from 'react'
import logo from "./images/cd_logo.png";

const RedeemCard = ({ data }) => {

    const [Ccode , setCcode]= useState("XXXXXXXXXX")
    return (
        <div className="bg-[#181e24] h-[100vh] w-screen overflow-x-hidden flex justify-center  items-center mt-[30px] ">
            <div className="bg-[#2a323c] relative md:w-3/4 w-full flex md:flex-row flex-col py-10 text-white  rounded-md  ">
                   
                   <div className='absolute transform translate-y-32 w-full flex items-center justify-between'>
                    <div className='bg-[#181e24] h-16 w-16 rounded-full -translate-x-8'></div>
                    <div className='bg-[#181e24] h-16 w-16 rounded-full translate-x-8'></div>
                   </div>
               
                <div className='mx-10 md:w-1/2 w-full ml-20 flex items-start border-r-2 justify-center flex-col'>
                    <div className="flex mt-5 h-12  ">
                        <img
                            src={logo}
                            alt="bg"
                            className="object-cover h-10 w-14  rounded-md"
                        />
                        <div>
                            <h1 className="font-bold">Offer {data.offer} off</h1>
                            <h1 className=" pl-2text-sm">on {data.brandname}</h1>
                        </div>
                    </div>
                    <hr className='m-2' />
                    <h1 className="font-medium mt-4">Terms and conditions</h1>
                    <ol className=" mt-6 mr-3 text-xl">
                        <li>1. Offer Valid on offcial sites only</li>
                        <li>2. This offer cannot be clubbed with any other offer </li>
                        <li>3. Minimum spend {data.minimumAmt}Rs.</li>
                        <li>4. Validity {data.validity}</li>
                    </ol>
                </div>
                <div className='  h-full md:w-1/2 w-full flex flex-col items-center justify-center gap-y-4 '>
                    <h1 className='text-center text-3xl  '>Code</h1>
                    <input disabled type="text" value={Ccode} className='w-1/2 text-center bg-[#181e24]' />
                    <h1 className='text-center text-2xl  '>Price:  {data.price}rs </h1>
                    <button className="w-1/2 mb-6 h-10 text-center font-semibold text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700   ">
          Pay Now
        </button>


                </div>
            </div>








        </div>
    )
}

export default RedeemCard