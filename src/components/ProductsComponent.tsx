import { Link, useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";


type Product = {
  title:string,
  price:number,
  image:string,
  bestseller?:boolean,
  productid:number
}

interface ProductsProps{
  heading:string,
  tagline:string,
  description:string,
  data:Product[]
}

const ProductsComponent:React.FC<ProductsProps> = ({heading,tagline,description,data}) => {

  const location = useLocation();
  const path = location.pathname

  return (
    <>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                  <span className="block mb-2 text-lg font-semibold text-indigo-500">
                    {tagline}
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                    {heading}
                  </h2>
                  <p className="text-base text-body-color dark:text-dark-6">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center rounded-md mb-16" role="group">
            <Link to={"/tshirts"}>
              <button
                type="button"
                className={`${path === `/tshirts` && `ring-2 ring-indigo-700 text-indigo-700`} px-4 py-2 text-sm font-lg text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-2 focus:ring-indigo-700 focus:text-indigo-700`}
              >
                T Shirts
              </button>
            </Link>
            <Link to={"/hoodies"}>
              <button
                type="button"
                className={`${path === `/hoodies` && `ring-2 ring-indigo-700 text-indigo-700`} px-4 py-2 text-sm font-lg text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-2 focus:ring-indigo-700 focus:text-indigo-700`}
              >
                Hoodies
              </button>
            </Link>
            <Link to={"/stickers"}>
              <button
                type="button"
                className={`${path === `/stickers` && `ring-2 ring-indigo-700 text-indigo-700`} px-4 py-2 text-sm font-lg text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-2 focus:ring-indigo-700 focus:text-indigo-700`}
              >
                Stickers
              </button>
            </Link>
          </div>

          <div className="flex justify-center pb-12 m-auto">
            <div className="mb-3">
              <div className="relative mb-4 flex w-72 sm:w-96 flex-wrap items-stretch">
                <input
                  type="search"
                  className="relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                {/*Search icon*/}
                 <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700"
                  id="basic-addon2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span> 
              </div>
            </div>
          </div>


          <div className="flex flex-wrap gap-2 xl:gap-16 flex-col sm:flex-row">
           {
            data.map((product,i) => (
              <ProductCard
                key={i}
                productid={product.productid}
                title={product.title}
                price={product.price}
                image={product.image}
                bestseller={product.bestseller}
              />))
           }
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsComponent;
