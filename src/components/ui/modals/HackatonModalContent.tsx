import HackatonCard from "@/components/pages/HackatonsPage/HackatonCard";
import { Hackaton } from "@/types/hackaton.type";

interface Props {
  hackaton: Hackaton;
}

const HackatonModalContent = ({ hackaton }: Props) => {
  return <HackatonCard allInfo={true} hackaton={hackaton} />;
};

export default HackatonModalContent;
