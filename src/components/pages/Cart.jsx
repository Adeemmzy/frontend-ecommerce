import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import EcomContext from '../../context/EcomContext';

function Cart() {
   const { cartItems, calculateSubTotal, calculateVat, calculateTotalAmount, updateCartItems, removeCartItems }= useContext(EcomContext);
  return (
    <div>
      <div className="container max-w-6xl mx-auto my-24">
        <div className="grid grid-cols-1 shadow-xl">
            <div className="p-3 table">
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Product Image</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </thead>
                    <tbody>
                         {cartItems?.products?.map((items,index)=> (

                              <tr key={index}>
                              <td>{items.product?.name}</td>
                              <td className="flex align-center justify-center" ><img src={`http://localhost:8000/${items.products?.images[0]?.img}`} className='w-[100px] h-[100px] ' alt="" /></td>
                              <td>#{items.product?.price}</td>
                              <td>#{items.amount}</td>
                              <td>
                                  <form action="">
                                      <input type="number" onChange={(e) => updateCartItems(items.id, e.target.value)} min={1} value={items.quantity} name="" id="" />
                                  </form>
                              </td>
                              <td>
                                   <form action="">
                                      <input type="hidden" value="1" name="" id="" />
                                      <button  onClick={() => removeCartItems(items.id)} type="submit" ><i class="fa-solid fa-xmark"></i></button>
                                  </form>
                              </td>
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
                            <td className="">Subtotal: #{calculateSubTotal()} </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="">VAT (7.5%): #{calculateVat()}8 </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="">Total: #{calculateTotalAmount()} </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className=""><Link to="/checkout" className="product-btn p-2 text-[#fff] rounded capitalize bg-blue-500 hover:bg-[#A42CD6] ">Checkout</Link> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
