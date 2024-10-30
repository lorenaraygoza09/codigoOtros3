// Tenemos un li de productos

const productos = [
  /* añadi un id a cada producto */
  {id: 1, nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg", descripcion: "Tacón negro de charol"},
  {id: 2, nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg", descripcion: "Zapatilla azul con moño y herraje plateado"},
  {id: 3, nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg", descripcion: "Botín de gamusa negra con tacon"},
  {id: 4, nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg", descripcion: "Bota de gamusa azul con tacón, cadena y herrajes dorados"},
  {id: 5, nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg", descripcion: "Zapatilla de satín rojo con tacón pequeño"}
]
/* cambie getElementsByName por getElementById,  añadi ";" al final y cambie li por list*/
const list = document.getElementById("lista-de-productos");
/* $i complete a $input */
const $input = document.querySelector('.input');

//cree la funcion displayProductos que se menciona mas abajo
function displayProductos (productos) {
for (let i = 0; i < productos.length; i++) {
  //cambie todas las var por let y cambie el nombre de las variables 
  let card = document.createElement("div");
  card.classList.add("producto");

  let titulo = document.createElement("h3");
  titulo.classList.add("titulo");
  titulo.textContent = productos[i].nombre;

  let subtitulo = document.createElement("p")
  subtitulo.classList.add("subtitulo")
  subtitulo.textContent = productos[i].descripcion;
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);
//añadi ;
  card.appendChild(titulo);
  card.appendChild(imagen);
  card.appendChild(subtitulo);

  list.appendChild(card);
}
}
displayProductos(productos);
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  const texto = $input.value.toLowerCase(); //converti el texto ingresado a minusculas
  const productosFiltrados = filtrado(productos, texto );
//funcion que muestra los productos filtrados
  displayProductos(productosFiltrados);
}
const filtrados = (productos = [], texto) => {
  return productos.filter(item=>
    item.tipo.toLowerCase().includes(texto) ||
    item.color.toLowerCase().includes(texto)
  );
}
  /* for (let i = 0; i < productosFiltrados.length; i++) {
    let card = document.createElement("div");
    card.classList.add("producto");
  
    let titulo = document.createElement("h3");
    titulo.classList.add("titulo");
    titulo.textContent = productosFiltrados[i].nombre;
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    card.appendChild(titulo);
    card.appendChild(imagen);
    card.appendChild(subtitulo);
  
    list.appendChild(card);
  } */


/* const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}   */