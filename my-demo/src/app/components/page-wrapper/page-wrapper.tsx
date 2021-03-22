import classNames from 'classnames';
import * as React from 'react';
import { FC, ReactNode } from 'react';
import './page-wrapper.scss';

interface IProps {
  extraClass?: string[];
  children: ReactNode;
  // any other props that come into the component
}

const PageWrapper: FC<IProps> = ({ extraClass, children }) => {
  return <div className={classNames('container', extraClass)}>{children}</div>;
};

export default PageWrapper;
