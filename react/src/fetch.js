import axios from "axios";

const fetchListings = () => {
  return axios
    .get("http://localhost:8000/api/show-listings")
    .then((response) => {
      // Manejar la respuesta del backend aquí
      const listings = response.data;
      // Devolver los datos
      return listings;
    })
    .catch((error) => {
      // Manejar errores de la solicitud aquí
      console.error(error);
      throw error;
    });
};

export default fetchListings;
