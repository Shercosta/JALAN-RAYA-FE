import React from "react";
import { useState } from "react";
import Leaflet from "./Leaflet";

async function getData() {
  const response = await fetch("http://103.49.239.29:3002/api/jalan-rayas");
  const docs = await response.json();

  console.log(docs.status);
  return docs.status;
}

const Content = () => {
  // $.get(
  //   "http://103.49.239.29:3002/api/jalan-rayas",
  //   data,
  //   function (data, textStatus, jqXHR) {
  //     $("#details").text(data.status);
  //   }
  //   //   "dataType"
  // );

  const [files, setFiles] = useState("Paragraph");
  var retrieved = toString(getData());

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-9">
            <p id="caption" className="text-center">
              caption
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col-9">
            <Leaflet />
          </div>
          <div className="col col-3">
            <p className="text-break" id="details">
              {files}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
