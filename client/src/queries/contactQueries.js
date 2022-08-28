import { gql } from '@apollo/client';

const GET_CONTACTS =gql`
query getContacts {
    contacts {
        id
        name
        mobile
    }
}
`;

const GET_CONTACT =gql`
query getContact {
    contact {
        id
        name
        mobile
    }
}
`;
export { GET_CONTACTS, GET_CONTACT };