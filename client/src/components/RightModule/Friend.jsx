import React from 'react';

export default function Friend(props) {
  return (
    <div onClick={() => {props.handleClickFriendDetail(props.friend.friendId)}}>
      <img src={props.friend.profilePicture} />
      <h3>{props.friend.userName}</h3>
    </div>
  )
}
