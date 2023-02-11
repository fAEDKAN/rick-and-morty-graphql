import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";

//Headers para la API
const authLink = setContext(async (_, { headers }) => {
    const token = await localStorage.getItem("user_token");
    return {
        ...headers,
        headers: {
            Authorization: token ? `Bearer ${token}` : "", //Si la api necesita alguna clave podemos usar ésta config
        },
    };
});

//Link de conexión a la API
const uploadLink = createUploadLink({
    uri: "URL de la api a consumir",
}) as unknown as ApolloLink;

//Creación del cliente de Apollo
const client = new ApolloClient({
    link: authLink.concat(uploadLink),
    cache: new InMemoryCache(),
});

export default client;