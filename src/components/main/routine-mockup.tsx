import React from "react";

// Mockup card showing Live Routine Tracker timeline
export function RoutineMockup(): React.JSX.Element {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 overflow-hidden">
      {/* Browser Bar */}
      <div className="bg-gray-50/80 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-yellow-400" />
          <span className="size-2.5 rounded-full bg-green-400" />
        </div>
        <div className="w-full text-center text-[10px] text-gray-400 font-mono truncate bg-white rounded py-0.5 border border-gray-100">
          yourcr.com/routine
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-3 bg-white">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
          Today's Timeline
        </h4>

        <div className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 bg-white">
          <div className="text-center shrink-0">
            <p className="text-xs font-bold text-gray-800">09:00 AM</p>
            <p className="text-[10px] text-gray-400">90 Mins</p>
          </div>
          <div className="flex-1 min-w-0">
            <h5 className="font-bold text-xs text-gray-800 truncate">
              Computer Networks
            </h5>
            <p className="text-[11px] text-gray-400">
              Room 402 • Prof. Anisur
            </p>
          </div>
          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
            Active
          </span>
        </div>

        <div className="flex items-center gap-4 p-3 rounded-xl border border-amber-100 bg-white">
          <div className="text-center shrink-0">
            <p className="text-xs font-bold text-gray-800">11:00 AM</p>
            <p className="text-[10px] text-gray-400">90 Mins</p>
          </div>
          <div className="flex-1 min-w-0">
            <h5 className="font-bold text-xs text-gray-800 truncate">
              Software Engineering
            </h5>
            <p className="text-[11px] text-gray-500">
              Shifted to <span className="font-bold">Room 501</span>
            </p>
          </div>
          <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md">
            Room Shifted
          </span>
        </div>

        <div className="flex items-center gap-4 p-3 rounded-xl border border-red-100 bg-white">
          <div className="text-center shrink-0">
            <p className="text-xs font-bold text-gray-400">02:00 PM</p>
            <p className="text-[10px] text-gray-400">90 Mins</p>
          </div>
          <div className="flex-1 min-w-0 opacity-50">
            <h5 className="font-bold text-xs text-gray-800 truncate line-through">
              Artificial Intelligence
            </h5>
            <p className="text-[11px] text-gray-400">Room 302 • Lab 3</p>
          </div>
          <span className="text-[10px] font-bold bg-red-100 text-red-800 px-2 py-0.5 rounded-md">
            Cancelled
          </span>
        </div>
      </div>
    </div>
  );
}

