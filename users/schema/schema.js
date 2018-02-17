const graphQL = require('graphql')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphQL

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString},
        firsrName: { type: GraphQLString},
        age: { type: GraphQLInt}
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                }
            }, //required args
            resolve(parentValue, args) {

            } //returns a actual piece of data
        }
    }
})
