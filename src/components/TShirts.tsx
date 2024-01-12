import React from 'react'
import ProductCard from './ProductCard'

const TShirts = () => {
  return (
    <>
    <section className="py-12 mt-32 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

<div className="container mx-auto">
  <div className="flex flex-wrap justify-center -mx-4">
    <div className="w-full px-4">
      <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
        <span className="block mb-2 text-lg font-semibold text-blue-500">
        The Trending Tees
        </span>
        <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
        T-Shirts
        </h2>
        <p className="text-base text-body-color dark:text-dark-6">
          There are many variations of passages of Lorem Ipsum available
          but the majority have suffered alteration in some form.
        </p>
      </div>
    </div>
  </div>
</div>




        <div className="flex flex-wrap gap-16 flex-col sm:flex-row">

          <ProductCard title="demo" price={2000} image="https://www.beyours.in/cdn/shop/files/charcoal-blue-hoodie-3_800x.jpg?v=1695718605"  />
          <ProductCard title="demo" price={2000} image="https://www.beyours.in/cdn/shop/files/charcoal-blue-hoodie-3_800x.jpg?v=1695718605"  />
          <ProductCard title="demo" price={2000} image="https://www.beyours.in/cdn/shop/files/charcoal-blue-hoodie-3_800x.jpg?v=1695718605"  />
          <ProductCard title="demo" price={2000} image="https://www.beyours.in/cdn/shop/files/charcoal-blue-hoodie-3_800x.jpg?v=1695718605"  />
          <ProductCard title="demo" price={2000} image="https://guruofficialbrand.com/wp-content/uploads/2022/05/C52A75811-768x512.jpg"  />
          <ProductCard title="demo" price={2000} image="https://guruofficialbrand.com/wp-content/uploads/2022/05/C52A75811-768x512.jpg"  />
          <ProductCard title="demo" price={2000} image="https://guruofficialbrand.com/wp-content/uploads/2022/05/C52A75811-768x512.jpg"  />


        </div>
      </div>
    </section>


    </>
  )
}

export default TShirts