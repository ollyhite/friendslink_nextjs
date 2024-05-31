export interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  city: string;
  user_pic: string;
  country: string;
  friends: Array<UserData>;
}
