import React, { useState } from "react";
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

        <Gallery 
          handleOpen={handleOpen}
          setSelectedVideo={setSelectedVideo}
        />
     
     
    </div>
    
   
   );
}
 
export default Hero;