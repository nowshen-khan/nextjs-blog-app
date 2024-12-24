// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				// Replace this with your database logic
				if (
					credentials.email === "test@test.com" &&
					credentials.password === "password"
				) {
					return { id: 1, name: "John Doe", email: "test@test.com" };
				}
				return null;
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET, // Add this in your .env file
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
