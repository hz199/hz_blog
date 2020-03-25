---
title: js面试题
meta: 
  - bgImage: http://study.closeeyes.cn/js1.jpg
tag: javascript
---

## 前言 

> 试题有的是总结，或者收集于网上。只使用于自己学习记录笔记，日后好查看。

## 1，如何看待前端和后端

> 前端指得是，网站前端页面也就是网页的页面开发，比如网页上的特效、布局、图片、视频，音频等内容。前端的工作内容就是将美工设计的效果图的设计成浏览器可以运行的网页，并配合后端做网页的数据显示和交互等可视方面的工作内容。

> 后端是指用户看不见的东西，通常是与前端工程师进行数据交互及网站数据的保存和读取，相对来说后端涉及到的逻辑代码比前端要多的多，后端考虑的是底层业务逻辑的实现，平台的稳定性与性能等。



## 2， 闭包作用域

> 作用域是可访问变量的集合，在JavaScript中对象和函数同样是变量，作用域为可访问变量，对象，函数的集合。作用域可以分为全局作用域和局部作用域。



**闭包有3大特性**

- 函数嵌套函数
- 函数内部可以引用函数外部的参数和变量
- 参数和变量不会被垃圾回收机制回收

---

**闭包优点：**

1. 可读取函数内部的变量
2. 局部变量可以保存在内存中，实现数据共享
3. 执行过程所有变量都匿名在函数内部

------

**闭包缺点：**

1. 使函数内部变量存在内存中，内存消耗大

2. 滥用闭包可能会导致内存泄漏

3. 闭包可以在父函数外部改变父函数内部的值，慎操作

   

---



## 3,  Event loop

> 我们知道JavaScript是单线程的，意思就是一个时间只能做一件事情。这就是单线程。某一个程序特别耗费时间，后面的就要等待前面程序执行完才能执行。

> 由于js是单线程的,只有当上一个任务完成之后才会继续完成下一个任务,如果前一个任务耗时很长，后一个任务就不得不一直等着。于是，所有任务可以分成两种，一种是同步任务`synchronous`，另一种是异步任务`asynchronous`。

##### 同步任务

- 在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；

##### 异步任务

- 不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

