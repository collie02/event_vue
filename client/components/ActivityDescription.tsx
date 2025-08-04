import { Gift } from "lucide-react";

export default function ActivityDescription() {
  return (
    <div className="mb-8">
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-9 h-9 text-cos-amber">
          <Gift size={36} fill="currentColor" />
        </div>
        <h2 className="text-2xl font-normal text-black/87">活動說明</h2>
      </div>

      {/* Description Text */}
      <div className="py-4">
        <p className="text-base text-black/60 leading-relaxed">
          完成任一 Airdrop 或 Quiz 即可參加抽獎
          <br />
          每次開獎共 11 名得主，COS 獎勵自動發送
        </p>
      </div>
    </div>
  );
}
