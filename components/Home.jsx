import { useEffect, useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getLogin = async (e) => {
       e.preventDefault();
    try {
      const res = await fetch(`apps.authentication.api.v1.urls`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
       
        
      });
    console.log(res);
      const data = await res.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect


  return (
    <>
      <form 
       onSubmit={getLogin}
      className="w-[50%] h-75 p-5 rounded-2xl m-auto mt-50 bg-blue-300 flex flex-col shadow-2xl gap-5">
        <label className=" flex items-center gap-6" >username :
        <input
        className="w-[82%] border border-gray-300 rounded-2xl p-4"
        type="username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </label>

      <label className=" flex items-center gap-6">password :
        <input
      className="w-[82%] border border-gray-300 rounded-2xl p-4"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </label>

      <button
        type="submit"
        className="bg-blue-500 w-[20%] text-whitesj rounded-2xl text-center m-auto"
      >
        Login
      </button>
      </form>
    </>
  );
}
