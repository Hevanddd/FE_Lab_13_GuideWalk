import React from 'react';
import { SyncLoader } from 'react-spinners';
import { css } from '@emotion/core';

export const LoaderComponent = ({ isLoading, isLoadingPagination }) => {
  const standartLoader = `
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 48px;
    background-color: #fff;
    z-index: 100;
    align-items: center;
    justify-content: center;
    display: flex;
  `;
  const paginationLoader = `
    position: fixed;
    top: 80vh;
    right: 0;
    left: 0;
    bottom: 48px;
    background-color: #fff;
    z-index: 100;
    align-items: center;
    justify-content: center;
    display: flex;
  `;

  const override = css`
    ${(isLoadingPagination && paginationLoader) || (!isLoadingPagination && standartLoader)}
  `;

  return <SyncLoader css={override} size={15} color={'#457B9D'} loading={isLoading || isLoadingPagination} />;
};
