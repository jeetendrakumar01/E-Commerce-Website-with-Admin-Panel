"use client"
import React from "react";
import Link from "next/link"
import { useAppContext } from "../context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk()

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700 bg-white shadow-md sticky top-0 z-50">
      <div className="cursor-pointer w-32 flex items-center gap-2" onClick={() => router.push('/')}>
        {/* More professional e-commerce logo with icon and text */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={2}>
          <circle cx="32" cy="32" r="30" strokeWidth="4" stroke="#2563eb" fill="#3b82f6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 32l8 8 16-16" stroke="#dbeafe" strokeWidth="4" />
        </svg>
        <span className="text-2xl font-extrabold text-blue-700 select-none">QuickKart</span>
      </div>
      <div className="flex items-center gap-6 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition font-medium">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition font-medium">
          Shop
        </Link>
        <Link href="/" className="hover:text-gray-900 transition font-medium">
          About Us
        </Link>
        <Link href="/" className="hover:text-gray-900 transition font-medium">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full hover:bg-blue-100 transition text-blue-700 border-blue-700">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        {
          user
            ? <>
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action label="Cart" onClick={() => router.push('/cart')} />
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action label="My Orders" onClick={() => router.push('/my-orders')} />
                </UserButton.MenuItems>
              </UserButton>
            </>
            : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.75 6.879 2.04M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Account
            </button>
        }
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full hover:bg-blue-100 transition text-blue-700 border-blue-700">Seller Dashboard</button>}
        {
          user
            ? <>
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action label="Home" onClick={() => router.push('/')} />
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action label="Products" onClick={() => router.push('/all-products')} />
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action label="Cart" onClick={() => router.push('/cart')} />
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action label="My Orders" onClick={() => router.push('/my-orders')} />
                </UserButton.MenuItems>
              </UserButton>
            </>
            : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.75 6.879 2.04M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Account
            </button>
        }
      </div>
    </nav>
  );
};

export default Navbar;
