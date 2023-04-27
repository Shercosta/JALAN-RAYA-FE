import React from "react";
import Leaflet from "./Leaflet";

const Content = () => {
  return (
    <>
      <div className="row">
        <div className="col col-9">
          <p id="caption" className="text-center">
            caption
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col col-9">{/* <Leaflet /> */}</div>
        <div className="col col-3">
          <p className="text-break" id="details"></p>
        </div>
      </div>
    </>
  );
};

export default Content;
