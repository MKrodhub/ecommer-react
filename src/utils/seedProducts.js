import { addDoc, collection } from 'firebase/firestore'
import db from '../db/db.js';

const productos = [
    {
      id: 1,
      nombre: "Remera Deportiva Wilson",
      precio: "1500",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum nibh ut leo hendrerit dictum. Proin tincidunt, magna sit amet tempus tincidunt, massa orci suscipit tellus, non gravida nibh quam quis mi. Ut vitae erat lectus. Maecenas pharetra ante neque, eu iaculis lectus dignissim eu. Aliquam erat volutpat. Donec maximus nunc scelerisque tortor bibendum, non sodales orci lobortis. Aenean tincidunt vehicula magna quis convallis. Integer in ultrices augue, vulputate condimentum urna. Suspendisse ornare tincidunt tristique. Quisque ullamcorper pretium mollis.",
      categoria: "upperbody",
      stock: 10,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_982622-MLA52449338331_112022-O.webp"
    },
    {
      id: 2,
      nombre: "Campera Rompeviento Abyss",
      precio: "5000",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum nibh ut leo hendrerit dictum. Proin tincidunt, magna sit amet tempus tincidunt, massa orci suscipit tellus, non gravida nibh quam quis mi. Ut vitae erat lectus. Maecenas pharetra ante neque, eu iaculis lectus dignissim eu. Aliquam erat volutpat. Donec maximus nunc scelerisque tortor bibendum, non sodales orci lobortis. Aenean tincidunt vehicula magna quis convallis. Integer in ultrices augue, vulputate condimentum urna. Suspendisse ornare tincidunt tristique. Quisque ullamcorper pretium mollis.",
      categoria: "upperbody",
      stock: 10,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_814534-MLA54984446239_052023-O.webp"
    },
    {
      id: 3,
      nombre: "Campera Con Capucha Puma",
      precio: "3000",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum nibh ut leo hendrerit dictum. Proin tincidunt, magna sit amet tempus tincidunt, massa orci suscipit tellus, non gravida nibh quam quis mi. Ut vitae erat lectus. Maecenas pharetra ante neque, eu iaculis lectus dignissim eu. Aliquam erat volutpat. Donec maximus nunc scelerisque tortor bibendum, non sodales orci lobortis. Aenean tincidunt vehicula magna quis convallis. Integer in ultrices augue, vulputate condimentum urna. Suspendisse ornare tincidunt tristique. Quisque ullamcorper pretium mollis.",
      categoria: "upperbody",
      stock: 10,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_658662-MLA71396297311_082023-O.webp"
    },
    {
      id: 4,
      nombre: "Remera Fila De Running",
      precio: "2000",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum nibh ut leo hendrerit dictum. Proin tincidunt, magna sit amet tempus tincidunt, massa orci suscipit tellus, non gravida nibh quam quis mi. Ut vitae erat lectus. Maecenas pharetra ante neque, eu iaculis lectus dignissim eu. Aliquam erat volutpat. Donec maximus nunc scelerisque tortor bibendum, non sodales orci lobortis. Aenean tincidunt vehicula magna quis convallis. Integer in ultrices augue, vulputate condimentum urna. Suspendisse ornare tincidunt tristique. Quisque ullamcorper pretium mollis.",
      categoria: "upperbody",
      stock: 7,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_959713-MLA77732125843_072024-O.webp"
    },
    {
      id: 5,
      nombre: "Short Deportivo Salomon",
      precio: "1500",
      marca: "Salomon",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum nibh ut leo hendrerit dictum. Proin tincidunt, magna sit amet tempus tincidunt, massa orci suscipit tellus, non gravida nibh quam quis mi. Ut vitae erat lectus. Maecenas pharetra ante neque, eu iaculis lectus dignissim eu. Aliquam erat volutpat. Donec maximus nunc scelerisque tortor bibendum, non sodales orci lobortis. Aenean tincidunt vehicula magna quis convallis. Integer in ultrices augue, vulputate condimentum urna. Suspendisse ornare tincidunt tristique. Quisque ullamcorper pretium mollis.",
      categoria: "lowerbody",
      stock: 8,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_687777-MLA74034441161_012024-O.webp"
    },
    {
      id: 6,
      nombre: "Bolso Deportivo Everlast",
      precio: "3000",
      marca: "Everlast",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum nibh ut leo hendrerit dictum. Proin tincidunt, magna sit amet tempus tincidunt, massa orci suscipit tellus, non gravida nibh quam quis mi. Ut vitae erat lectus. Maecenas pharetra ante neque, eu iaculis lectus dignissim eu. Aliquam erat volutpat. Donec maximus nunc scelerisque tortor bibendum, non sodales orci lobortis. Aenean tincidunt vehicula magna quis convallis. Integer in ultrices augue, vulputate condimentum urna. Suspendisse ornare tincidunt tristique. Quisque ullamcorper pretium mollis.",
      categoria: "accessories",
      stock: 8,
      genero: "unisex",
      image: "https://http2.mlstatic.com/D_NQ_NP_690188-MLU76864963997_062024-O.webp"
    }
  ];

const seedProducts = () => {
    productos.map(({ id, ...rest }) => {
        const productosRef = collection(db, "productos");
        addDoc(productosRef, rest);
    });

    console.log("Productos subidos")
}

seedProducts()