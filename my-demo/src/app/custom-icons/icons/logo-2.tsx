import React, { FC } from 'react';
import { LogoProps } from '../icon-props';

const LogoV2Icon: FC<LogoProps> = ({ size, color, backgroundColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 70.51469421386719 70.51469421386719"
      overflow="visible"
    >
      <g transform="scale(0.6863145822021852)" opacity="1">
        <g
          transform="translate(0, 0) scale(0.3839461795836267)"
          light-content="false"
          non-strokable="false"
          fill={backgroundColor}
        >
          <path d="M219.6 48.1c-22.9-22.9-53.4-35.5-85.8-35.5S71 25.2 48.1 48.1s-35.5 53.4-35.5 85.8 12.6 62.9 35.5 85.8 53.4 35.5 85.8 35.5 62.9-12.6 85.8-35.5 35.5-53.4 35.5-85.8-12.7-62.9-35.6-85.8z" />
          <path d="M133.8 0C59.9 0 0 59.9 0 133.8s59.9 133.8 133.8 133.8 133.8-59.9 133.8-133.8S207.8 0 133.8 0zm0 260.1c-69.7 0-126.3-56.5-126.3-126.3S64.1 7.6 133.8 7.6s126.3 56.5 126.3 126.3-56.5 126.2-126.3 126.2z" />
        </g>
        <g
          transform="translate(23.167424080524768, 23.005644693508255) scale(0.5640948322400665)"
          light-content="true"
          non-strokable="false"
          fill={color}
        >
          <path
            d="M50.299 6.573C40.379 16.97 34.043 32.63 33.966 50.181 33.89 67.732 40.088 83.518 49.918 94c-2.85-15.867-.277-33.22 8.136-47.2 2.137-3.551 4.54-6.7 7.144-9.43C62.982 25.116 57.655 14.402 50.3 6.573z"
            color={color}
          />
          <path
            d="M6.181 24.14c-2.92 15.853-.477 33.146 7.875 47.163 8.351 14.017 20.351 21.873 33.206 22.693-9.876-10.44-15.602-26.198-15.602-43.75 0-4.49.406-8.828 1.181-13.018-7.634-8.035-17.058-12.488-26.66-13.089zm87.775.413C60.111 30.71 47.4 65.07 52.304 93.998 86.35 87.84 98.923 53.663 93.956 24.553z"
            color={color}
          />
        </g>
      </g>
    </svg>
  );
};

LogoV2Icon.defaultProps = {
  color: '#ffffff',
  size: 24,
  backgroundColor: '#050505',
};

export default LogoV2Icon;
