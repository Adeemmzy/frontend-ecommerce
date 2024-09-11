import { createContext, useState, useEffect, useContext } from "react";
import useAlert from "../hooks/useAlert"
import AuthContext from "./AuthContext"

const EcomContext = createContext()

export const EcomProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const { alertInfo, showHide} = useAlert();
  const [ cartItem, setCartItems ] = useState([]);
  const [ order, setOrder] = useState([]);
  const [ state, dispatch] = useContext(AuthContext);
  const isAuthenticated = state.accessTokenn !== null;

  useEffect(() => {
    fetchData();
    fetchCart();
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/product");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }
  const featuredProduct = product.filter((product) => product.featured === true)
  const topSellingProduct = product.filter((product) => product.topSelling === true)

  // adding items to cart 
  const addToCart = async (productId, quantity) => {
    try {
      const res = await fetch("http://localhost:8000/api/addToCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`
        },
        body: JSON.stringify({ productId, quantity: 1 })
      })
      const data = await res.json();
      if (res.ok) {
        setCartItems(data || data.products);
        showHide("success", "Item successfully added to cart");
      }else {
        showHide("error", "failed to add item to cart")
      }
    }catch (error) {
      console.log(error);
    }
  }

  // fetch cart
  const fetchCart = async () => {
    const res = await fetch("http://localhost:8000/api/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${localStorage.getItem("auth-token")}`
      }
    })
    const data = await res.json();
    if(res.ok) {
      setCartItems(data || data.products)
    }else {
      showHide("error", "could not get cart")
    }
  }

  //  calculat subtotal
  const calculateSubTotal = () => {
    return setCartItems.products?.reduce((acc, curr) => acc + curr.amount, 0)
  }

  // calculate vat
  const calculateVat = ( vat = 0.075) => {
    const subtotal = calculateSubTotal()
    return subtotal * vat;
  }

  // calaulate total amount
  const calculateTotalAmount = () => {
    const subtotal = calculateSubTotal()
    const vat = calculateVat()
    return subtotal + vat;
  }

  // remove cart items 
  const removeCartItems = async (productId) => {
    try {
      if(window.confirm("Are you sure you want to remove item from cart?...")){
        const res = await fetch("http://localhost:8000/api/delect-cart", {
          method: "DELETE",
          headers: {
            "content-Type": "application/json",
            "auth-token": `${localStorage.getItem("auth-token")}`
          },
          body: JSON.stringify({ productId })
        })
        const data = await res.json();
        if (res.ok) {
          showHide("success", "Item successfully removed from cart");
          setCartItems(data || data.products)
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  // update cart items
  const updateCartItems = async (productId, quantity) => {
    try {
      const res = await fetch("http://localhost:8000/api/update-cart", {
        method: "PUT",
        headers: {
          "content-Type": "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
        },
        body: JSON.stringify({ productId, quantity })
      })
      const data = await res.json();
      if (res.ok) {
        const existingItems = cartItem.products?.findIndex(items => items.product._id === productId );
        const itemsInCart = [...cartItem.products]
        const updateCartItems = itemsInCart[existingItems]
        updateCartItems.quantity = parseInt(quantity)
        updateCartItems.amount = updateCartItems.product.price * updateCartItems.quantity
        setCartItems({ ...setCartItems, products: itemsInCart})
      }else {
        showHide("error", "Could not update cart");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const createOrder = async (transaction_Id, orderId) => {
    try{
      const res = await fetch("http://localhost:8000/api/payment/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`
        },
        body: JSON.stringify({ transaction_Id, orderId })
      })
      const data = await res.json();
      if(res.ok) {
        setOrder(data.order)
        console.log(data.order);
        setCartItems([]);
       }else{
        showHide("error", "Insufficient funds!...Credit your acc boss");
       } 
      } catch (error) {
        console.log(error);
      }
    }

   
    
    
    return (
    <EcomContext.Provider value= {{
      product,
      alertInfo,
      cartItem,
      featuredProduct,
      topSellingProduct,
      isAuthenticated,
      showHide,
      addToCart,
      calculateSubTotal,
      calculateVat,
      calculateTotalAmount,
      removeCartItems,
      updateCartItems,
    }}>
        {children}
    </EcomContext.Provider>
  )
}

export default EcomContext;