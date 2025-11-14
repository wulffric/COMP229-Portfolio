import API from "./api";

export const createQualification = (data) =>
  API.post("/qualifications", data);

export const getQualifications = () =>
  API.get("/qualifications");

export const updateQualification = (id, data) =>
  API.put(`/qualifications/${id}`, data);

export const deleteQualification = (id) =>
  API.delete(`/qualifications/${id}`);
