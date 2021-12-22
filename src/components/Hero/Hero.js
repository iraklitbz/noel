import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import Gallery from "./Gallery";

const Hero = ({handleOpen, setSelectedVideo}) => {
  const [play, setPlay] = useState(false);

  const handleMouseEnter = () => {
    setPlay(true);
  };
  const handleMouseLeave = () => {
    setPlay(false);
  };

  
  return (
   
    <div className="grid-full">
      <div className="grid-full-primary">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="full-ratio">
          <ReactPlayer
            className="react-player"
            playing={play}
            url="https://vimeo.com/658634127"
            width="100%"
            height="100%"
            controls={false}
            muted={true}
          
          />

        </div>
        <div className="quick-info ">
          <h2 className="quick-info-headline ">BoaMistura Documental</h2>
          <p className="quick-info-description">Blur</p>
        </div>
        
      </div>
      <Gallery 
        handleOpen={handleOpen}
        setSelectedVideo={setSelectedVideo}
      />
     
    </div>
    
   
   );
}
 
export default Hero;