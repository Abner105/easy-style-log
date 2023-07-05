import { Log } from "./class/Log";
import { IArg } from "./class/type";

const createLog: (...args: unknown[]) => Log = (...args: unknown[]): Log => {
  if (
    args.length === 1 &&
    typeof args[0] === "object" &&
    args[0] !== null &&
    Object.keys(args[0]).length <= 4 &&
    ((args[0] as IArg).defaultBg ||
      (args[0] as IArg).defaultColor ||
      (args[0] as IArg).defaultTitle ||
      (args[0] as IArg).defaultStyle)
  ) {
    Log.defaultBg = (args[0] as IArg).defaultBg || ["#D7F7C2"];
    Log.defaultColor = (args[0] as IArg).defaultColor || ["#05690D"];
    Log.defaultTitle = (args[0] as IArg).defaultTitle || ["style-console-log"];
    Log.defaultStyle = (args[0] as IArg).defaultStyle || [""];
  }
  return new Log(args);
};

export default createLog;
