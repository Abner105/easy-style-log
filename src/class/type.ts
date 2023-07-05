export interface IOverrideLog {
  log(...args: unknown[]): void;
  info(...args: unknown[]): void;
  warn(...args: unknown[]): void;
  assert(assertion: boolean, ...args: unknown[]): void;
  clear(): void;
  time(timerName: string): void;
  timeEnd(label: string): void;
  table(...args: unknown[]): void;
}
export interface ILog extends IOverrideLog {
  bg(bgColor: string): ILog;
  color(textColor: string): ILog;
  title(content: string): ILog;
  style(style: string): ILog;
}

export interface IArg {
  defaultBg: string[];
  defaultColor: string[];
  defaultTitle: string[];
  defaultStyle: string[];
}
