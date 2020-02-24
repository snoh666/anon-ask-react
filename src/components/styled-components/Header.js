import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  padding: .7em .25em;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  & h2 {
    font-weight: lighter;
  }
  & a {
    position: relative;
    text-transform: none;
    color: inherit;
    transition: transform .4s ease;
    padding-bottom: 1px;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      background: ${props => props.theme.fontColor};
      width: 100%;
      height: 1px;
      transform: scaleX(0);
      transform-origin: 50% 50%;

      transition: transform .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    &:hover::after{
      transform: scaleX(1.15);
    }
  }
`;

export default Header;