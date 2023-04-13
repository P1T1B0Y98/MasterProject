import { setContext } from "@apollo/client/link/context"
import { GRAPHQL_URL} from '@env';
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { getToken } from "./containers/Auth";

console.log('GRAPHQL_URL:', GRAPHQL_URL);

const httpLink = new HttpLink({uri: GRAPHQL_URL});
const authLink = setContext(async (_, { headers }) => {
  let accessToken;

  try {
    accessToken = await getToken();
    console.log(accessToken);
  } catch (e) {
    // Ignore error
    console.log("Cannor find access token")
  }

  return ({
    headers: {
      ...headers,
      'Accept-Language': 'en',
      authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  });
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;