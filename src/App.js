import logo from './logo.svg';
import './App.css';

import MyComponents from './components/MyComponents';
import React from 'react';
class App extends React.Component{
  
  render(){
    return(
      <div>
          <MyComponents></MyComponents>
      </div>
    );
  }
}
// const App = () => {

//   return (
//     <div>Hello world
//       <MyComponent></MyComponent>
//     </div>


//   );
// }
// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();
//   return (
//     <div>Hello world
//       <MyComponent></MyComponent>
//     </div>

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          ok
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
