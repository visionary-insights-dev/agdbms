import NextAuth, { NextAuthOptions, DefaultSession, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Extend the built-in session types
declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: {
      id: string;
      role?: string;
    } & DefaultSession["user"]
  }

  interface User {
    id: string;
    email: string;
    name: string;
    role?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials): Promise<User | null> {
        try {
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
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };