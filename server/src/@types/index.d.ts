export const typeDefs = ["type CheckMeResponse {\n  ok: Boolean!\n  error: String\n  me: MeType\n}\n\ntype Query {\n  CheckMe: CheckMeResponse!\n  ListItems(cursor: ID, name: String, divide: String, native: String): ListItemsResponse!\n  ReadItem(id: ID!): ReadItemResponse!\n}\n\ntype LoginResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  Login(username: String!, password: String!): LoginResponse!\n  Password(password: String!): PasswordResponse!\n  Register(username: String!, password: String!): RegisterResponse!\n  AddItem(name: String!, divide: String!, native: String!, unit: String!, price: Int!): AddItemResponse!\n  RemoveItem(id: ID!): RemoveItemResponse!\n  UpdateItem(id: ID!, name: String, divide: String, native: String, unit: String, price: Int): UpdateItemResponse!\n}\n\ntype PasswordResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype RegisterResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddItemResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListItemsResponse {\n  ok: Boolean!\n  error: String\n  items: [Item]\n}\n\ntype ReadItemResponse {\n  ok: Boolean!\n  error: String\n  item: Item\n}\n\ntype RemoveItemResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype UpdateItemResponse {\n  ok: Boolean!\n  error: String\n}\n\nscalar Date\n\ntype User {\n  id: ID!\n  username: String!\n  password: String!\n  admin: Boolean!\n  created_at: Date!\n  updated_at: Date\n}\n\ntype MeType {\n  userId: ID!\n  username: String!\n  admin: Boolean!\n}\n\ntype InputItem {\n  id: ID!\n  name: String!\n  divide: String!\n  native: String!\n  unit: String!\n  price: Int!\n  count: Int!\n  amount: Int!\n}\n\ntype Item {\n  id: ID!\n  num: Int!\n  name: String!\n  divide: String!\n  native: String!\n  unit: String!\n  price: Int!\n  created_at: Date!\n  updated_at: Date\n}\n\ntype Cart {\n  id: ID!\n  items: [InputItem]!\n  completed: Boolean!\n  deleted: Boolean!\n  created_at: Date!\n  updated_at: Date\n  user_id: String!\n  bill_id: String\n}\n\ntype Bill {\n  id: ID!\n  title: String!\n  hall: String!\n  etc: String!\n  total_amount: Int!\n  items: [InputItem]\n  reserve: Int\n  username: String!\n  user_id: String!\n  cart_id: String!\n  created_at: Date!\n}\n\ntype Wedding {\n  id: ID!\n  husband_name: String!\n  husband_image: String\n  bride_name: String!\n  bride_image: String\n  wedding_at: String!\n  event_at: String!\n  cost_husband: Int!\n  cost_bride: Int!\n  meal_husband: Int!\n  meal_bride: Int!\n  present_husband: Int!\n  present_bride: Int!\n  reserve_husband: Int!\n  reserve_bride: Int!\n  created_at: Date!\n  updated_at: Date\n  conventionId: String\n  convention: Convention\n  companyId: String\n  company: Company\n  hanbokId: String\n  hanbok: Hanbok\n  eventId: String\n  event: Event\n  mealId: String\n  meal: Meal\n  presentId: String\n  present: Present\n  reserveId: String\n  reserve: Reserve\n}\n\ntype Company {\n  id: ID!\n  company_husband: Int!\n  company_bride: Int!\n  rooftop_husband: Int!\n  rooftop_bride: Int!\n  owner_woman_husband: Int!\n  owner_woman_bride: Int!\n  owner_man_husband: Int!\n  owner_man_bride: Int!\n  select_husband: Int!\n  select_bride: Int!\n  frame_husband: Int!\n  frame_bride: Int!\n  dress_husband: Int!\n  dress_bride: Int!\n  hairpin_husband: Int!\n  hairpin_bride: Int!\n  wig_husband: Int!\n  wig_bride: Int!\n  video_husband: Int!\n  video_bride: Int!\n  etc_husband: Int!\n  etc_bride: Int!\n  weddingId: String!\n  wedding: Wedding!\n}\n\ntype Convention {\n  id: ID!\n  rental_husband: Int!\n  rental_bride: Int!\n  sword_husband: Int!\n  sword_bride: Int!\n  glove_husband: Int!\n  glove_bride: Int!\n  bouquet_husband: Int!\n  bouquet_bride: Int!\n  ceremony_husband: Int!\n  ceremony_bride: Int!\n  weddingId: String\n  wedding: Wedding\n}\n\ntype Event {\n  id: ID!\n  play_husband: Int!\n  play_bride: Int!\n  anthem_husband: Int!\n  anthem_bride: Int!\n  moderator_husband: Int!\n  moderator_bride: Int!\n  officiate_husband: Int!\n  officiate_bride: Int!\n  weddingId: String\n  wedding: Wedding\n}\n\ntype Hanbok {\n  id: ID!\n  hanbok_pre_husband: Int!\n  hanbok_pre_bride: Int!\n  hanbok_post_husband: Int!\n  hanbok_post_bride: Int!\n  weddingId: String\n  wedding: Wedding\n}\n\ntype Meal {\n  id: ID!\n  meals: String!\n  meals_price: Int!\n  meals_num_husband: Int!\n  meals_num_bride: Int!\n  weddingId: String\n  wedding: Wedding\n}\n\ntype Present {\n  id: ID!\n  present: String!\n  present_price: Int!\n  present_num_husband: Int!\n  present_num_bride: Int!\n  weddingId: String\n  wedding: Wedding\n}\n\ntype Reserve {\n  id: ID!\n  reserve: String!\n  reserve_pay: Int!\n  weddingId: String\n  wedding: Wedding\n}\n"];
/* tslint:disable */

