/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const Checkbox = forwardRef(
  ({ label, name, defaultChecked, ...props }, ref) => (
    <div className="space-y-2 my-4">
      <label className="flex items-center space-x-2">
        <input
          ref={ref}
          type="checkbox"
          name={name}
          defaultChecked={defaultChecked}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:outline-none"
          {...props}
        />
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </label>
    </div>
  )
);

Checkbox.displayName = "Checkbox"; // For display name in debugging tools

export default Checkbox;
