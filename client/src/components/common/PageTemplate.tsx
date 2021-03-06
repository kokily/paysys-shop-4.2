import React from 'react';
import styled from 'styled-components';
import { media } from '../../libs/styles';
import usePageTemplate from './hooks/usePageTemplate';
import Header from './Header';
import BottomNav from './BottomNav';
import Loading from './Loading';

// Styles
const Main = styled.main`
  margin: 6rem 5rem 0rem 5rem;
  ${media.medium} {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

interface Props {
  children: React.ReactNode;
}

const PageTemplate: React.FC<Props> = ({ children }) => {
  const { user, loading, onLogout } = usePageTemplate();

  if (loading) return <Loading />;

  return (
    <>
      {!loading && user && (
        <>
          <Header user={user} onLogout={onLogout} />
          <Main>{children}</Main>
          <BottomNav />
        </>
      )}
    </>
  );
};

export default PageTemplate;
