import { gql } from "@apollo/client";

export const GET_RECIPIES = gql`
    query {
      recipie {
        _id
        name
        ingridients
        process
        country {
            name
        }
        addedBy {
            firstName
            lastName
            email
        }
        spiceLevel
      }
    }
`;

export const LOGIN = gql`
    mutation Login ($email: String!, $password: String!) {
      login (email: $email, password: $password) {
          token
          err
      }
    }
`;

export const SIGNUP = gql`
    mutation Signup (
        $firstName: String!,
        $lastName: String!,
        $email: String!,
        $password: String!,
        $country: String!
    ) {
        signup (
            firstName: $firstName,
            lastName: $lastName,
            email: $email,
            password: $password
            country: $country
        ) {
            _id,
        }
    }
`;

export const ADD_RECIPIE = gql`
    mutation ADD_RECIPIE (
        $name: String!,
        $process: String!,
        $ingridients: [String!],
        $spiceLevel: Float,
        $countryCode: String!
    ) {
        recipie (
            name: $name,
            process: $process,
            ingridients: $ingridients,
            spiceLevel: $spiceLevel,
            countryCode: $countryCode
        ) {
            _id
            name
            process 
            ingridients 
            spiceLevel
            countryCode
            addedBy {
                firstName
                lastName
                email
            }
        }
    }
`;
