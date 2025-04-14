import ProjectsList from "@/components/pages/ProjectPage/ProjectsList";
import { useAuth } from "@/hooks/useAuth";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const user = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/auth/login");
  }

  return (
    <div>
      <ProjectsList />
    </div>
  );
};

export default ProjectsPage;
