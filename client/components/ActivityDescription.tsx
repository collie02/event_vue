export default function ActivityDescription() {
  return (
    <div className="mb-8">
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl md:text-2xl font-normal text-black/87">活動說明</h2>
      </div>

      {/* Description Text */}
      <div className="py-4">
        <p className="text-sm md:text-base text-black/60 leading-relaxed mb-4">
          活動期間：2025/8/14 00:00 - 2025/8/27 23:59（UTC-0），獎勵將於 2025/8/28 發送。
        </p>
        <p className="text-sm md:text-base text-black/60 leading-relaxed mb-4">
          活動期間每筆 Airdrop 與 Quiz 獎勵將自動提撥 10% 累積進獎池。
        </p>
        <p className="text-sm md:text-base text-black/60 leading-relaxed mb-4">
          只要在活動期間內發送任一 Airdrop 或 Quiz，就具備抽獎資格。
        </p>
        <p className="text-sm md:text-base text-black/60 leading-relaxed mb-4">
          活動結束後系統將自動抽出 11 位幸運得主依比例瓜分獎池，中獎者的 COS 將自動發送至主網錢包，無需手動領取。
        </p>
        <p className="text-sm md:text-base text-black/60 leading-relaxed">
          總計抽出 11 位中獎者，分別獲得獎池總額的 30%、10%（4 位）與 5%（6 位）。
        </p>
      </div>
    </div>
  );
}
