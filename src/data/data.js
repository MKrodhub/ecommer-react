const productos = [
    {
      id: 1,
      nombre: "Remera Deportiva Wilson",
      precio: "1500$",
      descripcion: "Remera manga corta",
      categoria: "upperbody",
      stock: 10,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_982622-MLA52449338331_112022-O.webp"
    },
    {
      id: 1,
      nombre: "Remera Deportiva Wilson",
      precio: "1500$",
      descripcion: "Remera manga corta",
      categoria: "upperbody",
      stock: 10,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_982622-MLA52449338331_112022-O.webp"
    },
    {
      id: 3,
      nombre: "Campera Rompeviento Abyss",
      precio: "5000$",
      descripcion: "Rompe Viento negro simple",
      categoria: "upperbody",
      stock: 10,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_814534-MLA54984446239_052023-O.webp"
    },
    {
      id: 5,
      nombre: "Campera Con Capucha Puma",
      precio: "3000$",
      descripcion: "Campera negra",
      categoria: "upperbody",
      stock: 10,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_658662-MLA71396297311_082023-O.webp"
    },
    {
      id: 6,
      nombre: "Remera Fila De Running",
      precio: "2000$",
      descripcion: "Remera running negra",
      categoria: "upperbody",
      stock: 7,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_959713-MLA77732125843_072024-O.webp"
    },
    {
      id: 7,
      nombre: "Short Deportivo Salomon",
      precio: "1500$",
      marca: "Salomon",
      descripcion: "Short deportivo negro",
      categoria: "lowerbody",
      stock: 8,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_687777-MLA74034441161_012024-O.webp"
    },
    {
      id: 8,
      nombre: "Bolso Deportivo Everlast",
      precio: "3000$",
      marca: "Everlast",
      descripcion: "Bolso deportivo negro",
      categoria: "accessories",
      stock: 8,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_690188-MLU76864963997_062024-O.webp"
    }
  ]

  const obtenerProductos = () => {
    return new Promise( (resolve) => {
      setTimeout(() => {
        resolve(productos)
      }, 1500);

    })
  }

  export default obtenerProductos