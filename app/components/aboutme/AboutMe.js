"use client";
import { useState, useEffect } from "react";

export default function AboutMe() {
  const [name, setName] = useState("DoBerman");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const changeName = () => {
    setName("JabDoberman");
  };

  const fetchData = async () => {
    try {
      const response = await fetch("/api");
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-12 px-4">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden p-6">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-blue-950 p-5 rounded-xl">
          <img
            src="https://media1.tenor.com/m/qVFwBCEg80UAAAAC/black-clover-yami-sukehiro.gif"
            alt="Profile"
            className="w-28 h-28 object-cover rounded-xl shadow-lg"
          />
          <div className="text-white text-center md:text-left space-y-2">
            <h1 className="text-xl font-semibold italic">
              {data?.name || "Loading..."}
            </h1>
            <p className="text-sm md:text-base line-clamp-3">
              {data?.job || "Position..."}
            </p>
            <div>
              <label className="block text-sm">My name is:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="mt-1 px-3 py-1 rounded border border-gray-300 bg-white text-black w-full md:w-64"
              />
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-6 space-y-2 text-sm md:text-base text-gray-700">
          <p>
            <span className="font-semibold">University:</span>{" "}
            {data?.university || "-"}
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            {data?.email || "-"}
          </p>
          <p>
            <span className="font-semibold">Tel:</span>{" "}
            {data?.tel || "-"}
          </p>
        </div>

        {/* Button */}
        <div className="mt-6 text-center">
          <button
            onClick={changeName}
            className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 transform hover:scale-105"
          >
            Click Me!
          </button>
        </div>
      </div>
    </div>
  );
}
