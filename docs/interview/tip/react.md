---
title: react面试题
meta: 
  - bgImage: http://study.closeeyes.cn/js2.jpg
tag: react
---

## 1. React生命周期

> React 把每一个组件当成了一个状态机，组件内部通过state来维护组件状态的变化，当组件的状态发生变化时，React通过虚拟DOM技术来增量并且高效的更新真实DOM。

- react@15的生命周期

```js
class Comp extends React.Component {
    /* 初始化阶段 */
    constructor () {} // 构造函数
	getDefaultProps () {} //创建组建
    getInitialState () {}  //实例化状态
	
    /* 挂载阶段 */
    componentWillMount () {} //挂载前
    render () {} // 组件渲染
    componentDidMount () {} //挂载后
	
    /* 更新阶段 */
    componentWillReceiveProps () {} //属性被改变时
    shouldComponentUpdate () {
        return true
    } //是否更新 必须要返回一个 布尔值 用时组件是否要更新
    componentWillUpdate () {} //更新前
    //  这两个生命周期之间同时还是会执行 render () {}
    componentDidUpdate () {} //更新后
	
    /* 卸载阶段 */
    componentWillUnmount () {} //销毁前
}
```

- react@16的生命周期

```js

class Comp extends React.Component {
    /* 初始化阶段 */
    constructor () {} // 构造函数
	getDefaultProps () {} //创建组建
    getInitialState () {}  //实例化状态
    
    /* 挂载阶段 */
    static getDerivedStateFromProps(props,state) {}//挂载前
    // getDerivedStateFromProps：组件每次被 rerender的时候，包括	// 在组件构建之后(虚拟 dom之后，实际 dom挂载之前)，每次获取新的       // props或state之后；每次接收新的props之后都会返回一个对象作为新     // 的 state，返回null则说明不需要更新 state；配合                 // componentDidUpdate，可以覆盖componentWillReceiveProps的所有用法
    render () {} // 组件渲染
    componentDidMount () {} //挂载后
    
    /* 更新阶段 */
    static getDerivedStateFromProps(props,state) {}
    shouldComponentUpdate () { return true }
    // render () {}
    getSnapshotBeforeUpdate(prevProps,prevState) {}
    componentDidUpdate () {}
    
    /* 卸载阶段 */
    componentWillUnmount () {}
    
    /* 错误处理 */
    componentDidCatch () {}
}
```

## 2. setState 是同步还是异步

- 生命周期和合成事件

  setState方法将要更新的state存入`_pendingStateQueue`,将要更新的组件存入`dirtyComponent`，最后批处理缓存的组件和state进行更新，保证了组件不会重复渲染。

  **所以。`setState`本身并不是异步的，而是 `React`的批处理机制给人一种异步的假象。**

- 连续多次setState只有一次生效

  `React`会批处理机制中存储的多个 `setState`进行合并

## 3. React如何实现自己的事件机制

> `React`事件并没有绑定在真实的 `Dom`节点上，而是通过事件代理，在最外层的 `document`上对事件进行统一分发



> `React`在自己的合成事件中重写了 `stopPropagation`方法，将 `isPropagationStopped`设置为 `true`，然后在遍历每一级事件的过程中根据此遍历判断是否继续执行。这就是 `React`自己实现的冒泡机制。

## 4. 为何React事件要自己绑定this

- `React`源码中，当具体到某一事件处理函数将要调用时，将调用 `invokeGuardedCallback`方法。
- 事件处理函数是直接调用的，并没有指定调用的组件，所以不进行手动绑定的情况下直接获取到的 `this`是不准确的，所以我们需要手动将当前组件绑定到 `this`上

## 5. Hook有哪些优势

- 减少状态逻辑复用的风险
- 避免地狱式嵌套
- 让组件更容易理解
- 使用函数代替class

## 6. Redux实现原理解析

