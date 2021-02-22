import axios from "axios";

const API = "https://todos-academlo.herokuapp.com/api";

export const get = async () => await axios.get(`${API}/todos`),
	create = async (data) => await axios.post(`${API}/todo`, data),
	update = async (id, data) => await axios.put(`${API}/todo/${id}`, data),
	remove = async (id) => await axios.delete(`${API}/todo/${id}`);
