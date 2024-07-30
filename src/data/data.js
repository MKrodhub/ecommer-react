const productos = [
    {
      id: 1,
      nombre: "Remera",
      precio: "1500$",
      descripcion: "Remera manga corta",
      categoria: "remeras",
      stock: 10,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_826564-MLA74305529851_012024-O.webp"
    },
    {
      id: 2,
      nombre: "Camisa",
      precio: "2000$",
      descripcion: "Camisa blanca simple",
      categoria: "camisas",
      stock: 10,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_999839-MLA76481041276_052024-O.webp"
    },
    {
      id: 3,
      nombre: "Rompe Viento",
      precio: "5000$",
      descripcion: "Rompe Viento negro simple",
      categoria: "rompeVientos",
      stock: 10,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_758851-MLA72594217451_102023-O.webp"
    },
    {
      id: 4,
      nombre: "Campera",
      precio: "3000$",
      descripcion: "Campera negra",
      categoria: "camperas",
      stock: 10,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_868470-MLA54990064054_052023-O.webp"
    },
    {
      id: 5,
      nombre: "Campera",
      precio: "3000$",
      descripcion: "Campera negra",
      categoria: "camperas",
      stock: 10,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_868470-MLA54990064054_052023-O.webp"
    },
    {
      id: 6,
      nombre: "Campera",
      precio: "3000$",
      descripcion: "Campera negra",
      categoria: "camperas",
      stock: 10,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_868470-MLA54990064054_052023-O.webp"
    },
    {
      id: 7,
      nombre: "Campera",
      precio: "3000$",
      descripcion: "Campera negra",
      categoria: "camperas",
      stock: 10,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_868470-MLA54990064054_052023-O.webp"
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