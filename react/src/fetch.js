import axios from "axios";
import axiosClient from "./axios-client";

const fetchListings = () => {
  return axiosClient
    .get("/listingAdmin")
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
