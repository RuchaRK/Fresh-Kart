import styled from '@emotion/styled';
import {ColorPalette} from '../../Color';

export const Container = styled.div`
  margin: auto;
  border: 3px solid ${ColorPalette.primary.dark};
  display: flex;
  width: 360px;
  flex-direction: column;
  align-items:"center":
  min-height: 300px;
  padding: 32px 60px;
  gap: 16px;
`;
