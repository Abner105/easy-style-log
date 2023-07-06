export interface ILog {
  bg(bgColor: string): ILog;
  color(textColor: string): ILog;
  title(content: string): ILog;
  style(style: string): ILog;
  exe(...data: unknown[]):void;
  setDefaultStyle(options: IDefault): void 
}

export interface IDefault {
  defaultBg: string[];
  defaultColor: string[];
  defaultTitle: string[];
  defaultStyle: string[];
}
