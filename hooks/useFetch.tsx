import { API_URL } from "@/constants/constants"
import { Status } from "@/types"
import { useEffect, useState } from "react"

export const useFetch = () => {
  const [properties, setProperties] = useState([])
  const [status, setStatus] = useState<Status>(Status.IDLE)

  const fetchAllProperties = async () => {
    try {
      setStatus(Status.PENDING)
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`)
      }
      const data = await response.json()
      setStatus(Status.SUCCESS)
      setProperties(data)
    } catch (error: unknown) {
      setStatus(Status.REJECTED)
      if (error instanceof Error) {
        console.error(error.message)
      } else {
        console.error("An unexpected error occurred:", error)
      }
    }
  }

  useEffect(() => {
    fetchAllProperties()
  }, [])

  return { properties, status }
}
