import { useState } from "react";
import { bilanganGanjil } from "../Controllers/controllers";

const Card = (p) => {
  const {
    typeOfMath = "Dummy Bilangan Ganjil",
    hasil = {},
    input,
    placeholder = "masukan nilai n",
    bentuk,
  } = p;
  const [n, setN] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    input(Number(n));
    setN("");
  };

  const isError = hasil.error !== null;
  const hasData = hasil.total !== null && !isError;
  return (
    <form
      onSubmit={handleSubmit}
      className="h-full flex-col border-3 border-[#14c38e] rounded-2xl w-1/2 flex p-6"
    >
      <h1 className="text-2xl w-full text-center">{typeOfMath}</h1>
      <div className="h-full flex flex-col justify-between">
        <div className="h-full w-full flex justify-center items-center">
          <div className="relative w-full flex border-3 border-[#14c38e] rounded-full">
            <input
              className="w-full focus:outline-none px-4 md:px-6 py-2 md:py-3 rounded-full border-none"
              type="number"
              placeholder={placeholder}
              value={n}
              onChange={(e) => setN(e.target.value)}
            />
            <button className="absolute right-0 bg-[#14c38e] rounded-full px-6 md:px-12 py-2 md:py-3 text-white">
              Submit
            </button>
          </div>
        </div>
        <h1 className="font-semibold mb-2">Hasil:</h1>
        <div className="relative w-full h-full shadow-lg overflow-y-auto  bg-[#F6F3EE] rounded-lg p-6 flex flex-col items-center justify-between">
          <div className="w-full h-full overflow-y-auto custom-scrollbar">
            <p className="w-full tracking-wider break-words whitespace-normal leading-relaxed">
              {Array.isArray(hasil.deret) ? hasil.deret.join(" + ") : hasil.deret}
            </p>
          </div>
          {isError && (
            <p className="absolute bottom-0 rounded-full bg-[#F6F3EE] w-full text-center text-red-500 text-xl md:text-2xl whitespace-normal leading-relaxed">
              {hasil.error}
            </p>
          )}
          {hasData && (
            <p className="relative bottom-0 rounded-full bg-[#F6F3EE] w-full text-center text-[#14c83e] text-xl md:text-2xl whitespace-normal leading-relaxed">
              {hasil.total}
            </p>
          )}
        </div>

        {!hasData && !isError && (
          <p className="text-gray-400 italic">Belum ada data...</p>
        )}
      </div>
    </form>
  );
};

export default Card;
