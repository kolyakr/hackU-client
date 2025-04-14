import { Hackaton } from "./hackaton.type";

export interface Project {
  _id: string;
  status: string;
  createdAt: Date;
  hackaton: Hackaton;
}
