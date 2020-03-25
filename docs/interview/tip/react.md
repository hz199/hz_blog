---
title: react面试题
meta: 
  - bgImage: http://pic.closeeyes.cn/fengjing2.jpg
tag: react
---

## 1. React原理

> React 把每一个组件当成了一个状态机，组件内部通过state来维护组件状态的变化，当组件的状态发生变化时，React通过虚拟DOM技术来增量并且高效的更新真实DOM。

- react的生命周期

```js
class Comp extends React.Component {
	getDefaultProps () {} //创建组建

    getInitialState () {}  //实例化状态

    componentWillMount () {} //挂载前

    componentDidMount () {} //挂载后

    componentWillReceiveProps () {} //属性被改变时

    shouldComponentUpdate () {
        return true
    } //是否更新 必须要返回一个 布尔值 用时组件是否要更新

    componentWillUpdate () {} //更新前

    componentDidUpdate () {} //更新后

    componentWillUnmount () {} //销毁前

}
```