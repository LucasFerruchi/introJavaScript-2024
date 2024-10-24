// ?CLASS
class Tarea {
  constructor(id, text, done = false) {
    this.id = id;
    this.text = text;
    this.done = done;
  }
}

// let tarea = {
//   id: 1684131684651687631687,
//   text: "ir al super",
//   done: false,
// };

// ? DB
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

let contenedortarjetas = document.getElementById("contenedor-tarjetas");

const agregarTarea = (event) => {
  // ! 1-Controlar formulario evento SUBMIT
  event.preventDefault();

  // ! 2-Capturar el VALOR
  let tarea = document.querySelector("#textTarea").value;
  console.log(tarea);

  // ! 3-VALIDACIONES
  if (tarea.length > 4 && tarea.length < 15) {
    tareas.push(new Tarea(new Date().getTime(), tarea)); //? INSTANCIA

    localStorage.setItem("tareas", JSON.stringify(tareas));

    document.querySelector("#textTarea").value = "";

    listarTareas();
  } else {
    alert(`${tarea} debe tener como minimo 4 letras!`);
  }
};

const listarTareas = () => {
  //! Limpiar el contenedor
  contenedortarjetas.innerHTML = "";

  //! Crear la TARJETA-CARD
  tareas.map((item) => {
    //1er NODO
    let columna = document.createElement("div");
    columna.classList = "col-12 col-md-6 m-2";

    //2do NODO
    let tarjeta = `<div class="card">
  <div
    class="card-body d-flex justify-content-between align-items-center"
  >
    <span>${item.text}</span>
    <button class="btn btn-danger btn-md">X</button>
  </div>
</div>`;

    columna.innerHTML = tarjeta;

    contenedortarjetas.append(columna);
  });
};

/*
!1er NODO = COLUMNA
<div class="col-12 col-md-6 m-2">

</div>

!2do NODO = TARJETA
<div class="card">
  <div
    class="card-body d-flex justify-content-between align-items-center"
  >
    <span>ir al super</span>
    <button class="btn btn-danger btn-md">X</button>
  </div>
</div>

!columna.innerHTML = tarjeta;
<div class="col-12 col-md-6 m-2">
 <div class="card">
  <div
    class="card-body d-flex justify-content-between align-items-center"
  >
    <span>ir al super</span>
    <button class="btn btn-danger btn-md">X</button>
  </div>
 </div>
</div>
*/

listarTareas();
