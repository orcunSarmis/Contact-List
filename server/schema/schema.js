const { contacts } = require('../sampleData');

const { GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLSchema, 
    GraphQLList
} = require('graphql');

const ContactType = new GraphQLObjectType({
    name: 'Contact',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        mobile: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType', 
    fields: {
        contacts: {
            type: new GraphQLList(ContactType),
        },
        contact: {
            type: ContactType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                return contacts.find(contact => contact.id === args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});