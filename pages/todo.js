// ?CLASS
class Tarea {
  //! COMO GENERAR UN ID
  constructor(text, done = false) {
    this.text = text;
    this.done = done;
  }
}

// let tarea = {
//   text: "ir al super",
//   done: false,
// };

// ? DB
let tareas = [];

let contenedortarjetas = document.getElementById("contenedor-tarjetas");

/*
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

const agregarTarea = (e) => {
  // ! 1-Controlar formulario evento SUBMIT
  e.preventDefault();

  // ! 2-Capturar el VALOR
  let tarea = document.querySelector("#textTarea").value;
  console.log(tarea);

  // ! 3-VALIDACIONES
  if (tarea.length > 4) {
    tareas.push(new Tarea(tarea));
  } else {
    alert(`${tarea} debe tener como minimo 4 letras!`);
  }
};

console.log(tareas);
