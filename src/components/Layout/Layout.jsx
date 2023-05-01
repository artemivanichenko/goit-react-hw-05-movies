import { NavBar } from 'components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <LayuotWrapper>
        <Outlet />
      </LayuotWrapper>
    </>
  );
};

const LayuotWrapper = styled.main`
  display: grid;
  grid-template-columns: 250px 1 fr;
`;
