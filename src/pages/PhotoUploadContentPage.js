import React, { Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "../asset/photo/Swt_logo_black.png";
import img3 from "../asset/photo/img-3-2.png";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

function PhotoUploadContentPage(props) {
  return (
    <Fragment>
      <Container fluid={true} className="p-0 bg-light">
        <div className="nav_section d-flex align-item-center justify-content-between">
          <a className="logo" href="#">
            <img src={logo} alt="" />
          </a>
          <a className="menu_btn" href="#">
            <FiMenu />
          </a>
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
            <Col md={6} className="upload_section flex_center mt-4 px-0">
              <div className="flex-column flex_center upload_section_inner">
                <Button className="btn_webcam mb-3 btn-secondary">
                  User Webcam
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
      </Container>
    </Fragment>
  );
}

export default PhotoUploadContentPage;
