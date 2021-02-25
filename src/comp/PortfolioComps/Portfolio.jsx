import React from "react";
import PortMenu from "./PortMenu";
import PageStillsItem from "./PageStillsItem";
import Sidebar from "../SidebarComps/Sidebar";
import Overlay from "../SidebarComps/Overlay";
import PageAnimItem from "./PageAnimItem";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context(`../../img/Images/`, false, /\.(png|jpe?g)$/)
);

const stImages = Object.values(images).map((a) => a.default);

function Portfolio() {
  return (
    <div>
      <PortMenu />
      <Sidebar />
      <Overlay />

      <section className="stills portfolio-section" id="stills">
        {stImages.map((a) => (
          <PageStillsItem imageName={a} />
        ))}
      </section>
      <section className="animations portfolio-section" id="animations">
        <PageAnimItem name="D06y9CRDH4k" />
        <PageAnimItem name="26wGGBxRFbA" />
        <PageAnimItem name="SF3uFN9Iw9w" />
        <PageAnimItem name="OGjgUEJpD28" />
        <PageAnimItem name="bEk7GlSR1S8" />
        <PageAnimItem name="mV3-6foItaQ" />
      </section>
    </div>
  );
}

export default Portfolio;
