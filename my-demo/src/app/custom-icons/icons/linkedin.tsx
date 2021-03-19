/* eslint-disable react/react-in-jsx-scope */
import { FC } from 'react';
import { IconProps } from '../icon-props';

const Linkedin: FC<IconProps> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      id="Layer_1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <defs id="defs19" />
      <g id="g3021" />
      <g id="Layer_1_1_" />
      <g id="Layer_1_1_-7" transform="translate(-819.672,-61.929991)" />
      <g id="g2995">
        <rect
          height="512"
          id="rect2989"
          rx="70"
          ry="70"
          fill={color}
          stroke="none"
          transform="scale(-1,-1)"
          width="512"
          x="-512"
          y="-512"
        />
        <g id="g2987" transform="matrix(1.2026312,0,0,1.2026312,-54.384104,-52.796039)">
          <rect height="196.94901" id="rect3163" fill="#ffffff" width="63.599083" x="112.57325" y="203.761" />
          <path
            d="m 144.78291,175.39295 c 17.44046,0 31.58994,-14.01309 31.58994,-31.28355 0,-17.29015 -14.14948,-31.28535 -31.58994,-31.28535 -17.45188,0 -31.59076,13.9952 -31.59076,31.28535 0,17.27046 14.13888,31.28355 31.59076,31.28355 z"
            id="path3165"
            fill="#ffffff"
          />
          <path
            d="m 403.51679,291.89301 c -0.375,-10.338 1.962,-44.49 -22.773,-68.916 -12.969,-12.813 -19.519,-18.845 -51.092,-18.845 -25.367,0 -49.136,16.414 -58.562,29.468 v -28.851 h -64.78 v 195.017 h 64.78 c 0,0 0,-89.672 0,-111.17 0,-16.012 8.315,-33 30.943,-33 22.654,0 36.773,18.246 36.773,39.182 v 104.988 h 64.796 v -107.873 h -0.085 z"
            id="path3167"
            fill="#ffffff"
          />
        </g>
      </g>
    </svg>
  );
};

Linkedin.defaultProps = {
  color: '#017bbe',
  size: 24,
};

export default Linkedin;
