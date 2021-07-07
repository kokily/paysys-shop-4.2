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

export const LIST_LAUNCH = gql`
  query ListLaunch {
    ListLaunch {
      ok
      error
      launches {
        title
        native
        name
        price
        count
        amount
        created_at
      }
      salmon {
        count
        amount
      }
      eel {
        count
        amount
      }
      flesh {
        count
        amount
      }
    }
  }
`;
