//* CONEXIÓN A LA API

import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";

//Headers para la API
const authLink = setContext(async (_req, { headers }) => {
    return {
        ...headers,
    };
});

//Link de conexión a la API
const uploadLink = createUploadLink({
    uri: "https://rickandmortyapi.com/graphql",
}) as unknown as ApolloLink;

//Creación del cliente de Apollo
const client = new ApolloClient({
    link: authLink.concat(uploadLink),
    cache: new InMemoryCache(),
});

export default client;
