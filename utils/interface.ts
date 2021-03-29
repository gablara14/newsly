export interface Newsletter {
  _id: string;
  name: string;
  description: string;
  isPaid: boolean;
  price: number | string;
  imageURL: string;
  createdAt: string | Date | number;
  members: {}[];
  posts: {}[];
}

export interface Login {
  _id: string;
  email: string;
  password: string;
  userId: string;
  createdAt: string | Date | number;
}

export interface Users {
  _id: string;
  description: string;
  name: string;
  imageURL: string;
  createdAt: string | Date | number;
  newsletters: Newsletter[];
}

export interface Leads {
  _id: string;
  name: string;
  genre: string;
  email: string;
  age: number | string;
  pps: string;
  createdAt: string | Date | number;
  userId: string;
  newsletterPartOf: {}[];
  isActive: boolean;
  paysPerMonth: number;
}
