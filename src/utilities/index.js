const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
const countProperties = (obj) => {
  return Object.keys(obj).length
}
const truncateText = (text, length) => {
  return text.substring(0, length) + (text.length > length ? "..." : "")
}
export { capitalize, uuidv4, countProperties, truncateText }
