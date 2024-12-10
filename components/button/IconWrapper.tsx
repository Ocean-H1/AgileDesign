import classNames from 'classnames';
import React from 'react';

export interface IconWrapperProps {
  prefixCls: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const IconWrapper = React.forwardRef<HTMLSpanElement, IconWrapperProps>((props, ref) => {
  const { prefixCls, className, style, children } = props;
  const iconWrapperCls = classNames(`${prefixCls}-icon`, className);
  return (
    <span ref={ref} style={style} className={iconWrapperCls}>
      {children}
    </span>
  );
});

export default IconWrapper;
