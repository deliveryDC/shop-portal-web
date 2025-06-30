import { Product  } from "./Product";
export interface Tenant {
  title: string;
  primaryColor: string;
  describeTitle: string;
  describe: string;
  name?: string;
  logo?: string;
  products: Product[];
}