import React from "react";

function StillsItem(props) {
  return (
    <div
      className="img still"
      style={{ backgroundImage: `url(${props.imageName})` }}
    >
      <div className="img-sq"></div>
    </div>
  );
}

export default StillsItem;
