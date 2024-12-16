/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const Textarea = forwardRef(
  ({ label, name, type, defaultValue, required, ...props }, ref) => (
    <div className="space-y-2 my-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        ref={ref}
        type={type}
        name={name}
        defaultValue={defaultValue}
        required={required}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
        {...props}
      />
    </div>
  )
);

Textarea.displayName = "Textarea"; // For display name in debugging tools

export default Textarea;
