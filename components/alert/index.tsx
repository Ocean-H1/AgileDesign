import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface AlertProps {
  type?: 'info' | 'error' | 'success' | 'warning';
  message: ReactNode;
  size?: 'small' | 'medium' | 'large';
  // closeable?: boolean;
  // showIcon?: boolean;
  // icon?: ReactNode;
  description?: ReactNode;
  // onClose?: (e: MouseEvent) => void;
  // afterClose?: () => void;
}

const prefixCls = 'Agile-alert';
const Alert: React.FC<AlertProps> = ({
  message,
  type = 'info',
  size = 'medium',
  description,
  ...rest
}) => {
  const alertClass = classNames(prefixCls, 
    `${prefixCls}-${type}`,
    `${prefixCls}-${size}`
  )
  return (
    <div className={classNames(alertClass)} {...rest}>
      {message}
      {description && <div className="Agile-alert-desc">{description}</div>}
    </div>
  );
};

export default Alert;
