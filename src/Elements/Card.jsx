import { useState } from "react";
import { bilanganGanjil } from "../Controllers/controllers";

const Card = (p) => {
  const {
    typeOfMath = "Dummy Bilangan Ganjil",
    hasil = null,
    input,
    placeholder = "masukan nilai n",
  } = p;
  const [n, setN] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    input(Number(n));
    setN("")
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="h-full flex-col border-3 border-[#14c38e] rounded-2xl w-full flex p-6"
    >
      <h1 className="text-2xl w-full text-center">{typeOfMath}</h1>
      <div className="h-full flex flex-col justify-between">
        <div className="h-full w-full flex justify-center items-center">
          <div className="relative w-full flex border-3 border-[#14c38e] rounded-full">
            <input
              className="w-full focus:outline-none px-6 py-3 rounded-full border-none"
              type="text"
              placeholder={placeholder}
              value={n}
              onChange={(e) => setN(e.target.value)}
            />
            <button className="absolute right-0 bg-[#14c38e] rounded-full px-12 py-3 text-white">
              Submit
            </button>
          </div>
        </div>
        <div className="h-full shadow-lg bg-[#F6F3EE] rounded-lg p-6 ">
          <h1>Hasil:</h1>
          <p className="w-full h-full justify-center items-center flex text-2xl tracking-wider">{hasil}</p>
        </div>
      </div>
    </form>
  );
};

export default Card;
