import { CiHeart } from "react-icons/ci"
import { CiSearch } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"
import { CiUser } from "react-icons/ci"
export const navLinks = [
  {
    id: 1,
    title: "Explore",
    url: "/",
    icon: <CiSearch size={24} title="Explore" />,
  },
  {
    id: 2,
    title: "Wishlists",
    url: "/wishlists",
    icon: <CiHeart size={24} title="wishlists" />,
  },
  {
    id: 3,
    title: "Show map",
    url: "/showmap",
    icon: <CiLocationOn size={24} title="Show map" />,
  },
  {
    id: 4,
    title: "Log in",
    url: "/login",
    icon: <CiUser size={24} title="Log in" />,
  },
]
export const API_URL = "propertyData.json"
export const ITEMS_PER_PAGE = 10
export const LOAD_DELAY = 200
