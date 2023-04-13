export interface IPropsLogin {
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  navigate: (to: string) => void;
}

export interface IPropsRegister extends IPropsLogin {
  setRepeatPassword: (value: string) => void;
  setFullName: (value: string) => void;
  setPhoneNumber: (value: string) => void;
  setAddress: (value: string) => void;
  setLegalForm: (value: string) => void;
  setKindOfActivity: (value: string) => void;
}

export interface IAuthState {
  user: {};
  isLogged: boolean;
}

interface IPublicUser {
  id: number | null;
  email: string;
  fullName: string;
  phoneNumber: string;
  address: string;
  legalForm: string;
  kindOfActivity: string;
  createdAt: string;
  updatedAt: string;
  product: [IProduct];
}

interface IProduct {
  id: number | null;
  brand: string;
  descr: string;
  article: string;
  createdAt: string;
  updatedAt: string;
  user: number | null;
}
