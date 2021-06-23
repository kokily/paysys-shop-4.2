import { gql } from '@apollo/client';

// Add Reserve API
export const ADD_RESERVE = gql`
  mutation AddReserve($bill_id: ID!, $reserve: Int!) {
    AddReserve(bill_id: $bill_id, reserve: $reserve) {
      ok
      error
    }
  }
`;

// Remove Reserve API
export const REMOVE_RESERVE = gql`
  mutation RemoveReserve($bill_id: ID!) {
    RemoveReserve(bill_id: $bill_id) {
      ok
      error
    }
  }
`;
