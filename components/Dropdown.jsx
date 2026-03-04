import { useState } from "react";
import { signOut } from "next-auth/react";

export default function Dropdown({ username, image }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div onClick={() => setOpen(!open)} className="flex items-center cursor-pointer gap-2">
        <img src={image} className="w-10 h-10 rounded-full" />
        <span>Welcome, {username} ▾</span>
      </div>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-[#1a1a28] p-2 rounded-lg shadow-lg flex flex-col">
          <button className="hover:text-purple-400 mb-2">View Profile</button>
          <button onClick={() => signOut()} className="hover:text-purple-400">Logout</button>
        </div>
      )}
    </div>
  );
}
