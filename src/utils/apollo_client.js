import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
	uri: "https://workable-mammoth-72.hasura.app/v1/graphql",
	headers: {
		"x-hasura-admin-secret":
			"dXDdrGo4z3wM3Pje2PII4c0bZXjlu6mnDsuZHpEJf7c9RN0vIW02iJJMDWx99mXF",
	},
});

const wsLink = new GraphQLWsLink(
	createClient({
		url: "wss://workable-mammoth-72.hasura.app/v1/graphql",
		connectionParams: {
			headers: {
				"x-hasura-admin-secret":
					"dXDdrGo4z3wM3Pje2PII4c0bZXjlu6mnDsuZHpEJf7c9RN0vIW02iJJMDWx99mXF",
			},
		},
	})
);

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache(),
});

export default client;
