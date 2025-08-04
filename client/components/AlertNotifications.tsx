import { Info, CheckCircle } from "lucide-react";

export default function AlertNotifications() {
  return (
    <div className="space-y-4 mb-8">
      {/* Blue Alert */}
      <div className="bg-white border border-cos-blue rounded border-l-8 border-l-cos-blue p-4">
        <div className="flex items-start gap-4">
          <Info size={28} className="text-cos-blue flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-cos-blue text-base leading-relaxed">
              於N月N日8:00前，發送任意 Airdrop & Quiz 即可參與本週大樂透抽獎!
            </p>
          </div>
        </div>
      </div>

      {/* Green Alert */}
      <div className="bg-white border border-cos-green rounded border-l-8 border-l-cos-green p-4">
        <div className="flex items-start gap-4">
          <CheckCircle
            size={28}
            className="text-cos-green flex-shrink-0 mt-0.5"
          />
          <div className="flex-1">
            <p className="text-cos-green text-base leading-relaxed">
              你已獲得本周大樂透抽獎資格，結果將於N月N日公布
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
