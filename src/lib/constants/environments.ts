export const environments = {
  nextAuthSecret: process.env.AUTH_SECRET || "",
  auth0: {
    domain: process.env.AUTH0_DOMAIN || "",
    clientId: process.env.AUTH0_CLIENT_ID || "",
    clientSecret: process.env.AUTH0_CLIENT_SECRET || "",
  },
} as const;
