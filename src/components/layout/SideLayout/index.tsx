import React, { FC } from 'react';

import Footer from '@/components/common/Footer';
import Sidebar from '@/components/nav/Sidebar';

import {
  sideLayoutContentStyle,
  sideLayoutStyle,
  sidebarContentStyle,
} from './style';

type SideLayoutProps = {
  children: React.ReactNode;
  renderSidebar?: () => React.ReactNode;
};

const SideLayout: FC<SideLayoutProps> = ({ children, renderSidebar }) => {
  return (
    <div css={sideLayoutStyle}>
      <Sidebar>
        <div css={sidebarContentStyle}>
          <div className="body">{renderSidebar && renderSidebar()}</div>
          <div className="footer">
            {/* @TODO 요 위치에 서비스 리스트 Dropdown을 렌더링해줘야 합니다. */}
            Ipro
          </div>
        </div>
      </Sidebar>

      <div css={sideLayoutContentStyle}>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

SideLayout.defaultProps = {
  renderSidebar: null,
};

export default SideLayout;
