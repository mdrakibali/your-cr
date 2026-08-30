import { Mail, Phone } from "lucide-react";
import React from "react";

// Mockup card showing Student Directory roster
export function StudentMockup(): React.JSX.Element {
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
          yourcr.com/students
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-3 bg-white">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-xs font-bold text-gray-800">
            Class Section A (42 Students)
          </h4>
          <span className="text-[10px] font-bold text-primary hover:underline cursor-pointer">
            + Add Student
          </span>
        </div>

        <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-white">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
              RI
            </div>
            <div>
              <h5 className="font-bold text-xs text-gray-800">Rakib Islam</h5>
              <p className="text-[10px] text-gray-400">Roll: 01 • Class Rep</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Email Rakib Islam"
              className="p-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors cursor-pointer"
            >
              <Mail className="size-3.5" />
            </button>
            <button
              type="button"
              aria-label="Call Rakib Islam"
              className="p-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors cursor-pointer"
            >
              <Phone className="size-3.5" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-white">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center">
              FA
            </div>
            <div>
              <h5 className="font-bold text-xs text-gray-800">Fahim Ahmed</h5>
              <p className="text-[10px] text-gray-400">Roll: 02 • Student</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Email Fahim Ahmed"
              className="p-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors cursor-pointer"
            >
              <Mail className="size-3.5" />
            </button>
            <button
              type="button"
              aria-label="Call Fahim Ahmed"
              className="p-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors cursor-pointer"
            >
              <Phone className="size-3.5" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-white">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center">
              AK
            </div>
            <div>
              <h5 className="font-bold text-xs text-gray-800">Amina Khatun</h5>
              <p className="text-[10px] text-gray-400">Roll: 03 • Student</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Email Amina Khatun"
              className="p-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors cursor-pointer"
            >
              <Mail className="size-3.5" />
            </button>
            <button
              type="button"
              aria-label="Call Amina Khatun"
              className="p-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors cursor-pointer"
            >
              <Phone className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