![img](https://upload-images.jianshu.io/upload_images/9418222-3ee70117afb9a5d1.png?imageMogr2/auto-orient/strip|imageView2/2/w/1148/format/webp)

1. 所有同步任务都在主线程上执行，形成一个执行栈。
2. 主线程之外，还存在一个"任务队列"。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
3. 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
4. 主线程不断重复上面的第三步。主线程从任务队列中读取事件,这个过程是不断循环的,所以整个的运行机制称为event loop

##### macro-task(宏任务)和micro-task(微任务)

任务还可以分为宏任务和微任务
 宏任务:macrotask 可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行,每一个宏任务会从头到尾将这个任务执行完毕，不会执行其它）包括整体代码script，setTimeout，setInterval
 微任务:，可以理解是在当前 task 执行结束后立即执行的任务 包括`Promise，process.nextTick`

```js
console.log('1');

setTimeout(function() {
  console.log('5');
}, 0);

Promise.resolve().then(function() {
  console.log('3');
}).then(function() {
  console.log('4');
});

console.log('2');

// 1 => 2 => 3 => 4 => 5 的循序一次输出
```



## 4, DNS的查询过程

1. ##### 本地解析

   - 就是客户端可以使用缓存信息就地应答，这些缓存信息是通过以前的查询获得的

2. ##### 直接解析

   - 就是直接由所设定的DNS服务器解析，使用的是该DNS服务器的资源记录缓存或者其权威回答（如果所查询的域名是该服务器管辖的）

3. ##### 递归解析

   - 即设定的DNS服务器代表客户端向其他DNS服务器查询，以便完全解析该名称，并将结果返回至客户端

4. ##### 迭代解析

   - 设定的DNS服务器向客户端返回一个可以解析该域名的其他DNS服务器，客户端再继续向其他DNS服务器查询

## 5, 手写继承

 ##### 1, 原型链继承 

> 将父类的实例作为子类的原型

```js
// 原型链继承
function Person () {
    this.run = function () {
        console.log('跑~')
    }
}

function Xiaoming () {

}

Xiaoming.prototype = new Person()
Xiaoming.prototype.name = 'xiaoming'

var xiaoming = new Xiaoming()
xiaoming.run()
console.log(xiaoming)
```

###### 特点：

1. 实例是子类的实例，也是父类的实例
2. 父类新增原型方法/原型属性，子类都能访问到
3. 简单，易于实现

###### 缺点：

1. 要想为子类新增属性和方法，必须要在`Xiaoming.prototype = new Person()`这样的语句之后执行，不能放到构造器中
2. 无法实现多继承
3. 来自原型对象的引用属性是所有实例共享
4. 创建子类实例时，无法向父类构造函数传参

##### 2. 构造继承

> 使用父类的构造函数来增强子类实例

```js
function Person () {
    this.run = function () {
        console.log('跑~')
    }
}

// 构造继承 父类 prototype 上的方法继承不了
Person.prototype.eat = function () {
    console.log('eat')
}

function Xiaoming (name) {
    Person.call(this)
    // call 多个父类 实现多继承
    // Perseon2.call(this)

    this.name = name
}

// xiaoming 的实例上面不能继承 Person 原型链上的方法也就是说 eat是不存在的
var xiaoming = new Xiaoming('小明')
```

###### 特点

1. 解决子类实例共享父类引用属性问题
2. 创建子类可以向父类传值
3. 可以实现多继承。`eg: Perseon.call(this);Perseon2.call(this)`

###### 缺点

1.  实例只是子类的实例，不是父类的
2. 不能继承父类原型链上的方法
3. 无法复用父类实例函数，影响性能

##### 3. 实例继承

```js
function Person() {
    this.run = function () {
        console.log('跑~')
    }
}

// 感觉 就像是一个 高阶函数 
function Xiaoming(name) {
    var instance = new Person();
    instance.name = name || 'Tom';
    instance.eat = function () {

    }
    return instance;
}

var xiaoming = new Xiaoming('小明')
```

###### 特点：

1. 不限制调用方式，不管是`new 子类()`还是`子类()`,返回的对象具有相同的效果

###### 缺点：

1. 实例是父类的实例，不是子类的实例
2. 不支持多继承



##### 4. 拷贝继承

```js
// 支持多继承
// 效率低，内存占用高
// 无法获取父类中不可枚举的方法

function Person() {
    this.run = function () {
        console.log('跑~')
    }
}

function Xiaoming(name) {
    var person = new Person();
    for (var i in person) {
        Xiaoming.prototype[i] = person[i];
    }
    Xiaoming.prototype.name = name;
}

var xiaoming = new Xiaoming('小明')

```



##### 5. 组合继承

> 通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用

```js
// 特点:

// 1.弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法；

// 2.既是子类的实例，也是父类的实例；

// 3.不存在引用属性共享问题；

// 4.可传参；

// 5.函数可复用；

// 缺点:

// 1. 调用了两次父类构造函数，生成了两份实例；

function Person() {
    this.run = function () {
        console.log('跑~')
    }
}

function Xiaoming(name) {
    Person.call(this)
    this.name = name
}

Xiaoming.prototype = new Person()
Xiaoming.prototype.constructor = Xiaoming

var xiaoming = new Xiaoming('小明')
```



##### 6. **寄生组合继承**

> 通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点

```js

function Person() {
    this.run = function () {
        console.log('跑~')
    }
}

function Xiaoming(name) {
    Person.call(this)
    this.name = name
}

(function () {
    var Super = function () { };
    Super.prototype = Person.prototype;
    Xiaoming.prototype = new Super();
    Xiaoming.prototype.constructor = Xiaoming;
})();

var xiaoming = new Xiaoming('小明')
```



## 6, instanceof 实现原理

> `instanceof`主要的作用就是判断一个实例是否属于某种类型，也可以判断是否属于某种祖先类型（也就是继承于那个父类
>
> [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)上介绍是：`instanceof`运算符用来检测 `constructor.prototype` 是否存在于参数 `object` 的原型链上

###### 实现原理

```js

function myInstance(L, R) {
    // 验证如果为基本数据类型，就直接返回false
    const baseType = ['string', 'number', 'boolean', 'undefined', 'symbol']
    if (baseType.includes(typeof (L))) { return false }

    let RP = R.prototype;  //取 R 的显示原型
    L = L.__proto__;       //取 L 的隐式原型
    while (true) {           // 无线循环的写法（也可以使 for(;;) ）
        if (L === null) {    //找到最顶层
            return false;
        }
        if (L === RP) {       //严格相等
            return true;
        }
        L = L.__proto__;  //没找到继续向上一层原型链查找
    }
}

var arr = [1, 2, 3]

console.log(myInstance(arr, Array))
```



## 7, promise 限制并发数

> - `Pomise.all`多个`Promise`实例包装成一个实例执行，**Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的**
> - `Promse.race` **Promise.race([p1, p2, p3])里面哪个结果获得的快**

```js
function asyncPool(poolLimit, array, iteratorFn) {
    let i = 0;
    const ret = [];
    const executing = [];
    const enqueue = function () {
        // 边界处理，array为空数组
        if (i === array.length) {
            return Promise.resolve();
        }
        // 每调一次enqueue，初始化一个promise
        const item = array[i++];
        const p = Promise.resolve().then(() => iteratorFn(item, array));
        // 放入promises数组
        ret.push(p);
        // promise执行完毕，从executing数组中删除
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        // 插入executing数字，表示正在执行的promise
        executing.push(e);
        // 使用Promise.rece，每当executing数组中promise数量低于poolLimit，就实例化新的promise并执行
        let r = Promise.resolve();
        if (executing.length >= poolLimit) {
            r = Promise.race(executing);
        }
        // 递归，直到遍历完array
        return r.then(() => enqueue());
    };
    return enqueue().then(() => Promise.all(ret));
}

const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i));
var a = asyncPool(2, [1000, 5000, 3000, 2000], timeout).then(results => {
    console.log(results)
});
```

###### 过程

1. 从`array`第1个元素开始，初始化`promise`对象，同时用一个`executing`数组保存正在执行的promise
2. 不断初始化promise，直到达到`poolLimt`
3. 使用`Promise.race`，获得`executing`中promise的执行情况，当有一个promise执行完毕，继续初始化promise并放入`executing`中
4. 所有promise都执行完了，调用`Promise.all`返回

## 8, 箭头函数跟普通函数的区别

1.  箭头函数是匿名函数，所以不能作为构造函数，因此也不能使用new
2.  箭头函数不绑定arguments,取而代之的是用扩展运算符`...`解决
3.  箭头函数不绑定this，但会捕获上下文的this   ，作为自己的this
4.  箭头函数通过 call()  或   apply() 方法调用一个函数时 对 this 并没有影响


## 9, flex 1 全写
> flex 是 flex-grow、flex-shrink、flex-basis的缩写
>
> - `flex-grow`     属性定义项目的放大比例，默认为`0`，即如果存在剩余空间
> - `flex-shrink` 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
> - `flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。



```css
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
}

