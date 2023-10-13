import React from "react";
import Card from "react-bootstrap/Card";
import "./Card.css";

function CustomCard({ title, text, onClick }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <Card
        className="card"
        onClick={onClick}>
        <Card.Body>
          {title && <Card.Title className="card-title">{title}</Card.Title>}
          {text && <Card.Text className="card-text">{text}</Card.Text>}
        </Card.Body>
      </Card>
    </div>
  );
}

export default CustomCard;
