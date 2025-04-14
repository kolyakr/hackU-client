import { motion } from "framer-motion";
import { Button } from "@/components/shadcn/button";
import { Project } from "@/types/project.interface";
import { formatDate } from "@/utils/formatDate";
import ProjectModalContent from "@/components/ui/modals/ProjectModalContent";
import GeneralModal from "@/components/ui/modals/GeneralModal";
import { useState } from "react";

const ProjectCard = ({
  project,
  allInfo = false,
}: {
  project: Project;
  allInfo?: boolean;
}) => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);
  const { hackaton, createdAt, status } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="border relative border-gray-300 p-6 rounded-2xl shadow-md max-w-[400px] w-full h-full flex flex-col gap-3 justify-between hover:shadow-lg transition-shadow duration-300 font-[600]"
    >
      <div>
        <p className="text-2xl text-gray-400 font-[700]">{hackaton.name}</p>
        <p>Статус: {status}</p>
        <p>Подано: {formatDate(new Date(createdAt))}</p>
      </div>
      {allInfo && (
        <Button onClick={() => setIsProjectModalOpen(true)}>Переглянути</Button>
      )}

      <GeneralModal
        isOpen={isProjectModalOpen}
        closeFn={() => setIsProjectModalOpen(false)}
      >
        <ProjectModalContent project={project} />
      </GeneralModal>
    </motion.div>
  );
};

export default ProjectCard;
