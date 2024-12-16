import * as React from 'react';
import { SelectFieldProps } from '../types';

export const SelectField: React.FC<SelectFieldProps> = ({ label, placeholder,  }) => {
  const selectId = `${label.toLowerCase().replace(/\s+/g, '-')}-select`;

  return (
    <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
      <label
        htmlFor={selectId}
        className="text-base font-semibold tracking-tight text-gray-900"
      >
        {label}
      </label>
      <div className="flex flex-col mt-4 w-full text-sm font-medium tracking-tight rounded-none max-w-[386px] text-slate-400">
        <div className="flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-neutral-100">
          {/* Placeholder (select element) */}
          <select
            id={selectId}
            className="flex-grow bg-transparent text-left focus:outline-none"
            aria-label={label}
          >
            <option value="">{placeholder}</option>
          </select>

        </div>
      </div>
    </div>
  );
};
