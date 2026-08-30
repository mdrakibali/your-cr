// Generic delete confirmation dialog props
export interface DeleteConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  loading?: boolean;
}

// Search and filter bar props
export interface SearchFilterBarProps {
  searchValue: string;
  onSearchChange: (val: string) => void;
  searchPlaceholder?: string;
  filterValue?: string;
  onFilterChange?: (val: string) => void;
  filterOptions?: { label: string; value: string }[] | null;
  filterPlaceholder?: string;
}

