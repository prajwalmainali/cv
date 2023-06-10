import React from "react";

const Social = ({ href, src, alt }) => {
  return (
    <a href={href}>
      <img
        className="relative rounded-full h-8 w-8 mx-auto object-cover"
        src={src}
        alt={alt}
      />
    </a>
  );
};

export default Social;
