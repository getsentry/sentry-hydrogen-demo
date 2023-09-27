# Hydrogen with Sentry

This is a demo for getting started with Hydrogen and Sentry. It's based on the Hydrogen's [default template](https://github.com/Shopify/hydrogen/tree/main/templates/skeleton) with TypeScript.


[Sentry Remix SDK Docs](https://docs.sentry.io/platforms/javascript/guides/remix/)

[Hydrogen Docs](https://shopify.dev/custom-storefronts/hydrogen)

[Remix Docs](https://remix.run/docs/en/main)

## Getting started

**Requirements:**

- Node.js version 16.14.0 or higher

**Setup:**

1. `npm install`
2. Place your DSN in `entry.client.tsx` and `entry.server.tsx`

```ts
Sentry.init({
  // TODO: replace with your Sentry DSN
  dsn: 'SENTRY_DSN',
  // ...
});
```
3. Place your Sentry Organization Slug, Project Slug, and Auth Token in `.env`
This is required to create Sentry releases and upload source maps.

```bash
# Sentry Organization Slug (e.g. "my-org")
SENTRY_ORG=""

# Sentry Project Slug (e.g. "my-project")
SENTRY_PROJECT=""

# Sentry Auth Token, found in Settings > API Keys. Must have "project:releases" scope.
SENTRY_AUTH_TOKEN=""
```

## Building for production

```bash
npm run build
```

## Local development

```bash
npm run dev
```
