const Landing = (p) => {
  const { typeOfMath = "Dummy Bilangan Ganjil", nilai_n } = p;
  return (
    <div className="flex-col border-3 rounded-2xl border-slate-500 w-full flex p-6">
        <h1 className="text-2xl w-full text-center">{typeOfMath}</h1>
        <div className="h-full flex flex-col justify-between">
          <div className="h-full">
            <div className="flex flex-col justify-between gap-2">
              <p className="text-shadow-md text-slate-500">masukan nilai n</p>
              <input
                className="w-full border-2 border-blue-500 rounded-lg px-3 py-2"
                type="text"
              />
            </div>
          </div>
          <div className="h-full shadow-lg bg-[#F6F3EE] rounded-lg p-6 ">
            <h1>Hasil:</h1>
          </div>
        </div>
    </div>
  );
};

export default Landing;
