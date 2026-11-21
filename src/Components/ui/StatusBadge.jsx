import { CheckCircle2, Clock } from "lucide-react";

const StatusBadge = ({ status, className = "" }) => {
  const done = status === "Completed";
  const Icon = done ? CheckCircle2 : Clock;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${
        done
          ? "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300"
          : "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300"
      } ${className}`}
    >
      <Icon size={13} aria-hidden="true" />
      {done ? "Completed" : "In development"}
    </span>
  );
};

export default StatusBadge;
