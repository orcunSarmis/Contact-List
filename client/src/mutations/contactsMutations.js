import { gql } from '@apollo/client';

const DELETE_CONTACT = gql`
mutation DeleteContact($id: ID!) {
    deleteContact(id: $id) {
        id
        name
        mobile
    }
}
`;

const UPDATE_CONTACT = gql`
mutation UpdateContact(
    $id: ID!
    $name: String!
    $mobile: String! 
) {
    updateContact(
        id: $id
        name: $name
        mobile: $mobile 
    ) {
        id
        name
        mobile
    }
}
`;

export { DELETE_CONTACT, UPDATE_CONTACT };