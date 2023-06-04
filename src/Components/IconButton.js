import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {ColorPalette} from '../Color';

const StyledIconButton = styled.button(({color, backDropColor}) => ({
  borderRadius: '50%',
  padding: '2px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  color,
  background: 'none',
  '&:hover': {
    backgroundColor: backDropColor,
  },
}));

export function IconButton({color, backDropColor, children, ...props}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledIconButton color={color} backDropColor={backDropColor} {...props}>
      {children}
    </StyledIconButton>
  );
}

IconButton.propTypes = {
  color: PropTypes.string,
  backDropColor: PropTypes.string,
  children: PropTypes.element.isRequired,
};

IconButton.defaultProps = {
  color: ColorPalette.primary.main,
  backDropColor: ColorPalette.primary.backdrop,
};
