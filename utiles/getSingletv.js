import axios from "./axios";

export const getSingleTV = async (id) => {
  try {
    const { data } = await axios.get(`/tv/${id}?api_key=fb48a2d1a4cddbf4935e7af54a8d8f21`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
