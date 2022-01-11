import React, { useState } from "react";
import ReactPlayer from "react-player";
import listVideos from "../../db";
const Gallery = ({handleOpen, setSelectedVideo}) => {
  const [play, setPlay] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const handleMouseEnter = (i) => {
    setPlay(true);
    if (i !== selectedItemIndex) {
      setSelectedItemIndex(i);
     }
  };
  const handleMouseLeave = (i) => {
    setPlay(false);
    setSelectedItemIndex(-1);
  };
  const handleVideo = (single) => {
    handleOpen(single)
  }
  return ( 
    <div className="grid-full-gallery">
      {listVideos.map((element, i) => (
          <div onClick={() => handleVideo(element)} key={element.id} className="box" onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={() => handleMouseLeave(i)} onMouseOut={() => handleMouseLeave(i)}>
            <div className="full-ratio">
              <ReactPlayer
                className="react-player"
                playing={play && selectedItemIndex === i}
                url={element.urlv}
                width="100%"
                height="100%"
                loop={true}
                controls={false}
                muted={true}
              />

            </div>
            <div className="bk-quick" style={{ backgroundImage: `url(/img/${element.img}.jpg)` }}></div>
        
            <div className="quick-info">
              <h2 className="quick-info-headline">{element.name}</h2>
              <p className="quick-info-description">{element.description}</p>
            </div>
        </div>
      ))}
      
  </div>
   );
}
 
export default Gallery;