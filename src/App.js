import React, { useState, useEffect } from "react";
import InputForm from "./Inputform";
import ResponseView from "./Responseview";

const App = () => {
  const [response, setResponse] = useState(null);

  // Set dynamic title
  useEffect(() => {
    document.title = "0827CS211272";
  }, []);

  return (
    <div>
      <InputForm setResponse={setResponse} />
      {response && <ResponseView response={response} />}
    </div>
  );
};

export default App;
