
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
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
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
         <span className="close-btn" onClick={handleClose}>X</span>
          <div className="container max-width-xl">
            <div className="full-ratio">
              <ReactPlayer
                  className="react-player"
                  url={selectedVideo.urlv}
                  width="100%"
                  height="100%"
                  controls={true}
                />
            </div>

          </div>
         
        </Box>
      </Modal>
      
    </div>
  );
}

export default App;
