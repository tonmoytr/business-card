import React from "react";

const WebsiteBanner = () => {
  return (
    <div className="w-full flex items-center justify-center my-10 relative">
      {/* Green line behind */}
      <div className="absolute w-full h-1 bg-green-600 rounded-full"></div>

      {/* Centered pill with text */}
      <span className="relative px-6 py-1 bg-green-600 text-white rounded-full z-10 text-sm font-medium shadow-md">
        www.yourwebsite.com
      </span>
    </div>
  );
};

export default WebsiteBanner;
