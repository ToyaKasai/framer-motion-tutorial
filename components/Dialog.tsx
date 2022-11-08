import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClickOverlay: () => void;
};

const Dialog: FC<Props> = ({ children, onClickOverlay }) => {
  return (
    <>
      <div
        onClick={onClickOverlay}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black-30"
      >
        <div className="flex h-96 w-80 items-center justify-center rounded-xl border border-black bg-white">
          {children}
        </div>
      </div>
    </>
  );
};

export default Dialog;
