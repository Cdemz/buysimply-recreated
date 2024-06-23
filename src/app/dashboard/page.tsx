"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PrivateRoute from "../component/PrivateRoute";
import Logout from "../component/Logout";

const DashboardPage = () => {
  const router = useRouter();

  const getToken = () => {
    return localStorage.getItem("accessToken");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        router.push("/login");
      }
    }
  }, [router]);

  return (
    <PrivateRoute>
      <Logout />
      <div className="min-h-screen bg-white">
        .
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white animate-gradient"></div>
          <div className="py-6 bg-white shadow-md">
            <h1 className="text-3xl text-center text-gray-800 font-bold">
              Dashboard
            </h1>
          </div>
          <div className="relative overflow-hidden flex pt-8 px-4 pb-6">
            <div className="h-full w-32 -skew-x-6 -leftx-28 absolute z-20 bg-gradient-to-r from-transparent via-white to-transparent slider"></div>
            <div className="mr-auto my-auto rounded-2xl h-16 w-3/4 bg-gray-200 relative z-10"></div>
            <div className="ml-auto h-16 w-16 bg-gray-200 rounded-full relative z-10"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              <div className="bg-gray-200 rounded-lg h-56 relative overflow-hidden">
                <div className="h-full w-32 -skew-x-6 -leftx-28 absolute bg-gradient-to-r from-transparent via-white to-transparent slider"></div>
              </div>
              <div className="bg-gray-200 rounded-lg h-11 relative overflow-hidden">
                <div className="h-full w-32 -skew-x-6 -left-28 absolute bg-gradient-to-r from-transparent via-white to-transparent slider"></div>
              </div>
              <div className="bg-gray-200 rounded-lg h-32 relative overflow-hidden">
                <div className="h-full w-32 -skew-x-6 -leftx-28 absolute bg-gradient-to-r from-transparent via-white to-transparent slider"></div>
              </div>
              <div className="bg-gray-200 rounded-lg h-72 relative overflow-hidden">
                <div className="h-full w-32 -skew-x-6 -leftx-28 absolute bg-gradient-to-r from-transparent via-white to-transparent slider"></div>
              </div>
              <div className="bg-gray-200 rounded-lg h-20 relative overflow-hidden">
                <div className="h-full w-32 -skew-x-6 -leftx-28 absolute bg-gradient-to-r from-transparent via-white to-transparent slider"></div>
              </div>
              <div className="bg-gray-200 rounded-lg h-72 relative overflow-hidden">
                <div className="h-full w-32 -skew-x-6 -leftx-28 absolute bg-gradient-to-r from-transparent via-white to-transparent slider"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default DashboardPage;
