export interface Cars {
    _id: string;
    name: string;
    type: string;
    image: string;
    isFavorite: boolean;
    specs: {
      gasoline: string;
      steering: string;
      capacity: string;
    };
    pricePerDay: number;

    price: {
      current: number;
      original?: number;
    };
  }