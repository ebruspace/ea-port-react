import React from "react";
import Logo from "./PortfolioComps/Logo";
import emir from "../img/Photos/File_000 (1).png";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context(`../img/Certificates/`, false, /\.(jpg)$/)
);

console.log(Object.values(images).map((a) => a.default));

const stImages = Object.values(images).map((a) => a.default);

function certMaker(a) {
  return (
    <div>
      <img src={a} alt={a} className="cert" />
    </div>
  );
}

function Cv() {
  return (
    <div>
      <Logo pageName="cv" />
      <img src={emir} alt="" className="img-about" />
      <div className="about-cv">
        <div class="cv-date cv-date-1"></div>
        <div class="cv-entry cv-entry-1">education</div>
        <div class="cv-date cv-date-2">
          <p>sep 2018</p>
          <p>present</p>
        </div>
        <div class="cv-entry cv-entry-2">
          <p class="entry-title">anglia ruskin university / cambridge</p>
          <p class="entry-details">computer games art, ba (hons)</p>
        </div>
        <div class="cv-date cv-date-3">
          <p>jun 2018</p>
          <p>sep 2013</p>
        </div>
        <div class="cv-entry cv-entry-3">
          <p class="entry-title">tarabya british schools / istanbul</p>
          <p class="entry-details">high schools, study in arts</p>
        </div>
        <div class="cv-date cv-date-4">
          <p></p>
          <p></p>
        </div>
        <div class="cv-entry cv-entry-4">
          <p class="entry-title">experiences & workshops</p>
          <p class="entry-details"></p>
        </div>
        <div class="cv-date cv-date-5">
          <p>jun 2017</p>
          <p>jul 2017</p>
        </div>
        <div class="cv-entry cv-entry-5">
          <p class="entry-title">grafi2000 productions / istanbul</p>
          <p class="entry-details">internship</p>
        </div>
        <div class="cv-date cv-date-6">
          <p>jun 2014</p>
          <p>dec 2014</p>
        </div>
        <div class="cv-entry cv-entry-6">
          <p class="entry-title">canan kadioglu atelier / istanbul</p>
          <p class="entry-details">drawing and painting workshops</p>
        </div>
        <div class="cv-date cv-date-7">
          <p>sep 2017</p>
          <p>aug 2017</p>
        </div>
        <div class="cv-entry cv-entry-7">
          <p class="entry-title">anima school / istanbul</p>
          <p class="entry-details">maya, 3d modelling & animation program</p>
        </div>
        <div class="cv-date cv-date-8">
          <p>jun 2017</p>
          <p>jul 2017</p>
        </div>
        <div class="cv-entry cv-entry-8">
          <p class="entry-title">university of the arts london / london</p>
          <p class="entry-details">ual international summer school</p>
        </div>
        <div class="cv-date cv-date-9">
          <p>jun 2016</p>
          <p>jul 2016</p>
        </div>
        <div class="cv-entry cv-entry-9">
          <p class="entry-title">
            cambridge school of visual performing arts / cambridge
          </p>
          <p class="entry-details">film making, painting & drawing</p>
        </div>
        <div class="cv-date cv-date-10">
          <p>jun 2015</p>
          <p>jul 2015</p>
        </div>
        <div class="cv-entry cv-entry-10">
          <p class="entry-title">university of the arts london / london</p>
          <p class="entry-details">
            young creatives: ep art & design workshop ‘13-’14
          </p>
        </div>
        <div class="cv-date cv-date-11">
          <p>aug 2015</p>
          <p>jul 2015</p>
        </div>
        <div class="cv-entry cv-entry-11">
          <p class="entry-title">dj academy / istanbul</p>
          <p class="entry-details">
            training on mixer and other various instruments
          </p>
        </div>
        <div class="cv-date cv-date-12">
          <p></p>
          <p></p>
        </div>
        <div class="cv-entry cv-entry-12">
          <p class="entry-title">awards & extracurricular work</p>
          <p class="entry-details"></p>
        </div>
        <div class="cv-date cv-date-13">
          <p>2016</p>
          <p></p>
        </div>
        <div class="cv-entry cv-entry-13">
          <p class="entry-title">
            duke of edinburgh youth achievement award / london
          </p>
          <p class="entry-details">bronze award</p>
        </div>
        <div class="cv-date cv-date-14">
          <p></p>
          <p></p>
        </div>
        <div class="cv-entry cv-entry-14">
          <p class="entry-title">six points association of blinds / istanbul</p>
          <p class="entry-details">
            reading and recording books for blind students
          </p>
        </div>
      </div>
      <div className="certificates">{stImages.map((a) => certMaker(a))}</div>
    </div>
  );
}

export default Cv;
