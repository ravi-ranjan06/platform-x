import { useEffect, useState } from "react";

const App = () => {
  const [status, setStatus] = useState<string>("Loading...");

  useEffect(() => {
    fetch("http://localhost:4000/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("Backend not reachable"));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React based UI boiler plate</h1>
      <p>Backend status: {status}</p>
    </div>
  );
};

export default App;
