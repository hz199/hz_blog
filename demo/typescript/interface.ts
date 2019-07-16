
/* 0. 带有任意数量的其它属性 这样可以定义 [propName: String]: any */
interface Square {
  color: string
  area: number
  [propName: string]: any;
}

/************** 1. 可选属性 ？ **************/
interface SquareConfig {
  color?: string
  width: number
  height: number
}

function addFunc (config: SquareConfig): Square {
  let Square = { color: 'red', area: 0 }

  if (config.color) Square.color = config.color
  

  Square.area = config.width * config.height

  return Square
}

/************** 2. 系统自带的 类型 **************/
// let arr:number[] 这样声明也可以
let arr:Array<number> = [1, 2, 3, 4];

let arr1: ReadonlyArray<number> = arr;
console.log(arr1)

/************** 3. 函数类型的接口 **************/
interface findFunc {
  (F: string): string
}
// params 参数类型可以省去 string
let myFunc: findFunc = function (params: string) {
  return params
}

/* 可索引的类型 [index: string] */

// interface NumberDictionary {
//   [index: string]: number;
//   length: number;    // 可以，length是number类型
//   name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
// }
