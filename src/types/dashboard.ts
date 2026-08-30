import {
  AssessmentFormData,
  IssueFormData,
  NoticeFormData,
  RoutineFormData,
  StudentInviteFormData,
  SubjectFormData,
  TeacherFormData,
} from "@/validation/dashboard";

// Assessment data model
export interface Assessment {
  id: string;
  title: string;
  subject: string;
  type: string;
  dueDate: string;
  dueTime: string;
  description: string;
}

// Assessment card props
export interface AssessmentCardProps {
  assessment: Assessment;
  isCR: boolean;
  isDone: boolean;
  isOverdue: boolean;
  daysLeft: string;
  onToggleCheck: () => void;
  onDelete: () => void;
}

// Assessment dialog props
export interface AssessmentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AssessmentFormData) => void;
  initialData?: Assessment | null;
}

// Issue data model
export interface Issue {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  reporter: string;
  date: string;
}

// Issue card props
export interface IssueCardProps {
  issue: Issue;
  isCR: boolean;
  onUpdateStatus: (newStatus: string) => void;
  onDelete: () => void;
}

// Issue dialog props
export interface IssueDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: IssueFormData) => void;
}

// Notice data model
export interface Notice {
  id: string;
  title: string;
  body: string;
  date: string;
  priority: string;
  attachmentUrl: string;
  author: string;
}

// Notice card props
export interface NoticeCardProps {
  notice: Notice;
  isCR: boolean;
  onDelete: () => void;
}

// Notice dialog props
export interface NoticeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: NoticeFormData) => void;
}

// Class slot routine model
export interface ClassSlot {
  id: string;
  day: string;
  code: string;
  title: string;
  time: string;
  room: string;
  teacher: string;
  status: string;
  classType: string;
  rescheduledTime?: string;
}

// Routine slot card props
export interface RoutineSlotCardProps {
  cls: ClassSlot;
  isCR: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onReschedule: () => void;
  onCancel: () => void;
  onReset: () => void;
}

// Routine creation/edit dialog props
export interface RoutineDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: RoutineFormData) => void;
  title?: string;
  description?: string;
  defaultValues?: RoutineFormData | null;
  initialData?: ClassSlot | null;
}

// Routine reschedule dialog props
export interface RescheduleDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newTime: string, newRoom: string) => void;
  classNameTitle?: string;
  defaultTime?: string;
  defaultRoom?: string;
  subjectInfo?: string;
  initialTime?: string;
  initialRoom?: string;
}

// Student profile model
export interface Student {
  id: string;
  name: string;
  roll: string;
  email: string;
  phone: string;
  status: string;
  avatar?: string;
}

// Student card props
export interface StudentCardProps {
  student: Student;
  isCR: boolean;
  onDelete: () => void;
}

// Student dialog props
export interface StudentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: StudentInviteFormData) => void;
  initialData?: Student | null;
}

// Subject course model
export interface Subject {
  id: string;
  code: string;
  title: string;
  credits: string;
  teacher: string;
}

// Subject card props
export interface SubjectCardProps {
  subject: Subject;
  isCR: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

// Subject dialog props
export interface SubjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: SubjectFormData) => void;
  title?: string;
  description?: string;
  defaultValues?: SubjectFormData | null;
  initialData?: Subject | null;
}

// Teacher instructor model
export interface Teacher {
  id: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  subject: string;
  avatar?: string;
}

// Teacher card props
export interface TeacherCardProps {
  teacher: Teacher;
  isCR: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

// Teacher dialog props
export interface TeacherDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TeacherFormData) => void;
  title?: string;
  description?: string;
  defaultValues?: TeacherFormData | null;
  initialData?: Teacher | null;
}
