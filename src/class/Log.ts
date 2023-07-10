import { OverrideLog } from "./OverrideLog";
import { ILog } from "./type";

/**
 * Log 主类
 */
export class Log extends OverrideLog implements ILog {
  #bg: string[];
  #color: string[];
  #title: string[];
  #style: string[];
  #timers: number[] = [];
  #data: unknown[] = [];
  static defaultBg: string[] = [
    "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)",
  ];
  static defaultColor: string[] = ["#FFFFFF"];
  static defaultTitle: string[] = ["EASY-STYLE-LOG"];
  static defaultStyle: string[] = [""];

  constructor(args: unknown[]) {
    super();
    this.#bg = Log.defaultBg;
    this.#color = Log.defaultColor;
    this.#title = Log.defaultTitle;
    this.#style = Log.defaultStyle;
    this.#data = args;
    this.#excute();
  }

  bg(...bgs: string[]): ILog {
    this.#bg = bgs;
    this.#excute();
    return this;
  }

  color(...colors: string[]): ILog {
    this.#color = colors;
    this.#excute();
    return this;
  }

  title(...titles: string[]): ILog {
    this.#title = titles;
    this.#excute();
    return this;
  }

  style(...styles: string[]): ILog {
    this.#style = styles;
    this.#excute();
    return this;
  }

  #excute(): void {
    const timer: NodeJS.Timeout = setTimeout(() => {
      if (this.#timers.length === 1) {
        this.#next();
      }
      clearTimeout(this.#timers.shift());
    });
    this.#timers.push(Number(timer));
  }

  #next(): void {
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

    return console.log(title, ...styles, ...this.#data);
  }
}
