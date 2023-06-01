/* eslint-disable no-unused-vars */
import * as React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import {Navbar} from './Navbar';
import {Footer} from './Footer';

const PageItem = styled.div`
  padding: 32px 100px;
  min-height: calc(100vh - 416px);
`;

export function PageWrapper({children}) {
  return (
    <div style={{height: '100%', background: 'rgb(246, 246, 244)'}}>
      <Navbar />
      <PageItem>{children}</PageItem>
      <Footer />
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
