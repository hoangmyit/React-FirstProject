import * as React from 'react';
import { ReactNode } from 'react';
import './page-wrapper.scss';

interface IProps {
  children: ReactNode;
  // any other props that come into the component
}

function PageWrapper({ children }: IProps) {
  return <div className="container">{children}</div>;
}

export default PageWrapper;
