import React, { useState } from 'react';
import { formatMoney } from '../utils/money';

function CartItems({ menuItem, quantity, loadCart }) {

  const [isEditing, setIsEditing] = useState(false);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const API_BASE_URL = `http://localhost:3000/api/cart/${menuItem._id}`;

  const deleteCartItem = async () => {
    try {

      const token = localStorage.getItem('token');

      const API_OPTIONS = {
        method: 'DELETE',
        headers: {
          accept: 'application/json',
          "x-auth-token": `Bearer ${token}`
        }
      };
      const response = await fetch(API_BASE_URL, API_OPTIONS);

      if (!response.ok) throw new Error('fail to fetch data');

      loadCart();
    } catch (err) {

      console.log(err);

      if (err.message.includes("invalid token")) {
        // localStorage.removeItem("token");
        navigate('/signUp')
      }
    }
  }

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');

      const API_OPTIONS = {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `Bearer ${token}`,
          accept: 'application/json'
        },
        body: JSON.stringify({ quantity: newQuantity })
      };
      const response = await fetch(API_BASE_URL, API_OPTIONS);

      const data = await response.json();

      if (!response.ok) throw new Error('fail to fetch data');
      loadCart();

    } catch (err) {
      console.log(err);
    }

    setIsEditing(false);
  }



  return (
    <>
      <div className='flex flex-col gap-4 w-full'>

        <div className='flex flex-col gap-3 py-5 px-5 border-2 border-[#DBDFD0] rounded-2xl hover:bg-bg-gray transition duration-200 ease-in-out '>

          <div className='flex flex-row justify-start items-center gap-6 '>

            <img src={`http://localhost:3000/${menuItem.imageURL}`} alt="dish img" width={170} />

            <div className='flex flex-col gap-3 justify-center items-start'>
              <p className='text-[21px] dm-sans-ver2 font-semibold text-oliv-07 tracking-wide mt-2'>
                {menuItem.name}
              </p>

              <p className='text-rouge-brick font-semibold text-[18px] dm-sans-ver2'>
                {formatMoney(menuItem.price)}
              </p>

              <div className='flex flex-row items-center'>
                <span>
                  Quantity: <span className='font-bold'> {newQuantity} </span>
                </span>

                {
                  isEditing ?
                    (
                      <div className="mt-2 ml-5 flex items-center gap-3">
                        <button
                          onClick={() => setNewQuantity((q) => Math.max(1, q - 1))}
                          className="px-2 bg-rouge-brick rounded-full hover:opacity-70 active:opacity-90 text-white font-bold"
                        >
                          -
                        </button>

                        <button
                          onClick={() => setNewQuantity((q) => q + 1)}
                          className=" px-1.5 bg-rouge-brick rounded-full hover:opacity-70 active:opacity-90 text-white font-bold"
                        >
                          +
                        </button>
                        <button
                          onClick={handleSave}
                          className="bg-[#DBDFD0] flex justify-center items-center transition duration-300 ease-in-out text-[14px] py-1 px-4 rounded-4xl font-semibold"
                        >
                          Save
                        </button>
                      </div>
                    )
                    :
                    <span className='text-rouge-brick ml-4 cursor-pointer hover:opacity-55 transition duration-200 ease-in-out'
                      onClick={() => {
                        setIsEditing(true);
                      }}>
                      Update
                    </span>
                }


                <span className='text-rouge-brick ml-4 cursor-pointer hover:opacity-55 transition duration-200 ease-in-out'
                  onClick={deleteCartItem}>
                  Delete
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItems;