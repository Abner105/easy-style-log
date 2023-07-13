import { ILog, IDefault } from "./type";
import colorToAnsi from "../utils/colorToAnsi";
import logLocation from "../utils/logLocation";

const isNode = typeof window !== "object";
/**
 * Log 
 */
export class Log implements ILog {
  #bg: string[] = [""];
  #color: string[] = [""];
  #title: string[] = [""];
  #style: string[] = [""];
  static defaultBg: string[] = isNode
    ? [""]
    : ["linear-gradient(to right, #12c2e9, #c471ed, #f64f59)"];
  static defaultColor: string[] = isNode ? [""] : ["#FFFFFF"];
  static defaultTitle: string[] = ["EASY-STYLE-LOG"];
  static defaultStyle: string[] = [""];
  static isDebug: boolean = false;
  static nodeDebugBg: string = "";
  static nodeDebugColor: string = "blue";
  static instance: Log;

  constructor() {
    // 单例
    if (!Log.instance) {
      this.#init();
      Log.instance = this;
    }
    return Log.instance;
  }

  bg(...bgs: string[]): ILog {
    this.#bg = bgs;
    return this;
  }

  color(...colors: string[]): ILog {
    this.#color = colors;
    return this;
  }

  title(...titles: string[]): ILog {
    this.#title = titles;
    return this;
  }

  style(...styles: string[]): ILog {
    this.#style = styles;
    return this;
  }

  #init(): void {
    this.#bg = [...Log.defaultBg];
    this.#color = [...Log.defaultColor];
    this.#title = [...Log.defaultTitle];
    this.#style = [...Log.defaultStyle];
  }

  setDefaultStyle(options: IDefault): void {
    Log.defaultBg = options.defaultBg || ["#D7F7C2"];
    Log.defaultColor = options.defaultColor || ["#05690D"];
    Log.defaultTitle = options.defaultTitle || ["easy-style-log"];
    Log.defaultStyle = options.defaultStyle || [""];
    Log.isDebug = options.isDebug || false;
    Log.nodeDebugBg = options.nodeDebugBg || "";
    Log.nodeDebugColor = options.nodeDebugColor || "blue";
    this.#init();
  }

  #logTemplate(debug: boolean = false): string[] {
    let styles: string[] = [];
    if (isNode) {
      // \x1B[42;31m%s\x1B[49;39m
      let loca: string = "";
      if (Log.isDebug || debug) {
        const b = Log.nodeDebugBg ? colorToAnsi(Log.nodeDebugBg, true) : "";
        const c = Log.nodeDebugColor
          ? colorToAnsi(Log.nodeDebugColor) + ""
          : "";
        const semi = c && b ? ";" : "";
        loca = `\x1B[${b}${semi}${c}m${logLocation()}\x1B[49;39m`;
      }
      styles[0] = this.#title.reduce((pre, item, i): string => {
        const b = this.#bg[i]
          ? colorToAnsi(this.#bg[i], true)
          : this.#bg[0]
          ? colorToAnsi(this.#bg[0], true)
          : "";
        const c = this.#color[i]
          ? colorToAnsi(this.#color[i])
          : this.#color[0]
          ? colorToAnsi(this.#color[0])
          : "";
        const semi = c && b ? ";" : "";
        return pre + `\x1B[${b}${semi}${c}m${item}\x1B[49;39m`;
      }, loca);
    } else {
      let title: string = "";
      styles = this.#title.map((item, index) => {
        title += `%c ${item} `;
        const bg = this.#bg[index] || this.#bg[0];
        const color = this.#color[index] || this.#color[0];
        const style = this.#style[index] || this.#style[0];
        return (
          `background: ${bg};color: ${color}; padding: 3px 6px;margin:2px 0; border-radius: 2px; font-size: 14px;  font-weight: 600;` +
          style
        );
      });
      styles.unshift(title);
    }
    this.#init();
    return styles;
  }

  log = (...data: unknown[]) => {
    const styles = this.#logTemplate();
    if (Log.isDebug && !isNode) {
      return console.trace(...styles, ...data);
    }
    return console.log(...styles, ...data);
  };

  debug = (...data: unknown[]) => {
    const styles = this.#logTemplate(true);
    if (!isNode) {
      return console.trace(...styles, ...data);
    }
    return console.log(...styles, ...data);
  };
}
