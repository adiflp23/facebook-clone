import React from "react";
import "./App.css";
import LoginPage from "./LoginPage/LoginPage";
import AddIcon from "@mui/icons-material/Add";

function App() {
  return (
    <>
      <LoginPage />
      <div className="languages">
        <a href="Espanol">Español (España)</a>
        <a href="Catala">Catalá</a>
        <a href="Frances">Français (France)</a>
        <a href="Rumano">Română</a>
        <a href="Italiano">Italiano</a>
        <a href="Gakegi">Galego</a>
        <a href="Aleman">Deutsch</a>
        <a href="Portuges">Português (Brasil)</a>
        <a href="Arabe"> العربية हिन्दी</a>
        <button className="btnPlus">
          <AddIcon fontSize="extrasmall" />
        </button>
      </div>
    </>
  );
}

export default App;
