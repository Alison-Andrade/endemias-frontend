import clsx from "clsx";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, className, ...props }, ref) => (
    <div className="flex flex-col w-full">
      <label
        htmlFor={id}
        className="mb-3 mt-5 text-xs font-medium text-gray-900 dark:text-gray-100"
      >
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        className={clsx(
          "peer block w-full rounded-md border border-gray-200 py-2.25 pl-2 text-sm outline-2 placeholder:text-gray-500",
          className
        )}
        {...props}
      />
    </div>
  ),
);

Input.displayName = "Input";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, id, className, children, ...props }, ref) => (
    <div className="flex flex-col w-full">
      <label
        htmlFor={id}
        className="mb-3 mt-5 text-xs font-medium text-gray-900 dark:text-gray-100"
      >
        {label}
      </label>
      <select
        ref={ref}
        name="categoria"
        id={id}
        className={clsx(
          "peer block w-full rounded-md border border-gray-200 py-2.25 pl-2 text-sm outline-2 placeholder:text-gray-500",
          className,
        )}
        defaultValue={""}
        required
        {...props}
      >
        {children}
      </select>
    </div>
  ),
);

Select.displayName = "Select";
