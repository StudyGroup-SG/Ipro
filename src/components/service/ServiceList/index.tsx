import React, { FC } from 'react';

import emptyImg from '@/assets/images/empty.png';

import ServiceItem from '../ServiceItem';
import { emptyStyle, headerStyle, listStyle, wrapperStyle } from './style';

type ServiceListProps = {
  serviceList: {
    id: number;
    name: string;
    domain: string | null;
    clientId: string;
  }[];
};

const ServiceList: FC<ServiceListProps> = ({ serviceList }) => {
  return (
    <section css={wrapperStyle}>
      {serviceList && serviceList.length > 0 ? (
        <>
          <h2 css={headerStyle}>Services</h2>
          <div css={listStyle}>
            {serviceList.map((service) => {
              return (
                <ServiceItem
                  key={service.id}
                  name={service.name}
                  domain={service.domain || ''}
                  clientId={service.clientId}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div css={emptyStyle}>
          <img src={emptyImg} alt="empty" />
          <p>There are no services</p>
        </div>
      )}
    </section>
  );
};

export default ServiceList;
