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
  
  export interface ReviewType {
    id: string;
    name: string;
    role: string;
    date: string;
    rating: number;
    avatar: string;
    comment: string;
  }
  
  export interface CarTypeOption {
    icon: string;
    label: string;
    count: number;
    isSelected?: boolean;
  }
  
  export interface CapacityOption {
    icon: string;
    label: string;
    count: number;
    isSelected?: boolean;
  }