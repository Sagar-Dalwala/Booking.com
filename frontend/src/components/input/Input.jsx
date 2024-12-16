/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

const Input = forwardRef(({ label, name, type, defaultValue, required, ...props }, ref) => (
  <div className="space-y-2 flex-1">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      ref={ref}
      type={type}
      name={name}
      defaultValue={defaultValue}
      required={required}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
      {...props}
    />
  </div>
));

Input.displayName = 'Input'; // For display name in debugging tools

export default Input;
