import React from "react";
import "./Loader.css";
import { Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <div className="loader d-flex justify-content-center align-items-center">
      <Spinner animation="border" />
    </div>
  );
}
