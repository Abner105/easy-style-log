
const logLocation = (line: number = 1): string => {
  let location: string = ""
  try {
    throw new Error()
  } catch (err) {
    const stack: string = (<Error>err).stack || ""
    const fullPath = (<string[]>stack.match(/\s\((.*?)\)\s/g))[line] || ""
    location = (<string[]>fullPath.match(/.*\/(.*?)\)\s$/))[1]
  }
  return location
}
export default logLocation
