import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Sidebar from '@/components/nav/Sidebar';

export default {
  title: 'Example/Components',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => {
  return <Sidebar {...args} />;
};

export const SidebarExample: ComponentStory<typeof Sidebar> = Template.bind({});
SidebarExample.args = {
  children: 'Sidebar Contents',
};
