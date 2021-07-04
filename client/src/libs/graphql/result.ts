import { gql } from '@apollo/react-hooks';

export const TOP_TITLE = gql`
  query TopTitle($start_date: Date!, $end_date: Date!) {
    TopTitle(start_date: $start_date, end_date: $end_date) {
      ok
      error
      titles {
        name
        count
      }
    }
  }
`;
