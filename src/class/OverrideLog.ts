import { IOverrideLog } from "./type";
/**
 * 重写 console 由于使用定时器，为了保持输出顺序，需要重写console的方法
 */
export class OverrideLog implements IOverrideLog {
  log(...args: unknown[]): void {
    setTimeout(() => {
      console.log(...args);
    });
  }
  info(...args: unknown[]): void {
    setTimeout(() => {
      console.info(...args);
    });
  }
  warn(...args: unknown[]): void {
    setTimeout(() => {
      console.warn(...args);
    });
  }
  assert(assertion: boolean, ...args: unknown[]): void {
    setTimeout(() => {
      console.assert(assertion, ...args);
    });
  }
  clear(): void {
    setTimeout(() => {
      console.clear();
    });
  }
  time(timerName: string): void {
    setTimeout(() => {
      console.time(timerName);
    });
  }
  timeEnd(label: string): void {
    setTimeout(() => {
      console.timeEnd(label);
    });
  }
  table(...args: unknown[]): void {
    setTimeout(() => {
      console.table(...args);
    });
  }
}
