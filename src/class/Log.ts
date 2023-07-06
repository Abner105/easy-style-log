import { ILog, IDefault } from "./type";

/**
 * Log 主类
 */
export class Log implements ILog {
  #bg: string[] = [""];
  #color: string[] = [""];
  #title: string[] = [""];
  #style: string[] = [""];
  static defaultBg: string[] = [
    "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)",
  ];
  static defaultColor: string[] = ["#FFFFFF"];
  static defaultTitle: string[] = ["STYLE-CONSOLE-LOG"];
  static defaultStyle: string[] = [""];
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
    Log.defaultTitle = options.defaultTitle || ["style-console-log"];
    Log.defaultStyle = options.defaultStyle || [""];
    this.#init();
  }

  exe(...data: unknown[]) {
    let title: string = "";
    const styles: string[] = this.#title.map((item, index) => {
      title += `%c ${item} `;
      const bg = this.#bg[index] || this.#bg[0];
      const color = this.#color[index] || this.#color[0];
      const style = this.#style[index] || this.#style[0];
      return (
        `background: ${bg};color: ${color}; padding: 6px 12px;margin:8px 0; border-radius: 4px; font-size: 18px;  font-weight: 600;` +
        style
      );
    });
    this.#init();
    return console.log(title, ...styles, ...data);
  }
}
