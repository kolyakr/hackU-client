import { SERVER_URL } from "@/constants";
import { Hackaton } from "@/types/hackaton.type";
import axios from "axios";

export const instance = axios.create({
  baseURL: `${SERVER_URL}/hackatons`,
});

export async function fetchHackatons(): Promise<Hackaton[]> {
  const response = await axios.get(`${SERVER_URL}/hackatons`);
  return response.data?.hackatons;
}
