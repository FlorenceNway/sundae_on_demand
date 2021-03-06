import React from "react";
import Col from "react-bootstrap/col";

const ScoopOption = ({ name, imagePath }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img src={`http://locahost:3030/${imagePath}`} alt={`${name} scoop`} />
    </Col>
  );
};

export default ScoopOption;
