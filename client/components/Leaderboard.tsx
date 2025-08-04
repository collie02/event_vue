import { Gift } from "lucide-react";

export default function Leaderboard() {
  const leaderboardData = [
    { rank: 1, name: "Ruby", amount: 3000, avatar: "https://i.pravatar.cc/150?img=1" },
    { rank: 2, name: "Zac", amount: 1000, avatar: "https://i.pravatar.cc/150?img=2" },
    { rank: 3, name: "Roy", amount: 1000, avatar: "https://i.pravatar.cc/150?img=3" },
    { rank: 4, name: "Jeff", amount: 1000, avatar: "https://i.pravatar.cc/150?img=4" },
    { rank: 5, name: "Zac", amount: 1000, avatar: "https://i.pravatar.cc/150?img=5" },
    { rank: 6, name: "Zac", amount: 500, avatar: "https://i.pravatar.cc/150?img=6" },
    { rank: 7, name: "Zac", amount: 500, avatar: "https://i.pravatar.cc/150?img=7" },
    { rank: 8, name: "Zac", amount: 500, avatar: "https://i.pravatar.cc/150?img=8" },
    { rank: 9, name: "Zac", amount: 500, avatar: "https://i.pravatar.cc/150?img=9" },
    { rank: 10, name: "Zac", amount: 500, avatar: "https://i.pravatar.cc/150?img=10" },
  ];

  return (
    <div>
      {/* Divider */}
      <div className="border-t border-black/12 my-8" />

      {/* Section Title */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-9 h-9 text-cos-amber">
          <Gift size={36} fill="currentColor" />
        </div>
        <h2 className="text-2xl font-normal text-black/87">
          Airdrop排行榜 / 上期贏家
        </h2>
      </div>

      {/* Leaderboard Grid */}
      <div className="bg-cos-grey-card rounded p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-96 overflow-y-auto">
          {leaderboardData.map((user, index) => (
            <div
              key={index}
              className="bg-cos-grey-light p-4 rounded flex items-center gap-4"
            >
              {/* Rank */}
              <div className="w-8 h-8 flex items-center justify-center text-black/87 text-xl font-normal">
                {user.rank}
              </div>

              {/* Avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <div className="flex-1 min-w-0">
                <div className="text-black/87 text-base truncate">
                  {user.name}
                </div>
              </div>

              {/* Amount */}
              <div className="text-right flex-shrink-0">
                <div className="text-cos-blue text-xl font-normal">
                  {user.amount}
                </div>
                <div className="text-black/38 text-sm">COS</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
