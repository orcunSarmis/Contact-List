import { gql } from '@apollo/client';

const DELETE_CONTACT = gql`
mutation deleteContact($id: ID!) {
    deleteContact(id: $id) {
        id
        name
        mobile
    }
}
`;

export { DELETE_CONTACT };