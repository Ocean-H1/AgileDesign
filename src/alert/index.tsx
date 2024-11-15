import React, { ReactNode } from 'react';
import t from 'prop-types';
import { genAlertClass } from './style/index';
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

const Alert: React.FC<AlertProps> = ({
  message,
  type = 'info',
  size = 'medium',
  description,
  ...rest
}) => {
  const alertClass = genAlertClass(size, type);
  return (
    <div className={classNames(alertClass)} {...rest}>
      {message}
      {description && <div className="Agile-alert-desc">{description}</div>}
    </div>
  );
};

Alert.propTypes = {
  type: t.oneOf(['info', 'error', 'success', 'warning']),
  size: t.oneOf(['small', 'medium', 'large']),
  message: t.node.isRequired,
  description: t.node,
};

export default Alert;
