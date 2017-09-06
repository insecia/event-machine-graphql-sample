const { buildSchema } = require('graphql');

exports.schema = buildSchema(`
	type User {
		userId: String!
		username: String!
		email: String!
		validated: Boolean!
        ownOrganizations: [Organization]
	}

    type Organization {
        orgaId: String!
        orgaName: String!
        owner: User
        members: [User]
        pendingInvitations: [User]
    }

    type Query {
        userList(validated: Boolean): [User]
        user(userId: String!): User
        organizationList(owner: String): [Organization]
        organization(organizationId: String!): Organization
    }
`);
