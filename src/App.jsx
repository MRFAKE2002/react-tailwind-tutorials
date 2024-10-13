import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  return (
    <>
      {/* 
        <h1
          className="
        text-center 
        text-5xl 
        font-bold 
        text-red-700 
        bg-black py-5"
        >
          Tailwind + React + Vite
        </h1>
        <div className="container">
          <h3
            className="
          text-sky-400 
          text-4xl 
          font-black 
          text-center 
          my-4 
          shadow-lg 
          shadow-blue-600 
          bg-yellow-300 
          rounded-xl"
          >
            test
          </h3>
        </div>
      
        <h2 className="inline-block bg-slate-700 h-9">test2</h2>
        <h1 className="overflow-auto text-center w-10 bg-orange-400">
          overflow test
        </h1>
        <div className="bg-black h-40 relative mt-10">
          <h1 className="bg-red-700 size-20 absolute right-0">test4</h1>
          <h1 className="bg-yellow-400 size-20 fixed opacity-80 rotate-45 z-20">
            test5
          </h1>
          <h1 className="bg-blue-500 size-20 fixed opacity-80 rotate-45 z-40">
            test6
          </h1>
        </div>

      */}

      {/* flex */}

      {/* 
        <div className="bg-slate-800 h-96 flex justify-center items-center">
          <h1 className="bg-yellow-500 size-20">flex test</h1>
        </div> 

        <div className="bg-slate-800 h-96 flex justify-between items-center">
          <h1 className="bg-yellow-500 size-20">flex test</h1>
          <h1 className="bg-yellow-500 size-20">flex test</h1>
          <h1 className="bg-yellow-500 size-20">flex test</h1>
          <h1 className="bg-yellow-500 size-20">flex test</h1>
        </div>
      
        <div className="bg-slate-800 h-96 flex justify-between items-center flex-row">
          <h1 className="bg-yellow-500 h-20 basis-1/4">flex test</h1>
          <h1 className="bg-yellow-500 h-20 basis-2/4">flex test</h1>
          <h1 className="bg-yellow-500 h-20 basis-1/4">flex test</h1>
          <h1 className="bg-yellow-500 h-20 basis-3/4">flex test</h1>
        </div>

        <div className="bg-black h-96 flex justify-center items-center">
          <h1 className="bg-red-700 text-2xl text-white flex justify-center items-center h-24 w-24">
            flex test
          </h1>
        </div>
      */}

      {/* grid */}

      {/* 
        <div className="bg-black h-96 grid grid-cols-4 gap-3">
          <h1 className="bg-red-700 text-2xl text-white h-24 col-span-2">flex test</h1>
          <h1 className="bg-red-700 text-2xl text-white h-24 col-span-2">flex test</h1>
          <h1 className="bg-red-700 text-2xl text-white h-24 col-span-3">flex test</h1>
          <h1 className="bg-red-700 text-2xl text-white h-24 col-span-1">flex test</h1>
        </div> 
      
        <div className="bg-black h-96 grid grid-cols-12 gap-3">
          <h1 className="bg-red-700 text-2xl text-white h-24 col-span-12 sm:col-span-6 md:col-span-3 xl:col-span-4 2xl:text-7xl 2xl:col-span-2">flex test</h1>
          <h1 className="bg-red-700 text-2xl text-white h-24 col-span-12 sm:col-span-6 md:col-span-3 xl:col-span-4 2xl:text-7xl 2xl:col-span-2">flex test</h1>
          <h1 className="bg-red-700 text-2xl text-white h-24 col-span-12 sm:col-span-6 md:col-span-3 xl:col-span-4 2xl:text-7xl 2xl:col-span-2">flex test</h1>
          <h1 className="bg-red-700 text-2xl text-white h-24 col-span-12 sm:col-span-6 md:col-span-3 xl:col-span-4 2xl:text-7xl 2xl:col-span-2">flex test</h1>
          <h1 className="bg-red-700 text-2xl text-white h-24 col-span-12 sm:col-span-6 md:col-span-3 xl:col-span-4 2xl:text-7xl 2xl:col-span-2">flex test</h1>
          <h1 className="bg-red-700 text-2xl text-white h-24 col-span-12 sm:col-span-6 md:col-span-3 xl:col-span-4 2xl:text-7xl 2xl:col-span-2">flex test</h1>
        </div> 
      */}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <img
            src="product1.jpg"
            alt="Product 1"
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-xl font-bold mt-4">Product 1</h2>
          <p className="text-gray-600 mt-2">$29.99</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Add to Cart
          </button>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <img
            src="product2.jpg"
            alt="Product 2"
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-xl font-bold mt-4">Product 2</h2>
          <p className="text-gray-600 mt-2">$39.99</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <div className="grid grid-cols-3 gap-4">
            <img
              src="product1.jpg"
              alt="Product 1"
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="col-span-2">
              <h2 className="text-xl font-bold">Product 1</h2>
              <p className="text-gray-600 mt-2">$29.99</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">Article Title 1</h2>
          <p className="text-sm text-gray-500">Published on Jan 1, 2024</p>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vehicula metus nec justo sodales...
          </p>
          <a href="#" className="text-blue-500 mt-4 inline-block">
            Read more
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        <form className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <label className="block mb-2 text-gray-700">Your Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            placeholder="Enter your name"
          />

          <label className="block mb-2 text-gray-700">Your Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            placeholder="Enter your email"
          />

          <label className="block mb-2 text-gray-700">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            rows="4"
            placeholder="Write your message"
          ></textarea>

          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Send Message
          </button>
        </form>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Our Office</h2>
          <p className="text-gray-700 mb-2">1234 Street Name, City, Country</p>
          <p className="text-gray-700 mb-2">Email: contact@example.com</p>
          <p className="text-gray-700 mb-2">Phone: +123 456 7890</p>
        </div>
      </div>

    </>
  );
}

export default App;
