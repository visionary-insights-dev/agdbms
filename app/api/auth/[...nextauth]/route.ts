import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Mock user for UI development
        if (credentials?.email === "demo@example.com" && credentials?.password === "demo") {
          return {
            id: "1",
            email: "demo@example.com",
            name: "Demo User",
            role: "ADMIN",
          };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };