import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { db } from "./lib/db"
import authConfig from "@/auth.config"
import { getUserById } from "./data/user"
import { getIp, getUserData } from "./data/session"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth((req) => ({
  pages: {
    signIn: "/login",
    error: "/error"
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    },
    async signIn({ user }) {
      const ipAddress = getIp();
      const data = getUserData(req!);

      await db.session.create({
        data: {
          userId: user?.id as string,
          ipAddress,
          browser: data.browser,
          os: data.os,
          deviceInfo: data.device,
          userAgent: data.ua
        }
      })
    }
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user?.id as string);

      if (!existingUser?.emailVerified) {
        return false;
      }

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
}))