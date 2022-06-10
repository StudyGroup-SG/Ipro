import React, { FC } from 'react';

import Jumbotron from '@/components/common/Jumbotron';
import Layout from '@/components/layout/Layout';
import ServiceList from '@/components/service/ServiceList';
import Shell from '@/components/shell/Shell';

import { dummy } from './dummyData';
import { servicePageStyle } from './style';

const ServicePage: FC = () => {
  /**
   * FIXME:
   * 가상 API 요청을 위해 만든 코드입니다.
   * 추후 API 연동을 할 때 지워주면 됩니다.
   */
  const requestWhenQueryDone = async () =>
    new Promise((resolve, reject) => {
      setTimeout(
        // () => resolve('Success'),
        () => reject(new Error('Not valid domain. Ipro is great you know?')),
        1000,
      );
    });

  return (
    <Layout>
      <div css={servicePageStyle}>
        <Jumbotron title="Add" />
        <Shell
          type="service"
          requestWhenQueryDone={requestWhenQueryDone}
          width="90%"
          height="200px"
        />
        <ServiceList serviceList={dummy} />
      </div>
    </Layout>
  );
};

export default ServicePage;
