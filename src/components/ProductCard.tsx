import React from "react";
import { AiFillPlusCircle, AiFillEye } from "react-icons/ai";

interface cardProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<cardProps> = ({ title, price, image }) => {
  return (
    <>
      <div className="relative group cursor-pointer">
        <div>
          <img className="h-full w-[355px] rounded-lg" src={image} />
        </div>

        <div className="absolute left-3 top-3">
          <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">
            New
          </p>
        </div>
        <div className="flex items-start justify-between mt-4 space-x-4">
          <div>
            <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
              <a href="#" title="">
                {title}
                <span className="absolute inset-0" aria-hidden="true"></span>
              </a>
            </h3>
          </div>

          <div className="text-right">
            <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
              ₹{price}
            </p>
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300">
          <span className="text-gray-800 cursor-pointer text-xl bg-gray-200 px-4 py-2 rounded-full">
            <AiFillPlusCircle />
          </span>
          <span className="text-gray-800 cursor-pointer text-xl bg-gray-200 px-4 py-2 rounded-full ml-2">
            <AiFillEye />
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
