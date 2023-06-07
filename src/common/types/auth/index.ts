import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface IPropsLogin<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> {
  navigate: (to: string) => void;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  loading: boolean;
}

export interface IPropsRegister extends IPropsLogin {}

export interface IAuthState {
  user: {
    user: IPublicUser;
    token: string;
  };
  isLogged: boolean;
  isLoading: boolean;
}

export interface IPublicUser {
  id: number | null;
  email: string;
  fullName: string;
  userName: string;
  phoneNumber: string;
  address: string;
  legalForm: string;
  kindOfActivity: string;
  createdAt: string;
  updatedAt: string;
  products: [IProducts];
}

interface IProducts {
  id: number | null;
  brand: string;
  descr: string;
  article: string;
  createdAt: string;
  updatedAt: string;
  user: number | null;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData extends ILoginData {
  fullName: string;
  userName: string;
  phoneNumber: string;
  address: string;
  legalForm: string;
  kindOfActivity: string;
}
