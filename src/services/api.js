import { create } from "apisauce";
import { API_URL, GET_ALL_POINTS, GET_POINTS } from "../constants/api";

const api = create({
  baseURL: API_URL,
  headers: { Accept: "application/json", "Content-Type": "Application/json" },
});

export async function getAllPoints() {
  const points = await api.get(GET_ALL_POINTS);
  return points.data;
}

export async function getPoints(userId) {
  const points = await api.get(GET_POINTS, { user_id: userId });
  console.log("******", points);
}
