import useProject from "@/hooks/useProjects";
import ProjectCard from "./ProjectCard";
import { PacmanLoader } from "react-spinners";

const ProjectsList = () => {
  const { queryProjects } = useProject();
  const { data, isLoading } = queryProjects;

  const projects = data ? data?.projects : [];

  if (isLoading) {
    return <PacmanLoader color="#FFF" />;
  }

  return (
    <>
      {projects && projects.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
          {projects.map((pr) => (
            <li>
              <ProjectCard project={pr} allInfo={true} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ProjectsList;
