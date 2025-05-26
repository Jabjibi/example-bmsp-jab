import Image from "next/image";

export default function Home() {
  return (
    <div className="w-96 mx-auto bg-white rounded-xl shadow-md p-6 mt-10">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src="https://media1.tenor.com/m/BIzl7idAM8YAAAAC/yuno-black-clover.gif"
          alt="Profile"
        />
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Tanapon Yurawan</h1>
          <p className="text-black font-weight">My nickname : Jab kub</p>
          <p className="text-gray-600">Devloper</p>
        </div>
      </div>
      <div className="mt-4">
        <p>
          <span className="font-semibold">University:</span>
          Kasetsart Sriracha Campus.
        </p>
        <p>
          <span className="font-semibold">Email:</span> 
          tanapon.yu@ku.th
        </p>
        <p>
          <span className="font-semibold">Tel:</span> 
          090-215-9223
        </p>
      </div>
    </div>
  );
}
