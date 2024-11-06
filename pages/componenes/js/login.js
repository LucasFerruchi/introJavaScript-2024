import { Footer } from "./footer.js";
import { NavBar } from "./navBar.js";

const containerFormLogin = document.getElementById("containerFormLogin");

function formLogin() {
  const form = document.createElement("form");
  form.classList.add("border", "border-2", "rounded-2", "m-4", "p-3", "w-50");

  form.innerHTML = `               <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label"
    >Dirección de email</label
  >
  <input
    type="email"
    class="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    placeholder="Ingrese su email"
    required
  />
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label"
    >Contraseña</label
  >
  <input
    type="password"
    class="form-control"
    id="exampleInputPassword1"
    placeholder="Ingrese su contraseña"
    required
  />
  <div class="m-2 form-check">
    <input
      type="checkbox"
      class="form-check-input"
      id="exampleCheck1"
    />

    <label class="form-check-label" for="exampleCheck1"
      >Recordarme</label
    >
  </div>
  <button type="submit" class="btn btn-primary mb-2">
    Ingresar
  </button>
</div>
<a href="/pages/error404.html">Olvide mi contraseña</a>
<hr />
<div class="d-flex">
  <p>No tienes cuenta? -</p>
  <a
    href="./register.html"
  >
    Registrarse</a
  >
</div>

`;
  containerFormLogin.appendChild(form);
}

window.onload = function () {
  NavBar();
  formLogin();
  Footer();
};
