import axios from "axios";
import Config from "./Pengaturan.jsx"

const api = axios.create({
    baseURL: Config.BASE_URL,
});

export const getCategories = () => api.get("/kategori");
export const addCategory = (category) => api.post("/kategori/create", category);
export const updateCategory = (id, category) => api.put(`/kategori/edelkategori/${id}`, category);
export const deleteCategory = (id) => api.delete(`/kategori/edelkategori/${id}`);

export const getArticles = () => api.get("/artikel");
export const getArticlesbyId = (id) => api.get(`/artikel/${id}`);
export const addArticle = (article) => api.post("/artikel/create", article);
export const updateArticle = (id, article) => api.put(`/artikel/edelartikel/${id}`, article);
export const deleteArticle = (id) => api.delete(`/artikel/edelartikel/${id}`);

export const getFile = () => api.get("/media");

export const loginUser = (user) => api.post("/user/login", user);
export const createUser = (user) => api.post("/user/create", user);