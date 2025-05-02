'use client'
import React from "react";

const categories = [
  { id: 1, name: "Headphones", imageUrl: "https://images.unsplash.com/photo-1512499617640-c2f9992e0b0a?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Laptops", imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Speakers", imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Smart Watches", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Cameras", imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" },
];

const ProductCategories = () => {

  const handleCategoryClick = (categoryName) => {
    window.location.href = `/all-products?category=${encodeURIComponent(categoryName)}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-14 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-8 text-gray-900">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {categories.map(({ id, name, imageUrl }) => (
          <div
            key={id}
            className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            onClick={() => handleCategoryClick(name)}
          >
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-44 object-cover"
            />
            <div className="p-4 bg-indigo-50 text-center font-semibold text-lg text-indigo-900">
              {name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
