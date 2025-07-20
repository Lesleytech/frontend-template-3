import { useAppSelector } from '~/hooks/useAppSelector';
import { getResolvedColorMode } from '~/lib/helpers/ui';

export function useColorMode() {
  const colorMode = useAppSelector((state) => state.ui.colorMode);

  const resolvedColorMode = getResolvedColorMode(colorMode);

  const isLightMode = resolvedColorMode === 'light';
  const isDarkMode = resolvedColorMode === 'dark';
  const isSystem = colorMode === 'system';

  return {
    colorMode,
    resolvedColorMode,
    isLightMode,
    isDarkMode,
    isSystem,
  };
}
