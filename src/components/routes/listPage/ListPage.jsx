import React from "react";
import { listData } from "../../../lib/dummyData";
import Filter from "../../filter/Filter";
import Card from "../../card/Card";
import "./listpage.scss";
import Map from "../../map/Map";
const ListPage = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <map name=""></map>
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
