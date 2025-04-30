import { useHackatons } from "@/hooks/useHackatons";
import { useMemo, useState } from "react";
import HackatonCard from "./HackatonCard";
import { PacmanLoader } from "react-spinners";
import CategoryFilter from "./CategoryFilter";

const Hackatons = () => {
  const { data, isLoading } = useHackatons();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => {
    if (!data) return [];
    const uniqueCategories = Array.from(new Set(data.map((d) => d.category)));
    return uniqueCategories;
  }, [data]);

  const filteredHackatons = useMemo(() => {
    if (selectedCategory === "all") return data;
    return data?.filter((item) => item.category === selectedCategory);
  }, [data, selectedCategory]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <PacmanLoader color="#FFF" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredHackatons?.map((item) => (
          <li key={item._id}>
            <HackatonCard hackaton={item} allInfo={false} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hackatons;
