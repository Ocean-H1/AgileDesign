import React from 'react';
import { Icon as IfyIcon } from '@iconify/react';

export interface IconProps {
  icon: string;
}

/**
 * 暂时使用 Iconify(https://iconify.design/), 后面如有时间精力可考虑替换私有图标库
 * @param icon 图标名称 
 * @returns 
 */
const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  return <IfyIcon icon={icon} {...props}></IfyIcon>;
};

export default Icon;
