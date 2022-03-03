import React, { useRef, useState } from "react";
import {
  Button,
  Modal,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import Webcam from "react-webcam";
import { useClickAway } from "react-use";
import { FiCamera, FiMinimize2 } from "react-icons/fi";
import { BsFillCameraFill } from "react-icons/bs";
export function CameraModal({
  show,
  handleClose,
  webcamRef,
  videoConstraints,
  capture,
}) {
  //   useClickAway(webcamRef, () => {
  //     console.log("s");
  //   });
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
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          //   width={"100%"}
          mirrored
          videoConstraints={{
            ...videoConstraints,
            facingMode: { exact: cameraMode.current },
          }}
        />
        <Row className="camera_actions">
          <Col className="flex_center gap-4">
            <Button className="camera_btn">
              <BsFillCameraFill />
              Capture
            </Button>
            <Button
              className="camera_btn"
              variant="danger"
              onClick={handleClose}
            >
              Close
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
