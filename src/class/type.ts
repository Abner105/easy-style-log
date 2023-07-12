export interface ILog {
  log: (...data: unknown[]) => void;
  debug: (...data: unknown[]) => void;
  bg(bgColor: string): ILog;
  color(textColor: string): ILog;
  title(content: string): ILog;
  style(style: string): ILog;
  setDefaultStyle(options: IDefault): void;
}

export interface IDefault {
  defaultBg?: string[];
  defaultColor?: string[];
  defaultTitle?: string[];
  defaultStyle?: string[];
  isDebug?: boolean;
  nodeDebugBg?: string;
  nodeDebugColor?: string;
}
