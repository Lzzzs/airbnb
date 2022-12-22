import styled from 'styled-components';

export const HeaderLeftrWrapper = styled.div`
  flex: 1;
  color: ${(props) => props.theme.color.primary};
  display: flex;
  align-items: center;

  .logo {
    margin-left: 24px;
    cursor: pointer;
  }
`;
