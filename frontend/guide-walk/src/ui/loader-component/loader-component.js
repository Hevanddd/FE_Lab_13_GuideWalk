import React from 'react';
import { SyncLoader } from 'react-spinners';
import { css } from '@emotion/core';

export const LoaderComponent = ({ isLoading }) => {
  const override = css`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 57px;
    background-color: #fff;
    z-index: 100;
    align-items: center;
    justify-content: center;
    display: flex;
  `;
  return <SyncLoader css={override} size={15} color={'#457B9D'} loading={isLoading} />;
};
