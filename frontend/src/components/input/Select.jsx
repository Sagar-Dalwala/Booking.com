/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

const Select = forwardRef(({ label, name, options, defaultValue, required, ...props }, ref) => (
  <div className="space-y-2 my-2 flex-1">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <select
      ref={ref}
      name={name}
      defaultValue={defaultValue}
      required={required}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
      {...props}
    >
      {options.length > 0 ? (
        options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))
      ) : (
        <option value="">No options available</option>
      )}
    </select>
  </div>
));

Select.displayName = 'Select'; // For display name in debugging tools

export default Select;
