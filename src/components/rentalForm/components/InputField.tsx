import * as React from 'react';
import { InputFieldProps } from '../types';

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  className
}) => {
  const inputId = `${label.toLowerCase().replace(/\s+/g, '-')}-input`;

  return (
    <div className="flex flex-col">
      <label htmlFor={inputId} className="text-base font-semibold tracking-tight text-gray-900">
        {label}
      </label>
      <div className="flex flex-col mt-4 max-w-full text-sm font-medium tracking-tight rounded-xl text-slate-400 w-[386px]">
        <input
          type={type}
          id={inputId}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          className={`px-8 py-6 rounded-xl bg-neutral-100 w-full ${className}`} // Add custom className here
          aria-label={label}
        />
      </div>
    </div>
  );
};
