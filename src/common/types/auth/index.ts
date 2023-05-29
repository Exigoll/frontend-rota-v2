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

export interface IPropsRegister extends IPropsLogin {
  //setRepeatPassword: (value: string) => void;
  //setFullName: (value: string) => void;
  //setPhoneNumber: (value: string) => void;
  //setAddress: (value: string) => void;
  //setLegalForm: (value: string) => void;
  //setKindOfActivity: (value: string) => void;
}

export interface IAuthState {
  user: IPublicUser;
  isLogged: boolean;
  isLoading: boolean;
}

interface IPublicUser {
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
  product: [IAsset];
}

interface IAsset {
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
  phoneNumber: string;
  address: string;
  legalForm: string;
  kindOfActivity: string;
}
