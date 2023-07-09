import { UserType } from './../users/users';

export type ProductType = {
  owner: Object | UserType,
  stud: boolean | null
  breed: string
  price: number
  title: string
  images:string[]
  weight: number
  sold_at: string
  quantity: number
  description: string
  sub_category: string
  main_category: string
}