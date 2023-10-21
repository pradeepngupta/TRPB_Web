import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DirectionsLink = ({ place }) => {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setOrigin(`${position.coords.latitude},${position.coords.longitude}`);
    });
  }, []);

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${place}`;

  return (
    <Link to={directionsUrl} target="_blank">
      Get directions
    </Link>
  );
};

export default DirectionsLink;