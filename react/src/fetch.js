import axios from "axios";

const fetchListings = () => {
    axios
      .get("/api/show-listings")
      .then((response) => {
        // Manejar la respuesta del backend aquí
        const listings = response.data;
        // Actualizar el estado o hacer cualquier otra acción con los datos recibidos
      })
      .catch((error) => {
        // Manejar errores de la solicitud aquí
        console.error(error);
      });
  };
  export default fetchListings;