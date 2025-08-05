import { Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function WinnersSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const winnersData = Array.from({ length: 11 }, (_, i) => ({
    rank: i + 1,
    name: "???",
    amount: "3,000 COS",
    avatar: null,
  }));

  return (
    <div>
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-11 h-11 text-cos-amber">
          <Trophy size={44} fill="currentColor" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-normal text-black/87">
            本期幸運得主(活動結束後顯示)
          </h2>
          <p className="text-sm md:text-base text-black/60">
            獎勵於 2025/6/25 23:59 (UTC+0) 發放
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="bg-cos-grey-card rounded p-4 min-h-96">
          <div className="grid grid-cols-2 gap-2">
            {winnersData.map((winner, index) => (
              <div
                key={index}
                className="bg-cos-grey-light p-4 rounded flex items-center gap-4"
              >
                {/* Rank */}
                <div className="w-8 h-8 flex items-center justify-center text-black/87 text-xl font-normal">
                  {winner.rank}
                </div>

                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-gray-400 flex-shrink-0" />

                {/* Name */}
                <div className="flex-1 min-w-0">
                  <div className="text-black/87 text-base truncate">
                    {winner.name}
                  </div>
                </div>

                {/* Amount */}
                <div className="text-right flex-shrink-0">
                  <div className="text-cos-blue text-xl font-normal">
                    {winner.amount.split(" ")[0]}
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
            <h3 className="text-white font-bold text-base">本期幸運得主</h3>
          </div>

          {/* List Items */}
          <div className="p-4 space-y-3">
            {winnersData.map((winner, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-1 border-b border-gray-100 last:border-b-0"
              >
                {/* Rank */}
                <div className="w-7 h-8 flex items-center justify-center text-black/60 text-xl font-bold">
                  {winner.rank}
                </div>

                {/* Avatar */}
                <div className="w-6 h-6 rounded-full bg-gray-400 flex-shrink-0" />

                {/* Name */}
                <div className="flex-1 min-w-0">
                  <div className="text-black/60 text-sm truncate">
                    {winner.name}
                  </div>
                </div>

                {/* Amount */}
                <div className="text-right flex-shrink-0">
                  <div className="text-black/60 text-sm">{winner.amount}</div>
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
                ? "bg-cos-blue text-white"
                : "bg-gray-100 text-black/87"
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
