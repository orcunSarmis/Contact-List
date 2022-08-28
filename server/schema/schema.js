const { contacts } = require('../sampleData');

// Mongoose models
const Contact = require('../models/Contact');

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
            resolve(parent, args) {
                return Contact.find();
            },
        },
        contact: {
            type: ContactType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                return Contact.findById(args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});