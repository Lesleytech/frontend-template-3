import { Button } from '@heroui/button';

export function meta() {
  return [{ title: 'My App' }, { name: 'description', content: 'Welcome to My App' }];
}

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-7xl text-center my-25">Hello, welcome</h1>
      <div className="flex justify-center">
        <Button isLoading>Click me</Button>
      </div>
    </div>
  );
}
