export let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
]

export function formatDate(dateString) {
  let date = new Date(dateString)
  let monthName = months[date.getMonth()]
  let dayOfMonth = date.getDate()
  let fourDigitYear = date.getFullYear()

  return `${monthName} ${dayOfMonth}, ${fourDigitYear}`
}
