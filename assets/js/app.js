let personajes = [
{ id: 1, nombre: "A-Bomb", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg" },
{ id: 2, nombre: "Abe Sapien", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg" },
{ id: 3, nombre: "Abin Sur", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg" },
{ id: 4, nombre: "Abomination", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg" },
{ id: 5, nombre: "Abraxas", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg" },
];

const rowContainer = document.querySelector("#rowContainer")
const formulario = document.querySelector("#formulario")

const cargarPersonajes = (arregloDePersonajes) => {

    rowContainer.innerHTML = ""

    arregloDePersonajes.forEach(personaje => {
        rowContainer.innerHTML += `
            <div class="col-3 my-2" data-id=${personaje.id}>
          <div class="card" style="width: 10rem">
            <img
              src=${personaje.imagen}
              class="card-img-top"
              alt=${personaje.nombre}
              style="height: 150px; object-fit: contain"
            />
            <div class="card-body">
              <h5 class="card-title">${personaje.nombre}</h5>
              <a href="#" class="btn btn-danger btn-eliminar">Eliminar</a>
            </div>
          </div>
        </div>
        
        `
    });
}

cargarPersonajes(personajes)


rowContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn-eliminar")){
        const contenedorPrincipalMasCercano = e.target.closest(".col-3")
        const idDelPersonaje = Number(contenedorPrincipalMasCercano.dataset.id);

        personajes = personajes.filter(personaje => {
            return personaje.id !== idDelPersonaje
        })

        contenedorPrincipalMasCercano.remove()
    }
})

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const valorNombre = formulario.nombre.value;
    const valorImagen = formulario.imagen.value;

    const nuevoObjeto = {
        id: personajes.length + 1,
        nombre: valorNombre,
        imagen: valorImagen,
    }

    personajes.push(nuevoObjeto)

    cargarPersonajes(personajes)
})