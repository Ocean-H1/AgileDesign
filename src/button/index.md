---
title: Button 按钮
group: 
  title: 常规
  order: 1
---
# Button 



## 基本用法
<code src="./demo/basic.tsx"></code>

## API

| 属性 | 说明     | 类型                                         | 默认值 |
| ---- | -------- | -------------------------------------------- | ------ |
| type | 类型 | `primary`\|`dashed`\|`danger`\|`text`\|`link`\|`default` | `default` | |
| disabled | 设置按钮失效状态 | `boolean` | `false` | |
| size | 设置按钮大小 | `small` \| `medium` \| `large` | `medium` | |
| shape | 设置按钮形状 | `circle` \| `round` \| `default`| `default` | |
| ghost | 幽灵属性，使按钮背景透明 | `boolean`| `false` |  |
| icon | 设置按钮的图标组件 | `ReactNode` | - |  |
| iconPosition | 设置按钮图标组件的位置 | `start` \| `end` | `start` |
| styles | 语义化结构 style | `Record<SemanticDOM, CSSProperties>`| - |
| onClick | 点击按钮时的回调 | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | - |  |
| classNames | 语义化结构 class | `Record<SemanticDOM, string>` | - |
<!-- | loading | 设置按钮载入状态 | `boolean` \| `{ delay: number }` | `false` |  | -->