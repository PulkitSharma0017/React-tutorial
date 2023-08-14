import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Ogdq7oA8rs93ODZSCeov02uaQlADbGX7msXQzx0z5SM",
    },
    params: {
      query: "koenigsegg",
    },
  });

  console.log(response);
  return response;
};

export default searchImages;
