import React from 'react';
import classNames from 'classnames';
import { SyncLoader } from 'react-spinners';
import { css } from '@emotion/core';

export const LoaderComponent = ({ isLoading }) => {
  const override = css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #282c34;
    opacity: 0.85;
    z-index: 100;
    align-items: center;
    justify-content: center;
    display: flex;
  `;
  return (
    <div className={classNames('loader-wrapper')}>
      <SyncLoader css={override} size={15} color={'#457B9D'} loading={isLoading} />;
    </div>
  );
};
