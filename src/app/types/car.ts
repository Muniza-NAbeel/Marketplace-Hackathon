
export interface Cars {
    _id: number;
    name: string;
    type: string;
    fuelCapacity: string;
    transmission: string;
    seatingCapacity: string; 
    pricePerDay: number; 
    originalPrice: string;
    tags: string[];
    image: {
      asset: {
        _ref: string;
        _type: "image";
    };
  }
}