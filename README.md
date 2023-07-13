# easy-style-log

`easy-style-log`主要简化了`console.log`编写样式的方式，能更方便的打印各种样式。

## 特点

*   ⛪ 支持链式调用，学习成本更低
*   ⛲ 使用TypeScript编写
*   ⛵ 更方便的自定义样式
*   ⚓ 方便调试
*   ✈️ 一套方法，同时支持浏览器与nodejs终端

## 安装

```shell
npm i easy-style-log
```

## api

```js
// Es Module
import logger from "easy-style-log"
// CommonJs
const logger = require("easy-style-log")

logger.bg("#000000").debug('data')
logger.bg("#000000").log('data')
```

*   调试：logger.`<method>[.<method>...].debug(...data:unknown[])`
    *   例：`logger.bg("#000000").debug(data)`
*   非调试：logger.`<method>[.<method>...].log(...data:unknown[])`
    *   例：`logger.bg("#000000").log(data)`
*   **Method**:
    *   `bg(...args:string[])` 设置title背景，可接受多个参数，每个参数与title一一对应
    *   `title(...args:string[])` 设置 title 可设置多个title
    *   `color(...args:string[])` 设置 title 文字颜色
    *   `style(...args:string[])` 使用 css 设置title样式，**仅支持控制台支持使用的css**，node终端不支持该方法

## 设置全局默认样式

```ts
import logger from "easy-style-log"

logger.setDefaultStyle({
  defaultBg:['#000'], // 可选，浏览器默认是：['linear-gradient(to right, #12c2e9, #c471ed, #f64f59)'],node默认是:['']
  defaultColor:['#ADD7F2','#EEF756','#56F761'], // 可选，浏览器默认是["#FFFFFF"]，node默认是[""]
  defaultTitle: ['title1', 'title2', 'title3'], // 可选，默认是["EASY-STYLE-LOG"]
  defaultStyle: ['border-radius:999px;'], // 可选，默认是[""]
  isDebug: true,  // 可选，默认false，是否开启调试模式
  nodeDebugBg: 'red',   // 可选，node终端调试模式下,显示文件定位的背景色
  nodeDebugColor: 'green', //可选,node终端调试模式下，显示文件定位的文字颜色，默认是'blue'
})

logger.log(window) 
```

## 浏览器使用

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5fb8a996794448418c7a8aeb369d2f0e~tplv-k3u1fbpfcp-zoom-1.image)

```ts
import logger from "easy-style-log"
const data = "this is data"
// 默认样式
logger.log(data,window)  
// example 1 
logger.bg("linear-gradient(to right, #c04848, #480048)").title("example 1").log(data, window)
logger.bg("#FFC9AA").color("#C74800").title("example 1").style("border-radius:999px;").log(data, window)
// example 2 多个title
logger.title("example 2-1","example 2-2").style("font-size:18px;","font-size:12px;").log(data, window)
logger.title("example 2-1","example 2-2").bg("#000000","linear-gradient(to right, #003973, #e5e5be)").log(data, window)
// example 3 stle中的样式会覆盖，bg和color方法的样式
logger.style("background:#2963A1;").bg("#000000").title("example 3").log(data, window)
// example 4 使用调试模式，控制台会显示调用栈信息
logger.title("example 4").debug(data, window)
```

## node终端使用

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb5f398554464bceb5963803aa450fec~tplv-k3u1fbpfcp-zoom-1.image)

```js
const logger = require("easy-style-log")
const data = "this is data"
// 默认样式
logger.title('================================================').log()  
logger.bg('cyan').log(data)  
// 调试模式，终端会显示调用方法的位置
logger.bg('cyan').title("debug").debug(data)

// 支持颜色名词
logger.title('================================================').log()  
logger.title('=====================colors=====================').log()  
let colors = [" black ",' red ',' green ',' yellow ',' blue ',' magenta ', 'cyan ',' white',' grey ',' redBright ',' greenBright ',' yellowBright ',' blueBright ',' magentaBright ',' cyanBright ',' whiteBright ']
logger.title(...colors).color(...colors).log()
logger.title(...colors).bg(...colors).log()

// 使用hex或rbg，部分颜色无法识别，建议使用上例中的颜色名词
logger.title('================================================').log()  
logger.title('================rgb && hex======================').log()  
logger.color("#FF0086").title("hex--color--#FF0086").log()
logger.bg("#FF0086").title("hex--bg--#FF0086").log()
logger.color("rgb(54, 255, 0)").title("rgb--color--rgb(54, 255, 0)").log()
logger.bg("rgb(54, 255, 0)").title("rgb--bg--rgb(54, 255, 0)").log()
logger.title('================================================').log()  
```
### 终端支持的colors

-   `black`
-   `red`
-   `green`
-   `yellow`
-   `blue`
-   `magenta`
-   `cyan`
-   `white`
-   `grey`
-   `redBright`
-   `greenBright`
-   `yellowBright`
-   `blueBright`
-   `magentaBright`
-   `cyanBright`
-   `whiteBright`
