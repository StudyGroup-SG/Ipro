import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Jumbotron from '@/components/common/Jumbotron';

export default {
  title: 'Example/Components',
  component: Jumbotron,
} as ComponentMeta<typeof Jumbotron>;

const Template: ComponentStory<typeof Jumbotron> = (args) => (
  <Jumbotron {...args} />
);

export const JumboTronExample = Template.bind({});
JumboTronExample.args = {
  title: 'Talk',
  descList: [
    '프로젝트를 어떻게 시작해야할지 고민하고 있나요?',
    'Ipro에게 말해보세요',
  ],
};
