import React, { Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "../asset/photo/Swt_logo_black.png";
import img2 from "../asset/photo/img-3-2.png";
import { AiOutlineCloudUpload, AiOutlineInfoCircle } from "react-icons/ai";
import { BsEmojiSmile, BsEmojiFrown } from "react-icons/bs";

import { FiMenu } from "react-icons/fi";
import Result from "./Result";

function ResultList({ results, setResults }) {
  return (
    <Fragment>
      <Container className="upload_list_section py-sm-5 py-3 result_parent">
        {[...results].reverse().map((result) => {
          return <Result result={result} setResults={setResults} />;
        })}
      </Container>
    </Fragment>
  );
}

export default ResultList;
