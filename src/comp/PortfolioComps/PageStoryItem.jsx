import React from "react";

function StoryItem(props) {
  const pre = "./img/Storyboard/Storyboard-";
  return (
    <div class="sb-slide">
      <img src={pre + props.picNo} alt="" />
    </div>
  );
}

export default StoryItem;
