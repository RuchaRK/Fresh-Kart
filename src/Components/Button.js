import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {ColorPalette} from '../Color';

const StyledButton = styled.button(({varient = 'contained', fullWidth}) => {
  const baseCss = {
    padding: '6px 16px',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    width: fullWidth ? '100%' : 'fit-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '36px',
    gap: '4px',
    textDecoration: 'none',
  };

  if (varient === 'outlined')
    return {
      ...baseCss,
      border: `1px solid ${ColorPalette.primary.main}`,
      backgroundColor: 'transparent',
      color: ColorPalette.primary.main,
      '&:disabled': {
        border: `1px solid ${ColorPalette.disabled}`,
        color: ColorPalette.text.disable,
        cursor: 'inherit',
      },
      '&:hover': {
        backgroundColor: ColorPalette.primary.backdrop,
        '&:disabled': {
          backgroundColor: ColorPalette.disabled,
        },
      },
      '&:hover, &:disabled': {
        backgroundColor: 'transparent',
      },
    };

  return {
    ...baseCss,
    backgroundColor: ColorPalette.primary.main,
    color: ColorPalette.text.light,
    border: 'none',
    '&:disabled': {
      backgroundColor: ColorPalette.disabled,
      color: ColorPalette.text.disable,
      cursor: 'inherit',
    },
    '&:hover': {
      backgroundColor: ColorPalette.primary.dark,
      '&:disabled': {
        backgroundColor: ColorPalette.disabled,
      },
    },
  };
});

export function Button({varient, fullWidth, icon, children, ...props}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledButton varient={varient} fullWidth={fullWidth} {...props}>
      {children}
      {icon && icon}
    </StyledButton>
  );
}

Button.propTypes = {
  varient: PropTypes.oneOf(['contained', 'outlined']).isRequired,
  fullWidth: PropTypes.bool,
  icon: PropTypes.element,
  children: PropTypes.element.isRequired,
};

Button.defaultProps = {
  fullWidth: false,
  icon: undefined,
};
