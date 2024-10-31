function NavBar() {
  const header = document.getElementsByTagName("header");
  const nav = document.createElement("nav");
  nav.classList.add("navbar", "navbar-expand-lg", "bg-dark", "navbar-dark");
  nav.innerHTML = `
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Quienes Somos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="../pages/contact.html">Contactanos</a>
        </li>
      </ul>
      <a class="btnLogin" href="../pages/login.html" > <i class="bi bi-box-arrow-in-right mx-1"></i> Login</a>
    </div>
  </div>
    `;
  header[0].appendChild(nav);
}

export { NavBar };
