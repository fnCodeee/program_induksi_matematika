import React, { useEffect, useState } from "react";
import IntroLoader from "./IntroLoader";
import Card from "./Elements/Card";
import { bilanganGanjil, bilanganKuadrat } from "./Controllers/controllers";

const App = () => {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [hasilGanjil, setHasilGanjil] = useState("");
  const [hasilKuadrat, setHasilKuadrat] = useState("");

  const funcKuadrat = (params) => {
    if (isNaN(params)) {
      setHasilKuadrat("inputnya nomor dong, bre!");
      return;
    }
    const result = bilanganKuadrat(params);
    setHasilKuadrat(result);
  };

  const funcGanjil = (params) => {
    if (isNaN(params)) {
      setHasilGanjil("inputnya nomor dong, bre!");
      return;
    }
    const result = bilanganGanjil(params);
    setHasilGanjil(result);
  };

  return (
    <>
      {!loaderFinished && (
        <IntroLoader onComplete={() => setLoaderFinished(true)} />
      )}

      <main
        // style={{ opacity: loaderFinished ? 1 : 0, transition: "opacity 0.5s" }}
        className="h-screen w-full flex flex-col p-6 justify-between"
      >
        <div className="w-full flex flex-col md:flex-row justify-between">
          <p>Nama : Faiz Atha Aghitsna</p>
          <p>NIM : 4112755201250113</p>
        </div>
        <div className="h-full w-full flex py-4 gap-6 flex-col justify-between md:flex-row">
          <Card
            typeOfMath="Bilangan Ganjil"
            hasil={hasilGanjil}
            input={funcGanjil}
          />
          <Card
            typeOfMath="Bilangan Kuadrat"
            hasil={hasilKuadrat}
            input={funcKuadrat}
          />
        </div>
      </main>
    </>
  );
};

export default App;
