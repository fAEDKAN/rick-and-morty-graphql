//* MUTATION

import { gql } from "@apollo/client";

export const SET_USER = gql`
    mutation register($input: UserInput!) {
        register(input: $input) {
            email
            id
            fullName
        }
    }
`;
