import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import Header from './Header';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{
          duration: 1,
        }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