export interface Query {
  CheckMe: CheckMeResponse;
  ListItems: ListItemsResponse;
  ReadItem: ReadItemResponse;
}

export interface ListItemsQueryArgs {
  cursor: string | null;
  name: string | null;
  divide: string | null;
  native: string | null;
}

export interface ReadItemQueryArgs {
  id: string;
}

export interface CheckMeResponse {
  ok: boolean;
  error: string | null;
  me: MeType | null;
}

export interface MeType {
  userId: string;
  username: string;
  admin: boolean;
}

export interface ListItemsResponse {
  ok: boolean;
  error: string | null;
  items: Array<Item> | null;
}

export interface Item {
  id: string;
  num: number;
  name: string;
  divide: string;
  native: string;
  unit: string;
  price: number;
  created_at: Date;
  updated_at: Date | null;
}

export type Date = any;

export interface ReadItemResponse {
  ok: boolean;
  error: string | null;
  item: Item | null;
}

export interface Mutation {
  Login: LoginResponse;
  Password: PasswordResponse;
  Register: RegisterResponse;
  AddItem: AddItemResponse;
  RemoveItem: RemoveItemResponse;
  UpdateItem: UpdateItemResponse;
}

export interface LoginMutationArgs {
  username: string;
  password: string;
}

export interface PasswordMutationArgs {
  password: string;
}

export interface RegisterMutationArgs {
  username: string;
  password: string;
}

export interface AddItemMutationArgs {
  name: string;
  divide: string;
  native: string;
  unit: string;
  price: number;
}

export interface RemoveItemMutationArgs {
  id: string;
}

export interface UpdateItemMutationArgs {
  id: string;
  name: string | null;
  divide: string | null;
  native: string | null;
  unit: string | null;
  price: number | null;
}

export interface LoginResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface PasswordResponse {
  ok: boolean;
  error: string | null;
}

export interface RegisterResponse {
  ok: boolean;
  error: string | null;
}

export interface AddItemResponse {
  ok: boolean;
  error: string | null;
}

