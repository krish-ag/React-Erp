import 'App.css';
import React from 'react';
import Navbar from "components/Navbar";
import {
  IoHomeOutline,
  IoSearchSharp,
  IoNotificationsOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import {
  BsEnvelopeAt,
  BsBookmark,

} from 'react-icons/bs';
// import { FaBeer } from 'react-icons/fa';




function App() {
  const [active, setActive] = React.useState(0);

  function IconWrapper(props) {
    console.log(props.k, active)
  return (
    <div className={"k-icon-wrapper " + (active === props.k ? 'k-icon-active' : '')} onClick={() => setActive(props.k)}>
      {props.icon}
    </div>
  )
}

  return (
    <>
      <div className="background" />
      <div className='k-navhelper mt-4'>
        <Navbar/>
      </div>
      <div className='container-fluid p-5 container-div'>
        <div className="center-card k-left-pane text-white me-3 py-2">
          <IconWrapper icon={<IoHomeOutline />} k={0} />
          <IconWrapper icon={<IoSearchSharp />} k={1} />
          <IconWrapper icon={<IoNotificationsOutline />} k={2} />
          <IconWrapper icon={<BsEnvelopeAt />} k={3} />
          <IconWrapper icon={<BsBookmark />} k={4} />
          <IconWrapper icon={<IoSettingsOutline />} k={5} />

        </div>
        <div className="w-75 center-card text-white">
          <div className="container-fluid my-3 px-5">
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
