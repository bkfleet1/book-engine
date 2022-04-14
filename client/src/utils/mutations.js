import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation loginUser ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    adduser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: SavedBookInput) {
    saveBook(input: $input) {
      _id
      username
      bookCount
      savedBooks {
        _id
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
mutation removeBook ($bookId: ID!) {
    removeBook(bookId: $bookId) {
        _id
        username
        bookCount
        savedBooks {
            _id
            bookId
            title
            authors
            description
            image
            link
        }
    }
}
`;
