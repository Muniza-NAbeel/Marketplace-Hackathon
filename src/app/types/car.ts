


export interface Cars {
    _id: string;
    name: string;
    type: string;
    fuelCapacity: string;
    transmission: string;
    seatingCapacity: string; 
    pricePerDay: string; 
    originalPrice: string;
    tags: string[];
    image: {
      asset: {
        _ref: string;
        _type: "image";
    };
  }
}