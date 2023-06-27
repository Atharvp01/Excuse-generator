import { useState } from "react";
import Axios from "axios";

function App() {
  const [excuse, setExcuse] = useState("");
  const fetchData = async (excuseCategory) => {
    const response = await Axios.get(
      `https://excuser-three.vercel.app/v1/excuse/${excuseCategory}`
    );
    setExcuse(response.data[0].excuse);
    console.log(response);
  };
  return (
    <>
      <h1>Generate Excuse</h1>
      <button onClick={() => fetchData("family")}>Family Excuse</button>
      <button onClick={() => fetchData("office")}>Office Excuse</button>
      <button onClick={() => fetchData("children")}>Children Excuse</button>
      <button onClick={() => fetchData("college")}>College Excuse</button>
      <button onClick={() => fetchData("party")}>Party Excuse</button>
      <button onClick={() => fetchData("funny")}>Funny Excuse</button>
      <button onClick={() => fetchData("unbelievable")}>
        Unbelievable Excuse
      </button>
      <button onClick={() => fetchData("developers")}>Developers Excuse</button>
      <button onClick={() => fetchData("gaming")}>Gaming Excuse</button>
      <h1>{excuse}</h1>
    </>
  );
}

export default App;
