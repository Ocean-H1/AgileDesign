import React from 'react';
import { Alert } from 'agile-design';

export default () => (
  <div style={{ display: 'flex', gap: 20, }}>
    <Alert type="info" message="这是一条info" description="这是一条描述信息"></Alert>
    <Alert type="success" message="这是一条success" description="这是一条描述信息"></Alert>
    <Alert type="error" message="这是一条error" description="这是一条描述信息"></Alert>
    <Alert type="warning" message="这是一条warning" description="这是一条描述信息"></Alert>
  </div>
);
