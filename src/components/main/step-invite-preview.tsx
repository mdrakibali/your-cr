import { CheckCircle2, Copy, Users } from "lucide-react";
import React from "react";

// Step 2 preview mockup: Classmate Invitation & Roll Roster
export function StepInvitePreview(): React.JSX.Element {
  return (
    <div className="w-full max-w-xs bg-white rounded-2xl p-5 border border-purple-100 shadow-[0_4px_20px_0_rgba(0,0,0,0.03)] space-y-4 animate-in fade-in zoom-in-95 duration-300">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700">
          <Users className="size-6" />
        </div>
        <div>
          <h4 className="font-bold text-xs text-gray-800">Class Roster</h4>
          <p className="text-[10px] text-gray-400">42 Members Added</p>
        </div>
      </div>
      <div className="space-y-2 border-t border-gray-100 pt-3">
        <div className="flex items-center justify-between text-[11px] p-1.5 bg-gray-50 rounded">
          <span className="text-gray-500 font-mono text-[9px] truncate max-w-[170px]">
            yourcr.com/join/cse-21a
          </span>
          <button
            type="button"
            aria-label="Copy class join link"
            className="text-[10px] font-bold text-primary flex items-center gap-1 cursor-pointer"
          >
            <Copy className="size-3" /> Copy
          </button>
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-gray-500">Roster Sync</span>
          <span className="font-bold text-emerald-600 flex items-center gap-1">
            <CheckCircle2 className="size-3.5" /> 100% Joined
          </span>
        </div>
      </div>
    </div>
  );
}

