export default function StatsCards() {
  const stats = [
    {
      value: "11,654",
      label: "目前累積獎金",
    },
    {
      value: "812",
      label: "獲得抽獎資格的用戶",
    },
    {
      value: "2,346",
      label: "已發送的 Airdrops",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 text-center"
        >
          <div className="text-2xl font-normal text-black/87 mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-black/54 leading-tight">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
