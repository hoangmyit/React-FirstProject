import React, { FC } from 'react';
import { IconProps } from '../icon-props';

const Mail: FC<IconProps> = ({ color, size }) => {
  return (
    <svg height={size} id="svg1392" version="1.0" width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
      <defs id="defs1394">
        <marker
          id="ArrowEnd"
          markerHeight="3"
          markerUnits="strokeWidth"
          markerWidth="4"
          orient="auto"
          refX="0"
          refY="5"
          viewBox="0 0 10 10"
          width={size}
          height={size}
        >
          <path d="M 0,0 L 10,5 L 0,10 L 0,0 z" id="path1397" />
        </marker>
        <marker
          id="ArrowStart"
          markerHeight="3"
          markerUnits="strokeWidth"
          markerWidth="4"
          orient="auto"
          refX="10"
          refY="5"
          viewBox="0 0 10 10"
        >
          <path d="M 10,0 L 0,5 L 10,10 L 10,0 z" id="path1400" />
        </marker>
      </defs>
      <g id="g8564" transform="translate(-58.515,-15.604444)" fill={color} stroke="#ffffff">
        <g id="g1402">
          <path
            d="M 140.865,32.943 C 99.53,32.943 76.294,54.314 76.294,97.979 L 76.294,548.101 C 76.294,588.944 97.185,610.329 138.486,610.329 L 590.51,610.329 C 631.813,610.329 652.736,590.009 652.736,548.101 L 652.736,97.979 C 652.736,55.379 631.813,32.943 589.213,32.943 C 589.213,32.943 140.722,32.801 140.865,32.943 z"
            id="path1404"
            strokeWidth="3.40799999"
          />
        </g>
        <g id="g1406">
          <path
            d="M 569.372,461.472 L 569.372,160.658 L 160.658,160.658 L 160.658,461.472 L 569.372,461.472 z"
            id="path1408"
            strokeWidth="30.65500069"
          />
          <path id="path1410" strokeWidth="30.65500069" />
          <path
            d="M 164.46,164.49 L 340.78,343.158 C 353.849,356.328 377.628,356.172 390.421,343.278 L 566.62,165.928"
            id="path1412"
            strokeWidth="30.65500069"
          />
          <path d="M 170.514,451.566 L 305.609,313.46" id="path1414" strokeWidth="30.65500069" />
          <path d="M 557.966,449.974 L 426.514,315.375" id="path1416" strokeWidth="30.65500069" />
        </g>
      </g>
    </svg>
  );
};

Mail.defaultProps = {
  size: 24,
  color: '#00afed',
};

export default Mail;
