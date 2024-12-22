import * as React from 'react';
import { StepHeaderProps } from '../types';

export const StepHeader: React.FC<StepHeaderProps> = ({ title, subtitle, step, }) => {
  return (
<div className="flex justify-between max-md:flex-row max-md:items-center max-md:gap-4">
  <div className="flex flex-col">
    <h2 className="text-xl font-bold tracking-tight text-gray-900">
      {title}
    </h2>
    <p className="mt-1 text-sm font-medium tracking-tight text-slate-400">
      {subtitle}
    </p>
  </div>
  <div className="text-sm font-medium tracking-tight text-right text-slate-400 mt-0">
    {step}
  </div>
</div>
  
  );
};