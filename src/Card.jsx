import React from "react";
import "./Card.css";
import QR from "./images/image-qr-code.png";

export default function Card() {
  return (
    <div className="Container">
      <div className="Card">
        <img className="QR-Image" src={QR} alt="QR Code" />
        <div className="Card-Text">
          <p className="text-primary">
            <strong>Improve your front-end skills by building projects</strong>
          </p>
          <p className="text-secondary">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
          <div class="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Arthur</a>.
          </div>
        </div>
      </div>
    </div>
  );
}
