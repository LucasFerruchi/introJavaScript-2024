function NavBar() {
 const header = document.getElementsByTagName("header");
 const nav = document.createElement("nav");
 nav.classList.add("navbar", "fixed-top")
 nav.innerHTML =`
    <div class="container-fluid">
          <a class="navbar-brand" href="/index.html"><img src="/img/cronom.png" alt="Logo" width="120" height="70" class="d-inline-block align-text-center">
          Cronómetro</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Cronómetro</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="./html/quienesSomos.html">Quienes somos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Nuestras redes</a>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Buscar</button>
              </form>
            </div>
          </div>
        </div>
    `;
  header[0].appendChild(nav);
}

export { NavBar }
