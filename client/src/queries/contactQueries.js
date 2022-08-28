import { gql } from '@apollo/client';

const GET_CONTACTS =gql`
query getContacts {
    contacts {
        id
        name
        mobile
    }
}
`

export { GET_CONTACTS };