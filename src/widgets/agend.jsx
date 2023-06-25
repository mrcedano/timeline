import { useState } from 'react';
import '../styles/agend.css'
import propTypes from "prop-types";
const IMAGEPATH = [
  "vJNW6GL",
  "1fCcHtF",
  "jGQ7952",
  "nRYyhf7",
  "M7tM6Fz",
  "hCt2wxp",
  "dD6PSXG",
  "PmsY1hT",
  "6nS3cVY",
  "kQ8fFyM",
  "crqRcx3",
  "6PDw36z",
];

function IMAGECONSTRUCTOR(keyimage,indx=0) {
  const IMAGEURL = "https://i.ibb.co/";
  return IMAGEURL + keyimage + "/image-" + indx + ".jpg";
}

export function Agend() {
    const [imageShow, setImageShow] = useState({imagepath: "", showing: false});
    let showViewer = imageShow.showing ? "visible" : "invisible";


    function showModal(imgpath) {
      console.log(imgpath);
      setImageShow({showing:true,imagepath: imgpath});
    }

    function closeModal(e) {
      if(e.target.nodeName == "IMG") return;
      setImageShow({ showing: false, imagepath: null });
    }

    return (
      <div id="AgendContainer">
        <div id="ViewerContainer" className={showViewer} onClick={closeModal}>
          <div className="viewerImage">
            <img src={imageShow.imagepath} alt="selected image" />
          </div>
        </div>

        <div id="AgendTitle">
          <h2>Agenda</h2>
        </div>

        <div id="ACPhotoContainer">
          <div id="grid">
            {IMAGEPATH.map((val, indx) => (
              <Photo
                key={indx}
                event={showModal}
                imgsrc={IMAGECONSTRUCTOR(val)}
              />
            ))}
          </div>
        </div>
      </div>
    );
}


function Photo(props) {
  return (
    <div className="photo" onClick={() => props.event(props.imgsrc)}>
      <img src={props.imgsrc} alt="image" />
    </div>
  );
}

Photo.propTypes = {
  imgsrc :  propTypes.string,
  event: propTypes.func
}
