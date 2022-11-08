import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="flex h-20 w-full items-center justify-end gap-x-8 px-20">
      <Link href="/">PAGE1</Link>
      <Link href="/page2">PAGE2</Link>
    </header>
  );
};

export default Header;
