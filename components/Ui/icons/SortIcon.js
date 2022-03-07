import React from "react";

function SortIcon({ active }) {
  let arrowStyle = {
    upArrow: "fill-white/60",
    downArrow: "fill-white/60",
  };
  switch (active) {
    case "increase":
      arrowStyle.upArrow = "fill-yellow-500";
      break;
    case "decrease":
      arrowStyle.downArrow = "fill-yellow-500";
      break;
  }
  return (
    <div className="-space-y-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`drop-shadow shadow-black ${arrowStyle.upArrow}`}
      >
        <path d="M8.71 12.29L11.3 9.7a.996.996 0 011.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71z"></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`drop-shadow shadow-black ${arrowStyle.downArrow}`}
      >
        <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
      </svg>
    </div>
  );
}

export default SortIcon;
