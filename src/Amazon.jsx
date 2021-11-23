import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';

const Amaxon = () =>{
    return (
        <>
        <Card 
        key = {Sdata[1].id}
        imgsrc = {Sdata[1].imgsrc} 
        title = {Sdata[1].title}
        sname = {Sdata[1].sname}
        link = {Sdata[1].link} />
        <Card 
        key = {Sdata[3].id}
        imgsrc = {Sdata[3].imgsrc} 
        title = {Sdata[3].title}
        sname = {Sdata[3].sname}
        link = {Sdata[3].link} />
        <Card 
        key = {Sdata[5].id}
        imgsrc = {Sdata[5].imgsrc} 
        title = {Sdata[5].title}
        sname = {Sdata[5].sname}
        link = {Sdata[5].link} />
        </>
      );
}

export default Amaxon;