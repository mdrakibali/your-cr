import React from "react";

// Mockup card showing Smart Notice Board interface
export function NoticeMockup(): React.JSX.Element {
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
          yourcr.com/notices
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-3 bg-white">
        <div className="border border-amber-100 bg-white p-4 rounded-xl">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md">
              Important Notice
            </span>
            <span className="text-[11px] text-gray-400">10 mins ago</span>
          </div>
          <h5 className="font-bold text-xs text-gray-800 mb-1">
            Midterm Exam Schedule Announced
          </h5>
          <p className="text-[11px] text-gray-500 line-clamp-2">
            The updated slot routine for CSE-301 and EEE-205 is attached below.
            Please download the PDF.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-[10px] bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100 flex items-center gap-1 font-medium">
              📄 Midterm_Routine.pdf
            </span>
          </div>
        </div>

        <div className="border border-gray-100 bg-white p-3.5 rounded-xl opacity-60">
          <div className="flex justify-between items-start mb-1">
            <span className="text-[10px] font-bold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md">
              General
            </span>
            <span className="text-[11px] text-gray-400">Yesterday</span>
          </div>
          <h5 className="font-bold text-xs text-gray-800">
            Class Party Contribution Update
          </h5>
        </div>
      </div>
    </div>
  );
}

