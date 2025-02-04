import { Product } from "../../types";
import React from "react";
import Image from "next/image"; 

interface ProductCardProps extends Product {
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id, 
  name,
  price,
  image,
  description = "No description available", // Default value added
  inventory,
  onAddToCart,
}) => { 
  return ( 
    <div className="bg-zinc-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
      <Image
        src={image} 
        alt={name}  
        width={500}  
        height={350}
        className="w-full h-56 object-cover rounded-md mb-4 transform transition-all duration-300 ease-in-out hover:scale-110"
      />
      <h3 className="text-xl font-bold mb-2 text-amber-500">{name}</h3>
      <p className="text-xl text-green-400 mb-2">Price: ${price}</p>
      <p className="text-lg text-white font-semibold & italic mb-4">{description}</p>

      <button
        onClick={() => onAddToCart({ id, name, price, image, description, inventory: inventory || 0 }) }
        className="bg-blue-700 text-white px-4 rounded-lg text-lg shadow-md hover:bg-amber-500 transition duration-300 ease-in-out block mx-auto mt-4"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
