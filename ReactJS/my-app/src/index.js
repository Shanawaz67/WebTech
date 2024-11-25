import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../src/Components1/mystyle.css"

import reportWebVitals from './reportWebVitals';
// import Hello from './Components1/Hello';
// import Greet from "./Components1/Greet";
// import Welcome from "./Components1/Welcome";
// import Message from "./Components1/Message";
// import Counter from "./Components1/Counter";
// import { DestProps, DestProps1 } from "./Components1/DestructuringProps";
// import DestructuringClass from "./Components1/DestructuringClass";
// import FunctionClick from "./Components1/FunctionClick";
// import ClassClick from "./Components1/ClickClass";
// import EventBinding from "./Components1/EventBinding";
// import ParentComponent from "./Components1/ParentComponent";
// import ChildComponent from "./Components1/ChildComponent";
// import ConditionalRendering from "./Components1/ConditionalRendering";
// import NameListRend from "./Components1/NameListRend";
// import CSSStyleSheet from './Components1/CSSStyleSheet';
import InlineCss from './Components1/InlineCss';
import '../src/Components1/appStyles.css';
import styles from '../src/Components1/appStyles.module.css';
import Forms from './Components1/Forms';
import LifeCycle from './Components1/LifeCycle';
import UpdatingLCA from './Components1/UpdatingLCA';
import FragmentsDemo from './Components1/FragmentsDemo';
import Table from './Components1/Table';
import ParentComp from './Components1/ParentComp';
import RefsDemo from './Components1/RefsDemo';
import RefsCCParent from './Components1/RefsCCParent';
import FRParent from './Components1/FRParent';
import PortalDemo from './Components1/PortalDemo';
import ErrorHero from './Components1/ErrorHero';
import ErrorBoundary from './Components1/ErrorBoundary';
import ClickCount from './Components1/ClickCount';
import HoverCounter from './Components1/HoverCounter';
import ClickCount11 from './Components1/ClickCount11';
import ClickCountTwo from './Components1/ClickCountTwo';
import HoverCountTwo from './Components1/HoverCountTwo';
import User from './Components1/User';
import CountHC from './Components1/CountHC';
import CountRP from './Components1/CountRP';
import HoverRP from './Components1/HoverRP';
import { UserProvider } from './Components1/UserContext';
import ContextComponentC from './Components1/ContextComponentC';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <h1 className='error'>Error</h1>
    <h1 className={styles.sucess}>Sucess</h1> */}
    {/* <InlineCss /> */}
    {/* <CSSStyleSheet p1={true}/> */}
    {/* <App /> */}
    {/* <Hello /> */}
    {/* <Greet name="RC" heroName="Ram" />
    <p>Hello RC big fan of your work</p>
    <Greet name="Shannu" heroName="Deva" />
    <button>Click</button>
    <Welcome name="RC" heroName="Ram" />
    <Welcome name="Shannu" heroName="Deva" /> */}
    {/* <Message /> */}
    {/* <Counter /> */}
    {/* <DestProps name="RC" heroName="Ram" />
    <DestProps1 name="Shannu" heroName="Deva" />
    <DestructuringClass name="RC" heroName="Ram" /> */}
    {/* <FunctionClick />
    <ClassClick /> */}
    {/* <EventBinding /> */}
    {/* <ParentComponent />
    <ChildComponent /> */}
    {/* <ConditionalRendering /> */}
    {/* <NameListRend /> */}
    {/* <Forms /> */}
    {/* <LifeCycle /> */}
    {/* <UpdatingLCA /> */}
    {/* <FragmentsDemo /> */}
    {/* <Table /> */}
    {/* <ParentComp /> */}
    {/* <RefsDemo /> */}
    {/* <RefsCCParent /> */}
    {/* <FRParent /> */}
    {/* <PortalDemo /> */}
    {/* <ErrorBoundary>
      <ErrorHero heroName="Shannu"/>
    </ErrorBoundary>
    <ErrorBoundary>
      <ErrorHero heroName="Shannu1"/>
    </ErrorBoundary>
    <ErrorBoundary>
      <ErrorHero heroName="Joker"/>
    </ErrorBoundary> */}
    {/* <ClickCount />
    <HoverCounter />
    <ClickCount11 name="Shannu"/> */}
    {/* <ClickCountTwo />
    <HoverCountTwo />
    <User render = {(isLoggedIn) => isLoggedIn ? "Shannu" : "Guest"}/> */}
    {/* <CountHC render= {(count,incrementCount) => <CountRP count={count} incrementCount={incrementCount}/>}/>
    <CountHC render= {(count,incrementCount) => <HoverRP count={count} incrementCount={incrementCount}/>}/> */}
    <UserProvider value="Shannu">
      <ContextComponentC />
    </UserProvider>
      
      

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
