import React from 'react'

function Productimages({ images, setSelectedImages }) {
  return (
    <div className="grid mt-5 grid-cols-3 gap-2">
      {images?.map((prodimg, index) => (
        <div key={index}>
            <img
             src={`http://localhost:8000/${prodimg.img}`}
             onClick={() => setSelectedImages(prodimg.img)}
             className="w-full object-cover h-full cursor-pointer"
              alt={`Product ${index}`}
         />
        </div>
      ))}
    </div>
  )
}

export default Productimages
