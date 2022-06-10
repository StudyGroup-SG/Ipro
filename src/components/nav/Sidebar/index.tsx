import React, { FC } from 'react';

import { useLocation } from 'react-router-dom';
import IconTabBar from '@/components/common/IconTabBar';
import Uri from '@/constants/uri';

import LogoIcon from '@/assets/images/logo.png';
import ChatIcon from '@/assets/images/chat-icon.svg';
import SettingIcon from '@/assets/images/setting-icon.svg';

import { sidebarContentStyle, sidebarStyle } from './style';

const SIDEBAR_HEADINGS = {
  [Uri.feedback]: 'Feedback Messages',
  [Uri.serviceEdit]: 'Settings',
};

const Sidebar: FC = ({ children }) => {
  const location = useLocation();

  return (
    <div css={sidebarStyle}>
      <IconTabBar>
        <IconTabBar.TabIcon src={LogoIcon} to={Uri.service} selectable={false}>
          Logo
        </IconTabBar.TabIcon>
        <IconTabBar.TabIcon src={ChatIcon} to={Uri.feedback}>
          {SIDEBAR_HEADINGS[Uri.feedback]}
        </IconTabBar.TabIcon>
        <IconTabBar.TabIcon src={SettingIcon} to={Uri.serviceEdit}>
          {SIDEBAR_HEADINGS[Uri.serviceEdit]}
        </IconTabBar.TabIcon>
      </IconTabBar>

      <div css={sidebarContentStyle}>
        <h1 className="head">
          {SIDEBAR_HEADINGS[location.pathname] ?? 'Ipro'}
        </h1>
        <div className="body">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
