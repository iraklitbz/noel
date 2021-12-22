
import './styles/main.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ReactPlayer from "react-player";
import { useState } from 'react';
const style = {
  width: '100%',
  height: '100vh',
  bgcolor: '#000'
};

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = (single) => {
    setSelectedVideo(single);
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedVideo({})
  };
  const [selectedVideo, setSelectedVideo] = useState({});
  return (
    <div className="App">
      <Header />
      <Hero 
        handleOpen={handleOpen}
        setSelectedVideo={setSelectedVideo}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='as'
        className="modal"
      >
        <Box sx={style}>
         <span className="close-btn" onClick={handleClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
         </span>
          <div className="container max-width-lg">
            <div className="full-ratio">
              <ReactPlayer
                  className="react-player"
                  url={selectedVideo.urlv}
                  width="100%"
                  height="100%"
                  controls={true}
                />
            </div>
            <div className="video-detail">
              <h2 className="text-md margin-bottom-xxxs">{selectedVideo.stitle}</h2>
              {selectedVideo.antetitulo ? <h4 className="text-sm">{selectedVideo.antetitulo}</h4> : null}
              {selectedVideo.produced ? <h4 className="text-sm margin-top-xxxs">{selectedVideo.produced}</h4> : null}
              {selectedVideo.extra1 ? <h4 className="text-sm margin-top-xxxs">{selectedVideo.extra1}</h4> : null}
              {selectedVideo.extra2 ? <h4 className="text-sm margin-top-xxxs">{selectedVideo.extra2}</h4> : null}
              {selectedVideo.extra3 ? <h4 className="text-sm margin-top-xxxs">{selectedVideo.extra3}</h4> : null}
              {selectedVideo.extra4 ? <h4 className="text-sm margin-top-xxxs">{selectedVideo.extra4}</h4> : null}
              {selectedVideo.extra5 ? <h4 className="text-sm margin-top-xxxs">{selectedVideo.extra5}</h4> : null}
            </div>
            {selectedVideo.gallery ? 
                <div className="gallery margin-top-md">
                  {selectedVideo.gallery.map(element => (
                    <img src={`/img/trabajo${selectedVideo.id}/${element}`} />
                  ))}

                </div> 
            : null
            }
           

          </div>
         
        </Box>
      </Modal>
      
    </div>
  );
}

export default App;
