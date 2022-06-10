import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { useUserState } from '@/atoms/userState';
import useConfirmModal from '@/hooks/useConfirmModal';
import Uri from '@/constants/uri';
import PrivateNavbar from '@/components/nav/PrivateNavbar';
import PublicNavbar from '@/components/nav/PublicNavbar';
import Logo from '@/components/common/Logo';

import { navStyle } from './style';

const Navbar: FC = () => {
  const [user, setUser] = useUserState();
  const [open] = useConfirmModal();

  const logoutHandler = () => {
    const logout = () => setUser(null);
    open({ message: 'Do you want to logout?', acceptHandler: logout });
  };

  return (
    <nav css={navStyle}>
      <Link to={Uri.home}>
        <Logo />
      </Link>

      <div>
        {user ? (
          <PrivateNavbar logoutHandler={logoutHandler} />
        ) : (
          <PublicNavbar />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
