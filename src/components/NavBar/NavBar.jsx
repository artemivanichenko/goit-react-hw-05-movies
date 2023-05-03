import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  const navMap = [
    { path: '/', title: 'Home' },
    { path: '/movies', title: 'Movies' },
  ];
  return (
    <SideBar>
      {navMap.map(({ path, title }) => (
        <NavItem key={path} to={path}>
          {title}
        </NavItem>
      ))}
    </SideBar>
  );
};

export default NavBar;
const SideBar = styled.nav`
  background-color: #d5edfd;
  max-height: 30px;
  border-right: 2px solid black;
  display: flex;
  flex-direction: row;
  gap: 25px;
  padding: 10px 20px;
`;
const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  &.active {
    background-color: #8989cf;
    color: white;
  }
  &:hover:not(.active) {
    background-color: lightblue;
  }
`;
