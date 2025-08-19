import { environments } from '@constants/environments';
import type { NextAuthOptions } from 'next-auth';
import Auth0 from 'next-auth/providers/auth0';

const auth0Provider = Auth0({
	clientId: environments.auth0.clientId,
	clientSecret: environments.auth0.clientSecret,
	issuer: environments.auth0.domain
});

export const nextAuthOptions: NextAuthOptions = {
	providers: [auth0Provider],
	secret: environments.nextAuthSecret
};
