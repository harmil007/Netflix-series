import React from "react";
import Card from './Cards';
import Sdata from './Sdata';


const Netflix = () => {
  return (
    <div className="card__container">
      {Sdata.map((value) => {
        return (
          <Card
            key={value.id}
            imgsrc={value.imgsrc}
            title={value.title}
            seriesname={value.seriesname}
            link={value.link}
          />
        )
      })}
    </div>
  );
}

export default Netflix;