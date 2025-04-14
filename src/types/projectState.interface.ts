import { Project } from "./createProjectRequest.interface";

export interface ProjectState {
  projects: Project[];
  isLoading: boolean;
  error: null | string;
}
