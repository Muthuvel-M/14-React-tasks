import React from "react";
import LazyLoad from "react-lazyload";
import rain from "../assets/Rainy.jpg";
import snow from "../assets/snow.jpg";

const LazyImage = ({ src, alt }) => {
  return (
    <LazyLoad height={200} once>
      <img src={src} alt={alt} className="lazy-image" />
    </LazyLoad>
  );
};

const LazyImageLoaded = () => {
  return (
    <div>
      <h1>Lazy Loaded Images</h1>
      <LazyImage src={rain} alt="Lazy Loaded rain image" />
      <LazyImage src={snow }alt="Lazy Loaded snow image" />
    </div>
  );
};

export default LazyImageLoaded;
