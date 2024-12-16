import * as React from 'react';
import { CapacityOption } from './types';
import Image from 'next/image';

interface CapacityFilterProps {
  options: CapacityOption[];
}

export function CapacityFilter({ options }: CapacityFilterProps) {
  return (
    <div className="flex flex-col font-semibold text-slate-400">
      <div className="text-xs tracking-tight mt-4">C A P A C I T Y</div> 
      <div className="flex flex-col mt-7 text-xl tracking-tight text-justify">
        {options.map((option) => (
          <div key={option.label} className="flex gap-2 items-start mt-8 first:mt-0">
            <Image
              loading="lazy"
              src={option.icon}
              alt="never"
              width={6}
              height={6}
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <div className={`w-36 ${option.isSelected ? '' : 'text-slate-500'}`}>
              {option.label} ({option.count})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}