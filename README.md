# easy-style-log

`easy-style-log` mainly enhances the writing method of `console.log` for browsers, and can easily realize the printing style of the console through chain calls.

## Features

*   ⛪ Method chaining calls
*   ⛲ Written in TypeScript
*   ⛵ Easy to style and customize
*   ⚓ Inherited most of the methods of `console`

## Installation

```
    npm i easy-style-log
```

## Example

### ⏩ **Default style**

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ef03f4d0f514ceb837823c8bb0e0043~tplv-k3u1fbpfcp-zoom-1.image)

```ts
import createLog from "easy-style-log"
const data = "this is data"
const o = {key:"value"}
// params:any
createLog(data,o)
```

### ⏩ **Set the global default style**

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b2833579587b4305bf893a8ee4b110a7~tplv-k3u1fbpfcp-zoom-1.image)

```ts
import createLog from "easy-style-log"
createLog({
  defaultBg: ["#000", "#D7F7C2"],   // backgrond   string[]
  defaultColor: ["#ffffff", "#05690D"],  // text color  string[]
  defaultStyle: ["font-size:18px;margin:8px 0;", "border-radius:999px;"], // css  string[]
  defaultTitle: ["title 1", "title 2"], // title  string[]
})
createLog(window)
```

###  ⏩ **Use alone, customize the style**
- **Method**:
    - `bg(...args:string[])`  Set the background of the title
    - `title(...args:string[])` set title
    - `color(...args:string[])` Set title text color
    - `style(...args:string[])` Use css to set the title style, **only support the css that console itself can support**

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b9d35bc5d854a04a59ec99d220d6ba7~tplv-k3u1fbpfcp-zoom-1.image)

```ts
import createLog from "easy-style-log"
const data = "this is data"
// example 1 basic use
createLog(data, window).bg("linear-gradient(to right, #c04848, #480048)").title("example 1")
createLog(data, window).bg("#FFC9AA").color("#C74800").title("example 1").style("border-radius:999px;")

// example 2 Multiple titles
createLog(data, window).title("example 2-1","example 2-2").style("font-size:18px;","font-size:12px;")
createLog(data, window).title("example 2-1","example 2-2").bg("#000000","linear-gradient(to right, #003973, #e5e5be)")

// example 3 The background in style will override the style of the bg method
createLog(data, window).style("background:#2963A1;").bg("#000000").title("example 3")
```
