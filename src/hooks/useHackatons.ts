import { fetchHackatons } from "@/api/hackaton";
import { useQuery } from "@tanstack/react-query";

export const useHackatons = () => {
  return useQuery({
    queryKey: ["hackatons"],
    queryFn: fetchHackatons,
  });
};
