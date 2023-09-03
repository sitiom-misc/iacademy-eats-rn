export type Concessionaire = {
  name: string;
  image: any;
  description: string;
  email: string;
  menu: Menu[];
};

export type Menu = {
  id: number;
  name: string;
  price: number;
  image: string;
};
