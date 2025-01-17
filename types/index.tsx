export enum Status {
  IDLE = "idle",
  PENDING = "pending",
  SUCCESS = "success",
  REJECTED = "rejected",
}

export type PropertyTypes = {
  id: string
  images: []
  title: string
  location: string
  likes: number
  rating: number
  price: string | number
  emiAvailable: boolean
  propertyAmenities: []
  views: number
}
