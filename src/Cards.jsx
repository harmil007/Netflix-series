import React from "react";
// import './styles/Cards.css'  

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="imgdiv">
            <img src={props.imgsrc} alt="myPic" className="card__img" />
          </div>
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card__title">{props.seriesname}</h3>
            <a href={props.link} target="_blank" rel="noreferrer">
              <button> Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;  