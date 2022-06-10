import { ReactNode, ReactPortal, useMemo } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: ReactNode;
  elementId: string;
};

const Portal = ({ children, elementId }: PortalProps): ReactPortal => {
  const rootElement = useMemo(
    () => document.getElementById(elementId),
    [elementId],
  );

  return createPortal(children, rootElement);
};

export default Portal;
