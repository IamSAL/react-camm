import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "../asset/photo/Swt_logo_black.png";
import img2 from "../asset/photo/img-3-2.png";
import { AiOutlineCloudUpload, AiOutlineInfoCircle } from "react-icons/ai";
import { BsEmojiSmile, BsEmojiFrown } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

async function downloadImage(imageSrc) {
  const image = await fetch(imageSrc);
  const imageBlog = await image.blob();
  const imageURL = URL.createObjectURL(imageBlog);

  const link = document.createElement("a");
  link.href = imageURL;
  link.download = `output-${new Date().getMilliseconds()}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const Result = ({ result, setResults }) => {
  const { input, out } = result;
  const [Tab, setTab] = useState("result");
  const [reaction, setReaction] = useState("neutral");
  useEffect(() => {
    setTimeout(() => {
      document
        .querySelector(".result_parent")
        .scrollIntoView({ behavior: "smooth" });
    }, 200);
  }, [result]);
  return (
    <Row className="my-sm-5 mx-2 d-flex align-items-center justify-content-center">
      <Col lg={9} className="upload_list_items p-3 d-sm-flex">
        <button
          className="btn_close"
          onClick={() => {
            setResults((prev) => {
              const filtered = prev.filter((prevResult) => {
                return prevResult != result;
              });
              return filtered;
            });
          }}
        >
          <IoClose />
        </button>
        <Col md={8} className="left_section">
          <div className="py-3 tab_section">
            <span
              className={Tab == "original" ? "active" : ""}
              onClick={() => setTab("original")}
            >
              Original
            </span>
            <span
              className={Tab == "result" ? "active" : ""}
              onClick={() => setTab("result")}
            >
              Result
            </span>
          </div>
          <div>
            <img
              className="img_fit"
              src={Tab == "original" ? input : out}
              alt=""
            />
          </div>
        </Col>
        <Col
          md={4}
          className="right_section pt-2 d-flex align-items-sm-center justify-content-center flex-column"
        >
          <div className="d-none d-sm-block">
            <div className="flex_center flex-column">
              <Button
                className="btn btn_sm mb-2"
                onClick={() => {
                  downloadImage(out);
                }}
              >
                Download
              </Button>
              <p className="d-none d-md-block">
                Preview Image 600 x 400 &nbsp;
                <AiOutlineInfoCircle />
              </p>
              {/* <p className="text-center d-md-none">
                Preview Image <br /> 600 x 400 &nbsp;
                <AiOutlineInfoCircle />
              </p> */}
            </div>
          </div>
          {/* ================= */}
          <div className="d-flex flex_center d-sm-none">
            <div className="">
              <Button
                className="btn btn_sm"
                onClick={() => {
                  downloadImage(out);
                }}
              >
                Download
              </Button>

              <p className="text-center d-md-none">
                Preview Image <br /> 600 x 400 &nbsp;
                <AiOutlineInfoCircle />
              </p>
            </div>
          </div>
          <div className="emoji_section mt-2 mt-sm-5 flex_center">
            <p>
              Rate this result:{" "}
              <span className="emoji_icon emoji_icon_click">
                <BsEmojiSmile
                  fill={reaction == "liked" ? "#0b5ed7" : "black"}
                  onClick={() => {
                    setReaction("liked");
                  }}
                />
              </span>
              <span className="emoji_icon emoji_icon_click">
                <BsEmojiFrown
                  fill="red"
                  fill={reaction == "disliked" ? "red" : "black"}
                  onClick={() => {
                    setReaction("disliked");
                  }}
                />
              </span>
            </p>
          </div>
        </Col>
      </Col>
    </Row>
  );
};

export default Result;