export interface RemoveItemResponse {
  ok: boolean;
  error: string | null;
}

export interface UpdateItemResponse {
  ok: boolean;
  error: string | null;
}

export interface User {
  id: string;
  username: string;
  password: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date | null;
}

export interface InputItem {
  id: string;
  name: string;
  divide: string;
  native: string;
  unit: string;
  price: number;
  count: number;
  amount: number;
}

export interface Cart {
  id: string;
  items: Array<InputItem>;
  completed: boolean;
  deleted: boolean;
  created_at: Date;
  updated_at: Date | null;
  user_id: string;
  bill_id: string | null;
}

export interface Bill {
  id: string;
  title: string;
  hall: string;
  etc: string;
  total_amount: number;
  items: Array<InputItem> | null;
  reserve: number | null;
  username: string;
  user_id: string;
  cart_id: string;
  created_at: Date;
}

export interface Wedding {
  id: string;
  husband_name: string;
  husband_image: string | null;
  bride_name: string;
  bride_image: string | null;
  wedding_at: string;
  event_at: string;
  cost_husband: number;
  cost_bride: number;
  meal_husband: number;
  meal_bride: number;
  present_husband: number;
  present_bride: number;
  reserve_husband: number;
  reserve_bride: number;
  created_at: Date;
  updated_at: Date | null;
  conventionId: string | null;
  convention: Convention | null;
  companyId: string | null;
  company: Company | null;
  hanbokId: string | null;
  hanbok: Hanbok | null;
  eventId: string | null;
  event: Event | null;
  mealId: string | null;
  meal: Meal | null;
  presentId: string | null;
  present: Present | null;
  reserveId: string | null;
  reserve: Reserve | null;
}

export interface Convention {
  id: string;
  rental_husband: number;
  rental_bride: number;
  sword_husband: number;
  sword_bride: number;
  glove_husband: number;
  glove_bride: number;
  bouquet_husband: number;
  bouquet_bride: number;
  ceremony_husband: number;
  ceremony_bride: number;
  weddingId: string | null;
  wedding: Wedding | null;
}

export interface Company {
  id: string;
  company_husband: number;
  company_bride: number;
  rooftop_husband: number;
  rooftop_bride: number;
  owner_woman_husband: number;
  owner_woman_bride: number;
  owner_man_husband: number;
  owner_man_bride: number;
  select_husband: number;
  select_bride: number;
  frame_husband: number;
  frame_bride: number;
  dress_husband: number;
  dress_bride: number;
  hairpin_husband: number;
  hairpin_bride: number;
  wig_husband: number;
  wig_bride: number;
  video_husband: number;
  video_bride: number;
  etc_husband: number;
  etc_bride: number;
  weddingId: string;
  wedding: Wedding;
}

export interface Hanbok {
  id: string;
  hanbok_pre_husband: number;
  hanbok_pre_bride: number;
  hanbok_post_husband: number;
  hanbok_post_bride: number;
  weddingId: string | null;
  wedding: Wedding | null;
}

export interface Event {
  id: string;
  play_husband: number;
  play_bride: number;
  anthem_husband: number;
  anthem_bride: number;
  moderator_husband: number;
  moderator_bride: number;
  officiate_husband: number;
  officiate_bride: number;
  weddingId: string | null;
  wedding: Wedding | null;
}

export interface Meal {
  id: string;
  meals: string;
  meals_price: number;
  meals_num_husband: number;
  meals_num_bride: number;
  weddingId: string | null;
  wedding: Wedding | null;
}

export interface Present {
  id: string;
  present: string;
  present_price: number;
  present_num_husband: number;
  present_num_bride: number;
  weddingId: string | null;
  wedding: Wedding | null;
}

export interface Reserve {
  id: string;
  reserve: string;
  reserve_pay: number;
  weddingId: string | null;
  wedding: Wedding | null;
}
