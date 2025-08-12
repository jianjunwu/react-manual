# 注释
## 1.项目结构
一个 React 项目通常包含以下文件和文件夹

my-app/
├── node_modules/           # 项目依赖库
├── public/                 # 存放静态文件
│   ├── index.html          # 应用的 HTML 模板文件
│   ├── favicon.ico         # 浏览器图标
├── src/                    # 存放源代码
│   ├── App.css             # 样式文件
│   ├── App.js              # 主要的 React 组件
│   ├── index.css           # 全局样式
│   ├── index.js            # React 入口文件
├── package.json            # 配置信息和依赖列表
└── .gitignore              # Git 忽略文件
## 2.核心文件解析：
### 2.1 public/index.html

这是项目的 HTML 模板文件。React 会把所有的组件渲染到这里的 <div id="root"></div> 中。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```
### 2.2 src/index.js

这是 React 应用的入口文件。它是应用的启动点，通常在这里调用 ReactDOM.render 将组件渲染到页面的根节点。
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```
### 2.3 src/App.js

这是默认的根组件，你可以在这里编写自己的代码，构建 UI。

```javascript
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
```


### 2.4 src/App.css

是 App 组件的样式文件。

```css
.App {
  text-align: center;
  margin-top: 50px;
}

```

### 2.5 src/index.css

是全局样式文件，通常用于定义全局样式或重置浏览器默认样式。

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
```

### 2.6 package.json 

这是项目的配置文件，包含项目的元数据、依赖和脚本。

```json

{
  "name": "my-react-app",
  "version": "1.0.0",
  "scripts": {
    "start": "react-scripts start", // 启动开发服务器
    "build": "react-scripts build", // 构建生产环境代码
    "test": "react-scripts test",   // 运行测试
    "eject": "react-scripts eject"  // 弹出配置（高级用法）
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  }
}

```

## 3.React 组件的基本结构

React 组件是 React 应用的核心构建块。
一个组件通常包含以下部分：

### 3.1 函数组件

```javascript
import React from 'react';

function MyComponent() {
  return (
    <div>
      <h2>这是一个函数定义的组件</h2>
    </div>
  );
}

export default MyComponent;

```

**说明**

- `import React from 'react';` 导入 React 库。
- `function MyComponent()` 定义组件。
- `return` 组件的 return 语句返回一个 JSX 元素。JSX 是 JavaScript 的语法扩展，允许你在 JavaScript 中编写类似 HTML 的代码。
- `export default MyComponent;` 将 MyComponent 组件导出为默认导出。这样，其他文件可以通过 import MyComponent from './MyComponent'; 来导入并使用这个组件。

### 3.2 类组件

使用类定义的组件（现在较少使用，推荐使用函数组件）。

```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h2>这是一个类组件</h2>
      </div>
    );
  }
}

export default MyComponent;

```

**说明**

- `import React from 'react';`: 引入 React 库，用于创建 React 组件。
- `import { Component } from 'react';`: 从 React 库中导入 Component 类。Component 是 React 类组件的基类，所有类组件都需要继承它。
- `class MyComponent extends Component { ... }`: 定义一个名为 MyComponent 的类组件，继承自 Component 类。因此可以使用 React 类组件的特性（如生命周期方法、状态管理等）。
- `render() { ... }`:render 是类组件中必须实现的方法。它负责返回组件的 UI 结构（JSX）。
  - `return <div>...</div>;`: 返回一个 div 元素，包含一些内容。
  - `<div><h2>这是一个类组件</h2></div>`: 这是一个简单的 JSX 结构，包含一个 div 和一个 h2 标题。
- `export default MyComponent;`: 将 MyComponent 组件导出，使其可以在其他地方使用。


### 3.3 JSX 语法

JSX 是 JavaScript 的语法扩展，允许在 JavaScript 中编写类似 HTML 的代码。

```jsx
const element = <h1>Hello, JSX!</h1>;
```

### 3.4 Props

Props 是组件的输入参数，用于从父组件向子组件传递数据。

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="React" />;
}
```

## 3.5 State

State 是组件的内部数据，用于保存组件的状态。

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

**说明**
- `useState` 是一个 Hook，返回一个状态值和一个更新状态值的函数。其中`count` 是状态值，`setCount` 是更新状态值的函数。`setCount` 是一个异步函数，它将更新状态值并触发组件重新渲染。

## 4.React 基础

