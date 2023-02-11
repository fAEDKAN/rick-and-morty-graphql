import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
    query {
        characters {
            info {
                count
            }
        }
    }
`;
