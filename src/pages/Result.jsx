import React, { Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "../asset/photo/Swt_logo_black.png";
import img2 from "../asset/photo/img-3-2.png";
import { AiOutlineCloudUpload, AiOutlineInfoCircle } from "react-icons/ai";
import { BsEmojiSmile, BsEmojiFrown } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const Result = () => {
  return (
    <Row className="my-sm-5 mx-2 d-flex align-items-center justify-content-center">
      <Col lg={9} className="upload_list_items p-3 d-sm-flex">
        <button className="btn_close">
          <IoClose />
        </button>
        <Col md={8} className="left_section">
          <div className="py-3 tab_section">
            <span className="active">Original</span>
            <span className="">Remove Background</span>
          </div>
          <div>
            <img className="img_fit" src={img2} alt="" />
          </div>
        </Col>
        <Col
          md={4}
          className="right_section pt-2 d-flex align-items-sm-center justify-content-center flex-column"
        >
          <div className="d-none d-sm-block">
            <div className="flex_center flex-column">
              <Button className="btn btn_sm mb-2">Download</Button>
              <p className="d-none d-md-block">
                Preview Image 600 x 400 &nbsp;
                <AiOutlineInfoCircle />
              </p>
              <p className="text-center d-md-none">
                Preview Image <br /> 600 x 400 &nbsp;
                <AiOutlineInfoCircle />
              </p>
            </div>
            <div className="flex_center flex-column">
              <Button className="btn btn_sm mb-2 mt-2">Download HD</Button>
              <p className="d-none d-md-block">
                Full Image not available &nbsp; <AiOutlineInfoCircle />
              </p>
              <p className="text-center d-md-none">
                Full Image <br /> not available &nbsp; <AiOutlineInfoCircle />
              </p>
            </div>
          </div>
          {/* ================= */}
          <div className="d-flex flex_between d-sm-none">
            <div className="">
              <Button className="btn btn_sm">Download</Button>

              <p className="text-center d-md-none">
                Preview Image <br /> 600 x 400 &nbsp;
                <AiOutlineInfoCircle />
              </p>
            </div>
            <div className="">
              <Button className="btn btn_sm mb-2 mt-2">Download HD</Button>
              <p className="text-center d-md-none">
                Full Image <br /> not available &nbsp; <AiOutlineInfoCircle />
              </p>
            </div>
          </div>
          <div className="emoji_section mt-2 mt-sm-5 flex_center">
            <p>
              Rate this result:{" "}
              <span className="emoji_icon">
                <BsEmojiSmile />
              </span>
              <span className="emoji_icon">
                <BsEmojiFrown />
              </span>
            </p>
          </div>
        </Col>
      </Col>
    </Row>
  );
};

export default Result;
