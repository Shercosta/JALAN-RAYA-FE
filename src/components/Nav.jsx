import React from "react";

const Nav = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-9">
          <h1>Koordinat Jalan Lampung Selatan</h1>
        </div>
        <div className="col col-3">
          <form className="d-flex">
            <input
              type="search"
              className="form-control my-2"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Nav;
