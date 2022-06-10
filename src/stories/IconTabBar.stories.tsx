import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconTabBar from '@/components/common/IconTabBar';

import ChatIcon from '@/assets/images/chat-icon.svg';
import SettingIcon from '@/assets/images/setting-icon.svg';

export default {
  title: 'Example/Components',
  component: IconTabBar,
} as ComponentMeta<typeof IconTabBar>;

const Template: ComponentStory<typeof IconTabBar> = (args) => {
  return (
    <IconTabBar {...args}>
      <IconTabBar.TabIcon src={SettingIcon} to="/">
        Settings
      </IconTabBar.TabIcon>
      <IconTabBar.TabIcon src={ChatIcon} to="/feedback">
        Feedback Messages
      </IconTabBar.TabIcon>
      <IconTabBar.TabIcon src={SettingIcon} to="/setting">
        Settings
      </IconTabBar.TabIcon>
    </IconTabBar>
  );
};

export const IconTabBarExample: ComponentStory<typeof IconTabBar> =
  Template.bind({});
