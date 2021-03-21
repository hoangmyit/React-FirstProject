import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}

export interface LogoProps extends IconProps {
  backgroundColor?: string;
}
