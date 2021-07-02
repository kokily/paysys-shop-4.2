import { gql } from '@apollo/react-hooks';

export const TOP_TITLE = gql`
  query TopTitle {
    TopTitle {
      ok
      error
      titles {
        name
        count
      }
    }
  }
`;
