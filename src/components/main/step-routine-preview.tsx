import { Bell, Calendar, Sparkles } from "lucide-react";
import React from "react";

// Step 3 preview mockup: Real-time Routine & Notification Sync
export function StepRoutinePreview(): React.JSX.Element {
  return (
    <div className="w-full max-w-xs bg-white rounded-2xl p-5 border border-purple-100 shadow-[0_4px_20px_0_rgba(0,0,0,0.03)] space-y-4 animate-in fade-in zoom-in-95 duration-300">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700">
          <Calendar className="size-6" />
        </div>
        <div>
          <h4 className="font-bold text-xs text-gray-800">Real-time Push</h4>
          <p className="text-[10px] text-gray-400">Class Synchronization</p>
        </div>
      </div>
      <div className="space-y-2 border-t border-gray-100 pt-3">
        <div className="p-2 bg-emerald-50 text-emerald-800 rounded-lg flex items-center gap-2">
          <Bell className="size-3.5 shrink-0" />
          <p className="text-[10px] font-medium">
            Room 501 shift notification sent
          </p>
        </div>
        <div className="p-2 bg-blue-50 text-blue-800 rounded-lg flex items-center gap-2">
          <Sparkles className="size-3.5 shrink-0" />
          <p className="text-[10px] font-medium">Assignment #2 reminder set</p>
        </div>
      </div>
    </div>
  );
}
