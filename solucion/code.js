/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt('Ingresar nombre');

  const date = new Date();
  const currentYear = date.getFullYear();
  const year = prompt('Ingresar año de nacimiento');
  datosPersona.edad = currentYear - year;

  datosPersona.ciudad = prompt('Ingresar ciudad de nacimiento');

  let likesProgramming = confirm('Te interesa JS?');
  datosPersona.interesPorJs = likesProgramming ? 'Si' : 'No';

  console.log(datosPersona);
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let datosUsuario = document.querySelector('div.card-header');
  datosUsuario.innerHTML = `<h3>Nombre: <span id="nombre">${datosPersona.nombre}</span></h3>
                            <h3>Edad: <span id="edad">${datosPersona.edad}</span></h3>
                            <h3>Ciudad: <span id="ciudad">${datosPersona.ciudad}</span></h3>
                            <h3>Interes en Javascript: <span id="javascript">${datosPersona.interesPorJs}</span></h3>`;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let contenedorMaterias = document.querySelector('#fila');
  let totalMaterias = document.querySelectorAll('.caja').length;

  while (totalMaterias<listado.length){
    listado.forEach(materia => {
      const contenedor = document.createElement('div');
      contenedor.innerHTML='';
      contenedor.classList.add('caja');
      contenedor.innerHTML = `<img src='${materia.imgUrl}' alt='${materia.lenguajes}'></img>
                              <p>${materia.lenguajes}</p>
                              <p>${materia.bimestre}</p>`;
      contenedorMaterias.appendChild(contenedor);
      totalMaterias++;
    })
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let sitio = document.querySelector('#sitio');
  sitio.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
function visualizarSobreMi () {
  window.addEventListener('keypress', function(e) {
    if (e.key=='f') {
      let sobreMi = document.querySelector('#sobre-mi');
      sobreMi.classList.remove('oculto');
    }
  })
}
visualizarSobreMi();
