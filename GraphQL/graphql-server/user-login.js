import UserLoged from "./mongo/models/user.js"
import Person from "./mongo/models/person.js"
import jwt from "jsonwebtoken"
import { GraphQLError } from "graphql"

const JWT_SEED = "PALABRA_SECRETISIMA_PARA_TOKEN_SEGURO"

export const userTypeDefs = `#graphql
    type UserLoged{
        userName: String!
        friends: [Person]!
        id: ID!
    }

    type Token{
        value: String!
    }

    type Query{
        me: UserLoged
    }

    type Mutation{
        createUser(
            userName:String!
        ): UserLoged

        login(
            userName: String!
            password: String!
        ): Token

        addFriend(
            name: String!
        ): UserLoged
    }

`
export const userResolvers = {
    Query: {
        me: (root, args, contextValue) => {

            return contextValue.currentUser
        }
    },
    Mutation: {
        createUser: (root, args) => {
            const userLoged = new UserLoged({ userName: args.userName })

            return userLoged.save().catch(error => {
                throw new GraphQLError(error.message)
            })
        },

        login: async (root, args) => {
            const userLoged = await UserLoged.findOne({ userName: args.userName })

            if (!userLoged || args.password !== "generalPass") {
                throw new GraphQLError("Wrong credentials", {
                    extensions: {
                        code: 'UNAUTHENTICATED',
                       /*  http: { status: 401 }, */

                    }
                })
            }

            const userForToken = {
                userName: userLoged.userName,
                id: userLoged._id
            }

            return {
                value: jwt.sign(userForToken, JWT_SEED)
            }

        },

        addFriend: async (_, args, contextValue) => {
            const currentUser = contextValue.currentUser
            if (!currentUser) throw new GraphQLError("Tienes que logearte", {
                extensions: {
                    code: 'UNAUTHENTICATED',
                    http: { status: 401 }
                }
            })

            const personToAdd = await Person.findOne({ name: args.name })

            const isFriend = currentUser.friends.find(friend => friend._id === personToAdd._id)
            if (!isFriend) {
                currentUser.friends = currentUser.friends.concat(personToAdd)
            }
            return currentUser.save()

        }

    }
}

export const userContext = async ({ req }) => {
    const auth = req ? req.headers.authorization : null
    if (auth && auth.split(" ")[0].toLowerCase() == "bearer") {
        const token = auth.split(" ")[1]
        const { id } = jwt.verify(token, JWT_SEED)
        const currentUser = await UserLoged.findById(id).populate("friends")
        return { currentUser }
    }

}

