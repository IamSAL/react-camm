import React, { useState } from 'react';
import Webcam from 'react-webcam';
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [capturedImage, setCapturedImage] = useState('');
  const [results, setResults] = useState([]);
  const [Loading, seLoading] = useState(false);
  const capture = React.useCallback(() => {
    seLoading(true);
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);

    var formData = new FormData();
    formData.append('file', imageSrc);
    fetch('http://34.132.210.88:8080', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        seLoading(false);
      })
      .catch((e) => {
        console.log(e);
        seLoading(false);
      });
  }, [webcamRef]);

  return (
    <>
      <div className={`row ${Loading ? 'disabled' : ''}`}>
        <div className="col-10">
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={'100%'}
            mirrored
            videoConstraints={videoConstraints}
          />
        </div>
        <div className="col-2 d-flex flex-center justify-content-center align-items-center">
          <div className="">
            <button onClick={capture} className="btn btn-primary">
              {Loading ? 'Processing' : 'Capture'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebcamCapture;
