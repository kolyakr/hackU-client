import { Project } from "./project.interface";

export interface ProjectState {
  projects: Project[];
  isLoading: boolean;
  error: null | string;
}
