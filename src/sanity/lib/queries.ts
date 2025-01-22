import { groq } from "next-sanity";

export const recommendedCars = groq`*[_type == "car" && "recommended" in tags]`;
export const allCars = groq `*[_type == "car"]`;
export const popular = groq`*[_type == "car" && "popular" in tags]`;
