import React from 'react'
import Nav from '../components/Nav'
import dishImg from '../assets/images/eggs.png'


function Orders({cart}) {
  return (
    <>
      <Nav cart={cart}/>
      <section className='relative overflow-auto scrollbar-hide scroll-smooth  xl:px-60 max-xl:px-8  py-12 flex flex-col justify-center gap-8 max-sm:gap-15  '>

        <h1 className='playfair-display-400 text-center leading-none text-oliv-07 max-lg:text-[50px] max-sm:text-[60px] text-[60px]'>
          Orders
        </h1>

        <p className='playfair-display-400 font-bold text-3xl text-oliv-07 mb-0 '>
          Your Orders
        </p>

        <div className='flex flex-col justify-center items-start gap-12'>

          <div className='flex flex-col gap-4 py-6 px-7 border-2 border-[#DBDFD0] rounded-2xl w-full '>

            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-row justify-start items-center gap-6'>

                <div className='flex flex-col gap-1'>
                  <div className='font-bold'>Order Placed:</div>
                  <div>October 13</div>
                </div>

                <div className='flex flex-col gap-1'>
                  <div className='font-bold'>Total:</div>
                  <div>$54.88</div>
                </div>
              </div>

              <div className='flex flex-col gap-1'>
                <div className='font-bold'>Order ID:</div>
                <div>6dfde1b4-0917-58dc-cf19-339e9b95da46</div>
              </div>

            </div>

            <div className="border-t border-1 border-[#DBDFD0] my-1 -mx-7" />

            <div className='flex flex-col gap-13 justify-center items-start w-full py-7'>

              <div className='flex flex-row justify-start items-center gap-5 w-full'>
                <img src={dishImg} alt="dish img"
                  width={170} />

                <div className='flex flex-col justify-center items-start dm-sans-ver2 gap-2'>
                  <p className='text-[21px]  font-semibold'>
                    Fried Eggs
                  </p>
                  <p>Arriving on: October 22</p>
                  <p>Quantity: 2</p>

                  <button className='bg-rouge-brick text-white px-9 py-1.5  active:opacity-90 text-[14px] hover:opacity-70 font-bold rounded-3xl transition duration-200 ease-in-out cursor-pointer shadow-md shadow-rouge-brick/30'>
                    Add Dish
                  </button>
                </div>
              </div>

              <div className='flex flex-row justify-start items-center gap-5 w-full'>
                <img src={dishImg} alt="dish img"
                  width={170} />

                <div className='flex flex-col justify-center items-start dm-sans-ver2 gap-2'>
                  <p className='text-[21px]  font-semibold'>
                    Fried Eggs
                  </p>
                  <p>Arriving on: October 22</p>
                  <p>Quantity: 2</p>

                  <button className='bg-rouge-brick text-white px-9 py-1.5  active:opacity-90 text-[14px] hover:opacity-70 font-bold rounded-3xl transition duration-200 ease-in-out cursor-pointer shadow-md shadow-rouge-brick/30'>
                    Add Dish
                  </button>
                </div>
              </div>

              <div className='flex flex-row justify-start items-center gap-5 w-full'>
                <img src={dishImg} alt="dish img"
                  width={170} />

                <div className='flex flex-col justify-center items-start dm-sans-ver2 gap-2'>
                  <p className='text-[21px]  font-semibold'>
                    Fried Eggs
                  </p>
                  <p>Arriving on: October 22</p>
                  <p>Quantity: 2</p>

                  <button className='bg-rouge-brick text-white px-9 py-1.5  active:opacity-90 text-[14px] hover:opacity-70 font-bold rounded-3xl transition duration-200 ease-in-out cursor-pointer shadow-md shadow-rouge-brick/30'>
                    Add Dish
                  </button>
                </div>
              </div>

            </div>


          </div>

          <div className='flex flex-col gap-4 py-6 px-7 border-2 border-[#DBDFD0] rounded-2xl w-full '>

            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-row justify-start items-center gap-6'>

                <div className='flex flex-col gap-1'>
                  <div className='font-bold'>Order Placed:</div>
                  <div>October 13</div>
                </div>

                <div className='flex flex-col gap-1'>
                  <div className='font-bold'>Total:</div>
                  <div>$54.88</div>
                </div>
              </div>

              <div className='flex flex-col gap-1'>
                <div className='font-bold'>Order ID:</div>
                <div>6dfde1b4-0917-58dc-cf19-339e9b95da46</div>
              </div>

            </div>

            <div className="border-t border-1 border-[#DBDFD0] my-1 -mx-7" />

            <div className='flex flex-col gap-13 justify-center items-start w-full py-7'>

              <div className='flex flex-row justify-start items-center gap-5 w-full'>
                <img src={dishImg} alt="dish img"
                  width={170} />

                <div className='flex flex-col justify-center items-start dm-sans-ver2 gap-2'>
                  <p className='text-[21px]  font-semibold'>
                    Fried Eggs
                  </p>
                  <p>Arriving on: October 22</p>
                  <p>Quantity: 2</p>

                  <button className='bg-rouge-brick text-white px-9 py-1.5  active:opacity-90 text-[14px] hover:opacity-70 font-bold rounded-3xl transition duration-200 ease-in-out cursor-pointer shadow-md shadow-rouge-brick/30'>
                    Add Dish
                  </button>
                </div>
              </div>

              <div className='flex flex-row justify-start items-center gap-5 w-full'>
                <img src={dishImg} alt="dish img"
                  width={170} />

                <div className='flex flex-col justify-center items-start dm-sans-ver2 gap-2'>
                  <p className='text-[21px]  font-semibold'>
                    Fried Eggs
                  </p>
                  <p>Arriving on: October 22</p>
                  <p>Quantity: 2</p>

                  <button className='bg-rouge-brick text-white px-9 py-1.5  active:opacity-90 text-[14px] hover:opacity-70 font-bold rounded-3xl transition duration-200 ease-in-out cursor-pointer shadow-md shadow-rouge-brick/30'>
                    Add Dish
                  </button>
                </div>
              </div>

              <div className='flex flex-row justify-start items-center gap-5 w-full'>
                <img src={dishImg} alt="dish img"
                  width={170} />

                <div className='flex flex-col justify-center items-start dm-sans-ver2 gap-2'>
                  <p className='text-[21px]  font-semibold'>
                    Fried Eggs
                  </p>
                  <p>Arriving on: October 22</p>
                  <p>Quantity: 2</p>

                  <button className='bg-rouge-brick text-white px-9 py-1.5  active:opacity-90 text-[14px] hover:opacity-70 font-bold rounded-3xl transition duration-200 ease-in-out cursor-pointer shadow-md shadow-rouge-brick/30'>
                    Add Dish
                  </button>
                </div>
              </div>

            </div>


          </div>
        </div>

      </section>
    </>
  )
}

export default Orders