import * as React from 'react';
import { CarTypeOption } from './types';
import Image from 'next/image';

interface CarTypeFilterProps {
  options: CarTypeOption[];
}

export function CarTypeFilter({ options }: CarTypeFilterProps) {
  return (
    <div className="flex flex-col font-semibold text-slate-400">
      <div className="text-xs tracking-tight">T Y P E</div>
      <div className="flex flex-col items-start mt-7 text-xl tracking-tight text-justify">
        {options.map((option) => (
          <div key={option.label} className="flex gap-2 items-start mt-8 first:mt-0">
            <Image
              loading="lazy"
              src={option.icon}
              alt=""
              height={6}
              width={6}
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