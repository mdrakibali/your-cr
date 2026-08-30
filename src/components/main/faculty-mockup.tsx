import { ExternalLink, Mail } from "lucide-react";
import React from "react";

// Mockup card showing Faculty & Course Directory details
export function FacultyMockup(): React.JSX.Element {
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
          yourcr.com/faculty
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-4 bg-white">
        <div className="border border-cyan-100 bg-white p-4 rounded-xl">
          <h5 className="font-bold text-xs text-cyan-800 mb-1">
            Instructor Details
          </h5>
          <h4 className="font-bold text-sm text-gray-800">Dr. Anisur Rahman</h4>
          <p className="text-[10px] text-gray-400 mb-2">
            Professor • Dept. of CSE
          </p>
          <div className="space-y-1.5">
            <p className="text-xs text-gray-600 flex items-center gap-1.5">
              <Mail className="size-3 text-cyan-700" /> anis@university.edu
            </p>
            <p className="text-xs text-gray-600">
              ⏰{" "}
              <span className="font-semibold text-gray-700">Office hours:</span>{" "}
              Mon/Wed 2:00 PM - 4:00 PM
            </p>
          </div>
          <div className="mt-3 border-t border-cyan-100/50 pt-2 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-cyan-800 hover:underline cursor-pointer flex items-center gap-1">
              📄 Course_Syllabus.pdf <ExternalLink className="size-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

