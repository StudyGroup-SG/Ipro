import React from 'react';

import { render, screen } from '@testing-library/react';

import ServiceItem from '.';

describe('<ServiceItem/> component test', () => {
  const name = 'serviceName';
  const domain = 'serviceDomain';
  const clientId = 'serviceClientId';

  it('서비스 아이템 정보를 렌더링해야 합니다.', () => {
    render(<ServiceItem name={name} domain={domain} clientId={clientId} />);

    expect(screen.queryByRole('heading', { level: 3 })).toHaveTextContent(name);
    expect(screen.queryByText(domain)).toBeInTheDocument();
    expect(screen.queryByText(`Client ID : ${clientId}`)).toBeInTheDocument();
  });

  it('서비스 아이템 삭제 아이콘을 렌더링해야 합니다.', () => {
    render(<ServiceItem name={name} domain={domain} clientId={clientId} />);

    expect(screen.getByRole('img', { name: 'remove' })).toBeInTheDocument();
  });
});
