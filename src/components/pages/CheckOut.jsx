import React, { useContext } from 'react'
import EcomContext from '../../context/EcomContext';
import { Navigate } from 'react-router-dom';

function CheckOut() {
    const { cartItems, calculateTotalAmount, isAuthenticated }=useContext(EcomContext)
    if(!isAuthenticated) {
        return <Navigate to="/login" />
    }

    const handlePayment = async (e) => {
        e.preventDefault();

        const amount = calculateTotalAmount().toFixed(2);
        const firstName = e.target.element.firstName.value;
        const lastName = e.target.element.lastName.value;
        const email = e.target.element.email.value;
        const phone = e.target.element.phone.value;
        const address = e.target.element.address.value;
        const currency = e.target.element.currency.value;

        try{
            const res = await fetch("http://localhost:8000/api/payment/initiate", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                    "auth-token": `${localStorage.getItem("auth-token")}`
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    amount,
                    email,
                    currency,
                    address,
                    phone
                })
            })
            const data = await res.json();
            if (res.ok){
                window.location.href = date.link;
                console.log(data.link);
            }else {
                res.json("Something went wrong")
            }
        }catch(error) {
            console.log(error);
        }
    }
  return (
    <div>
      <div className="container max-w-6xl mx-auto my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-xl">
            <div className="p-3 table">
                <h1 className="text-start text-xl font-bold border-b pb-3">Order Summary</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Product Image</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cartItems.map((items, index) => (
                        <tr>
                            <td>Product 1</td>
                            <td className="flex align-center justify-center">
                                <img src="/img/s2.jpg" width="100px" alt="" />
                            </td>
                            <td>67</td>
                            <td>#647675</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="">Total: #{calculateTotalAmount().toFixed(2)} </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <div className="cform">
                   <h1 className="text-end text-xl font-bold border-b pb-3">Delivery Details</h1>
                   <form onSubmit={(e) => handlePayment(e)} >
                            <div>
                                 <label htmlFor="">first Name</label>
                                 <input type="text" name="firstName" id="firstName" />
                            </div>
                            <div>
                                 <label htmlFor="">last Name</label>
                                 <input type="text" name="lastName" id="lastName" />
                            </div>
                            <div>
                                <label htmlFor="">Email Address</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div>
                                <label htmlFor="">Phone Number</label>
                                <input type="text" name="phone" id="phone" />
                            </div>
                            <div className="flex flex-wrap gap-2 border border-2 outline-0 p-3 rounded-xl" >
                                <select name="currency" id="currency">
                                    <option value="NGN">NGN</option>
                                    <option value="USD">USD</option>
                                </select>
                                <h2 className="text-xl font-semibold" name="amount">{calculateTotalAmount().toFixed(2)}</h2>
                            </div>
                            <div>
                                <label htmlFor="">Address</label>
                                <input type="text" name="address" id="address" />
                                <input type="hidden" name="" id="" />
                            </div>
                            <div>
                                <button className="product-btn p-2 w-full text-[#fff] rounded capitalize bg-[#502274] hover:bg-[#A42CD6]">Pay</button>
                            </div>
                    </form> 
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut;
