export interface CarType {
    id: string;
    name: string;
    type: string;
    image: string;
    isFavorite: boolean;
    specs: {
      gasoline: string;
      steering: string;
      capacity: string;
    };
    price: {
      current: number;
      original?: number;
    };
  }