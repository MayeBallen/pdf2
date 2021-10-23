import React from "react";
import UpperBar from "../components/Upperbar";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <UpperBar />
      <h1>Bienvenido a Yeapdata porfavor dar click para acceder al pdf</h1>
      <br />

      <a href="./pdf" target="_blank">
        {" "}
        <button class="primary">Ir a PDF</button>
      </a>
    </div>
  );
}

export default App;
