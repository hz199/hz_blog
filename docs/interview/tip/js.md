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

1. 执行同步任务，同步任务不需要做特殊处理，直接执行(下面的步骤中遇到同步任务都是一样处理) --- 第一轮从 script开始

2. 从宏任务队列中取出队头任务执行

3. 如果产生了宏任务，将宏任务放入宏任务队列，下次轮循的时候执行

4. 如果产生了微任务，将微任务放入微任务队列

5. 执行完当前宏任务之后，取出微任务队列中的所有任务依次执行

6. 如果微任务执行过程中产生了新的微任务，则继续执行微任务，直到微任务的队列为空

7. 轮循，循环以上 2 - 6

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
    while (true) {           // 无线循环的写法
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

## 11, https 实现原理

> `http`请求是明文传输，敏感信息传输具有一定的风险性。
>
> `https` 采用 `http协议 + SSL/TLS协议` ，也就是在http协议的基础上加了一层加密协议，请求是密文，保障了网络通信的安全。

##### **HTTPS在传输的过程中会涉及到三个密钥：**

> 服务器端的公钥和私钥，用来进行非对称加密
> 客户端生成的随机密钥，用来进行对称加密

一个HTTPS请求实际上包含了两次HTTP传输，可以细分为8步。
- 1. 客户端向服务器发起HTTPS请求，连接到服务器的443端口

- 2. 服务器端有一个密钥对，即公钥和私钥，是用来进行非对称加密使用的，服务器端保存着私钥，不能将其泄露，公钥可以发送给任何人。

- 3. 服务器将自己的公钥发送给客户端。

- 4. 客户端收到服务器端的公钥之后，会对公钥进行检查，验证其合法性，如果发现公钥有问题，那么HTTPS传输就无法继续。严格的说，这里应该是验证服务器发送的数字证书的合法性，关于客户端如何验证数字证书的合法性，下文会进行说明。如果公钥合格，那么客户端会生成一个随机值，这个随机值就是用于进行对称加密的密钥，我们将该密钥称之为client key，即客户端密钥，这样在概念上和服务器端的密钥容易进行区分。然后用服务器的公钥对客户端密钥进行非对称加密，这样客户端密钥就变成密文了，至此，HTTPS中的第一次HTTP请求结束。

- 5. 客户端会发起HTTPS中的第二个HTTP请求，将加密之后的客户端密钥发送给服务器。

- 6. 服务器接收到客户端发来的密文之后，会用自己的私钥对其进行非对称解密，解密之后的明文就是客户端密钥，然后用客户端密钥对数据进行对称加密，这样数据就变成了密文。

- 7. 然后服务器将加密后的密文发送给客户端。

- 8. 客户端收到服务器发送来的密文，用客户端密钥对其进行对称解密，得到服务器发送的数据。这样HTTPS中的第二个HTTP请求结束，整个HTTPS传输完成

## 12, node 进程之间如何通讯

- 通过stdin/stdout传递json：最直接的方式，适用于能够拿到“子”进程handle的场景，适用于关联进程之间通信，无法跨机器
- Node原生IPC
- 通过sockets：最通用的方式，有良好的跨环境能力，但存在网络的性能损耗

## 14, node 跟浏览器的 event loop 区别

> 浏览器环境下，microtask 的任务队列是每个 macrotask 执行完之后执行。而在 Node.js 中，microtask 会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕，就会去执行 microtask 队列的任务。

浏览器和 Node 环境下，microtask 任务队列的执行时机不同

- Node 端，microtask 在事件循环的各个阶段之间执行
![img](https://upload-images.jianshu.io/upload_images/3973862-07ca52ec3b385aa5.gif?imageMogr2/auto-orient/strip|imageView2/2/w/598/format/webp)
- 浏览器端，microtask(微任务) 在事件循环的 macrotask(宏任务) 执行完之后执行![img](https://upload-images.jianshu.io/upload_images/3973862-1ce060a96ea1bd21.gif?imageMogr2/auto-orient/strip|imageView2/2/w/611/format/webp)

```js
setTimeout(()=>{
    console.log('timer1')
    Promise.resolve().then(function() {
        console.log('promise1')
    })
}, 0)
setTimeout(()=>{
    console.log('timer2')
    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)

// 浏览器端输出结果timer1 => promise1 => timer2 => promise2

// nodejs输出结果 timer1 => timer2 => promise1 => promise2
```

## 15, 浏览器渲染页面过程

> 1.根据html文件构建DOM树和CSSOM树。构建DOM树期间，如果遇到JS，阻塞DOM树及CSSOM树的构建，优先加载JS文件，加载完毕，再继续构建DOM树及CSSOM树。
>
> 2.根据cssom树和dom树构建渲染树（Render Tree）。
>
> 3.页面的重绘（repaint）与重排（reflow，也有称回流）。页面渲染完成后，若JS操作了DOM节点，根据JS对DOM操作动作的大小，浏览器对页面进行重绘或是重排。

##### 页面加载的一些优化
- js加载过程中会优先加载，阻塞DOM树的构建，将控制权交给js引擎，等到js加载完毕并且执行完全之后，浏览器会在刚才中断的地方继续dom树的构建
  
  > 避免在HTML头部加载JS文件，由于JS阻塞，会推迟页面的首次渲染。为了加快页面渲染，一般将JS文件放到HTML底部进行加载，或是对JS文件执行async或defer加载
  
- 重绘和回流同样会造成性能的损耗 

  > - 重绘 的发生 不影响节点在页面中的位置大小的变化，比如：某个节点的背景颜色，字体颜色的改变
  > - 回流 指的是渲染节点的改变 比如宽高，位置，以及删除添加都会造成回流 。
  > - **回流必将引起重绘，而重绘不一定会引起回流**
  >
  
- 减少重绘和回流的方法

  1. 直接改变className
  2. 统一处理多个节点
  3. 让元素脱离动画流，减少回流的Render Tree的规模

## 16, 如何进行页面的性能优化
    ##### 1.减少http的请求  HTTP缓存
    
    ##### 2. 资源合并与压缩
    
        -  CSS、 Javascript、Image 都可以用相应的工具进行压缩
        -  CSS Sprites
        -  小图标 base64 内联
    
    ##### 3.  js代码尽量放在 dom 底部
    
    ##### 4.  异步执行inline脚本(脚本元素的defer属性以及webworkers)
    
    ##### 5.  将 CSS放在 HEAD中
    
    ###### 6.  css选择符
    
    > 浏览器对选择符的解析是从右往左进行的

```css
#id a { color: red } // 效率太低
	
#id .a { color: red } // 相对来说效率高点
```

​	上面代码, 浏览器要遍历每一个a标签的祖先节点，性能太浪费

## 17, CDN 优化有哪些

 - CDN 缓存策略（通过 http 响应头中的 Cache-control: max-age 的字段来设置 CDN 边缘节点数据缓存时间）

 - CDN 缓存刷新

## 18, webpack 插件原理，如何写一个插件

## 19, 缓存有哪些，区别是什么

## 20, 手写 bind、reduce

## 21, 防抖截流

- 节流

```js
var throttle = function(func, delay = 500) {            
　　var prev = Date.now();            
　　return function() {                
　　　　var context = this;                
　　　　var args = arguments;                
　　　　var now = Date.now();                
　　　　if (now - prev >= delay) {                    
　　　　　　func.apply(context, args);                    
　　　　　　prev = Date.now();                
　　　　}            
　　}        
} 
```

- 防抖

```js
function debounce(fn, wait) {    
    var timeout = null;    
    return function() {        
        if(timeout !== null)   clearTimeout(timeout);        
        timeout = setTimeout(fn, wait);    
    }
}
```



## 22, 遍历树，求树的最大层数。求某层最多的节点数

## 23, node 开启进程的方法有哪些，区别是什么

- `const { spawn } = require('child_process')`

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

## 35, 前端安全方面

##### 1. sql注入

##### 2. xss攻击

> 注入恶意指令代码到网页

##### 3.  跨站请求伪造(CSRF)

## 36, 链表与数组的区别

## 37, 变量提升 let const var 区别

## 38, 链表如何遍历

## 39, script 标签中 async 跟 defer 的区别

> 如果有多个defer脚本，会按照顺序下载解析。而多个async脚本下载与解析的顺序是不一定的，所以如果脚本之间有依赖关系不要用async
>
> 
>
> ![img](https://upload-images.jianshu.io/upload_images/5321713-62d7e7b059f7ab10.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/689/format/webp)

## 40,  在浏览器输入url后发生了什么

https://www.jianshu.com/p/7eea6fbc5fcd

1. 浏览器的地址栏输入URL并按下回车。
2. 浏览器查找当前URL是否存在缓存，并比较缓存是否过期。
3. DNS解析URL对应的IP。
4. 根据IP建立TCP连接（三次握手）。
5. HTTP发起请求。
6. 服务器处理请求，浏览器接收HTTP响应。
7. 渲染页面，构建DOM树。
8. 关闭TCP连接（四次挥手）。

## 41，window.onload和document.ready区别

- onload 是包含图片字体等的资源加载完毕才会执行
- document.ready 是在DOM树加载完成之后就会执行，所以说后者要快于前者（onload）

