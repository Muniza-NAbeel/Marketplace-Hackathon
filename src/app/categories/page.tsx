"use client";  

import dynamic from "next/dynamic";

const Categories = dynamic(() => import('@/components/categories/Categories'), { 
  ssr: false   
});

export default Categories;
