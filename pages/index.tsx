import { FC, ReactNode, useCallback, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { NextPage } from 'next';
import Dialog from '../components/Dialog';

type FramerDemoContainerProps = {
  children: ReactNode;
};

const FramerDemoContainer: FC<FramerDemoContainerProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center text-xl font-bold">
      {children}
    </div>
  );
};

const HomePage: NextPage = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const handleClickDialogButton = useCallback(() => {
    setIsOpenDialog(true);
  }, []);

  const handleClickOverlay = useCallback(() => {
    setIsOpenDialog(false);
  }, []);

  return (
    <>
      <FramerDemoContainer>
        <motion.div
          className="flex h-[300px] w-[400px] items-center justify-center rounded-xl border-2 border-black"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
          }}
        >
          Motion Component
        </motion.div>
      </FramerDemoContainer>
      <FramerDemoContainer>
        <button
          type="button"
          onClick={handleClickDialogButton}
          className="h-[48px] w-[320px] rounded-xl border-2 border-black"
        >
          open dialog
        </button>
      </FramerDemoContainer>
      <AnimatePresence>
        {isOpenDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Dialog onClickOverlay={handleClickOverlay}>Dialog</Dialog>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="flex h-[800px] items-center justify-center overflow-hidden rounded-3xl border-2 border-black font-bold"
        initial={{ maxWidth: 0 }}
        whileInView={{ maxWidth: 800 }}
        viewport={{ amount: 0.5 }}
        transition={{ ease: 'easeInOut' }}
      >
        Scroll Trigger
      </motion.div>
    </>
  );
};

export default HomePage;
