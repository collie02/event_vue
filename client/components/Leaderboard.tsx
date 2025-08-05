import { Gift, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Leaderboard() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const leaderboardData = [
    { rank: 1, name: "CHRISTIANA", amount: "999,999", avatar: "https://i.pravatar.cc/150?img=1", badge: "1st" },
    { rank: 2, name: "Collie", amount: "999,999", avatar: "https://i.pravatar.cc/150?img=2", badge: "2nd" },
    { rank: 3, name: "Ruby", amount: "999,999", avatar: "https://i.pravatar.cc/150?img=3", badge: "3rd" },
    { rank: 4, name: "Max", amount: "999,999", avatar: "https://i.pravatar.cc/150?img=4" },
    { rank: 5, name: "Luna", amount: "999,999", avatar: "https://i.pravatar.cc/150?img=5" },
    { rank: 6, name: "Buddy", amount: "999,999", avatar: "https://i.pravatar.cc/150?img=6" },
    { rank: 7, name: "Lucy", amount: "999,999", avatar: "https://i.pravatar.cc/150?img=7" },
    { rank: 8, name: "Bailey", amount: "999,999", avatar: "https://i.pravatar.cc/150?img=8" },
    { rank: 9, name: "Sadie", amount: "999,999", avatar: "https://i.pravatar.cc/150?img=9" },
    { rank: 10, name: "Daisy", amount: "999,999", avatar: "https://i.pravatar.cc/150?img=10" },
  ];

  const totalPages = 3;
  
  return (
    <div>
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-9 h-9 text-cos-amber">
          <Gift size={36} fill="currentColor" />
        </div>
        <h2 className="text-xl md:text-2xl font-normal text-black/87">
          Airdrop排行榜
        </h2>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="bg-cos-grey-card rounded p-4 min-h-96">
          <div className="grid grid-cols-2 gap-2">
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
                    {user.amount.split(",")[0]},{user.amount.split(",")[1]}
                  </div>
                  <div className="text-black/38 text-sm">COS</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gray-400 px-4 py-3">
            <h3 className="text-white font-bold text-base">Airdrop排行榜</h3>
          </div>
          
          {/* List Items */}
          <div className="p-4 space-y-3">
            {leaderboardData.map((user, index) => (
              <div key={index} className="flex items-center gap-4 py-1 border-b border-gray-100 last:border-b-0">
                {/* Rank/Badge */}
                <div className="w-7 h-7 flex items-center justify-center">
                  {user.badge ? (
                    <img 
                      src={`https://api.builder.io/api/v1/image/assets/TEMP/badge-${user.badge}.png`} 
                      alt={user.badge}
                      className="w-7 h-7"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling!.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`w-7 h-7 flex items-center justify-center text-black/60 text-xl font-bold ${user.badge ? 'hidden' : ''}`}>
                    {user.rank}
                  </div>
                </div>

                {/* Avatar */}
                <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <div className="flex-1 min-w-0">
                  <div className="text-black/60 text-sm truncate">
                    {user.name}
                  </div>
                </div>

                {/* Amount */}
                <div className="text-right flex-shrink-0">
                  <div className="text-black/60 text-sm">
                    {user.amount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded shadow-sm">
          <ChevronLeft size={20} className="text-gray-500" />
        </button>
        
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 flex items-center justify-center rounded shadow-sm text-sm ${
              currentPage === page 
                ? 'bg-cos-blue text-white' 
                : 'bg-gray-100 text-black/87'
            }`}
          >
            {page}
          </button>
        ))}
        
        <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded shadow-sm">
          <ChevronRight size={20} className="text-gray-500" />
        </button>
      </div>
    </div>
  );
}
