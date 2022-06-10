import React, { FC } from 'react';

import { wrapperStyle, titleStyle, descStyle } from './style';

type JumbotronProps = {
  title: string;
  descList?: string[];
};

const Jumbotron: FC<JumbotronProps> = ({ title, descList }) => {
  return (
    <div css={wrapperStyle}>
      <h1 css={titleStyle}>
        <span>{title}</span> to Ipro
      </h1>
      {descList &&
        descList.map((desc) => (
          <p css={descStyle} key={desc}>
            {desc}
          </p>
        ))}
    </div>
  );
};

Jumbotron.defaultProps = {
  descList: null,
};

export default Jumbotron;
