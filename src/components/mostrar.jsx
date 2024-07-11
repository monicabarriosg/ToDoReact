// import { useState } from "react";
// import { useFetchPost } from "./SubirProductos"; // Asegúrate de importar correctamente desde tu archivo useFetch.js

// const MostrarProductos = ({ onProductAdded }) => {
//   const [productoData, setProductoData] = useState({
//     nombre: "",
//     descripcion: "",
//     precio: 0,
//   });

//   const { post, isLoading, error } = useFetchPost(); // Hook para realizar POST requests

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductoData({ ...productoData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await post("http://localhost:3001/user", productoData);
//       if (response) {
//         onProductAdded(response); // Llama a la función para actualizar el estado de productos
//         console.log("Producto creado:", response);
//         alert("Producto creado exitosamente");
//         setProductoData({ nombre: "", descripcion: "", precio: 0 }); // Reinicia el formulario
//       } else {
//         alert("Error al crear producto");
//       }
//     } catch (error) {
//       console.error("Error al crear producto:", error);
//       alert("Error al crear producto");
//     }
//   };

//   return (
//     <div>
//       <h2>Agregar Producto</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="nombre">Nombre:</label>
//           <input
//             type="text"
//             id="nombre"
//             name="nombre"
//             value={productoData.nombre}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="descripcion">Descripción:</label>
//           <textarea
//             id="descripcion"
//             name="descripcion"
//             value={productoData.descripcion}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="precio">Precio:</label>
//           <input
//             type="number"
//             id="precio"
//             name="precio"
//             value={productoData.precio}
//             onChange={handleChange}
//             min="0"
//             step="0.01"
//             required
//           />
//         </div>
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? "Cargando..." : "Agregar Producto"}
//         </button>
//       </form>
//       {error && <p>Error: {error}</p>}
//     </div>
//   );
// };

// export default MostrarProductos;
