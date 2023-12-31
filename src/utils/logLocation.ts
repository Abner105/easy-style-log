const logLocation = (line: number = 3): string => {
  let location: string = "";
  try {
    throw new Error();
  } catch (err) {
    const stack: string = (<Error>err).stack || "";
    const fullPath: string[] = <string[]>stack.match(/\s\((.*?)\)\s/g);
    const path = fullPath[line].replaceAll("\\", "/");
    location = (<string[]>path.match(/.*\/(.*?)\)\s$/))[1];
  }
  return `${location}  `;
};
export default logLocation;
