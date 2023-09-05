export type Concessionaire = {
  name: string;
  slug: string;
  image: any;
  description: string;
  email: string;
  menu: Menu[];
};

export type Menu = {
  id: number;
  name: string;
  price: number;
  image: any;
};
