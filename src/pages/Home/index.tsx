import { Button } from 'antd';

export function meta() {
  return [{ title: 'My App' }, { name: 'description', content: 'Welcome to My App' }];
}

export default function HomePage() {
  return (
    <div>
      <Button>Tada</Button>
    </div>
  );
}
