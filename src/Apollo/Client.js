import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient ({
    uri: "http://localhost:4005",
    clientState: {
        defaults,
        resolvers
    },
    headers: {
        "Authorizatioin": `Bearer ${localStorage.getItem("token")}`
    }
});