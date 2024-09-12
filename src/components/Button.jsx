import React from "react";

export default function CustomButton() {
  function openResume() {
    const url =
      "https://docs.google.com/document/d/1HZFma2VnPqQUZyWqCv0X7zOPlj-5qbw3/edit?usp=sharing&ouid=104610981124726052746&rtpof=true&sd=true";
    window.open(url, "_blank");
  }
  return (
    <div className="cursor-pointer">
      <button
        className="cursor-pointer bg-green-600 rounded-lg h-8 p-2 flex justify-center items-center"
        onClick={openResume}
      >
        Resume
      </button>
    </div>
  );
}
