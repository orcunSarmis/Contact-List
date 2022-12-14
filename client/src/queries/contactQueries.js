import { gql } from '@apollo/client';

const GET_CONTACTS =gql`
query GetContacts {
    contacts {
        id
        name
        mobile
    }
}
`;

const GET_CONTACT =gql`
query GetContact {
    contact {
        id
        name
        mobile
    }
}
`;
export { GET_CONTACTS, GET_CONTACT };