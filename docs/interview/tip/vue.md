---
title: vue面试题
meta: 
  - bgImage: http://study.closeeyes.cn/js2.jpg
tag: vue
---

## 前言

## 1. 如何理解MVVM原理

> MVVM是`Model-View-ViewModel`缩写，也就是把`MVC`中的`Controller`演变成`ViewModel`。Model层代表数据模型，View代表UI组件，ViewModel是View和Model层的桥梁，数据会绑定到viewModel层并自动将数据渲染到页面中，视图变化的时候会通知viewModel层更新数据

## 2. 响应式数据的原理是什么

- Vue在初始化数据的时候，会使用`Object.defineProperty`重新定义data中所有属性（也就是数据劫持），当页面中对应的属性

     

  1、把一个普通的js对象传给Vue实例的data选项对象

    　　2、Vue将遍历此对象的所有的属性，并使用Object.defineProperty把这些属性全部转换为getter/setter
  
    　　3、Vue内部会对数据进行劫持操作，进而追踪依赖，在属性被访问和修改时通知变化

## 3. Vue中如何检测数组的变化的

## 4. 为何Vue采用异步渲染

>  节约性能

## 5. $nextTick实现原理

## 6. Vue父子组件的生命周期调用顺序

## 7. Vue中的Computed的特点

- `Computed`本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。

- `Watch`没有缓存性，更多的是观察的作用，可以监听某些数据执行回调。当我们需要深度监听对象中的属性时，可以打开`deep：true`选项，这样便会对对象中的每一项进行监听。这样会带来性能问题，优化的话可以使用`字符串形式`监听，如果没有写到组件中，不要忘记使用`unWatch手动注销`哦。

## 8. Watch中的 deep: true如何实现

## 9. Vue中事件绑定的原理

- 原生dom事件的绑定，采用的是addEventListener实现
- 组件绑定事件采用的是$on方法

## 10. Vue中的v-html存在什么问题

## 11. v-if和v-show的区别

## 12. v-model的实现原理

## 13. 组件中的data为什么是一个函数

## 14. Vue中组件之间的通信

## 15. 作用域插槽

## 16. diff算法的时间复杂度

## 17. 简述diff算法的原理

## 18. v-for中为什么要使用key

## 19. Vue模板编译原理

简单说，Vue的编译过程就是将`template`转化为`render`函数的过程。会经历以下阶段：

- 生成AST树
- 优化
- codegen

首先解析模版，生成`AST语法树`(一种用JavaScript对象的形式来描述整个模板)。 使用大量的正则表达式对模板进行解析，遇到标签、文本的时候都会执行对应的钩子进行相关处理。

Vue的数据是响应式的，但其实模板中并不是所有的数据都是响应式的。有一些数据首次渲染后就不会再变化，对应的DOM也不会变化。那么优化过程就是深度遍历AST树，按照相关条件对树节点进行标记。这些被标记的节点(静态节点)我们就可以`跳过对它们的比对`，对运行时的模板起到很大的优化作用。

编译的最后一步是`将优化后的AST树转换为可执行的代码`。

## 20. Vue中常见的性能优化

### 编码阶段

- 尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher
- v-if和v-for不能连用
- 如果需要使用v-for给每项元素绑定事件时使用事件代理
- SPA 页面采用keep-alive缓存组件
- 在更多的情况下，使用v-if替代v-show
- key保证唯一
- 使用路由懒加载、异步组件
- 防抖、节流
- 第三方模块按需导入
- 长列表滚动到可视区域动态加载
- 图片懒加载

### SEO优化

- 预渲染
- 服务端渲染SSR

### 打包优化

- 压缩代码
- Tree Shaking/Scope Hoisting
- 使用cdn加载第三方模块
- 多线程打包happypack
- splitChunks抽离公共文件
- sourceMap优化

### 用户体验

- 骨架屏
- PWA

还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启gzip压缩等。

## 21. 为什么要使用异步组件

## 22. keep-alive组件的了解

`keep-alive`可以实现组件缓存，当组件切换时不会对当前组件进行卸载。

常用的两个属性`include/exclude`，允许组件有条件的进行缓存。

两个生命周期`activated/deactivated`，用来得知当前组件是否处于活跃状态。

keep-alive的中还运用了`LRU(Least Recently Used)`算法。

## 23. hash和history路由的原理

`location.hash`的值实际就是URL中`#`后面的东西。

history实际采用了HTML5中提供的API来实现，主要有`history.pushState()`和`history.replaceState()`。

## 24. Vue-Router导航守卫

## 25. vuex中action和mutation的区别

## 26. 简述Vuex的工作原理

## 27. Vue3.0有哪些改进