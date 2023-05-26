import { useState, useEffect } from "react";
import TableView from "./components/TableView";

function App() {
  const [data, setData] = useState();
  const fetchJson = () => {
    fetch("/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    fetchJson();
  }, []);

  return <div className="App">{data && <TableView data={data} />}</div>;
}

export default App;
