export interface ILog {
  log: (...data: unknown[]) => void;
  debug: (...data: unknown[]) => void;
  bg(...bgs: string[]): ILog;
  color(...colors: string[]): ILog;
  title(...titles: string[]): ILog;
  style(...styles: string[]): ILog;
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
