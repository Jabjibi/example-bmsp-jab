"use client";
import { useState, useEffect } from "react";

export default function AboutMe() {
  const [name, setName] = useState("DoBerman");
  const [data, setData] = useState(null);

  const changeName = () => {
    setName("JabDoberman");
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-6 mt-10">
      <div className="w-full flex flex-col justify-center gap-4 bg-blue-950 rounded-xl shadow p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <img
            src="https://media1.tenor.com/m/qVFwBCEg80UAAAAC/black-clover-yami-sukehiro.gif"
            alt="Profile"
            className="w-28 h-28 rounded-xl object-cover shadow-md mx-auto md:mx-0"
          />
          <div className="flex flex-col text-white justify-center overflow-hidden text-center md:text-left">
            <span className="font-bold italic text-lg">
              {data?.name || "Loading..."}
            </span>
            <p className="line-clamp-3 text-sm md:text-base">
              {data?.job || "Position..."}
            </p>
            <p className="mt-2 text-sm">
              My name is:{" "}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 px-2 py-1 rounded border border-gray-300 text-white w-full md:w-auto"
              />
            </p>
          </div>
        </div>
        <button
          onClick={changeName}
          className="bg-blue-700 hover:bg-blue-400 text-blue-100 font-bold 
          py-2 px-4 rounded-full shadow-md hover:text-white 
          transform transition-all duration-300 hover:scale-105"
        >
          ClickMe!
        </button>
      </div>

      <div className="mt-6 text-sm md:text-base">
        <p className="mb-1">
          <span className="font-semibold">University:</span>{" "}
          {data?.university || "-"}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Email:</span> {data?.email || "-"}
        </p>
        <p>
          <span className="font-semibold">Tel:</span> {data?.tel || "-"}
        </p>
      </div>
    </div>
  );
}
