// Badge.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomBadge = ({ icon, text }) => (
  <span className="badge bg-primary me-2">
    <FontAwesomeIcon icon={icon} />
    {text}
  </span>
);

export default CustomBadge;
