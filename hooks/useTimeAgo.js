import { useEffect, useState } from "react"
const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
]

const getDateDiff = (timestamp) => {
  const now = Date.now()
  const elapsed = (timestamp - now) / 1000
  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
      const value = Math.floor(elapsed / secondsInUnit)
      return { value, unit }
    }
  }
}

export const useTimeAgo = (timestamp) => {
  const [timeago, setTimeago] = useState(() => getDateDiff(timestamp))
  //   const { value, unit } = getDateDiff(timestamp)
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeAgo = getDateDiff(timestamp)
      setTimeago(newTimeAgo)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [timestamp])

  const rft = new Intl.RelativeTimeFormat("es", { style: "short" })
  const { value, unit } = timeago
  return rft.format(value, unit)
}
