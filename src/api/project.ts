import { SERVER_URL } from "@/constants";
import axios from "axios";

const instance = axios.create({
  baseURL: `${SERVER_URL}/projects`,
  withCredentials: true,
});

export const fetchProjects = async (token: string) => {
  const response = await instance.get("/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createProject = async ({
  payload,
  token,
}: {
  payload: {
    hackatonId: string;
  };
  token: string;
}) => {
  const response = await instance.post("/", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
