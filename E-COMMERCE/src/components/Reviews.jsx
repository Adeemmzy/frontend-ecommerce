import React from 'react'

function Reviews() {
  return (
    <>
        <div className="reviews bg-[#F7ECDD] h-[95vh]">
            <p className='font-bold text-4xl text-center py-12'>Rating</p>

            <div className="img w-[20vw] h-[20vh] mx-auto">
                <img src="/img/img3.jpg" alt="" className='rounded-xl' />
              <div className="rating text-center text-2xl">
                  <i className="fa-solid fa-star text-[lime]"></i>
                  <i className="fa-solid fa-star text-[lime]"></i>
                  <i className="fa-solid fa-star text-[lime]"></i>
                  <i className="fa-solid fa-star text-[lime]"></i>
                  <i className="fa-solid fa-star-half-stroke text-[lime]"></i>
              </div>
            </div>

            <div className="img w-[20vw] h-[20vh] mx-auto mt-[30px]">
                <img src="/img/img2.jpg" alt="" className='rounded-xl' />
              <div className="rating text-center text-2xl">
                  <i className="fa-solid fa-star text-[lime]"></i>
                  <i className="fa-solid fa-star text-[lime]"></i>
                  <i className="fa-solid fa-star text-[lime]"></i>
                  <i className="fa-solid fa-star text-[lime]"></i>
              </div>
            </div>

            <div className="img w-[20vw] h-[20vh] mx-auto mt-[30px]">
                <img src="/img/img1.jpg" alt="" className='rounded-xl' />
              <div className="rating text-center text-2xl">
                  <i className="fa-solid fa-star text-[lime]"></i>
                  <i className="fa-solid fa-star text-[lime]"></i>
                  <i className="fa-solid fa-star text-[lime]"></i>
                  <i className="fa-solid fa-star text-[lime]"></i>
                  <i className="fa-solid fa-star text-[lime]"></i>
              </div>
            </div>
        </div>
    </>
  )
}

export default Reviews