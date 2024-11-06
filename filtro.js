// Productos iniciales
const productos = [
  {
    id: 1,
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./taco-negro.jpg",
    descripcion: "Tacón negro de charol",
  },
  {
    id: 2,
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "./taco-azul.jpg",
    descripcion: "Zapatilla azul con moño y herraje plateado",
  },
  {
    id: 3,
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "./bota-negra.jpg",
    descripcion: "Botín de gamusa negra con tacón",
  },
  {
    id: 4,
    nombre: "Bota azul",
    tipo: "bota",
    color: "azul",
    img: "./bota-azul.jpg",
    descripcion: "Bota de gamusa azul con tacón, cadena y herrajes dorados",
  },
  {
    id: 5,
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "./zapato-rojo.jpg",
    descripcion: "Zapatilla de satín rojo con tacón pequeño",
  },
];

// Referencia al contenedor de productos
const list = document.getElementById("lista-de-productos");
// Referencia al campo de entrada y al botón de filtro
const inputFiltro = document.getElementById("inputFiltro");
const botonDeFiltro = document.querySelector("#botonFiltro");

// Función para mostrar los productos en pantalla
function displayProductos(productos) {
  // Limpiar el contenedor antes de agregar nuevos productos
  list.innerHTML = "";
  if (productos.length === 0) {
    // Si no hay productos, mostrar mensaje
    const mensaje = document.createElement("p");
    mensaje.textContent =
      "No se encontraron productos que coincidan con tu búsqueda.";
    list.appendChild(mensaje);
  } else {
    productos.forEach((producto) => {
      let card = document.createElement("div");
      card.classList.add("producto");

      let titulo = document.createElement("h3");
      titulo.classList.add("titulo");
      titulo.textContent = producto.nombre;

      let subtitulo = document.createElement("p");
      subtitulo.classList.add("subtitulo");
      subtitulo.textContent = producto.descripcion;

      let imagen = document.createElement("img");
      imagen.setAttribute("src", producto.img);

      card.appendChild(titulo);
      card.appendChild(imagen);
      card.appendChild(subtitulo);

      list.appendChild(card);
    });
  }
}
// Mostrar todos los productos 
displayProductos(productos);

// Función para filtrar productos
const filtrados = (productos, texto) => {
  return productos.filter(
    (item) =>
      item.tipo.toLowerCase().includes(texto) ||
      item.color.toLowerCase().includes(texto)
  );
};

// Mostrar los productos al hacer click
botonDeFiltro.onclick = function () {
  const texto = inputFiltro.value.trim().toLowerCase(); 
  // Mostrar productos filtrados
  displayProductos(productosFiltrados);
};
