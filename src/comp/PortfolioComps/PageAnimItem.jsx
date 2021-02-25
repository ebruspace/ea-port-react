import React from "react";

function PageAnimItem(props) {
  const youtube = "https://www.youtube.com/embed/";
  return (
    <div>
      <iframe
        title={props.name}
        className="portfolio__video portfolio__video--6"
        width="400"
        height="300"
        src={youtube + props.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default PageAnimItem;
