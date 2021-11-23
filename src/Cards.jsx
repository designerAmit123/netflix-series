import React from 'react';
import Heading from './Heading';
import Title from './Title';
import Images from './Images';

function Card(props){
    return (
      <>
      <div className="cards">
        <div className="card">
          <Images imgsrc={props.imgsrc}/>
          <div className="card__info">
            <Title title={props.title} />
            <Heading sname={props.sname} />
            <a href={props.link} target="_blank">
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
    );
  }

  export default Card;