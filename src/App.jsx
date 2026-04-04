import React, { useState } from "react";
import Landing from "./Elements/Landing";
import IntroLoader from "./IntroLoader";

const App = () => {
  const [loaderFinished, setLoaderFinished] = useState(false);
  return (
    <>
      {/* {!loaderFinished && (
        <IntroLoader onComplete={() => setLoaderFinished(true)} />
      )} */}

      <main
        className="h-screen w-full flex p-6 gap-6"

        // style={{ opacity: loaderFinished ? 1 : 0, transition: "opacity 0.5s" }}
      >
        <Landing />
        <Landing />
      </main>
    </>
  );
};

export default App;
