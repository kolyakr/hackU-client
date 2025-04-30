import { createProject, fetchProjects } from "@/api/project";
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { Project } from "@/types/project.interface";

const useProject = () => {
  const { token } = useAuth();

  const queryProjects: UseQueryResult<{ projects: Project[] }, Error> =
    useQuery({
      queryKey: ["projects", token],
      queryFn: async () => fetchProjects(token || ""),
      enabled: !!token,
    });

  const createProjectMutation = useMutation({
    mutationFn: (payload: { hackatonId: string }) =>
      createProject({ payload, token: token || "" }),
  });

  return { queryProjects, createProjectMutation };
};

export default useProject;
