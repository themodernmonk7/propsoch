import { useRef, useState } from "react"

export const useSlider = (images: string[]) => {
  const [index, setIndex] = useState(0)
  const startX = useRef(0)
  const endX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    endX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) {
      handleNext()
    } else if (endX.current - startX.current > 50) {
      handlePrev()
    }
  }

  const handleNext = () => {
    if (index < images?.length - 1) {
      setIndex(index + 1)
    }
  }

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  return { handleTouchStart, handleTouchMove, handleTouchEnd, index, setIndex }
}
