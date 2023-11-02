import {EMPLOYEES_URL} from "./Url";
import axios from "axios";

export function getEmployees() {
  return axios.get(EMPLOYEES_URL);
}

export function getEmployeesById(id) {
  return axios.get(`${EMPLOYEES_URL}${id}`);
}

export function addEmployees(data) {
  return axios.post(EMPLOYEES_URL, data);
}

export function DeleteEmployees(id) {
  return axios.delete(`${EMPLOYEES_URL}${id}`);
}

export function UpdateEmployees(id, data) {
  return axios.put(`${EMPLOYEES_URL}${id}`, data);
}
