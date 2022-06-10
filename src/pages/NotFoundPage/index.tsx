import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import Jumbotron from '@/components/common/Jumbotron';
import Uri from '@/constants/uri';
import notFoundImg from '@/assets/images/page-not-found.png';

import { notFoundPageStyle } from './style';

const NotFoundPage: FC = () => {
  return (
    <Layout>
      <div css={notFoundPageStyle}>
        <Link to={Uri.home}>
          <Jumbotron title="Back" />
        </Link>
        <img src={notFoundImg} alt="page-not-found" />
        <p>There are no resources</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
