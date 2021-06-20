import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    Login(username: $username, password: $password) {
      ok
      error
      token
    }
  }
`;

export const REGISTER = gql`
  mutation Register($username: String!, $password: String!) {
    Register(username: $username, password: $password) {
      ok
      error
    }
  }
`;

export const CHECK_ME = gql`
  query CheckMe {
    CheckMe {
      ok
      error
      me {
        user_id
        username
        admin
      }
    }
  }
`;

export const PASSWORD = gql`
  mutation Password($password: String!) {
    Password(password: $password) {
      ok
      error
    }
  }
`;
