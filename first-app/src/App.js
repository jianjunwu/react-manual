import React from 'react';
import './App.css';
// import UserProfile from "./UserProfile.js";
import { useState } from "react";

// function App() {
//   return (
//     <div className="App">
//       <h1> 这是我的第一个 React App</h1>
//       <p1>这是一个伟大的段落。</p1>
//       <UserProfile />
//     </div>
//   );
// }


// function App() {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div className="App">
//       <h1>计数器</h1>
//       <button onClick={handleClick}>点击我</button>
//       <p>点击了 {count} 次</p>
//     </div>
//   );
  
// }


// React事件处理
// 1. 基础事件处理

// 1.1 基础事件处理
// onClick 是 React 中处理点击事件的属性，handleClick 是一个函数，当按钮被点击时，会调用这个函数并弹出一个警告框。
// function App() {
//   const handleClick = () => {
//     alert("按钮被点击了！");
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>点击我</button>
//     </div>
//   );
// }

// 1.2 阻止链接默认行为
// e.preventDefault() 用于阻止链接的默认跳转行为。
// function App() {
//   const handleClick = (e) => {
//     e.preventDefault();
//     alert("链接被点击，但不会跳转！");
//   };

//   return (
//     <div>
//       <a href="https://example.com" onClick={handleClick}>
//         点击我
//       </a>
//     </div>
//   );
// }


// 2. 事件处理函数的定义与使用
// 2.1 函数组件中的事件处理;
// 在函数组件中，事件处理函数可以直接定义在组件内部。
// function Button() {
//   const handleClick = () => {
//     console.log("按钮被点击了！");
//   };

//   return <button onClick={handleClick}>点击我</button>;
// }

// function App() {
//   return (
//     <div>
//       <Button />
//     </div>
//   );
// }

// 2.2 类组件中的事件处理;
// 在类组件中，事件处理函数通常是类的一个方法。
// class Button extends React.Component {
//   handleClick = () => {
//     console.log("按钮被点击了！");
//   };

//   render() {
//     return <button onClick={this.handleClick}>点击我</button>;
//   }
// }

// function App() {
//   return (
//     <div>
//       <Button />
//     </div>
//   );
// }

// 3. 事件处理中的参数传递
// 3.1 使用箭头函数传递参数
// function ItemList() {
//   const handleItemClick = (item) => {
//     console.log(`点击了：${item}`);
//   };

//   return (
//     <div>
//       <ul>
//         <li onClick={() => handleItemClick("Item 1")}>Item 1</li>
//         <li onClick={() => handleItemClick("Item 2")}>Item 2</li>
//         <li onClick={() => handleItemClick("Item 3")}>Item 3</li>
//       </ul>
//     </div>
//   );
// }

// function App(){
//   return (
//     <div>
//       <ItemList />
//     </div>
//   );
// }

// 4. 常见事件类型及处理
// 示例：点击事件

// function ClickButton() {
//   const [message, setMessage] = useState("点击按钮！");
//   const handleClick = () => {
//     setMessage("按钮被点击了！");
//   };

//   return (
//     <div>
//       <p>{message}</p>
//       <button onClick={handleClick}>点击我</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <ClickButton />
//     </div>
//   );
// }



// 示例：表单事件

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('用户名:', username);
//     console.log('密码:', password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         用户名:
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         密码:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       <br />
//       <button type="submit">登录</button>
//     </form>
//   );
// }

// function App() {
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// }


// 示例：键盘事件

// function KeyPressHandler() {
//   const [message, setMessage] = useState("按下任意键！");

//   const handleKeyDown = (e) => {
//     setMessage(`按下的键: ${e.key}`);
//   };

//   return (
//     <div tabIndex="0" onKeyDown={handleKeyDown}>
//       <p>{message}</p>
//       <p>聚焦此区域并按下任意键。</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <KeyPressHandler />
//     </div>
//   );
// }

// 5. 性能优化
// 示例：使用 useCallback 防止重复创建函数
import { useCallback } from "react";

// function HandlerComponent() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <p>点击次数: {count}</p>
//       <button onClick={handleClick}>点击我</button>
//     </div>
//   );
// }


// function App() {
//   return (
//     <div>
//       <HandlerComponent />
//     </div>
//   );
// }
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



export default App;
