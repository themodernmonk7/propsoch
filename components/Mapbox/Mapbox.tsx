"use client"

import mapboxgl from "mapbox-gl"
import { useEffect, useRef, useState } from "react"
import styles from "./Mapbox.module.css"
const MAP_BOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN

mapboxgl.accessToken = MAP_BOX_ACCESS_TOKEN

const Mapbox: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const marker = useRef<mapboxgl.Marker | null>(null)

  const [longitude, setLongitude] = useState<number>(77.634422)
  const [latitude, setLatitude] = useState<number>(12.9184396)
  const [zoom, setZoom] = useState<number>(15)

  useEffect(() => {
    if (map.current) return

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [longitude, latitude],
      zoom: zoom,
    })

    map.current.addControl(new mapboxgl.NavigationControl())

    marker.current = new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map.current)
  }, [])

  useEffect(() => {
    if (!map.current) return

    const handleMove = () => {
      if (map.current) {
        const center = map.current.getCenter()
        setLongitude(Number(center.lng.toFixed(4)))
        setLatitude(Number(center.lat.toFixed(4)))
        setZoom(Number(map.current.getZoom().toFixed(2)))
        if (marker.current) {
          marker.current.setLngLat([center.lng, center.lat])
        }
      }
    }

    map.current.on("move", handleMove)

    return () => {
      if (map.current) {
        map.current.off("move", handleMove)
      }
    }
  }, [])

  return (
    <main className={styles.mainContainer}>
      <div ref={mapContainer} className={styles.mapContainer} />
    </main>
  )
}

export default Mapbox
