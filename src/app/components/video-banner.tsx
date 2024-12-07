import React from "react";

interface VideoBannerProps {
  videoSrc: string; // Path or URL of the video
  altText?: string; // Optional: Accessibility description for the video
}

const VideoBanner: React.FC<VideoBannerProps> = ({ videoSrc, altText }) => {
  return (
    <div style={{ height: "300px", overflow: "hidden" }}>
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover", // Ensures the video fills the container
        }}
        aria-label={altText}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBanner;
