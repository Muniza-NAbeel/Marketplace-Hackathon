export interface InputFieldProps {
  type: string;
  label: string;
  placeholder: string;
  value: string; // Ensure value is typed as string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // onChange handler
  className: string;
  }
  
  export interface StepHeaderProps {
    title: string;
    subtitle: string;
    step: string;
  }
  
  export interface SelectFieldProps {
    label: string;
    placeholder: string;
  
  }
  
  export interface PaymentMethodProps {
    icon: string;
    name: string;
    logo?: string;
  }
  
  export interface RentalSummaryProps {
    carName: string;
    carImage: string;
    rating: number;
    reviews: number;
    subtotal: string;
    tax: number;
    total: string;
  }