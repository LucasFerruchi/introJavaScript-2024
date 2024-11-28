function Footer() {
    const footer = document.getElementsByTagName("footer");
    const section = document.createElement("section");
    section.classList.add("colorFooter", "text-center","container-fluid")
    section.innerHTML =`
            <article class="row ">
                <div class="col-sm-12 col-md-3 ">
                    <img class="logoSize" src="/img/cronometro-.png" alt="logo-cronometro" />
                </div>
                <div class="col-sm-12 col-md-3">
                    <h5 class="jost">Soporte</h5>
                    <ul class="list-unstyled d-flex justify-content-center flex-md-column">
                        <li>
                            <a class="jost pe-2" href="./html/quienesSomos.html">Quienes Somos</a>
                        </li>
                        <li>
                            <a class="jost ps-2 ps-md-0" href="../pages/error404.html">Ayuda</a>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-12 col-md-3">
                    <h5 class="jost pb-md-2 pt-2">Condiciones de uso</h5>
                    <p class="jost my-0">Privacidad</p>
                </div>
                <div class="col-sm-12 col-md-3">
                    <h5 class="jost mt-4 mt-md-0">Nuestras redes</h5>
                    <a class="socialSize" href="../pages/error404.html"><i class="bi bi-instagram text-dark"></i></a>
                    <a class="socialSize px-2" href="../pages/error404.html"><i class="bi bi-facebook text-dark"></i></a>
                    <a class="socialSize" href="../pages/error404.html"><i class="bi bi-twitter text-dark"></i></a>
                </div>
            </article>
        </section>
        <p class="text-center border-none montserrat my-0 mt-2">
            &copy; 2024. Todos los derechos reservados
        </p>
    `
    footer[0].appendChild(section);
}

export { Footer } ;

