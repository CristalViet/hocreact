import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponents';
import React from 'react';
class App extends React.Component{
  state ={
    name: 'HarryPhamDev',
    address: 'Nguyen Tri Phuong',
    age:26
  }
  handleClick(event){
    // console.log("Click me mybutton")
    console.log("click me ")
    console.log("My Name is: " ,this.state.name)

  }
  handleOnMouseOver(event){
    console.log(event)
  }
  render(){
    return(
      <div>
        Hello world
          My name is {this.state.name} and I'm From {this.state.address}
          <button onMouseOver={this.handleOnMouseOver}>hover me</button>
          <button onClick={this.handleClick}>click me</button>
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
