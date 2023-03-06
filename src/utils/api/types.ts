export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
  phoneNumber: string;
  address: string;
  kindOfActivity: string;
  legalForm: string;
} & LoginDto;

export type ResponseUser = {
  id: number;
  token: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  address: string;
  kindOfActivity: string;
  legalForm: string;
};
