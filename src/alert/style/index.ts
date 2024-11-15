import { AlertProps } from '..';
import './index.less';

// export type TypeMap = Record<Required<AlertProps>['type'], string>;
// export const types: TypeMap = {
//   error: '#fee2e2',
//   info: '#dbeafe',
//   success: '#dcfce7',
//   warning: '#ffedd5',
// };

type RequiredAlertProps = Required<AlertProps>;
const prefixCls = 'Agile-alert';

const alertSizeClasses: Record<RequiredAlertProps['size'], string> = {
  small: `${prefixCls}-sm`,
  medium: `${prefixCls}-md`,
  large: `${prefixCls}-lg`,
};
const alertTypeClasses: Record<RequiredAlertProps['type'], string> = {
  info: `${prefixCls}-info`,
  error: `${prefixCls}-error`,
  success: `${prefixCls}-success`,
  warning: `${prefixCls}-warning`,
};

const genAlertClass = (size: RequiredAlertProps['size'], type: RequiredAlertProps['type']): string => {
  let baseClass = `${prefixCls} ${alertSizeClasses[size]} ${alertTypeClasses[type]}`
  return baseClass
};

export { genAlertClass };
