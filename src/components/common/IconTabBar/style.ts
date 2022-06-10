import { SerializedStyles, Theme, css } from '@emotion/react';

export const tabCurvedBlockStyle = (theme: Theme): SerializedStyles => css`
  display: flex;

  > .curved-block {
    background-color: ${theme.colorPrimary};
    width: 20px;
    height: 20px;

    ::after {
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colorWhite};
    }
  }

  &.not-selected > .curved-block {
    background-color: ${theme.colorWhite};
  }
`;

export const tabItemStyle = css`
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  position: relative;
  text-align: center;
`;

export const tabIconStyle = (theme: Theme): SerializedStyles => css`
  display: inline-block;
  padding: 10px;

  &.selected {
    background-color: ${theme.colorPrimary};

    img {
      filter: brightness(0) invert(1);
    }
  }

  > img {
    width: 35px;
    height: 35px;
  }
`;

const curvedBlockStyleByDirection = css`
  &.top {
    align-items: flex-start;
  }
  &.left {
    align-items: flex-start;
  }

  &.top .curved-block-wrap,
  &.bottom .curved-block-wrap {
    flex-direction: row;
    height: 100%;
  }

  &.left .curved-block-wrap,
  &.right .curved-block-wrap {
    flex-direction: column;
  }

  &.top .curved-block-wrap {
    > .tab-icon {
      border-radius: 0 0 50% 50%;
    }

    > .curved-block {
      &.start::after {
        border-top-right-radius: 20px;
      }

      &.end::after {
        border-top-left-radius: 20px;
      }
    }
  }

  &.right .curved-block-wrap {
    align-items: flex-end;

    > .tab-icon {
      border-radius: 50% 0 0 50%;
    }

    > .curved-block {
      &.start::after {
        border-bottom-right-radius: 20px;
      }

      &.end::after {
        border-top-right-radius: 20px;
      }
    }
  }

  &.bottom .curved-block-wrap {
    align-items: flex-end;

    > .tab-icon {
      border-radius: 50% 50% 0 0;
    }

    > .curved-block {
      &.start::after {
        border-bottom-right-radius: 20px;
      }

      &.end::after {
        border-bottom-left-radius: 20px;
      }
    }
  }

  &.left .curved-block-wrap {
    > .tab-icon {
      border-radius: 0 50% 50% 0;
    }

    > .curved-block {
      &.start::after {
        border-bottom-left-radius: 20px;
      }

      &.end::after {
        border-top-left-radius: 20px;
      }
    }
  }
`;

export const tabBarStyle = (
  theme: Theme,
  isRow: boolean,
): SerializedStyles => css`
  position: relative;
  display: inline-flex;
  overflow: hidden;
  flex-direction: ${isRow ? 'row' : 'column'};

  width: ${isRow ? '100%' : '70px'};
  height: ${isRow ? '70px' : '100%'};
  background-color: ${theme.colorWhite};

  ${curvedBlockStyleByDirection}
`;
