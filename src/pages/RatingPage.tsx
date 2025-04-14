import { RATING_DATA } from "@/config";
import { useAuth } from "@/hooks/useAuth";

const RatingPage = () => {
  const { user } = useAuth();

  const isInRating = RATING_DATA.some((u) => u.name === user?.displayName);

  const fullRating = isInRating
    ? RATING_DATA
    : [
        ...RATING_DATA,
        { id: user?.email || "me", name: user?.displayName || "me", points: 0 },
      ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Рейтинг учасників</h1>
      <div className="space-y-3">
        {fullRating.map((ratingUser, index) => (
          <div
            key={ratingUser.id}
            className={`flex justify-between items-center border-[2px] p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow ${
              ratingUser.name === (user?.displayName || "") && "bg-gray-400"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold w-6">{index + 1}.</span>
              <span className="text-lg font-semibold">{ratingUser.name}</span>
            </div>
            <span className="text-lg font-medium text-gray-500">
              {ratingUser.points} очок
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingPage;
