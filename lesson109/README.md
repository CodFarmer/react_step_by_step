# Redux
>只有遇到 React 实在解决不了的问题，你才需要 Redux.         --Dan Abramov 
## What
正如Rainsho在lesson107中说的，React是一个View层解决方案，并不适合大型应用，处理复杂的组件间通信会变的一团乱麻。所以2014年Facebook提出了Flux架构的概念，而Redux是Flux的一个社区实现，发布后很短时间内就成为了最热门的前端框架。

1. Action/Action Creator
Action是行为的抽象，是一个简单的JS对象，所有的Action都必须有一个type。在系统中视图要发送多少种消息就会有多少种Action，通常使用一个函数来生成Action，这个函数就叫做Action Creator，这里有点类似Java中的对象工厂。下面代码中addTodo就是一个Action 。
```
const addTodo = (payload) =>{
    return {
        type: 'ADD_TODO',
        payload
    }
}
```

2. Store
Store简单来说就是数据存储的地方,Action作用于Store，然后Store根据Action找到对应的Reducer来处理，根据Rducer反回的新State作用于View的渲染。一个应用有一个Store！一个应用只有一个Store！一个应用只有一个Store！Store有以下几个主要的API:

   - createStore();用于创建Store，入参通常是整个项目的跟Reducer。
   - getState(); 用于获取当前应用的State。
   - store.dispatch(); view通过该方法发出Action，如参是Action，Action通过该方法作用于Store。
   - store.subscribe(); 订阅一个监听器，当Store中State发生变化的时候触发监听器。
3. Reducer
Reducer是行为的抽象，接受一个初始化的State，和view发出的Action，然后生成NewState。Reducer只能是一个*纯方法*，这意味着相同的state＋同一个Action多次触发Reducer得到的NewState必然是一样的。不要修改state，返回新的state。
```
const defaultState = 0;
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default: 
      return state;
  }
};
```
4. middleware

## Why

## How



## 代码解析

## 扩展阅读


