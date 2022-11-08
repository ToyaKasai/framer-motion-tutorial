import { FC, ReactNode } from 'react';
import classNames from 'classnames';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClickOverlay: () => void;
};

const LegacyDialog: FC<Props> = ({ children, isOpen, onClickOverlay }) => {
  return (
    <>
      <div
        onClick={onClickOverlay}
        className={classNames(
          'fixed inset-0 z-50 flex items-center justify-center bg-black-30 transition duration-300',
          { 'visible opacity-100': isOpen, 'invisible opacity-0': !isOpen }
        )}
      >
        <div className="flex h-96 w-80 items-center justify-center rounded-xl border border-black bg-white">
          {children}
        </div>
      </div>
    </>
  );
};

export default LegacyDialog;
