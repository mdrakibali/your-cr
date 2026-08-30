"use client";

import { Search } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchFilterBarProps } from "@/types/common";

// Search and filter controls bar for dashboard lists
export function SearchFilterBar({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search...",
  filterValue,
  onFilterChange,
  filterOptions = null,
  filterPlaceholder = "All",
}: SearchFilterBarProps): React.JSX.Element {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
        <Input
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="pl-9 h-10 w-full bg-white"
        />
      </div>

      {/* Select Dropdown Filter (optional) */}
      {filterOptions && onFilterChange && (
        <div className="w-full sm:w-[180px] shrink-0">
          <Select value={filterValue} onValueChange={onFilterChange}>
            <SelectTrigger className="h-10 w-full bg-white border-input">
              <SelectValue placeholder={filterPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              {filterOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
}

export default SearchFilterBar;
