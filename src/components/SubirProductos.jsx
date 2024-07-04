import { useState } from 'react';

export const useFetchPost = () => {
  const [isLoading, setIsLoading] = useState(false); // Estado para indicar si la solicitud está en curso
  const [error, setError] = useState(null); // Estado para almacenar errores durante la solicitud

  // Función para realizar una solicitud POST
  const post = async (url, body) => {
    setIsLoading(true); // Se activa la carga

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body), // Convertimos el cuerpo a JSON
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Convertimos la respuesta a JSON
      return data; // Devolvemos los datos obtenidos
    } catch (error) {
      setError(error.message); // Capturamos y almacenamos cualquier error
      return null; // Devolvemos null en caso de error
    } finally {
      setIsLoading(false); // Desactivamos la carga, independientemente de si hubo éxito o error
    }
  };

  return { post, isLoading, error }; // Devolvemos el método de post, isLoading y el error capturado
};

export default useFetchPost;
