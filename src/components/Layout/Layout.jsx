import NavBar from 'components/NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <LayuotWrapper>
        <Suspense>
          <Outlet fallback={<h1>Loading...</h1>} />
        </Suspense>
      </LayuotWrapper>
    </>
  );
};

const LayuotWrapper = styled.main`
  display: grid;
  grid-template-columns: 250px 1 fr;
`;
export default Layout;
