import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favFlatform = "netflix";

// const FavF = () => {
//   if(favFlatform === 'netflix'){
//     return <Netflix />;
//   }else{
//     return <Amazon />;
//   }
// }

const App = () => (
    <>
    <h1 className="heading__style">Top 6 Netflix/Amazon original series and movies</h1>
    {/* {Sdata.map((val)=>{
      return (
        <Card 
        key = {val.id}
        imgsrc = {val.imgsrc} 
        title = {val.title}
        sname = {val.sname}
        link = {val.link} />
      );
    })} */}
    {/* <FavF /> */}
    { (favFlatform === 'netflix') ? <Netflix /> : <Amazon /> }
  </>
);

export default App;
