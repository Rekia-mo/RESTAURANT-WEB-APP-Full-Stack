import Nav from '../components/Nav';
import CartItems from '../components/CartItems';
import { formatMoney } from '../utils/money';
import { quantityCount } from '../utils/qtt';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function CheckOut({ cart, loadCart }) {
  const API_BASE_URL = 'http://localhost:3000/api/order';
  const navigate = useNavigate();

  const placeOrder = async () => {
    try {
      const token = localStorage.getItem('token');

      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `Bearer ${token}`,
          accept: 'application/json'
        },
        body: JSON.stringify({
          address: "douzzi bbzr",
          phone: "12345666"
        })
      });

      if (!response.ok) throw new Error('faid to log in');


      loadCart()
      navigate('/orders');
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    loadCart();
  }, []);
  return (
    <>
      <Nav cart={cart} />
      <section className='relative mt-25 overflow-auto scrollbar-hide scroll-smooth  xl:px-18 max-xl:px-8  py-12 flex flex-col justify-center gap-8 max-sm:gap-15  '>

        <h1 className='playfair-display-400 text-center leading-none text-oliv-07 max-lg:text-[50px] max-sm:text-[60px] text-[60px]'>
          Checkout
        </h1>

        <p className='playfair-display-400 font-bold text-3xl text-oliv-07 mb-0 '>
          Review your order
        </p>

        <div className=' flex items-start flex-row gap-3 max-lg:flex-col-reverse max-lg:items-center max-lg:gap-10'>

          <div className='flex flex-col justify-center items-start gap-4  w-2/3 max-lg:w-full'>
            {cart &&
              cart.items.map((cartItem) => (
                <CartItems
                  key={cartItem._id}
                  {...cartItem}
                  loadCart={loadCart} />
              ))
            }

          </div>

          <div className='flex flex-col justify-center items-center gap-5 py-8 px-5 border-2 border-[#DBDFD0] rounded-2xl bg-bg-gray transition duration-200 ease-in-out w-1/3 max-lg:w-full'>

            <div className='playfair-display-400 font-bold text-2xl text-oliv-07 '>
              Payment Summary
            </div>

            <div className='flex flex-row justify-between w-full'>
              <div>Items ({quantityCount(cart)}):</div>
              <div>
                {cart && formatMoney(cart.total)}
              </div>
            </div>

            <div className="border-t w-full border-gray-300 my-1"></div>

            <div className='flex flex-row justify-between w-full text-rouge-brick font-bold text-[18px] dm-sans-ver2 mt-1'>
              <div>Order total:</div>
              <div>
                {cart && formatMoney(cart.total)}
              </div>
            </div>

            <button className='bg-rouge-brick text-white  px-17 py-2  active:opacity-90 text-[15px] hover:opacity-70 font-bold rounded-4xl transition duration-200 ease-in-out cursor-pointer mt-1 shadow-md shadow-rouge-brick/30 '
              onClick={placeOrder}>
              Place your order
            </button>
          </div>

        </div>


      </section>
    </>

  )
}

export default CheckOut