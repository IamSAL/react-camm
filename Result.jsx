import React, { useState } from 'react';
import Webcam from 'react-webcam';
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

const Result = ({input,out}) => {
  const webcamRef = React.useRef(null);
  const [capturedImage, setCapturedImage] = useState('');

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  }, [webcamRef]);

  return (<div class="row">
  <div class="col-6">
<img src={input} alt=""></img>

  </div>
  <div class="col-6">
<img src={out} alt=""></img>

  </div>
</div>);
};

export default Result;
