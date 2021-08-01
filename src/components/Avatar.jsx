import React from "react";

function Avatar(avatarProps){
    return  <img className="circle-img"
    src={avatarProps.img}
    alt="avatar_img"
  />
}

export default Avatar;