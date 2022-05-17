# SSG: Adapting third party templates to Next.js

The main goal of this spike is to create a guide line of how to migrate already built third party templates to a Next.js application.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Migrating third party templates

- Copy all the assets into the folder `./public`.
- Delete the unnecessary assets from the public folder.
- Turn all html markup from `index.html` the template into a `JSX`format. Use a tools like [html-to-jsx](https://transform.tools/html-to-jsx) or similars.
- Place the `JSX` into `pages/index.tsx` 
- Replace the `<head>` tags for `<Head>` the component exposed by `next.js`
- Third party scripts at the bottom of the html should have the attribute `defer`.
- Use the browser console for cleaning up errors.
- Run `next build && next export` for cleaning errors on build time.
- Repeat for any other route on the template. 

At this point the website should fully work at the browser using the development server or from the exported assets. For this propose, the package [serve](https://www.npmjs.com/package/serve) is recommended.

## References

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
