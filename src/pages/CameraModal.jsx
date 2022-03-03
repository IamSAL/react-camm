import React, { useRef, useState } from "react";
import {
  Button,
  Modal,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
  Spinner,
} from "react-bootstrap";
import Webcam from "react-webcam";
import { useClickAway } from "react-use";
import { FiAlertOctagon, FiCheck } from "react-icons/fi";
import { BsFillCameraFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
export function CameraModal({
  show,
  handleClose,
  webcamRef,
  videoConstraints,
  capture,
  isMobile,
  Mode,
  setMode,
  capturedImage,
  onCameraSubmit,
}) {
  const [hasWebcamUserMedia, setHasWebcamUserMedia] = useState(false);
  const [cameraError, setcameraError] = useState(false);
  const [cameraMode, setcameraMode] = useState({
    all: [
      { value: "user", name: "Front" },
      { value: "environment", name: "Back" },
    ],
    current: "user",
  });
  return (
    <Modal show={show} onHide={handleClose} className="camera_modal">
      <Modal.Body>
        <Row className="camera_actions_top">
          <Col className="flex_center gap-4" md={4}>
            <ButtonGroup>
              {cameraMode.all.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx % 2 ? "outline-light" : "outline-light"}
                  name="radio"
                  value={radio.value}
                  checked={cameraMode.current === radio.value}
                  onChange={(e) =>
                    setcameraMode((prev) => {
                      return { ...prev, current: e.target.value };
                    })
                  }
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
        </Row>
        {!hasWebcamUserMedia && !cameraError && (
          <Spinner animation="border" variant="light" className="loader" />
        )}
        {cameraError && (
          <div className="camera-error">
            <FiAlertOctagon />
            <h5>Sorry,camera or permission error.</h5>
          </div>
        )}

        {Mode == "Camera" ? (
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            className="camera_content"
            screenshotFormat="image/jpeg"
            //   width={"100%"}
            mirrored
            videoConstraints={{
              ...videoConstraints,
              facingMode: { exact: cameraMode.current },
            }}
            onUserMedia={(media) => {
              setHasWebcamUserMedia(true);
              setcameraError(false);
            }}
            onUserMediaError={(error) => {
              setcameraError(error.message);
              console.log(error.message);
            }}
          />
        ) : (
          <img src={capturedImage} className="w-100"></img>
        )}
        <Row className="camera_actions">
          {Mode == "Camera" ? (
            <Col
              className={isMobile ? "flex_center gap-1" : "flex_center gap-4"}
            >
              <Button className="camera_btn" onClick={capture}>
                <BsFillCameraFill />
                Capture
              </Button>
              <Button
                className="camera_btn"
                variant="danger"
                onClick={handleClose}
              >
                <IoClose />
                Close
              </Button>
            </Col>
          ) : (
            <Col
              className={isMobile ? "flex_center gap-1" : "flex_center gap-4"}
            >
              <Button
                className="camera_btn btn-success"
                onClick={() => {
                  onCameraSubmit(capturedImage);
                }}
                variant="success"
              >
                <FiCheck />
                Submit
              </Button>
              <Button
                className="camera_btn"
                variant="danger"
                onClick={() => {
                  setMode("Camera");
                }}
              >
                <IoClose />
                Retake
              </Button>
            </Col>
          )}
        </Row>
      </Modal.Body>
    </Modal>
  );
}
