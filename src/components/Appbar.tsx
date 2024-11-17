"use client";

import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Appbar = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false); // State to track loading

  const logout = async () => {
    setIsLoading(true); // Show loading text
    try {
      await axios.get("/api/users/logout");
      router.push("/signin");
      toast.success("Logout Successfully");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false); // Hide loading text
    }
  };

  return (
    <div className="border-b flex justify-between px-10 py-4 mb-4">
      <Link
        href={"/dashboard"}
        className="flex flex-col justify-center cursor-pointer font-bold italic"
      >
        Dashboard
      </Link>

      <div className="flex justify-center ">
        <Link href={"/add"}>
        
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all font-bold ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add Contact
            </span>
          </button>
        </Link>


        <button onClick={logout} disabled={isLoading}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="relative px-5 py-2.5 transition-all font-bold  ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            {isLoading ? "Loading..." : "Logout"}
          </span>
        </button>

      </div>
    </div>
  );
};

export default Appbar;
