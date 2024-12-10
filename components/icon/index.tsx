import React from 'react';
import { Icon as IfyIcon, IconProps as IfyIconProps } from '@iconify/react';

export interface IconProps extends IfyIconProps {}

const prefixCls = 'Agile-icon'
/**
 * 暂时使用 Iconify(https://iconify.design/), 后面如有时间精力可考虑替换私有图标库
 */
const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  return <IfyIcon icon={icon} className={prefixCls} {...props}></IfyIcon>;
};

export default Icon;
