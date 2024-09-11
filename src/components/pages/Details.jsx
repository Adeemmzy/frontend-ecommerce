import React, { useContext, useEffect, useState } from 'react'
import EcomContext from '../../context/EcomContext'
import { useParams } from 'react-router-dom';
import Productimages from '../Productimages';

function Details() {
  const {product, addToCart } = useContext(EcomContext);
  const params = useParams();
  const showItems = params.id
  const productItems = product.find((items) => items._id === (showItems))
  const [selectedImages, setSelectedImages] = useState(productItems?.images?.[0].img)

  useEffect(() => {
    setSelectedImages(productItems?.images?.[0].img)
  }, [productItems])
  // const showItems = params.name
  // const productItems = product.find((items) =>items.id ===showItems)
  return (
    <div>
      <div className="container max-w-5x1 mx-auto my-24">
        <h1 className="text-2x1 my-5 uppercase font-bold text-center">{productItems?.name} Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 align-center justify-center">
            <div className="p-5">
                {/* <img src={`http://localhost:8000/${productItems.img}`} alt="" /> */}
                <img src={selectedImages} className="w-[50%] "   alt="" />

            </div>
            <div>
                <div className="card-body">
                    <h2 className="text-xl font-bold uppercase pt-3 pb-3">{productItems?.name} </h2>
                    <p className="text-xl font-bold uppercase pt-3 pb-3">Tag:{productItems?.category.name} </p>
                    <h5 className="text-xl font-bold uppercase pt-3 pb-3">{productItems?.price} </h5>
                    <p className="pb-5">{productItems?.desciption} </p>
                    <button onClick={() => addToCart({ ...productItems, quantity: 1 })} type="submit" className="product-btn p-2 text-[#fff] rounded capitalize bg-[blue] hover:bg-[#502274] " >Add to cart</button>
                </div>
                {/*  */}
                <Productimages images={productItems?.images} setSelectedImages={setSelectedImages} />
                {/*  */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Details
