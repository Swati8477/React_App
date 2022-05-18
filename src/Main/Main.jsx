import { React, useState } from "react";
import "./Main.css";
import Card from "../Component/Card";
import Data from "../Component/Data";

const Main = () => {
  const [search, setSearch] = useState();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="content">
            <h4>SUNFOX</h4>
            <p>
              Sunfox is Uttarakhand based Research and Development Lab with the
              aim of creating a better future.
            </p>
          </div>
          <div className="input">
            <input
              type="search"
              value={search}
              className="inputField"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              placeholder="search your keywords"
            />
            <i class="fas fa-search"></i>
          </div>
          <div className="container">
            {Data.map((val, index) => {
              return (
                <Card
                  imgsrc={val.imgsrc}
                  title={val.title}
                  sname={val.sname}
                  link={val.link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
