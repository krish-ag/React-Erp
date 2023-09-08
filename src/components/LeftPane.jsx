import React from 'react';
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


function LeftPane(props) {
  const IconWrapper = props.iconWrapper;

  return (
    <div className="center-card k-left-pane text-white me-3 py-2">
          <IconWrapper icon={<IoHomeOutline />} k="Home" />
          <IconWrapper icon={<IoSearchSharp />} k="Search" />
          <IconWrapper icon={<IoNotificationsOutline />} k="Notifications" />
          <IconWrapper icon={<BsEnvelopeAt />} k="Messages" />
          <IconWrapper icon={<BsBookmark />} k="Bookmarks" />
          <IconWrapper icon={<IoSettingsOutline />} k="Settings" />

        </div>
  );
}

export default LeftPane;