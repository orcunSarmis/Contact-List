// Mongoose models
const Contact = require('../models/Contact');

const { GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLSchema, 
    GraphQLList,
    GraphQLNonNull,
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

// Mutations
const mutation  = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addContact: {
            type: ContactType,
            args: {
                name: { type:  GraphQLNonNull(GraphQLString) },
                mobile: { type:  GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const contact = new Contact({
                    name: args.name,
                    mobile: args.mobile,
                });

                return contact.save();
            },
        },
        // Delete contact
        deleteContact: {
            type: ContactType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return Contact.findByIdAndRemove(args.id);
            },
        },
        // Update contact
        updateContact: {
            type: ContactType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                name: { type:  GraphQLString },
                mobile: { type:  GraphQLString },
            },
            resolve(parent, args) {
                return Contact.findByIdAndUpdate(args.id,
                    {
                        $set: {
                            name: args.name,
                            mobile: args.mobile,
                        },
                    },
                    {new: true}
                );
            },
        },
    },
}) 

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});