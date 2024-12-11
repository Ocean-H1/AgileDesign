import React from 'react';
import { CommonShapeType, CommonSizeType } from '../_util/index';
import classNames from 'classnames';
import IconWrapper from './IconWrapper';

export interface BaseButtonProps {
  type?: 'primary' | 'dashed' | 'text' | 'link' | 'danger' | 'default';
  disabled?: boolean;
  shape?: CommonShapeType;
  size?: CommonSizeType;
  // loading?: boolean | { delay: number };
  ghost?: boolean;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  styles?: { icon: React.CSSProperties };
  classNames?: { icon: string };
}

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> & React.ButtonHTMLAttributes<HTMLElement>,
  'type'
>;

export interface ButtonProps extends BaseButtonProps, MergedHTMLAttributes {}
// type loadingConfigType = {
//   loading: boolean;
//   delay: number;
// };
// function getLoadingConfig(loading: ButtonProps['loading']): loadingConfigType {
//   if (typeof loading === 'object' && loading) {
//     let delay = loading?.delay;
//     delay = !Number.isNaN(delay) && typeof delay === 'number' ? delay : 0;
//     return {
//       loading: delay <= 0,
//       delay,
//     };
//   }

//   return {
//     loading: !!loading,
//     delay: 0,
//   };
// }

const prefixCls = 'Agile-button';
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    // loading = false,
    type = 'default',
    size = 'medium',
    shape,
    ghost = false,
    disabled = false,
    onClick,
    className,
    children,
    icon,
    iconPosition = 'end',
    styles,
    classNames: customClassNames,
    ...rest
  } = props;
  // const loadingOrDelay = useMemo(() => getLoadingConfig(loading), [loading]);
  // const [innerLoading, setLoading] = useState<boolean>(loadingOrDelay.loading)

  const mergedType = type || 'default';
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${shape}`]: shape !== 'default' && shape,
    [`${prefixCls}-${mergedType}`]: mergedType,
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-background-ghost`]: ghost,
    [`${prefixCls}-icon-start`]: iconPosition === 'start',
  });

  const iconClass = classNames(customClassNames?.icon);
  const iconStyle: React.CSSProperties = {
    // temp default size for Iconify
    fontSize: '1.2em',
    ...(styles?.icon || {}),
  };
  const iconNode = icon && (
    <IconWrapper prefixCls={prefixCls} style={iconStyle} className={iconClass}>
      {icon}
    </IconWrapper>
  );

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      // if(innerLoading || disabled) {
      //   e.preventDefault()
      //   return
      // }
      if (disabled) {
        e.preventDefault();
        return;
      }
      props.onClick?.(e);
    },
    // [props.onClick, innerLoading, disabled],
    [props.onClick, disabled],
  );

  return (
    <button className={classes} disabled={disabled} {...rest} ref={ref} onClick={handleClick}>
      {children}
      {iconNode}
    </button>
  );
});

export default Button;
