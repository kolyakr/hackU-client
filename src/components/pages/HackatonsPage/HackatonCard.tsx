import { motion } from "framer-motion";
import { Button } from "@/components/shadcn/button";
import GeneralModal from "@/components/ui/modals/GeneralModal";
import HackatonModalContent from "@/components/ui/modals/HackatonModalContent";
import useProject from "@/hooks/useProjects";
import { Hackaton } from "@/types/hackaton.type";
import { formatDate } from "@/utils/formatDate";
import { useEffect, useState } from "react";

interface Props {
  hackaton: Hackaton;
  allInfo: boolean;
}

const HackatonCard = ({ hackaton, allInfo = false }: Props) => {
  const { name, startDate, endDate, image, category, description, _id } =
    hackaton;
  const { queryProjects, createProjectMutation } = useProject();
  const { data } = queryProjects;
  const [isHackatonModalOpen, setIsHackatonModalOpen] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false);

  useEffect(() => {
    const alreadySubmitted = data?.projects?.some(
      (pr) => pr.hackaton._id === _id
    );
    if (alreadySubmitted !== undefined) {
      setIsSubmited(alreadySubmitted);
    }
  }, [data, _id]);

  const handleSubmit = async () => {
    setIsSubmitLoading(true);
    try {
      await createProjectMutation.mutateAsync({ hackatonId: _id });
      await queryProjects.refetch();
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitLoading(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`flex flex-col gap-3 rounded-[20px] p-4 ${
          !allInfo && "border-[3px] max-w-[400px] max-h-[600px]"
        } h-full`}
      >
        <div
          className="max-h-[300px] border-[3px] rounded-[20px] cursor-pointer"
          onClick={() => setIsHackatonModalOpen(true)}
        >
          <img
            src={`../../../../public/images/${image}`}
            alt={name}
            className="rounded-[20px] h-[250px] w-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-xl font-[800] flex flex-col gap-2">
            <h3 className={`${allInfo && "text-center text-2xl"}`}>{name}</h3>
            {allInfo && (
              <>
                <p>
                  Категорія:{" "}
                  <span className="font-[900] text-gray-400">{category}</span>
                </p>
                <p className="text-sm">{description}</p>
              </>
            )}
          </div>
          <div>
            <p className="text-gray-500 font-[800]">
              {formatDate(new Date(startDate))} -{" "}
              {formatDate(new Date(endDate))}
            </p>
          </div>
        </div>
        {!isSubmited ? (
          <Button className="mt-auto" onClick={handleSubmit}>
            {isSubmitLoading ? "Обробляється..." : "Подати заявку"}
          </Button>
        ) : (
          <Button className="mt-auto bg-gray-400 text-white border-black">
            Подано
          </Button>
        )}
      </motion.div>

      <GeneralModal
        isOpen={isHackatonModalOpen}
        closeFn={() => setIsHackatonModalOpen(false)}
      >
        <HackatonModalContent hackaton={hackaton} />
      </GeneralModal>
    </>
  );
};

export default HackatonCard;
