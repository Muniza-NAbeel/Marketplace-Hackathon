import * as React from 'react';
import { CarStatProps } from '../types';

export const CarStats: React.FC<CarStatProps> = ({ color, type, count }) => {
  return (
    <div className="flex gap-9 items-center">
      <div className="flex gap-3 items-center self-stretch my-auto text-justify text-[#90A3BF]">
        <div className={`flex shrink-0 self-stretch  my-auto w-3 h-3 ${color} rounded-[70px]`} />
        <div className="self-stretch my-auto w-[90px] max-sm:w-[180px]">{type}</div>
      </div>
      <div className="self-stretch my-auto leading-5 text-right max-sm:text-right text-[#1A202C] w-[72px]">
        {count}
      </div>
    </div>
  );
};