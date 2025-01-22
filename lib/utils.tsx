export const throttleFunction = <T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timerId: ReturnType<typeof setTimeout> | null = null

  return function (this: unknown, ...args: Parameters<T>): void {
    if (timerId) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(() => {
      fn.apply(this, args)
      timerId = null
    }, delay)
  }
}

export const convertToCr = (number: number) => {
  const crores = number / 10000000
  return crores.toFixed(1) + " Cr"
}
