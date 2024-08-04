import React from 'react';

interface IconCheck1Props {
  fill?: string; // Optional fill color
  onClick?: () => void; // Optional onClick handler
}

const IconCheck: React.FC<IconCheck1Props> = ({ fill, onClick }) => (
  <svg
    width="23"
    height="17"
    viewBox="0 0 23 17"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  >
    <path
      d="M8.17791 14.2809L4.80047 10.9059L1.42304 7.53094C1.21281 7.32104 0.8729 7.32126 0.663096 7.53159L0.157543 8.03841C-0.0531228 8.2496 -0.0524766 8.59231 0.159266 8.80264L8.25093 16.8437C8.46935 17.0608 8.82455 17.0504 9.02983 16.8209L22.8624 1.36552C23.0585 1.14655 23.0432 0.810757 22.8282 0.610361L22.3278 0.144138C22.1075 -0.0610093 21.7622 -0.0452453 21.5614 0.179121L8.95788 14.2591C8.75217 14.4891 8.39611 14.499 8.17791 14.2809Z"
      fill={fill}
      fillOpacity="0.8"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4844_7622"
        x1="0"
        y1="12"
        x2="21"
        y2="2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#525252" />
        <stop offset="1" stopColor="#BBBBBB" />
      </linearGradient>
      <linearGradient id="clickedGradient" x1="0" y1="0" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4879AF" />
        <stop offset="100%" stopColor="#7C93CD" />
      </linearGradient>
    </defs>
  </svg>
);

export default IconCheck;
