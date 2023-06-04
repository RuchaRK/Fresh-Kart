import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {IconButton} from './IconButton';
import {ColorPalette} from '../Color';

const IconCounterWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const IconCounter = styled.span`
  position: absolute;
  background: ${ColorPalette.primary.main};
  padding: 2px 4px;
  color: white;
  width: fit-content;
  border-radius: 25%;
  top: -5px;
  right: -5px;
  font-size: 12px;
`;

export function IconButtonWithCount({count, children}) {
  return (
    <IconCounterWrapper>
      {count > 0 && <IconCounter>{count}</IconCounter>}
      <IconButton>{children}</IconButton>
    </IconCounterWrapper>
  );
}

IconButtonWithCount.propTypes = {
  count: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};
