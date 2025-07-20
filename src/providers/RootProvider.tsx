import { HeroUIProvider } from '@heroui/system';
import { type FC, type PropsWithChildren } from 'react';

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default RootProvider;
