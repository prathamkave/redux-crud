import axios from "axios";

const productApi = axios.create({
	baseURL: "https://api.escuelajs.co/api/v1",
});

export const getProducts = async () => {
	const response = await productApi.get("/products");

	return response.data.slice(0, 32);
};
