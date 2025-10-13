import React from 'react'
import Nav from '../components/Nav'
import dishImg from '../assets/images/eggs.png'

function CheckOut() {
  return (
    <>
      <Nav />
      <section className='relative overflow-auto scrollbar-hide scroll-smooth  xl:px-18 max-xl:px-8  py-12 flex flex-col justify-center gap-8 max-sm:gap-5 mb-30 '>

        <h1 className='playfair-display-400 text-center leading-none text-oliv-07 max-lg:text-[50px] max-sm:text-[60px] text-[60px]'>
          Checkout
        </h1>

        <p className='playfair-display-400 font-bold text-3xl text-oliv-07 '>
          Review your order
        </p>

        <div className=' flex items-start flex-row gap-3 max-lg:flex-col-reverse '>

          <div className='flex flex-col justify-center items-start gap-4  w-2/3'>
            <div className='flex flex-col gap-4 w-full'>

              <div className='flex flex-col gap-3 py-5 px-5 border-2 border-[#DBDFD0] rounded-2xl hover:bg-bg-gray transition duration-200 ease-in-out '>

                <p className='text-rouge-brick font-bold text-[22px] dm-sans-ver2'>
                  Created at: Wednesday, October 22
                </p>
                <div className='flex flex-row justify-start items-center gap-6 '>

                  <img src={dishImg} alt="dish img" width={170} />

                  <div className='flex flex-col gap-3 justify-center items-start'>
                    <p className='text-[21px] dm-sans-ver2 font-semibold text-oliv-07 tracking-wide mt-2'>
                      Fried Eggs
                    </p>

                    <p className='text-rouge-brick font-semibold text-[18px] dm-sans-ver2'>
                      $9.99
                    </p>

                    <div className='flex flex-row items-center'>
                      <span>
                        Quantity: <span> 1 </span>
                      </span>

                      <span className='text-rouge-brick ml-4 cursor-pointer hover:opacity-55 transition duration-200 ease-in-out'>
                        Update
                      </span>

                      <span className='text-rouge-brick ml-4 cursor-pointer hover:opacity-55 transition duration-200 ease-in-out'>
                        Delete
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-4 w-full'>

              <div className='flex flex-col gap-4 py-4 px-5 border-2 border-[#DBDFD0] rounded-2xl hover:bg-bg-gray transition duration-200 ease-in-out '>

                <p className='text-rouge-brick font-bold text-[22px] dm-sans-ver2'>
                  Created at: Wednesday, October 22
                </p>
                <div className='flex flex-row justify-start items-center gap-6 '>

                  <img src={dishImg} alt="dish img" width={190} />

                  <div className='flex flex-col gap-3 justify-center items-start'>
                    <p className='text-[21px] dm-sans-ver2 font-semibold text-oliv-07 tracking-wide mt-2'>
                      Fried Eggs
                    </p>

                    <p className='text-rouge-brick font-semibold text-[18px] dm-sans-ver2'>
                      $9.99
                    </p>

                    <div className='flex flex-row items-center'>
                      <span>
                        Quantity: <span> 1 </span>
                      </span>

                      <span className='text-rouge-brick ml-4 cursor-pointer hover:opacity-55 transition duration-200 ease-in-out'>
                        Update
                      </span>

                      <span className='text-rouge-brick ml-4 cursor-pointer hover:opacity-55 transition duration-200 ease-in-out'>
                        Delete
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='flex flex-col justify-center items-center gap-5 py-8 px-5 border-2 border-[#DBDFD0] rounded-2xl bg-bg-gray transition duration-200 ease-in-out w-1/3'>

            <div className='playfair-display-400 font-bold text-2xl text-oliv-07 '>
              Payment Summary
            </div>

            <div className='flex flex-row justify-between w-full'>
              <div>Items (3):</div>
              <div>$189.87</div>
            </div>

            <div class="border-t w-full border-gray-300 my-1"></div>

            <div className='flex flex-row justify-between w-full text-rouge-brick font-bold text-[18px] dm-sans-ver2 mt-1'>
              <div>Order total:</div>
              <div>$189.87</div>
            </div>

            <button className='bg-rouge-brick text-white  px-17 py-2  active:opacity-90 text-[15px] hover:opacity-70 font-bold rounded-4xl transition duration-200 ease-in-out cursor-pointer mt-1 '>
              Place your order
            </button>
          </div>

        </div>


      </section>
    </>

  )
}

export default CheckOut