### 4.4 条件渲染
在 React 中，我们可以使用条件渲染来根据条件显示不同的内容。
1. 使用 if/else
```jsx
import react from 'react';

function AlertMessage({ show }) {
  if (!show) {
    return null;
  }
  return <p className="alert">This is an alert message!</p>;
}

function App() {
  // 定义一个状态变量来控制 AlertMessage 的显示
  const [show, setShow] = useState(true);

  // 定义一个函数来切换显示状态
  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      {/* 渲染 AlertMessage 组件 */}
      <AlertMessage show={show} />
      {/* 添加一个按钮来控制 AlertMessage 的显示 */}
      <button onClick={toggleShow}>Toggle Alert</button>
    </div>
  );
}
```

2. 使用三元运算符? :
三元运算符是一种更简洁的条件渲染方式，可以在一行代码中完成条件判断和渲染。
```jsx
function UserGreeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please sign in."}</h1>;
}

function App() {
  // 定义一个状态变量来控制 AlertMessage 的显示
  const [login, setLogin] = useState(false);

  // 定义一个函数来切换显示状态
  const togglelogin = () => {
    setLogin(!login);
  };

  return (
    <div>
      {/* 渲染 UserGreeting 组件 */}
      <UserGreeting isLoggedIn={login} />
      {/* 添加一个按钮来控制 UserGreeting 的显示 */}
      <button onClick={togglelogin}>Login</button>
    </div>
  );
}
```

3. 使用逻辑与运算符&&

当需要在条件为true时渲染某个元素时，可以使用&&运算符。
```jsx
function Notification({ messages }) {
  return (
    <div>
      {/* 如果messages.length > 0，则会渲染<p>标签，否则不渲染任何内容 */}
      {messages.length > 0 && <p>You have {messages.length} new messages.</p>}
    </div>
  );
}

function App() {
  const messages = ['Message 1', 'Message 2', 'Message 3'];
  return (
    <div>
      <Notification messages={messages} />
    </div>
  );
}
```

4. 使用switch语句
switch 语句可以用来根据不同的条件渲染不同的内容。

```jsx
function StatusMessage({ status }) {
  switch (status) {
    case "loading":
      return <p>Loading...</p>;
    case "success":
      return <p>Data loaded successfully!</p>;
    case "error":
      return <p>Error loading data.</p>;
    default:
      return <p>Unknown status</p>;
  }
}

function App(){
  return (
    <div>
      <StatusMessage status="loading" />
      <StatusMessage status="success" />
      <StatusMessage status="error" />
    </div>
  );
}
```

5. 使用变量存储渲染内容
当条件渲染逻辑较为复杂时，可以先将要渲染的内容存储到一个变量中，最后在return语句中直接返回该变量
```jsx

function StatusMessage({ status }) {
  let message;
  if (status === "loading") {
    message = <p>Loading...</p>;
  } else if (status === "error") {
    message = <p>Error: Unable to fetch data.</p>;
  } else {
    message = <p>Data loaded successfully!</p>;
  }
  return <div>{message}</div>;
}

function App(){
  return (
    <div>
      <StatusMessage status="loading" />
      <StatusMessage status="success" />
      <StatusMessage status="error" />
    </div>
  );

```

6. 在列表中使用条件渲染

可以结合数组的.map()方法，在渲染列表时根据条件筛选或渲染元素

```jsx

function App() {
  const items = ["Apple", "Banana", "Cherry"];
  const fruitList = items.map((item, index) =>
    item.includes("a") ? <p key={index}>{item}</p> : null
  );
  return (
    <div>
    {/* 只有当item中包含字母"a"时，才会渲染对应的<p>标签。*/}
      {fruitList}
    </div>
  );
  
}
```

7. 基于组件状态的条件渲染
  
可以根据组件的状态来决定渲染的内容

```jsx
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
      {isAuthenticated ? (
        <h1>User Profile</h1>
      ) : (
        <button onClick={() => setIsAuthenticated(true)}>Log In</button>
      )}
    </div>
  );
}
```

### 4.5 列表 & keys


### 4.6 组件生命周期


### 4.7 react 网络请求

1. 使用Fetch API

```jsx
const FetchExample = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Fetch Example</h1>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
```

2. 使用axios库进行数据请求

```jsx
import axios from "axios";

const AxiosExample = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Axios Example</h1>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
```

## 5.React 项目的运行流程

### 5.1 启动开发服务器
运行 `npm run dev` 命令启动开发服务器。开发服务器将启动一个本地服务器，并监听端口 3000。

### 5.2 构建生产环境代码
运行 `npm run build` 命令构建生产环境代码。构建后的代码将保存在 `dist` 目录中。

### 5.3 运行测试
运行 `npm run test` 命令运行测试用例。