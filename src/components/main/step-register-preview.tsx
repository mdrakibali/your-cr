import { CheckCircle2, ShieldCheck, UserCheck } from "lucide-react";
import React from "react";

// Step 1 preview mockup: CR Registration & Verification
export function StepRegisterPreview(): React.JSX.Element {
  return (
    <div className="w-full max-w-xs bg-white rounded-2xl p-5 border border-purple-100 shadow-[0_4px_20px_0_rgba(0,0,0,0.03)] space-y-4 animate-in fade-in zoom-in-95 duration-300">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-purple-50 text-purple-700">
          <UserCheck className="size-6" />
        </div>
        <div>
          <h4 className="font-bold text-xs text-gray-800">CR Credentials</h4>
          <p className="text-[10px] text-gray-400">Roll: 2021-CSE-01</p>
        </div>
      </div>
      <div className="space-y-2 border-t border-gray-100 pt-3">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-gray-500">Department</span>
          <span className="font-semibold text-gray-700">CSE (Batch 21)</span>
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-gray-500">Status</span>
          <span className="font-bold text-emerald-600 flex items-center gap-1">
            <CheckCircle2 className="size-3.5" /> Verified
          </span>
        </div>
      </div>
      <div className="bg-purple-50/50 p-2.5 rounded-lg flex items-center gap-2 border border-purple-100/50">
        <ShieldCheck className="size-4 text-purple-600 shrink-0" />
        <p className="text-[9px] text-purple-800">
          Admin approved. Your class session hub is ready.
        </p>
      </div>
    </div>
  );
}

