import React, { FC } from "react";
import { COLOR } from "../../constants";

interface IBackButton {
  color?: string;
  width?: string;
  height?: string;
}

const BackButton: FC<IBackButton> = (backButton: IBackButton) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1000 1000"
      enableBackground="new 0 0 1000 1000"
      xmlSpace="preserve"
      width={`${backButton.width || 16}`}
      height={`${backButton.height || 16}`}
      fill={`#${backButton.color || COLOR.BLACK}`}>
      <g>
        <path d="M500,10C229.8,10,10,229.8,10,500c0,270.2,219.8,490,490,490c270.2,0,490-219.8,490-490C990,229.8,770.2,10,500,10L500,10z M500,928.8C263.6,928.8,71.3,736.4,71.3,500C71.3,263.6,263.6,71.3,500,71.3c236.4,0,428.8,192.3,428.8,428.7C928.8,736.4,736.4,928.8,500,928.8L500,928.8z M745,469.4H328.9l131.5-131.5c12-12,12-31.3,0-43.3c-12-12-31.3-12-43.3,0L233.3,478.3c-12,12-12,31.3,0,43.3l183.8,183.7c6,6,13.8,9,21.7,9c7.8,0,15.7-3,21.7-9c12-12,12-31.3,0-43.3L328.9,530.6H745c16.9,0,30.6-13.7,30.6-30.6C775.6,483.1,761.9,469.4,745,469.4L745,469.4z" />
      </g>
    </svg>
  );
};

export default BackButton;
