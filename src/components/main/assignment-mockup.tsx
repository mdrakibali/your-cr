import React from "react";

// Mockup card showing Assignment Tracker deadlines
export function AssignmentMockup(): React.JSX.Element {
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
          yourcr.com/assignments
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-4 bg-white">
        <div className="border border-rose-100 bg-white p-4 rounded-xl">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] text-rose-700 font-bold bg-rose-100 px-2 py-0.5 rounded-full flex items-center gap-1">
              ⏰ 14 Hours Left
            </span>
            <span className="text-[11px] text-gray-400">
              Due: Tomorrow, 11:59 PM
            </span>
          </div>
          <h5 className="font-bold text-sm text-gray-800 mb-1">
            Compiler Design Lab Project
          </h5>
          <p className="text-xs text-gray-500 mb-3">
            Submit syntax analyzer code along with document report in PDF format.
          </p>
          <button
            type="button"
            className="w-full bg-primary text-white text-xs py-2 rounded-lg font-bold hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Open Submission Link
          </button>
        </div>

        <div className="border border-gray-100 bg-white p-4 rounded-xl">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] text-gray-500 font-bold bg-gray-100 px-2 py-0.5 rounded-full">
              ⏰ 6 Days Left
            </span>
            <span className="text-[11px] text-gray-400">Due: July 5</span>
          </div>
          <h5 className="font-bold text-sm text-gray-800 mb-1">
            Machine Learning Assignment 2
          </h5>
          <p className="text-xs text-gray-500">
            Implement K-means algorithm on custom dataset. No external library allowed.
          </p>
        </div>
      </div>
    </div>
  );
}
