import { nextAuthOptions } from '@lib/next-auth/configurations';
import NextAuth from 'next-auth';

const nextAuthHandler = NextAuth(nextAuthOptions);

export { nextAuthHandler as GET, nextAuthHandler as POST };