/* 上面两者和下面写法一样的效果 */
.item {
    flex: 1;
}
```

## 10. script error 怎么捕获

> 产生原因：浏览器基于安全考虑故意隐藏了其它域JS文件抛出的具体错误信息。这样可以有效避免敏感信息无意中被第三方(不受控制的)脚本捕获到，因此，浏览器只允许同域下的脚本捕获具体的错误信息。

解决方法：

1. 给script标签增加 crossorigin 属性，让浏览器允许页面请求资源。

   ```html
   <scrpit src="http://def.com/demo.js" crossorigin></script>
   ```

   

2. 给静态资源响应头增加允许跨域标记，让服务器允许资源返回。

   服务器的HTTP响应头增加 `Access-Control-Allow-Origin: *` 

3. 通过`try catch`获取页面报错信息，将JS错误重新抛出或者上报

   ```javascript
    try {
       run(); // 调用demo.js中定义的run方法
     } catch (e) {
       console.log(e);
       throw e; 
     }
   ```


## 11, https 实现原理（越详细越好）

## 12, node 进程之间如何通讯

## 14, node 跟浏览器的 event loop 区别

## 15, 浏览器渲染也页面过程

## 16, 如何性能优化

## 17, CDN 优化有哪些

## 18, webpack 插件原理，如何写一个插件

## 19, 缓存有哪些，区别是什么

## 20, 手写 bind、reduce

## 21, 防抖截流

## 22, 遍历树，求树的最大层数。求某层最多的节点数

## 23, node 开启进程的方法有哪些，区别是什么

## 24, node 如何部署的

## 25, node check 阶段做了什么，触发了什么事件

## 26, 前端模块化的理解

## 27, node 如何处理错误的

## 28, 隐式转换

## 29, 数字在计算机怎么储存的

## 30, webpack 优化

## 31, webpack 的 require 是如何查找依赖的

## 32, webpack 如何实现动态加载

## 33, 给你一个项目，从头开始你怎么考虑

## 34, 跨域有哪些

## 35, 网络安全

## 36, 链表与数组的区别

## 37, 变量提升 let const var 区别

## 38, 链表如何遍历

## 39, script 标签中 async 跟 defer 的区别

## 40, 工作流做了哪些事情

## 41, 如何提升效率与性能

## 42, 未来的规划是什么