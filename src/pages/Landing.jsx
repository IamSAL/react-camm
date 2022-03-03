import { CameraModal } from "./CameraModal";
import React, { Fragment, useState } from "react";
import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import logo from "../asset/photo/Swt_logo_black.png";
import img3 from "../asset/photo/img-3-2.png";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FiCamera } from "react-icons/fi";
import ResultList from "./ResultList";

export const safeParseJSON = (message) => {
  try {
    return JSON.parse(message);
  } catch (error) {
    return null;
  }
};

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

function Landing(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const webcamRef = React.useRef(null);
  const [capturedImage, setCapturedImage] = useState("");
  const [results, setResults] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Mode, setMode] = useState("Camera");
  const [videoConstraints, SetvideoConstraints] = useState({
    width: 1280,
    height: 720,
  });

  const capture = React.useCallback(() => {
    setLoading(true);
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);

    var formData = new FormData();

    formData.append("file", dataURLtoFile(imageSrc));

    submitImage(
      formData,
      (result) => {
        setResults((prev) => {
          return [...prev, { input: imageSrc, out: result.image }];
        });
        setLoading(false);
      },
      () => {}
    );
  }, [webcamRef]);

  function submitImage(formData, cbOk, cbErr) {
    fetch("https://bg.sksalman.codes/", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (cbOk) {
          cbOk(result);
        }
      })
      .catch((e) => {
        console.log(JSON.stringify(e));
        setLoading(false);
        if (cbErr) {
          cbErr(e);
        }
      });
  }

  return (
    <Fragment>
      <CameraModal
        show={show}
        handleClose={handleClose}
        webcamRef={webcamRef}
        videoConstraints={videoConstraints}
        capture={capture}
      />
      <Container fluid={true} className="p-0 bg-light">
        <div className="nav_section d-flex align-item-center justify-content-between">
          <a className="logo" href="#">
            <img src={logo} alt="" />
          </a>
          <span className="menu_btn">
            <AiOutlineCloudUpload className="menu_icon" />
            <FiCamera className="menu_icon" />
          </span>
        </div>
        <Container className=" main_content text-center section_margin">
          <Row>
            <Col md={6} className="flex_center flex-column">
              <div className="px-md-5">
                <h2 className="l_title">Remove Image Background</h2>
                <p className="sub_title">100% Automatically</p>
              </div>
              <div className="img_section">
                <img className="img_fit" src={img3} alt="" />
              </div>
            </Col>
            <Col md={6} className="upload_section flex_center mt-0 px-0">
              <div className="flex-column flex_center upload_section_inner">
                <Button
                  className="btn_webcam mb-3 btn-secondary"
                  onClick={handleShow}
                >
                  Use Webcam
                </Button>
                <Button className="btn btn_upload mb-2">
                  <AiOutlineCloudUpload className="upload_icon" />
                  Upload Image
                </Button>
                <p>or drop a file, paste an image or URL</p>
              </div>
            </Col>
          </Row>
        </Container>
        <ResultList />
      </Container>
    </Fragment>
  );
}

export default Landing;
