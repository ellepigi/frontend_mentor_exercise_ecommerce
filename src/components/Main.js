import React, {useState } from "react";
import { useCartContext } from "../context/cartContext"

export const Main = () => {
  const [selectedImage, setSelectedImage] = useState("/image-product-1.jpg");

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const {addToCart, addToNumber, removeFromNumber, number } = useCartContext();

  return (
    <div className="main flex justify-center">
      <div className="w-4/5 flex">
        <div className="lf flex flex-col items-center justify-center w-1/2 p-8 ">
          <img className="h-[80%] rounded" src={selectedImage} alt="" />
          <div className="grid grid-cols-4 gap-4 w-full mt-4 ">
            <img
              src="/image-product-1.jpg"
              alt=""
              className="rounded cursor-pointer"
              onClick={() => handleThumbnailClick("/image-product-1.jpg")}
            />
            <img
              src="/image-product-2.jpg"
              alt=""
              className="rounded cursor-pointer"
              onClick={() => handleThumbnailClick("/image-product-2.jpg")}
            />
            <img
              src="/image-product-3.jpg"
              alt=""
              className="rounded cursor-pointer"
              onClick={() => handleThumbnailClick("/image-product-3.jpg")}
            />
            <img
              src="/image-product-4.jpg"
              alt=""
              className="rounded cursor-pointer"
              onClick={() => handleThumbnailClick("/image-product-4.jpg")}
            />
          </div>
        </div>
        <div className="rg w-1/2 flex flex-col justify-center">
          <h4 className="text-orange-400 text-md font-bold">SNEAKER COMPANY</h4>
          <h1 className="mt-4 text-3xl font-bold">Fall Limited Sneakers</h1>
          <p className="mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            aliquid aspernatur obcaecati nihil ex molestias sed praesentium fuga
            soluta voluptate sunt, provident molestiae laboriosam odit ipsum
            iure veniam vitae quisquam.
          </p>
          <div className="price flex items-center gap-4 mt-8">
            <h3 className="text-2xl font-bold">$125.00</h3>
            <h4 className="text-orange-400 bg-orange-200 p-1 rounded">50%</h4>
          </div>
          <div className="button mt-8 flex gap-4">
            <div className="quantity flex items-center gap-2">
              <button className="font-bold p-2 bg-gray-200 rounded " onClick={removeFromNumber} >-</button>
              <h1 className="font-bold bg-gray-200 rounded p-2">{number}</h1>
              <button className="font-bold p-2 bg-gray-200  rounded" onClick={addToNumber} >+</button>
            </div>
            <button onClick={addToCart} className="px-10 py-4 bg-orange-400 hover:bg-orange-500 text-white font-bold text-sm rounded">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
