import { CiLocationOn } from "react-icons/ci"
import Mapbox from "../mapbox/Mapbox"

const PropertyLocation = () => {
  return (
    <div className="space-y-4">
      <p className="text-[#252B5C] font-semibold text-lg leading-5">Location</p>
      <div className="flex justify-start items-center space-x-3">
        <span className="w-12 h-12 rounded-full bg-[#FF750433] flex justify-center items-center">
          <CiLocationOn size={20} />
        </span>
        <p className="text-[#53587A] text-xs leading-5 w-[80%]">
          Jl. Gerungsari, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah
          50277
        </p>
      </div>
      <Mapbox />
    </div>
  )
}

export default PropertyLocation
