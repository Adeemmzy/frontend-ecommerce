import React, { useContext, useEffect } from 'react'
import EcomContext from '../../context/EcomContext'
import { Navigate, useSearchParams } from 'react-router-dom';

function ThankYou() {
    const { createOrder, order, isAuthenticated  } = useContext(EcomContext);
    const [searchParams] = useSearchParams();
    const tx_ref = searchParams.get("tx_ref");
    const transaction_Id = searchParams.get("transaction_id")

    if(!isAuthenticated){
        return <Navigate to="/login" />
    }
    useEffect(() => {
        if(transaction_Id && tx_ref){
            createOrder(transaction_Id, tx_ref);
        }
    }, [transaction_Id, tx_ref, createOrder]);
    
  return (
    <div>
      
    </div>
  )
}

export default ThankYou
