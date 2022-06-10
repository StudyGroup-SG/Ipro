import React, { FC } from 'react';

import SideLayout from '@/components/layout/SideLayout';

const FeedbackMessagePage: FC = () => {
  return (
    <SideLayout
      renderSidebar={() => <div>요기에는 채팅 중인 사용자 리스트</div>}
    >
      @TODO
    </SideLayout>
  );
};

export default FeedbackMessagePage;
