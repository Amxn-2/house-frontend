"use client";
import axios from "../api/axios";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Page: React.FC = () => {
  const handleSubmit: React.FormEventHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/users/signup",
        {
          name: name,
          password: password,
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true
        }
      );
      console.log(response)
    } catch (err) {
      console.log(err);
    }
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPass] = useState("");

  return (
    <>
    <Navbar/>
    <section className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center bg-[#121212] p-7 max-w-md flex-col gap-4 rounded-lg">
        <p className="text-2xl font-medium">SIGN UP</p>
        <form onSubmit={handleSubmit}>
          <p className="text-lg mb-2">Name</p>
          <input
            className="rounded-md bg-[#333] p-2 outline-none w-full mb-3"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <p className="text-lg mb-2">Email</p>
          <input
            className="rounded-md bg-[#333] p-2 outline-none w-full mb-3"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p className="text-lg mb-2">Password</p>
          <input
            className="rounded-md bg-[#333] p-2 outline-none w-full mb-5"
            onChange={(e) => setPass(e.target.value)}
          ></input>
          <button className="bg-[#333] w-full rounded-lg p-2 hover:bg-white hover:text-[#121212] transition-colors">
            Create Account
          </button>
        </form>
          <h1>Already have an account ? <a href="/login" className="hover:text-blue-200">login</a></h1>
      </div>
    </section>
    </>
  );
};
export default Page;