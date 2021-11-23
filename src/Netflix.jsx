import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';

const Netflix = () =>{
    return (
        <>
        <Card 
        key = {Sdata[0].id}
        imgsrc = {Sdata[0].imgsrc} 
        title = {Sdata[0].title}
        sname = {Sdata[0].sname}
        link = {Sdata[0].link} />
        <Card 
        key = {Sdata[2].id}
        imgsrc = {Sdata[2].imgsrc} 
        title = {Sdata[2].title}
        sname = {Sdata[2].sname}
        link = {Sdata[2].link} />
        <Card 
        key = {Sdata[4].id}
        imgsrc = {Sdata[4].imgsrc} 
        title = {Sdata[4].title}
        sname = {Sdata[4].sname}
        link = {Sdata[4].link} />
        </>
      );
}

export default Netflix;