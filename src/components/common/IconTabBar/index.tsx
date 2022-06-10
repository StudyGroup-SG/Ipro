import { Theme } from '@emotion/react';
import React, { FC, MouseEventHandler } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import {
  tabBarStyle,
  tabIconStyle,
  tabItemStyle,
  tabCurvedBlockStyle,
} from './style';

type TabItemProps = {
  to?: string;
  onClickHandler?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode | ((selected: boolean) => React.ReactNode);
};

const TabItem: FC<TabItemProps> = ({ children, to, onClickHandler }) => {
  const history = useHistory();
  const location = useLocation();

  const onClickTabItem: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (to) {
      history.push(to);
    }
    if (onClickHandler) {
      onClickHandler(e);
    }
  };

  return (
    <button
      type="button"
      className="tab-item"
      css={tabItemStyle}
      onClick={onClickTabItem}
    >
      {typeof children === 'function'
        ? children(to === location.pathname)
        : children}
    </button>
  );
};

TabItem.defaultProps = {
  to: null,
  onClickHandler: null,
};

type TabIconProps = {
  src: string;
  children?: string;
  selectable?: boolean;
} & Omit<TabItemProps, 'children'>;

const TabIcon: FC<TabIconProps> = ({
  children,
  src,
  to,
  selectable,
  onClickHandler,
}) => {
  return (
    <TabItem to={to} onClickHandler={onClickHandler}>
      {(selected) => (
        <div
          css={tabCurvedBlockStyle}
          className={`curved-block-wrap ${
            !selected || !selectable ? 'not-selected' : ''
          }`}
        >
          <div className="curved-block start" />
          <div
            css={tabIconStyle}
            className={`tab-icon ${selected && selectable ? 'selected' : ''}`}
          >
            <img src={src} alt={children} />
          </div>
          <div className="curved-block end" />
        </div>
      )}
    </TabItem>
  );
};

TabIcon.defaultProps = {
  children: 'icon',
  selectable: true,
};

type IconTabBarProps = {
  direction?: 'top' | 'right' | 'bottom' | 'left';
};

const IconTabBar: FC<IconTabBarProps> & {
  TabIcon: FC<TabIconProps>;
  TabItem: FC<TabItemProps>;
} = ({ children, direction }) => {
  const isRow = direction === 'top' || direction === 'bottom';

  return (
    <div
      className={direction}
      css={(cssTheme: Theme) => tabBarStyle(cssTheme, isRow)}
    >
      {children}
    </div>
  );
};

IconTabBar.defaultProps = {
  direction: 'right',
};

IconTabBar.TabIcon = TabIcon;
IconTabBar.TabItem = TabItem;

export default IconTabBar;
