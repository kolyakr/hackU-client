import HackatonCard from "@/components/pages/HackatonsPage/HackatonCard";
import ProjectCard from "@/components/pages/ProjectPage/ProjectCard";
import { Project } from "@/types/project.interface";

interface Props {
  project: Project;
}

const ProjectModalContent = ({ project }: Props) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <ProjectCard project={project} />
      <HackatonCard allInfo={false} hackaton={project.hackaton} />
    </div>
  );
};

export default ProjectModalContent;
