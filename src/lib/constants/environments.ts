export const environments = {
  nextAuth: {
    secret: process.env.AUTH_SECRET || "",
    auth0ClientId: process.env.AUTH_Auth0_CLIENT_ID || "",
    auth0ClientSecret: process.env.AUTH_Auth0_CLIENT_SECRET || "",
  },
} as const;
