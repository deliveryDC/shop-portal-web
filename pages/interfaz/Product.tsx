export interface Product {
  images: string[];
  title: string;
  price: number;
  sizes?: string[]; // Opcional, ya que no todos los productos la tienen
}