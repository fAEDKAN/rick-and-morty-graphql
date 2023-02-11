//* CONFIG DEL ENTERNO, PERMITE CONSUMIR CUALQUIER QUERY A PARTIR DE CUALQUIER COMPONENTE QUE ESTEMOS UTILIZANDO

import client from "@/apollo/client";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default App;
