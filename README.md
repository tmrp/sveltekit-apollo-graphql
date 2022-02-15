# SvelteKit Apollo GraphQL Example with create-svelte

A bare-bones [SvelteKit](https://kit.svelte.dev) and [Apollo GraphQL](https://www.apollographql.com) starter.

[Demo link](https://sveltekit-apollo-graphql.netlify.app)

[TypeScript version](https://github.com/tmrp/sveltekit-apollo-graphql-typescript)

## Developing

create a `.env` file in the project root directory and copy over the contents of `.env.example`

Install dependencies with Yarn of NPM:

```bash
yarn

# or

npm install
```

Start development server with:

```bash
yarn dev

# or

npm run dev
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
yarn build

# or

npm run build

```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
