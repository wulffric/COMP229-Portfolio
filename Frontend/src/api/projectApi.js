import API from "./api";

export const createProject = (data) =>
  API.post("/projects", data);

export const getProjects = () =>
  API.get("/projects");

export const updateProject = (id, data) =>
  API.put(`/projects/${id}`, data);

export const deleteProject = (id) =>
  API.delete(`/projects/${id}`);
