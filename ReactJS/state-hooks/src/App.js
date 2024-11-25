import logo from './logo.svg';
import React, { useReducer } from 'react';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
// import UseStateObject11 from './Components/UseStateObject11';
import UseStateArray11 from './Components/UseStateArray11';
import ClassCounterOne from './Components/ClassCounterOne';
import UseEffectCounter from './Components/UseEffectCounter';
import ClassMouse from './Components/ClassMouse';
import UseEffectsMouse from './Components/UseEffectsMouse';
import UseEffectCleanup from './Components/UseEffectCleanup';
import IntervalClassCounter from './Components/IntervalClassCounter';
import UseEffectIntervalTimer from './Components/UseEffectIntervalTimer';
import DataFetching1 from './Components/DataFetching1';
import DataFetching2 from './Components/DataFetching2';
import DataFetching3 from './Components/DataFetching3';
import UCComponentC from './Components/UCComponentC';
import UseReducerCounter from './Components/UseReducerCounter';
import UseReducerCounterTwo from './Components/UseReducerCounterTwo';
import UseReducerCounter3 from './Components/UseReducerCounter3';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';
import DataFetchingUseState from './Components/DataFetchingUseState';
import DataFetchingUseReducer from './Components/DataFetchingUseReducer';
import UseCBParent from './Components/UseCBParent';
import UseMemoCounter from './Components/UseMemoCounter';
import UseRefFousingInput from './Components/UseRefFousingInput';
import ClassTimer from './Components/ClassTimer';
import UseRefTimer from './Components/UseRefTimer';
import UseCustomDocTitle from './Components/UseCustomDocTitle';
import UseCustomDocTitle2 from './Components/UseCustomDocTitle2';
import UseCustomCounter from './Components/UseCustomCounter';

export const UserContext = React.createContext()
export const UserChannel = React.createContext()


export const CountContext = React.createContext()


const initialState=0
const reducer= (state,action) => {
    switch(action){
        case "Increment" : 
            return state+1
        case "Decrement" :
            return state-1
        case "Reset" :
            return initialState
        default :
            return state
    }
}

function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    // <CountContext.Provider
      // value={{countState:count,countDispatch:dispatch}}>
      <div className="App">
      {/* <div>Count - {count}</div> */}
      {/* <ClassCounter />
      <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <UseStateObject11 /> */}
      {/* <UseStateArray11 /> */}
      {/* <ClassCounterOne /> */}
      {/* <UseEffectCounter /> */}
      {/* <ClassMouse /> */}
      {/* <UseEffectsMouse /> */}
      {/* <UseEffectCleanup /> */}
      {/* <IntervalClassCounter />
      <UseEffectIntervalTimer /> */}
      {/* <DataFetching1 /> */}
      {/* <DataFetching2 /> */}
      {/* <DataFetching3 /> */}
      {/* <UserContext.Provider value="Shannu" >
        <UserChannel.Provider value="Ayeshu">
          <UCComponentC />
        </UserChannel.Provider>
      </UserContext.Provider> */}
      {/* <UseReducerCounter /> */}
      {/* <UseReducerCounterTwo /> */}
      {/* <UseReducerCounter3 /> */}
      {/* <ComponentA />
      <ComponentB />
      <ComponentC /> */}

      {/* <DataFetchingUseState /> */}
      {/* <DataFetchingUseReducer />
      <UseCBParent /> */}
      {/* <UseMemoCounter /> */}
      {/* <UseRefFousingInput /> */}
      {/* <ClassTimer />
      <UseRefTimer /> */}
      {/* <UseCustomDocTitle />
      <UseCustomDocTitle2 /> */}
      <UseCustomCounter />
    </div>
    // </CountContext.Provider>
  );
}

export default App;
