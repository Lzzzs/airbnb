import styled from 'styled-components';

export const SectionTabsWrapper = styled.div`
  display: flex;
  margin: 0px -8px;
  overflow-x: auto;

  .tab {
    border: solid 0.5px #d8d8d8;
    padding: 14px 16px;
    border-radius: 5px;
    height: 48px;
    box-shadow: 0px 1px 2px rgb(0 0 0 / 15%);
    cursor: pointer;
    margin: 8px;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    flex-basis: 120px;
    flex-shrink: 0;

    ${(props) => props.theme.mixin.boxShadow}
  }
  .active {
    background-color: ${(props) => props.theme.color.second};
    color: #fff;
  }
`;
