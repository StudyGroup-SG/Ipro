import React, { FC } from 'react';

import Layout from '@/components/layout/Layout';
import InduceSignup from '@/components/intro/InduceSignup';
import IntroMain from '@/components/intro/IntroMain';
import IntroWithFeedbacks from '@/components/intro/IntroWithFeedbackSystem';

const HomePage: FC = () => {
  return (
    <Layout>
      <IntroMain />
      <IntroWithFeedbacks />
      <InduceSignup />
    </Layout>
  );
};

export default HomePage;
