//? BOM - Browser Object Model / DOM - Document Object Model
/*

A- NAVIGATOR
B- Funcionews para manejar el TIEMPO
C- LOCATION
D- DATE
E- LOCALSTORAGE
*/

//?A- NAVIGATOR

//online
if (navigator.onLine) {
  console.log("Estas en linea!");
} else {
  console.log("No estas en linea!");
}

//deviceMemory
if (navigator.deviceMemory < 8) {
  console.log("Lo sentimos, memoria insuficiente");
}

//geolocation
const miUbicacion = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;

    document.write(`Tu ubicación actual es:<br/>
        Latitud: ${crd.latitude} <br/>
        Longitud: ${crd.longitude} <br/>
        Más o menos ${crd.accuracy} metros.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
};

// miUbicacion();

//?B- Funcionews para manejar el TIEMPO

let intervalo = null;

//setInterval
const fechaActual = () => {
  let fecha = "";
  intervalo = setInterval(() => {
    fecha = new Date();
    //html - limpiar
    document.body.innerText = "";
    //html - imprimir
    document.write(`<h3>${fecha}</h3>`);
  }, 1000);
};

// fechaActual();

//clearInterval
const detener = () => {
  clearInterval(intervalo);
};

//setTimeOut
//?C - LOCATION
const redirigir = () => {
  document.write("<h3>Redireccionando!</h3>");
  setTimeout(() => {
    // location.assign("https://www.google.com.ar/");
    location = "https://www.google.com.ar/";
  }, 5000);
};

redirigir();
