import { useEffect, useRef, useState } from 'react';
import { SnackbarStateType, useSnackbarState } from '@/atoms/snackbarState';

const SNACKBAR_ANIMATION_DURATION = 600;
const DEFAULT_SNACKBAR_SHOW_DURATION = 100;

type ShowSnackbarType = Partial<Omit<SnackbarStateType, 'isOpen'>> & {
  duration?: number;
};

const useSnackbar = (
  initialConfig?: ShowSnackbarType,
): {
  showMessage: (message: string, config: ShowSnackbarType) => void;
  setConfig: (config: ShowSnackbarType) => void;
} => {
  const [showDuration, setShowDuration] = useState(
    initialConfig.duration ?? DEFAULT_SNACKBAR_SHOW_DURATION,
  );
  const [snackbarState, setSnackbarState] = useSnackbarState();
  const timer = useRef(null);

  const setConfig = (config: Partial<SnackbarStateType>) =>
    setSnackbarState((prev) => ({ ...prev, ...config }));

  const showMessage = (message: string, config: ShowSnackbarType) => {
    if (config.duration >= 0) {
      setShowDuration(config.duration);
    }
    setConfig({ ...config, message, isOpen: true });
  };

  useEffect(() => {
    const timerDuration = showDuration + SNACKBAR_ANIMATION_DURATION;

    if (timer.current) clearTimeout(timer.current);
    if (!snackbarState.isOpen) return;

    timer.current = setTimeout(
      () => setConfig({ isOpen: false }),
      timerDuration,
    );
  }, [snackbarState, showDuration]);

  useEffect(() => {
    if (initialConfig) setConfig(initialConfig);

    return () => {
      clearTimeout(timer.current);
      setConfig({ isOpen: false });
    };
  }, []);

  return { showMessage, setConfig };
};

export default useSnackbar;
