"use client";
import React from "react";
import Link from "next/link";

const Logout = () => {
  const logout = () => {
    localStorage.removeItem("accessToken");
  };
  return (
    <div className="fixed flex bottom-4 z-40 text-center items-center justify-center right-0">
      <div className="bg-red-500 flex items-center text-white rounded-full ml-auto mr-4 px-6 py-3">
        <Link href="/" onClick={logout}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Logout;
