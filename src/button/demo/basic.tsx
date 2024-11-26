import React from 'react';
import { Button, Icon } from 'agile-design';
import '../style/index';

const handleClick = (props: MouseEvent) => {
  console.log('click', props.target);
};
export default () => (
  <>
    <div style={{ display: 'flex', gap: 25, marginBottom: '20px' }}>
      <Button>Default</Button>
      <Button
        type="primary"
        icon={<Icon icon="material-symbols:search" />}
        onClick={handleClick}
      >
        Primary
      </Button>
      <Button
        type="dashed"
        icon={<Icon icon="material-symbols:add-reaction" />}
        iconPosition="start"
      >
        Dashed
      </Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
      <Button type="danger">Danger</Button>
    </div>
    <div style={{ display: 'flex', gap: 25 }}>
      <Button ghost>Default(ghost)</Button>
      <Button type="primary" ghost>
        Primary(ghost)
      </Button>
      <Button type="dashed" ghost>
        Dashed(ghost)
      </Button>
      <Button type="text" ghost>
        Text(ghost)
      </Button>
      <Button type="link" ghost>
        Link(ghost)
      </Button>
      <Button type="danger" ghost>
        Danger(ghost)
      </Button>
    </div>
  </>
);
