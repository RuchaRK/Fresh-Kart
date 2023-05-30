/* eslint-disable no-unused-vars */
import * as React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {Navbar} from './Navbar';

const PageItem = styled.div`
  padding: 32px 100px;
  background: rgb(246, 246, 244);
  height: calc(100% - 80px);
`;

export function PageWrapper({children}) {
  return (
    <div style={{height: '100%'}}>
      <Navbar />
      <PageItem>{children}</PageItem>
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
