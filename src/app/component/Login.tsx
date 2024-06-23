"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
// import  toast from "react-hot-toast";
import toast, { Toaster } from "react-hot-toast";
import "../css/button.css";

import "react-toastify/dist/ReactToastify.css";

interface Credentials {
  email: string;
  password: string;
}

const login = async (credentials: Credentials) => {
  const response = await fetch("https://bizflex.onrender.com/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    try {
      const errData = await response.json();
      throw errData;
    } catch (e) {
      throw e;
    }
  }

  const data = await response.json();
  localStorage.setItem("accessToken", data.accessToken);
  return data;
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { mutate } = useMutation(login, {
    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/dashboard");
    },
    onError: (error: { message?: string }) => {
      console.log(error);
      if (error?.message) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    },
  });

  const validate = () => {
    let isValid = true;

    if (!/^.+@.+\..+$/gi.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    const hasSpecialChars = /[^A-z]/gi.test(password);
    const hasUpperCase = /[A-Z]/g.test(password);
    const hasLowerCase = /[a-z]/g.test(password);

    if (!(password.length >= 8)) {
      setPasswordError("Your password must be at least 8 characters long.");
      isValid = false;
    } else if (!(hasSpecialChars && hasUpperCase && hasLowerCase)) {
      setPasswordError(
        "Your password must contain uppercase, lowercase, and special characters."
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (validate()) {
      mutate({ email, password });
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="side w-1/2 bg-[#F8EAFF] shrink-0 flex-col px-10 hidden lg:flex">
        <Image
          src="/logo.png"
          alt="Team Achieve Logo"
          layout="intrinsic"
          width={300}
          height={100}
          className="h-10 w-full mb-auto mt-4"
        />

        <div className="body w-full h-auto grow-1 flex bg-transparent overflow-hidden rounded-xl my-5 justify-center">
          <Image
            src="/people.png"
            alt="Happy People"
            layout="intrinsic"
            width={500}
            height={300}
            className="rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col mt-auto shrink-0 items-center py-4">
          <b className="font-bold text-[#622081]">Team Achieve</b>
          <span className="text-[#555]">
            Your perfect solution for funding your desires
          </span>
        </div>
      </div>
      <div className="side flex flex-col lg:w-1/2 w-full shrink-0 bg-white">
        <Image
          src="/logo.png"
          alt="Team Achieve Logo"
          layout="intrinsic"
          width={300}
          height={100}
          className="h-24 mt-11 mb-3 lg:hidden mx-auto"
        />

        <div className="content mt-4 w-full flex flex-col items-center px-4">
          <h3 className="text-[#622081] font-bold text-2xl md:text-2xl">
            Welcome Back
          </h3>
          <small className="text-[#555] text-center">
            Enter your email address and password to access your account.
          </small>
          <div className="inputWrapper flex w-full flex-col relative pt-4">
            <span className="relative">
              Email Address <small className="text-lg text-[#FF0000]">*</small>
            </span>
            <input
              className="border hover:border-2 border-gray-300 outline-none rounded-md p-2 my-1"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <span className="error text-xs text-red-500">{emailError}</span>
            )}
          </div>
          <div className="inputWrapper flex w-full flex-col relative pt-4">
            <span className="relative">
              Password <small className="text-lg text-[#FF0000]">*</small>
            </span>
            <div className="input-line flex w-full h-10 border-gray-300 border hover:border-2 rounded-md overflow-hidden">
              <input
                className="outline-none w-full h-full px-2"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="h-10 w-10 flex pb-10 shrink-0 border-l border-gray-300 relative active:bg-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Image
                  className="h-4 w-4 m-auto mt-3"
                  src={showPassword ? "/open.png" : "/closed.png"}
                  alt="Toggle Password Visibility"
                  layout="intrinsic"
                  width={16}
                  height={16}
                />
              </div>
            </div>
            {passwordError && (
              <span className="error text-xs text-red-500">
                {passwordError}
              </span>
            )}
          </div>
          <div className="w-full mt-1 flex justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="my-auto mr-2 w-4 h-4" />{" "}
              Remember me
            </div>
            <Link href="#" className="text-[#622081]">
              Forgot Password?
            </Link>
          </div>
          <button
            className="button w-full text-center rounded-md py-2 mt-6 font-bold"
            onClick={handleSubmit}
          >
            Sign In
          </button>
          <div className="w-full text-center mt-2 text-[#555]">
            Don't have an account?{" "}
            <Link href="#" className="text-[#622081] font-bold">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
