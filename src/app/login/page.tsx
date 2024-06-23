import React from "react";
import Link from "next/link";
import "../css/button.css";
const NotSignedInPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          You're not signed in
        </h1>
        <p className="text-gray-600 mb-8">
          This page is protected. Please sign in to continue.
        </p>
        <Link href="/" className="button">
          Login Here
        </Link>
      </div>
    </div>
  );
};

export default NotSignedInPage;
