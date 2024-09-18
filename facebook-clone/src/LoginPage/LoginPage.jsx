import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login">
      <div className="facebook">
        <div className="facebook-title">facebook</div>
        <div className="facebook-text">
          Facebook te ayuda a comunicarte y <br /> compartir con las personas
          que forman <br /> parte de tu vida.
        </div>
      </div>
      <div className="loginContainer">
        <div className="loginDetail">
          <input
            type="email"
            placeholder="Correo electrónico o número de teléfono"
          />
          <br />
          <input type="password" placeholder="Contraseña" />
          <button className="btn">Iniciar Sesión</button>
          <div className="forget">
            <a href="forget">¿Has olvidado la contraseña?</a>
          </div>
        </div>

        <div className="create">
          <br />
          <button className="btnCreate"> Crear cuenta nueva</button>
        </div>

        <div className="page">
          <a href="createpage">Crea una página</a> para un famoso, una marca o
          una empresa.
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
