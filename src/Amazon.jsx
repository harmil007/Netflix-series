import React from "react";
import Card from './Cards';
import Amazondata from './Amazondata';


const Amazon = () => {
   return (
      <div className="card__container">
        {Amazondata.map((value) => {
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

export default Amazon;