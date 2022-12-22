import styled from 'styled-components';

export const HeaderCenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;

  .search-bar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow};

    .text {
      padding: 0 16px;
      color: #222;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${(props) => props.theme.color.primary};
    }
  }
`;
