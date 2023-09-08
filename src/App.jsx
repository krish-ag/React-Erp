import 'App.css';
import React from 'react';
import Navbar from "components/Navbar";
import LeftPane from "./components/LeftPane";
import Content from "./components/Content";




function App() {
  const [active, setActive] = React.useState('Home');
  const [pageName, setPageName] = React.useState('Home');

  function IconWrapper(props) {
  return (
    <div className={"k-icon-wrapper " + (active === props.k ? 'k-icon-active' : '')} onClick={() => {
      setActive(props.k);
      setPageName(props.k);
    }}>
      {props.icon}
    </div>
  )
}

  return (
    <>
      <div className="background" />
      <Navbar pageName={pageName} />
      <div className='container-fluid p-5 container-div'>
        <LeftPane iconWrapper={IconWrapper} />
        <Content />
      </div>
    </>
  );
}

export default App;
